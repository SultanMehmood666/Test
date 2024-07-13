import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { getSortedProducts, productSlug,getDiscountPrice } from "@/lib/product";
import { LayoutOne } from "@/layouts";
import {
  FaThLarge,
  FaThList,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import RelatedProduct from "@/components/Mapproduct/relatedproduct";

import ReactPaginate from "react-paginate";
import CallToAction from "@/components/callToAction";
import products from "@/data/products.json";

function ShopGrid() {
const [mapData, setMapData]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/Maps/FetchMapsRoute', {
        method: "GET",
        headers: {
          "Content-Type": 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error("From fetch: Response is not ok");
      }

      const jsonData = await response.json();
      setMapData(jsonData); // Assuming jsonData is an array of map data
      console.log(jsonData); // Logging fetched data for verification
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Call fetchData when component mounts
}, []);


  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const pageLimit = 6;
  
  const [currentItems, setCurrentItems] = useState(mapData);
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

  return (
    <LayoutOne topbar={true}>
    {/* <!-- PRODUCT DETAILS AREA START --> */}

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <Tab.Container defaultActiveKey="first">
                <br/><br/><br/>
                <div spaceBottom="mb-30"  />
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {mapData.map((product, key) => {
                          const slug = productSlug(product.title);
                          return (
                            <Col key={key} xs={12} sm={6} lg={4}>
                              <RelatedProduct
                                slug={slug}
                                baseUrl="/shop/"
                                productData={product}
                              />
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
