import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { LayoutOne } from "@/layouts";
import CallToAction from "@/components/callToAction";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Image from "next/image";


function HistoryPage() {

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <FaArrowLeft />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <FaArrowRight />
        </button>
    );

    const blogSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <LayoutOne topbar={true}>
            <div className="ltn__our-history-area pb-100" style={{marginTop: '20px'}}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Tab.Container defaultActiveKey="first">
                                <div className="ltn__our-history-inner">
                                    <div className="ltn__tab-menu text-uppercase">
                                        <Nav>
                                            <Nav.Link eventKey="first">DHA Phase 1</Nav.Link>
                                            <Nav.Link eventKey="second">DHA Phase 2</Nav.Link>
                                            <Nav.Link eventKey="third">DHA Phase 3</Nav.Link>
                                            <Nav.Link eventKey="fourth">DHA Phase 4</Nav.Link>
                                            <Nav.Link eventKey="five">DHA Phase 5</Nav.Link>
                                            <Nav.Link eventKey="Six">DHA Phase 6</Nav.Link>
                                            <Nav.Link eventKey="Seven">DHA Phase 7</Nav.Link>
                                            <Nav.Link eventKey="Eight">DHA Phase 8</Nav.Link>
                                            <Nav.Link eventKey="Nine">DHA Phase 9</Nav.Link>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="ltn__product-tab-content-inner" style={{ textAlign: 'center' }}>
                                            <Col xs={12} lg={12} className="align-self-center" style={{ padding: '0 20px' }}>
                                            <Image src="/Ex-Transfer/DHA/DHA_PHASE_ONE.jpg" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} alt="DHA Phase One"/>
                                            </Col>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <div className="ltn__product-tab-content-inner" style={{ textAlign: 'center' }}>
                                            <Col xs={12} lg={12} className="align-self-center" style={{ padding: '0 20px' }}>
                                            <Image src="/Ex-Transfer/DHA/DHA_PHASE_TWO.jpg" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} alt="DHA Phase Two"/>
                                            </Col>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third">
                                        <div className="ltn__product-tab-content-inner" style={{ textAlign: 'center' }}>
                                            <Col xs={12} lg={12} className="align-self-center" style={{ padding: '0 20px' }}>
                                            <Image src="/Ex-Transfer/DHA/DHA_PHASE_THREE.jpg" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} alt="DHA Phase Three"/>
                                            </Col>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fourth">
                                        <div className="ltn__product-tab-content-inner" style={{ textAlign: 'center' }}>
                                            <Col xs={12} lg={12} className="align-self-center" style={{ padding: '0 20px' }}>
                                            <Image src="/Ex-Transfer/DHA/DHA_PHASE_FOUR.jpg" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} alt="DHA Phase Four"/>
                                            </Col>
                                        </div>
                                    </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <div className="ltn__feature-area section-bg-2 pt-115 pb-90">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <TitleSection
                                sectionClasses="text-center"
                                headingClasses="section-subtitle-2"
                                titleSectionData={{
                                    subTitle: "Features",
                                    title: "Why Choose Us",
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} xl={4}>
                            <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-house-4"></i></span>
                                    </div>
                                    <h3 className="animated fadeIn"><Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">The Perfect Residency</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={4}>
                            <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-mechanic"></i></span>
                                    </div>
                                    <h3 className="animated fadeIn"><Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">Global Architect Experts</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} xl={4}>
                            <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-repair-1"></i></span>
                                    </div>
                                    <h3 className="animated fadeIn"><Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">Built-in Storage Cupboards</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}


            {/* <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" style={{ backgroundImage: `url("../img/bg/13.jpg")` }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="call-to-action-inner call-to-action-inner-5 text-decoration text-center">
                                <h2 className="white-color">24/7 Availability, Make <Link href="https://quarter-nextjs.netlify.app/team/kelian-anderson">An Appointment</Link></h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}


            {/* <!-- BLOG AREA START (blog-3) -->  */}
            {/* <div className="ltn__blog-area pt-120 pb-70">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <TitleSection
                                sectionClasses="text-center"
                                headingClasses="section-subtitle-2"
                                titleSectionData={{
                                    subTitle: "News & Blogs",
                                    title: "Leatest News Feeds",
                                }}
                            />
                        </Col>
                    </Row>
                    <Slider
                        {...blogSettings}
                        className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
                    >
                        {blogData.map((data, key) => {
                            const slug = productSlug(data.title);
                            return (
                                <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                            );
                        })}
                    </Slider>
                </Container>
            </div> */}
            {/* <!-- BLOG AREA END --> */}



            <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <CallToAction />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutOne>
    );
}

export default HistoryPage;