import MainAppBar from "@/components/MainAppBar";
import MainFooter from "@/components/MainFooter";
import BackgroundCover from "@/components/BackgroundCover";
import { ReactNode } from "react";
import Image from 'next/image';

const Logo = () => {
  return <Image 
    src="/image/logo01.png" 
    width={350}
    height={350}
    style={{
      position: 'absolute',
      zIndex: 10
    }}
    alt= "Logo da minha aplicação" />
}
export interface MainLayoutProps {
  children?: ReactNode;
}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <MainAppBar />
      <BackgroundCover />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -50, 
        }}>
        <Logo />
      </div>

      <main>{props.children}</main>
      <MainFooter />
    </div>
  );
}