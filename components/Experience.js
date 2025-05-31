function Experience() {
    try {
        return (
            <div data-name="experience" data-file="components/Experience.js" className="section-pink py-16 border-b-2 border-black" id="experience">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Experience </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-name="experience-card" className="neo-card p-6">
                            <h3 className="font-bold text-xl mb-2">Project Team Manager </h3>
                            <p className="text-gray-600 mb-2">ISAMM Microsoft Club• 2024 – Present</p>
                            <ul className="text-sm space-y-1">
                                <li>• Led a team of 20+ in content, dev & design</li>
                                <li>• Managed React.js/Firebase web platform</li>
                                <li>• Prepared for events and competitions as part of the OCVP team</li>
                            </ul>
                        </div>
                        <div data-name="education-card" className="neo-card p-6">
                            <h3 className="font-bold text-xl mb-2">Local Support Marketing Team </h3>
                            <p className="text-gray-600 mb-2">Aiesec Medina – • Present</p>
                            <ul className="text-sm space-y-1">
                                <li>• Led creative campaigns showcasing Summer Peak and iCX projects.</li>
                                <li>• Designed promotional materials and newsletters to boost EP engagement.</li>
                                <li>• Delivered final marketing reports summarizing Summer Peak outcomes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        reportError(error);
    }
}
