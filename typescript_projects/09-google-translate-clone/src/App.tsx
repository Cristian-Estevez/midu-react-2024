import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SectionType, type State } from "./types.d";
import { useTranslate } from "./hooks/useTranslate";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/icons";
import { LanguageSelector } from "./components/LanguageSelector";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

export default function App() {
  const {
    fromLanguage,
    setFromLanguage,
    interchageLanguages,
    setToLanguage,
    toLanguage,
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
            <Form.Control
              as="textarea"
              placeholder="Introducir texto"
              autoFocus
              style={{ height: "150px" }}
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
            <Form.Control
              as="textarea"
              placeholder="Traducción"
              style={{ height: "150px" }}
              disabled
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
