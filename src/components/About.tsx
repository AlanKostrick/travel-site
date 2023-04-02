import { FaKey, FaMoneyBill, FaSmile } from 'react-icons/fa';
import { text, title } from '../fonts';

import { ImageGallery } from '@/components/ImageGallery';
import clsx from 'clsx';

export function About() {
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
                Life on your terms
            </h1>
            <div className="flex flex-col gap-12 text-3xl md:flex-row">
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaKey className="text-4xl" />
                    Accessible
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaSmile className="text-4xl" />
                    Flexible
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    <FaMoneyBill className="text-4xl" />
                    Scalable
                </div>
            </div>
            <button className="flex flex-row gap-12 rounded-full bg-primary px-8 py-4 text-2xl text-white">
                Learn More
            </button>
            <ImageGallery />
            <div className="text-2xl px-8 gap-5">Do you want to pursue your dreams?. Do you have a passion for travel? Get started by following the two step process on the web link provided.
                In less than 15 minutes, you will be fully operational in the travel space by partnering up with Plannet Marketing and Inteletravel.
                You are now an Online Travel Business Owner. LETS GET STARTED!  </div>
            <button className="flex flex-row gap-12 rounded-full bg-primary px-8 py-4 text-2xl text-white">
                Sign Up Now
            </button>
            <div className="text-2xl px-8 gap-5">Take control. You have the flexibility to work from anywhere at anytime. No quotas!
                This is an online marketing opportunity for your travel business. You will have the flexibility to work from your favorite travel destinations.
                Your schedule and how much you work is completely up to you!</div>
        </div>

    );
}
