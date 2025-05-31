function Header() {
    try {
        return (
            <div data-name="header" data-file="components/Header.js" className="bg-white border-b-2 border-black">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div data-name="logo" className="text-2xl font-bold">NOUR.DEV</div>
                    <nav data-name="navigation" className="hidden md:flex space-x-6">
                        <a href="#projects" className="text-black hover:text-gray-600 font-medium">Projects</a>
                        <a href="#skills" className="text-black hover:text-gray-600 font-medium">Skills</a>
                        <a href="#experience" className="text-black hover:text-gray-600 font-medium">Experience</a>
                        <a href="#contact" className="text-black hover:text-gray-600 font-medium">Contact</a>
                    </nav>
                </div>
                <div data-name="marquee" className="marquee py-2 text-white overflow-hidden">
                    <div className="marquee-content">
                        <span className="marquee-item">💻 Available for Internships & Projects</span>
                        <span className="marquee-item">🚀 CS Student at ISAMM</span>
                        <span className="marquee-item">⚡ Frontend & Full-Stack Developer</span>
                        <span className="marquee-item">💻 Available for Internships & Projects</span>
                        <span className="marquee-item">🚀 CS Student at ISAMM</span>
                        <span className="marquee-item">⚡ Frontend & Full-Stack Developer</span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
