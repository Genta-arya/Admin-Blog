import React from "react";
import Tools from "../../components/Tools";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import ContainerLayout from "../../components/ContainerLayout";
import Button from "../../components/Button";
import Table from "../../components/Table/Table";
import Thead from "../../components/Table/Thead";
import Tbody from "../../components/Table/Tbody";

import EditModal from "./components/EditModalCategory";
import DeleteModal from "./components/DeleteModalCategory";
import { modalTypes } from "../../constants/Constants";
import CreateModalCategory from "./components/CreateModalCategory";

const MainCategory = () => {
  const dummyData = [
    { id: 1, name: "Technology", action: "Edit" },
    { id: 2, name: "Health", action: "Edit" },
    { id: 3, name: "Education", action: "Edit" },
    { id: 4, name: "Business", action: "Edit" },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);
  const [selectedId, setSelectedId] = React.useState(null);
  const [selectedName, setSelectedName] = React.useState(null);

  const handleOpenModal = (type, id, name) => {
    setModalType(type);
    setSelectedId(id);
    setShowModal(true);
    setSelectedName(name);
  };

  return (
    <>
      <Tools title={"Category"} />
      <ContainerLayout>
        <Button
          onClick={() => handleOpenModal(modalTypes.create, null, null)}
          icon={<FaPlus />}
          title={"Create Category"}
          style={"bg-orange-400"}
        />

        <Table>
          <Thead>
            <tr>
              <th className="px-4 py-2 border border-gray-200">#</th>
              <th className="px-4 py-2 border border-gray-200">Name</th>
              <th className="px-4 py-2 border border-gray-200">Action</th>
            </tr>
          </Thead>

          <Tbody>
            {dummyData.map((data, index) => (
              <tr key={data.id}>
                <td className="px-4 py-2 border border-gray-200">
                  {index + 1}
                </td>
                <td
                  className="px-4 py-2 border border-gray-200 break-words hover:cursor-pointer hover:underline"
                  title="Double Click to Edit"
                  onDoubleClick={() =>
                    handleOpenModal(modalTypes.edit, data.id, data.name)
                  }
                >
                  {data.name}
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  <div className="gap-2 flex justify-center">
                    <Button
                      onClick={() =>
                        handleOpenModal(modalTypes.edit, data.id, data)
                      }
                      icon={<FaPencil />}
                      title={"Edit"}
                      style={"bg-orange-400"}
                    />
                    <Button
                      onClick={() =>
                        handleOpenModal(modalTypes.delete, data.id, data)
                      }
                      icon={<FaTrash />}
                      title={"Delete"}
                      style={"bg-red-500"}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ContainerLayout>

      {/* Modal untuk Edit */}
      {modalType === modalTypes.edit && (
        <EditModal
          isModalOpen={showModal}
          setIsModalOpen={setShowModal}
          title={"Edit Category"}
          value={selectedName}
          categoryId={selectedId}
        />
      )}

      {/* Modal untuk Delete */}
      {modalType === modalTypes.delete && (
        <DeleteModal
          isModalOpen={showModal}
          setIsModalOpen={setShowModal}
          name={selectedName}
          title={"Delete Category"}
          categoryId={selectedId}
        />
      )}

      {/* Modal untuk Create */}
      {modalType === modalTypes.create && (
        <CreateModalCategory
          isModalOpen={showModal}
          setIsModalOpen={setShowModal}
          title={"Create Category"}
        />
      )}
    </>
  );
};

export default MainCategory;
