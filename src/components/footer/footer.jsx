import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok
} from "react-icons/fa";
import Image from "next/image";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={4}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <Image src="/img/logo-m.svg" alt="Logo" /> */}
                      <Image src="/img/logo-m-w.svg" alt="Logo" width={200} height={50}/>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>MiCasa Tower, Plot 20, Sector-T, DHA P-8, Lahore.</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+92-300-8494495">+92-300-8494495</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@micasadi.com">
                              info@micasadi.com
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
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
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                    <li>
                        <Link href="/">Home</Link>
                      </li>
                    <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/Maps">Maps</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/shop">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/RealEstate">Real Estate</Link>
                      </li>
                      <li>
                        <Link href="/ConstructionWorks">Construction Works</Link>
                      </li>
                      <li>
                        <Link href="/contact">Interior Design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved By <b>{"MiCasa Developers and Interiors"}</b>
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>

                    <li>
                      <Link href="Privacy-Policy">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
