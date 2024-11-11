import React, { memo } from "react";
import type { ImageGridProps } from "./types";

export const ImageGrid = memo<ImageGridProps>(({ section, index }) => {
    const badgePosition = index % 2 === 1 ? "left-1" : "right-1";

    const getBadgeSize = () => {
        const text = Array.isArray(section.badge) 
            ? section.badge.join('') 
            : section.badge;
        
        if (text.length <= 4) return 'w-24 h-24';
        if (text.length <= 8) return 'w-28 h-28';
        return 'w-32 h-32';
    };

    return (
        <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
            <div
                className={`absolute top-1 ${badgePosition} z-10 bg-sky-500 text-white rounded-full flex flex-col items-center justify-center text-lg font-medium shadow-md aspect-square ${getBadgeSize()}`}
            >
                {Array.isArray(section.badge)
                    ? section.badge.map((line, i) => <div key={i}>{line}</div>)
                    : section.badge}
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

const ImageItem = memo<ImageItemProps>(
    ({ image, title, index, imageIndex }) => (
        <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
                src={image}
                alt={`${title} ${index}.${imageIndex + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
            />
        </div>
    )
);

ImageGrid.displayName = "ImageGrid";
ImageItem.displayName = "ImageItem";
