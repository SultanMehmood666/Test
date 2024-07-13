
import Image from 'next/image';
import {useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCalendarAlt,
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";
import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import FollowUs from "@/components/followUs";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import FetchConst from "@/hooks/PagesDataRetrive";
import ConstRelatedProp from '@/components/ConstRelatedProp/ConstRelatedProp';




function ProductDetails({products}) {
  const [product, setProducts] = useState(products || []);
  const [respData, setRespData] = useState([]);
  const [constData, setConstData] = useState([]);
  console.log("ProductDetails:", product)

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
        fetch("/api/Constructions/constructionBookingRoutebooking", {
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
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title={product.map((products)=>{return products.title})}
          sectionPace="mb-0"
          currentSlug={product.map((products)=>{return products.title})}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                  </div>
                   
                   {/* Content */}
                   <div>
                    {product.map((item) => (
                        <div key={item._id}>
                            {/* Render HTML content */}
                            <div dangerouslySetInnerHTML={{ __html: item.Content }} />
                        </div>
                    ))}
                    </div>
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
                  
                  
                  {/* Need this one */}
                  {/* <!-- Popular Post Widget --> */}
                  {/* <div className="widget ltn__popular-post-widget">
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
                  </div> */}

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
  const isDevelopment = process.env.isDevelopment === "Development"

  const baseUrl = isDevelopment ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL;
  const id = context.query.id; 

  try {
    // Fetch specific product data from your API
    const response = await fetch(`${baseUrl}/api/Blog/FetchSpecBlog?id=${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const product = await response.json();
    const products = [product];
    console.log("productss",products)
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