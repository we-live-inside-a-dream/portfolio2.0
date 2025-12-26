export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Sports Streaming Platform",
    des: "Developed HomeTeam Live AI sports streaming platform using Angular.js, providing real-time game analysis and high-quality live broadcasts.",
    img: "/Screenshot 2024-06-18 at 03.51.10.png",
    iconLists: [
      "/ang.svg",
      "/scss.svg",
      "/ts.svg",
      "/csharp.svg",
      "/aws.svg",
      "/lamb.svg",
    ],
    link: "https://app.hometeamlive.com/#/home",
  },
  {
    id: 2,
    title: "Real Estate APP",
    des: "Created a real estate app that allows users to sign up, post properties for sale or rent, and includes a chat system enabling property owners to communicate directly with potential buyers or renters.",
    img: "/Screenshot 2024-07-28 at 17.16.30.png",
    iconLists: [
      "re.svg",
      "/mui.svg",
      "/ts.svg",
      "/node-js.svg",
      "/socket-io.svg",
    ],
    link: "http://real-estate-app.rezanaeim.com/",
  },
  {
    id: 3,
    title: "Silent Presence Library ",
    des: "Full-Stack Literary E-Commerce Site Architected a dual-purpose platform that serves as both a professional showcase for writers and a functional online bookstore. Key features include a multi-user content management system for authors and translators, a secure checkout process, and a responsive UI tailored for a premium reading and browsing experience.",
    img: "/Screenshot 2025-12-24 at 10.39.47.png",
    iconLists: ["/logo-javascript.svg", "/scss.svg"],
    link: "https://www.babaklotfikish.com/",
  },
  {
    id: 4,
    title: "Interior design APP - Flora Studio",
    des: "A modern, responsive website developed for Flora Design Studios, built with Vanilla JavaScript and SCSS to deliver a clean, elegant user experience that reflects the studio’s architectural identity and showcases its services and projects.",
    img: "/Screenshot 2025-12-19 at 18.30.20.png",
    iconLists: ["/logo-javascript.svg", "/scss.svg"],
    link: "https://www.floradesignstudios.com/",
    // link: "https://tranquil-muffin-f2f933.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Reza's expertise and dedication were instrumental to our success at Quantum Innovations. His proactive approach and keen insight into e-commerce solutions elevated our projects to new heights. Reza’s ability to seamlessly integrate complex functionalities and deliver on time made him an invaluable asset. For anyone looking to push the boundaries of digital development, Reza is the go-to professional.",
    name: "Ali Reza",
    title: "Director of Quantum Innovations",
    img: "/output.svg",
  },
  {
    quote:
      "Collaborating with Reza was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Reza's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Reza is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "/profile.svg",
  },
  {
    quote:
      "Working with Reza at AE.Live was a remarkable experience. His attention to detail, quick turnaround times, and commitment to excellence were evident in every project. Reza's passion for developing cutting-edge live commentary tools made a significant impact on our team's success. For anyone looking to advance their digital projects and enrich live sports broadcasting, Reza is an outstanding choice.",
    name: "Chandan Bhagat",
    title: "Director of AE.Live Development Department",
    img: "/chandan.svg",
  },
  // {
  //   quote:
  //     "Collaborating with Reza was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Reza's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Reza is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Reza was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Reza's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Reza is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "HomeTeam Live",
    img: "/HT_Logo_Wordmark_Orange@2x.png",
    nameImg: "/HT_Logo_Wordmark_Orange@2x.png",
  },
  {
    id: 2,
    name: "AE.Live",
    img: "/aelive.png",
    nameImg: "/aelive.png",
  },
  {
    id: 3,
    name: "Critical Mass",
    img: "/cm-logo.png",
    nameImg: "/cm-logo.png",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/we-live-inside-a-dream",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/reza-naeim-abadi",
  },
];
