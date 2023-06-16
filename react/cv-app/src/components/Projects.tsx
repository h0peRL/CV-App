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
          <a href="#Docker">
            <div className="project1 hvr-grow">
              <img src={Docker} alt="Project 1" className="project-img" />
              <div className="project-text">
                <h2 className="project-title">Dockerizing a simple webiste</h2>
                <p className="project-desc">
                  I have dockerized a simple HTML website.
                </p>
              </div>
            </div>
          </a>
          <div className="project1 hvr-grow">
            <a href="#FCA">
              <img src={Frontend} alt="Project 1" className="project-img" />
              <div className="project-text">
                <h2 className="project-title">Frontend CRUD application</h2>
                <p className="project-desc">
                  Created CRUD operations for Frontend.
                </p>
              </div>
            </a>
          </div>
          <div className="project1 hvr-grow">
            <a href="#NOSQL">
              <img src={MongoDB} alt="Project 1" className="project-img" />
              <div className="project-text">
                <h2 className="project-title">C# CRUD with MongoDB</h2>
                <p className="project-desc">
                  CRUD operations in C# with a NOSQL MongoDB.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="rounded border border-black border-opacity-60 relative USG text-center m-10 p-5 bg-blue-500 bg-opacity-10"
        id="USG"
      >
        <h1 className=" flex justify-center relative titleusg w-full bottom-16">
          USG | React website
        </h1>
        <h1 className="text-xl text-white relative bottom-12">
          Simple React website
        </h1>
        <h2 className="text-2xl mt-5 text-white text-center relative bottom-10">
          This was a group project of three people. We have decided to create a
          dynamic website using React and TypeScript. We started with the
          mockups before diving into the programming.To start, we implemented
          the Node runtime and set up a standard React project. After that, the
          real fun began. We started by building the main pages and subpages,
          implementing each element of the page as a separate component. We
          opted for components because in React projects, they allow us to build
          individual elements first and then compose the page using these
          components. Most of our time was spent implementing these components,
          resulting in beautiful components such as a Twitter feed and a member
          card. Finally, we assembled the individual pages using our components,
          and the website was essentially complete. We deployed the website on
          Netlify and registered it with a custom domain.
        </h2>
        <div className=" flex flex-row justify-evenly my-10">
          <div className="mx-2  text-white relative bottom-10">
            <a
              href="https://usginfo.ch"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Visit usginfo.ch
            </a>
          </div>
          <div className="mx-2 text-white relative bottom-10">
            <a href="https://portfolio.bbbaden.ch/user/n-delvecchio-inf21/einfache-react-webseite-la1301">
              <button className="underline">
                Visit German Mahara-Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="rounded border border-black border-opacity-60 relative USG text-center m-10 p-5  bg-blue-500 bg-opacity-10"
        id="Docker"
      >
        <h1 className=" flex justify-center relative titleusg w-full bottom-16">
          Dockerizing
        </h1>
        <h1 className="text-xl text-white relative bottom-12">
          Dockerizing a simple Website
        </h1>
        <h2 className="text-2xl mt-5 text-white text-center relative bottom-10">
          I decided to work on a project in the learning workshop project 1304,
          where I am programming a Finance and Accounting (FRW) app and
          containerizing it with Docker. The whole process will be done using
          the standard Dockerfile. First, I got the FRW app up and running. I
          declared a few divs in the HTML and used JavaScript to make them
          interactive. Basically, on this page, one should be able to write
          simple and any number of journal entries. After that, I focused more
          on working with Docker. I started by figuring out how it works with
          Apache httpd. I looked at the documentation of the official Apache
          httpd and executed the required commands in my shell. Once I completed
          all of that, I worked on my image. I created a Dockerfile and declared
          that everything should be taken from the folder, copied, and then
          written into the image. When the image was ready, I pushed it to
          Docker Hub so that other people can pull it for further use.
        </h2>
        <div className=" flex flex-row justify-evenly my-10">
          <div className="mx-2  text-white relative bottom-10">
            <a
              href="https://hub.docker.com/r/h0perl/frw-app"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Visit dockerhub
            </a>
          </div>
          <div className="mx-2 text-white relative bottom-10">
            <a href="https://portfolio.bbbaden.ch/user/n-delvecchio-inf21/la1304">
              <button className="underline">
                Visit German Mahara-Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="rounded border border-black border-opacity-60 relative FCA text-center m-10 p-5  bg-blue-500 bg-opacity-10"
        id="FCA"
      >
        <h1 className=" flex justify-center relative titleusg w-full bottom-16">
          Frontend CRUD application
        </h1>
        <h1 className="text-xl text-white relative bottom-12">
          Created CRUD operations for Frontend.
        </h1>
        <h2 className="text-2xl mt-5 text-white text-center relative bottom-10">
          I initially started researching other options for building a CRUD app.
          I couldn't make up my mind whether to create a simple to-do app or
          something else. In the end, I ended up deciding to build a to-do app
          after all. I had the idea to improve my JavaScript skills by creating
          a frontend for this project. Enough of the explanation, let's move on
          to the workflow of the product.The first JavaScript elements were
          programmed, and I initially started setting up a login handler.
          However, when I began debugging, an error appeared stating that my JWT
          token was not being stored locally. I tried to fix it, but then other
          functions suddenly stopped working. Let's move on to the main point,
          the CRUD functions. I wrote various functions using fetch to query the
          server/backend for the data it holds. Implementing the CRUD functions
          surprisingly didn't take much time. Once everything was functional, I
          simply played around with the CSS a bit.
        </h2>
        <div className=" flex flex-row justify-evenly my-10">
          <div className="mx-2 text-white relative bottom-10">
            <a href="https://portfolio.bbbaden.ch/user/n-delvecchio-inf21/laa1304-crud-applikation">
              <button className="underline">
                Visit German Mahara-Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className="rounded border border-black border-opacity-60 relative NOSQL text-center m-10 p-5  bg-blue-500 bg-opacity-10"
        id="NOSQL"
      >
        <h1 className=" flex justify-center relative titleusg w-full bottom-16">
          C# CRUD with MongoDB
        </h1>
        <h1 className="text-xl text-white relative bottom-12">
          CRUD operations in C# with a NOSQL MongoDB.
        </h1>
        <h2 className="text-2xl mt-5 text-white text-center relative bottom-10">
          In module 165's assessment, the focus was on applying the knowledge
          learned in class. We had to work on the assessment task related to
          NoSQL databases. The assessment used a grading rubric to evaluate the
          students. The task involved connecting a NoSQL database to an
          application and performing CRUD operations. I gathered data from the
          web to create the database and inserted it into MongoDB. Once the
          database was set up, I implemented the interface in C# and was able to
          query the various operations
        </h2>
        <div className=" flex flex-row justify-evenly my-10">
          <div className="mx-2 text-white relative bottom-10">
            <p className="underline">
              Portfolio of this project can only be accessed with a request via
              contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
