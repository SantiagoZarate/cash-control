import { useRegisterForm } from "../../../hooks/useRegisterForm";
import { Button, Form, Heading } from "@component";
import { FormProvider } from "react-hook-form";
import { UsernameField } from "./UsernameField";
import { EmialField } from "./EmialField";
import { PasswordField } from "./PasswordField";
import { SignUpHeader } from "./SignUpHeader";
import { LogInHeader } from "./LogInHeader";
import React from "react";

type Props = {
  isSignUp: boolean;
};
const UsernameFieldMemo = React.memo(UsernameField);
const PasswordFieldMemo = React.memo(PasswordField);

export function RegisterForm({ isSignUp }: Props) {
  const { createUser, logIn, methods, isPending } = useRegisterForm(isSignUp);

  return (
    <section className="flex flex-col gap-12 items-center">
      <Heading>{isSignUp ? <SignUpHeader /> : <LogInHeader />}</Heading>
      <FormProvider {...methods}>
        <Form.Root
          onSubmit={methods.handleSubmit(isSignUp ? createUser : logIn)}
        >
          <UsernameFieldMemo />
          {isSignUp && <EmialField />}
          <PasswordFieldMemo />
          <Button intent={"outline"}>{isPending ? "Loading" : "Send"}</Button>
        </Form.Root>
      </FormProvider>
    </section>
  );
}
