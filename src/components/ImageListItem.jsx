import React from 'react';

export default function ImageListItem({
    img,
    isFavorited,
    onFavourite,
    onUnfavourite,
}) {
    return (
        <div key={img.id} className="images-list">
            <div className="image-box">
                <picture>
                    <source
                        media="(min-width: 71.25em)"
                        srcSet={img.src.large}
                    />
                    <source media="(min-width: 48em)" srcSet={img.src.medium} />
                    <img src={img.src.tiny} alt={img.alt} className="image" />
                </picture>
                {isFavorited ? (
                    <figcaption className="caption-liked">
                        <p>Favourited</p>
                    </figcaption>
                ) : (
                    <figcaption className="caption">
                        <p className="image-description">{img.alt}</p>
                        <div className="bottom-line"></div>
                        <p className="image-photographer">{img.photographer}</p>
                        <button
                            className="btn"
                            onClick={() => onFavourite(img)}
                        >
                            Favourite
                        </button>
                    </figcaption>
                )}
                <figcaption className="caption-unlike">
                    <button
                        className="btn"
                        onClick={() =>
                            isFavorited
                                ? onUnfavourite(img.id)
                                : onFavourite(img)
                        }
                    >
                        {isFavorited ? 'Remove from favourites' : 'Favourite'}
                    </button>
                </figcaption>
            </div>
        </div>
    );
}
