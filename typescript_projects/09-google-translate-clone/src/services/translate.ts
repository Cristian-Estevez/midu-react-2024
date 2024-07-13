import { FromLanguage, Language } from "../types";
import { SUPPORTED_LANGUAGES } from "../constants";
import { CohereClient } from "cohere-ai";
import { Message } from "cohere-ai/api";

const cohere = new CohereClient({
  token: import.meta.env.VITE_AI_API_KEY,
});

export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}) {
  if (fromLanguage === toLanguage) return text;

  const messages: Message[] = [
    {
      role: "SYSTEM",
      message:
        'You are an AI that translates text from different laguages. You will receive a text. Do not interpret the text only limit yourself to translating it. Yo will receive the original language surounded by `{{` and `}}` in case you receive the original language with the message "auto", you have to detect the language from the text entered. You will also receive a second language to which the text will be traslated to, surrounded by `[[` and `]]`. Be extremely precise. Do not return text if the input is incomplete.',
    },
    {
      role: "USER",
      message: "Hola mundo {{Español}} [[English]]",
    },
    {
      role: "CHATBOT",
      message: "Hello world",
    },
    {
      role: "USER",
      message: "How are you? {{auto}} [[español]]",
    },
    {
      role: "CHATBOT",
      message: "¿Como estás?",
    },
  ];

  const fromCode =
    fromLanguage === "auto" ? "auto" : SUPPORTED_LANGUAGES[fromLanguage];
  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  const response = await cohere.chat({
    chatHistory: messages,
    message: `${text}, {{${fromCode}}} [[${toCode}]]`,
  });

  return response.text;
}
