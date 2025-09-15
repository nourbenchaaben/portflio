function Skills() {
    try {
        const skills = [
            {
                category: "Frontend",
                description: "Modern web development with React & Javascript",
                icon: "fas fa-code",
                techs: ["React", "Javascript", "Bootstrap", "Next.js"]
            },
            {
                category: "Backend",
                description: "Server-side development and APIs",
                icon: "fas fa-server",
                techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
            },
            {
                category: "Tools",
                description: "Development workflow and deployment",
                icon: "fas fa-tools",
                techs: ["Git", "Docker", "AWS", "Figma"]
            },
            {
                category: "Graphic Design & Video Editing",
                description: "Passionate about creating visual stories and polished videos",
                icon: "fas fa-paint-brush",  // or use "fas fa-video" for video editing icon
                techs: ["Adobe Photoshop", "Adobe Illustrator", "CapCut", "Adobe Premiere Pro"]
            }
        ];

        return (
            <div data-name="skills" data-file="components/Skills.js" className="section-blue py-16 border-y-2 border-black" id="skills">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} data-name="skill-card" className="neo-card p-6">
                                <i className={`${skill.icon} text-4xl mb-4 block`}></i>
                                <h3 className="font-bold mb-2">{skill.category}</h3>
                                <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {skill.techs.map((tech, i) => (
                                        <span key={i} className="bg-black text-white px-2 py-1 text-xs">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
    }
}
