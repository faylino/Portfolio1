// assets/js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Load the default page (home)
    loadPage('home');
});

function loadPage(page) {
    const content = document.getElementById('main-content');
    switch (page) {
        case 'home':
            content.innerHTML = `
                <section id="home">
                    <div class="intro-container">
                        <h1>Welcome to My Portfolio</h1>
                        <p>I'm Faye-Peace Richardson, a web developer with a passion for AI and software development. Let's explore my journey!</p>
                        <a href="#about" class="btn">Learn More</a>
                    </div>
                </section>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <section id="about">
                    <div class="section-container">
                        <h2>About Me</h2>
                        <p>Hello! I'm Faye-Peace, a technology enthusiast with experience in Java programming, AI data rating, and first-line support. I’m passionate about web development, especially the intersection of AI and software engineering. I’ve built and contributed to a variety of projects, and I am eager to continue learning and growing in the tech space.</p>
                        <h3>Why Web Development?</h3>
                        <p>I chose web development because it allows me to creatively solve problems while working with the latest technologies. I enjoy building user-friendly applications and websites that can help make a positive impact on others.</p>
                        <a href="#contact" class="btn">Get In Touch</a>
                    </div>
                </section>
            `;
            break;
        case 'projects':
            content.innerHTML = `
                <section id="projects">
                    <div class="section-container">
                        <h2>Projects</h2>
                        <div class="project-card">
                            <h3>Database Management System for Inventory Control</h3>
                            <p>Designed a relational database to track inventory, orders, and suppliers. Used MySQL with Java for querying and data management.</p>
                        </div>
                        <div class="project-card">
                            <h3>Simple Console-Based Game in Java</h3>
                            <p>Created a text-based game that applied object-oriented principles such as encapsulation and inheritance.</p>
                        </div>
                        <div class="project-card">
                            <h3>AI Data Rater Project Contribution</h3>
                            <p>Worked on improving AI models for NLP tasks like sentiment analysis, providing data insights for better contextual understanding.</p>
                        </div>
                        <div class="project-card">
                            <h3>Simple Banking Application in Java</h3>
                            <p>Developed a secure and reliable banking system that handles basic transactions like deposits and withdrawals.</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'skills':
            content.innerHTML = `
                <section id="skills">
                    <div class="section-container">
                        <h2>Technical Skills</h2>
                        <div class="skills-container">
                            <div class="skill">
                                <h3>Java</h3>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 80%;"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>Python</h3>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 75%;"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>HTML, CSS, JavaScript</h3>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 85%;"></div>
                                </div>
                            </div>
                            <div class="skill">
                                <h3>MySQL</h3>
                                <div class="progress-bar">
                                    <div class="progress" style="width: 70%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <div class="section-container">
                        <h2>Contact Me</h2>
                        <p>If you want to get in touch, feel free to reach out via email or through the form below!</p>
                        <form id="contact-form">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>

                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>

                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" required></textarea>

                            <button type="submit" class="btn">Send Message</button>
                        </form>
                    </div>
                </section>
            `;
            break;
        default:
            content.innerHTML = `<h2>Page not found.</h2>`;
    }
}
