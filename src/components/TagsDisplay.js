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

  handleClick = (tagObj) => {
    if (this.state.tagSelected === tagObj.tag) {
          this.props.reRenderAllCourses()
    } else {
      /* 
        if the tag selected was NOT just previously selected,
        set state to the selected tag
      */
      this.setState({
        tagSelected: tagObj.tag // first tag is an object that contains tag name "tag" and "count"
      })
      /*
        after tag selection, render SPECIFIC courses for THAT tag
      */
      this.props.getSpecificCourses(tagObj) // remember, tagObj is an obj that contains "tag" name and "count"
    }
  }

  render() {
  const allTags = this.props.tags.map((tagObj, index) => {
    return (
      /*
        check why we invoke create self invoking
        function when passing info from child to parent component
      */
        <button onClick={() => this.handleClick(tagObj)} className="tag" key={index}>
            <p>{tagObj.tag} ({tagObj.count})</p>
        </button>
    );
  })

  return (
    <div className="flex-grid-tags">
      {allTags}
    </div>
  );
    }
};

export default TagsDisplay;
