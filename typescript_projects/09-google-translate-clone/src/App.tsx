import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SectionType, type State } from "./types.d";
import { useTranslate } from "./hooks/useTranslate";
import {
  Button,
  Col,
  Container,
  Form,
  FormText,
  Row,
  Stack,
} from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";

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
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
