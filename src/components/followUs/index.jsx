import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const FollowUs = ({ title }) => {
  return (
    <>
      <div className="widget ltn__social-media-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          {title}
        </h4>
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <Link href="https://www.facebook.com/micasadevelopersandinteriors">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/micasa-group-a88008252">
                <FaLinkedinIn/>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@micasagroup409">
                <FaYoutube/>
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@faraxakbar">
                <FaTiktok/>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/micasa_group_rg/">
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link href="https://api.whatsapp.com/send?phone=%2B923224039784">
                <FaWhatsapp/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
