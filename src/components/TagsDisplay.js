// https://www.reddit.com/r/reactjs/comments/ai4nel/error_help_please_d_maximum_update_depth_exceeded/
// ^ don't want to call the callback on every render

import React, { Component } from "react";

class TagsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagSelected: ''
      // have a toggle (true or false) for when tag is re-selected
    }
  }

  handleClick = (tag) => {
    console.log(tag)
    if (this.state.tagSelected === tag.tag) { // switch true or false toggle
        this.props.reRenderAllCourses()
        // when toggle is true (the latest thing that was selected), re-render all courses
    } else {
      this.setState({
        tagSelected: tag.tag
      })
      // console.log(this.props.getSpecificCourses(tag)) // undefined
      this.props.getSpecificCourses(tag.tag)
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
            <div onClick={() => this.handleClick(tag)} className="tag" key={index}>
                <p>{tag.tag} - {tag.count}</p>
            </div>
        );
      })}
    </div>
  );
    }
};

export default TagsDisplay;
