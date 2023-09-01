import { useEffect } from "react";
import { useState } from "react";

const useHandleFavourites = () => {

    const [images, setImages] = useState(() => {
        const storedImages = localStorage.getItem('images');
        return storedImages ? JSON.parse(storedImages) : [];
    });

    useEffect(() => {
        localStorage.setItem('images', JSON.stringify(images));
    }, [images]);

    const addImage = (newImage) => {
        setImages(prevImages => [...prevImages, newImage]);
    }

    const removeImage = (imageIdToRemove) => {
        setImages(prevImages => prevImages.filter(img => img.id !== imageIdToRemove));
    }

    return { images, addImage, removeImage };

}

export default useHandleFavourites;