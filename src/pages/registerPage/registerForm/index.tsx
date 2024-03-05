import { useRegisterForm } from "@hook/useRegisterForm";
import { Button, Form, Heading, Loader } from "@component";
import { FormProvider } from "react-hook-form";
import { UsernameField } from "./UsernameField";
import { PasswordField } from "./PasswordField";
import { SignUpHeader } from "./SignUpHeader";
import { LogInHeader } from "./LogInHeader";
import { EmailField } from "./EmailField";
import React from "react";

const UsernameFieldMemo = React.memo(UsernameField);
const PasswordFieldMemo = React.memo(PasswordField);

type Props = {
  isSignUp: boolean;
};

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
          {isSignUp && <EmailField />}
          <PasswordFieldMemo />
          {!isPending ? <Button intent={"outline"}>Send</Button> : <Loader />}
        </Form.Root>
      </FormProvider>
    </section>
  );
}
