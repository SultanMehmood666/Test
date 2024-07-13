import Image from 'next/image';
import { Grid, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CustomDropdown from '@/DashboardComponents/@core/components/CustomDropDown/CustomDropDown'; // Corrected import path

const options = [
    { label: 'Construction', value: 'Constructions/ConstructionRoute' },
    { label: 'Real Estate', value: 'RealEstate/RealEstateRoute' },
    { label: 'Interior Design', value: 'InterriorDesign/InterriorRoute' }
];

const DeleteProject = () => {
    const [selectedOption, setSelectedOption] = useState('Constructions/ConstructionRoute'); // Set default selection here
    const [responseData, setResponseData] = useState(null); // State to store fetched data

    const fetchData = async () => {
        try {
            // Make your API call here based on the selected option value
            if (selectedOption !== 'None') {
                const response = await fetch(`/api/${selectedOption}`,
                    {method: 'GET', mode: 'no-cors'}
                );
                const data = await response.json();
                console.log(data)
                setResponseData(data);
                console.log(responseData)

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

    // Handle Delete
    const handleDelete = async (id, index) => {
        try {
            const part = selectedOption.split('/');
            const result = part.pop();
            alert(result);
            // Implement delete functionality here based on the ID
            console.log('Deleted item with ID:', id);
            // Remove the item from the frontend
            const newData = [...responseData];
            newData.splice(index, 1);
            setResponseData(newData);
            // Make API call to delete item from backend
            await fetch(`/api/Delete/${result}?id=${id}`, {
                method: 'Delete',
                // Optionally, you can send additional data in the request body
                // body: JSON.stringify({ id })
            });
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const FileAcess = 'https://micasa-server-test.vercel.app/api/files'
    
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
                    <Grid container spacing={2}>
                        {responseData.map((item, index) => (
                            <Grid item xs={12} key={index}>
                                <Image src={`${item.DisplayImage.img[0].path}`} width={500} height={300} alt={item.title}/>
                                <h3>{item.title}</h3>
                                <p>Full Description: {item.description.fullDescription}</p>
                                <p>Property Idea: {item.propertyDetails.propertyId}</p>
                                <p>Property Status: {item.propertyDetails.propertyStatus}</p>
                                <p>Area: {item.factsAndFeatures.Diningarea}</p>
                                <Grid item xs={12} mt={2}>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(item._id, index)}>Delete</Button>
                                </Grid><br/><br/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default DeleteProject;
