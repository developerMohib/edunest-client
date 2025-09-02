"use client"
import { IoSunny } from "react-icons/io5";
import { GiMoon } from "react-icons/gi";
import { useEffect, useState } from "react";

const ThemeChanger: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false)

    const handleTheme = () => {
        setIsDark(!isDark)
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        } else {
            document.documentElement.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        }
    }
    // save theme data in local storage 
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme === "dark") {
            setIsDark(true)
            document.documentElement.setAttribute("data-theme", "dark")
        } else {

            document.documentElement.setAttribute("data-theme", "light")
        }
    }, [])

    return (
        <button className='flex items-center'  onClick={handleTheme}>
            {isDark ? <GiMoon className="text-2xl text-white" /> : <IoSunny className="text-2xl" />}
        </button>
    );
};

export default ThemeChanger;