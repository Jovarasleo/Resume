import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
const data = {
  en: {
    header: {
      name: "Jovaras Leonavicius",
      title: "Front-end Developer",
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
      body: "After trying out medical science, business management, and sales I finally found my passion in programming. More precisely, front-end development, even though programming (or anything computer-related) is nothing new to me as I have always loved that field. In mid-2021, I finally made up my mind to enroll in front-end studies and since then I have been focusing on front-end development projects. These projects feel more like a hobby than a job to me and I am happy to spend countless hours working on them while also improving myself.",
    },
    education: {
      title: "Education",
      schools: [
        {
          name: "CodeAcademy",
          period: "2021 - 2022",
          degree: "Front-end development",
        },
        {
          name: "Vilnius University of Applied Sciences (VIKO)",
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
        { skill: "CSS" },
        { skill: "HTML" },
        { skill: "Javascript" },
        { skill: "Node.js" },
        { skill: "React.js" },
        { skill: "Next.js framework" },
        { skill: "CMS ( e.g. Sanity.io )" },
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
            "Took initiative to implement a digital workflow: keeping track of the goods, orders, prices which overall increases efficiency and accuracy.",
            "Upgraded the IT infrastructure of the company. Setting up new computers for accounting and digital systems for the rest of the team.",
          ],
          body: "I have always been involved in retail trade family business. In late 2020 I was employed and joined the team to help overcome multiple challenges caused by the pandemic.",
        },

        {
          company: "VPC",
          title: "Clinical laboratory practitioner",
          period: "2018-2019",
          achievements: [
            "Carried out research for my Bachelor's Thesis on upgrading laboratory's workflow to increase efficiency and accuracy of testing.",
            "Successfully integrated into personnel and became a valuable member of the team.",
          ],
          body: "Worked as a practitioner in a national pathology laboratory. Became a trustworthy and valuable member of the team. Did multiple perioperative pathology tests. Spent hours learning new techniques to evaluate and prepare pathology samples for later trials.",
        },
        {
          company: "Centro Poliklinika",
          title: "Clinical laboratory practitioner",
          period: "2017-2018",
          achievements: [
            "Learned to do a variety of medical tests.",
            "Become acquainted with the laboratory's workflow and technologies used for medical testing.",
          ],
          body: "Worked as a practitioner in a general clinical trials laboratory for half a year. Spent most of the time communicating with personnel and patients. Managed to apply all my theoretical knowledge into practice.",
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
      title: "„Front-end“ Programuotojas",
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
      body: "Įgijęs patirties sveikatos priežiūros moksluose, verslo valdyme ir prekyboje galiausiai atradau save IT srityje. Nors programavimu ir viskuo, kas susiję su kompiuteriais, domiuosi visą gyvenimą, svetainių kūrimas bei jam naudojamos technologijos man padarė įspūdį ir tai pasirodė tinkama sritis savirealizacijai. Būtent todėl 2021 m. vasarą galiausiai nusprendžiau įstoti į „Front-end“ studijas „Codeacademy“ ir nuo tada didžiąją savo laiko dalį praleidau mokydamasis ir darydamas įvairius projektus. „Front-end“ aplikacijų kūrimas man labiau primena hobį nei darbą, kuriam mielai skiriu visą savo laisvą laiką tokiu būdu tobulindamas savo įgūdžius.",
    },
    education: {
      title: "Išsilavinimas",
      schools: [
        {
          name: "CodeAcademy",
          period: "2021 - 2022",
          degree: "„Front-end“ (vartotojo sąsajos) programavimas",
        },
        {
          name: "Vilniaus kolegija",
          period: "2016 - 2019",
          degree: "Biomedicinos profesinio bakalauro laipsnis",
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
      title: "Techniniai įgūdžiai",
      pills: [
        { skill: "CSS" },
        { skill: "HTML" },
        { skill: "Javascript" },
        { skill: "Node.js" },
        { skill: "React.js" },
        { skill: "Next.js karkasas" },
        { skill: "TVS ( pvz. Sanity.io )" },
      ],
    },
    job: {
      title: "Patirtis",
      experience: [
        {
          company: "A.Leonavičienės įmonė",
          title: "Vadybininkas",
          period: "2020 - dabar",
          achievements: [
            "Ėmiausi iniciatyvos įmonės skaitmenizavimui: automatizuotas prekių, užsakymų, kainų sekimas, kuris padidina darbo efektyvumą bei tikslumą.",
            "Atnaujinau įmonės IT infrastruktūrą. Įdiegiau naujus kompiuterius, skirtus buhalterijai, bei skaitmenines sistemas likusiam personalui.",
          ],
          body: "Visada buvau įsitraukęs į mažmeninės prekybos šeimos verslą, 2020 m. pabaigoje prisijungiau prie komandos, kad galėčiau padėti įveikti daugybę pandemijos sukeltų sunkumų.",
        },
        {
          company: "Valstybinis patologijos centras (VPC)",
          title: "Klinikinės laboratorijos praktikantas",
          period: "2018-2019",
          achievements: [
            "Rašydamas baigiamąjį darbą atlikau vidinį laboratorijos veiklos tyrimą ir įvertinau, kaip joje būtų galima patobulinti bei modernizuoti darbo eigą.",
            "Sėkmingai integravausi į personalą ir tapau komandos dalimi.",
          ],
          body: "Tapau patikimu ir naudingu komandos nariu. Atlikau daugybę tarpoperacinių ir interoperacinių tyrimų. Išmokau naujų technikų, padedančių paruošti patologinę medžiagą tolimesniems tyrimams.",
        },
        {
          company: "Centro poliklinika",
          title: "Klinikinės laboratorijos praktikantas",
          period: "2017-2018",
          achievements: [
            "Išmokau atlikti daugybę medicininių tyrimų.",
            "Susipažinau su laboratorijos darbo eiga ir technologijomis, naudojamomis atlikti medicininius testus.",
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
