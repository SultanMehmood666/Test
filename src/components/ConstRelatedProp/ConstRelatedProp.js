import React, { useEffect, useState } from 'react';
import { getDiscountPrice, productSlug } from '@/lib/product';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import RelatedProduct from '../product/relatedproduct';

const ConstRelatedProp = ({ currentPageId }) => {
  const [data, setData] = useState([]);
  console.log("currentPageId:", currentPageId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/Constructions/ConstructionRoute', {
          method: "GET",
          mode: 'no-cors'
        });
        if (!resp.ok) {
          console.log(`network Error`);
        }
        const fetchedData = await resp.json();

        // Filter out the array with the currentPageId
        const filteredData = fetchedData.filter(item => item._id !== currentPageId);

        // Get only a maximum of 2 arrays
        const limitedData = filteredData.slice(0, 2);

        setData(limitedData);
      } catch (error) {
        console.log(error);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 1000); // Fetch data after 10 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [currentPageId]);

  return (
    <>
      <Row>
        {data.map((product, key) => {
          const slug = productSlug(product.title);
          return (
            <Col xs={12} sm={6} key={key}>
              <Link href={{ pathname: `${slug}`, query: { id: product._id } }}>
                <RelatedProduct
                  productData={product}
                  slug={product.title}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ConstRelatedProp;
