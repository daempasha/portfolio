import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
    const SOCIAL_LINK_STYLE = "text-white transition-all hover:ring-2 ring-gray-800 p-1"
    return (

        <footer className="w-full bg-black py-10">
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/daempasha/" target="_blank" rel="noreferrer" className={`${SOCIAL_LINK_STYLE}`}>
                    <FaLinkedin size="24px" />
                </a>
                <span className="mx-2" />
                <a href="https://github.com/daempasha" target="_blank" rel="noreferrer" className={`${SOCIAL_LINK_STYLE}`}>
                    <FaGithub size="24px" />
                </a>
            </div>
            <div className="my-1" />
            <div className="w-full text-center text-gray-200">Created by Daem Pasha</div>
        </footer>
    )
}

export default Footer;