"use client";

import { useEffect } from "react";

import { PageBaseProps } from "@/common/interfaces";
import HomeContainer from "@/module/components/home/home-container";

export default function HomePage(_pageProps: PageBaseProps) {
  return (
    <div className="home-page h-full">
      <HomeContainer />
    </div>
  );
}
