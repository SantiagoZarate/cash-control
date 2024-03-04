import { CardIcon } from "@icon";
import { Form } from "@component";
import { useEffect } from "react";

export function UsernameField() {
  useEffect(() => {
    console.log("Renderizando username field");
  });

  return (
    <Form.Field>
      <Form.Label htmlFor="username">
        <CardIcon />
        username
      </Form.Label>
      <Form.Input id="username" name="username" placeholder="LionelMessi10" />
      <Form.ErrorMessage name="username" />
    </Form.Field>
  );
}
