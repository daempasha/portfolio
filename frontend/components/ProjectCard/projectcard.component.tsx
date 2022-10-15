import Image from "next/image";
import dayjs from "dayjs";
import { FaArrowCircleRight, FaArrowRight, FaCode, FaEye } from "react-icons/fa";
import { iProjectApi } from "../../collections/types";
import Link from "next/link";


type iProjectCard = iProjectApi & {
    height?: number;
    width?: number;
}

export const ANCHOR_STYLE = "my-1 mx-3 flex items-center text-sm hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-sm cursor-pointer transition-all";

const ProjectCard = ({ title, publishedAt, codeUrl, demoUrl, author, imageUrl, slug, width = 600, height = 300 }: iProjectCard) => {

    return (
        <div className="max-w-[600px]">
            <Link href={`projects/${slug.current}`}>
                <a>

                    <div className="absolute z-10 text-white w-[600px] h-[300px] flex items-center justify-center opacity-0 hover:opacity-100 transition-all">

                        <div className="z-20 flex flex-col items-center">
                            <FaArrowCircleRight className="text-gray-200" size={48} />
                            <span className="text-gray-200">Read more</span>

                        </div>
                        <div className="z-10 absolute w-[600px] h-[300px] bg-black opacity-50" />
                    </div>

                    <Image src={imageUrl} alt={"alt"} width={width} height={height} />
                </a>
            </Link>

            <div className="flex justify-between items-center">
                <h1 className="text-lg">{title}</h1>
                <span className="text-sm text-gray-500">
                    {dayjs(publishedAt, "x").format("ddd DD, YYYY")}
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