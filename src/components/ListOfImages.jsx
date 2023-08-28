import React from 'react';

export default function ListOfImages({ imgSrc }) {
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
