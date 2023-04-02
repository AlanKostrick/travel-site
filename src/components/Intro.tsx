import { Variants, motion } from 'framer-motion';
import { text, title } from '../fonts';

import Image from 'next/image';
import clsx from 'clsx';
import tropical from '../images/tropical.jpg';

const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
        x: 300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};
export function Intro() {
    return (
        <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-x-clip bg-secondary text-light sm:h-[100vh]">
            <main className="relative flex w-full grow items-start justify-center py-12 px-4 md:items-center lg:justify-start md:px-12">
                <motion.header
                    className={clsx(
                        'z-10 flex flex-col gap-12 md:-mt-36',
                        title.className
                    )}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
                    <h1 className="text-center text-5xl md:text-start md:text-8xl">
                        Wanderlust Travel
                    </h1>
                    <p className={clsx('text-4xl', text.className)}>
                        Welcome aboard!
                    </p>
                </motion.header>
                <motion.div
                    className="absolute right-0 -bottom-24 w-full sm:w-5/5 md:-bottom-36 md:w-[750px]"
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introPictureVariants}>
                    <Image src={tropical} alt="tropical" />
                </motion.div>
            </main>
        </div>
    );
}
