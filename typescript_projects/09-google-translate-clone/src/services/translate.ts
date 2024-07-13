import { FromLanguage, Language } from "../types";
import OpenAI from "openai";
import { SUPPORTED_LANGUAGES } from "../constants";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openAi = new OpenAI({
  apiKey: import.meta.env.VITE_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
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

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        'You are an AI that translates text from different laguages. You will receive a text. Do not interpret the text only limit yourself to translating it. Yo will receive the original language surounded by `{{` and `}}` in case you receive the original language with the content "auto", you have to detect the language from the text entered. You will also receive a second language to which the text will be traslated to, surrounded by `[[` and `]]`. ',
    },
    {
      role: "system",
      content: "Hola mundo {{Español}} [[English]]",
    },
    {
      role: "assistant",
      content: "Hello world",
    },
    {
      role: "user",
      content: "How are you? {{auto}} [[español]]",
    },
    {
      role: "assistant",
      content: "¿Como estás?",
    },
  ];

  const fromCode =
    fromLanguage === "auto" ? "auto" : SUPPORTED_LANGUAGES[fromLanguage];
  const toCode = SUPPORTED_LANGUAGES[toLanguage];

  const completion = await openAi.chat.completions.create({
    messages: [
      ...messages,
      {
        role: "user",
        content: `${text}, {{${fromCode}}} [[${toCode}]]`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0]?.message?.content;
}
