import React from "react";
import cssClasses from "./Home.module.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/search bar/SearchBar";
export default function Home() {
  return (
    <div className={cssClasses.container}>
      <Header />
      <SearchBar />
    </div>
  );
}
