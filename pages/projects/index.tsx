import NavBar from '../../components/navbar';

const ProjectsPage = () => {
    return (
        <>
            <NavBar />
            <section className="flex flex-col md:flex-row">
                <div className="w-1/2">
                    <div className="self-center p-6">
                        <h1 className="text-5xl font-bold leading-tight">Hello world</h1>
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <p>Hello world</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ProjectsPage;