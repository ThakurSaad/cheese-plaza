import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="mb-12">
        <h4 className="lg:text-5xl text-blue-700 font-bold">
          What is context api?
        </h4>
        <p className="mt-2 md:text-xl text-slate-700 font-semibold">
          Context API is a system to pass data from parent to child component
          directly. It solves the issue of prop drilling. When a context api is
          declared, it makes the thing Global. So, its children can get it's
          data directly, without having to pass down form component to
          component. It is also used for state management, theme(dark, light
          etc), website translate etc. But context Api should be used sparingly
          as it makes components reuse difficult.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="lg:text-5xl text-blue-700 font-bold">
          What is semantic tag?
        </h4>
        <p className="mt-2 md:text-xl text-slate-700 font-semibold">
          Semantic tags are html tags that are meaningful both to humans and
          machines. It was introduced in HTML5. Semantic tags gives many
          information about what is inside, to the browser and the developer. It
          makes code easier to read, provides greater accessibility. Semantic
          tag makes code more consistent.
        </p>
      </section>

      <section className="mb-12">
        <h4 className="lg:text-5xl text-blue-700 font-bold">
          What is the difference between inline & inline-block elements?
        </h4>
        <p className="mt-2 md:text-xl text-slate-700 font-semibold">
          Inline elements does not start a new line. It only takes the width
          necessary for its content. We can give margin and padding in X-axis of
          an inline element. But height, width, margin and padding in Y-axis
          can't be set(e.g. a, button, input, code etc. ). <br />
          But when it comes to Inline-block elements, we can give them margin
          and padding in both x and y axis. Also there height and width can be
          set. In brief Inline-block elements behave like blocks while staying
          inline.
        </p>
      </section>
    </div>
  );
};

export default Faq;
