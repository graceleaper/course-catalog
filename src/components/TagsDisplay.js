// https://www.reddit.com/r/reactjs/comments/ai4nel/error_help_please_d_maximum_update_depth_exceeded/
// ^ don't want to call the callback on every render

import React, { Component } from "react";

class TagsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
  return (
    <div className="flex-grid-tags">
      {this.props.tags.map((tag, index) => {
        return (
            <div onClick={() => this.props.getSpecificCourses(tag)} className="tag" key={index}>
                <p>{tag.tag} - {tag.count}</p>
            </div>
        );
      })}
    </div>
  );
    }
};

export default TagsDisplay;
