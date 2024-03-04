import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardIcon, EnvelopeIcon, KeyIcon } from "@icon";
import { Button, Form, Heading, Text } from "@component";
import { SignUpType, signUpSchema } from "@util/signUpSchema";

export function SignUpForm() {
  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });
  const { reset, handleSubmit } = methods;

  const handleCreateUser = () => {
    console.log("estoy creando una nueva cuenta");
    reset();
  };

  return (
    <>
      <Heading>
        First time here?<Text>sign up!</Text>
      </Heading>
      <FormProvider {...methods}>
        <Form.Root onSubmit={handleSubmit(handleCreateUser)}>
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
          {true && (
            <Form.Field>
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
          <Form.Field>
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
    </>
  );
}
