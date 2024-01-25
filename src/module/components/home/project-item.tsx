import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";
import Image from "next/image";
import PROJECT from "@/public/image/project-3.png";

type ProjectItemProps = IComponentBaseProps;

const ProjectItem: FC<ProjectItemProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "project-item",
        "border rounded-3xl p-8 space-y-3",
        className
      )}
    >
      <Image src={PROJECT} alt="project" className=" rounded-3xl" />
      <h4 className="text-h4 text-center font-bold">Project Name</h4>
      <div className="flex gap-x-6 justify-between">
        <button className="border w-full rounded-full px-6 py-3">Github</button>
        <button className="border w-full rounded-full px-6 py-3">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
