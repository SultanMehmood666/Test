import { useState } from 'react';
import { Container, Grid, Button, TextField, Typography, MenuItem, } from '@mui/material';


const Index = () => {
// Loading and Alert
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Property Description
  const [title, setTitle] = useState('');
  const [fullDescription, setfullDescription] = useState('');
  // Property Price
  const [price, setPrice] = useState('');
  const [afterpriceLabel, setAfterPriceLabel] = useState('');
  const [beforePriceLabel, setBeforePriceLabel] = useState('');
  const [yearlyTaxRate, setYearlyTaxRate] = useState("");
  const [yearTax, setYearTax] = useState("");
  // Property Details
  const [propertyStatus, setpropertyStatus] = useState('');
  const [Area, setArea] = useState('');
  const [style, setStyle] = useState('');
  const [location, setLocation] = useState('');
  const [furnished, setFurnished] = useState('');
  const [Corner, setCorner] = useState('');
  const [FacingPark, setFacingPark] = useState('');
  const [yearBuilt, setyearBuilt] = useState('');
  // Facts and Feature
  const [room, setRoom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [Bedroom, setBedroom] = useState('');
  const [livingroom, setLivingRoom] = useState('');
  const [Diningarea, setDiningArea] = useState('');
  const [kitchens, setKitchens] = useState('');
  const [garden, setGarden] = useState('');
  const [parking, setParking] = useState('');
  const [servantQuarters, setservantQuarters] = useState('');
  const [AirCondition, setAirCondition] = useState('');
  const [Heating, setHeating] = useState('');
  const [Floor, setFloor] = useState('');
  const [SwimmingPool, setSwimmingPool] = useState('');
  const [Jacuzzi, setJacuzzi] = useState('');
  // Property Video
  const [PropertyVideo, setPropertyVideo] = useState('');
  // Google Map Location
  const [GoogleMap, setGoogleMap] = useState('');
  //Gallery
  const [Image1, setImage1] = useState();
  const [Image2, setImage2] = useState();
  const [Image3, setImage3] = useState();
  // Display Image
  const [Image4, setImage4] = useState();
  // First Floor Details
  const [firstFloorTitle, setFirstFloorTitle] = useState('');
  const [firstFloorDescription, setFirstFloorDescription] = useState('');
  const [firstFloorImage, setFirstFloorImage] = useState(null);
  const [totalArea1, setTotalArea1] = useState('');
  const [pets1, setPets1] = useState('');
  const [bedroom1, setBedroom1] = useState('');
  const [lounge1, setLounge1] = useState('');

  // Second Floor Details
  const [secondFloorTitle, setSecondFloorTitle] = useState('');
  const [secondFloorDescription, setSecondFloorDescription] = useState('');
  const [secondFloorImage, setSecondFloorImage] = useState(null);
  const [totalArea2, setTotalArea2] = useState('');
  const [pets2, setPets2] = useState('');
  const [bedroom2, setBedroom2] = useState('');
  const [lounge2, setLounge2] = useState('');

  // Third Floor Details
  const [thirdFloorTitle, setThirdFloorTitle] = useState('');
  const [thirdFloorDescription, setThirdFloorDescription] = useState('');
  const [thirdFloorImage, setThirdFloorImage] = useState(null);
  const [totalArea, setTotalArea] = useState('');
  const [totalArea3, setTotalArea3] = useState('');
  const [pets3, setPets3] = useState('');
  const [bedroom3, setBedroom3] = useState('');
  const [lounge3, setLounge3] = useState('');

  // Slider
  // SliderImages
  const [sliderImage1,setSliderImage1] = useState('')
  const [sliderImage2,setSliderImage2] = useState('')
  const [sliderImage3,setSliderImage3] = useState('')
  const [sliderImage4,setSliderImage4] = useState('')
  const [sliderImage5,setSliderImage5] = useState('')
  const [sliderImage6,setSliderImage6] = useState('')
  const [sliderImage7,setSliderImage7] = useState('')
  // appending data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission here
    const formData = new FormData();
    // Property Description
    formData.append('title:', title);
    formData.append('fullDescription', fullDescription);
    // PropertyPrice
    formData.append('price', price);
    formData.append("yearlyTaxRate", yearlyTaxRate);
    formData.append("yearTax", yearTax);
    // Property Details
    formData.append('propertyStatus', propertyStatus);
    formData.append('Area', Area);
    formData.append('style', style);
    formData.append('location', location);
    formData.append('furnished', furnished);
    formData.append('Corner', Corner);
    formData.append('FacingPark', FacingPark);
    formData.append('yearBuilt', yearBuilt);
    formData.append('totalArea', totalArea);
  // Facts and Feature
    formData.append('Rooms', room);
    formData.append('bathroom', bathroom);
    formData.append('Bedroom', Bedroom);
    formData.append('livingroom', livingroom);
    formData.append('Diningarea', Diningarea);
    formData.append('kitchens', kitchens);
    formData.append('garden', garden);
    formData.append('parking', parking);
    formData.append('servantQuarters', servantQuarters);
    formData.append('AirCondition', AirCondition);
    formData.append('Heating', Heating);
    formData.append('Floor', Floor);
    formData.append('SwimmingPool', SwimmingPool);
    formData.append('Jacuzzi', Jacuzzi);
    // Property Video
    formData.append('YTVideo', PropertyVideo);
    // Google Map Location
    formData.append('GoogleMap', GoogleMap);
    //Gallery
    formData.append('Image1', Image1);
    formData.append('Image2', Image2);
    formData.append('Image3', Image3);
    // Display Image
    formData.append('image4', Image4);
    // Floor Plans
    // 1st floors plans
    formData.append('firstFloorTitle', firstFloorTitle);
    formData.append("firstFloorDescription", firstFloorDescription);
    formData.append("firstFloorImage", firstFloorImage);
    formData.append("firsttotalArea", totalArea1)
    formData.append('firstpets', pets1);
    formData.append('firstbedroom', bedroom1);
    formData.append('firstlounge', lounge1); 

    // 2nd Floor
    formData.append('secondFloorTitle', secondFloorTitle)
    formData.append('secondFloorDescription', secondFloorDescription);
    formData.append('secondFloorImage', secondFloorImage);
    formData.append('secondtotalArea',totalArea2);
    formData.append('secondpets', pets2);
    formData.append('secondbedroom', bedroom2);
    formData.append('secondlounge', lounge2);

    // 3rd Floor
    formData.append('thirdFloorTitle', thirdFloorTitle)
    formData.append('thirdFloorDescription', thirdFloorDescription);
    formData.append('thirdFloorImage', thirdFloorImage);
    formData.append('thirdtotalArea',totalArea3);
    formData.append('thirdpets', pets3);
    formData.append('thirdbedroom', bedroom3);
    formData.append('thirdlounge', lounge3);

  // slider
  formData.append('sliderImage1', sliderImage1);
  formData.append('sliderImage2', sliderImage2);
  formData.append('sliderImage3', sliderImage3);
  formData.append('sliderImage4', sliderImage4);
  formData.append('sliderImage5', sliderImage5);
  formData.append('sliderImage6', sliderImage6);
  formData.append('sliderImage7', sliderImage7);

    try {
      await fetch("/api/Constructions/InsertConstruction", {
        method: "POST",
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log("formData RealEstate:",formData)
          return response.json();
        })
        .then(data => {
          setSuccessMessage('Your message has been sent successfully.');
        });
    } catch (error) {
      setErrorMessage('Failed to submit form. Please try again later.');
    }finally{
      setLoading(false)
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  }


  return (
    <>
      <Container>
      <center><h1><b>Construction Listing</b></h1></center>
      <h3><b>1.Description</b></h3>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
              <b>Property Description</b>
          </Grid>
          {/* Basic Information */}
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={title}
              onChange={(e) => {setTitle(e.target.value), console.log(title) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="Full Description"
              name="fullDescription"
              value={fullDescription}
              onChange={(e) => {setfullDescription(e.target.value)}}
              required
              size="x-large"
            />
          </Grid>

          <Grid item xs={12}>
              <b>Property Price</b>
          </Grid>
          {/* PropertyPrice */}
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="Price in $ (only numbers)"
              name="title"
              value={price}
              onChange={(e) => {setPrice(e.target.value), console.log(price) }}
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              label="Yearly Tax Rate"
              name="Yearly Tax Rate"
              value={yearlyTaxRate}
              onChange={(e) => {setYearlyTaxRate(e.target.value), console.log(fullDescription) }}
              size="x-large"
            />
          </Grid>


        <Grid item xs={12}>
              <b>Property Detail</b>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
      <TextField
        fullWidth
        select
        label="Property Status"
        name="propertyStatus"
        value={propertyStatus}
        onChange={(e)=>{setpropertyStatus(e.target.value)}}
        required
        size="large"
      >
        {/* Dropdown options */}
        <MenuItem value="For Rent">For Rent</MenuItem>
        <MenuItem value="For Sale">For Sale</MenuItem>
        {/* Add more MenuItem components for additional options */}
      </TextField>
    </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Lot Area (Numeric)"
              name="Area"
              value={Area}
              onChange={(e) => {setArea(e.target.value), console.log(Area)}}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Total Area in sq.ft(Numeric)"
              name="Area"
              value={totalArea}
              onChange={(e) => {setTotalArea(e.target.value), console.log(Area)}}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Style (Text)"
              name="Style"
              value={style}
              onChange={(e) => { setStyle(e.target.value), console.log(style) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Location (Text)"
              name="Location"
              value={location}
              onChange={(e) => { setLocation(e.target.value) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Furnished (Text)"
              name="Furnished"
              value={furnished}
              onChange={(e) => {setFurnished(e.target.value) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Corner (Text)"
              name="Corner"
              value={Corner}
              onChange={(e) => {setCorner(e.target.value) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Facing Park (*Text)"
              name="Facing Park"
              value={FacingPark}
              onChange={(e) => {setFacingPark(e.target.value) }}
              required
              size="large"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Year Built (*numeric)"
              name="Year Built"
              value={yearBuilt}
              onChange={(e) => {setyearBuilt(e.target.value) }}
              required
              size="large"
            />
          </Grid>
          {/* Add more fields similar to the ones above */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Display Image
            </Typography>
            <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img4"
                type="file"
                name="gallery.img4"
                onChange={(e) => {setImage4(e.target.files[0]) }}
                required
              />
            </Grid>
          </Grid>

          {/* Gallery */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Gallery
            </Typography>
            <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img1"
                type="file"
                name="gallery.img1"
                onChange={(e) => { setImage1(e.target.files[0]) }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mx={2} my={2}>
              <input
                accept="image/*"
                id="img2"
                type="file"
                name="gallery.img2"
                onChange={(e) => { setImage2(e.target.files[0]) }}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img3"
                type="file"
                name="gallery.img3"
                onChange={(e) => { setImage3(e.target.files[0]) }}
                required
              />
            </Grid>
          </Grid>
        {/* Floor Plans */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Floor Plans
          </Typography>
        </Grid>

        {/* First Floor */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            First Floor
          </Typography>
        </Grid>

        <Grid item xs={12}><br/>
          <TextField
            fullWidth
            label="First Floor Title (Text)"
            name="FirstFloor"
            value={firstFloorTitle}
            onChange={(e) => { setFirstFloorTitle(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Floor Description (Text)"
            name="First Floor Description (Text)"
            value={firstFloorDescription}
            onChange={(e) => { setFirstFloorDescription(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mx={2}>
          <input
            accept="image/*"
            id="FirstFloor"
            type="file"
            name="FirstFloor.img1"
            onChange={(e) => {setFirstFloorImage(e.target.files[0]) }}
            required
          /><br/><br/>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Total Area (Numeric)"
              name="Total Area (Numeric)"
              value={totalArea1}
              onChange={(e) => {setTotalArea1(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Pets (Text)"
              name="Pets (Text)"
              value={pets1}
              onChange={(e) => { setPets1(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bedroom in sq feet (Numeric)"
              name="Bedroom (Numeric)"
              value={bedroom1}
              onChange={(e) => { setBedroom1(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lounge in sq feet (Numeric)"
              name="Lounge (Numeric)"
              value={lounge1}
              onChange={(e) => { setLounge1(e.target.value) }}
              required
              size="large"
            />
          </Grid>
        </Grid>

        {/* Second Floor */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Second Floor
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Second Floor Title (Text)"
            name="SecondFloor"
            value={secondFloorTitle}
            onChange={(e) => { setSecondFloorTitle(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Second Floor Description (Text)"
            name="Second Floor Description (Text)"
            value={secondFloorDescription}
            onChange={(e) => { setSecondFloorDescription(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mx={2}>
          <input
            accept="image/*"
            id="SecondFloor"
            type="file"
            name="SecondFloor.img1"
            onChange={(e) => { setSecondFloorImage(e.target.files[0]) }}
            required
          />
          <br/><br/>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Total Area (Numeric)"
              name="Total Area (Number)"
              value={totalArea2}
              onChange={(e) => { setTotalArea2(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Pets (Text)"
              name="Pets2 (Text)"
              value={pets2}
              onChange={(e) => { setPets2(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bedroom in sq feet (Numeric)"
              name="Bedroom (Numeric)"
              value={bedroom2}
              onChange={(e) => { setBedroom2(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lounge in sq feet (Numeric)"
              name="Lounge (Numeric)"
              value={lounge2}
              onChange={(e) => { setLounge2(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>
        </Grid>

        {/* Third Floor */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Third Floor
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Third Floor Title (Text)"
            name="ThirdFloor"
            value={thirdFloorTitle}
            onChange={(e) => { setThirdFloorTitle(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Third Floor Description (Text)"
            name="Third Floor Description (Text)"
            value={thirdFloorDescription}
            onChange={(e) => { setThirdFloorDescription(e.target.value) }}
            required
            size="large"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mx={2}>
          <input
            accept="image/*"
            id="ThirdFloor"
            type="file"
            name="ThirdFloor.img1"
            onChange={(e) => { setThirdFloorImage(e.target.files[0]) }}
            required
          />
          <br/><br/>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Total Area (Numeric)"
              name="Total Area (Numeric)"
              value={totalArea3}
              onChange={(e) => { setTotalArea3(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Pets (Text)"
              name="Pets (Text)"
              value={pets3}
              onChange={(e) => { setPets3(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bedroom in sq feet (Numeric)"
              name="Bedroom (Numeric)"
              value={bedroom3}
              onChange={(e) => { setBedroom3(e.target.value) }}
              required
              size="large"
            /><br/><br/>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Lounge in sq feet (Numeric)"
              name="Lounge (Numeric)"
              value={lounge3}
              onChange={(e) => { setLounge3(e.target.value) }}
              required
              size="large"
            />
          </Grid>
        </Grid>
          


          <Grid item xs={12}><br/><br/>
            <Typography variant="h6" gutterBottom>
              Facts & features
            </Typography>
            {/* Add checkboxes for property types */}
            {/* Basic Information */}
            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Rooms (only in numbers)"
                name="Rooms"
                value={room}
                onChange={(e) => {setRoom(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Bathroom (only in numbers)"
                name="Bathroom"
                value={bathroom}
                onChange={(e) => {setBathroom(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Bedroom (only in numbers)"
                name="Bedroom"
                value={Bedroom}
                onChange={(e) => {setBedroom(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Living Room (only in numbers)"
                name="Living Room"
                value={livingroom}
                onChange={(e) => {setLivingRoom(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Dining Area (only in numbers)"
                name="Dining Area"
                value={Diningarea}
                onChange={(e) => {setDiningArea(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Kitchens (only in numbers)"
                name="Kitchens"
                value={kitchens}
                onChange={(e) => {setKitchens(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="garden (*Text)"
                name="garden"
                value={garden}
                onChange={(e) => {setGarden(e.target.value) }}
                required
                size="large"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="parking Area (Numeric)"
                name="parking Area"
                value={parking}
                onChange={(e) => {setParking(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Servant Quarters (numeric)"
                name="Servant Quarters"
                value={servantQuarters}
                onChange={(e) => { setservantQuarters(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Air Conditioning (Text)"
                name="Air Conditioning"
                value={AirCondition}
                onChange={(e) => { setAirCondition(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Heating (Text)"
                name="Heating"
                value={Heating}
                onChange={(e) => {setHeating(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Floors (Numeric)"
                name="Floors"
                value={Floor}
                onChange={(e) => {setFloor(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Swimming Pool (Numeric)"
                name="Swimming Pool"
                value={SwimmingPool}
                onChange={(e) => {setSwimmingPool(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Jacuzzi (Numeric)"
                name="Jacuzzi"
                value={Jacuzzi}
                onChange={(e) => {setJacuzzi(e.target.value) }}
                required
                size="large"
              /><br/><br/>
            </Grid>
            <Grid item xs={12} my={8}>
              <Typography variant="h6" gutterBottom>
                Youtube Vide ID
              </Typography>
              {/* Add checkboxes for property types */}
              {/* Basic Information */}
              <Grid item xs={12} sm={6} md={4} mb={4}>
                <TextField
                  fullWidth
                  label="Youtube Vide ID"
                  name="YTVideo"
                  value={PropertyVideo}
                  onChange={(e) => { setPropertyVideo(e.target.value) }}
                  required
                  size="large"
                />
              </Grid>
            </Grid>

            {/* Location */}
            <Grid item xs={12} my={8}>
              <Typography variant="h6" gutterBottom>
                Google Map Link
              </Typography>
              {/* Add checkboxes for property types */}
              {/* Basic Information */}
              <Grid item xs={12} sm={6} md={4} mb={4}>
                <TextField
                  fullWidth
                  label="Google Map Link"
                  name="GoogleMap"
                  value={GoogleMap}
                  onChange={(e) => setGoogleMap(e.target.value)}
                  required
                  size="large"
                />
              </Grid>
            </Grid>
          {/* Slider */}
        <h2>Slider Section:</h2>
            {<h3>Images 1</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img1"
                type="file"
                name="Slider.img1"
                onChange={(e)=>{setSliderImage1(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 2</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img2"
                type="file"
                name="Slider.img2"
                onChange={(e)=>{setSliderImage2(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 3</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img3"
                type="file"
                name="Slider.img3"
                onChange={(e)=>{setSliderImage3(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 4</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img4"
                type="file"
                name="Slider.img4"
                onChange={(e)=>{setSliderImage4(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 5</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img5"
                type="file"
                name="Slider.img5"
                onChange={(e)=>{setSliderImage5(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 6</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img6"
                type="file"
                name="Slider.img6"
                onChange={(e)=>{setSliderImage6(e.target.files[0])}}
                required
              />
          </Grid>

          {<h3>Images 7</h3>}
          <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img7"
                type="file"
                name="Slider.img7"
                onChange={(e)=>{setSliderImage7(e.target.files[0])}}
                required
              />
          </Grid>

            {/* Submit Button */}
            <Grid item xs={12} mt={8}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  );
};

export default Index;
