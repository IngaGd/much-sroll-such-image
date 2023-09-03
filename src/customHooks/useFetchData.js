import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

const useFetchData = (page) => {

    const [fetchedImages, setFetchedImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/curated?page=${page}&per_page=3`,
                    {
                        method: 'GET',
                        headers: { Authorization: apiKey },
                    }
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data && data.photos) {
                    setFetchedImages(prevFethcedImages => {
                        const oldAndNewImages = [...prevFethcedImages, ...data.photos];

                        const uniqueIdsSet = new Set();
                        const uniqueImages = [];

                        for (const img of oldAndNewImages) {
                            if (!uniqueIdsSet.has(img.id)) {
                                uniqueIdsSet.add(img.id);
                                uniqueImages.push(img);
                            }
                        }
                        return uniqueImages;
                    });
                }
            } catch (error) {
                console.error('error fetching image:', error);
            }
        };
        fetchData();
    }, [page]);
    return fetchedImages;
}

export default useFetchData;