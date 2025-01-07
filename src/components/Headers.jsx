import React from "react";
import ContainerLayout from "./ContainerLayout";
import { useNavigate } from "react-router-dom";


const Headers = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerLayout>
        <div className="font-bold flex  flex-col justify-center px-4 gap-1 h-32 border border-gray-300 rounded-lg dark:bg-gray-600 bg-gray-100">
          {/* cdn dummy profile */}
          <div className="flex gap-3 items-center"> 
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
              alt="profile"
              onClick={() => navigate("/profile")}
              className="w-12 h-12 rounded-full hover:cursor-pointer"
            />
            <div>
              <p className="lg:text-lg md:text-lg text-base">Welcome</p>
              <p className="text-sm">Hi, M Gentha Arya</p>
              <p className="text-xs">mgentaarya@gmail.com</p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};

export default Headers;
