import useFetchData from '../customHooks/useFetchData';
import useSrollToBottom from '../customHooks/useSrollToBottom';
import useHandleFavourites from '../customHooks/useHandleFavourites';
import ImageListItem from './ImageListItem';

export default function ListOfImages() {
    const page = useSrollToBottom();
    const fetchedImages = useFetchData(page);
    const { favouritedImages, addImage, removeImage } = useHandleFavourites();

    const favouritedImagesIds = favouritedImages.map((img) => img.id);

    const fetchedImagesWithoutFavourited = fetchedImages.filter(
        (img) => !favouritedImagesIds.includes(img.id)
    );

    return (
        <section className="container">
            {favouritedImages?.map((img) => (
                <ImageListItem
                    key={img.id}
                    img={img}
                    isFavorited={true}
                    onUnfavourite={removeImage}
                />
            ))}
            {fetchedImagesWithoutFavourited?.map((img, index) => (
                <ImageListItem
                    key={img.id + '-' + index}
                    img={img}
                    isFavorited={false}
                    onFavourite={addImage}
                />
            ))}
        </section>
    );
}
