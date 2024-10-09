const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-white bg-slate-950 font-grotesk px-12 py-6">
            <p className="text-2xl font-semibold">GitHub</p>

            <ul className="flex items-center justify-center gap-8 text-lg">
                <li>Home</li>
                <li>Repositories</li>
                <li>Organizations</li>
            </ul>
        </div>
    )
}

export default Navbar;