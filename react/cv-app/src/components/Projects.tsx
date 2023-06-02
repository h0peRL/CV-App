import React from "react";
import USGWebsite from "../images/USGWebsite.png";
import Docker from "../images/Docker.png";
import Frontend from "../images/Frontend.png";
import MongoDB from "../images/MongoDB.png";

function Projects() {
  return (
    <div>
      <div className="projects" id="projects">
        <h1 className="title">My Projects</h1>
        <h2 className="text">
          Here are some Projects I've been working on. Check it Out!
        </h2>
        <div className="mywork">
          <a href="#USG">
            <div className="project1 hvr-grow">
              <img src={USGWebsite} alt="Project 1" className="project-img" />
              <div className="project-text">
                <h2 className="project-title">USG | React Website</h2>
                <p className="project-desc">
                  A website created based on customer's request.
                </p>
              </div>
            </div>
          </a>
          <div className="project1 hvr-grow">
            <img src={Docker} alt="Project 1" className="project-img" />
            <div className="project-text">
              <h2 className="project-title">Dockerizing a simple Webiste</h2>
              <p className="project-desc">
                I have dockerized a simpple HTML Website.
              </p>
            </div>
          </div>
          <div className="project1 hvr-grow">
            <img src={Frontend} alt="Project 1" className="project-img" />
            <div className="project-text">
              <h2 className="project-title">Frontend CRUD Application</h2>
              <p className="project-desc">
                Created CRUD operations for Frontend.
              </p>
            </div>
          </div>
          <div className="project1 hvr-grow">
            <img src={MongoDB} alt="Project 1" className="project-img" />
            <div className="project-text">
              <h2 className="project-title">C# CRUD with MongoDB</h2>
              <p className="project-desc">
                CRUD operations in C# with a NOSQL MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-900 relative USG text-center m-5" id="USG">
        <h1 className=" flex justify-center relative titleusg w-full">
          USG | React Website
        </h1>
        <h2 className="text-2xl mt-5 text-white">
          This was a group project of 3 people. We have decided to create a
          dynamic website using React and TypeScript. We started with the
          mockups before diving into the programming. Initially, we created a
          Lo-Fi mockup using draw.io to get a rough idea of the design and
          layout. Later, we developed a Hi-Fi mockup that closely resembled the
          final website. Once both mockups were completed, we began programming
          the website. To start, we implemented the Node runtime and set up a
          standard React project. After that, the real fun began. We started by
          building the main pages and subpages, implementing each element of the
          page as a separate component. We opted for components because in React
          projects, they allow us to build individual elements first and then
          compose the page using these components. Most of our time was spent
          implementing these components, resulting in beautiful components such
          as a Twitter feed and a member card. Finally, we assembled the
          individual pages using our components, and the website was essentially
          complete. We deployed the website on Netlify and registered it with a
          custom domain.
        </h2>
        <div className=" flex flex-row justify-evenly my-10">
          <div className="mx-2">
            <a href="https://usginfo.ch" target="_blank" className="underline">
              Visit usginfo.ch
            </a>
          </div>
          <div className="mx-2">
            <a href="https://drive.google.com/file/d/1ostqAMnK_xKGg66waVwxIKG1X8OiB4bA/view?usp=sharing">
              <button className="underline">
                Download German Mahara-Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
