import Image from "next/image";
import { useState } from "react";
import QuickViewtModal from "@/components/modals/quickViewModal";
import { Button, Grid, Modal, Box } from "@mui/material";
import { SlCalender } from "react-icons/sl";



const Blogrelatedproduct = ({
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

    const index = 0;
    const imageurl = productData.thumbnail[0].path || false
    console.log("productData from blogData:",productData, "imageurl:", imageurl)

    return (
    <>
      {productData.thumbnail[0].path ? <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
            <Image
              src={`${imageurl}`}
              width={500} height={250}
              alt={`${productData.title}`}
            /> 
          <div><br/>
              <div style={{marginLeft: '10px'}}>
              <h2>{`${productData.title}`}</h2>
                <p>< SlCalender style={{color: '#FF4B21', width: '40px'}}/><b>{`${productData.Date}`}</b></p>
              </div>
          </div>
        </div>
        
      </div> : null}
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

export default Blogrelatedproduct;
