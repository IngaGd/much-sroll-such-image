import { useEffect } from "react";
import { useState } from "react";

const useSetItem = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        localStorage.setItem('images', JSON.stringify(images));
    }, [images]);

    const addImage = (newImage) => {
        setImages(prevImages => [...prevImages, newImage]);
    }

    return { images, addImage };

}

export default useSetItem;