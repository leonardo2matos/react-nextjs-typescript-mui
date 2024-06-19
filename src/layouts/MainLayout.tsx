import MainAppBar from "@/components/MainAppBar";
import MainFooter from "@/components/MainFooter";
import { ReactNode } from "react";
export interface MainLayoutProps {
  children?: ReactNode;
}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <MainAppBar />
      <main>{props.children}</main>
      <MainFooter/>
    </div>

  );
}
