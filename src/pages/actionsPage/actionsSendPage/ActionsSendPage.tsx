import { Button, Form } from "@component";
import { movementsSend } from "@data/movements";
import { useRegisterForm } from "@hook/useRegisterForm";
import { UsersIcon, MoneyIcon, SendIcon } from "@icon";
import { Movement } from "@type";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";

export function ActionsSendPage() {
  const { methods } = useRegisterForm(true);
  const [movements] = useState<Movement[]>(movementsSend);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  });

  const handleRepeatTransaction = (index: number) => {
    console.log(movements![index]);
  };

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
        <ul className="h-full w-full flex flex-col gap-4 p-4 bg-black/30 duration-300 transition-all">
          {isLoading ? (
            <div className="bg-card border border-border rounded-lg h-20 animate-pulse" />
          ) : (
            movements?.map((mov, index) => (
              <button
                onClick={() => handleRepeatTransaction(index)}
                className="bg-card min-w justify-between flex gap-4 p-2 items-center border border-border rounded-lg hover:-translate-y-1 duration-150 transition-transform hover:opacity-70"
              >
                <div className="flex gap-2 items-center">
                  <picture>
                    <img
                      className="size-12 rounded-full"
                      src={mov.partner.pfp}
                      alt=""
                    />
                  </picture>
                  <article className="flex-1 flex-col">
                    <p className="capitalize text-sm">{mov.partner.username}</p>
                    <p className="text-start text-xs capitalize text-border-active">
                      {mov.partner.country}
                    </p>
                  </article>
                </div>
                <div className="font-bold flex gap-1">
                  <span className="text-accent">${mov.amount}</span>
                  USD
                </div>
              </button>
            ))
          )}
        </ul>
      </div>
    </article>
  );
}
