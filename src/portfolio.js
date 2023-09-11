/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shashvat Singham",
  title: "Hi , I'm Shashvat",
  subTitle: emoji(
    "Fueled by a fascination for Machine Learning, cryptography,  Quantum Computing and Development. Seeking to catalyze innovation at the nexus of these dynamic realms for a future shaped by intelligence and security."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wTGTJCawsyqeoDt7v3H0647Hdb1W5PtP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shashvat-singham",
  linkedin: "https://www.linkedin.com/in/shashvat-singham/",
  gmail: "shashvat.singham@gmail.com",
  gitlab: "https://gitlab.com/shashvat-singham",
  facebook: "https://www.facebook.com/shashvat.singham/",
  medium: "https://medium.com/@shashvatsingham2001",
  stackoverflow: "https://stackoverflow.com/users/18127615/shashvat-singham",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack I use :",
   subTitle: "Made Web Apps , Dynamic Sites and Android/ios application.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Express js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kanpur",
        logo: require("./assets/images/iitk.png"),
        subHeader: "BS in Physics",
        duration: "July 2020 - April 2024",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // ,
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};




// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Fullstack Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine learning",
      progressPercentage: "60%"
    },
    {
      Stack: "Cryptography/Blockchain",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "DeepInsights",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "May 2023 – July 2023",
      desc: " Harvard Business School , MA , USA",
      descBullets: [
        "Made a cryptographically secured user authentication flow with social logins and email verification.",
        "Created a Meeting bot using Zoom webhooks , Zoom REST APIs and Zoom meeting SDK OAuth to access raw data (video and audio streams from a meeting);that joins when the user started their Zoom Meeting, using the user’s meeting access token",
        " Syncing the meeting to the AWS S3 bucket by deploying the Django backend on AWS ElasticBeanStalk. ",
        "Tech-Stack : React JS (Frontend), Django (Backend) ,PostgreSQL (Database) , AWS (cloud)"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "LIFO",
      companylogo: require("./assets/images/UCB.png"),
      date: "May 2022 – July 2022",
      desc: " University of California Berkeley , CA, USA",
      descBullets: [
        " Maximized applications’ efficiency, operability, flexibility through optimization and authenticate it with firebase. ",
  "Implemented a crytographically secured payment gateway with cashfree that supports split payment , refunds, etc ",
  "Integrated the chat Bot with DialogFlow and the app with google analytics via segment . ",
  "  Spearheaded transition from LAMP stack to MEAN stack, reducing latency by 40% and increasing database admin effectiveness by 20%."
]
    },
    {
      role: "Research Intern",
      company: "Neural Network Repair",
      companylogo: require("./assets/images/iitk.png"),
      date: "Aug 2022 – Dec 2022",
      desc: " Indian Institute of Technology Kanpur",
      descBullets: [
 " Implemented an constraint based algorithm on the neural network repair that aims to fix the logic of the network at an intermediate layer or at the last layer",
  "It uses fault localization to find potentially faulty network parameters (such as the weights). ",
      "Our evaluation on MNIST and CIFAR-10 models shows that NNREPAIR can improve the accuracy by 45.56 % points on poisoned and 10.40 % points on adversarial data ",
        " Developed a full stack MERN website with Firebase authentication system on which user can perform parsing by writing grammer."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key , look at readme.md */

const openSource = {  
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/deep.jpeg"),
      projectName: "DeepInsight",
      projectDesc: "Crafted a robust user authentication flow fortified with cryptographic security, seamlessly integrating social logins and email verification. Engineered a Zoom Meeting bot, powered by Zoom webhooks, REST APIs, and OAuth, enabling real-time access to raw meeting data, effortlessly synchronized with an AWS S3 bucket via a Django backend deployed on AWS ElasticBeanstalk.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.deepinsight.io/en/about"
        }
        {
          name: "GitHub",
          url: "https://github.com/shashvat-singham/DeepInsights-Zoom-App"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lifo.png"),
      projectName: "LIFO",
      projectDesc: "Optimized application performance with Firebase authentication, implemented a robust payment gateway with Cashfree supporting advanced features, seamlessly integrated DialogFlow chatbot, and executed a transformative shift from LAMP to MEAN stack, resulting in a remarkable 40% latency reduction and 20% increase in database administration efficiency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lifo.ai/"
        }
        {
          name: "GitHub",
          url: "https://github.com/shashvat-singham/LIFO_INTERN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " The Chandrayaan Moon Mapping Challenge",
      subtitle:
        "Third runner up in ISRO's The Chandrayaan Moon Mapping Challenge @ Inter-IIT-Tech-Meet'23",
      image: require("./assets/images/isro.jpeg"),
      imageAlt: "Inter-IIt Tech Meet",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/shashvat-singham/Inter-IIT-ISRO.git"
        },
        
      ]
    },
    {
      title: "Urvija AI",
      subtitle:
        "I created a Business Requirements Document (BRD) with research-based benchmarks, followed by a Product Requirement Document (PRD) featuring wireframes, prototypes, and AI/ML specifications, leveraging Kaggle data. Achieved a 10% productivity boost by utilizing ML algorithms to extract and monetize information from data",
      image: require("./assets/images/urvija.jpeg"),
      imageAlt: "Urvija-AI",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/shashvat-singham/urvija-AI"
        }
      ]
    },

    {
      title: "PoRs/Academic ",
      subtitle: "Position of Responsibilities and academic ",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Miscellaneous",
      descBullets: ["All India Rank 223, JEE Mains (B.Arch / B. Planning)","All India Rank 254, National Mathematics Olympiad
(NMO)"
      ]
      // footerLink: [
      //   {name: "Certification", url: ""},
      //   {
      //     name: "Final Project",
      //     url: "https://pakistan-olx-1.firebaseapp.com/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@shashvatsingham2001/quantum-cryptography-secure-communication-with-unbreakable-codes-650f451c83b4",
      title: "Secure Communication with Unbreakable Codes",
      description:
        "Can Quantum Cryptography Truly Create Unbreakable Codes? "
    },
    {
      url: "https://medium.com/@shashvatsingham2001/quantum-entanglement-quantum-field-theory-and-their-computational-implications-507f675de220",
      title: "Quantum Entanglement, Quantum Field Theory, and Their Computational Implications",
      description:
        "Uniting Quantum Entanglement and QFT: Pioneering Quantum Computing and Secure Cryptography?"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "ROBOGAMES: IARC, Manuever, Robowars",
      subtitle: "Techkriti, Asia's Largest Technical and Enterpreneural Fest @IITK ",
      slides_url: "https://drive.google.com/drive/folders/1DEYKxLcY1No8pD1H70jfjK15IYHciywm?usp=sharing",
      event_url: "https://www.facebook.com/techkriti.iitk/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
 subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Indian Institute of Technology Kanpur",
  email_address: "Open for opportunities: No"
};

// Twitter Section

const twitterDetails = {
  userName: "shashvats24", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
