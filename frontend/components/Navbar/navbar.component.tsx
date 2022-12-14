import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/themeswitcher.component";

const Navbar = () => {
    return (
        <nav className="px-2 md:p-0 max-w-7xl w-full my-8 mx-auto">
            <div
                className="mx-1 xl:mx-0  flex justify-between">

                <Link href="/">
                    <a className="group">

                        <span className="group-hover:animate-pulse bg-black text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                            D
                        </span>
                    </a>
                </Link>
                <ThemeSwitcher />
            </div>


        </nav>
    )
}

export default Navbar;