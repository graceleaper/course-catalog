import React, { Component } from "react";
import Courses from "./Courses";
import TagsDisplay from "./TagsDisplay";
import allCourses from "../courses";

class App extends Component {
  /*
  constructor() {
    super();
    this.state = {
      courses: [],
      tags: []
    };
  }
  */

 state = {
  courses: [],
  tags: []
};

  componentDidMount() {
    this.setState({
      courses: allCourses
    });

    this.getAllTags();
  }

  getAllTags = () => {
    /*
      create hash map to keep track of tags and their
      count (the # of times they appear throughout all courses) 
    */
    let tagsTracker = {};
    for (let course = 0; course < allCourses.length; course++) {
      let currentCourse = allCourses[course].tags;
      for (let tagsList = 0; tagsList < currentCourse.length; tagsList++) {
        let currentTag = currentCourse[tagsList];
        // if (!tagsTracker[currentTag]) {
        //     tagsTracker[currentTag] = 1;
        // } else {
        //     tagsTracker[currentTag]++;
        // }
        if (!tagsTracker[currentTag]) tagsTracker[currentTag] = 0;
        tagsTracker[currentTag]++;
      }
    }
    let tagsOrdered = Object.keys(tagsTracker).sort();
    /*
      allTags will be an array, where each element is an object
      containing a tag name and the # of times it appears. This
      array will be mapped over in order to display all the tags 
    */
    let allTags = [];
    tagsOrdered.forEach(function(tag) {
        allTags.push({tag: tag, count: tagsTracker[tag]});
    });
    this.setState({
      tags: allTags
    });
  };

  /*
    "tag" that is being passed in is an object with
    key/value of "tag" name and its "count"
  */
  getSpecificCourses = (tag) => {
    let selectedCourses = [];
    for (let course = 0; course < allCourses.length; course++) {
      let currentCourse = allCourses[course];
      if (currentCourse.tags.includes(tag.tag)) {
        selectedCourses.push(currentCourse);
      }
    }
    this.setState({
      courses: selectedCourses
    })
  }

  reRenderAllCourses = () => {
    this.setState({
      courses: allCourses
    })
  }

  render() {
    return (
      <div>
        <div className="header">
            <h1>Course Catalog</h1>
            <img className="logo" alt="coding" src="https://cdn0.iconfinder.com/data/icons/flaturici-set-5/512/code-512.png" />
        </div>
        <TagsDisplay
          tags={this.state.tags} // have a tags array because of getAllTags() method
          getSpecificCourses={this.getSpecificCourses}
          reRenderAllCourses={this.reRenderAllCourses}
        />
        <Courses courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
