import { Github, Linkedin, Mail } from "lucide-react";
import * as motion from "motion/react-client";

interface ContactProps {
  contactText: string;
}

const buttonStyles =
  "rounded-full bg-opacity-0 border border-1 w-fit flex flex-row gap-1 items-center";

const Contact = ({ contactText }: ContactProps) => {
  return (
    <div className="w-full justify-center my-10 flex flex-wrap gap-2">
      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        className={buttonStyles}
        onClick={() => window.open("https://github.com/isalamajor/", "_blank")}
      >
        <Github />
        <p>Github</p>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        className={buttonStyles}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/isabel-hernández-barrio-408a38326",
            "_blank",
          )
        }
      >
        <Linkedin />
        LinkedIn
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        className={buttonStyles}
        onClick={() => (window.location.href = "mailto:isahbarrio@gmail.com")}
      >
        <Mail />
        {contactText}
      </motion.button>
    </div>
  );
};

export default Contact;
