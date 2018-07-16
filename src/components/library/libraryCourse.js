import React, { Component } from "react";

import Icon from "../icon";
import Arrow from "../arrow";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course_title-arrow">
          <label className="library-course_title">Problem Solving</label>
          {Icon("fas fa-check", "library-course_icon")}
        </div>
        <Arrow className="library-course_arrow" />
        {/* action button component */}
        <div className="library-course_description">
          <label>Course Description</label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla facilisis mi, non pellentesque metus consectetur vel.
            Quisque dictum, lectus vitae dignissim tincidunt, sapien nibh
            placerat diam, quis blandit enim nulla in felis.
          </p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
