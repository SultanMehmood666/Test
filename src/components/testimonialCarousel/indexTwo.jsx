import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const TestimonialCarouselItemTwo = ({ data }) => {
  const FileAcess = '/api/files'
  console.log("Slider", data)
  return (
    <>
      <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
        <div className="ltn__testimoni-info">
          <div className="ltn__testimoni-author-ratting">
            <div className="ltn__testimoni-info-inner">
              <div className="ltn__testimoni-img">
                <Image src={`${FileAcess}/${data.Profile[0].path}`} alt="#" width={70} height={70}/>
              </div>
              <div className="ltn__testimoni-name-designation">
                <h5>{data.Title}</h5>
                <label>{data.Designation}</label>
              </div>
            </div>
            <div className="ltn__testimoni-rating">
              <div className="product-ratting">
                <ul>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaStar/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p>{data.Description}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarouselItemTwo;
