import {useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";
import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import FollowUs from "@/components/followUs";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import RealRelatedProps from "@/components/RealRelatedProp/realRelatedProps";


function ProductDetails({products}) {
  const [respData, setRespData] = useState([]);
  const [constData, setConstData] = useState([]);
  const [product, setProducts] = useState(products);
 // Gallery Images Access
  const FileAccess = 'https://micasa-server-test.vercel.app/api/files/'
  // map items
  const Galleryimage1 = product.map((products)=>{return products.gallery.img1[0].path});
  const Galleryimage2 = product.map((products)=>{return products.gallery.img2[0].path});
  const Galleryimage3 = product.map((products)=>{return products.gallery.img3[0].path});
  const AgentImg = product.map((products)=>{return products.Agent.img});
  const AgentFullName = product.map((products)=>{return products.Agent.fullName});
  const AgentDest = product.map((products)=>{return products.Agent.designation});
  const AgentRaiting = product.map((products)=>{return products.Agent.raiting});
  const AgentDescription = product.map((products)=>{return products.Agent.description});
  const YTVideo = product.map((products)=>{return products.youtubeVideoID})
// Floor Plans
  const FirstFloor = product.map((products)=>{return products.firstFloor})
  const SecondFloor = product.map((products)=>{return products.secondFloor})
  const ThirdFloor = product.map((products)=>{return products.thirdFloor})
 
//  Others
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const filteredProduct = product.map((products)=>{return products})
  const latestdBlogs = getProducts(blogData, "buying", "featured", 4);
  const ProductGallery = product.map((products)=>{return products.gallery})
  const GoogleMap = product.map((products)=>{return products.GoogleMap});
  // Booking Message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Hanlde Booking
  function handleBooking(){
    const newBooking = new FormData();
    newBooking.append("Name", name);
    newBooking.append("Email", email);
    newBooking.append("Message", message);
  
    try{
        fetch("/api/Constructions/constructionBookingRoute", {
          method: "POST",
          body: newBooking,
          mode: 'no-cors'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
        });
    }catch(error){
      console.log(error);
    }
  }

  const relatedProducts = getProducts(
    filteredProduct,
    filteredProduct[0].category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    filteredProduct,
    filteredProduct[0].category[0],
    "topRated",
    2
  );

  const popularProducts = getProducts(
    filteredProduct,
    filteredProduct[0].category[0],
    "popular",
    4
  );

  const discountedPrice = getDiscountPrice(
    filteredProduct[0].price,
    filteredProduct[0].discount
  ) 

  const productPrice = filteredProduct[0].price;
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === filteredProduct[0].id
  );


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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  const [isOpen, setOpen] = useState(false);
    return (
    <>
      <LayoutOne topbar={true}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={`${YTVideo}`}
          onClose={() => setOpen(false)}
        />

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid className="px-0 pt-10">
            <Slider
              {...productDetailsCarouselSettings}
              className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
            >
              {product[0].carousel.map((single, key) => {
                return (
                  <div className="ltn__img-slide-item-4" key={key}>
                    <Link href={`${FileAccess}${single.img[0].path}`}>
                      <Image
                        src={`${FileAccess}${single.img[0].path}`}
                        alt={`${single.title}`}
                      />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                    <ul>
                    <div style={{padding: '10px 10px', height: '40px', width: '120px', color: 'green', fontSize: '3vh', fontStyle: 'bold'}}>
                        {product.map((products)=>{return products.propertyDetails.propertyStatus})}
                      </div>
                    </ul>
                  </div>
                  <h1> {product.map((products)=>{return products.title})}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    {product.map((products)=>{return products.propertyDetails.location})}
                  </label>
                  <h4 className="title-2"> {products.map((product)=>{return product.description.title})}</h4>
                  <p>{product.map((products)=>{return products.description.fullDescription})}</p>

                  <h4 className="title-2">Property Detail</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      <li>
                        <label>Property Status:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.propertyStatus})}</span>
                      </li>
                      <li>
                        <label>Area: </label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.Area})} sqft</span>
                      </li>
                      <li>
                        <label>Style:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.style})}</span>
                      </li>
                      <li>
                        <label>Location:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.location})}</span>
                      </li>
                      <li>
                        <label>Furnished:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.furnished})}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Corner:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.Corner})}</span>
                      </li>
                      <li>
                        <label>Facing Park:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.FacingPark})} sqft</span>
                      </li>
                      <li>
                        <label>Year Built:</label>{" "}
                        <span>{product.map((products)=>{return products.propertyDetails.yearBuilt})}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Room</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Rooms})}</small>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bathrooms</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.bathroom})}</small>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bedroom</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Bedroom})}</small>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Living Room</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.livingroom})}</small>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Dining Area</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Diningarea})}</small>
                          </div>
                        </div>
                      </li>
                      
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Kitchens</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.kitchens})}</small>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garden</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.garden})}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Parking Area</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.parking})}</small>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Servant Quarters</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.servantQuarters})}</small>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Air Conditioning</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.AirCondition})}</small>
                          </div>
                        </div>
                        </li>

                        <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Heating</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Heating})}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Floors</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Floors})}</small>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Swimming Pool</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.SwimmingPool})}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Jacuzzi</h6>
                            <small>{product.map((products)=>{return products.factsAndFeatures.Jacuzzi})}</small>
                          </div>
                        </div>
                      </li>
                      
                    </ul>
                  </div>

                  <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`${FileAccess}/${Galleryimage1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <Image
                            className="mb-30"
                            src={`${FileAccess}/${Galleryimage1}`}
                            alt={product.map((products)=>{return products.title})}
                            width={300}
                            height={200}
                          />
                        </Link>
                        <Link
                          href={`${FileAccess}/${Galleryimage2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <Image
                            className="mb-30"
                            src={`${FileAccess}/${Galleryimage2}`}
                            alt={product.map((products)=>{return products.title})}
                            height={200}
                            width={300}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`${FileAccess}${Galleryimage3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <Image
                            className="mb-30"
                            src={`${FileAccess}/${Galleryimage3}`}
                            alt={product.map((products)=>{return products.title})}
                            width={400}
                            height={430}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h4 className="title-2 mb-10">Amenities</h4>

                  <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product[0].amenities1.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product[0].amenities2.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product[0].amenities3.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      src={`${GoogleMap}`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div>

                  <h4 className="title-2">Floor Plans</h4>
                  {/* <!-- APARTMENTS PLAN AREA START --> */}

                  <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                    <Tab.Container defaultActiveKey="first">
                      <div className="ltn__tab-menu ltn__tab-menu-3">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">First Floor</Nav.Link>
                          <Nav.Link eventKey="second">Second Floor</Nav.Link>
                          <Nav.Link eventKey="third">Third Floor</Nav.Link>
                        </Nav>
                      </div>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="ltn__apartments-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                <Image src={`${FileAccess}${FirstFloor[0].image[0].path}`} alt="#" width={500} height={300} />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>{`${FirstFloor[0].title}`}</h2>
                                  <p>
                                  {`${FirstFloor[0].description}`}
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>{`${FirstFloor[0].totalArea}`} Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>{`${FirstFloor[0].bedroom}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>
                                            <span>{`${FirstFloor[0].pets}`}</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>
                                            <span>{`${FirstFloor[0].lounge}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                <Image src={`${FileAccess}${SecondFloor[0].image[0].path}`} alt="#" width={500} height={300} />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>{`${SecondFloor[0].title}`}</h2>
                                  <p>
                                  {`${SecondFloor[0].description}`}
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>{`${SecondFloor[0].totalArea}`} Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>{`${SecondFloor[0].bedroom}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>{`${SecondFloor[0].title}`}</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>{`${SecondFloor[0].lounge}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                <Image src={`${FileAccess}${SecondFloor[0].image[0].path}`} alt="#" width={500} height={300} />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>{`${ThirdFloor[0].title}`}</h2>
                                  <p>
                                  {`${ThirdFloor[0].description}`}
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>{`${ThirdFloor[0].totalArea} sq. ft`}</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>{`${ThirdFloor[0].bedroom}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>{`${ThirdFloor[0].pets}`}</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>{`${ThirdFloor[0].lounge}`} Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="fourth">
                          <div className="ltn__product-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <Image href="/img/others/10.png" alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>Top Garden</h2>
                                  <p>
                                    Enimad minim veniam quis nostrud
                                    exercitation ullamco laboris. Lorem ipsum
                                    dolor sit amet cons aetetur adipisicing elit
                                    sedo eiusmod tempor.Incididunt labore et
                                    dolore magna aliqua. sed ayd minim veniam.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="product-details-apartments-info-list  section-bg-1">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Total Area</label>{" "}
                                            <span>2800 Sq. Ft</span>
                                          </li>
                                          <li>
                                            <label>Bedroom</label>{" "}
                                            <span>150 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="apartments-info-list apartments-info-list-color">
                                        <ul>
                                          <li>
                                            <label>Belcony/Pets</label>{" "}
                                            <span>Allowed</span>
                                          </li>
                                          <li>
                                            <label>Lounge</label>{" "}
                                            <span>650 Sq. Ft</span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane> */}
                      </Tab.Content>
                    </Tab.Container>
                  </div>

                  {/* <!-- APARTMENTS PLAN AREA END --> */}

                  <h4 className="title-2">Property Video</h4>
                    <iframe
                      width="800"
                      height="500"
                      src={`https://www.youtube.com/embed/${YTVideo}?autoplay=0`}
                      title="Property Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                  

                  <h4 className="title-2">Related Properties</h4>
                  <RealRelatedProps currentPageId={products[0]._id}/>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                  {/* <!-- Form Widget --> */}
                  <div className="widget ltn__form-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Drop Messege For Book
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="yourname"
                        placeholder="Your Name*"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                      />
                      <input
                        type="text"
                        name="youremail"
                        placeholder="Your e-Mail*"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                      />
                      <textarea
                        name="yourmessage"
                        placeholder="Write Message..."
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                      ></textarea>
                      <button type="submit" className="btn theme-btn-1" onClick={handleBooking}>
                        Send Messege
                      </button>
                    </form>
                  </div>
                  
                  
                  
                  {/* <!-- Popular Post Widget --> */}
                  <div className="widget ltn__popular-post-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Leatest Blogs
                    </h4>
                    <ul>
                      {latestdBlogs.map((blog, key) => {
                        const slug = productSlug(blog.title);
                        let imagecount = key + 1;

                        return (
                          <li key={key}>
                            <div className="popular-post-widget-item clearfix">
                              <div className="popular-post-widget-img">
                                <Link href={`/blog/${slug}`}>
                                  <Image
                                    href={`/img/team/${imagecount}.jpg`}
                                    alt="#"
                                    width={500}
                                  />
                                </Link>
                              </div>
                              <div className="popular-post-widget-brief">
                                <h6>
                                  <Link href={`/blog/${slug}`}>
                                    {blog.title}
                                  </Link>
                                </h6>
                                <div className="ltn__blog-meta">
                                  <ul>
                                    <li className="ltn__blog-date">
                                      <Link href={`/blog/${slug}`}>
                                        <span>
                                          <FaCalendarAlt />
                                        </span>
                                        <span>{blog.date}</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <FollowUs title="Follow Us" />  
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- SHOP DETAILS AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
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
      </LayoutOne>

    </>
  );
}

export default ProductDetails;


export async function getServerSideProps(context) {
  const id = context.query.id;
  
  try {
    // Fetch specific product data from your API
    const response = await fetch(`/api/RealEstate/SpecificRealEstate?id=${id}`,{
      method: 'GET', 
      mode: 'no-cors'
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const product = await response.json();
    const products = [product];
    // Validate the response


    return {
      props: {
        products,
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: null // You can handle error cases accordingly in your component
      }
    };
  }
}
