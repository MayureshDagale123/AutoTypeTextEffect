import { useState } from "react";
import setTheme from "../theme.js";
function Theme(){

    const [theme, changeTheme] = useState("Light");

    if(localStorage.getItem("auto-theme") === "dark")
        setTheme("Light");

    return(<>
    <p id="theme-toggle" onClick={()=>{
        setTheme(theme); 
        (theme === "Light")?changeTheme("Dark"):changeTheme("Light");

    }}>{(localStorage.getItem("auto-theme") === "dark")?"Light":"Dark"}</p>
    </>);
}

export default Theme;