import { useEffect } from "react";
import { useState } from "react";

const useSetItem = () => {

    const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')) || []);

    useEffect(() => {
        localStorage.setItem('images', JSON.stringify(images));
        // console.log('favourited: ', images);
    }, [images]);

    const addImage = (newImage) => {
        setImages(prevImages => [...prevImages, newImage]);
    }

    return { images, addImage };

}

export default useSetItem;