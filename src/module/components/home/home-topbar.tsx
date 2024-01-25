import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";
import Link from "next/link";

type HomeTopBarProps = IComponentBaseProps;

const HomeTopBar: FC<HomeTopBarProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "home-top-bar",
        "flex md:h-40 justify-around md:text-2xl items-center",
        className
      )}
    >
      <div className="text-4xl">Nhi Le</div>
      <ul className="flex gap-x-8">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeTopBar;
