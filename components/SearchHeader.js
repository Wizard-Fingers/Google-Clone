import Image from "next/image";
import Logo from "../public/google.png";
import User from "./User";
import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function SearchHeader() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.term || "");
  const searchInputRef = useRef(null);
  const search = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?term=${searchTerm.trim()}`);
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
    SearchIcon: "h-6 hidden sm:inline text-blue-500",
    UserWrapper: "ml-auto whitespace-nowrap",
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Image
            onClick={() => router.push("/")}
            src={Logo}
            width={120}
            hight={50}
            alt="Google Logo"
            className={styles.image}
          />
          <form className={styles.form}>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              ref={searchInputRef}
              className={styles.input}
            />
            <XIcon onClick={() => setSearchTerm("")} className={styles.XIcon} />
            <MicrophoneIcon className={styles.MicrophoneIcon} />
            <SearchIcon className={styles.SearchIcon} />
            <button hidden type="submit" onClick={search}></button>
          </form>
          <div className={styles.UserWrapper}>
            <User />
          </div>
        </div>
      </header>
    </div>
  );
}
