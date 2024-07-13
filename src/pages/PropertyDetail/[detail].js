import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import { useRouter } from 'next/router';

const Detail = (props) => {
    const router = useRouter();
    const { detail } = router.query;
    const representativeProduct = props.representativeProduct; // Assuming you have representativeProduct in props
    return (
        <div>
            Sultan <br/>
            {detail}<br/>
            {representativeProduct && (
                <div>
                    <h2>{representativeProduct.title}</h2>
                    <Image src={representativeProduct.productImg} alt={representativeProduct.title} width={500} height={500}/>
                    <p>{representativeProduct.description.fullDescription}<br/>
                     &quot;representative Id&quot;   {representativeProduct.id}
                    </p>
                    {/* Render other properties as needed */}
                </div>
            )}
        </div>
    )
}

export default Detail;