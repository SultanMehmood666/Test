import { useState } from "react";
import QuickViewtModal from "@/components/modals/quickViewModal";
import { Button, Grid, Modal, Box } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';

const RelatedProduct = ({
  productData,
}) => {
  let badgeText = "";
  const [isHovered, setIsHovered] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleDownloadPDF = () => {
    console.log(productData);
    // Initiate the download of the PDF file
    if (productData.pdf[0] && productData.pdf.length > 0) {
      const file = productData.pdf[0];
      const downloadLink = document.createElement("a");
      downloadLink.href = `/${file.path}`;
      downloadLink.download = file.originalname;  // User-friendly filename
      downloadLink.target = '_blank'; // Open in new tab
      downloadLink.type = 'application/pdf'; // MIME type for PDF
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert("PDF file not found");
    }
  };
  

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Gallery Images Access
console.log("ImagPath:", `${productData.Thumbnail[0].path}`, "Logo:", `${productData.Logo[0].path}`)
  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Image
            src={`${productData.Thumbnail[0].path}`}
            alt={`${productData.title}`}
            width={500}
            height={300}
          />  
          <div className="real-estate-agent">
            <div className="agent-img">
              <Image
                src={`${productData.Logo[0].path}`}
                alt={`${productData.title}`}
                width={50} height={50}
              />
            </div>
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-title">
            {productData.title}
          </h2>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: "transparent", 
                    color: "black", 
                    border: "2px solid #FF5A3C", 
                    boxShadow: "none",
                    '&:hover': { 
                      backgroundColor: "#FF5A3C", 
                      color: 'white',
                    }
                  }}  
                  onClick={handleOpenModal} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  <b>View</b>
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: "transparent", 
                    color: "black", 
                    border: "2px solid #FF5A3C", 
                    boxShadow: "none",
                    '&:hover': { 
                      backgroundColor: "#FF5A3C", 
                      color: 'white',
                    }
                  }}  
                  onClick={handleDownloadPDF} 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  <DownloadIcon sx={{ color: isHovered ? "white" : "#FF5A3C" }} className="icon"/> 
                  <b> Download</b>
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Modal
        open={modalShow}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
            onClick={handleCloseModal}
          >
            Close
          </Button>
          <Box sx={{ padding: 2 }}>
            <embed 
              src={`${productData.pdf[0].path}`} 
              width="100%" 
              height="500px" 
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
