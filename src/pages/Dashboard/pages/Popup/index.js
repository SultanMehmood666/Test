import React, { useEffect, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Grid } from '@mui/material';

const PopupControlSection = () => {
    const [popupEnabled, setPopupEnabled] = useState(true);
    const [popupContent, setPopupContent] = useState('');
    const [image, setImage] = useState(null); // State to store the uploaded image
    const [SecondApiData, setSecondApiData] = useState(null);

    const handlePopupToggle = () => {
        setPopupEnabled(!popupEnabled);
    };

    useEffect(() => {
        fetchSecondApiData(); // Fetch data from the second API when the component mounts
    }, []);

    // Function to fetch data from the second API
    const fetchSecondApiData = async () => {
        try {
            const response = await fetch('https://micasa-server-test.vercel.app/api/PopUpData',{
                method: "GET",
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data from the second API');
            }
            const data = await response.json();
            setSecondApiData(data); // Set the fetched data in state
            console.log(SecondApiData);
            setPopupEnabled(data[0].PopUp);
            console.log("SecondApiDataBoolean:",);
        } catch (error) {
            console.error('Error fetching data from the second API:', error.message);
        }
    };

// Sending Data
    const handleSavePopupContent = async () => {
        try {
            const formData = new FormData();
            formData.append('popupEnabled', popupEnabled);
            formData.append('popupContent', popupContent);
            formData.append('image', image);

            const response = await fetch('https://micasa-server-test.vercel.app/api/PopUp', {
                mode: 'no-cors',
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to save popup content');
            }

            console.log('Popup content saved successfully');
        } catch (error) {
            console.error('Error saving popup content:', error.message);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControlLabel
                    control={<Switch checked={popupEnabled} onChange={handlePopupToggle} />}
                    label="Enable Popup Messages"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Popup Content"
                    fullWidth
                    multiline
                    value={popupContent}
                    onChange={(e) => setPopupContent(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    id="image-upload"
                />
                <label htmlFor="image-upload">
                    <Button variant="contained" component="span">
                        Upload Image
                    </Button>
                </label>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleSavePopupContent}>
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export default PopupControlSection;
