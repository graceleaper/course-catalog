import React, { Component } from "react";
import Courses from "./Courses";
import TagsDisplay from "./TagsDisplay";
import allCourses from "../courses";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      tags: [],
      coursesForSelectedTag: []
    };
  }

  componentDidMount() {
    this.setState({
      courses: allCourses
    });

    this.getAllTags();
  }

  getAllTags = () => {
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
    let allTags = [];
    tagsOrdered.forEach(function(tag) {
        allTags.push({tag: tag, count: tagsTracker[tag]});
    });
    this.setState({
      tags: allTags
    });
  };

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
          tags={this.state.tags}
          getSpecificCourses={this.getSpecificCourses}
          reRenderAllCourses={this.reRenderAllCourses}
        />
        <Courses courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
