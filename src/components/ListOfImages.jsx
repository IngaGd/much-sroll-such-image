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
            {/* <div className="row">
                <div className="images-list"> */}
            {imgSrc?.map((img, index) => (
                <div key={img.id + '-' + index} className="image-box">
                    <img src={img.src.medium} alt="" className="image" />
                </div>
            ))}

            {/* </div>
            </div> */}
            {/* <div className="images-list__image-box">1</div>
            <div className="images-list__image-box">2</div>
            <div className="images-list__image-box">3</div>
            <div className="images-list__image-box">4</div>
            <div className="images-list__image-box">5</div>
            <div className="images-list__image-box">6</div> */}
        </section>
    );
}
