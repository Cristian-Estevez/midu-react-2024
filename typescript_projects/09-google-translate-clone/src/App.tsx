import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { SectionType, type State } from "./types.d";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";
import { useEffect } from "react";
import { translate } from "./services/translate";
import { useTranslate } from "./hooks/useTranslate";
import { usedebounce } from "./hooks/useDebounce";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

export default function App() {
  const {
    fromText,
    result,
    fromLanguage,
    toLanguage,
    loading,
    setFromLanguage,
    interchageLanguages,
    setToLanguage,
    setFromText,
    setResult,
  } = useTranslate(initialState);

  const debouncedFromtext = usedebounce(fromText, 300);

  useEffect(() => {
    if (debouncedFromtext.trim() === "") return;

    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result == null) return;
        setResult(result);
      })
      .catch((error) => {
        console.error(error);
        setResult("Error");
      });
  }, [debouncedFromtext, fromLanguage, toLanguage]);

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {});
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result);
    utterance.lang = toLanguage;
    speechSynthesis.speak(utterance);
  };

  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={fromLanguage}
              type={SectionType.From}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchageLanguages}
            variant="link"
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={toLanguage}
              type={SectionType.To}
              onChange={setToLanguage}
            />
            <div style={{ position: "relative" }}>
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  display: "flex",
                }}
              >
                <Button variant="link" onClick={handleClipboard}>
                  <ClipboardIcon />
                </Button>

                <Button variant="link" onClick={handleSpeak}>
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
