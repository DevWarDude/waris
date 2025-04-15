import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";

function SocialLink({ className, iconClassName }) {
  return (
    <div
      className={`flex justify-center gap-4 text-xl text-stone-400 ${className}`}
    >
      <a href="https://x.com/BackCodes704" target="_blank">
        <FaTwitter className={`${iconClassName}`} />
      </a>
      <FaWhatsapp className={`${iconClassName}`} />
      <a
        href="https://www.linkedin.com/in/ganiu-waris-588b722b7/"
        target="_blank"
      >
        <FaLinkedin className={`${iconClassName}`} />
      </a>
      <a href="https://github.com/DevWarDude" target="_blank">
        <FaGithub className={`${iconClassName}`} />
      </a>
    </div>
  );
}

SocialLink.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default SocialLink;
