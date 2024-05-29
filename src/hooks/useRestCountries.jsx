import { createContext, useEffect, useState } from "react";

function UseRestCountries() {
    const ThemeContext = createContext(null);
    const[theme,setTheme] = useState("dark");

    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" :"dark");
        <ThemeContext.Provider value={theme}>
      </ThemeContext.Provider>
    }
    return {theme,setTheme,handleSwitch};  
}
export default UseRestCountries;
