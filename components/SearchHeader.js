import Image from "next/image";
import Logo from "../public/google.png";
import User from "./User";
import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  const router = useRouter(); // router is a hook
  const [searchTerm, setSearchTerm] = useState(router.query.term || ""); // router.query.term is the search term in the url
  const searchInputRef = useRef(null); // useRef is a hook
  const search = (event) => {
    event.preventDefault(); // prevent the page from refreshing
    if (!searchTerm.trim()) return; // if the search term is empty, return
    router.push(`/search?term=${searchTerm.trim()}&searchType=`); // push the search term to the url
  };

  const styles = {
    header: "sticky top-0 bg-white",
    headerContainer: "flex w-full p-6 items-center",
    image: "cursor-pointer p-1",
    form: "flex border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center",
    input: "flex-grow w-full focus:outline-none",
    XIcon: "h-7 text-gray-500 cursor-pointer sm:mr-3",
    MicrophoneIcon:
      "h-6 hidden sm:inline text-blue-500 pl-4 border-l-2 border-gray-300 mr-3",
    SearchIcon: "h-6 hidden sm:inline text-blue-500 cursor-pointer",
    UserWrapper: "ml-auto whitespace-nowrap",
  };

  return (

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Image
            onClick={() => router.push("/")} // push to the home page
            src={Logo}
            width={120}
            hight={50}
            alt="Google Logo"
            className={styles.image}
          />
          <form className={styles.form}>
            <input
              type="text"
              value={searchTerm} // set the value of the input to the search term
              onChange={(event) => setSearchTerm(event.target.value)} // set the search term to the value of the input
              ref={searchInputRef} // set the ref to the input
              className={styles.input} // set the class of the input
            />
            <XIcon
              onClick={() => setSearchTerm("")} // set the search term to empty
              className={styles.XIcon}
            />
            <MicrophoneIcon className={styles.MicrophoneIcon} />
            <SearchIcon
              onClick={search} // call the search function
              className={styles.SearchIcon}
            />
            <button
              hidden
              type="submit"
              onClick={search} // call the search function
            ></button>
          </form>
          <div className={styles.UserWrapper}>
            <User />
          </div>
      </div>
      <SearchHeaderOptions/>
      </header>

  );
}
