import React, { FC } from "react";
import classNames from "classnames";

import { IComponentBaseProps } from "@/common/interfaces";

type ContactProps = IComponentBaseProps;

const Contact: FC<ContactProps> = ({ className }) => {
  return (
    <div className={classNames("contact", "space-y-20", className)}>
      <div className="text-center">
        <p>Get in Touch</p>
        <h1 className="font-bold text-h1">Contact Me</h1>
      </div>
      <div className="p-6 mx-auto border rounded-3xl flex gap-x-8 w-fit">
        <a href="mailto:Example@gmail.com">Example@gmail.com</a>
        <a href="https://www.facebook.com/Nhile119">Facebook</a>
      </div>
    </div>
  );
};

export default Contact;
