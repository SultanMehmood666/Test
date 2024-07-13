import Image from "next/image";
const TestimonialCarouselItem = ({data}) => {
  return (
    <>
      <div className="ltn__testimonial-item ltn__testimonial-item-7">
        <div className="ltn__testimoni-info">
          <p>
            <i className="flaticon-left-quote-1"></i>
            {data.description}
          </p>
          <div className="ltn__testimoni-info-inner">
            <div className="ltn__testimoni-img">
              <Image src={`/img/testimonial/${data.img}`} alt={`${data.name}`} width={500} height={500}/>
            </div>
            <div className="ltn__testimoni-name-designation">
              <h5> {data.name}</h5>
              <label>{data.type}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarouselItem;
