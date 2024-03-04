import { KeyIcon } from "@icon";
import { Form } from "@component";

export function PasswordField() {
  return (
    <Form.Field key={"password"}>
      <Form.Label htmlFor="password">
        <KeyIcon />
        password
      </Form.Label>
      <Form.Input
        id="password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Form.ErrorMessage name="password" />
    </Form.Field>
  );
}
