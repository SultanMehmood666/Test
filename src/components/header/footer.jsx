import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import Image from "next/image";

const Footer = function () {
  return(
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area">
        <div className="footer-top-area section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <Image src="/img/logo-m-w.svg" alt="Logo" width={500} height={500}/>
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
                          <p>
                            MiCasa Tower, Plot 20, Sector-T, DHA P-8, Lahore.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+92-300-8494495">
                              +92-300-8494495
                            </Link>
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
                        <Link href="#" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Youtube">
                          <FaYoutube />
                        </Link>
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
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link href="/locations">Locations Map</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/order-tracking">Order tracking</Link>
                      </li>
                      <li>
                        <Link href="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <Link href="/account">My account</Link>
                      </li>
                      <li>
                        <Link href="/about">Promotional Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <Link href="/account">My account</Link>
                      </li>
                      <li>
                        <Link href="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link href="/order-tracking">Order tracking</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
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
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved @ Company{" "}
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="#">Privacy & Policy</Link>
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
