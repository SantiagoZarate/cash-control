import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema, SignUpType, signUpSchema } from "@util/registerSchema";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { tasks } from "../api/user/tasks";

export function useRegisterForm(isSignUp: boolean) {
  const methods = useForm<SignUpType>({
    resolver: zodResolver(isSignUp ? signUpSchema : LogInSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: tasks.getUser,
  });

  function createUser(data: SignUpType) {
    console.log(data);
    methods.reset();
  }

  function logIn() {
    console.log("Estoy logeando");
    mutate();
    methods.reset();
  }

  return {
    methods,
    logIn,
    createUser,
    isPending,
  };
}
