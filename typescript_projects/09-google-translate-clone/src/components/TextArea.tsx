import { Form } from "react-bootstrap";
import { ChangeEvent, FC } from "react";
import { SectionType } from "../types.d";

type Props = {
  type: SectionType;
  onChange: (value: string) => void;
  value: string;
  loading?: boolean;
};

const commonStyles = { border: 0, height: "200px", Resize: "none" };

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Introducir texto";
  if (loading) return "Cargando...";
  return "Traducción";
};

export const TextArea: FC<Props> = ({ loading, type, value, onChange }) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
