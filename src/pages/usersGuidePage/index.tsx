import { Button } from "@component";
import { Link } from "react-router-dom";

export function UsersGuidePage() {
  return (
    <section className="min-h-screen gap-12 bg-background px-20 text-primary flex flex-col justify-center items-center">
      <h4 className="text-center text-[80px]">
        users guide, still in development lmao
      </h4>
      <Link to={"/home"}>
        <Button>go to the gome</Button>
      </Link>
    </section>
  );
}
