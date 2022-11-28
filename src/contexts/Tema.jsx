import { createContext, useState } from "react";

export const Tema = createContext({});

const ThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState("light");

    return (<Tema.Provider value={{themeColor, setThemeColor}}>
                {children}
            </Tema.Provider>);
};

export default ThemeProvider;