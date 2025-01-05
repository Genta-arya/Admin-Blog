import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Text } from "../../../constants/Constants";
const ListBlog = ({search}) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil data dari API publik
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setBlogs(data); 
      } catch (error) {
        console.error("Gagal mengambil data blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center text-lg font-bold mt-10">Memuat data...</div>
    );
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-6 gap-2">
        {filteredBlogs.map((blog , index) => (
          <motion.div
          key={blog.id}
          className="relative border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-default"

          title={blog.title}
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }} 
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
            <div className="relative group">
              <img
                src={`https://via.placeholder.com/300x200?text=Thumbnail+${blog.id}`}
                alt={`Thumbnail ${blog.id}`}
                className="w-full h-40 object-cover"
              />
             
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2 md:flex-row flex-col lg:flex-row">
                  <Button
                    onClick={() => {}}
                    icon={<FaPencil />}
                    title={"Edit"}
                    style={"bg-orange-400"}
                  />
                  <Button
                    onClick={() => {}}
                    icon={<FaTrash />}
                    title={"Delete"}
                    style={"bg-red-400"}
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className={  ` font-bold mb-2 text-base`}>{blog.title}</h2>
             
            </div>
          </ motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
