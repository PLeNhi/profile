import React, { FC } from "react";
import classNames from "classnames";
import Image from "next/image";
import CHECKMARK from "@/public/image/checkmark.png";

import { IComponentBaseProps } from "@/common/interfaces";

type ExperienceSpecializeProps = IComponentBaseProps;

const ExperienceSpecialize: FC<ExperienceSpecializeProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "experience-specialize",
        "border rounded-xl p-6 space-y-20",
        className
      )}
    >
      <p className="text-h5 text-center text-stone-600">Frontend Development</p>
      <div className="flex gap-8 flex-wrap">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <div className="flex gap-3" key={index}>
            <Image
              src={CHECKMARK}
              alt=""
              width={32}
              height={32}
              className="h-fit object-cover"
            />
            <div className="w-full">
              <p className="font-semibold">HTML</p>
              <p className="text-stone-600">Experienced</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSpecialize;
