import useFetchData from '../customHooks/useFetchData';
import useSrollToBottom from '../customHooks/useSrollToBottom';
import useHandleFavourites from '../customHooks/useHandleFavourites';

export default function ListOfImages() {
    const page = useSrollToBottom();
    const fetchedImages = useFetchData(page);
    const { favouritedImages, addImage, removeImage } = useHandleFavourites();

    const favouritedImagesIds = favouritedImages.map((img) => img.id);

    const fetchedImagesWithoutFavourited = fetchedImages.filter(
        (img) => !favouritedImagesIds.includes(img.id)
    );

    const handleFavourite = (img) => {
        addImage(img);
    };

    const handleRemoveFavourited = (id) => {
        removeImage(id);
    };

    return (
        <section className="container">
            {favouritedImages?.map((img) => (
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
                                onClick={() => handleRemoveFavourited(img.id)}
                            >
                                Remove from favourites
                            </button>
                        </figcaption>
                    </div>
                </div>
            ))}
            {fetchedImagesWithoutFavourited?.map((img, index) => (
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
