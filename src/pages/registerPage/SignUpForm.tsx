import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardIcon, EnvelopeIcon } from "@icon";
import { Button, Form, Heading, Text } from "@component";
import { SignUpType, signUpSchema } from "@util/signUpSchema";

export function SignUpForm() {
  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });
  const { reset, handleSubmit } = methods;

  const handleCreateUser = (data: SignUpType) => {
    console.log(data);
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
            <Form.Label>
              <CardIcon />
              username
            </Form.Label>
            <Form.Input name="username" placeholder="LionelMessi10" />
            <Form.ErrorMessage name="username" />
          </Form.Field>
          <Form.Field>
            <Form.Label>
              <EnvelopeIcon />
              email
            </Form.Label>
            <Form.Input name="email" placeholder="messilionel@gmail.com" />
            <Form.ErrorMessage name="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label>
              <CardIcon />
              password
            </Form.Label>
            <Form.Input
              type="password"
              name="username"
              placeholder="********"
            />
            <Form.ErrorMessage name="username" />
          </Form.Field>
          <Button>Sign up</Button>
        </Form.Root>
      </FormProvider>
    </>
  );
}
