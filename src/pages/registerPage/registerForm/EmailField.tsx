import { EnvelopeIcon } from "@icon";
import { Form } from "@component";

export function EmailField() {
  return (
    <Form.Field key={"email"}>
      <Form.Label htmlFor="email">
        <EnvelopeIcon />
        email
      </Form.Label>
      <Form.Input id="email" name="email" placeholder="messilionel@gmail.com" />
      <Form.ErrorMessage name="email" />
    </Form.Field>
  );
}
