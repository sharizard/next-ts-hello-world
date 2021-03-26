import { FC } from 'react';
import NavBar from '../components/navbar';

const Article = () => (
    <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <a href="#">
            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
                <a className="no-underline hover:underline text-black" href="#">
                    Article Title
                        </a>
            </h1>
            <p className="text-grey-darker text-sm">
                11/1/19
            </p>
        </header>

        <div className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-grey-darker text-sm">
                An awesome conferance
            </p>
        </div>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                <p className="ml-2 text-sm">
                    Author Name
                        </p>
            </a>
            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
            </a>
        </footer>

    </div>
);

const Content = () => {
    return (
        <div className="flex mx-auto w-10/12 p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
}

const IndexPage: FC = () => (
    <>
        <NavBar />
        <Content />
    </>
)

export default IndexPage;