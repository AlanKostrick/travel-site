import { FaDog } from 'react-icons/fa';
import { Logo } from '@/components/Logo';
import { WithChildrenProps } from '../types';
import clsx from 'clsx';
import { title } from '../fonts';

function NavItem({ children }: WithChildrenProps) {
    return (
        <button className="rounded-full px-8 py-1 transition-all hover:bg-primary">
            {children}
        </button>
    );
}

export function NavBar() {
    return (
        <div className="text-md flex h-24 w-full items-center justify-between px-12">
            <Logo />
            <nav className="hidden gap-8 md:flex">
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>Blog</NavItem>
            </nav>
        </div>
    );
}
