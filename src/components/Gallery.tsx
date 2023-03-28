import { FaBiking, FaHotel, FaPlane } from 'react-icons/fa';
import { text, title } from '../fonts';

import { ImageGallery } from '@/components/ImageGallery';
import clsx from 'clsx';

export function Gallery() {
    return (
        <div
            className={clsx(
                'mt-48 flex min-h-screen w-full flex-col items-center justify-center gap-14 px-4 text-primary md:px-12',
                text.className
            )}>
            <h1
                className={clsx(
                    'text-center text-4xl md:text-8xl',
                    title.className
                )}>
                At your service
            </h1>
            <div className="flex flex-col gap-12 text-3xl md:flex-row">
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaPlane className="text-4xl" />
                    Travel
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaHotel className="text-4xl" />
                    Lodging
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaBiking className="text-4xl" />
                    Activities
                </div>
            </div>
            <button className="flex flex-row gap-12 rounded-full bg-primary px-8 py-4 text-2xl text-white">
                Book an Appointment
            </button>
            <ImageGallery />
        </div>
    );
}
