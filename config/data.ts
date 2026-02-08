
export const data = {
    personal: {
        name: "Prateek Ghosh",
        tagline: "Software Engineer | AI, Machine Learning, SAP",
        description: "Aspiring AI Engineering, specialized in Deep Learning models and Agentic AI Development, with a strong foundation in automation and development in SAP ABAP. Pursuing a Master's in Computer Science from University at Buffalo (AI/ML track).",
        email: "prateek.prateekghosh29@gmail.com",
        linkedin: "https://www.linkedin.com/in/prateek-ghosh-ub/",
        github: "https://github.com/Prateek-2106",
        location: "Buffalo, NY",
        resume: "/resume.pdf"
    },
    experience: [
        {
            role: "Research Intern",
            company: "University at Buffalo, SUNY",
            location: "Buffalo, NY",
            duration: "October 2025 – Present",
            description: [
                "Reported 4.44 Mean Opinion Score (MOS) in Speech Audio Synthesis (DiffWave Implementation): Curating the DiffWave pipeline for speech generation using the pre-trained 22.05 kHz model with mel-spectrogram conditioning; inject Gaussian noise via a Markov chain forward process and train reverse diffusion to recover clean audio.",
                "Vehicle Speed Imputation (Diffusion + GNN/FGTI): Studying and applying the above diffusion process to Graph Neural Networks (GNN) and FGTI for imputing missing values in Buffalo roadside speed-sensor time series; coverage windows: Oct-mid Nov 2022, first half of Dec 2022, Feb 2023; imputation targets: half of Nov 2022, second half of Dec 2022, Jan 2023 (full)"
            ]
        },
        {
            role: "Business Technical Analyst - SAP Development",
            company: "Deloitte US offices of India",
            location: "Hyderabad, India",
            duration: "July 2021 – July 2025",
            description: [
                "Engineered a PII data-scrambling and compliance automation platform using Python and SAP ABAP, automating manual data-masking workflows and improving enterprise data-privacy compliance across CRM systems by 90%.",
                "Refactored legacy cloud-based systems in the Custom Code Decommission initiative; decommissioned 35K+ redundant objects, improved system response time by 45%; enabled a $350K project renewal through scalable backend redesign.",
                "Delivered 110+ production-grade enhancements under Agile and CI/CD pipelines in ServiceOne; strengthened cross-team SLA adherence to 87% through test-driven, maintainable feature development.",
                "Resolved 70+ ABAP defects using SQL tuning, debugging, and OOP principles, boosting query processing efficiency by 6%",
                "Recognized with Deloitte's Applause Award for technical excellence and Cross-functional Collaboration on enterprise systems."
            ]
        },
        {
            role: "ML & AI Intern",
            company: "Central Tool Room and Training Center (Govt of India)",
            location: "Bhubaneswar, India",
            duration: "November 2019 – December 2019",
            description: [
                "Trained a real-time human-figure detection model using TensorFlow CNNs; achieved 92% accuracy, reduced image-processing latency by 22%, and lowered false-positive rate by 8% through model tuning.",
                "Benchmarked classical ML models (KNN, SVM, Naïve Bayes) against deep-learning baselines; achieved 10%+ accuracy improvement through efficient model tuning and dataset preprocessing pipelines using AI/ML frameworks (PyTorch)."
            ]
        },
        {
            role: "Software Development Intern",
            company: "Tata Motors South Africa",
            location: "Pretoria, South Africa",
            duration: "May 2019 – June 2019",
            description: [
                "Developed an end-to-end automation system integrating Excel VBA, SQL, and live scanner data, enhancing production-line traceability and shop-floor preprocessing for vehicular manufacturing, increasing production from 11 units to 13 units daily",
                "Automated the inventory-tally workflow, cutting cycle time by 90% and query latency by 98% across 9 vehicle models.",
                "Replaced external vendor software with an in-house data management platform, saving ZAR 15,000 annually and improving scalability, maintenance, and operational control."  
            ]
        }
    ],
    education: [
        {
            university: "University at Buffalo",
            degree: "Master of Science in Computer Science",
            location: "Buffalo, NY, USA",
            duration: "August 2025 - December 2026",
            coursework: "Algorithms, Computer Security, Computer Vision, Deep Learning, Operating Systems"
        },
        {
            university: "Kalinga Institute of Industrial Technology, Bhubaneswar",
            degree: "Bachelor of Technology - Electronics and Computer Science",
            location: "Bhubaneswar, India",
            duration: "July 2017 - August 2021",
            coursework: "Data Structures and Algorithms, Computer Networks, Database Management Systems"
        }
    ],
    projects: [
        {
            title: "Agentic Job Application Drafter",
            description:
                "Polls RSS feeds for job links and executes a LangChain workflow per job link using Browser Use Agent to extract form XPaths, attaching field values using LLMs, and auto-fill applications through a browser extension.",
            tags: [
                { name: "LangChain", color: "bg-blue-50 text-blue-700" },
                { name: "Browser Use", color: "bg-green-50 text-green-700" },
                { name: "FastAPI", color: "bg-purple-50 text-purple-700" },
                { name: "Next.js", color: "bg-indigo-50 text-indigo-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/rudraksh97/AutoApply", icon: "Github" },
            ],
        },
        {
            title: "Agentic Trip Planner",
            description:
                "Created an agentic AI vacation planner using LangGraph and Grok LLMs, integrating Google Maps APIs, currency conversion, and calculation tools to automate personalized itineraries and cut planning time.",
            tags: [
                { name: "LangGraph", color: "bg-blue-50 text-blue-700" },
                { name: "OpenRouter", color: "bg-green-50 text-green-700" },
                { name: "Streamlit", color: "bg-red-50 text-red-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/AI_Trip_Planner", icon: "Github" },
            ],
        },
        {
            title: "EmailWhiz - Bulk Cold Emailer",
            description:
                "A Django based Web Application, enables users to send 100+ personalized cold emails and follow-ups directly without Gmail redirection.",
            tags: [
                { name: "Django", color: "bg-green-50 text-green-700" },
                { name: "React", color: "bg-blue-50 text-blue-700" },
                { name: "Tailwind CSS", color: "bg-indigo-50 text-indigo-700" },
                { name: "MongoDB", color: "bg-yellow-50 text-yellow-700" },
                { name: "GCP", color: "bg-orange-50 text-orange-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/EmailWhizV3", icon: "Github" },
            ],
        },
        {
            title: "Lighthouse Free Medical Clinic App",
            description:
                "Developed a web application to provide optimal insurance recommendations for uninsured patients. Utilized OpenAI models, Next.js, and FastAPI to streamline decision-making for medical professionals.",
            award: "🏆 Winner of UB AI Hackathon",
            tags: [
                { name: "Next.js", color: "bg-blue-50 text-blue-700" },
                { name: "FastAPI", color: "bg-green-50 text-green-700" },
                { name: "OpenAI", color: "bg-purple-50 text-purple-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/lighthouse", icon: "Github" },
                { name: "Demo", url: "https://devpost.com/software/beacon-1j8itz?ref_content=my-projects-tab&ref_feature=my_projects", icon: "ExternalLink" },
            ],
        },
        {
            title: "Anime Recommendation System",
            description:
                "Built a machine learning-based recommendation system for personalized anime suggestions. Utilized Scikit-learn, Pandas, Django, and Streamlit to analyze 5M+ user ratings and suggest relevant anime. Implemented a hybrid approach using collaborative filtering and content-based similarity.",
            tags: [
                { name: "Scikit-learn", color: "bg-orange-50 text-orange-700" },
                { name: "Pandas", color: "bg-blue-50 text-blue-700" },
                { name: "Django", color: "bg-green-50 text-green-700" },
                { name: "Streamlit", color: "bg-red-50 text-red-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/AnsariSaad83299/Anime-Recommendation", icon: "Github" },
            ],
        },
        {
            title: "Doodle Recognition Web App",
            description:
                "Created an interactive web app for handwritten doodle recognition. Built with a Resnet18 model trained in PyTorch with MNIST dataset, integrated with a user-friendly front-end. Hosted on Huggingface spaces for easy access and deployment.",
            tags: [
                { name: "PyTorch", color: "bg-red-50 text-red-700" },
                { name: "ResNet18", color: "bg-purple-50 text-purple-700" },
                { name: "MNIST", color: "bg-yellow-50 text-yellow-700" },
                { name: "Huggingface", color: "bg-pink-50 text-pink-700" },
            ],
            links: [
                { name: "GitHub", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition/tree/main", icon: "Github" },
                { name: "Try it out", url: "https://huggingface.co/spaces/ramachandrankulothungan/digit_doodle_recognition", icon: "ExternalLink" },
            ],
        },
        {
            title: "Sorting Algorithm Visualizer",
            description:
                "Developed a React + TypeScript application to visualize sorting algorithms. Used Chart.js for real-time graph updates and deployed the app using GitHub Pages. Helps users understand sorting concepts interactively through visual representation.",
            tags: [
                { name: "React", color: "bg-blue-50 text-blue-700" },
                { name: "TypeScript", color: "bg-indigo-50 text-indigo-700" },
                { name: "Chart.js", color: "bg-green-50 text-green-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/RamachandranKulothungan/viewsort", icon: "Github" },
                { name: "Try it out", url: "https://ramachandrankulothungan.github.io/viewsort/", icon: "ExternalLink" },
            ],
        },
    ],
    now: {
        lastUpdated: "January 2026",
        tabs: [
            {
                id: "work",
                label: "Work",
                icon: "Briefcase",
                color: "text-blue-500",
                title: "Work",
                description: "I am actively deepening my expertise in C++ and python to drive my abilities as an AI Developer. Software engineering to me is a analogous to solving puzzles, those that add tremendous value when solved. The curiosity to enhance existing solutions and developing more efficient ones is thoroughly rewarding",
                currently: [
                    "Mastering C++ for high-performance microservices and low-latency networking",
                    "Exploring agentic systems and orchestration with LangGraph",
                    "Exploring the concepts of Diffusion models, trying to understand latest research works on Data interpolatiion and imputation"
                ]
            },
            {
                id: "fitness",
                label: "Fitness",
                icon: "Dumbbell",
                color: "text-green-500",
                title: "Fitness",
                description: "Basketball has been my  sincfuele childhood. In times of stress, a ball and a hoop equals forgetting the world. To get better at it, Hypertrophy training to maintain muscle mass, the physiology of it and the science of dieting is my most recent ongoing challenge.",
                currently: [
                    "Lifting weights and fu",
                    "Refining freestyle basketball techniques",
                    "Learning and improving swimming endurance"
                ]
            },
            {
                id: "anime",
                label: "Anime",
                icon: "Tv",
                color: "text-purple-500",
                title: "Anime",
                description: "Anime is a constant source of inspiration and storytelling mastery in my life. I follow them, appreciating it not just as entertainment but as examples of world-building and narrative depth. One Piece, in particular, has been a lifelong companion.",
                currently: [
                    "One Piece",
                    "Kagurabachi",
                    "Sakamoto Days",
                    "Tower of God (Urek Mazino arc)",
                    "Hajime no Ippo",
                    "Chainsaw Man",
                    "Jujutsu Kaisen",
                ]
            }
        ]
    }
} as const;
