import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Index = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false); // State to manage copy success feedback
    const currentTime = new Date().toISOString();
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUploadClick = async () => {
        if (!selectedFile) {
            alert('Please select an image file');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('/api/Blog/HandleBlogImageRoute/UploadImage', {
                method: 'POST',
                body: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            console.log("data",data)
            setImageUrl(data.data); // Assuming your backend returns an imageUrl correctly in data.data
            console.log("imageUrl:",imageUrl)
            setCopySuccess(false); // Reset copy success state
            setSelectedFile(null); // Clear selected file
            console.log('Image uploaded successfully. Image URL:', data.data);
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('thumbnail', thumbnail);
        formData.append("Date", currentTime)
        try {
            const response = await fetch('/api/Blog/InsertBlogRoute', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                console.error('Failed to send data to the backend');
            } else {
                alert('Blog content submitted successfully!');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleCopyUrl = () => {
        if (imageUrl) {
            alert(imageUrl);
            navigator.clipboard.writeText(imageUrl)
                .then(() => setCopySuccess(true))
                .catch((err) => console.error('Failed to copy:', err));
        }
    };

    return (
        <>
            <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <JoditEditor
                value={content}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => setContent(newContent)}
            />
            <h3>Thumbnail:</h3>
            <input type="file" onChange={(e)=>{setThumbnail(e.target.files[0])}}/><br/><br/>

            <h3>Image Upload:</h3>

            {imageUrl && (
                <div>
                    <TextField
                        id="imageUrl"
                        label="Image URL"
                        variant="outlined"
                        value={imageUrl}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <Button variant="contained" color="primary" onClick={handleCopyUrl}>
                                    Copy
                                </Button>
                            ),
                        }}
                    />
                    {copySuccess && <span style={{ color: 'green' }}>Copied!</span>}
                </div>
            )}<br/><br/>
            <input type="file" onChange={handleFileChange} />
            <Button variant="contained" color="primary" onClick={handleUploadClick}>
                Upload Image
            </Button><br/><br/>

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit Blog
            </Button>
        </>
    );
};

export default Index;
