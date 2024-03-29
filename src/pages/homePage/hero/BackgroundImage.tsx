export function BackgroundImage() {
  return (
    <picture className="absolute top-0 z-20 pointer-events-none">
      <img
        className="object-cover hue-rotate-[290deg] group-hover/hero:opacity-50 duration-300 transition-opacity"
        src="/images/light.avif"
        alt=""
      />
    </picture>
  );
}
