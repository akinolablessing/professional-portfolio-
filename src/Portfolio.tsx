import React, { useState } from 'react';
import { Code, Database, Shield, Zap, CheckCircle, Download, Linkedin, Github, Mail, Menu, X, ExternalLink } from 'lucide-react';
import backendImage from "./assets/img.png"
import fintech from "./assets/img_1.png"
import hairFrontend from "./assets/hairImage.png"
import myself1 from "./assets/meWorking.jpg"
import dashboard from "./assets/dashboard.png"
import bug from "./assets/img_2.png"
import lightHouse from "./assets/img_4.png"

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Fintech Payment Gateway",
            tech: "Spring Boot, PostgreSQL, JWT",
            problem: "Built secure transaction processing system handling 10K+ daily transactions",
            image: fintech,
            category: "Fintech"
        },
        {
            id: 2,
            title: "Glambook",
            tech: "React, TypeScript, Tailwind CSS",
            problem: "Built a beauty service booking platform that allows customers to browse hairstylists, view services, and book hair appointments seamlessly",
            image: hairFrontend,
            category: "Booking App"
        },
        {
            id: 3,
            title: "Enterprise Auth System",
            tech: "NestJS, OAuth, MongoDB",
            problem: "Implemented role-based access control for 5000+ users with zero security incidents",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
            category: "Security"
        },
        {
            id: 4,
            title: "Errand Tribe",
            tech: "Django, Django REST Framework, MySQL, JWT",
            problem: "Built a backend platform that connects users with trusted errand runners, handling authentication, task management, and secure APIs",
            image: backendImage,
            category: "Backend"
        }
    ];

    const skills = [
        { category: "Backend", items: ["Java (Spring Boot)", "Python (Django, FastAPI)", "Node.js (Express, NestJS)"], icon: Database },
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"], icon: Code },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"], icon: Database },
        { category: "Security", items: ["JWT", "OAuth", "RBAC"], icon: Shield }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Ayomide
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#about" className="hover:text-cyan-400 transition cursor-pointer" onClick={(e) => {e.preventDefault(); document.getElementById('about').scrollIntoView({behavior: 'smooth'});}}>About</a>
                            <a href="#skills" className="hover:text-cyan-400 transition cursor-pointer" onClick={(e) => {e.preventDefault(); document.getElementById('skills').scrollIntoView({behavior: 'smooth'});}}>Skills</a>
                            <a href="#projects" className="hover:text-cyan-400 transition cursor-pointer" onClick={(e) => {e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior: 'smooth'});}}>Projects</a>
                            <a href="#gallery" className="hover:text-cyan-400 transition cursor-pointer" onClick={(e) => {e.preventDefault(); document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});}}>Gallery</a>
                            <a href="#contact" className="hover:text-cyan-400 transition cursor-pointer" onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>Contact</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2">
                            <a href="#about" className="block py-2 hover:text-cyan-400 cursor-pointer" onClick={(e) => {e.preventDefault(); setMobileMenuOpen(false); document.getElementById('about').scrollIntoView({behavior: 'smooth'});}}>About</a>
                            <a href="#skills" className="block py-2 hover:text-cyan-400 cursor-pointer" onClick={(e) => {e.preventDefault(); setMobileMenuOpen(false); document.getElementById('skills').scrollIntoView({behavior: 'smooth'});}}>Skills</a>
                            <a href="#projects" className="block py-2 hover:text-cyan-400 cursor-pointer" onClick={(e) => {e.preventDefault(); setMobileMenuOpen(false); document.getElementById('projects').scrollIntoView({behavior: 'smooth'});}}>Projects</a>
                            <a href="#gallery" className="block py-2 hover:text-cyan-400 cursor-pointer" onClick={(e) => {e.preventDefault(); setMobileMenuOpen(false); document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});}}>Gallery</a>
                            <a href="#contact" className="block py-2 hover:text-cyan-400 cursor-pointer" onClick={(e) => {e.preventDefault(); setMobileMenuOpen(false); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>Contact</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
                                AA
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Akinyemi Ayomide
                        </h1>
                        <p className="text-xl sm:text-2xl text-cyan-400 mb-8">Full-Stack Developer</p>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            I build scalable, secure systems that solve real business problems. From fintech platforms processing thousands of transactions daily to enterprise dashboards driving data-driven decisions, I deliver solutions that work reliably in production.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer"
                            >
                                Let's Work Together
                            </button>
                            <button
                                onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
                                className="border-2 border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Summary */}
            <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                I'm a full-stack developer who thrives on turning complex requirements into production-ready systems. With expertise spanning backend architecture, frontend development, and security implementation, I've built solutions for fintech, enterprise, and startup environments.
                            </p>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                My approach combines technical excellence with business thinking. I don't just write code—I build systems that scale, secure sensitive data, and deliver measurable impact.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                                <Zap className="text-cyan-400 mb-3" size={32} />
                                <h3 className="text-xl font-semibold mb-2">Performance First</h3>
                                <p className="text-slate-400">Optimized systems handling 10K+ daily transactions with 99.9% uptime</p>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                                <Shield className="text-cyan-400 mb-3" size={32} />
                                <h3 className="text-xl font-semibold mb-2">Security Focused</h3>
                                <p className="text-slate-400">Zero security incidents across authentication systems serving 5000+ users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Core Skills</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div key={skill.category} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition">
                                <skill.icon className="text-cyan-400 mb-4" size={32} />
                                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                                <ul className="space-y-2">
                                    {skill.items.map((item) => (
                                        <li key={item} className="text-slate-300 flex items-start">
                                            <CheckCircle className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={16} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Project Highlights</h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Real systems solving real problems—from secure payment gateways to enterprise dashboards
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition cursor-pointer transform hover:scale-105"
                                onClick={() => setSelectedProject(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">{project.category}</span>
                                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{project.problem}</p>
                                    <p className="text-cyan-400 text-sm font-mono">{project.tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery & Visual Showcase */}
            <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Behind The Code</h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        A look into my development process, workspace, and the systems I build
                    </p>

                    {/* Workspace Photos */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">In The Zone</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                                <img
                                    src={myself1}
                                    alt="Coding workspace"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-slate-300 text-sm">
                                        Building backend APIs with Spring Boot—turning business requirements into scalable microservices
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                                <img
                                    src={dashboard}
                                    alt="Pair programming"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-slate-300 text-sm">
                                        Collaborating on React components—creating intuitive user interfaces that users love
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                                <img
                                    src={bug}
                                    alt="Code review"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-slate-300 text-sm">
                                        Deep focus sessions—debugging complex authentication flows and optimizing database queries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code & Interface Screenshots */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Code & Systems In Action</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop"
                                    alt="Code snippet"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code size={20} className="text-cyan-400" />
                                        <span className="text-sm font-mono text-cyan-400">Spring Boot + JWT</span>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Secure Authentication System</h4>
                                    <p className="text-slate-400 text-sm mb-3">
                                        Built JWT-based authentication middleware handling token validation, refresh logic, and role-based access control for enterprise application
                                    </p>
                                    <div className="text-xs text-slate-500">
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">Java</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">Security</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded">JWT</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                                    alt="Dashboard interface"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Database size={20} className="text-cyan-400" />
                                        <span className="text-sm font-mono text-cyan-400">React + FastAPI</span>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Real-Time Analytics Dashboard</h4>
                                    <p className="text-slate-400 text-sm mb-3">
                                        Developed interactive data visualization platform with live WebSocket updates, reducing reporting time from hours to seconds
                                    </p>
                                    <div className="text-xs text-slate-500">
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">React</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">FastAPI</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded">WebSocket</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition">
                                <img
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop"
                                    alt="API code"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Shield size={20} className="text-cyan-400" />
                                        <span className="text-sm font-mono text-cyan-400">Node.js + PostgreSQL</span>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Payment Processing API</h4>
                                    <p className="text-slate-400 text-sm mb-3">
                                        Created RESTful API for fintech platform processing 10K+ daily transactions with built-in fraud detection and transaction rollback
                                    </p>
                                    <div className="text-xs text-slate-500">
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">Node.js</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">PostgreSQL</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded">Stripe</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition">
                                <img
                                    src={lightHouse}                                    alt="Mobile app"
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Zap size={20} className="text-cyan-400" />
                                        <span className="text-sm font-mono text-cyan-400">Next.js + Tailwind</span>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Mobile-First Web Application</h4>
                                    <p className="text-slate-400 text-sm mb-3">
                                        Built responsive progressive web app with offline capabilities, achieving 95+ Lighthouse performance score across all metrics
                                    </p>
                                    <div className="text-xs text-slate-500">
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">Next.js</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded mr-2">PWA</span>
                                        <span className="inline-block bg-slate-800 px-2 py-1 rounded">Tailwind</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Me */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Work With Me</h2>
                    <div className="grid sm:grid-cols-3 gap-8 mt-12">
                        <div>
                            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                            <p className="text-slate-300">Ownership mindset—I deliver complete, production-ready solutions</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-cyan-400 mb-2">Fast</div>
                            <p className="text-slate-300">Quick learner who adapts to new stacks and business requirements</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-cyan-400 mb-2">Reliable</div>
                            <p className="text-slate-300">Systems built for scale, security, and long-term maintainability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CV & Links */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-slate-300 mb-12 text-lg">
                        Ready to build something great together? Download my CV or connect with me on LinkedIn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/AKINYEMI_AYOMIDE_CV.pdf"
                            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akinola-blessing-b26a29351/"
                            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
                        >
                            <Linkedin size={20} />
                            LinkedIn Profile
                        </a>
                        <a
                            href="https://github.com/akinolablessing/"
                            className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 flex items-center gap-2"
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-700">
                        <a href="mailto:ayomide@example.com" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2">
                            <Mail size={20} />
                            akinolablessing1890@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
                <div className="max-w-7xl mx-auto text-center text-slate-400">
                    <p>© 2026 Akinyemi Ayomide. Built with React & Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}