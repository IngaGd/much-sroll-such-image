import React from 'react';
import useFetchData from '../hooks/useFetchData';
import useSrollToBottom from '../hooks/useSrollToBottom';

export default function ListOfImages() {
    const page = useSrollToBottom();
    const imgSrc = useFetchData(page);

    console.log('Page:', page);
    console.log('ImgSrc:', imgSrc);

    return (
        <section className="container">
            {imgSrc?.map((img, index) => (
                <div key={img.id + '-' + index} className="image-box">
                    <img
                        src={img.src.medium}
                        alt=""
                        className="image-box__image"
                    ></img>
                    <figcaption className="image-box__caption">
                        <p>{img.alt}</p>
                        <div className="bottom-line"></div>
                        <p>{img.photographer}</p>
                        <button className="btn">Favourite</button>
                    </figcaption>
                </div>
            ))}
        </section>
    );
}
