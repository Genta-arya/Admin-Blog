import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import Tools from "../../components/Tools";
import Button from "../../components/Button";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MainBlog = () => {

  const navigate = useNavigate();
  return (
    <>
      <Tools title={"Blog"} />
      <ContainerLayout>
       <Button onClick={() => navigate("/blog/write")} icon={<FaPencil />} title={"Write Blog"} style={"bg-orange-400"} />
      </ContainerLayout>
    </>
  );
};

export default MainBlog;
