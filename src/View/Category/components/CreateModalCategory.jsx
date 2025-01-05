import React, { useState } from "react";
import ActModal from "../../../components/Modal/ActModal";

import Button from "../../../components/Button";
import { FaSave } from "react-icons/fa";
import Input from "../../../components/Input";
import { toast } from "sonner";

const CreateModalCategory = ({ isModalOpen, setIsModalOpen, title }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Data yang diubah:", inputValue);
    if (!inputValue)
      return toast.info("Category cannot be empty", { duration: 4000 });
    toast.success("Category successfully created", { duration: 4000 });
    setInputValue("");
    setIsModalOpen(false);
  };
  return (
    <ActModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title={title}
    >
      <div>
        <Input
          type={"text"}

          maxlength={20}
          placeholder="Category Name"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <p className="text-xs">Remaining : {20 - inputValue.length} characters</p>

        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleSubmit}
            title={"Save"}
            style={"bg-orange-400"}
            icon={<FaSave />}
          />
        </div>
      </div>
    </ActModal>
  );
};

export default CreateModalCategory;
