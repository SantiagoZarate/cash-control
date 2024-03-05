import { Loader } from "@component";
import "./RecentMovement.styles.css";

export function RecentMovementsLoader() {
  return (
    <div
      id="recent-movement-loader"
      className="relative overflow-hidden min-h-[50vh] flex items-center justify-center bg-card"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-fit">
          <Loader />
        </div>
        <p className="text-xs capitalize">lets see what we've got here...</p>
      </div>
      <div className="absolute pointer-events-none inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
