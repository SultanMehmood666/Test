import { useEffect, useState } from "react";
import Slider from "react-slick";
import {LayoutThree } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import {getProductsTwo} from '@/lib/productTwo';
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleThree from "@/components/hero/styleThree";
import PropertyItem from "@/components/product/properties";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
import CallToAction from "@/components/callToAction";
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import brandLogoData from "@/data/brand-logo/indexTwo.json";
import Image from "next/image";
import productsTwo from "@/data/Realproducts.json"
import Modal from '@/components/PopUp/index';
import FetchConst, {FetchTestimonials} from '@/hooks/PagesDataRetrive';
import {FetchSlider} from '@/hooks/PagesDataRetrive';



function HomeVersionTwo(props) {
  const {Data} = FetchConst();
  const [isOpen, setOpen] = useState(false);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
 const countryProductsTwo = getProductsTwo(productsTwo, "buying", "country", 5);
  const [constructionProp, setConstructionProp] = useState([]); 
  // const countryProducts = getProducts(products, "buying", "country", 5);
  const [AdminPopUp, setadminPopUp] = useState(false);
  const [ClientPopUp, setClientPopUp] = useState(true);
  const { data } = props;
  const {testimonialsData} = FetchTestimonials();
  const {sliderData} = FetchSlider();
  const ConstData = Data;

useEffect(() => {
  // Retrieve the value of ModelKey from session storage
  fetchAdminPopUp();
  setClientPopUp(Boolean(sessionStorage.getItem('Client')));
  // If the stored value is 'false', close the modal
  if (sessionStorage.getItem('Client') === 'false') {
      setClientPopUp(false);
  }else {
      // If the stored value is not 'false', set it to 'false' and close the modal
      sessionStorage.setItem('Client', 'true');
      setClientPopUp(true);
    }
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/Constructions/ConstructionRoute',{
        method: "GET"
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setConstructionProp(data);
      console.log("constructionProp:", data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Function to fetch data from the second API
const fetchAdminPopUp = async () => {
    try {
        const response = await fetch('/api/PopUp/PopUpData',{
          method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the second API');
        }
        const data = await response.json();
         setadminPopUp(data[0].PopUp);
    } catch (error) {
        console.error('Error fetching data from the second API:', error.message);
    }
};

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  

  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: '80px',
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
  const LogoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const handleCloseModal = () => {
    setIsModelOpen(false);
};

  return (
    <>
    <LayoutThree topbar={true}>
      {AdminPopUp && ClientPopUp && <Modal/>}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="2N_kcipnMd0"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
        <div className="ltn__slider-area ltn__slider-12 section-bg-2">
        <HeroSectionStyleThree data={sliderData}  />
        </div>
      {/* <!-- SLIDER AREA END --> From There*/}

        {/* Our Main Focus */}
      {/* <!-- FEATURE AREA START ( Feature - 6) --> */} 
        <Feature
          servicebtn={true}
          iconTag={false}
          data={featureData}
          classes=""
          headingClasses=""
          titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->
    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      {!!constructionProp && constructionProp.length > 3 &&  (
      <div className="ltn__search-by-place-area before-bg-top pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                Construction Projects
                </h6>
                <h1 className="section-title">
                  Some Of Our Recent<br />
                  Construction Projects
                </h1>
              </div>
            </Col>
          </Row>

        {!!constructionProp?.length ? (
          <Slider {...productsettings} className="ltn__product-slider-item-four-active-full-width slick-arrow-1">
              {constructionProp.map((product, key) => {
                const slug = productSlug(product.title);
                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/Constwork"
                  />
                );
              })}
              
            </Slider>
          ) : null}
        </Container>
      </div>)}
      {/* <!-- SEARCH BY PLACE AREA END -->

      <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div className="ltn__search-by-place-area before-bg-top pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                Real Estate Projects
                </h6>
                <h1 className="section-title">
                  Some Of Our Recent<br />
                  Real Estate Projects
                </h1>
              </div>
            </Col>
          </Row>

        {!!countryProductsTwo?.length ? (
          <Slider {...productsettings} className="ltn__product-slider-item-four-active-full-width slick-arrow-1">
              {countryProductsTwo.map((product, key) => {
                const slug = productSlug(product.title);
                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/RealState"
                  />
                );
              })}
              
            </Slider>
          ) : null}
        </Container>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->


      {/* <!-- BLOG AREA END -->

    {/* <!-- TESTIMONIAL AREA START (testimonial-8) --> */} 
      {testimonialsData.length && <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/23.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Client,s Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What,s Our Client <br />
                  Says About Us
                </h1>
              </div>
            </Col>
          </Row>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            {testimonialsData.map((data, key) => {
              return <Col xs={12} lg={4} key={key}><TestimonialCarouselItemTwo data={data} /></Col>;
            })}
            {/* <!--  --> */}
          </Slider>
        </Container>
      </div>}
      {/* <!-- TESTIMONIAL AREA END -->*/}
      {/* Call to action 2 */}
            <CallToActionstyleTwo/><br/><br/>
    
    
      {/* <!-- VIDEO AREA START --> */}
      <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-image"
                style={{
                  backgroundImage: `url("/img/bg/15.jpg")`,
                }}
              >
                <button
                  onClick={() => setOpen(true)}
                  className="ltn__video-icon-2 ltn__video-icon-2-border border-radius-no ltn__secondary-bg"
                >
                  <FaPlay className="icon-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- VIDEO AREA END--> */}


      {/* <!-- BRAND LOGO AREA START --> */}
      <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" style={{
        backgroundImage: `url("/img/bg/7.jpg")`,
      }}>
        <Container fluid>
          <Row className="ltn__brand-logo-active">
            <Col xs={12}>
              <Slider {...LogoSettings}>
                {brandLogoData.map((logo, key) => {
                  return (
                    <div key={key} className="ltn__brand-logo-item">
                      <Image
                        src={`/img/brand-logo/${logo.image}`}
                        alt="Brand Logo"
                        width={200}
                        height={50}
                      />
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- BRAND LOGO AREA END --> */}

    
    <br/><br/>
    
    {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}

    </LayoutThree>
    </>
  );
}


// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "src/data/hero/", "index-two.json");
//   const data = JSON.parse(await fs.readFile(filePath));

//   return {
//     props: {
//       data,
//     },
//   };
// }
export default HomeVersionTwo;
