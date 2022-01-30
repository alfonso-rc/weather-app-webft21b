import React from 'react';
import styles from "./Search.module.css"
import {IoIosSearch} from "react-icons/io";

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handletOnSerch(){
    if(typeof onSearch === "function" ){
      const input = document.getElementById("buscando-en-input") 
      onSearch(input.value);
    }
  }
  return (
    <div className={styles.searchBar}>
        <input placeholder="Agrega una nueva ciudad.." id="buscando-en-input"/>
        <button   onClick={handletOnSerch}>
        <IoIosSearch />
        </button>
    </div>
    )
};