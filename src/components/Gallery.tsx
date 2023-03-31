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
                Your Access
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
            <div className="text-2xl px-8 gap-5">You will have unlimited customer service and support at your fingertips, access to ON DEMAND agent training modules by Inteletravel and worldwide suppliers, and over $100k worth of sales and marketing tools online. </div>
            <div className="text-2xl px-8 gap-5 my-20">Flights, hotels/resorts, cruises, train tickets, sports and entertainment, travel insurance, US travel, international travel, villas and vacation rentals, transfers, excursions and activities, and MORE  </div>
        </div>
    );
}
