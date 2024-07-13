import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import {
  getSiblings,
  getClosest,
  slideUp,
  slideToggle,
} from "@/lib/product";
import { useSelector } from "react-redux";
import Image from "next/image";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {
  const { cartItems } = useSelector((state) => state.cart);

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="/">
                <Image src="/img/logo-m.svg" alt="Logo" width={300} height={100}/>
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/ConstructionWorks">construction</Link>
                  </li>

                  <li>
                    <Link href="/RealEstate">Real Estate</Link>
                  </li>

                  <li>
                    <Link href="/Maps">Maps</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
            </ul>
          </div>
          
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <Link href="https://www.facebook.com/micasadevelopersandinteriors">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/micasa-group-a88008252">
                  <FaLinkedin/>
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
                   <FaInstagram/>
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
      </div>
    </>
  );
};

export default MobileMenu;
