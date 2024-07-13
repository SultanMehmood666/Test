import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DeleteSlider = () => {
    const [constData, setConstData] = useState([]);

    useEffect(() => {
        async function getSlider() {
            try {
                const response = await fetch("/api/HomePage/getSlidersRoute",{
                        method: 'GET'
                    });
                if (!response.ok) {
                    throw new Error('Failed to fetch slider data');
                }
                const data = await response.json();
                console.log(data);
                setConstData(data);
            } catch (error) {
                console.error('Error fetching slider data:', error);
            }
        }
        getSlider();
    }, []);

    const handleDeleteDocument = async (id) => {
        try {
            const response = await fetch(`/api/HomePage/DeleteSliderRoute`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete slider item');
            }
        } catch (error) {
            console.error('Error deleting slider item:', error);
        }
    };

    return (
        <div>
            {constData.length > 0 && (
                <div>
                    {constData.map((item) => (
                        <div key={item._id} style={{ marginBottom: '20px' }}>
                            <Image src={`${item.sliderImage.path}`} alt={`Slider ${item._id}`} width={500} height={500} />
                        </div>
                    ))}
                    <button style={{backgroundColor: 'red', color: 'white'}} onClick={handleDeleteDocument}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default DeleteSlider;
