import React, { useEffect, useState } from "react";
import ActModal from "../../../components/Modal/ActModal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { FaSave } from "react-icons/fa";
import { toast } from "sonner";

const EditModalCategory = ({ isModalOpen, setIsModalOpen, title, value }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(value.name);
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
  
    if (!inputValue)
      return toast.info("Category cannot be empty", { duration: 4000 });
    toast.success("Category successfully updated", { duration: 4000 });
    setInputValue("");
    handleClose();
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
          placeholder="Edit Category"
          onChange={handleChange}
          maxlength={20}
          value={inputValue}
        />

        <p className="text-xs underline">
          Remaining : {20 - inputValue.length}  characters
        </p>

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

export default EditModalCategory;
