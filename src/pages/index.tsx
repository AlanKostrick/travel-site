import { text, title } from '../fonts';

import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import Head from 'next/head';
import { Intro } from '@/components/Intro';
import { SocialsFooter } from '@/components/SocialsFooter';
import { Testimonials } from '@/components/Testimonials';
import clsx from 'clsx';
import style from './style.module.css';

export default function Home() {
    return (
        <div
            className={clsx(
                'flex min-h-screen w-full flex-col items-center justify-center',
                style.layout
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
            <About />
            <Gallery />
            <Testimonials />
            <Footer />
            <SocialsFooter />
        </div>
    );
}
