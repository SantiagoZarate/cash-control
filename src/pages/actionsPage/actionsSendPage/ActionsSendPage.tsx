import { Button, Form } from "@component";
import { useRegisterForm } from "@hook/useRegisterForm";
import { UsersIcon, MoneyIcon, SendIcon } from "@icon";
import { FormProvider } from "react-hook-form";

export function ActionsSendPage() {
  const { methods } = useRegisterForm(true);

  return (
    <article className="relative flex-1 flex justify-center items-center overflow-hidden">
      <FormProvider {...methods}>
        <Form.Root>
          <Form.Field>
            <Form.Label htmlFor="destinatary">
              <UsersIcon />
              Destinatary
            </Form.Label>
            <Form.Input
              id="destinatary"
              name="2"
              placeholder="thisisafakeemail@gmail.com"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="amount">
              <MoneyIcon />
              Amount
            </Form.Label>
            <input
              id="amount"
              className="bg-transparent text-center text-[80px] outline-border ring-0 placeholder:text-primary-fg border-b border-border"
              type="text"
              placeholder="$0.00"
            />
          </Form.Field>
          <Button className="group" intent={"outline"}>
            <div className="group-hover:-rotate-45 duration-150 transition">
              <SendIcon />
            </div>
            Send
          </Button>
        </Form.Root>
      </FormProvider>

      <div className="group absolute flex w-96 hover:right-0 rounded-tl-3xl rounded-bl-3xl -right-[340px] bg-black/30 h-full transition-all duration-500">
        <p className="w-12 [writing-mode:vertical-lr] p-2 flex justify-center items-center text-sm tracking-wider uppercase">
          Repeat recent movements
        </p>
        <div className="h-full w-full flex flex-col gap-4 p-4 bg-black/30 duration-300 transition-all">
          <div className="bg-card border border-border rounded-lg h-20" />
          <div className="bg-card border border-border rounded-lg h-20" />
        </div>
      </div>
    </article>
  );
}
