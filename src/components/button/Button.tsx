import { buttonStyles } from "./Button.styles";
import { CVAProps } from "src/types";

type Props = CVAProps<"button", typeof buttonStyles>;

export function Button({ intent, className, ...args }: Props) {
  return <button {...args} className={buttonStyles({ intent, className })} />;
}
