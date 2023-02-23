import React, { useState } from "react";

const ThemeContext = React.createContext();

function Context({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    return <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>;
}

export default Context;

/*import React, { Children, useContext } from "react";
import { useState } from "react";

const ThemeContext = React.createContext();
const ToggleTheme = React.createContext();
export const apiPath =
    window.location.hostname === "localhost" ? "http://localhost/profesor-admin/api/index.php" : "https://admin.scoalacalarasibt.ro/api/index.php";
export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeToggle() {
    return useContext(ToggleTheme);
}

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme() {
        setDarkTheme(!darkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ToggleTheme.Provider value={toggleTheme}>{children}</ToggleTheme.Provider>
        </ThemeContext.Provider>
    );
}*/
