import useFetchData from '../customHooks/useFetchData';
import useSrollToBottom from '../customHooks/useSrollToBottom';
import useHandleFavourites from '../customHooks/useHandleFavourites';
import ImageListItem from './ImageListItem';

export default function ListOfImages() {
    const scrolledToBottom = useSrollToBottom();
    const fetchedImages = useFetchData(scrolledToBottom);
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
            {fetchedImagesWithoutFavourited?.map((img) => (
                <ImageListItem
                    key={img.id}
                    img={img}
                    isFavorited={false}
                    onFavourite={addImage}
                />
            ))}
        </section>
    );
}
