import { useState, useEffect } from "react";
import texts from "./texts.json";
import { Dropdown } from "./components/select2";
import { WaveTitle } from "./components/wavyText";
import Contact from "./components/contact";
import * as motion from "motion/react-client";

type Language = "es" | "en" | "fr";

const projectsVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const experienceVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div className="relative w-screen h-full bg-radial animate-radial">
      <div className="relative z-10 flex flex-col gap-5 justify-center w-full h-full pt-2 px-10 lg:px-20 lg:px-25 lg:px-50 xl:px-85">
        <div className="flex flex-row gap-2 justify-end pb-40">
          <Dropdown
            onSelectionChange={(lang) => setLanguage(lang as Language)}
          />
          <SwitchTheme />
        </div>

        {/* Intro */}
        <div className="flex flex-row gap-5 mb-10 items-center justify-center sm:justify-start">
          <img
            className="shadow-2xl rounded-full w-25 h-25 lg:w-45 lg:h-45"
            src={"/cv_foto_isa_2.png"}
          ></img>
          <WaveTitle text={`Isabel\nHernández\nBarrio`} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: texts[language].intro }} />
        <Contact contactText={texts[language].contact} />

        <div className="flex flex-col gap-30">
          {/* Studies */}
          <div className="flex flex-col gap-5">
            <h1 className="text-center lg:text-left">
              {texts[language].education_title}
            </h1>
            <div className="flex flex-row gap-5 justify-start items-center">
              <img
                className="rounded-full w-20 h-20 cursor-pointer"
                src={"/uc3m.png"}
                onClick={() =>
                  window.open(
                    "https://www.uc3m.es/bachelor-degree/computer-science",
                    "_blank",
                  )
                }
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {texts[language].uc3m_title}
                </h2>
                <p>{texts[language].uc3m_text}</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 justify-start text-right items-center">
              <div>
                <h2 className="text-lg font-semibold">
                  {texts[language].pollub_title}
                </h2>
                <p>{texts[language].pollub_text}</p>
              </div>
              <img
                className="rounded-full w-20 h-20 cursor-pointer"
                src={"/pollub.png"}
                onClick={() => window.open("https://pollub.pl/en/", "_blank")}
              />
            </div>
          </div>

          {/* Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={experienceVariants}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -200px 0px" }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-center lg:text-left">
              {texts[language].experience_title}
            </h1>

            <div className="">
              <h2 className="text-lg font-semibold">
                {texts[language].intern_title}
              </h2>
              <p>{texts[language].intern_text}</p>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={projectsVariants}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -200px 0px" }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-center lg:text-left">
              {texts[language].projects_title}
            </h1>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row gap-5">
                <img
                  className="shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover"
                  src="/spotify-sharer.png"
                  onClick={() =>
                    window.open(
                      "https://spotify-sharer-dep.onrender.com/",
                      "_blank",
                    )
                  }
                />
                <div>
                  <p className="text-lg font-semibold">
                    {texts[language].spotify_title}
                  </p>
                  <p>{texts[language].spotify_text}</p>
                  <div className="pt-2 flex flex-wrap w-full gap-1">
                    <TechTag tech="React" />
                    <TechTag tech="TailwindCSS" />
                    <TechTag tech="NodeJS" />
                    <TechTag tech="MongoDB" />
                    <TechTag tech="Express" />
                    <TechTag tech="jwt" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:flex-row gap-5">
                <div className="order-2 lg:order-1">
                  <p className="text-lg font-semibold">
                    {texts[language].letterex_title}
                  </p>
                  <p>{texts[language].letterex_text}</p>
                  <div className="pt-2 flex flex-wrap w-full gap-1">
                    <TechTag tech="React" />
                    <TechTag tech="TypeScript" />
                    <TechTag tech="TailwindCSS" />
                    <TechTag tech="NodeJS" />
                    <TechTag tech="MongoDB" />
                    <TechTag tech="Express" />
                    <TechTag tech="jwt" />
                  </div>
                </div>
                <img
                  className="order-1 lg:order-2 shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg object-cover"
                  src="/letterex.png"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-5">
                <img
                  className="shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover"
                  src="/frontend-mugs.png"
                  onClick={() =>
                    window.open("https://frontend-mugs-z.vercel.app/", "_blank")
                  }
                />
                <div>
                  <p className="text-lg font-semibold">
                    {texts[language].frontend_title}
                  </p>
                  <p>{texts[language].frontend_text}</p>
                  <div className="pt-2 flex flex-wrap w-full gap-1">
                    <TechTag tech="CSS" />
                    <TechTag tech="Javascript" />
                    <TechTag tech="HTML" />
                    <TechTag tech="NextJS" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-5">
                <div className="order-2 lg:order-1">
                  <p className="text-lg font-semibold">
                    {texts[language].frogs_title}
                  </p>
                  <p>{texts[language].frogs_text}</p>
                  <div className="pt-2 flex flex-wrap w-full gap-1">
                    <TechTag tech="CSS" />
                    <TechTag tech="Javascript" />
                    <TechTag tech="HTML" />
                    <TechTag tech="PHP" />
                  </div>
                </div>
                <img
                  className="order-1 lg:order-2 shadow-2xl w-full lg:w-100 h-full h-max-100 lg:h-70 rounded-lg bg-gray-900 rounded-lg cursor-pointer object-cover"
                  src="/frogsknow.png"
                  onClick={() =>
                    window.open(
                      "https://frogs-know.netlify.app/localhost_3000/",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-30 pb-5 lg:pb-0">
          <Contact contactText={texts[language].contact} />
        </div>
      </div>
    </div>
  );
}

export default App;

interface TagProps {
  tech: string;
}

const TechTag = ({ tech }: TagProps) => {
  const techs = [
    "react",
    "javascript",
    "nodejs",
    "css",
    "jwt",
    "express",
    "mongodb",
    "reactrouter",
    "typescript",
    "html",
    "tailwindcss",
    "php",
    "nextjs",
  ];
  if (!techs.includes(tech.toLowerCase())) return <p>NO</p>;
  return (
    <div className="tech-tag">
      <img src={`/${tech.toLowerCase()}.svg`} className="w-4 h-4" />
      <p className="text-sm">{tech}</p>
    </div>
  );
};

const SwitchTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.remove("light");
    else document.documentElement.classList.add("light");
  }, [darkMode]);

  return (
    <label className="relative inline-block w-[3.5em] h-[2em]">
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        onChange={() => {
          setDarkMode(!darkMode);
        }}
      />

      {/* Slider */}
      <span className="absolute inset-0 cursor-pointer rounded-[30px] transition duration-500 bg-gray-200 peer-checked:bg-gray-400 dark:bg-[#0a1a44] dark:peer-checked:bg-[#8481ac] before:content-[''] before:absolute before:h-[1.4em] before:w-[1.4em] before:rounded-full before:left-[10%] before:bottom-[15%] before:shadow-[inset_8px_-4px_0px_0px_#fff000] before:bg-gray-200 dark:before:bg-[#0a1a44] before:transition before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#fff000]" />
    </label>
  );
};
