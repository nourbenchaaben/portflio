function App() {
    try {
        return (
            <div data-name="app" data-file="app.js">
                <Header />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
