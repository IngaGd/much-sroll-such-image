import useFetchData from '../hooks/useFetchData';
import useSrollToBottom from '../hooks/useSrollToBottom';
import useSetItem from '../hooks/useSetItem';

export default function ListOfImages() {
    const page = useSrollToBottom();
    const imgSrc = useFetchData(page);
    const { images, addImage } = useSetItem();

    console.log('Page:', page);
    console.log('ImgSrc:', imgSrc);
    console.log('Favoirite img: ', images);

    const handleFavourite = (img) => {
        addImage(img);
    };

    return (
        <section className="container">
            {images?.map((img) => (
                <div key={img.id} className="images-list">
                    <div className="image-box">
                        {' '}
                        <img src={img.src.medium} alt="" className="image" />
                        <figcaption className="caption liked">
                            <p>Favourited</p>
                        </figcaption>
                        <figcaption className="caption-unlike">
                            <button
                                className="btn"
                                // onClick={handleRemoveFavourited(img)}
                            >
                                Remove from favourites
                            </button>
                        </figcaption>
                    </div>
                </div>
            ))}
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
                            <button
                                className="btn"
                                onClick={() => handleFavourite(img)}
                            >
                                Favourite
                            </button>
                        </figcaption>
                    </div>
                </div>
            ))}
        </section>
    );
}
