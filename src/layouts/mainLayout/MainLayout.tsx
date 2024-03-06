/**
 * MainLayout has to ve visible throughout the entire app
 */

import { Outlet } from "react-router-dom";
import { AsideBar } from "./AsideBar";

export function MainLayout() {
  return (
    <section className="bg-background text-primary min-h-screen w-full">
      <AsideBar />
      <main className="pl-20">
        <Outlet />
      </main>
    </section>
  );
}
