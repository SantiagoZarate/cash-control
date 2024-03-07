import { RecentMovCard } from "./RepeatMovCard";
import { RecentMovLoaderCards } from "./RepeatMovLoaderCards";
import { useState, useEffect } from "react";
import { RepeatMovementsTabLayout } from "./RepeatMovementsTabLayout";
import { Movement } from "@type";

type Props = {
  onSelectCard: (index: number) => void;
  movements: Movement[];
};

export function RepeatMovementsTab({ onSelectCard, movements }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <RepeatMovementsTabLayout>
      {isLoading ? (
        <RecentMovLoaderCards />
      ) : (
        movements?.map((mov, index) => (
          <RecentMovCard
            key={index}
            amount={mov.amount}
            country={mov.partner.country}
            pfp={mov.partner.pfp}
            username={mov.partner.username}
            onSelectCard={() => onSelectCard(index)}
          />
        ))
      )}
    </RepeatMovementsTabLayout>
  );
}
