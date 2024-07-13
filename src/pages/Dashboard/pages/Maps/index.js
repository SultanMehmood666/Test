import React, { useState } from 'react';

const Index = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
  const [logo, setLogo] = useState(null);
  const [textField, setTextField] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!textField || !logo || !file || !thumbnail) {
      setError('All fields are required.');
      return;
    }
   
    const data = new FormData();
    data.append("title", textField);
    data.append('logo', logo);
    data.append("pdf", file);
    data.append("thumbnail", thumbnail);

    try {
      const response = await fetch('/api/Maps/InsertMapsRoute', {
        method: "POST",
        body: data
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setSuccess('Form submitted successfully!');
      console.log("Response from server:", responseData);
    } catch (error) {
      setError('Error submitting the form. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Dashboard Form</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <h3>Title</h3>
          <input
            type="text"
            name="textField"
            value={textField}
            onChange={(e) => { setTextField(e.target.value) }}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Thumbnail:</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => { setThumbnail(e.target.files[0]) }}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Upload PDF:</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => { setFile(e.target.files[0]) }}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Logo:</h3>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => { setLogo(e.target.files[0]) }}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
