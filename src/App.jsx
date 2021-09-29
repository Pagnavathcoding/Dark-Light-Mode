import React, { useState, useEffect } from 'react';
import darkImage from './Images/dark.svg';
import lightImage from './Images/light.svg';

const dark = "#20232a";
const light = "#E8F6EF";

function stored() {
    const theme = localStorage.getItem("theme");
    if (theme) {
        return theme;
    }
    else {
        return dark;
    }
}
function App() {
    const [themeMode, setThemeMode] = useState(stored());
    const data = themeMode === dark;
    const style = {
        main: {
            background: data ? dark : light,
            color: data ? light : dark
        },
        dark: {
            display: data ? "none" : "flex"
        },
        light: {
            display: data ? "flex" : "none"
        }
    }
    function lightTheme() {
        setThemeMode(light);
    }
    function darkTheme() {
        setThemeMode(dark);
    }
    useEffect(() => {
        localStorage.setItem("theme", themeMode);
    }, [themeMode])
    return (
        <main style={style.main}>
            <header>
                <h1>{!data ? "Light" : "Dark"} Mode</h1>
            </header>
            <section className="container">
                <div className="images">
                    <div className="dark" title="Switch to the dark mode" style={style.dark} onClick={darkTheme}>
                        <img src={darkImage} alt="dark" />
                    </div>
                    <div className="light" title="Switch to the light mode" style={style.light} onClick={lightTheme}>
                        <img src={lightImage} alt="light" />
                    </div>
                </div>
                <div className="title">
                    <h1>Pagnavath React</h1>
                    <p>Welcome to Pagnavath React!</p>
                </div>
            </section>
        </main>
    )
}
export default App;