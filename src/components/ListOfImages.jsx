import React from 'react';
import useSrollToBottom from '../hooks/useSrollToBottom';

export default function ListOfImages({ imgSrc }) {
    useSrollToBottom();

    return (
        <div>
            {imgSrc?.map((img) => (
                <div key={img.id}>
                    <img src={img.src.medium} alt="" />
                </div>
            ))}
        </div>
    );
}
