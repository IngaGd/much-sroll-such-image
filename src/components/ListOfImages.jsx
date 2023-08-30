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
                <div key={img.id + '-' + index} className="images-list">
                    <div className="image-box">
                        <img src={img.src.medium} alt="" className="image" />
                        <figcaption className="caption">
                            <p className="image-description">{img.alt}</p>
                            <div className="bottom-line"></div>
                            <p className="image-photographer">
                                {img.photographer}
                            </p>
                            <button className="btn">Favourite</button>
                        </figcaption>
                    </div>
                </div>
            ))}
        </section>
    );
}
