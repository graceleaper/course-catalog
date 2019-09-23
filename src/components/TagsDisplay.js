// https://www.reddit.com/r/reactjs/comments/ai4nel/error_help_please_d_maximum_update_depth_exceeded/
// ^ don't want to call the callback on every render

import React, { Component } from "react";

class TagsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagSelected: ''
    }
  }

  /* 
    tag that is passed into handleClick is an object with 
    key/value pairs of a tag name and its count (or # of times 
    it appears). This object with this tag information is an 
    element from the allTagsWithCount array that is mapped over
    from this.props.tags.map 
  */
  handleClick = (tag) => {
    if (this.state.tagSelected === tag.tag) {
          this.props.reRenderAllCourses()
    } else {
      /* 
        if the tag selected was NOT just previously selected,
        set state to the selected tag
      */
      this.setState({
        tagSelected: tag.tag // first tag is an object that contains tag name "tag" and "count"
      })
      /*
        after tag selection, render SPECIFIC courses for THAT tag
      */
      this.props.getSpecificCourses(tag) // remember, tag is an obj that contains "tag" name and "count"
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
            <button onClick={() => this.handleClick(tag)} className="tag" key={index}>
                <p>{tag.tag} ({tag.count})</p>
            </button>
        );
      })}
    </div>
  );
    }
};

export default TagsDisplay;
