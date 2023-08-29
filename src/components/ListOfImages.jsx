import React from 'react';
import useFetchData from '../hooks/useFetchData';
import useSrollToBottom from '../hooks/useSrollToBottom';

export default function ListOfImages() {
    const page = useSrollToBottom();
    const imgSrc = useFetchData(page);

    console.log('Page:', page);
    console.log('ImgSrc:', imgSrc);

    return (
        <div>
            {imgSrc?.map((img, index) => (
                <div key={img.id + '-' + index}>
                    <img src={img.src.medium} alt="" />
                </div>
            ))}
        </div>
    );
}
