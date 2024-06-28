import MainAppBar from "@/components/MainAppBar";
import MainFooter from "@/components/MainFooter";
import BackgroundCover from "@/components/BackgroundCover";
import { ReactNode } from "react";



export interface MainLayoutProps {
  children?: ReactNode;
}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <MainAppBar />
      <BackgroundCover/>
      <main>{props.children}</main>
      <MainFooter/>
    </div>

  );
}
