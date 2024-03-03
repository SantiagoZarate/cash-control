import { SignUpForm } from "./SignUpForm";

export function LeftSide() {
  return (
    <article className="flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg">
            First time here?<span className="text-accent"> sign up!</span>
          </h3>
          <a href="#" className="text-xs text-border">
            click here if you just wanna see the rest of the app lol...
          </a>
        </header>
        <SignUpForm />
      </div>
    </article>
  );
}
