import { FaUmbrellaBeach } from 'react-icons/fa';
import clsx from 'clsx';
import { title } from '../fonts';

export function Logo({ className }: { className?: string }) {
    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-2 text-2xl font-semibold font-light',
                title.className,
                className
            )}>
            <div className="text-4xl">
                <FaUmbrellaBeach />
            </div>
            MelsLogo
        </div>
    );
}
