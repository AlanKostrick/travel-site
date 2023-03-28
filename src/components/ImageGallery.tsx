import Image, { ImageProps } from 'next/image';
import { Variants, motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

import cruise from 'images/cruise.jpg';
import kayak from 'images/kayak.jpg';
import maldives from 'images/maldives.jpg';
import winter from 'images/winter.jpg';

export function ImageGallery() {
    return (
        <div className="grid w-full max-w-screen-xl grid-cols-2 grid-rows-2 gap-2 p-4 lg:grid-cols-4 lg:grid-rows-1">
            <GalleryImage src={maldives} alt="dog1" />
            <GalleryImage src={cruise} alt="dog2" />
            <GalleryImage src={kayak} alt="dog3" />
            <GalleryImage src={winter} alt="dog4" />
        </div>
    );
}

const imageVariants: Variants = {
    noHover: { scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    hover: { scale: 1.1, transition: { duration: 1, ease: 'easeInOut' } },
};

function GalleryImage({ src, alt }: ImageProps) {
    return (
        <div className="aspect-[4/3] h-full overflow-clip rounded">
            <motion.div
                variants={imageVariants}
                initial="nohover"
                whileHover="hover"
                className="h-full w-full object-cover">
                <Image src={src} alt={alt} className="h-full object-cover" />
            </motion.div>
        </div>
    );
}
