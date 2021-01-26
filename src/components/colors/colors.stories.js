import React from "react";
import "./colors.scss";

export default {
  title: "Components/Colors",
  component: "Colors",
};

const Template = (args) => (
  <>
    <h2 className="section"> Primary Colors </h2>
    <hr />

    <div class="color-swatch">
      <div class="color-swatch__color color-swatch__color--primary"></div>
      <div class="color-swatch__color-info">
        <div className="color-swatch__color-name"> $color-primary </div>
        <br />
        #e6005c
      </div>
    </div>

    <h2 className="section"> Neutral Colors </h2>
    <hr />

    <div class="color-swatch">
      <div class="color-swatch__color color-swatch__color--charcoal"></div>
      <div class="color-swatch__color-info">
        <div className="color-swatch__color-name"> $color-charcoal </div>
        <br />
        #222222
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-swatch__color color-swatch__color--lgray"></div>
      <div class="color-swatch__color-info">
        <div className="color-swatch__color-name"> $color-lgray </div>
        <br />
        #f3f3f3
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-swatch__color color-swatch__color--bg"></div>
      <div class="color-swatch__color-info">
        <div className="color-swatch__color-name"> $color-bg </div>
        <br />
        #f8f8f5
      </div>
    </div>

    <div class="color-swatch">
      <div class="color-swatch__color color-swatch__color--white"></div>
      <div class="color-swatch__color-info">
        <div className="color-swatch__color-name"> $color-white </div>
        <br />
        #ffffff
      </div>
    </div>
  </>
);

export const ColorsStory = Template.bind({});
