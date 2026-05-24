export const siteConfig = {
  name: "Hans S. Manguilimotan",
  title: "Computer Engineer",
  description: "Portfolio website of Hans S. Manguilimotan",
  accentColor: "#1d4ed8",
  social: {
    email: "hansmanguilimotan880@gmail.com",
    linkedin: "https://www.linkedin.com/in/hans-manguilimotan-969927298/",
    twitter: "https://x.com/Seiichaaan",
    github: "https://github.com/hansmanguilimotan-devworks",
  },
  aboutMe:
    "With 5 years experience in Crypto Trading since 2021 managing and growing my own portfolio and really into trading. I work in Installers PH also a Tech Company for my OJT as a student, installed cctv's, cabling, accounting works at office managing and tracking the sales receipts, and talk clients on the phone those who inquire in the company for 2months. Manage and track sales also on our own Frozen Store Business in Philippines, Cebu. Graduating of Computer Engineering Course running for Latin Honors this June.",
  
  // IMAGE
  aboutImage: "/images/about-hans.jpg", 
    
  skills: ["Web Development", "Bookkeeping", "Virtual Assistant", "Admin Tasks"],
  projects: [
    {
      name: "KWIKDOC: A Smart Multi-Function Document Printing Kiosk Website for my Thesis",
      description:
        "A live website for our kiosk product that provides secure, affordable, and contactless printing, scanning, and copying. By using the website, users can avoid physical contact with USBs. Our automated kiosks support all payment methods, including coins, bills, and online payments.",
      link: "https://kwikdoc.site/",
      skills: ["React", "Express.js", "Vultr"],
      image: "/images/projects/kwikdoc.png" // Project Image
    },
  ],
  experience: [
    {
      company: "Installers PH",
      title: "IT Support Intern",
      dateRange: "May 2026 - July 2026",
      bullets: [
        "Installed CCTV's accross Cebu City, mainly big project in ACS Warehouse, we installed in the team around 20 CCTV's",
        "Sales Management and Talked to Clients in office for the Tech Company",
        "Helped in the team in Web Development Projects",
      ],
       image: "/images/exp/installers-ph.jpg" // Experience Image
    },
  ],
  education: [
    {
      school: "University of Cebu Main Campus",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2022 - 2026",
      achievements: [
        "Graduated Cum Laude with 1.56 GPA",
        "Dean's List all semesters",
        "Participated Regionals Computer Quiz Bowl",
      ],
       image: "/images/edu/uc-main.jpg" // Education Image
    },
    {
      school: "Online Platform",
      degree: "Blockchain Development Bootcamp",
      dateRange: "2023",
      achievements: [
        "Completed 3 days of coursework",
        
        "Specialized in Typescript and Rust",
      ],
    },
  ],
};
