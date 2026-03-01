export default function setTheme(theme){
    if(theme === "Light"){
        localStorage.setItem("auto-theme", "dark")
        const els = document.getElementsByClassName("theme");

        for(const el of els){
            el.classList.add("dark");
        }
    }
    else{
        localStorage.setItem("auto-theme", "light")
        const els = document.getElementsByClassName("theme");

        for(const el of els){
            el.classList.remove("dark");
        }
    }

}