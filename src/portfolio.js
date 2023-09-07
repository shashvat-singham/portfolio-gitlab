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
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/shashvat.singham/",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/18127615/shashvat-singham",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

// const educationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   schools: [
//     {
//       schoolName: "Harvard University",
//       logo: require("./assets/images/harvardLogo.png"),
//       subHeader: "Master of Science in Computer Science",
//       duration: "September 2017 - April 2019",
//       desc: "Participated in the research of XXX and published 3 papers.",
//       descBullets: [
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//       ]
//     },
//     {
//       schoolName: "Stanford University",
//       logo: require("./assets/images/stanfordLogo.png"),
//       subHeader: "Bachelor of Science in Computer Science",
//       duration: "September 2013 - April 2017",
//       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
//       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
//     }
//   ]
// };


 <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>RESUME</h2>
          <p>  </p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Shashvat Singham</h4>
              <p><em>An independent and self-motivated undergraduate with proven and tested negotiation, Web development and Machine learning skills.</em></p>
              <ul>
                <li>Hall 12 , IIT Kanpur</li>
                <li>(+91) 840-007-8677</li>
                <li>shashvats20@iitk.ac.in</li>
              </ul>
            </div>

            <h3 class="resume-title">Academic Qualifications</h3>
            <div class="resume-item">
              <h4>B.S. in Physics</h4>
              <h5>2020 - 2024</h5>
              <p><em><b>Indian Institute of Technology, Kanpur ( IIT-K )</b></em></p>
<!--               <p>C.P.I : </p> -->
            </div>
            <div class="resume-item">
              <h4>CBSE CLASS XII</h4>
              <h5>2018 - 2019</h5>
              <p><em>Archies Higher Secondary School, Kanpur</em></p>
              <p><b>Percentage: 94 % ( School Topper )</b></p>
            </div>
            <div class="resume-item">
              <!--<h4>Bachelor of  &amp; Graphic </h4>-->
              <h4>CBSE CLASS X</h4>
              <h5>2016 - 2017</h5>
              <p><em>Air Force School, Cantt, kanpur</em></p>
              <p><b>C.G.P.A : 10.0 ( School Topper )</b></p>
            </div>
            <h3 class="resume-title">Work Experience</h3>
            <div class="resume-item">
              <h4>DeepInsights ; Harvard business School, MA , U.S.A</h4>
              <h5>AUG - NOV 2022</h5>
              <p><em><b>Software Engineering Intern</b></em></p>
               <ul>
                <li>  Made a <b> cryptographically secured user authentication</b>
                  flow with <b>social logins</b> and<b> email verification</b></li>
                <li>Create a <b>Meeting bot </b>using <b>Zoom webhooks , Zoom
                  REST APIs</b> and <b>Zoom meeting SDK OAuth </b> to access
                  raw data (video and audio streams from a meeting);that
                  joins when the user started their Zoom Meeting, using the
                  user’s meeting access token.
                  </li>
                <li> Syncing the meeting to the <b> AWS S3 bucket </b>by deploying
                  the Django backend on <b>AWS ElasticBeanStalk</b>.</li>
                <li>Tech-Stack : React JS (Frontend), Django (Backend) ,
                  PostgreSQL (Database) , AWS (cloud)</li>
              </ul></div>
              
            <div class="resume-item">
              <h4>LIFO ; UC Berkeley , CA , U.S.A</h4>
              <h5>JUN - JUL 2022</h5>
              <p><em><b>Full Stack Developer Intern</b></em></p>
             <ul>
                <li>Maximized applications’ eﬀiciency, operability, flexibility
                  through <b>optimization </b>and authenticate it with firebase</li>
                  <li> Liaised with back end developers, front end developers, quality assurance testers, and CTO as needed.</li>
                <li>Implemented a <b>crytographically secured payment gateway</b>
                  with<b> cashfree</b> that supports split payment , refunds, etc</li>
                <li>Integrated the <b>chat Bot</b> with <b>DialogFlow</b> and the app
                  with <b>google analytics</b> via <b>segment</b> .</li>
                  <li>Spearheaded transition from LAMP stack to MEAN
                    stack, reducing latency by<b> 40%</b> and increasing database
                    admin effectiveness by <b>20%</b>.</li>
              </ul></div>
            
            <br><br><br>
            <center><a href= ""><button type="button" class="btn btn-outline-dark">Download CV</button></a></center>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Projects</h3>
            <div class="resume-item">
              <h4>Cipher Decoder</h4>
              <h5>Prof. Manindra Aggarwal - 2023</h5>
              <p><em></em></p>
              <ul>
                <li>Implemented decryption algorithms for multiple ciphers
                  including Caesar, Permutation-Substitution, Vigenere</li>
                <li>Implemented Differential Cryptanalysis of Data Encryption
                  Standard(3-DES) assuming standard key scheduling</li>
                
              </ul>
            </div>

            <div class="resume-item">
              <h4>Machine Learning : Neural Style Transfer</h4>
              <h5>Prof. Tushar Sandhan - 2022</h5>
              <p><em></em></p>
              <ul>
                <li> Load pretrained VGG-19 model (Convolutional
                  Neural Network) ;Extract content and style features</li>
                <li>Create style and content loss function and minimize the
                  total loss to generate minimize total loss artistic style
                  image.</li>
                
              </ul>
            </div>

            <div class="resume-item">
              <h4>Data science : Tweet Emotion Recognition</h4>
              <h5>2022</h5>
              <p><em> </em></p>
              <ul>
                <li>Using a Tokenizer in TensorFlow and Padding and
                  Truncating Sequences. </li>
                <li>Creating and Training Recurrent Neural Networks.</li>
                <li>Using NLP and Deep Learning to perform Text
                  Classification.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>IIT Kanpur Student search</h4>
              <h5>2021 - 2022</h5>
              <p><em></em></p>
              <ul>
                
                <li>Made a website that scraped the data from the Office
                  Automation Portal .</li>
                <li>Use SSl VPN to access (If outside the campus ) the
                  information of all IITK students.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Python compiler</h4>
              <h5>2021 - 2022</h5>
              <p><em></em></p>
              <ul>
                <li>Use Tkinter to create Graphical User interfaces (GUIs)
                  and all standard Python Distributions. </li>
                <li> All the commands are tokenized in parsed tree using
                  Tkinter text editor.
                  </li>
                <li> Extended the compiler to generate 3-address code(3AC)</li>
              </ul>
            </div>
            
            
            <div class="resume-item">
              <h4>Portfolio Website</h4>
              <h5>2021 - 2022</h5>
              <p><em></em></p>
              <ul>
                <li>Made a portfolio website hosted on IIT Kanpur
                  homepage using HTML , CSS and JavaScript.
                   </li>
                <li> Use Bootstrap to optimize for loading speed and
                  performance.
                  </li>
                <li>Enhanced web functionality and responsiveness.
                </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Mobile App</h4>
              <h5>2021 - 2022</h5>
              <p><em></em></p>
              <ul>
                <li> Built a fully-functional notes app that runs on android ,
                  ios and web ; also it stores notes locally to device. </li>
                <li>Allow the user to change the theme from dark to light
                 </li>
                 <li> Shows stats of user’s notes such as total notes,
                  words written etc</li>
                <li>Allows User to pin notes and edit notes.
                </li>
              </ul>
            </div>
            <br><br>
          <center><a href= ""><button type="button" class="btn btn-outline-dark">Download Resume</button></a></center>
           
          </div>
        </div>

      </div>
    </section><!-- End Resume Section -->

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
