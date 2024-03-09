import React, { useState } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markdown, setMarkdown] = useState(
    "## markdown preview \n #### [Markdown CheatSheet](https://www.markdownguide.org/cheat-sheet/)"
  );
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default Markdown;
