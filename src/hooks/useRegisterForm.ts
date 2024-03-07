import { zodResolver } from "@hookform/resolvers/zod";
import { LogInSchema, SignUpType, signUpSchema } from "@helper/registerSchema";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { tasks } from "../api/user/tasks";
import { useNavigate } from "react-router-dom";

export function useRegisterForm(isSignUp: boolean) {
  const navigate = useNavigate();
  const methods = useForm<SignUpType>({
    resolver: zodResolver(isSignUp ? signUpSchema : LogInSchema),
  });
  const { isPending } = useMutation({
    mutationFn: tasks.getUser,
  });

  function createUser(data: SignUpType) {
    console.log(data);
    methods.reset();
  }

  function logIn(data: Omit<SignUpType, "email">) {
    tasks.getUser().then((res) => {
      const { password, username } = res.users[0];
      if (data.password === password && data.username === username) {
        navigate("/guide");
      }
    });
    methods.reset();
  }

  return {
    methods,
    logIn,
    createUser,
    isPending,
  };
}
