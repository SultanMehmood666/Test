import Link from "next/link";
import { Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const Portfolioitem = ({ data, baseUrl, slug, setBasicExampleOpen }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="ltn__gallery-item filter_category_3">
      <div className="ltn__gallery-item-inner">
        <div
          className="ltn__gallery-item-img"
          onClick={() => setBasicExampleOpen(true)}
        >
          <Image src={`/img/gallery/${data.thumbImage}`} alt="Image" width={500} height={500} />
          <span className="ltn__gallery-action-icon">
            <span>{<FaSearch />}</span>
          </span>
        </div>
        <div className="ltn__gallery-item-info">
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{data.title}</Link>
          </h4>
          <p>{data.designation}</p>
        </div>
      </div>
    </Col>
  );
};

export default Portfolioitem;
