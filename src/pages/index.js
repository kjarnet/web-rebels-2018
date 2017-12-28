import React from "react";
import Link from "gatsby-link";

import Imagery from "../graphics/imagery.svg";
import Panel from "../components/panel";
import Button from "../components/button";
import "./index.scss";

const IndexPage = () => (
  <div className="page-index">
    <div className="image-wrapper">
      <Imagery className="imagery" />
      <Panel title="WR_2018_CALL_FOR_PROPOSALS">
        <p>
          <span>Submit your proposals before March 1. 2018</span>
        </p>
        <p>
          <span>
            The final speaker line-up will be a mix of invited speakers
          </span>
          <span>– and those accepted from the CfP.</span>
        </p>
        <p>
          <span>We particularly encourage people new to public speaking</span>
          <span>and members of underrepresented groups</span>
          <span>in tech to send in their suggestions.</span>
        </p>

        <Button to="https://example.com">Submit CFP</Button>
      </Panel>
    </div>
    <footer>Want to sponsor us? Head over to <a href="/sponsors">sponsors</a>.</footer>
  </div>
);

export default IndexPage;
