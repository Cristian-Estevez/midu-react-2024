import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { type State } from "./types";
import { useTranslate } from "./hooks/useTranslate";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/icons";

const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

export default function App() {
  const { fromLanguage, toLanguage, interchageLanguages } =
    useTranslate(initialState);
  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchageLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}
