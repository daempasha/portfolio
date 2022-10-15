import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import client from '../client'
import { iProjectApi } from '../collections/types'
import Footer from '../components/Footer/footer.component'
import Navbar from '../components/Navbar/navbar.component'
import ProjectCard from '../components/ProjectCard/projectcard.component'


interface iHome {
  projects: iProjectApi[]
}
const Home: FC<iHome> = ({ projects }: iHome) => {
  return (
    <div >
      <Head>
        <title>Daem Pasha | Home</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex flex-col bg-gray-100 dark:bg-gray-800 dark:text-gray-200 min-h-screen ">
        <Navbar />
        <main className="py-10 max-w-7xl w-full mx-auto flex-grow">
          <div className='mx-1 xl:mx-0 underline underline-offset-4 decoration-blue-400 decoration-wavy' >
            PROJECTS
          </div>
          <div className='grid gap-10 m-2 justify-center md:justify-start md:grid-cols-2 my-5'>
            {projects.map((project) => {
              console.log(project)
              return <ProjectCard key={project.slug.current} {...project} />
            })}


          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(`
    *[_type == "project" && publishedAt < now()]{
      title,
      author->,
      slug,
     "imageUrl": mainImage.asset->url,
     codeUrl,
     demoUrl,
     publishedAt
    } | order(publishedAt desc)
  `)
  return {
    props: {
      projects
    }
  }
}


export default Home;
