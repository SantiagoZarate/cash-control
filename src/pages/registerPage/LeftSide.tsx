import { useState } from "react";
import { Badge, Button } from "@component";
import { RegisterForm } from "./registerForm";

export function LeftSide() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <article className="flex items-center flex-col justify-center gap-12 flex-wrap px-8">
      <div className="flex gap-2 bg-card px-2 py-2 rounded-full border border-border">
        <Button disabled={!showSignUp} onClick={() => setShowSignUp(true)}>
          Sign Up
        </Button>
        <Button disabled={showSignUp} onClick={() => setShowSignUp(false)}>
          Log in
        </Button>
      </div>
      <RegisterForm isSignUp={showSignUp} />
      <Badge>
        <a href="#" className="text-border-active">
          click here if you just wanna see the rest of the app lol...
        </a>
      </Badge>
    </article>
  );
}
