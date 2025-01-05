import React, { useState, useEffect } from "react";
import HeaderBack from "../../../components/HeaderBack";
import { Helmet } from "react-helmet";
import Form from "./Form";

import { toast } from "sonner";

const CreateBlog = () => {
  
  useEffect(() => {
    toast.info("Happy Writing...", { duration: 4000 , icon: "🎉" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Write Blog</title>
      </Helmet>
      <HeaderBack>
        <Form />
      </HeaderBack>
    </>
  );
};

export default CreateBlog;
