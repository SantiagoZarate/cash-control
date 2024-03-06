import { Badge } from "@component";

type Props = {
  isCompleted: boolean;
};

export function TableStatus({ isCompleted }: Props) {
  return isCompleted ? (
    <Badge intention={"completed"} />
  ) : (
    <Badge intention={"canceled"} />
  );
}
