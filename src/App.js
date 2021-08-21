import React, { useState } from "react";
import Searchbar from "./Components/Searchbar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./Components/ImageGallery";
import styles from "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const handleFormSubmit = (searchValue, pageNum) => {
    setSearchValue(searchValue);
    setPageNum(pageNum);
  };
  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={3000} />
      <ImageGallery
        searchValue={searchValue}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </div>
  );
}
