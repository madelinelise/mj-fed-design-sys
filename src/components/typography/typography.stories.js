import React from "react";
import "./typography.scss";

export default {
  title: "Components/Typography",
  component: "Typography",
};

const Template = (args) => (
  <>
    <h2 className="section"> Headings </h2>
    <hr />

    <div class="font font-heading font-heading--regular">
      <h3 class="font-letters">Aa</h3>
      <div class="font-name">Montserrat Regular</div>
    </div>

    <div class="font font-heading font--bold">
      <h3 class="font-letters">Aa</h3>
      <div class="font-name">Montserrat Bold</div>
    </div>

    <div className="heading-block">
      <h1> Heading 1 </h1>
      48px
    </div>

    <div className="heading-block">
      <h2> Heading 2 </h2>
      28px
    </div>

    <div className="heading-block">
      <h3> Heading 3 </h3>
      24px
    </div>

    <h2 className="section"> Body Text </h2>
    <hr />

    <div class="font">
      <div class="font-letters">Aa</div>
      <div class="font-name">Open Sans</div>
    </div>

    <div class="font font--bold">
      <div class="font-letters">Aa</div>
      <div class="font-name">Open Sans</div>
    </div>

    <p>
      {" "}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.{" "}
    </p>
  </>
);

export const TypographyStory = Template.bind({});
