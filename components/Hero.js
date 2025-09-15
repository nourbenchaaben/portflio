function Hero() {
    try {
        return (
            <div data-name="hero" data-file="components/Hero.js" className="section-yellow py-12 border-b-2 border-black">
                <div className="container mx-auto px-4 flex flex-wrap items-center">
                    <div data-name="hero-content" className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Building the <span className="bg-black text-white px-2">Future</span> of Web
                        </h1>
                        <p className="text-gray-700 mb-8 text-lg">
                            Hi, I’m Nour, a CS student at ISAMM, passionate about frontend development, full-stack programming, and solving real-world problems with code.

                        </p>
                        <div data-name="cta-buttons" className="space-x-6">
                            <a href="#projects">
                                <button className="neo-button px-10 py-4 rounded-none font-bold text-lg uppercase tracking-wider">
                                    View Projects
                                </button>
                            </a>
                            <button className="neo-button-white px-10 py-4 rounded-none font-bold text-lg uppercase tracking-wider" onClick={() => window.open('https://www.canva.com/design/DAGcv7G85zE/ipi1haEo0mEW2w3Wrlvpfg/view?utm_content=DAGcv7G85zE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc9a1f4c47a', '_blank')}>
                                Resume
                            </button>
                        </div>
                    </div>
                    <div data-name="hero-images" className="w-full md:w-1/2 relative h-[400px]">
                        <div className="neo-card p-2 absolute top-0 left-[10%] rotate-3 w-[220px]">
                            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Code Editor" className="w-full"/>
                        </div>
                        <div className="neo-card p-2 absolute top-[15%] right-[10%] -rotate-3 w-[220px]">
                            <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0" alt="Laptop Setup" className="w-full"/>
                        </div>
                        <div className="neo-card p-2 absolute bottom-0 left-[25%] -rotate-6 w-[220px]">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Developer Workspace" className="w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
