import Image from "next/image";
import productDatas from '@/data/Realproducts.json';
import Link from "next/link";

const RelatedProduct = ({baseUrl,  slug}) => {
  return (
    <>
      {productDatas.map((productData, index) => (
        <div key={index} className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
          <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <Image
              src={`/img/product-3/${productData.productImg}`}
              alt={`${productData.title}`}
              width={500}
              height={250}
            />
            </Link>
            <div className="real-estate-agent">
              <div className="agent-img">
              <Link href={`/${baseUrl}/${slug}`}>
                <Image
                  src={`${productData.logo}`}
                  alt={`${productData.title}`}
                  width={50}
                  height={50}
                />
                </Link>
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
            <h2 className="product-title">{productData.title}</h2>
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
      ))}
    </>
  );
};

export default RelatedProduct;