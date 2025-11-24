import { Github, Linkedin, Mail } from 'lucide-react'

function App() {
  return (
    <div className="relative w-full h-full bg-radial animate-radial">      
      
      <div className="relative z-10 flex flex-col gap-5 justify-center w-full h-full pt-40 px-10 sm:px-20 md:px-25 lg:px-50 xl:px-100">      
        
        {/* Intro */}
        <div className="flex flex-row gap-5 mb-10">
          <img className="shadow-2xl rounded-full w-45 h-45" src={"/cv_foto_isa_2.png"}></img>
          <div className='flex flex-col'>
            <p className="cursor-pointer text-5xl md:text-6xl hover:text-purple-500 transition-colors duration-300">Isabel</p>
            <p className="cursor-pointer text-5xl md:text-6xl hover:text-purple-400 transition-colors duration-300">Hernández</p>
            <p className="cursor-pointer text-5xl md:text-6xl hover:text-purple-300 transition-colors duration-300">Barrio</p>
          </div>
        </div>
        <p>
          I am a final-year <span>Computer Engineering</span> student from <span>Madrid, Spain</span>, with a strong interest in full-stack development, software engineering, Python, and web programming. I am currently working on my thesis project and will graduate at the end of this academic year, in July 2026. 
        </p>
        <Contact/>

        <div className='flex flex-col gap-30'>
          
          {/* Studies */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center md:text-left'>Education</h1>
            <div className="flex flex-row gap-5 justify-start items-center">
                <img className="rounded-full w-20 h-20 cursor-pointer" src={"/uc3m.png"}
                onClick={() => window.open('https://www.uc3m.es/bachelor-degree/computer-science', '_blank')}/>
                <div>
                <h2 className="text-lg font-semibold">Universidad Carlos III de Madrid</h2>
                <p>
                  I started my Computer Engineering degree in 2021 and have successfully completed all courses as of June 2025. The only requirement remaining is my thesis project, which I will defend next July.
                </p>
                </div>
            </div>
            <div className="flex flex-row gap-5 justify-start text-right items-center">
                <div>
                <h2 className="text-lg font-semibold">Politechnika Lubelska</h2>
                <p>
                  In the spring semester of 2023, I had the opportunity to study abroad in Lublin, Poland. This was an enriching experience that allowed me to meet people from diverse backgrounds, improve my English skills, and discover my interest in web programming.
                </p>
                </div>
                <img className="rounded-full w-20 h-20 cursor-pointer" src={"/pollub.png"}
                onClick={() => window.open('https://pollub.pl/en/', '_blank')}/>
            </div>
          </div>


          {/* Experience */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center md:text-left'>Experience</h1>
            <div className="">
                <h2 className="text-lg font-semibold">Sofware Development Intern</h2>
                <p>From February to June 2025 I worked as a software development intern, focusing on developing applications and web components using the low-code platform OutSystems 11 and OutSystems ODC. This experience taught me how to collaborate effectively in a real team environment and gave me a deeper understanding of how React components interact, particularly parent-child relationships.
                </p>
            </div>
          </div>

          {/* Projects */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center md:text-left'>Projects</h1>

          
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col md:flex-row gap-5'>
              <img className='shadow-2xl w-full md:w-100 h-full h-max-100 md:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/spotify-sharer.png'
                />
                <div>
                  <p className='text-lg font-semibold'>Spotify Sharer</p>
                  <p> 
                    A web app that allows users to share Spotify songs with friends. Users can upload songs using Spotify share links and create one or more lists of shared songs, stored in a database accessed via an API I built. The app validates share links through the Spotify API.
                  </p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>
                      <TechTag tech='React'/>
                      <TechTag tech='NodeJS'/>
                      <TechTag tech='MongoDB'/>
                      <TechTag tech='Express'/>
                      <TechTag tech='jwt'/>
                  </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:flex-row gap-5'>
                <div className='order-2 md:order-1'>
                  <p className='text-lg font-semibold'>Letterex</p>
                  <p> 
                    A web application built in React that serves as a platform for users to share letters to learn languages collaboratively. The app is in an advanced stage, with the final version planned for deployment by April.
                  </p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>         
                    <TechTag tech='React'/>
                    <TechTag tech='NodeJS'/>
                    <TechTag tech='MongoDB'/>
                    <TechTag tech='Express'/>
                    <TechTag tech='jwt'/>
                    <TechTag tech='ReactRouter'/>
                  </div>
                </div>
                <img className='order-1 md:order-2 shadow-2xl w-full md:w-100 h-full h-max-100 md:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/letterex.png'
                />
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
                <img className='shadow-2xl w-full md:w-100 h-full h-max-100 md:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/frontend-mugs.png'
                onClick={() => window.open("https://frontend-mugs-z.vercel.app/", "_blank")}/>
                <div>
                <p className='text-lg font-semibold'>Frontend Mugs</p>
                <p>
                  Frontend of an online store where users can add mugs to their cart and complete a checkout form for shipping information. Each product has a dedicated page with detailed information.
                </p>
                <div className='pt-2 flex flex-wrap w-full gap-1'>  
                    <TechTag tech='CSS'/>
                    <TechTag tech='Javascript'/>
                    <TechTag tech='React'/>
                </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
                <div className='order-2 md:order-1'>
                  <p className='text-lg font-semibold'>Frogs Know</p>
                  <p>
                    A personal project inspired by my interest in frogs. The website showcases different frog species and their characteristics. The deployed version is static, but the site retrieves data from a database using PHP.
                  </p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>  
                    <TechTag tech='CSS'/>
                    <TechTag tech='Javascript'/>
                    <TechTag tech='React'/>
                  </div>
                </div>
                <img className='order-1 md:order-2 shadow-2xl w-full md:w-100 h-full h-max-100 md:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/frogsknow.png'
                onClick={() => window.open("https://frogs-know.netlify.app/localhost_3000/", "_blank")}/>
            </div>
          </div>
          </div>
        
        </div>

      <div className='pt-30 pb-5 sm:pb-0'>
        <Contact/>
      </div>
      </div>
    </div>
  )
}

export default App


interface TagProps {
  tech: string
}

const TechTag = ( { tech }: TagProps ) => {
  const techs = ['react', 'javascript', 'nodejs', 'css', 'jwt', 'express', 'mongodb', 'reactrouter']
  if (!techs.includes(tech.toLowerCase())) return <p>NO</p>
  return (
    <div className='w-fit bg-[#23272F]/70 px-2 py-1 rounded-full flex flex-row gap-1 items-center'>
      <img src={`/${tech.toLowerCase()}.svg`} className='w-4 h-4'/>
      <p className='text-sm'>{tech}</p>
    </div>
  )
}


const Contact = () => {
  return (
    <div className='w-full justify-center my-10 flex flex-row gap-2'>
      <button className="rounded-full p-1 bg-opacity-0 border border-1 border-white w-fit flex flex-row gap-1 items-center"
      onClick={() => window.open("https://github.com/isalamajor/", "_blank")}>
        <Github/>
        Github 
      </button>
      
      <button className="rounded-full p-1 bg-opacity-0 border border-1 border-white w-fit flex flex-row gap-1 items-center">
        <Linkedin/>
        LinkedIn
      </button>
      
      <button className="rounded-full p-1 bg-opacity-0 border border-1 border-white w-fit flex flex-row gap-1 items-center"
        onClick={() => window.location.href = "mailto:isahbarrio@gmail.com"}>
          <Mail/>
          Contact 
      </button>         
    </div>
  )
}