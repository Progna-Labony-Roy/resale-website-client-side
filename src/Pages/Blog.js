import React from "react";
import useTitle from "../Hooks/useTitle";
import prototype from "../Images/prototype.png";

const Blog = () => {
  useTitle('Blog')
  return (
   <div className="mt-10">
    <h2 className="font-semibold text-2xl text-indigo-500 italic mb-5 text-center">Blogs</h2>
     <div className="my-10">
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
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5 mt-10">
          How does prototypical inheritance work?
        </h3>
        <p className="mb-6">
          Every object with its methods and properties contains an internal and
          hidden property known as Prototype. The Prototypal Inheritance is a
          feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          Prototype of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__.
        </p>
        <img src={prototype} alt="" />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5 mt-10">
          What is a unit test? Why should we write unit tests?
        </h3>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important. In his book "Working
          Effectively with Legacy Code", author Michael Feathers states that
          such tests are not unit tests when they rely on external systems: “If
          it talks to the database, it talks across the network, it touches the
          file system, it requires system configuration, or it can't be run at
          the same time as any other test."
        </p>
        <p className="mt-3">
          We should write unit test because...
          <li>Unit tests act as documentation for your code.</li>
          <li>
            Automated unit tests help a great deal with regression testing.
          </li>
          <li>
            Unit test enable us to catch bugs early in the development process.
            They detect code smells in our codebase. For example, if we're
            having a hard time writing unit tests for a piece of code, it might
            be a sign that your function is too complex. They contribute to
            higher code quality.
          </li>
          <li>We can test units or functions of your project in isolation.</li>
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-indigo-500 italic mb-5 mt-10">
          React vs. Angular vs. Vue?
        </h3>

        <div>
          <div>
            <h3 className='font-semibold'>Angular vs React</h3>
            <p>
              If the choice you're making is based on Angular vs React alone,
              then you'll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready. React often requires extra modules and
              components, which keeps the core library small, but means there's
              extra work involved when incorporating outside tools. Angular, on
              the other hand, is more of a full-fledged solution that doesn't
              require extras like React often does, though it does have a
              steeper learning curve for its core compared to React. React is
              more suitable for intermediate to advanced JavaScript developers
              who are familiar with concepts from ES6 and up, while Angular
              favors those same developers who are also familiar with
              TypeScript.
            </p>
          </div>
          <div>
            <h3 className='font-semibold'>React vs Vue</h3>
            <p>
              The choice between React vs Vue is often debated and it's not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there's no sign that React is on the decline either. Vue is
              generally more suited to smaller, less complex apps and is easier
              to learn from scratch compared to React. Vue can be easier to
              integrate into new or existing projects and many feel its use of
              HTML templates along with JSX is an advantage. Overall, Vue might
              be the best choice if you're a newer developer and not as familiar
              with advanced JavaScript concepts, while React is quite well
              suited for experienced programmers and developers who have worked
              with object-oriented JavaScript, functional JavaScript, and
              similar concepts.
            </p>
          </div>
          <div>
            <h3 className='font-semibold'>Angular vs Vue</h3>
            <p>
              In most cases, you probably wouldn't be deciding between only
              Angular and Vue. They are vastly different libraries with very
              different feature sets and learning curves. Vue is the clear
              choice for less experienced developers, and Angular would be
              preferred for those working on larger apps. A large library like
              Angular would require more diligence in keeping up with what's
              new, while Vue would be less demanding in this regard and the fact
              that the two most recent major releases of Vue are in separate
              repositories helps. It should also be noted that Vue was created
              by a developer who formerly worked on Angular for Google, so
              that's another thing to keep in mind, though that wouldn't have a
              huge impact on your decision.
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Blog;
