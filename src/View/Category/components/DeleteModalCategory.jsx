import React from "react";
import ActModal from "../../../components/Modal/ActModal";
import Button from "../../../components/Button";
import { FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { toast } from "sonner";

const DeleteModalCategory = ({ isModalOpen, setIsModalOpen, title, name }) => {
  return (
    <ActModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title={title}
    >
      <div>
        {" "}
        <p>
          Are you sure you want to delete this{" "}
          <span className="font-bold text-orange-400"> " {name.name} "</span>{" "}
          category?
        </p>
        <div className="flex justify-end mt-4">
          <Button
            onClick={() =>
              toast.success("Category deleted", {
                duration: 4000,
                onAutoClose: () => setIsModalOpen(false),
              })
            }
            icon={<FaTrash />}
            title={"Delete"}
            style={"bg-red-500"}
          />
        </div>
      </div>
    </ActModal>
  );
};

export default DeleteModalCategory;
