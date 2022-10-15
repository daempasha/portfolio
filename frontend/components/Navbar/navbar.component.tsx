import ThemeSwitcher from "../ThemeSwitcher/themeswitcher.component";

const Navbar = () => {
    return (
        <nav className="max-w-7xl w-full my-8 mx-auto">
            <div
                className="mx-1 xl:mx-0  flex justify-between">

                <span className="bg-black text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                    D
                </span>
                <ThemeSwitcher />
            </div>


        </nav>
    )
}

export default Navbar;