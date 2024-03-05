import { ComponentProps } from "react";

export function Blob(args: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 200 200"
      {...args}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M39.1,-67C50.4,-61.2,59.1,-50.2,58.4,-38.1C57.8,-26.1,47.8,-13,45.3,-1.4C42.9,10.2,48,20.4,46.1,28.2C44.3,35.9,35.6,41.2,26.7,50.5C17.9,59.9,8.9,73.4,2.4,69.1C-4,64.9,-8.1,42.9,-10.1,29.6C-12.1,16.3,-12.2,11.7,-16.8,8.2C-21.4,4.7,-30.6,2.3,-41.4,-6.2C-52.1,-14.8,-64.5,-29.6,-63.5,-39.4C-62.6,-49.2,-48.3,-54.1,-35.5,-59.1C-22.7,-64,-11.4,-69,1.3,-71.2C13.9,-73.4,27.8,-72.9,39.1,-67Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Blob2(args: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 200 200"
      {...args}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.5,-23.8C16.4,-21.7,16.8,-15.8,27.9,-11.2C38.9,-6.6,60.7,-3.3,65.4,2.7C70.2,8.8,58,17.6,51.5,30.2C45.1,42.9,44.4,59.3,36.8,71.4C29.1,83.4,14.6,91.2,0,91.2C-14.6,91.2,-29.1,83.4,-39.7,73.1C-50.3,62.7,-57,49.7,-57.1,37.1C-57.2,24.5,-50.8,12.2,-49,1.1C-47.2,-10.1,-49.9,-20.3,-45.1,-24.8C-40.3,-29.3,-27.9,-28.1,-19.1,-26.7C-10.4,-25.4,-5.2,-23.8,0.1,-23.9C5.3,-24.1,10.6,-25.8,13.5,-23.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function BlurBall() {
  return (
    <div className="absolute inset-0 z-10 flex items-center pointer-events-none ">
      <div className="flex flex-1 ">
        <Blob className=" text-green-800 animate-levitate  blur-[60px]" />
      </div>
      <div className="h-2/3 flex flex-1 ">
        <Blob2 className="text-green-300 animate-pulse-slower blur-[70px]" />
      </div>
    </div>
  );
}
