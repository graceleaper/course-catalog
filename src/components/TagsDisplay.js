// https://www.reddit.com/r/reactjs/comments/ai4nel/error_help_please_d_maximum_update_depth_exceeded/
// ^ don't want to call the callback on every render

import React, { Component } from "react";

class TagsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagSelected: false
    }
  }

  handleClick = () => {
    this.setState({
      tagSelected: !this.state.tagSelected
    })

    if (this.state.tagSelected === false) {
      this.props.reRenderAllCourses();
    }
  }

  render() {
  return (
    <div className="flex-grid-tags">
      {this.props.tags.map((tag, index) => {
        return (
          /*
            check why we invoke create self invoking
            function when passing info from child to parent component
          */
            <div onClick={() => { this.props.getSpecificCourses(tag); this.handleClick() }} className="tag" key={index}>
                <p>{tag.tag} - {tag.count}</p>
            </div>
        );
      })}
    </div>
  );
    }
};

export default TagsDisplay;
