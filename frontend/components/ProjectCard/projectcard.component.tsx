import Image from "next/image";
import dayjs from "dayjs";
import { FaArrowCircleRight, FaArrowRight, FaCode, FaEye } from "react-icons/fa";
import { iProjectApi } from "@collections/types";
import Link from "next/link";
import { DATE_FORMAT } from "@collections/constants";


type iProjectCard = iProjectApi & {
    height?: number;
    width?: number;
}

export const ANCHOR_STYLE = "my-1 mx-3 flex items-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-sm cursor-pointer transition-all";

const ProjectCard = ({ title, publishedAt, codeUrl, demoUrl, author, imageUrl, slug, width = 600, height = 300 }: iProjectCard) => {

    return (
        <div className="max-w-[600px]">
            <Link href={`projects/${slug.current}`}>
                <a className="transition-all group">
                    <div className="relative flex justify-center items-center ">
                        <Image src={imageUrl} alt={"alt"} width={width} height={height} />
                        <div className="z-10 absolute group-hover:visible invisible flex flex-col justify-center items-center">
                            <FaArrowCircleRight size={36} />
                            Read more
                        </div>
                        <div className="transition-all absolute  w-full h-full group-hover:visible invisible hover:bg-black hover:opacity-40" />
                    </div>
                </a>
            </Link>

            <div className="flex justify-between items-center">
                <h1 className="text-lg">{title}</h1>
                <span className="text-sm text-gray-500">
                    {dayjs(publishedAt, "x").format(DATE_FORMAT)}
                </span>
            </div>
            <div className="flex">
                <Link href={`projects/${slug.current}`}><a className={`${ANCHOR_STYLE}`}><FaArrowRight className="mr-2 text-gray-500" size="12px" /> Read more</a></Link>
                <a href={demoUrl} rel="noreferrer" target="_blank" className={`${ANCHOR_STYLE}`}><FaEye className="mr-2 text-gray-500" size="12px" /> View demo</a>
                <a href={codeUrl} rel="noreferrer" target="_blank" className={`${ANCHOR_STYLE}`}><FaCode className="mr-2 text-gray-500" size="12px" /> View code</a>
            </div>
        </div >
    )
}

export default ProjectCard;