import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardIcon, EnvelopeIcon } from "@icon";
import { Button, Form } from "@component";
import { z } from "zod";

const signUpSchema = z.object({
  username: z
    .string()
    .trim()
    .min(6, "name must have at least 5 letters")
    .max(12, "name must have less than 12 characters"),
  email: z
    .string()
    .email("invalid email format")
    .refine(
      (email) => email.endsWith("@gmail.com"),
      "email must use a gmail domain"
    ),
});

export type SignUpType = z.infer<typeof signUpSchema>;

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
        <Button>Sign up</Button>
      </Form.Root>
    </FormProvider>
  );
}
