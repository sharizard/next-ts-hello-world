import Link from 'next/link';
import { useState } from 'react';

const HamburgerButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className=' inline-flex p-3 bg-blue-500 hover:bg-blue-700 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
        </button>
    );
};

const NavBar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="bg-white py-4 border-t-8 border-blue-500">
            <div className="container flex items-center mx-auto justify-between">
                <Link href="/"><a className="font-bold text-2xl text-gray-800 tracking-widest">SHAHARIAR</a></Link>
                <HamburgerButton onClick={handleClick} />
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                        <Link href="/"><a className="lg:inline-flex lg:w-auto w-full p-2 mx-4 hover:underline focus:outline-none">Home</a></Link>
                        <Link href="/projects"><a className="lg:inline-flex lg:w-auto w-full p-2 mx-4 hover:underline focus:outline-none">Projects</a></Link>
                        <Link href="/contact"><a className="lg:inline-flex lg:w-auto w-full p-2 mx-4 hover:underline focus:outline-none">Contact</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;