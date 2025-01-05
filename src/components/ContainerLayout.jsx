import React from "react";

const ContainerLayout = ({ children }) => {
  return (
    <div className="flex justify-center ">
      <div className=" w-full lg:max-w-7xl md:max-w-3xl ">{children}</div>
    </div>
  );
};

export default ContainerLayout;
