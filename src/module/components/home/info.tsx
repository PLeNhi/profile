import React, { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import AVATAR from "@/public/image/profile-pic.png";

import { IComponentBaseProps } from "@/common/interfaces";

type InfoProps = IComponentBaseProps;

const Info: FC<InfoProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "info",
        "flex justify-center gap-x-20 items-center",
        className
      )}
    >
      <div className="overflow-hidden w-[26rem]">
        <Image src={AVATAR} alt="Avatar" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="space-y-2 flex flex-col items-center">
          <p className="font-semibold text-stone-600">Hello, I&apos;m </p>
          <h1 className="text-h1 font-bold">Nhi Le</h1>
          <p className="text-stone-600 text-2xl font-semibold">
            Fullstack Nodejs Developer
          </p>
        </div>
        <button className="bg-stone-800 text-white rounded-full p-3 w-fit">
          Contact Info
        </button>
      </div>
    </div>
  );
};

export default Info;
