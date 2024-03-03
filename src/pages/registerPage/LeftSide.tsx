import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { LogInForm } from "./LogInForm";

export function LeftSide() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <article className="flex items-center flex-col gap-20 flex-wrap justify-center px-8">
      <button onClick={() => setShowSignUp(!showSignUp)}>toggle</button>
      <div className="flex flex-col gap-12">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg">
            First time here?<span className="text-accent"> sign up!</span>
          </h3>
        </header>
        {showSignUp ? <SignUpForm /> : <LogInForm />}
      </div>
      <a href="#" className="text-xs text-border">
        click here if you just wanna see the rest of the app lol...
      </a>
    </article>
  );
}
