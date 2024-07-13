import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getSortedProducts, productSlug,getDiscountPrice } from "@/lib/product";
import { LayoutOne } from "@/layouts";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import Blogrelatedproduct from "@/components/product/Blogrelatedproduct";
// import Bloglist from "@/components/product/Bloglist";
import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
// import products from "@/data/constproducts.json";
import Link from "next/link";


function ShopGrid() {
  const [blogData, setBlogData] = useState([]);
// Gallery Images Access


  useEffect(()=>{
    async function FetchBlog(){
      try{
        const response = await fetch('/api/Blog/FetchBlogRoute', {
          method: 'GET',
        });
        if(!response.ok){
          throw new Error("From fetch: Response is not ok");
        }
        const jsonData = await response.json();
        setBlogData(jsonData);
        console.log(blogData);
      }catch(error){
        console.log(error)
      }
    }
    FetchBlog();
  }, [])
  
  const dataArray = blogData;
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([]);
  const pageLimit = 6;
  
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);


  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };


  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const [query, setQuery] = useState("");
  const keys = ["title"];
    
    const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % products.length;
    setOffset(newOffset);
  };

  useEffect(() => {
    if (blogData) {
      setCurrentItems(blogData);
    }
  }, [blogData]);
  
  console.log("DataArray:",dataArray);
  
  return (
    <LayoutOne topbar={true}>
    {/* <!-- PRODUCT DETAILS AREA START --> */}

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <Tab.Container defaultActiveKey="first">
                <br/><br/><br/>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {blogData.map((product, key) => {
                          const slug = productSlug(product.title);
                          console.log("currentItems:",currentItems)

                          return (
                            <Col key={key} xs={12} sm={6} lg={4}>
                              <Link href={{pathname: `SpecBlog/${slug}`, query:{id: product._id}}}>
                              <Blogrelatedproduct
                                slug={product.title}
                                baseUrl="PropertyDetail/"
                                productData={product}         
                              />
                              </Link>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  
                </Tab.Content>
              </Tab.Container>

              <div className="ltn__pagination-area text-center">
                <ReactPaginate
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  nextLabel={<FaAngleDoubleRight />}
                  previousLabel={<FaAngleDoubleLeft />}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination ltn__pagination justify-content-center"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END -->

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
  );
}

export default ShopGrid;



