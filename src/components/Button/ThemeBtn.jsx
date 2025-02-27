import React from 'react'
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeBtn = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
    <button
        className="p-2 duration-[500ms] bg-gray-200 dark:bg-gray-800 text-black dark:text-white w-[40px] h-[40px] flex-center font-bold rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" ? "☀️" : "🌙"}
    </button>
    );
}

export default ThemeBtn

