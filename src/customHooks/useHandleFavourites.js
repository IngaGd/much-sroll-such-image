import { useEffect } from "react";
import { useState } from "react";

const useHandleFavourites = () => {

    const [favouritedImages, setFavouritedImages] = useState(() => {
        const storedImages = localStorage.getItem('favouritedImages');
        return storedImages ? JSON.parse(storedImages) : [];
    });

    useEffect(() => {
        localStorage.setItem('favouritedImages', JSON.stringify(favouritedImages));
    }, [favouritedImages]);

    const addImage = (newImage) => {
        setFavouritedImages(prevImages => [...prevImages, newImage]);
    }

    const removeImage = (imageIdToRemove) => {
        setFavouritedImages(prevImages => prevImages.filter(img => img.id !== imageIdToRemove));
    }

    return { favouritedImages, addImage, removeImage };

}

export default useHandleFavourites;