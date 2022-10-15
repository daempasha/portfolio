import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import { FaMoon, FaSun } from "react-icons/fa"

const ThemeSwitcher = () => {
    const theme = useTheme()

    const switchTheme = () => {
        if (theme.theme === "dark") {
            theme.setTheme("light")
        } else {
            theme.setTheme("dark")
        }
    }


    if (theme.theme === "dark") {
        return (<button onClick={switchTheme} className="flex items-center mr-1 text-sm text-white bg-gray-600 px-4 py-1 rounded-md"><FaSun size={20} className="mr-2" /> Light Theme</button>)

    }
    return (<button onClick={switchTheme} className="flex items-center mr-1 text-sm text-white bg-black px-4 py-1 rounded-md"><FaMoon size={20} className="mr-2" /> Dark Theme</button>)

}

export default dynamic(() => Promise.resolve(ThemeSwitcher), {
    ssr: false
})