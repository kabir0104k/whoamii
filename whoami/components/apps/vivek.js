import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "achievements": <Achievements />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Whoami</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Certifications</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Achievements</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Ranjan Kumar Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div><span className="font-bold">Rαηյαη Kumαr</span></div>
                <div className="font-normal ml-1"> <span className="text-green-600 font-extrabold">Security Researcher</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">A Passionate Cybersecurity Professional with a Focus on Offensive Security and Red Teaming <span className=" font-medium"></span> <u className=' cursor-pointer '> <a href="" target={"_blank"}></a> </u><a className='text-underline' href=''><u></u></a></li>
                <li className=" mt-3 list-building"> Bachelor's egree in Computer Science, with a strong foundation in Systems, Networks, and Application Security</li>
                <li className=" mt-3 list-time">Good at Finding and Fixing Security Problems in Android Apps and APIs by thinking like a Real Hacker<a href="" target="_blank" rel="noreferrer"> </a></li>
                <li className=" mt-3 list-star"> Hunting Bugs on Bugcrowd & Yogosha  Responsibly Breaking things to make the Internet safer</li>
            </ul>
        </>
    )
}
const Education = () => {
    return (
        <>
            <h2 className="text-xl font-bold text-white-400 mt-10 mb-4">🎓CERTIFICATIONS</h2>
            <ul className="list-outside text-yellow-300 space-y-4">
                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/CEH%20V12_page-0001.jpg?raw=true"
                           className="text-teal-300 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🕵️‍♂️ CEH v12 (Certified Ethical Hacker)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eJPT_pages-to-jpg-0001.jpg?raw=true"
                            className="text-white-700 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🧑‍💻 eJPT (eLearnSecurity Junior Penetration Tester)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eCPPTv1_page-0001.jpg?raw=true"
                            className="text-purple-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🛡️ eCPPTv2 (Certified Professional Penetration Tester)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/eWPTXv2_page-0001.jpg?raw=true"
                            className="text-green-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🌐 eWPTXv2 (Web Application Penetration Tester eXtreme)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/Dante-certificate_page-0001.jpg?raw=true"
                            className="text-red-700 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 DANTE (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/Zephyr_page-0001.jpg?raw=true"
                            className="text-pink-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 ZEPHYR (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>

                <li>
                    <div className="text-lg md:text-xl font-bold">
                        <a
                            href="https://github.com/kabir0104k/HackerHub/blob/main/RastaLabs.jpg?raw=true"
                            className="text-cyan-400 hover:border-b border-teal-400 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🏅 RASTALABS (HackTheBox)
                        </a>
                    </div>
                    <div className="text-sm text-gray-400"></div>
                </li>
            </ul>
        </>
    );
};

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                SKILLS
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">

              
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Network Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Web Application Pentesting</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> API Security Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Android Application Security</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> OWASP Top 10</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Vulnerability Scanning & Assessment</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> BlackBox Penetration Testing</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-1 leading-tight tracking-tight">
                    <div> Shell Scripting (Bash & PowerShell)</div>
                </li>

            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">TOOLS</div> 
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">INTERESTS</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="https://img.shields.io/badge/Nmap-005F6B?style=flat&logoColor=white&color=5B9AA0" alt="Nmap" />
                    <img className="m-1" src="https://img.shields.io/badge/Nessus-003366?style=flat&logoColor=white&color=4169E1" alt="Nessus" />
                    <img className="m-1" src="https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white" alt="Wireshark" />
                    <img className="m-1" src="https://img.shields.io/badge/BurpSuite-FF6F00?style=flat&logo=burpsuite&logoColor=white" alt="BurpSuite" />
                    <img className="m-1" src="https://img.shields.io/badge/SQLMap-black?style=flat&logoColor=white" alt="SQLMap" />
                    <img className="m-1" src="https://img.shields.io/badge/Metasploit-00BFFF?style=flat&logoColor=white" alt="Metasploit" />
                     <img className="m-1" src="https://img.shields.io/badge/Hydra-228B22?style=flat&logoColor=white" alt="Hydra" />
                     <img className="m-1" src="https://img.shields.io/badge/John_The_Ripper-8B0000?style=flat&logoColor=white" alt="John The Ripper" />
                     <img className="m-1" src="https://img.shields.io/badge/Hashcat-8A2BE2?style=flat&logoColor=white" alt="Hashcat" />
                     <img className="m-1" src="https://img.shields.io/badge/Netcat-696969?style=flat&logoColor=white" alt="Netcat" />
                     <img className="m-1" src="https://img.shields.io/badge/Nikto-A52A2A?style=flat&logoColor=white" alt="Nikto" />
                     <img className="m-1" src="https://img.shields.io/badge/Gobuster-483D8B?style=flat&logoColor=white" alt="Gobuster" />
                     <img className="m-1" src="https://img.shields.io/badge/OWASP_ZAP-0298C3?style=flat&logo=owasp&logoColor=white" alt="OWASP ZAP" />
                     <img className="m-1" src="https://img.shields.io/badge/TCP/IP-2E8B57?style=flat&logoColor=white" alt="TCP/IP" />
                     <img className="m-1" src="https://img.shields.io/badge/OSI_Model-556B2F?style=flat&logoColor=white" alt="OSI Model" />
                     <img className="m-1" src="https://img.shields.io/badge/IPv4/IPv6-191970?style=flat&logoColor=white" alt="IPv4/IPv6" />
                     <img className="m-1" src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white" alt="Postman" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="https://img.shields.io/badge/CTF_Challenges-7E57C2?style=flat&logoColor=white" alt="CTF Challenges" />
                    <img className="m-1" src="https://img.shields.io/badge/Bug_Hunting-BA55D3?style=flat&logoColor=white" alt="Bug Hunting" />
                    <img className="m-1" src="https://img.shields.io/badge/Course_Enrolling-8A2BE2?style=flat&logoColor=white" alt="Course Enrolling" />
                    <img className="m-1" src="https://img.shields.io/badge/Collecting_Certificates-9932CC?style=flat&logoColor=white" alt="Collecting Certificates" />
                    <img className="m-1" src="https://img.shields.io/badge/Goal:_Cloud_&_OffSec_Certs-6A5ACD?style=flat&logoColor=white" alt="Cert Goal" />
                    <img className="m-1" src="https://img.shields.io/badge/Cybersecurity_&_Cloud_Learning-4B0082?style=flat&logoColor=white" alt="Cyber & Cloud" />

                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "Apr 2021",
            link: "https://github.com/vivek9patel/vivek9patel.github.io",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },

        {
            name: "Problem Recommendation System",
            date: "Sep 2020",
            link: "https://github.com/vivek9patel/Improve-Codeforces",
            description: [
                "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
            ],
            domains: ["django", "python", "codeforces-api", "javascript"]
        },
        {
            name: "Cleanliness Automation",
            date: "Dec 2019",
            link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
            description: [
                "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
            ],
        }
    ];

    const tag_colors = {

    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>  
            <iframe src="https://github.com/sponsors/vivek9patel/card" title="Sponsor Ranjan" className='my-4 w-5/6 md:w-3/4' ></iframe> 
//animation
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Achievements() {
    return (
        <iframe className="h-full w-full" src="./files/Vivek-Patel-Resume.pdf" title="Ranjan Resume" frameBorder="0"></iframe>
    )
}