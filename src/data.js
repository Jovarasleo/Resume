import linkedin from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";
const data = {
    en:{
        header:{
          name:"Jovaras Leonavicius",
          title:"Frontend Developer"
        },
        links:{
          title:"Links",
          items:[
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
          ]
        },
        about: {
          title: "About me",
          body: "After trying out medical science, business managment and sales I finally found my passion in programming. More precisely frontend development. Even though programming or anything to do with computers is nothing new to me as I have always loved it. In mid-2021 I finally made my mind to actually learn it properly and enrolled in frontend studies. At that moment I completely fell in love with a subject. Front-end development projects don't feel like a job for me but more like a hobby at which I am happy to spend countless hours on improving them and myself.",
          },
        education:
          {
            title:"Education",
            schools:
            [   
                { name: "CodeAcademy", period: "2021 - present"},
                { name: "College VIKO SPF", period: "2016 - 2019", degree: "Bachelor's degree in Biomedicine" },
                { name: "Primary and Secondary education", period: "2003 - 2015", degree: "High school degree" },
              ]
            },
            personalSkills:{
              title:"Personal skills",
              pills:[
                {skill:"Teamwork", level:"green"},
                {skill:"Communication", level:"green"},
                {skill:"Problem solving", level:"green"},
                {skill:"Organization",  level:"yellow"},
                {skill:"Analytical thinking", level:"yellow"},
                  ]

                
            },
            technicalSkills:{
              title:"Technical skills",
              pills:[
                {skill:"CSS", level:"green"},
                {skill:"HTML", level:"green"},
                {skill:"Javascript", level:"yellow"},
                {skill:"Node.js", level:"yellow"},
                {skill:"React framework", level:"red"},
            ]
          },
            job:{
                title:"Experience",
                experience:[
                {
                  company: "A.Leonavičienės Įmonė",
                  title: "Business partner",
                  period: "2020 - present",
                  achievements: [
                    "Cupcake ipsum dolor sit amet I love I love jujubes",
                    "Dessert cake oat cake chocolate bar donut",
                    "Cotton candy sesame snaps apple",
                  ],
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
                },
                
                {
                  company: "VPC",
                  title: "Clinical laboratory practitioner",
                  period: "2018-2019",
                  achievements: [
                    "Cupcake ipsum dolor sit amet I love I love jujubes",
                    "Dessert cake oat cake chocolate bar donut",
                    "Cotton candy sesame snaps apple",
                  ],
                  body: "Worked as a practitioner in national pathology laboratory. Became a reliable and useful member of the team. Done multiple test for planned and inter operations. Spent hours learning new techniques to evaluate and prepare pathology samples for later trials",
                },
                {
                  company: "Centro Poliklinika",
                  title: "Clinical laboratory practitioner",
                  period: "2017-2018",
                  achievements: [
                    "Learned to do multiple medical tests",
                    "Developt great skills for taking blood samples from pacients",
                  ],
                  body: "Worked as a practitioner in general clinical trials laboratory for half a year. ",
                },
              ]},
              contacts:[
                {
                  title: "Contacts",
                  content: [
                    { href: "tel: +37065786824", text: "+37065786824" },
                    { href: "mailto: jovarasleonavicius@gmail.com", text: "jovarasleonavicius@gmail.com" },
                  ],
                },
                {
                  title: "Social Media",
                  content: [
                    { href: "https://www.linkedin.com/in/jovaras-leonavičius-2a5920227", text: "Linkedin/jovaras-leonavičius" },
                    {
                      href: "https://github.com/Jovarasleo",
                      text: "Github/Jovarasleo",
                    },
                  ],
                },
              ]
    },
    lt:{
        header:{
          name:"Jovaras Leonavičius",
          title:"Frontend Programuotojas"
        },
        links:{
            title:"Nuorodos",
            items:[
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
              }
            ]
        },
        about: {
            title: "Apie mane",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
          },
        education:
          {
            title:"Išsilavinimas",
            schools:[
              { name: "CodeAcademy", period: "2021 - dabar"},
              { name: "VIKO SPF", period: "2016 - 2019", degree: "Bakalauro laipsnis" },
              { name: "Vidurinis išsilavinimas", period: "2003 - 2015"},
            ]},
            personalSkills:
            {
                title:"Asmeniniai įgūdžiai",
                pills:[
                        {skill:"Darbas komandoje", level:"green"},
                        {skill:"Komunikabilumas", level:"green"},
                        {skill:"Problemų sprendimas", level:"green"},
                        {skill:"Organizuotumas", level:"yellow"},
                        {skill:"Analitinis mąstymas", level:"yellow"},
                    ]

                
            },
        technicalSkills:{
            title:"Techniniai įgudžiai",
            pills:[
              {skill:"CSS", level:"green"},
              {skill:"HTML", level:"green"},
              {skill:"Javascript", level:"yellow"},
              {skill:"Node.js", level:"yellow"},
              {skill:"React framework", level:"red"},
          ]
        },
        job:{
            title:"Patirtis",
            experience:[
              {
                company: "A.Leonavičienės Įmonė",
                title: "Pardavimų vadybininkas",
                period: "2020 - dabar",
                achievements: [
                  "Cupcake ipsum dolor sit amet I love I love jujubes",
                  "Dessert cake oat cake chocolate bar donut",
                  "Cotton candy sesame snaps apple",
                ],
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
              },
              {
                company: "VPC",
                title: "Klinikinės laboratorijos praktikantas",
                period: "2018-2019",
                achievements: [
                  "Cupcake ipsum dolor sit amet I love I love jujubes",
                  "Dessert cake oat cake chocolate bar donut",
                  "Cotton candy sesame snaps apple",
                ],
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
              },
              {
                company: "Centro Poliklinika",
                title: "Klinikinės laboratorijos praktikantas",
                period: "2017-2018",
                achievements: [
                  "Cupcake ipsum dolor sit amet I love I love jujubes",
                  "Dessert cake oat cake chocolate bar donut",
                  "Cotton candy sesame snaps apple",
                ],
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
              },

          ]},
          contacts:[
            {
              title: "Kontaktai",
              content: [
                { href: "tel:+37065786824", text: "+37065786824", target:"_self" },
                { href: "mailto: jovarasleonavicius@gmail.com", text: "jovarasleonavicius@gmail.com", target:"_self"},
              ],
            },
            {
              title: "Medijos",
              content: [
                { href: "https://www.linkedin.com/in/jovaras-leonavičius-2a5920227", text: "Linkedin/jovaras-leonavičius", target:"_blank" },
                {
                  href: "https://github.com/Jovarasleo",
                  text: "Github/Jovarasleo",
                  target: "_blank"
                },
              ],
            },
          ]
    }
  }
  export default data;