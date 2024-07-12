import { Form } from "react-bootstrap";
import { FromLanguage, Language, SectionType } from "../types";
import { FC } from "react";

interface CommonProps {
  onChange: (value: string) => void;
  value: string;
}

type Props =
  | (CommonProps & { type: SectionType.From; loading?: undefined })
  | { type: SectionType.To; loading?: undefined };

export const TextArea: FC<Props> = ({ loading, type, value, onChange }) => {
  return (
    <Form.Control
      as="textarea"
      placeholder="Traducción"
      style={{ height: "150px" }}
      disabled
    />
  );
};
