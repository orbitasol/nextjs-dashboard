export default function Page() {
    return <>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="font-bold">MonApp</div>
            <ul className="flex gap-6">
                <li><a href="#" className="hover:text-gray-300">Accueil</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-200 p-4">Bloc 1</div>
        <div className="bg-green-200 p-4">Bloc 2</div>
        <div className="bg-blue-200 p-4">Bloc 3</div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-blue-500 p-4 rounded-lg">Colonne 1</div>
            <div className="bg-green-500 p-4 rounded-lg">Colonne 2</div>
        </div>

        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-xl">
                Hello Tailwind
            </div>
        </div>
    </>
}