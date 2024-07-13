import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const Reviews = () => {
  const [title, setTitle] = useState('');
  const [designation, setDesignation] = useState('');
  const [image, setImage] = useState(null); // State to hold the image file
  const [description, setDescription] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {

    try{
    e.preventDefault();

    if (!title || !designation || !image || !description) {
      setAlert({ type: 'warning', message: 'Please fill in all fields.' });
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('designation', designation);
    formData.append('image', image);
    formData.append('description', description);

      const response =  await fetch('https://micasa-server-test.vercel.app/api/Testimonials/Insert',{
      method: "POST",
      mode: "no-cors",
      body: formData
     }) 
    if (response) {
      setAlert({ type: 'success', message: 'Testimonial added successfully.' });
      setTitle('');
      setDesignation('');
      setImage(null);
      setDescription('');
    }
  }catch(error){
    console.log(error);
  }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Add New Testimonial</Typography>
      {alert.message && <Alert severity={alert.type}>{alert.message}</Alert>}
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" sx={{ mt: 2 }}>
          Upload Image
        </Button>
      </label>
      {image && <Typography variant="body2" color="text.secondary">{image.name}</Typography>}
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default Reviews;
