import React, { useState } from "react";
import ContainerLayout from "../../components/ContainerLayout";
import Tools from "../../components/Tools";
import Button from "../../components/Button";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ListBlog from "./components/ListBlog";
import { FaSearch } from "react-icons/fa";
import Search from "../../components/Search";

const MainBlog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <>
      <Tools title={"Blog"} />
      <ContainerLayout>
        <div className="flex justify-between items-center gap-4">
          <Button
            onClick={() => navigate("/blog/write")}
            icon={<FaPencil />}
            title={"Write Blog"}
            style={"bg-orange-400"}
          />
          <Search placeholder={"Search Blog"} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         
        </div>

        <ListBlog search={searchTerm} />
      </ContainerLayout>
    </>
  );
};

export default MainBlog;
