import React from "react";
import "swagger-ui-react/swagger-ui.css";
import { cx, css } from "@emotion/css";
import RichText from "./slate/richText";

const Wrapper = ({ className, ...props }) => (
  <div
    {...props}
    className={cx(
      className,
      css`
        max-width: 42em;
        margin: 20px auto;
        padding: 20px;
      `
    )}
  />
);

const ExampleContent = (props) => (
  <Wrapper
    {...props}
    className={css`
      background: #fff;
    `}
  />
);

function App() {
  return (
    <ExampleContent>
      <RichText />
    </ExampleContent>
  );
}

export default App;
