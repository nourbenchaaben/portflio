import emailjs from "@emailjs/browser";
function Contact() {
    try {
        return (
            <div data-name="contact" data-file="components/Contact.js" className="section-yellow py-16 border-b-2 border-black" id="contact">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div data-name="contact-form" className="neo-card p-6">
                            <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 border-2 border-black"/>
                            <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 border-2 border-black"/>
                            <input type="text" placeholder="Subject" className="w-full mb-4 p-3 border-2 border-black"/>
                            <textarea placeholder="Your Message" rows="4" className="w-full mb-4 p-3 border-2 border-black"></textarea>
                            <button className="neo-button w-full py-3 font-bold">Send Message</button>
                        </div>
                        <div data-name="contact-info" className="neo-card p-6">
                            <div className="mb-6">
                                <h3 className="font-bold mb-4">Get In Touch</h3>
                                <p className="mb-2"><i className="fas fa-envelope mr-2"></i>benchaabennour1234@gmail.com</p>
                                <p className="mb-2"><i className="fas fa-phone mr-2"></i>+216 58-220-653</p>
                                <p className="mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Tunis, Tunisia</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/nourbenchaaben" className="text-2xl hover:text-gray-600" target="_blank"><i className="fab fa-github" ></i></a>
                                    <a href="https://www.linkedin.com/in/nour-ben-chaaben/" className="text-2xl hover:text-gray-600" target="_blank"><i className="fab fa-linkedin" ></i></a>
                                 <a href="mailto:benchaabennour1234@gmail.com" className="text-2xl hover:text-gray-600"><i className="fas fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
