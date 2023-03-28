import Image, { ImageProps } from 'next/image';
import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { WithChildrenProps } from '../types';
import clsx from 'clsx';
import smile1 from '../images/smile1.jpg';
import smile2 from '../images/smile2.jpg';
import smile3 from '../images/smile3.jpg';
import { title } from '../fonts';

const names = [
    'Abi',
    'Brian',
    'Carl',
    'Daniella',
    'Edward',
    'Ruby',
    'John',
    'Alan',
];
const locations = ['Baltimore', 'Washington D.C.', 'New York', 'Miami', 'Atlanta'];
type TestimonialProps = WithChildrenProps & {
    className?: string;
    parallax: MotionValue<number>;
};
function Testimonial({ className, children, parallax }: TestimonialProps) {
    const [randomName, setRandomName] = useState('');
    const [randomLocation, setRandomLocation] = useState('');

    useEffect(() => {
        setRandomName(names[Math.floor(Math.random() * names.length)]);
        setRandomLocation(
            locations[Math.floor(Math.random() * locations.length)]
        );
    }, []); //To make sure the random generation only runs on the client

    return (
        <motion.div
            className={clsx(
                'text-md flex aspect-[3/4] h-96 flex-col items-center justify-between gap-8 rounded-md bg-white p-6 font-light text-secondary shadow',
                className
            )}
            style={{ y: parallax }}>
            {children}
            <div className="w-full text-start font-bold">
                {randomName}, {randomLocation}
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const reverseParallax = useTransform(parallax, (v) => -v);
    useMotionValueEvent(parallax, 'change', (v) => console.log(v));
    return (
        <div
            className="flex min-h-[150vh] w-full flex-col items-center justify-center gap-12 bg-secondary px-4 py-24 md:p-24"
            ref={target}>
            <h2
                className={clsx(
                    'text-center text-4xl text-white md:w-1/2 md:text-7xl',
                    title.className
                )}>
                What Our Happy Clients Say
            </h2>
            <div className="flex grow flex-wrap items-center items-center justify-center justify-center gap-24">
                <Testimonial className="md:mb-24" parallax={parallax}>
                    <TestimonialImage src={smile1} alt="" />
                    &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae recusandae in incidunt? Deleniti.&quot;
                </Testimonial>
                <Testimonial className="md:mt-12" parallax={reverseParallax}>
                    <TestimonialImage src={smile2} alt="" />
                    &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci blanditiis expedita!&quot;
                </Testimonial>
                <Testimonial className="md:mb-12" parallax={parallax}>
                    <TestimonialImage src={smile3} alt="" />
                    &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolores fugiat iure voluptate doloribus atque sunt.&quot;
                </Testimonial>
            </div>
        </div>
    );
}

function TestimonialImage({ src, alt }: ImageProps) {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="aspect-square h-28  overflow-clip rounded-full">
                <Image src={src} alt={alt} className="object-cover" />
            </div>
        </div>
    );
}
