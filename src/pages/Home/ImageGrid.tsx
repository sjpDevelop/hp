import React, { memo } from 'react';
import type { ImageGridProps } from './types';

export const ImageGrid = memo<ImageGridProps>(({ section, index }) => {
    const badgePosition = index % 2 === 1 ? 'left-2' : 'right-2';

    return (
        <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className={`absolute top-2 ${badgePosition} z-10 bg-sky-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-lg font-medium shadow-md aspect-square`}>
                {section.badge}
            </div>
            {section.images.map((image, imageIndex) => (
                <ImageItem
                    key={imageIndex}
                    image={image}
                    title={section.title}
                    index={index}
                    imageIndex={imageIndex}
                />
            ))}
        </div>
    );
});

interface ImageItemProps {
    image: string;
    title: string;
    index: number;
    imageIndex: number;
}

const ImageItem = memo<ImageItemProps>(({ image, title, index, imageIndex }) => (
    <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
        <img 
            src={image} 
            alt={`${title} ${index}.${imageIndex + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
        />
    </div>
));

ImageGrid.displayName = 'ImageGrid';
ImageItem.displayName = 'ImageItem';