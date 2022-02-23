import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
const data = {
  en: {
    header: {
      name: "Jovaras Leonavicius",
      title: "Frontend Developer",
    },
    links: {
      title: "Links",
      items: [
        {
          img: linkedin,
          text: "Jovaras Leonavicius",
          url: "https://www.linkedin.com/in/jovaras-leonavi%C4%8Dius-2a5920227",
          alt: "linkedin logo",
        },
        {
          img: github,
          text: "JovarasLeo",
          url: "https://github.com/JovarasLeo",
          alt: "github logo",
        },
      ],
    },
    about: {
      title: "About me",
      body: "After trying out medical science, business management and sales I finally found my passion in programming. More precisely, frontend development, even though programming (or anything computer-related) is nothing new to me as I have always loved that field. In mid-2021, I finally made up my mind to enroll in frontend studies and have been focusing on frontend development projects since then. These projects do not feel like a job to me but more like a hobby and I am happy to spend countless hours working on them and improving myself.",
    },
    education: {
      title: "Education",
      schools: [
        { name: "CodeAcademy", period: "2021 - present" },
        {
          name: "College VIKO SPF",
          period: "2016 - 2019",
          degree: "Bachelor's degree in Biomedicine",
        },
        {
          name: "Primary and Secondary education",
          period: "2003 - 2015",
          degree: "High school degree",
        },
      ],
    },
    personalSkills: {
      title: "Personal skills",
      pills: [
        { skill: "Communication" },
        { skill: "Problem solving" },
        { skill: "Critical thinking" },
        { skill: "Analytical thinking" },
        { skill: "Creativity" },
      ],
    },
    technicalSkills: {
      title: "Technical skills",
      pills: [
        { skill: "CSS", level: "green" },
        { skill: "HTML", level: "green" },
        { skill: "Javascript", level: "yellow" },
        { skill: "Node.js", level: "yellow" },
        { skill: "React.js", level: "red" },
      ],
    },
    job: {
      title: "Experience",
      experience: [
        {
          company: "A.Leonavičienės company",
          title: "Manager",
          period: "2020 - present",
          achievements: [
            "Took initiative to implement a digital workflow",
            "Upgraded the IT infrastructure of the company.",
          ],
          body: "Joined family business in late 2020 to help overcome multiple challenges caused by pandemic.",
        },

        {
          company: "VPC",
          title: "Clinical laboratory practitioner",
          period: "2018-2019",
          achievements: [
            "Carried out research on upgrading laboratory workflow to increase efficiency.",
            "Became a valuable member of the team.",
          ],
          body: "Worked as a practitioner in a national pathology laboratory. Became a trustworthy and valuable member of the team. Did multiple perioperative pathology tests. Spent hours learning new techniques to evaluate and prepare pathology samples for later trials.",
        },
        {
          company: "Centro Poliklinika",
          title: "Clinical laboratory practitioner",
          period: "2017-2018",
          achievements: [
            "Learned to do a variety of medical tests.",
            "Learned how to take blood samples from patients.",
          ],
          body: "Worked as a practitioner in a general clinical trials laboratory for half a year. Spent most of the time communicating with patients and got the chance to apply all my theoretical knowledge into practice.",
        },
      ],
    },
    contacts: [
      {
        title: "Contacts",
        content: [
          { href: "tel: +37065786824", text: "+37065786824" },
          {
            href: "mailto: jovarasleonavicius@gmail.com",
            text: "jovarasleonavicius@gmail.com",
          },
        ],
      },
      {
        title: "Social Media",
        content: [
          {
            href: "https://www.linkedin.com/in/jovaras-leonavičius-2a5920227",
            text: "Linkedin/jovaras-leonavičius",
          },
          {
            href: "https://github.com/Jovarasleo",
            text: "Github/Jovarasleo",
          },
        ],
      },
    ],
  },
  lt: {
    header: {
      name: "Jovaras Leonavičius",
      title: "Frontend Programuotojas",
    },
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Jovaras Leonavičius",
          url: "https://www.linkedin.com/in/jovaras-leonavi%C4%8Dius-2a5920227",
          alt: "linkedin logotipas",
        },
        {
          img: github,
          text: "JovarasLeo",
          url: "https://github.com/JovarasLeo",
          alt: "github logotipas",
        },
      ],
    },
    about: {
      title: "Apie mane",
      body: "Išbandęs sveikatos priežiūros mokslus, verslo valdymą ir prekybą galiausiai atradau save 'front-end' programavime. Nors programavimas ir viskas kas susiję su kompiuteriais man nėra naujiena, nes tai visados buvo ir yra mano aistra. 2021 vasarą galiausiai apsisprendžiau įstoti į 'front-end' studijas ir nuo tada didžiąją savo laiko dalį praleidau mokindamasis ir darydamas programavimo projektus. 'Front-end' projektai man neprimena darbo, o labiau hobį kuriam mielai skiriu visą savo laisvą laiką tobulindamas juos ir save.",
    },
    education: {
      title: "Išsilavinimas",
      schools: [
        { name: "CodeAcademy", period: "2021 - dabar" },
        {
          name: "VIKO SPF",
          period: "2016 - 2019",
          degree: "Bakalauro laipsnis",
        },
        { name: "Vidurinis išsilavinimas", period: "2003 - 2015" },
      ],
    },
    personalSkills: {
      title: "Asmeniniai įgūdžiai",
      pills: [
        { skill: "Komunikabilumas" },
        { skill: "Problemų sprendimas" },
        { skill: "Kritinis mąstymas" },
        { skill: "Analitinis mąstymas" },
        { skill: "Kūrybiškumas" },
      ],
    },
    technicalSkills: {
      title: "Techniniai įgudžiai",
      pills: [
        { skill: "CSS", level: "green" },
        { skill: "HTML", level: "green" },
        { skill: "Javascript", level: "yellow" },
        { skill: "Node.js", level: "yellow" },
        { skill: "React.js", level: "red" },
      ],
    },
    job: {
      title: "Patirtis",
      experience: [
        {
          company: "A.Leonavičienės Įmonė",
          title: "Vadybininkas",
          period: "2020 - dabar",
          achievements: [
            "Ėmiausi iniciatyvos įmonės skaitmenizavimui.",
            "Atnaujinau įmonės IT infrastruktūrą.",
          ],
          body: "2020 metų gale prisijungiau prie šeimos verslo padėti įveikti pandemijos sukeltus sunkumus ir iššūkius.",
        },
        {
          company: "VPC",
          title: "Klinikinės laboratorijos praktikantas",
          period: "2018-2019",
          achievements: [
            "Atlikau vidinį visos laboratorijos tyrimą įvertinant kaip joje patobulinti ir modernizuoti darbo eigą.",
            "Tapau vertinamu komandos nariu.",
          ],
          body: "Atlikinėjau laboranto praktiką valsytbiniame patologijos centre. Tapau patikimu ir naudingu komandos nariu. Atlikau šimtus tarpoperacinių ir interoperacinių patologinės medžiagos tyrimų. Praleidau daugybę valandų mokindamasis naujas technikas kaip įvertinti ir paruošti patologinę medžiagą tolimesniems tyrimams.",
        },
        {
          company: "Centro Poliklinika",
          title: "Klinikinės laboratorijos praktikantas",
          period: "2017-2018",
          achievements: [
            "Išmokau atlikti daugybę medicinių tyrimų.",
            "Įgyjau puikius įgudžius paimti pacientų kraujo mėginius.",
          ],
          body: "Pusę metų atlikinėjau laboranto praktiką klinikinių tyrimų laboratorijoje Vilniuje - centro poliklinikoje. Turėjau puikią mokomąją patirtį bendraujant su pacientais ir galimybę pritaikyti visas žinias praktikoje kurias įgyjau studijų metu.",
        },
      ],
    },
    contacts: [
      {
        title: "Kontaktai",
        content: [
          { href: "tel:+37065786824", text: "+37065786824", target: "_self" },
          {
            href: "mailto: jovarasleonavicius@gmail.com",
            text: "jovarasleonavicius@gmail.com",
            target: "_self",
          },
        ],
      },
      {
        title: "Medijos",
        content: [
          {
            href: "https://www.linkedin.com/in/jovaras-leonavičius-2a5920227",
            text: "Linkedin/jovaras-leonavičius",
            target: "_blank",
          },
          {
            href: "https://github.com/Jovarasleo",
            text: "Github/Jovarasleo",
            target: "_blank",
          },
        ],
      },
    ],
  },
};
export default data;
