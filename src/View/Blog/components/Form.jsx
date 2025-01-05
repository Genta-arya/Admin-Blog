import React, { useState } from "react";
import ReactQuill from "react-quill"; // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // Import Quill styles (snow theme)
import Button from "../../../components/Button";
import { FaPencil } from "react-icons/fa6";
import Input from "../../../components/Input"; // Menggunakan Input yang sudah Anda buat
import { FaSave } from "react-icons/fa";
import CustomeInputImage from "../../../components/CustomeInputImage";
import PreviewSEO from "../../../components/PreviewSEO";
import { toast } from "sonner";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value);
  };

  const handleMetaKeywordsChange = (e) => {
    setMetaKeywords(e.target.value);
  };

  const handleImageChange = (file) => {
    setImage(file);
  };
  const isValidTitle = (title) => {
    const regex = /^[A-Za-z0-9\s]+$/; // Hanya mengizinkan huruf, angka, dan spasi
    return regex.test(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidTitle(title)) {
      toast.info("Title Blog tidak boleh mengandung simbol", { duration: 4000 });
      return;
    }
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Meta Description:", metaDescription);
    console.log("Meta Keywords:", metaKeywords);
    console.log("Image:", image);
    if (content.length === 0) {
      toast.info("Konten Blog Tidak Boleh Kosong", { duration: 4000 });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[97%]  ">
        <div className="p-6 border border-gray-300 rounded-lg shadow-md">
          <div className="flex gap-4 items-center mb-8 justify-center">
            <FaPencil />
            <h2 className="text-xl font-semibold ">Write Your Blog</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <CustomeInputImage
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
              label="Thumbnail"
              onChange={handleImageChange}
            />
            {/* Title Blog */}
            <Input
              label={"Title Blog"}
              onChange={handleTitleChange}
              value={title}
              type={"text"}
              placeholder={"Title Blog"}
              id={"title"}
              required={true}
            />

            {/* Konten Blog */}
            <div className="mb-4">
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                className={`${
                  content.length > 0 ? "h-full" : "h-full"
                } bg-white text-black  `}
                placeholder="Tulis konten blog Anda di sini"
                theme="snow"
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ direction: "rtl" }],

                    [{ header: [1, 2, 3, 4, 5, 6, false] }],

                    ["link", "image", "video"],
                    ["clean"],
                  ],
                }}
                required
              />
            </div>

            {/* Garis Putus-Putus untuk SEO */}
            <div className="border-t border-dashed border-gray-400 my-4"></div>

            {/* SEO Optional Section */}
            <h3 className="text-lg font-semibold mb-6 text-center">
              Search Engine Optimization ( Optional )
            </h3>

            {/* Meta Description */}
            <Input
              label={"Meta Description"}
              onChange={handleMetaDescriptionChange}
              value={metaDescription}
              type={"text"}
              placeholder={"Meta Description"}
              id={"metaDescription"}
            />

            {/* Meta Keywords */}
            <Input
              label={"Meta Keywords"}
              onChange={handleMetaKeywordsChange}
              value={metaKeywords}
              type={"text"}
              placeholder={"Meta Keywords (comma separated)"}
              id={"metaKeywords"}
            />

            {/* Tombol Submit */}
            <div className="flex justify-end">
              <Button
                type={"submit"}
                icon={<FaSave />}
                title={"Publish Blog"}
                style={"bg-orange-400"}
              />
            </div>
          </form>
        </div>
        <PreviewSEO
          title={title}
          metaDescription={metaDescription}
          metaKeywords={metaKeywords}
          image={imagePreview}
        />
      </div>
    </div>
  );
};

export default Form;
