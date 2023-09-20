import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_PEXELS_API_KEY;

const useFetchData = (scrolledToBottom) => {
    const [fetchedImages, setFetchedImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (scrolledToBottom) {
            setPage(p => p + 1);
        }
    }, [scrolledToBottom]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('page: ', page);
                const perPage = (page === 1) ? 24 : 12;
                const response = await fetch(
                    `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`,
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
                    console.log(data.photos);
                    if (page === 1) {
                        setFetchedImages(data.photos);
                    } else {
                        setFetchedImages((prevFetchedImages) => {
                            const oldAndNewImages = [...prevFetchedImages, ...data.photos];

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
                }
            } catch (error) {
                console.error('error fetching image:', error);
            }
        };
        fetchData();
    }, [page]);

    return fetchedImages;
};

export default useFetchData;
