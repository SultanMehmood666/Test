import Image from "next/image";
import { useState } from "react";
import QuickViewtModal from "@/components/modals/quickViewModal";

const RelatedProduct = ({
  productData,
  slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {
  let badgeText = "";

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
            <Image
              src={`/img/product-3/${productData.productImg}`}
              alt={`${productData.title}`}
              width={500} height={250}
            />
          <div className="real-estate-agent">
            <div className="agent-img">
                <Image
                  src={`${productData.logo}`}
                  alt={`${productData.title}`}
                  width={50} height={50}
                />
            </div>
          </div>
        </div>
        <div className="product-info">
          {/* <div className="product-badge">
            <ul>
              <li
                className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
              >
                {badgeText}
              </li>
            </ul>
          </div> */}
          <h2 className="product-title">
            {productData.title}
          </h2>

        </div>
        {/* <div className="product-info-bottom">
          <div className="product-price">
            <span>
              {`$ ${productData.price}`}
              <label>/Month</label>
            </span>
          </div>
        </div> */}
      </div>
      <QuickViewtModal
        productData={productData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </>
  );
};

export default RelatedProduct;
