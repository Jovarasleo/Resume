import React from "react";
import Separator from "./components/separator";
import Header from "./components/header";
import Pill from "./components/pill";
import ContentBox from "./components/content-box";
import SocialsList from "./components/socials-list";
import Experience from "./components/experience";
import ContactBlock from "./components/contact-block";
import { useState } from "react";
import data from "./data"

import "./App.css";

function App() {
  
  const body = document.querySelector('body')
  const [language, setLanguage] = useState("lt")
  const [theme, setTheme] = useState("light")
  body.className = `body--${theme}`
  function toggle(value){
    if(value==="light"){
      return "dark";
    } else return "light"
    
}
  const { links, about, education, personalSkills, technicalSkills, job, contacts} = data[language];
  return (
    <div className="app">
      <Header language={language} setLanguage={(e)=> setLanguage(e.target.value)}
      theme={theme} setTheme={()=> setTheme(toggle) }/>
      <main className="main">
        <section className="section">
          <ContentBox className="flex-1" title={links.title}>
            <SocialsList items={links.items}/>
          </ContentBox>
          <ContentBox className="flex-2" title={about.title}>
            <p>
              {about.body}
            </p>
          </ContentBox>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={education.title}>
            {education.schools.map(({ name, period, degree }, i, arr) => (
              <React.Fragment key={i}>
                <div className="school-info">
                  <p>{name}</p>
                  <p>{period}</p>
                  <p>{degree}</p>
                </div>
                {arr.length - 1 !== i && <Separator isShort />}
              </React.Fragment>
            ))}
          </ContentBox>
          <div className="d-flex flex-2">
            <ContentBox title={personalSkills.title} className="flex-1 pills-box">
            {personalSkills.pills.map(({skill, level}, i) => (
              <React.Fragment key={i}>
                <Pill color={level} theme={theme}>{skill}</Pill>
              </React.Fragment>
            ))}
            </ContentBox>
            <ContentBox className="flex-1 pills-box"  title={technicalSkills.title}>
            {technicalSkills.pills.map(({skill, level}, i) => (
              <React.Fragment key={i}>
                <Pill color={level} theme={theme}>{skill}</Pill>
              </React.Fragment>
            ))}
            </ContentBox>
          </div>
        </section>
        <section className="section">
          <ContentBox className="flex-1" title={job.title}>
            <div className="content-box__content job-experience">
              {job.experience.map(({ company, title, period, achievements, body }, i) => (
                <Experience
                  key={i}
                  company={company}
                  title={title}
                  period={period}
                  achievements={achievements}
                >
                  {body}
                </Experience>
              ))}
            </div>
          </ContentBox>
        </section>
      </main>
      <footer className="footer">
        <Separator />
        <div className="contacts">
          {contacts.map((data, i) => (
            <ContactBlock key={i} {...data} />
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
