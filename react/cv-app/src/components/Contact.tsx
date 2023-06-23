import React from "react";

function Contact() {
  return (
    <div id="contactform">
      <div className="bg-opacity-90 relative Contact h-96 flex text-white bg-blue-500 ">
        <form
          className="flex flex-row "
          action="https://formsubmit.co/a850c5a0448e174dd0872c4c614f613f"
          method="POST"
        >
          <div className="flex flex-col relative top-36 relative textcontact h-1">
            <h1 className="text-4xl m-2">Contact me via my Email! </h1>
            <p className="text-xl m-2">
              Let me know whatever you're thinking about.
            </p>
            <p className="text-xl m-2"></p>
          </div>
          <div className="flex flex-col justify-evenly relative contact text-center border border-violet-900 rounded p-10 m-3  w-96">
            <h1 className="text-2xl">Contact Form</h1>
            <input
              type="text"
              name="name"
              className="m-1 rounded h-10 bg-slate-700 text-center border border-black bg-opacity-50"
              required
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="m-1 rounded h-10 bg-slate-700 text-center border border-black bg-opacity-50"
              required
              placeholder="Email"
            />
            <textarea
              name="text"
              required
              className="m-1 rounded h-10 bg-slate-700 text-center border border-black bg-opacity-50"
              placeholder="Text"
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit">Send Message!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
