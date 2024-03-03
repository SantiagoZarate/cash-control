import { Button, Form } from "@component";
import { CardIcon, EnvelopeIcon } from "@icon";

export function LeftSide() {
  return (
    <article className="flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg">
            First time here?<span className="text-accent"> sign up!</span>
          </h3>
          <a className="text-xs text-border">
            click here if you just wanna see the rest of the app lol...
          </a>
        </header>
        <Form.Root>
          <Form.Field>
            <Form.Label>
              <CardIcon />
              username
            </Form.Label>
            <Form.Input placeholder="LionelMessi10" />
          </Form.Field>
          <Form.Field>
            <Form.Label>
              <EnvelopeIcon />
              email
            </Form.Label>
            <Form.Input placeholder="messilionel@gmail.com" />
          </Form.Field>
          <Button>Sign up</Button>
        </Form.Root>
      </div>
    </article>
  );
}
