import Image from "next/image";
import { useState } from "react";
import QuickViewtModal from "@/components/modals/quickViewModal";
import { Button, Grid, Modal, Box } from "@mui/material";


const RelatedProduct = ({
  productData,
}) => {
  let badgeText = "";
  const [isHovered, setIsHovered] = useState(false);

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  // const handleDownloadPDF = () => {
  //   // Initiate the download of the PDF file
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = productData.pdfView;
  //   downloadLink.download = productData.fileName;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
    const index = 0;
    const imageurl = `${productData.DisplayImage.img[index].path}`

  console.log("productData:",productData, "imageurl:", imageurl,)
    return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
            <Image
              src={imageurl}
              alt={`${productData.title}`}
              width={500} height={250}
            />  
          <div className="real-estate-agent">
            {/* <div className="agent-img">
                <Image
                  src={`${productData.logo}`}
                  alt={`${productData.title}`}
                  width={50} height={50}
                />
            </div> */}
          </div>
        </div>
        <div className="product-info">
            <span style={{color: 'green',}}><b>{productData.propertyDetails.propertyStatus}</b></span>
          <h2 className="product-title">
            {productData.title}
          </h2>
          <span style={{color: 'black', fontSize: '15px'}}>Location: {productData.propertyDetails.location} <br/> Area: {productData.propertyDetails.totalArea} </span><br/>
            <span style={{color: 'black'}}><br/><h3>Rs. {productData.propertyPrice.price}</h3></span>
        </div>
      </div>
      <Modal
        open={modalShow}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ position: 'relative', width: "100%", bgcolor: 'white', p: 4, height: "100%" }}>
          <Button 
            sx={{ 
              position: 'absolute', 
              top: 10, 
              right: 40,
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'red'
              }
            }} 
            onClick={handleCloseModal}>
            Close
          </Button>
          <Box sx={{ padding: 2 }}>
            <embed src={productData.pdfView} width="100%" height="500px" 
            sx={{
              "@media (max-width: 600px)": {
                height: "300px",
              },
            }}

            />
          </Box>
        </Box>
      </Modal>
      <QuickViewtModal
        productData={productData}
        onHide={handleCloseModal}
      />
    </>
  );
};

export default RelatedProduct;
