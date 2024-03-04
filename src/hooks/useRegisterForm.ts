import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema, SignUpType, signUpSchema } from "@util/signUpSchema";
import { useForm } from "react-hook-form";

export function useRegisterForm(isSignUp: boolean) {
  const methods = useForm<SignUpType>({
    resolver: zodResolver(isSignUp ? signUpSchema : LogInSchema),
  });

  function createUser(data: SignUpType) {
    console.log(data);
    methods.reset();
  }

  function logIn() {
    console.log("Estoy logeando");
    methods.reset();
  }

  return {
    methods,
    logIn,
    createUser,
  };
}
