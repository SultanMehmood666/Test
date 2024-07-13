import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RelatedProduct = (products ) => {
const product = [products];
  // Assuming `products` contains an array of product data
  return (
    <>
      {product.map((productData, index) => (
        <div key={index} className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
          <div className="product-img">
            <Link href={`/${productData.baseUrl}/${productData.slug}`}>
              <Image
                src={`/img/product-3/${productData.productImg}`}
                alt={`${productData.title}`}
                width={500}
                height={250}
              />
            </Link>
            <div className="real-estate-agent">
              <div className="agent-img">
                <Link href={`/${productData.baseUrl}/${productData.slug}`}>
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
            <h2 className="product-title">{productData.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    // Fetch specific product data from your API
    const response = await fetch("https://micasa-server-test.vercel.app/RetriveConstruction",{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const products = await response.json();
    console.log("getserverside:",products)
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
  };
}

export default RelatedProduct;
