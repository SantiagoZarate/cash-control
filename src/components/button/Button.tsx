import { CVAProps } from "@type";
import { buttonStyles } from "./Button.styles";

type Props = CVAProps<"button", typeof buttonStyles>;

export function Button({ intent, className, ...args }: Props) {
  return <button {...args} className={buttonStyles({ intent, className })} />;
}
