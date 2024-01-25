import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";
import Image from "next/image";
import AVATAR from "@/public/image/about-pic.png";
import EXPERIENCE from "@/public/image/experience.png";

type AboutContainerProps = IComponentBaseProps;

const AboutContainer: FC<AboutContainerProps> = ({ className }) => {
  return (
    <div className={classNames("about-container", className)} id="about">
      <div className="text-center">
        <p className="text-stone-600">Get To Know More</p>
        <h1 className="text-h1 font-bold">About Me</h1>
      </div>
      <div className="flex gap-20 mt-20 justify-center items-center">
        <div className="overflow-hidden rounded-3xl w-[40rem]">
          <Image src={AVATAR} alt="Avatar" />
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-10">
            <div className="flex w-full flex-col gap-2 border-stone-800 border rounded-3xl p-10 justify-center items-center">
              <Image src={EXPERIENCE} alt="" width={20} height={20} />
              <h6 className="text-h6 font-bold">Experience</h6>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className="flex w-full flex-col gap-2 border-stone-800 border rounded-3xl p-10 justify-center items-center">
              <Image src={EXPERIENCE} alt="" width={20} height={20} />
              <h6 className="text-h6 font-bold">Experience</h6>
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut,
            praesentium quaerat sequi dolore est, sit, animi quia dolorem
            suscipit tenetur voluptate nesciunt asperiores ut vitae laborum
            tempore molestiae a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
