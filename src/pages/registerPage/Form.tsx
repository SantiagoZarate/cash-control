import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardIcon, EnvelopeIcon, KeyIcon } from "@icon";
import { Button, Form, Heading, Text } from "@component";
import { LogInSchema, SignUpType, signUpSchema } from "@util/signUpSchema";

type Props = {
  isSignUp: boolean;
};

export function RegisterForm({ isSignUp }: Props) {
  const actions = isSignUp
    ? {
        resolver: signUpSchema,
        formAction: handleCreateUser,
        text: (
          <p>
            First time here?<Text>sign up!</Text>
          </p>
        ),
      }
    : {
        resolver: LogInSchema,
        formAction: handleLogIn,
        text: (
          <p>
            is nice to have you back<Text>log in!</Text>
          </p>
        ),
      };

  const methods = useForm<SignUpType>({
    resolver: zodResolver(actions.resolver),
  });
  const { reset, handleSubmit } = methods;

  function handleCreateUser(data: SignUpType) {
    console.log(data);
    reset();
  }

  function handleLogIn() {
    console.log("Estoy logeando");
    reset();
  }

  return (
    <>
      <section className="flex flex-col gap-12 items-center">
        <Heading>{actions.text}</Heading>
        <FormProvider {...methods}>
          <Form.Root onSubmit={handleSubmit(actions.formAction)}>
            <Form.Field>
              <Form.Label htmlFor="username">
                <CardIcon />
                username
              </Form.Label>
              <Form.Input
                id="username"
                name="username"
                placeholder="LionelMessi10"
              />
              <Form.ErrorMessage name="username" />
            </Form.Field>
            {isSignUp && (
              <Form.Field key={"email"}>
                <Form.Label htmlFor="email">
                  <EnvelopeIcon />
                  email
                </Form.Label>
                <Form.Input
                  id="email"
                  name="email"
                  placeholder="messilionel@gmail.com"
                />
                <Form.ErrorMessage name="email" />
              </Form.Field>
            )}
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
            <Button intent={"outline"}>Sign up</Button>
          </Form.Root>
        </FormProvider>
      </section>
    </>
  );
}
