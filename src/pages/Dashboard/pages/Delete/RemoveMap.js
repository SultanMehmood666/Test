import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CustomDropdown from '@/DashboardComponents/@core/components/CustomDropDown/CustomDropDown';

const RemoveMap = () => {
  const [selectedOption, setSelectedOption] = useState('None'); // Initialize with a default value
  const [responseData, setResponseData] = useState([]);
  const [message, setMessage] = useState(''); // State to handle success/error messages
  const options = ['None', 'Option1', 'Option2']; // Define your dropdown options

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/Maps/FetchMapsRoute`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log("data from fetch:", data)
      setResponseData(data);
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
      const response = await fetch(`/api/Maps/DeleteSpecificMapRoute?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the item.');
      }

      // Remove the item from the frontend
      const newData = responseData.filter((_, i) => i !== index);
      setResponseData(newData);

      // Show success message
      setMessage('Item deleted successfully.');
    } catch (error) {
      console.error('Error deleting item:', error);
      setMessage('Error deleting item.');
    }

    // Clear the message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Maps</h1>
      {message && (
        <div style={{
          padding: '10px',
          margin: '10px 0',
          color: 'white',
          backgroundColor: message.includes('Error') ? '#f44336' : '#4caf50',
          borderRadius: '5px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
          {message}
        </div>
      )}
      {responseData.length > 0 && (
        <div>
          <h2 style={{ color: '#555', marginBottom: '20px' }}>Blog Data</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {responseData.map((item, index) => (
              <div key={index} style={{
                flex: '1 1 calc(33.333% - 20px)',
                boxSizing: 'border-box',
                marginBottom: '20px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
              }}>
                <Image
                  src={`${item.Thumbnail[0].path}`}
                  width={300}
                  height={300}
                  alt={item.title}
                  style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                />
                <h3 style={{ color: '#333', fontSize: '18px', marginTop: '10px' }}>{item.title}</h3>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <button
                    onClick={() => handleDelete(item._id, index)}
                    style={{
                      padding: '10px 20px',
                      fontSize: '16px',
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveMap;
