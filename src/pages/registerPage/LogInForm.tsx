import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardIcon, EnvelopeIcon } from "@icon";
import { Button, Form } from "@component";
import { LogInSchema, LogInType } from "@util/signUpSchema";

export function LogInForm() {
  const methods = useForm<LogInType>({
    resolver: zodResolver(LogInSchema),
  });
  const { reset, handleSubmit } = methods;

  const handleCreateUser = (data: LogInType) => {
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
            password
          </Form.Label>
          <Form.Input name="password" placeholder="messilionel@gmail.com" />
          <Form.ErrorMessage name="password" />
        </Form.Field>
        <Button>Sign up</Button>
      </Form.Root>
    </FormProvider>
  );
}
