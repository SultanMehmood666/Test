import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const TeamItem = ({ data, baseUrl, slug, additionalClassname }) => {
  console.log(data)
  return (
    <>
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="team-img">
          <Image src={`/img/team/${data.image}`} alt="Image" width={350} height={350}/>
        </div>
        <div className="team-info">
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{data.name}</Link>
          </h4>
          <h6 className="ltn__secondary-color">{data.designation}</h6>
          <div className="ltn__social-media">
            <ul>
              <li>
                <Link href={`${data.information.LinkedIn}`}>
                  <FaLinkedin/>
                </Link>
              </li>
              <li>
                <Link href={`${data.information.whatsapp}`}>
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link href={`${data.information.email}`}>
                  <MdEmail/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
