import Link from 'next/link';

import { FaWhatsapp ,FaInstagram,FaYoutube,FaFacebookF, FaTiktok, FaLinkedin} from 'react-icons/fa';
const HeaderSocialLinks = function () {
  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <Link href="https://www.facebook.com/micasadevelopersandinteriors" target='_blank'>  <FaFacebookF /> </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/micasa-group-a88008252" target='_blank'>  <FaLinkedin /> </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@micasagroup409" target='_blank'>  <FaYoutube /> </Link>
        </li>
        <li>
          <Link href="https://www.tiktok.com/@faraxakbar" target='_blank'>  <FaTiktok  /> </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/micasa_group_rg" target='_blank'>  <FaInstagram  /> </Link>
        </li>
        <li>
          <Link href="https://api.whatsapp.com/send?phone=%2B923224039784" target='_blank'><FaWhatsapp /></Link>
        </li>
      </ul>
    </div>
  );
};


export default HeaderSocialLinks;