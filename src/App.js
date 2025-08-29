import React, { useRef, useEffect, useState } from "react";
import "./App.css";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height/2;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const introRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Introduction", ref: introRef },
    { section: "Projects", ref: projectRef },
    { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition < offsetBottom; /*scrollPosition > offsetTop &&*/
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }

      if (scrollPosition == headerHeight) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className="App">
      <base target="_blank"></base>
      <title>Benny Nguyen</title>
      <div className="top-spacer" />
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${visibleSection === "Introduction" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(introRef.current);
              }}
            >
              Introduction
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(projectRef.current);
              }}
            >
              Projects
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="section" id="Introduction" ref={introRef}>
          <div className="textContainer" id="IntroText">
            <h1 id="name">Benny Nguyen</h1>
            <a href='./nguyenbenny_resume.pdf' id="ResumeLink"><strong>Link to my Resume.</strong></a>
            <p>
              I am a recent Ph.D. graduate from the <a href="https://cogsci.ucmerced.edu/">Cognitive and Information Sciences Department</a> at the University of California, Merced where I was advised by <a href="https://ucmerced.academia.edu/MichaelSpivey">Dr. Michael J. Spivey</a>. My dissertation examinined the complexity matching of gesture and gaze between a human listener and speaking virtual agent(s).<br></br><br></br>
              While in graduate school, I spent a summer working at the <a href="https://allofus.nih.gov/">National Institutes of Health, All of Us Research Program</a> as a <a href="https://codingitforward.com/fellowship">Civic Digital Fellow</a><br></br><br></br>
              Prior to graduate school, I received my Bachelor’s degree in Psychology from <a href="https://www.grinnell.edu/">Grinnell College</a> and worked briefly at the University of Michigan's <a href="https://studentlife.umich.edu/">Student Life Assessment and Research Office</a>.<br></br><br></br>
              At Grinnell, I did internships at <a href="https://mpulse.com/">mPulse Mobile</a> (personalized healthcare text messaging service company in Los Angeles) and <a href="https://www.act.org/">ACT, Inc.</a> (testing company), and worked with <a href="https://www.grinnell.edu/user/ralstonc">Dr. Christopher Ralston</a> on refining a scale for assessing juvenile sexual offense recidivism.
              <br></br><br></br>
              <strong>I am currently looking for a position in industry where I can continue to use and develop my scientific skills </strong>(ideation, experimentation, measurement, evaluation, quantitative and qualitative methods, written and oral communication). I am open to relocation to anywhere in the United States.<br></br><br></br>
              Across these various roles I have acquired many technical skills including, but not limited to, Python, R, MATLAB, HTML, CSS, C#, Stata, SPSS, longitudinal time series analyses, natural language processing, and both Bayesian and Frequentist statistics.<br></br><br></br>
            </p>
            
          </div>
          <img id="UCM" src="/images/ucm.png"></img>
          <img id="Grinnell" src="/images/grinnell.svg"></img>
        </div>
        <div className="section" id="Projects" ref={projectRef}>
          <div className="projectBox">
            <br></br><br></br>
            <img className = "projectImage" src="../images/complex_f4.png"></img>
            <a className = "projectLink" target="_self" href="./projects/project_complex.html">Complexity in gesture and gaze between human and virtual agent interlocutors</a><br></br>
          </div>
          <div className="projectBox">
            <br></br><br></br>
            <img className = "projectImage" src="../images/reddit_f1.png"></img>
            <a className = "projectLink" target="_self" href="./projects/project_reddit.html">Evaluating the efficacy of forum (Reddit) content moderation policy using natural language processing</a><br></br>
          </div>
          <div className="projectBox">
              <br></br><br></br>
            <img className = "projectImage" src="../images/opinionChange_f1.png"></img>
            <a className = "projectLink" target="_self" href="./projects/project_opinionChange.html">Opinion change blindness using manipulated virtual selves</a><br></br>
          </div>
          <div className="projectBox">
              <br></br><br></br>
            <img className = "projectImage" src="../images/misattrib_f1.png"></img>
            <a className = "projectLink" target="_self" href="./projects/project_misattrib.html">Exploring opinion self-misattribution bias of virtual agent facial movements</a><br></br>
          </div>
          <div className="projectBox">
              <br></br><br></br>
            <img className = "projectImage" src="../images/mouse_f1.png"></img>
            <a className = "projectLink" target="_self" href="./projects/project_mouse.html">Temporary disruption in language processing reflected as multiscale temporal discoordination in a recurrent network</a>
          </div>
        </div>
        <div className="section" id="Contact" ref={contactRef}>
          <a href="mailto:b3njaminnguyen@gmail.com"><img id="socialmedia" src="/images/gmail.png"></img></a>
          <a href="https://www.linkedin.com/in/benjamin-nguyen-bb1b32138/"><img id="socialmedia" src="/images/linkedin.png"></img></a><br></br>
          
        </div>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;