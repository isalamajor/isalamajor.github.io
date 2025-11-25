import { Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import texts from './texts.json'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "./components/select";

type Language = 'es' | 'en' | 'fr';

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const languagesAvailable =  [
    { "name": "en", "image": "/flags/english.svg" },
    { "name": "es", "image": "/flags/spanish.svg" },
    { "name": "fr", "image": "/flags/french.svg" }
  ]

  return (
    <div className="relative w-screen h-full bg-radial animate-radial">      
      
      <div className="relative z-10 flex flex-col gap-5 justify-center w-full h-full pt-2 px-10 lg:px-20 lg:px-25 lg:px-50 xl:px-85"> 

        <div className='flex flex-row gap-2 justify-end pb-40'>
          <Select 
          value={language} 
          onValueChange={(lang) => setLanguage(lang as Language)}
          >
          <SelectTrigger className="selectLang h-8 w-[30px] w-fit rounded-full ring-transparent">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent className='selectLang font-thin'>
            {languagesAvailable.map((lang) => (
              <SelectItem key={lang.name} value={lang.name}>
                <div className="flex flex-row gap-2">
                <img src={lang.image} className="h-5 w-5 font-thin "></img>{lang.name.toUpperCase()}
                </div>
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <SwitchTheme/>
        </div>  

        
        {/* Intro I am a final-year <span>Computer Engineering</span> student from <span>Madrid, Spain</span>, with a strong interest in full-stack development, software engineering, Python, and web programming. I am currently working on my thesis project and will graduate at the end of this academic year, in July 2026.*/}
        <div className="flex flex-row gap-5 mb-10 items-center justify-center sm:justify-start">
          <img className="shadow-2xl rounded-full w-30 h-30 lg:w-45 lg:h-45" src={"/cv_foto_isa_2.png"}></img>
          <div className='flex flex-col'>
            <p className="cursor-pointer text-4xl lg:text-6xl hover:text-purple-600 transition-colors duration-300">Isabel</p>
            <p className="cursor-pointer text-4xl lg:text-6xl hover:text-purple-500 transition-colors duration-300">Hernández</p>
            <p className="cursor-pointer text-4xl lg:text-6xl hover:text-purple-400 transition-colors duration-300">Barrio</p>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: texts[language].intro }}/>
        <Contact contactText={texts[language].contact}/>

        <div className='flex flex-col gap-30'>
          
          {/* Studies */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-sm text-center lg:text-left'>{texts[language].education_title}</h1>
            <div className="flex flex-row gap-5 justify-start items-center">
                <img className="rounded-full w-20 h-20 cursor-pointer" src={"/uc3m.png"}
                onClick={() => window.open('https://www.uc3m.es/bachelor-degree/computer-science', '_blank')}/>
                <div>
                <h2 className="text-lg font-semibold">{texts[language].uc3m_title}</h2>
                <p>{texts[language].uc3m_text}</p>
                </div>
            </div>
            <div className="flex flex-row gap-5 justify-start text-right items-center">
                <div>
                <h2 className="text-lg font-semibold">{texts[language].pollub_title}</h2>
                <p>{texts[language].pollub_text}</p>
                </div>
                <img className="rounded-full w-20 h-20 cursor-pointer" src={"/pollub.png"}
                onClick={() => window.open('https://pollub.pl/en/', '_blank')}/>
            </div>
          </div>


          {/* Experience */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center lg:text-left'>{texts[language].experience_title}</h1>
              
            <div className="">
                <h2 className="text-lg font-semibold">{texts[language].intern_title}</h2>
                <p>{texts[language].intern_text}</p>
            </div>
          </div>

          {/* Projects */}
          <div className='flex flex-col gap-5'>
            <h1 className='text-center lg:text-left'>{texts[language].projects_title}</h1>

          <div className='flex flex-col gap-10'>
            <div className='flex flex-col lg:flex-row gap-5'>
              <img className='shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/spotify-sharer.png'
                />
                <div>
                  <p className='text-lg font-semibold'>{texts[language].spotify_title}</p>
                  <p>{texts[language].spotify_text}</p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>
                      <TechTag tech='React'/>
                      <TechTag tech='TailwindCSS'/>
                      <TechTag tech='NodeJS'/>
                      <TechTag tech='MongoDB'/>
                      <TechTag tech='Express'/>
                      <TechTag tech='jwt'/>
                  </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:flex-row gap-5'>
                <div className='order-2 lg:order-1'>
                  <p className='text-lg font-semibold'>{texts[language].letterex_title}</p>
                  <p>{texts[language].letterex_text}</p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>         
                    <TechTag tech='React'/>
                    <TechTag tech='TypeScript'/>
                    <TechTag tech='TailwindCSS'/>
                    <TechTag tech='NodeJS'/>
                    <TechTag tech='MongoDB'/>
                    <TechTag tech='Express'/>
                    <TechTag tech='jwt'/>
                  </div>
                </div>
                <img className='order-1 lg:order-2 shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg object-cover' src='/letterex.png'
                />
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <img className='shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/frontend-mugs.png'
                onClick={() => window.open("https://frontend-mugs-z.vercel.app/", "_blank")}/>
                <div>
                <p className='text-lg font-semibold'>{texts[language].frontend_title}</p>
                <p>{texts[language].frontend_text}</p>
                <div className='pt-2 flex flex-wrap w-full gap-1'>  
                    <TechTag tech='CSS'/>
                    <TechTag tech='Javascript'/>
                    <TechTag tech='HTML'/>
                    <TechTag tech='NextJS'/>
                </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='order-2 lg:order-1'>
                  <p className='text-lg font-semibold'>{texts[language].frogs_title}</p>
                  <p>{texts[language].frogs_text}</p>
                  <div className='pt-2 flex flex-wrap w-full gap-1'>  
                    <TechTag tech='CSS'/>
                    <TechTag tech='Javascript'/>
                    <TechTag tech='HTML'/>
                    <TechTag tech='PHP'/>
                  </div>
                </div>
                <img className='order-1 lg:order-2 shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover' src='/frogsknow.png'
                onClick={() => window.open("https://frogs-know.netlify.app/localhost_3000/", "_blank")}/>
            </div>
          </div>
          </div>
        
        </div>

      <div className='pt-30 pb-5 lg:pb-0'>
        <Contact contactText={texts[language].contact}/>
      </div>
      </div>
    </div>
  )
}

export default App


interface TagProps {
  tech: string
}

const TechTag = ( { tech } : TagProps ) => {
  const techs = ['react', 'javascript', 'nodejs', 'css', 'jwt', 'express', 'mongodb', 'reactrouter',
    'typescript', 'html', 'tailwindcss', 'php', 'nextjs' ]
  if (!techs.includes(tech.toLowerCase())) return <p>NO</p>
  return (
    <div className='tech-tag'>
      <img src={`/${tech.toLowerCase()}.svg`} className='w-4 h-4'/>
      <p className='text-sm'>{tech}</p>
    </div>
  )
}


interface ContactProps {
  contactText: string
}

const Contact = ( { contactText } : ContactProps) => {
  return (
    <div className='w-full justify-center my-10 flex flex-wrap gap-2'>
      <button className="text-xs md:text-md rounded-full p-1 bg-opacity-0 border border-1 border-purple-300  w-fit flex flex-row gap-1 items-center"
      onClick={() => window.open("https://github.com/isalamajor/", "_blank")}>
        <Github/>
        <p>Github</p>
      </button>
      
      <button className="rounded-full bg-opacity-0 border border-1 border-purple-300  w-fit flex flex-row gap-1 items-center"
      onClick={() => window.open("https://www.linkedin.com/in/isabel-hernández-barrio-408a38326", "_blank")}>
        <Linkedin/>
        LinkedIn
      </button>
      
      <button className="rounded-full p-1 bg-opacity-0 border border-1 border-purple-300 w-fit flex flex-row gap-1 items-center"
        onClick={() => window.location.href = "mailto:isahbarrio@gmail.com"}>
          <Mail/>
          {contactText} 
      </button>         
    </div>
  )
}


const SwitchTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.remove("light");
    else document.documentElement.classList.add("light");
  }, [darkMode]);

  return (
    <label className="relative inline-block w-[3.5em] h-[2em]">
      {/* Hidden checkbox */}
      <input type="checkbox" className="peer opacity-0 w-0 h-0" onChange={() => {setDarkMode(!darkMode)}}/>

      {/* Slider */}
      <span
        className="absolute inset-0 cursor-pointer rounded-[30px] transition duration-500 bg-gray-200 peer-checked:bg-gray-400 dark:bg-[#0a1a44] dark:peer-checked:bg-[#8481ac] before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[10%] before:bottom-[15%] before:shadow-[inset_8px_-4px_0px_0px_#fff000] before:bg-gray-200 dark:before:bg-[#0a1a44] before:transition before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#fff000]"
      />
    </label>
  );
};