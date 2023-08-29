import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

const useFetchData = () => {

    const [imgSrc, setImgSrc] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.pexels.com/v1/curated?page=1&per_page=40',
                    {
                        method: 'GET',
                        headers: { Authorization: apiKey },
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                if (data && data.photos) {
                    setImgSrc(data.photos);
                }
            } catch (error) {
                console.error('error fetching image:', error);
            }
        };
        fetchData();
    }, []);
    return imgSrc;
}

export default useFetchData;