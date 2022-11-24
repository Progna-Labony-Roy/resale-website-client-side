import React from "react";

const Blog = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl text-indigo-500 italic mb-5">
        What are the different ways to manage a state in a React application?
      </h3>
      <p>
        There are four main types of state you need to properly manage in your
        React apps:
        <li>Local state</li>
        <li>Global state</li>
        <li>Server state</li>
        <li>URL state</li>
        <span className="font-bold">Local (UI) state :</span> Local state is
        data we manage in one or another component. Local state is most often
        managed in React using the useState hook. For example, local state would
        be needed to show or hide a modal component or to track values for a
        form component, such as form submission, when the form is disabled and
        the values of a form's inputs.
        <br />
        <span className="font-bold">Global (UI) state :</span> Global state is
        data we manage across multiple components. Global state is necessary
        when we want to get and update data anywhere in our app, or in multiple
        components at least. A common example of global state is authenticated
        user state. If a user is logged into our app, it is necessary to get and
        change their data throughout our application. Sometimes state we think
        should be local might become global.
        <br />
        <span className="font-bold">Server state</span> Data that comes from an
        external server that must be integrated with our UI state. Server state
        is a simple concept, but can be hard to manage alongside all of our
        local and global UI state. There are several pieces of state that must
        be managed every time you fetch or update data from an external server,
        including loading and error state. Fortunately there are tools such as
        SWR and React Query that make managing server state much easier.
        <br />
        <span className="font-bold">URL state</span> Data that exists on our
        URLs, including the pathname and query parameters. URL state is often
        missing as a category of state, but it is an important one. In many
        cases, a lot of major parts of our application rely upon accessing URL
        state. Try to imagine building a blog without being able to fetch a post
        based off of its slug or id that is located in the URL! There are
        undoubtedly more pieces of state that we could identify, but these are
        the major categories worth focusing on for most applications you build.
      </p>
      <div>
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5">
          How does prototypical inheritance work?
        </h3>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5">
          What is a unit test? Why should we write unit tests?
        </h3>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5">
          React vs. Angular vs. Vue?
        </h3>
      </div>
    </div>
  );
};

export default Blog;
