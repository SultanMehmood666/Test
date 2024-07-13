import React, { useState, useEffect } from "react";


// Fetch Sliders
// Fetch Testimonials
export const FetchSlider = () =>{
  const [sliderData,setSliderData] = useState([]);
  
  useEffect(()=>{
      const GetSlider = async()=>{
        try{
          const response = await fetch('/api/HomePage/getSlidersRoute',{
            method: 'GET',
          })
          if(!response.ok){
            console.log(`Theres an error`)
          }
          console.log(response)
          const jsonData = await response.json()
          setSliderData(jsonData)
        }catch(error){
          console.log(`There's an error: ${error}`)
        }
      }
      GetSlider();
  }, [])
return {sliderData}
}


// Fetch Testimonials
export const FetchTestimonials = () =>{
  const [testimonialsData,setTestimonialsData] = useState([]);
  
  useEffect(()=>{
      const Testimonials = async()=>{
        try{
          const response = await fetch('/api/Testimonials/FetchTestimonialsRoute',{
            method: 'GET',
            mode: 'no-cors',
          })
          if(!response.ok){
            console.log(`Theres an error`)
          }
          console.log(response)
          const jsonData = await response.json()
          setTestimonialsData(jsonData)
        }catch(error){
          console.log(`There's an error: ${error}`)
        }
      }
      Testimonials();
  }, [])
return {testimonialsData}
}





// FetchMaps
export const FetchMaps=()=>{
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Maps/FetchMapsRoute', {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const jsonData = await response.json();
        console.log("FetchMapsHook:", jsonData)
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
};




// FetchConst component
export const FetchConst = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Constructions/ConstructionRoute', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { Data };
};

// SpecificConsturctionData hook
export function FetchDataForProduct(id) {
  const [products, setProduct] = useState(null);
// Construction
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/RealEstate/SpecificRealEstate?id=${id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const specificData = await response.json();
        setProduct(specificData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return products;
}


//RealEstate
export const FetchRealEstate = () => {
  const [realEstateData, setRealEstateData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/RealEstate/RealEstate', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const jsonData = await response.json();
        setRealEstateData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Corrected function name
  }, []); // Dependency array is empty for now, adjust as needed

  return { realEstateData }; // Use camelCase for variable names
};



export function SpecificRealEstate(id) {
  const [realEstateSpecific, setRealEstateSpecific] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/RealEstate/SpecificRealEstate?id=${id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const specificData = await response.json();
        setRealEstateSpecific(specificData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return realEstateSpecific;
}

// Interrior Fetching
export const FetchInterrior = () => {
  const [interriorData, setInterriorData] = useState(null);

  useEffect(() => {
    const fetchInterrior = async () => {
      try {
        const response = await fetch('/api/InterriorDesign/InterriorRoute', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("From fetch: Response is not ok");
        }
        const MyData = await response.json();
        console.log("Data From Fetching:", MyData);
        setInterriorData(MyData); // corrected variable name
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInterrior();
  }, []);

  return { interriorData };
};


export default FetchConst;


