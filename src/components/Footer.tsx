import {
    FaFacebook,
    FaInstagram,
    FaLeaf,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

import { Logo } from '@/components/Logo';
import clsx from 'clsx';
import { text } from '../fonts';

export function Footer() {
    return (
        <section
            className={clsx(
                'section flex w-full flex-col items-start justify-center gap-10 p-10 py-48 text-secondary md:flex-row  md:justify-between',
                text.className
            )}>
            <Logo />
            <div>
                <div className="text-xl font-bold">Contact Us</div>
                <div>
                    <div>443-880-3483</div>
                    <div>mwelwakostrick@gmail.com</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Address</div>
                <div>
                    <div>6510 Haviland Mill Road</div>
                    <div>Clarksville, MD</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Hours</div>
                <div>
                    <div>Mon - Fri: 10am - 8pm</div>
                </div>
            </div>
        </section>
    );
}
export function FooterOld() {
    return (
        <footer
            className={clsx(
                'flex h-96 w-full flex-col items-start gap-5 p-5 py-10',
                text.className
            )}>
            <Logo />

            <FooterItem
                title="Address"
                content="1 Forest View, Blidworth, NG21 0QT"
            />
            <FooterItem title="Contact" content="contact@email.com" />
        </footer>
    );
}

function FooterItem({ title, content }: { title: string; content: string }) {
    return (
        <div className="text-primary">
            <div className="text-xl font-bold">{title}</div>
            <div className="text-xl">{content}</div>
        </div>
    );
}
