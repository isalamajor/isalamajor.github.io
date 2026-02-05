import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
type Language = "es" | "en" | "fr";

interface SelectLanguage {
  name: Language;
  image: string;
}

interface DropdownProps {
  onSelectionChange: (newSelection: string) => void;
}

export function Dropdown({ onSelectionChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<SelectLanguage>({
    name: "en",
    image: "/flags/english.svg",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  const languagesAvailable = [
    { name: "en", image: "/flags/english.svg" },
    { name: "es", image: "/flags/spanish.svg" },
    { name: "fr", image: "/flags/french.svg" },
  ];
  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="selectLang h-8 w-[7rem] w-fit rounded-full ring-transparent flex flex-row gap-2 justify-center items-center font-black"
      >
        <img src={language.image} className="h-5 w-5" />
        {language.name.toUpperCase()}
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -7 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full mt-1 p-2 w-full rounded-lg bg-white shadow-lg selectLang font-thin"
          >
            <>
              {languagesAvailable.map((lang) => (
                <div
                  className="flex flex-row gap-2 w-full items-center rounded hover:bg-[#f2f286] selectLangColor"
                  key={lang.name}
                  onClick={() => {
                    setLanguage(lang as SelectLanguage);
                    onSelectionChange(lang.name);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    size={16}
                    strokeWidth={2}
                    color={
                      language.name === lang.name ? undefined : "transparent"
                    }
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <img src={lang.image} className="h-5 w-5 font-thin "></img>
                    {lang.name.toUpperCase()}
                  </div>
                </div>
              ))}
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
