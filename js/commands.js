// These are the variable for the direct links
var linkedin = "https://www.linkedin.com/in/vaidehi-kalra";
var github = "https://github.com/Vk5548";
var email = 'mailto:kalravaidehi0306@gmail.com';
var resume = 'https://github.com/Vk5548/Vk5548.github.io/blob/main/resume/Vaidehi_Kalra.pdf';
var gentoo = 'https://medium.com/@kalravaidehi0306/gentoo-linux-the-final-frontier-of-linux-distros-and-possibly-your-sanity-b8da5e7d0e52';
var chrome_extension = 'https://github.com/Vk5548/T-C-AI';
var subgraph_matching = 'https://github.com/Vk5548/Adv_DB_Graph_Databases/tree/master/Assignment3-Subgraph-Matching';
var momento_hash = 'https://github.com/Vk5548/distributed-rust';

// This content is about the "WHOIS"
// whois = [
//     "<br>",
//     "Vaidehi Kalra",
//     "<br><br>",
//     "Vaidehi Kalra is a dedicated Software Engineer with a Master's degree in Computer Science from the Rochester Institute of Technology (Class of May 2024). She has over 6 years of experience in the field, having earned both a Bachelor's and Master's in CS. Vaidehi is passionate about backend development, with strong skills in coding and fast learning. Her determination and resilience have driven her to thrive in the ever-evolving world of AI.",
//     "<br><br>",
//     "<strong>Professional Contributions and Expertise:</strong>",
//     "<br><br>",
//     "Vaidehi has worked on numerous projects, including her recent Chrome extension, designed to highlight key points in terms and conditions, making them more user-friendly. This project, initially started in Rust, integrates AI models such as Meta's LLaMA 3.1 and is currently being optimized with cloud integration using AWS SageMaker.",
//     "<br><br>",
//     "In her co-op at the London Stock Exchange Group, Vaidehi quickly adapted to frontend technologies, delivering quality results that culminated in a presentation to over 140 people.",
//     "<br><br>",
//     "<strong>Technical Skills and Projects:</strong>",
//     "<br><br>",
//     "- Backend Development: Specializes in Spring Boot, Rust, Python, and Flask.",
//     "<br>",
//     "- AI Integration: Experience with Meta’s LLaMA 3.1 and PyTorch for neural network models.",
//     "<br>",
//     "- Cloud Integration: AWS SageMaker for deploying AI models.",
//     "<br>",
//     "- Distributed Systems: Currently working on a distributed file system using Rust on Gentoo Linux.",
//     "<br><br>",
//     "<strong>Passion and Hobbies:</strong>",
//     "<br><br>",
//     "In her free time, Vaidehi enjoys playing FIFA and continuously pushing her technical boundaries by exploring new technologies such as Rust and Gentoo Linux.",
//     "<br><br>",
//     "<strong>Conclusion:</strong>",
//     "<br><br>",
//     "Vaidehi is a committed and adaptable engineer, with a strong focus on backend development, cloud integration, and AI-driven projects. She’s excited to continue growing her skills and take on new challenges in the tech world.",
//     "<br>"
// ];

whois = [
    "<br>",
    "Vaidehi Kalra",
    "<br><br>",
    "Vaidehi Kalra is a Backend and Infrastructure Engineer with a Master's degree in Computer Science from the Rochester Institute of Technology (May 2024). She specializes in distributed systems, networking, and backend development, focusing on scalable and fault-tolerant architectures.",
    "<br><br>",
    "<strong>Professional Expertise & Technical Contributions:</strong>",
    "<br><br>",
    "- **Distributed Systems & Scalability:** Designed and implemented a distributed file system (MomentoHash) in Rust with gRPC (FlatBuffers) for efficient inter-node communication and optimized TCP-based messaging.",
    "<br>",
    "- **Backend Development:** Proficient in Rust, Python, and Java, focusing on high-performance backend services with Actix, Spring Boot, and Flask.",
    "<br>",
    "- **Networking & Security:** Implemented TLS encryption, secure authentication, and RPC-based communication protocols for distributed applications.",
    "<br>",
    "- **Cloud & DevOps:** Skilled in Docker, Kubernetes, and CI/CD automation (GitHub Actions, Jenkins) to streamline deployments.",
    "<br>",
    "- **Linux & System Optimization:** Experience with Gentoo Linux, including kernel tuning, bootloader configuration, and debugging embedded Linux environments.",
    "<br>",
    "- **Databases & Storage:** Worked extensively with PostgreSQL, MongoDB, DynamoDB, and Redis for designing scalable storage layers.",
    "<br><br>",
    "<strong>Notable Projects:</strong>",
    "<br><br>",
    "- **MomentoHash:** A high-performance distributed system written in Rust, integrating service discovery with etcd and efficient request routing using JumpHash.",
    "<br>",
    "- **T&C-AI:** Developed a Chrome extension leveraging LLMs to parse and summarize terms & conditions, integrating Meta’s LLaMA 3.1 via Flask backend.",
    "<br>",
    "- **Gentoo Linux Kernel Optimization:** Configured GRUB, EFI Secure Boot, and optimized system performance for enhanced boot reliability and security.",
    "<br><br>",
    "<strong>Passion & Interests:</strong>",
    "<br><br>",
    "Beyond engineering, Vaidehi enjoys exploring advanced computing paradigms, Linux customization, and playing FIFA. She constantly pushes boundaries by researching new technologies and refining her expertise in distributed systems.",
    "<br><br>",
    "<strong>Conclusion:</strong>",
    "<br><br>",
    "Vaidehi is a dedicated and innovative engineer with a strong focus on backend infrastructure, security, and scalable distributed computing. She is eager to take on new challenges and drive advancements in the tech world.",
    "<br>"
];


// Command list for help section
help = [
    "<br>",
    '<span class="command">Commands</span>       Description',
    "<br>",
    '<span class="command">whois</span>          About Vaidehi',
    '<span class="command">social</span>         Social platforms',
    '<span class="command">projects</span>       Personal, Academic and Professional projects',
    '<span class="command">resume</span>         Resume link',
    '<span class="command">email</span>          Email address',
    '<span class="command">blog</span>           My Medium Blog',
    '<span class="command">clear</span>          Clear terminal',
    "<br>",
];

// Social links
social = [
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/vaidehi-kalra' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/VK5548' + "</a>",
    'email          <a href="' + email + '" target="_blank">Email Vaidehi' + "</a>",
    "<br>"
];

// Projects
projects = [
    "<br>",
    '1. MomentoHash - A Distributed System in Rust <a href="' + momento_hash + '" target="_blank">View on GitHub' + "</a>",
    '2. T&C AI Chrome Extension <a href="' + chrome_extension + '" target="_blank">View on GitHub' + "</a>",
    '3. Subgraph Isomorphism  <a href ="' + subgraph_matching + '" target="_blank">View On GitHub' + "</a>",
    "<br>"
];

blogs = [
    "<br",
    '1. Gentoo : A linux distribution <a href="' + gentoo + '" target="_blank">medium' + "</a>",
    'REST is : WORK IN PROGRESS',
    "<br>"
];

secret = [
    "<br>",
    '<span class="command">sudo</span>           Only use if you\'re admin',
    "<br>"
];

banner = [
    "<br>",
    "+-+-+-+-+-+-+-+ +-+-+-+-+-+",
    "|V|A|I|D|E|H|I| |K|A|L|R|A|",
    "+-+-+-+-+-+-+-+ +-+-+-+-+-+",
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
    "<span class=\"color2\">Note: Don't think about</span> <span class=\"command\">'SUDO'</span><span class=\"color2\">.</span>"
];


