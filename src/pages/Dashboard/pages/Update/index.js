import { Grid, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CustomDropdown from '@/DashboardComponents/@core/components/CustomDropDown/CustomDropDown'; // Corrected import path

const options = [
    { label: 'Construction', value: 'RetriveConstruction' },
    { label: 'Real Estate', value: 'RealEstate' },
    { label: 'Interior Design', value: 'Interrior' }
];

const Index = () => {
    const [selectedOption, setSelectedOption] = useState('RetriveConstruction'); // Set default selection here
    const [responseData, setResponseData] = useState(null); // State to store fetched data

    const fetchData = async () => {
        try {
            // Make your API call here based on the selected option value
            if (selectedOption !== 'None') {
                const response = await fetch(`https://micasa-server-test.vercel.app/${selectedOption}`, {
                    method: 'GET',
                    mode: 'no-cors'
                });
                const data = await response.json();
                setResponseData(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        // Fetch data when the selected option changes
        fetchData();
    }, [selectedOption]); // Dependency array to re-fetch data when selectedOption changes

    // Handle Update
    const handleUpdate = async (id, updatedData) => {
        try {
            // Implement update functionality here based on the ID and updatedData
            console.log('Updated item with ID:', id, 'Updated Data:', updatedData);
            // Make API call to update item in backend
            await fetch(`https://micasa-server-test.vercel.app/Update/${selectedOption}?id=${id}`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div>
            <h1>Dropdown Page</h1>
            <CustomDropdown
                options={options}
                selectedOption={selectedOption}
                onChange={handleChange}
            />
            {/* Render fetched data if available */}
            {responseData && (
                <div>
                    <h2>Fetched Data</h2>
                    <Grid container spacing={6}>
                        {responseData.map((item, index) => (
                            <Grid item xs={12} key={index}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    value={item.title}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].title = e.target.value;
                                        setResponseData(newData);
                                    }}
                                /><br/><br/>
                                <TextField
                                    fullWidth
                                    label="Full Description"
                                    value={item.description.fullDescription}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].description.fullDescription = e.target.value;
                                        setResponseData(newData);
                                    }}
                                />
                                <br/><br/>
                                <TextField
                                    fullWidth
                                    label="Short Description"
                                    value={item.description.shortDescription}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].description.shortDescription = e.target.value;
                                        setResponseData(newData);
                                    }}
                                /><br/><br/>
                                <TextField
                                    fullWidth
                                    label="Property Id"
                                    value={item.propertyDetails.propertyId}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.propertyId = e.target.value;
                                        setResponseData(newData);
                                    }}
                                /><br/><br/>
                                <TextField
                                    fullWidth
                                    label="Property Status"
                                    value={item.propertyDetails.propertyStatus}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.propertyStatus = e.target.value;
                                        setResponseData(newData);
                                    }}
                                /><br/><br/>
                                <TextField
                                    fullWidth
                                    label="Rooms"
                                    value={item.propertyDetails.rooms}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.rooms = e.target.value;
                                        setResponseData(newData);
                                    }}/><br/><br/>

                                  <TextField
                                    fullWidth
                                    label="Bedrooms"
                                    value={item.propertyDetails.bedrooms}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.bedrooms = e.target.value;
                                        setResponseData(newData);
                                    }}/>
                                    <br/><br/>
                                  <TextField
                                    fullWidth
                                    label="Baths"
                                    value={item.propertyDetails.baths}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.baths = e.target.value;
                                        setResponseData(newData);
                                    }}/>

                                  <br/><br/>
                                  <TextField
                                    fullWidth
                                    label="Created Year"
                                    value={item.propertyDetails.createdYear}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].propertyDetails.createdYear = e.target.value;
                                        setResponseData(newData);
                                    }}/>
                                  <h2><b>Facts And Feature</b></h2>
                                  <br/>
                                  <TextField
                                    fullWidth
                                    label="Living Room"
                                    value={item.factsAndFeatures.livingRoom}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].factsAndFeatures.livingRoom = e.target.value;
                                        setResponseData(newData);
                                    }}/>

                                    <br/><br/>
                                  <TextField
                                    fullWidth
                                    label="Garage"
                                    value={item.factsAndFeatures.garage}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].factsAndFeatures.garage = e.target.value;
                                        setResponseData(newData);
                                    }}/>

                                  <br/><br/>
                                  <TextField
                                    fullWidth
                                    label="Garage"
                                    value={item.factsAndFeatures.garage}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].factsAndFeatures.garage = e.target.value;
                                        setResponseData(newData);
                                    }}/>

                                  <br/><br/>
                                  <TextField
                                    fullWidth
                                    label="Dingin Area"
                                    value={item.factsAndFeatures.diningArea}
                                    onChange={(e) => {
                                        const newData = [...responseData];
                                        newData[index].factsAndFeatures.diningArea = e.target.value;
                                        setResponseData(newData);
                                    }}/>
                                {/* Add input fields for other fields */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleUpdate(item._id, item)}
                                >
                                    Update
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default Index;
