
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
            title: "Ozone Concentration Forecasting",
            description:
                "Utilizing USA Gov Hourly met data (time-series) to predict Ozone concentration at (t+k) hours using Multi-layer Perceptron with the help of a custom PyTorch Neural Network. Achieved comparable results to baseline time series specialized models like LSTM and GRU",
            tags: [
                { name: "Deep Learning", color: "bg-blue-50 text-blue-700" },
                { name: "Neural Network", color: "bg-green-50 text-green-700" },
                { name: "Time-Series Analysis", color: "bg-purple-50 text-purple-700" },
                { name: "PyTorch", color: "bg-indigo-50 text-indigo-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/Ozone-Concentration-Forecasting", icon: "Github" },
            ],
        },
        {
            title: "Resume Classification",
            description:
                "Leveraged Natural Language Processing Concepts to train a vectorizer to successfully classify resume and match to specific job roles. Achieved 83% accuracy.",
            tags: [
                { name: "Natural Language Processing", color: "bg-blue-50 text-blue-700" },
                { name: "Classifier", color: "bg-green-50 text-green-700" },
                { name: "NLTK", color: "bg-red-50 text-red-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/Resume-Classification", icon: "Github" },
            ],
        },
        {
            title: "Skin Cancer Classification",
            description:
                "Built a Convolutional Neural Network classifier to classify skin deformities as malignant or benign, achieving 85% accuracy (comparable to Resnet50 ~86%); reduced false negatives 20%, improving reliability for early detection use cases.",
            tags: [
                { name: "OpenCV", color: "bg-green-50 text-green-700" },
                { name: "Convolutional Neural Network", color: "bg-blue-50 text-blue-700" },
                { name: "Keras", color: "bg-indigo-50 text-indigo-700" },
                { name: "Sci-kit Learn", color: "bg-yellow-50 text-yellow-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/Skin-Cancer-Classification", icon: "Github" },
            ],
        },
        {
            title: "Simulation of Self Driving Car",
            description:
                "Designed a custom Convolutional Neural Network model trained on manual driving frames from Unity Udacity simulator. The trained CNN model achieved autonomous hands-free driving on the simulator, achieving 92% validation accuracy for steering prediction, with 95%+ lane-keeping accuracy, reduced steering error variance 30% vs. baseline models. ",
            tags: [
                { name: "OpenCV", color: "bg-blue-50 text-blue-700" },
                { name: "Convolutional Neural Network", color: "bg-green-50 text-green-700" },
                { name: "Keras", color: "bg-purple-50 text-purple-700" },
                { name: "Sci-kit Learn", color: "bg-yellow-50 text-yellow-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/SDC_SIM", icon: "Github" }
            ],
        },
        {
            title: "Code Scanner and Tally",
            description:
                "Microsoft Excel VBA code to recognize Barcode, QR Code and Data Matrix output using scanner output and realtime tallying in a large Kit List (~900 parts per model) for Tata Motors South Africa. Active on Industry floor till date. Saved cost-to-company of upto 15000 ZAR",
            tags: [
                { name: "Microsoft Excel VBA", color: "bg-blue-50 text-blue-700" },
                { name: "Object Oriented Programming", color: "bg-green-50 text-green-700" },
                { name: "Code Optimization and Debugging", color: "bg-purple-50 text-purple-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/VBA_TMSA_Project", icon: "Github" }
            ],
        },
        {
            title: "Architecture of Complex Networking Topology",
            description:
                "Constructed a complex networking topology with successful end-to-end communication using Routing and Switching protocols",
            tags: [
                { name: "CISCO CCNA R&S", color: "bg-blue-50 text-blue-700" },
                { name: "Computer Networks", color: "bg-green-50 text-green-700" },
            ],
            links: [
                { name: "GitHub", url: "https://github.com/Prateek-2106/Routing_and_Switching_project", icon: "Github" }
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
                    "Lifting weights and functional training",
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
