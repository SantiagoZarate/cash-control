import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { LogInForm } from "./LogInForm";
import { Badge, Button } from "@component";

export function LeftSide() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <article className="flex items-center flex-col justify-center gap-12 flex-wrap px-8">
      <div className="flex gap-2 bg-card px-2 py-2 rounded-full border border-border">
        <Button onClick={() => setShowSignUp(true)}>Sign Up</Button>
        <Button onClick={() => setShowSignUp(false)}>Log in</Button>
      </div>
      <div className="flex flex-col gap-12 items-center">
        {showSignUp ? <SignUpForm /> : <LogInForm />}
      </div>
      <Badge>
        <a href="#" className="text-border-active">
          click here if you just wanna see the rest of the app lol...
        </a>
      </Badge>
    </article>
  );
}
