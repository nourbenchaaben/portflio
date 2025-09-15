function About() {
    try {
        return (
            <div data-name="about" data-file="components/About.js" className="section-purple py-16 border-b-2 border-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/3 mb-8 md:mb-0">
                            <div className="neo-card p-4">
                                <img src="components/images/me.jpg" alt="Alex Chen" className="w-full object-cover rounded"/>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 md:pl-12">
                            <h2 className="text-3xl font-bold mb-6">About Me</h2>
                            <div className="neo-card p-6">
                                <p className="text-gray-600 mb-4 text-lg">
                                    I'm a passionate Computer Science student who fell in love with programming during my first coding class. 
                                    What started as curiosity has grown into a deep appreciation for creating digital experiences that make a difference.
                                </p>
                                <p className="text-gray-600 mb-4">
                                      When I’m not coding, I enjoy exploring new technologies, creating marketing campaigns, and mentoring others to grow their skills.
                                </p>
                                <div className="flex space-x-4 mt-6">
                                    <a href="https://github.com/nourbenchaaben" className="text-2xl hover:text-gray-600" target="_blank"><i className="fab fa-github" ></i></a>
                                    <a href="https://www.linkedin.com/in/nour-ben-chaaben/" className="text-2xl hover:text-gray-600" target="_blank"><i className="fab fa-linkedin" ></i></a>
                                 <a href="mailto:benchaabennour1234@gmail.com" className="text-2xl hover:text-gray-600">
  <i className="fas fa-envelope"></i>
</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}
