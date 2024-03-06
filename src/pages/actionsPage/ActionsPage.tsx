// import { Button, Form } from "@component";
// import { useRegisterForm } from "@hook/useRegisterForm";
// import { MoneyIcon, SendIcon, UsersIcon } from "@icon";
// import { FormProvider } from "react-hook-form";

// export function ActionsPage() {
//   const { methods } = useRegisterForm(true);

//   return (
//     <section className="relative  min-h-screen max-w-[1440px] mx-auto flex gap-8">
//       <img
//         draggable={false}
//         className="absolute w-full h-full top-0 opacity-50 object-cover pointer-events-none"
//         src="/images/light-2.webp"
//         alt=""
//       />
//       <article className="flex-1 flex justify-center items-center">
//         <FormProvider {...methods}>
//           <Form.Root>
//             <Form.Field>
//               <Form.Label htmlFor="destinatary">
//                 <UsersIcon />
//                 Destinatary
//               </Form.Label>
//               <Form.Input
//                 id="destinatary"
//                 name="2"
//                 placeholder="thisisafakeemail@gmail.com"
//               />
//             </Form.Field>
//             <Form.Field>
//               <Form.Label htmlFor="amount">
//                 <MoneyIcon />
//                 Amount
//               </Form.Label>
//               <input
//                 id="amount"
//                 className="bg-transparent text-center text-[80px] outline-border ring-0 placeholder:text-primary-fg border-b border-border"
//                 type="text"
//                 placeholder="$0.00"
//               />
//             </Form.Field>
//             <Button className="group" intent={"outline"}>
//               <div className="group-hover:-rotate-45 duration-150 transition">
//                 <SendIcon />
//               </div>
//               Send
//             </Button>
//           </Form.Root>
//         </FormProvider>
//       </article>

//     </section>
//   );
// }
