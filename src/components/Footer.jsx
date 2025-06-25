import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <span>© 2025 MIT Licensed</span>
      <div className="socials">
        <a href="https://x.com/">
          <FaXTwitter />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
