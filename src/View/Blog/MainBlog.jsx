import React, { useState } from "react";
import ContainerLayout from "../../components/ContainerLayout";
import Tools from "../../components/Tools";
import Button from "../../components/Button";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ListBlog from "./components/ListBlog";
import { FaSearch } from "react-icons/fa";

const MainBlog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian

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
          <div className="relative w-full max-w-sm">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search Title..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none   placeholder:text-gray-500 text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <ListBlog search={searchTerm} />
      </ContainerLayout>
    </>
  );
};

export default MainBlog;
