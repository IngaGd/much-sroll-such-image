import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

const useFetchData = (page) => {

    const [imgSrc, setImgSrc] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
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
                    setImgSrc((prevImgSrc) => [...prevImgSrc, ...data.photos]);
                }
            } catch (error) {
                console.error('error fetching image:', error);
            }
        };
        fetchData();
    }, [page]);
    return imgSrc;
}

export default useFetchData;