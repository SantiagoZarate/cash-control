import { PropsWithChildren } from "react";

export function RepeatMovementsTabLayout({ children }: PropsWithChildren) {
  return (
    <div className="group absolute flex w-96 hover:right-0 -right-[340px] bg-black/30 h-full transition-all duration-500">
      <p className="w-12 [writing-mode:vertical-lr] p-2 flex justify-center items-center text-sm tracking-wider uppercase">
        Repeat recent movements
      </p>
      <ul className="h-full w-full flex flex-col gap-4 p-4 bg-black/30 duration-300 transition-all">
        {children}
      </ul>
    </div>
  );
}
