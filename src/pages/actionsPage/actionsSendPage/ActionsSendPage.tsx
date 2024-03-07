import { Button, Form } from "@component";
import { movementsSend } from "@data/movements";
import { useForm } from "react-hook-form";
import { UsersIcon, MoneyIcon, SendIcon } from "@icon";
import { Movement } from "@type";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RepeatMovementsTab } from "./RepeatMovementsTab";

const sendMovementSchema = z.object({
  amount: z.coerce.number().min(0.5),
  username: z.string(),
});

type SendMovement = z.infer<typeof sendMovementSchema>;

export function ActionsSendPage() {
  const methods = useForm<SendMovement>({
    resolver: zodResolver(sendMovementSchema),
  });
  const [movements] = useState<Movement[]>(movementsSend);
  const { setValue, register } = methods;

  const handleRepeatTransaction = (index: number) => {
    const { amount, partner } = movements![index];
    setValue("amount", amount);
    setValue("username", partner.username);
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
              name="username"
              placeholder="lionel messi"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="amount">
              <MoneyIcon />
              Amount
            </Form.Label>
            <input
              {...register("amount")}
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

      <RepeatMovementsTab
        onSelectCard={handleRepeatTransaction}
        movements={movements}
      />
    </article>
  );
}
