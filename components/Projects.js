function Projects() {
    try {
        const projects = [
  {
    name: "Train-Tracking Android App",
    description: "Developed a train-tracking Android app for a school project with real-time location, schedules, ticketing, and user profile features.",
    image: "components/images/train.png", 
    tech: ["Android", "Java/Kotlin", "Firebase", "Google Maps API"],
    github: "https://github.com/nourbenchaaben/manouba.git", 
    demo: "#"
  },
  {
    name: "Club Responsive Website",
    description: "Developed a responsive website for the club using React.js and integrated a contact form with EmailJS to streamline communication. Deployed on Azure and managed collaboration using Git and GitHub.",
    image: "components/images/imc.png", 
    tech: ["React.js", "EmailJS", "Azure", "Git/GitHub"],
    github: "https://github.com/nourbenchaaben/imc_website.git",
    demo: "https://nourbenchaaben.github.io/imc_website/"
  },
  {
    name: "Interactive Bingo Game",
    description: "Created an interactive Bingo game to enhance event engagement, using Firebase for database management and developed a leaderboard to track team rankings.",
    image: "components/images/bingo.png", // example website image
    tech: ["Firebase", "JavaScript", "React", "Realtime Database"],
    github: "https://github.com/nourbenchaaben/front-end-bingo.git",
    demo: "https://nourbenchaaben.github.io/front-end-bingo/"
  }
];


        return (
            <div data-name="projects" data-file="components/Projects.js" className="section-blue py-16 border-b-2 border-black" id="projects">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} data-name="project-card" className="neo-card p-4">
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4"/>
                                <h3 className="font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-gray-200 px-2 py-1 text-xs">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.github} className="text-sm hover:underline"  target="_blank">
                                        <i className="fab fa-github mr-1"></i>Code
                                    </a>
                                    <a href={project.demo} className="text-sm hover:underline"  target="_blank">
                                        <i className="fas fa-external-link-alt mr-1"></i>Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}
