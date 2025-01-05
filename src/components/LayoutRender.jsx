import React from "react";
import { useLocation } from "react-router-dom";
import MainHome from "../View/Homes/MainHome";
import Container from "./Container";
import MainBlog from "../View/Blog/MainBlog";
import MainCategory from "../View/Category/MainCategory";
import MainTags from "../View/Tags/MainTags";

const LayoutRender = () => {
  const location = useLocation();

  let content;
  switch (location.pathname) {
    case "/":
      content = <MainHome />;
      break;
    case "/blog":
      content = <MainBlog />;
      break;
    case "/category":
      content = <MainCategory />;
      break;
    case "/tags":
      content = <MainTags />;
      break;
    default:
      content = <MainHome />;
      break;
  }

  return <Container>{content}</Container>;
};

export default LayoutRender;
