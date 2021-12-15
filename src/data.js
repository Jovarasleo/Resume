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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
          },
        education:
          {
            title:"Education",
            schools:
            [
                { name: "Primary and Secondary education", period: "2003 - 2015", degree: "High school degree" },
                { name: "College VIKO SPF", period: "2016 - 2019", degree: "Bachelor's degree in Biomedicine" },
              ]
            },
        personalSkills:
            {
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
                  company: "Centro Poliklinika",
                  title: "Clinical laboratory practitioner",
                  period: "2017-2018",
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
                  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
                },
                {
                  company: "A.Leonavičienės Įmonė",
                  title: "Sales manager",
                  period: "2020 - present",
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
            schools:
              [
              { name: "Vidurinis išsilavinimas", period: "2003 - 2015"},
              { name: "VIKO SPF", period: "2016 - 2019", degree: "Bakalauro laipsnis" },
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
                  company: "A.Leonavičienės Įmonė",
                  title: "Pardavimų vadybininkas",
                  period: "2020 - present",
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