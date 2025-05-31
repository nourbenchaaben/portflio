function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="section-purple py-12 border-b-2 border-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="neo-card p-6">
                            <h3 className="font-bold mb-4 text-xl">Stay Updated</h3>
                            <div className="flex flex-col space-y-4">
                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="flex-grow px-4 py-3 border-2 border-black focus:outline-none"
                                    />
                                    <button className="neo-button px-6 py-3 font-bold">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Get notified about new projects and blog posts!
                                </p>
                            </div>
                        </div>
                        <div className="neo-card p-6">
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#projects" className="hover:underline">Projects</a></li>
                                <li><a href="#skills" className="hover:underline">Skills</a></li>
                                <li><a href="#experience" className="hover:underline">Experience</a></li>
                                <li><a href="#contact" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div className="neo-card p-6">
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="https://drive.google.com/file/d/1jYiMSa_sBrX4TtyJhDYX1WGnk4ivqwTF/view?usp=sharing" className="hover:underline">Resume PDF</a></li>
                                <li><a href="https://github.com/nourbenchaaben" className="hover:underline">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/nour-ben-chaaben/" className="hover:underline">LinkedIn</a></li>
                               

                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t-2 border-black">
                        <p>© 2025 Nou BenChaaben.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
