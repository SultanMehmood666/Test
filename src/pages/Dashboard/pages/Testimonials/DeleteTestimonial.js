import Image from 'next/image';
import { Grid, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DeleteTestimonial from './Component/DeleteTestimonial';

const DeleteTestimonials = () => {
    const [selectedOption, setSelectedOption] = useState('None'); // Initialize with a default value
    const [responseData, setResponseData] = useState([]);
    const options = ['None', 'Option1', 'Option2']; // Define your dropdown options

    const fetchData = async () => {
        try {
                const response = await fetch(`/api/Testimonials/FetchTestimonialsRoute`, { method: 'GET', mode: 'no-cors' });
                const data = await response.json();
                console.log("data from fetch:", data)
                return setResponseData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, [selectedOption]); // Re-fetch data when selectedOption changes

    const handleDelete = async (id, index) => {
        try {
            await fetch(`/api/Testimonials/DeleteTestimonialRoute?id=${id}`, {
                method: 'Delete',
            });
            // Remove the item from the frontend
            const newData = responseData.filter((_, i) => i !== index);
            setResponseData(newData);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const FileAcess = 'https://micasa-server-test.vercel.app/api/files';
    
    return (
        <div>
            <center>
                <h1>Testimonials</h1>
            </center>
            {responseData.length > 0 && (
                <div>
                    <Grid container spacing={2}>
                        {responseData.map((item, index) => (
                            <Grid item xs={12} key={index}>
                                <Image src={`${FileAcess}/${item.Profile[0].path}`} width={300} height={300} alt={item.title} />
                                <h3>{item.Title}</h3>
                                <Grid item xs={12} mt={2}>
                                    <Button variant="contained" color="error" onClick={() => handleDelete(item._id, index)}>Delete</Button>
                                </Grid>
                                <br /><br />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default DeleteTestimonials;
