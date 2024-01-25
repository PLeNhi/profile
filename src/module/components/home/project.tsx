import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";
import ProjectItem from "./project-item";

type ProjectsProps = IComponentBaseProps;

const Projects: FC<ProjectsProps> = ({ className }) => {
  return (
    <div className={classNames("projects", "space-y-20", className)}>
      <div className="text-center">
        <p>Browse My Recent</p>
        <h1 className="font-bold text-h1">Projects</h1>
      </div>
      <div className="flex gap-8">
        {[0, 1, 2].map((_, i) => (
          <ProjectItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
