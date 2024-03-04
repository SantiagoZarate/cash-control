import { CardIcon } from "@icon";
import { Form } from "@component";

export function UsernameField() {
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
