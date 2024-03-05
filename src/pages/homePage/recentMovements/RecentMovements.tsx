import { useEffect, useState } from "react";
import { RecentMovementsLoader } from "./RecentMovementsLoader";
import { RecentMovementNoResults } from "./RecentMovementNoResults";

export function RecentMovements() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMovements] = useState(false);

  // Development purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) return <RecentMovementsLoader />;

  if (!hasMovements) return <RecentMovementNoResults />;

  return (
    <section className="p-20 flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h4 className="text-primary-fg tracking-wide text-xl font-bold capitalize">
          recent movements
        </h4>
        <p className="text-sm">Your last 5 transactions</p>
      </header>
    </section>
  );
}
