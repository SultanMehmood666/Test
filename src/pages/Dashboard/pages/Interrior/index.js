import { useState } from 'react';
import { Container, Grid, Button, TextField, Typography, } from '@mui/material';


const Index = () => {
  const [title, setTitle] = useState('');
  const [fullDescription, setfullDescription] = useState('');
  const [shortDescription, setshortDescription] = useState('');
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
  // Image
  const [Image4, setImage4] = useState();

  // appending data
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    const formData = new FormData();
    formData.append('title:', title);
    formData.append('fullDescription', fullDescription);
    formData.append('shortDescription', shortDescription);
    formData.append('propertyStatus', propertyStatus);
    formData.append('Area', Area);
    formData.append('style', style);
    formData.append('location', location);
    formData.append('furnished', furnished);
    formData.append('Corner', Corner);
    formData.append('FacingPark', FacingPark);
    formData.append('yearBuilt', yearBuilt);

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
    formData.append('PropertyVideo', PropertyVideo);
    // Google Map Location
    formData.append('GoogleMap', GoogleMap);
    //Gallery
    formData.append('Image1', Image1);
    formData.append('Image2', Image2);
    formData.append('Image3', Image3);
    // Image
    formData.append('image4', Image4);

    try {
      await fetch("https://micasa-server-test.vercel.app/InsertInterrior", {
        method: "POST",
        mode: 'no-cors',
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("Success:", data);
        });
    } catch (error) {
      console.error("Error:", error);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  }

  async function handleChange(e) {
    return null;
  }


  return (
    <Container>
      <center><h1><b>Interior Posting</b></h1></center>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Basic Information */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={title}
              onChange={(e) => {setTitle(e.target.value), console.log(title) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Full Description"
              name="fullDescription"
              value={fullDescription}
              onChange={(e) => { setfullDescription(e.target.value), console.log(fullDescription) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Short Description"
              name="shortDescription"
              value={shortDescription}
              onChange={(e) => { setshortDescription(e.target.value), console.log(shortDescription) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Property Status"
              name="propertyStatus"
              value={propertyStatus}
              onChange={(e) => { setpropertyStatus(e.target.value), console.log(propertyStatus) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Area"
              name="Area"
              value={Area}
              onChange={(e) => { setArea(e.target.value), console.log(Area)}}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Style"
              name="Style"
              value={style}
              onChange={(e) => { setStyle(e.target.value), console.log(style) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Location"
              name="Location"
              value={location}
              onChange={(e) => { setLocation(e.target.value) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Furnished"
              name="Furnished"
              value={furnished}
              onChange={(e) => {setFurnished(e.target.value) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Corner"
              name="Corner"
              value={Corner}
              onChange={(e) => {setCorner(e.target.value) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Facing Park"
              name="Facing Park"
              value={FacingPark}
              onChange={(e) => {setFacingPark(e.target.value) }}
              required
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Year Built"
              name="Year Built"
              value={yearBuilt}
              onChange={(e) => {setyearBuilt(e.target.value) }}
              required
              size="small"
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
                style={{ display: 'none' }}
                required
              />
              <label htmlFor="img4">
                <Button component="span" variant="contained">
                  Upload Display Image
                </Button>
              </label>
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
                style={{ display: 'none' }}
                required
              />
              <label htmlFor="img1">
                <Button component="span" variant="contained">
                  Upload Image 1
                </Button>
              </label>
            </Grid>

            <Grid item xs={12} sm={6} md={4} mx={2} my={2}>
              <input
                accept="image/*"
                id="img2"
                type="file"
                name="gallery.img2"
                onChange={(e) => { setImage2(e.target.files[0]) }}
                style={{ display: 'none' }}
                required
              />
              <label htmlFor="img2">
                <Button component="span" variant="contained">
                  Upload Image 2
                </Button>
              </label>
            </Grid>

            <Grid item xs={12} sm={6} md={4} mx={2}>
              <input
                accept="image/*"
                id="img3"
                type="file"
                name="gallery.img3"
                onChange={(e) => { setImage3(e.target.files[0]) }}
                style={{ display: 'none' }}
                required
              />
              <label htmlFor="img3">
                <Button component="span" variant="contained">
                  Upload Image 3
                </Button>
              </label>
            </Grid>
          </Grid>


          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Facts & features
            </Typography>
            {/* Add checkboxes for property types */}
            {/* Basic Information */}
            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Rooms"
                name="Rooms"
                value={room}
                onChange={(e) => {setRoom(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Bathroom"
                name="Bathroom"
                value={bathroom}
                onChange={(e) => {setBathroom(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Bedroom"
                name="Bedroom"
                value={Bedroom}
                onChange={(e) => {setBedroom(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Living Room"
                name="Living Room"
                value={livingroom}
                onChange={(e) => {setLivingRoom(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Dining Area"
                name="Dining Area"
                value={Diningarea}
                onChange={(e) => {setDiningArea(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="Kitchens"
                name="Kitchens"
                value={kitchens}
                onChange={(e) => {setKitchens(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} mb={4}>
              <TextField
                fullWidth
                label="garden"
                name="garden"
                value={garden}
                onChange={(e) => {setGarden(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="parking Area"
                name="parking Area"
                value={parking}
                onChange={(e) => { setParking(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Servant Quarters"
                name="Servant Quarters"
                value={servantQuarters}
                onChange={(e) => { setservantQuarters(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Air Conditioning"
                name="Air Conditioning"
                value={AirCondition}
                onChange={(e) => { setAirCondition(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Heating"
                name="Heating"
                value={Heating}
                onChange={(e) => {setHeating(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Floors"
                name="Floors"
                value={Floor}
                onChange={(e) => {setFloor(e.target.value) }}
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Swimming Pool"
                name="Swimming Pool"
                value={SwimmingPool}
                onChange={(e) => {setSwimmingPool(e.target.value) }}
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Jacuzzi"
                name="Jacuzzi"
                value={Jacuzzi}
                onChange={(e) => {setJacuzzi(e.target.value) }}
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12} my={8}>
              <Typography variant="h6" gutterBottom>
                Property Video
              </Typography>
              {/* Add checkboxes for property types */}
              {/* Basic Information */}
              <Grid item xs={12} sm={6} md={4} mb={4}>
                <TextField
                  fullWidth
                  label="Property Video Link"
                  name="PropertyVideo"
                  value={PropertyVideo}
                  onChange={(e) => { setPropertyVideo(e.target.value) }}
                  required
                  size="small"
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
                  name="PropertyVideo"
                  value={GoogleMap}
                  onChange={(e) => setGoogleMap(e.target.value)}
                  required
                  size="small"
                />
              </Grid>
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
  );
};

export default Index;
