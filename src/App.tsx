import { Github, Linkedin, Mail } from 'lucide-react'

function App() {
  return (
    <div className="relative w-full h-full bg-radial animate-radial">      
      
      <div className="relative z-10 flex flex-col gap-5 justify-center h-full pt-40 px-15 sm:px-20 md:px-25 lg:px-50 xl:px-100">      {/*Intro */}
        
        <div className="flex flex-row gap-5 mb-10">
          <img className="shadow-2xl rounded-full w-45 h-45" src={"/cv_foto_isa_2.png"}></img>
          <div className='flex flex-col'>
            <p className="cursor-pointer text-6xl w-100 hover:text-purple-500 transition-colors duration-300">Isabel</p>
            <p className="cursor-pointer text-6xl w-100 hover:text-purple-400 transition-colors duration-300">Hernández</p>
            <p className="cursor-pointer text-6xl w-100 hover:text-purple-300 transition-colors duration-300">Barrio</p>
          </div>
        </div>
        <p>I'm a final year <span>Computer Engineering</span> student from <span>Madrid, Spain</span>. Keen on Full-Stack development,
          software engineering, python and web programming. I am currently working on my
          thesis project and will graduate at the end of this school year, in July 2026. 
        </p>
        <Contact/>

        <div className='flex flex-col gap-30'>
          
          {/* Studies */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center md:text-left'>Studies</h1>
            <div className="flex flex-row gap-5 justify-start items-center">
                <img className="rounded-full w-20 h-20 cursor-pointer" src={"/uc3m.png"}
                onClick={() => window.open('https://www.uc3m.es/bachelor-degree/computer-science', '_blank')}/>
                <div>
                <h2 className="text-lg font-semibold">Universidad Carlos III de Madrid</h2>
                <p>I studied a Computer Engineering degree starting in 2021 and finishing all 
                  courses succesfully in June 2025. I have left only my thesis project, which I
                  will be defending next July.
                </p>
                </div>
            </div>
            <div className="flex flex-row gap-5 justify-start text-right items-center">
                <div>
                <h2 className="text-lg font-semibold">Politechnika Lubelska</h2>
                <p>In the spring semester 2023 I had the chance to go study abroad to the Polish
                  city of Lublin. There, I had such an enrichising experience in which I got to 
                  know lots of different people and cultures, improve my English skills, and 
                  I got intereseted for the first time in web programming.
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
                <h2 className="text-lg font-semibold">Sofware development intern</h2>
                <p>From February to June 2025 I worked as an intern in Accenture. My tasks consisted
                  on delevoping applications and web components in the low-code platform Outsystems 11 and
                  Outsystems ODC. This experience helped learn how to work in a real team and understand
                  in depth how React components interact with each other, highlighting children-parent 
                  relationships.
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
                  <p> This app is made to share Spotify songs with friends. It allows you to upload
                    a song through just its Spotify sharing link and have one or more lists of shared 
                    songs, which are stored in a database accessed though an API I built. The app checks
                    whether the share link entered is valid through Spotify API for Developers.
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
                  <p> I have been working on this app for some months now. It consists on a web application
                    built in React that offers a platform, kind of a social network, to allow users to share letters to learn languages
                    through a collaborative method. I now have a quite complete version, but the final
                    version will be finished and deployed by April
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
                <p className='text-lg font-semibold'>Frontend mugs</p>
                <p>This is the frontend of an online store with several mugs that can be added to
                  the cart, and then you have a checkout with a form to the shipping data. You can
                  acces to detailed information of each product in its separate page.
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
                  <p>I have a small tiny obsession with frogs, I think they are so cute and interesting; so
                    I made this site showing different species and characteristics of them. The deployed site is 
                    an static version of the website I built, which retreived the data from a database through PHP.
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

      <div className='pt-30'>
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