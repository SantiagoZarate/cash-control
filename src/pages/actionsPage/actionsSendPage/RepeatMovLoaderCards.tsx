export function RecentMovLoaderCards() {
  return Array.from("abc").map((i) => (
    <div
      key={i}
      className="bg-card border border-border rounded-lg min-h-[66px] animate-pulse"
    />
  ));
}
