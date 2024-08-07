import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("App works as expected", async () => {
  const app = render(<App />);

  const user = userEvent.setup();

  const textareaFrom = app.getByPlaceholderText("Introducir texto");
  await user.type(textareaFrom, "Hola mundo");

  const result = await app.findByDisplayValue(
    /Hello world/i,
    {},
    { timeout: 2000 },
  );
  expect(result).toBeTruthy;
});
