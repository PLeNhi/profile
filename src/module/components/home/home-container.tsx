import React, { FC } from "react";
import classNames from "classnames";
import { IComponentBaseProps } from "@/common/interfaces";
import HomeTopBar from "./home-topbar";
import AboutContainer from "./about-container";
import Info from "./info";
import Experience from "./experience";
import Projects from "./project";
import Contact from "./contact";

type HomeContainerProps = IComponentBaseProps;

const HomeContainer: FC<HomeContainerProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "home-container",
        "container space-y-40",
        className
      )}
    >
      <HomeTopBar />
      <Info />
      <AboutContainer />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomeContainer;
