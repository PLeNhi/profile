import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";
import ExperienceSpecialize from "./experience-specialize";

type ExperienceProps = IComponentBaseProps;

const Experience: FC<ExperienceProps> = ({ className }) => {
  return (
    <div className={classNames("experience", "space-y-20", className)}>
      <div className="text-center">
        <p>Explore My</p>
        <h1 className="font-bold text-h1">Experience</h1>
      </div>
      <div>
        <div className="flex gap-8">
          <ExperienceSpecialize />
          <ExperienceSpecialize />
        </div>
      </div>
    </div>
  );
};

export default Experience;
