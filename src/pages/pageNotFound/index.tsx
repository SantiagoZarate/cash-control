import { Badge } from "@component";
import { InformationIcon, SadFaceIcon } from "@icon";

export function PageNotFound() {
  return (
    <section className="min-h-screen text-primary bg-background flex flex-col gap-8 justify-center items-center">
      <h1 className="text-[80px] uppercase flex items-center gap-2 ">
        Page not found
        <SadFaceIcon className="w-24" />
      </h1>
      <a href="/">
        <Badge>
          <InformationIcon />
          go to the homepage
        </Badge>
      </a>
    </section>
  );
}
