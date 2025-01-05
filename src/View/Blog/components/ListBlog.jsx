import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

const ListBlog = ({ search }) => {
  const [blogs, setBlogs] = useState([]); // Menyimpan data blog
  const [loading, setLoading] = useState(false); // Status loading saat memuat data
  const [page, setPage] = useState(1); // Halaman untuk pengambilan data
  const [hasMore, setHasMore] = useState(true); // Menandakan jika masih ada data untuk diambil

  // Mengambil data blog
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const data = await response.json();
        if (data.length < 10) {
          setHasMore(false); // Jika data yang didapatkan kurang dari 10, berarti sudah tidak ada data lagi
        }
        setBlogs((prevBlogs) => [...prevBlogs, ...data]); // Menambahkan data baru ke daftar blog
      } catch (error) {
        console.error("Gagal mengambil data blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]); // Mengambil data setiap kali page berubah

  // Menyaring blog berdasarkan search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1); // Memuat halaman berikutnya
    }
  };

  return (
    <div
      className="mt-8"
      onScroll={handleScroll}
      style={{ overflowY: "auto", maxHeight: "80vh" }}
    >
     
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-6 gap-2 relative">
          {filteredBlogs.map((blog, index) => (
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
                <h2 className={`font-bold mb-2 text-base`}>{blog.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
     

      {/* Menampilkan indikator loading saat memuat data */}
      {loading && page !== 1 && (
        <div className=" absolute left-0 bottom-12 right-0 flex justify-center  ">
          {" "}
          <PulseLoader color="#f97316" />
        </div>
      )}

    
    </div>
  );
};

export default ListBlog;
