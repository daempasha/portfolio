import Head from "next/head";
import Footer from "@components/Footer/footer.component";
import Navbar from "@components/Navbar/navbar.component";
import ProjectCard, { ANCHOR_STYLE } from "@components/ProjectCard/projectcard.component";
import dayjs from "dayjs";
import StickyContainer from "@components/StickyContainer/stickycontainer.component";
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { iProjectApi, iPtComponent, iPtComponents } from '@collections/types';
import { FaArrowLeft, FaArrowRight, FaCode, FaRoad } from "react-icons/fa"
import Image from "next/image";
import Link from "next/link";
import client from "../../client";
import { GetStaticPropsContext } from "next";
import { ReactNode, FC } from "react";
import { DATE_FORMAT } from "@collections/constants";

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source)
}




const ptComponents: iPtComponents = {
    marks: {
        link: ({ value, children }: any) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a className="text-blue-500 dark:text-blue-400" href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ""}>
                    {children}
                </a>
            )
        },
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }: iPtComponent) => <li className="ml-5 text-gray-600 dark:text-gray-300">- {children}</li>,

        // Ex. 2: rendering custom list items
        checkmarks: ({ children }: iPtComponent) => <li>✅ {children}</li>,
    },

    block: {
        h1: ({ children }: iPtComponent) => (<h1 className="text-lg mt-5 mb-2  underline decoration-wavy underline-offset-4 decoration-blue-400 ">{children}</h1>),

    },
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }

            const src = urlFor(value).url()
            return (
                <div className="text-center">
                    <Image
                        src={src}
                        alt={value.alt || ' '}
                        loading="lazy"
                        objectFit="contain"
                        width={800}
                        height={300}

                    />
                </div>
            )
        }
    }
}

interface iProject {
    project: iProjectApi
}

const Project: FC<iProject> = ({ project }) => {

    const { title = null, demoUrl = undefined, codeUrl = undefined, imageUrl = undefined, body = null } = project;

    return (
        <div>
            <Head>
                <title>Daem Pasha | {title}</title>
                <meta name="description" content="My personal portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="flex flex-col bg-gray-100 dark:bg-gray-800 dark:text-gray-200 min-h-screen ">
                <Navbar />
                <main className="py-10 max-w-7xl w-full mx-auto flex-1">
                    <div className="flex flex-col md:flex-row text-justify gap-10">
                        <div>
                            <StickyContainer>

                                <Link href="/">
                                    <a className={`${ANCHOR_STYLE}`} ><FaArrowLeft size={16} className="text-gray-400 inline-block mr-1" /> Go back</a>
                                </Link>

                                {(demoUrl || codeUrl) && <div className="w-full border-b-2 border-gray-50 dark:border-gray-800 my-2" />}


                                {demoUrl && <a href={demoUrl} target="_blank" rel="noreferrer" className={`${ANCHOR_STYLE}`} ><FaArrowRight size={16} className="text-gray-400 inline-block mr-1" /> View demo</a>}
                                {codeUrl && <a href={codeUrl} target="_blank" rel="noreferrer" className={`${ANCHOR_STYLE}`} ><FaCode size={16} className="text-gray-400 inline-block mr-1" /> View code</a>}

                            </StickyContainer>
                        </div>
                        <div className="flex-1">
                            <div className="text-center text-2xl">{title}</div>
                            <div className="text-center text-gray-500 dark:text-gray-300">{dayjs(project.publishedAt).format(DATE_FORMAT)}</div>
                            <div className="mx-5 md:mx-0 my-5 text-center">
                                <Image className="rounded-md " src={imageUrl ? imageUrl : `https://picsum.photos/885/461`} alt={`${title} Main Image`} width={885} height={461} />
                            </div>
                            <div className="mx-10 md:mx-0">

                                <PortableText
                                    value={body}
                                    components={ptComponents}
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        </div >
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "project" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug: any) => ({ params: { slug } })),
        fallback: "blocking",
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params!;
    const project = await client.fetch(`
      *[_type == "project" && slug.current == $slug]{
        title,
        publishedAt,
        "imageUrl": mainImage.asset->url,
        demoUrl,
        codeUrl,
        body
      }[0]
    `, { slug })
    return {
        props: {
            project
        },
        revalidate: 60
    }
}

export default Project;