import React, { Component } from "react";
import Courses from "./Courses";
import TagsDisplay from "./TagsDisplay";
import allCourses from "../courses";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: allCourses,
      tags: []
    };
  }

  componentDidMount() {
    this.getAllTags();
  }

  getAllTags = async () => {
    let tagsTracker = {};
    for (let course = 0; course < allCourses.length; course++) {
      let currentCourse = allCourses[course].tags;
      for (let tagsList = 0; tagsList < currentCourse.length; tagsList++) {
        let currentTag = currentCourse[tagsList];
        if (!tagsTracker[currentTag]) {
            tagsTracker[currentTag] = 1;
        } else {
            tagsTracker[currentTag]++;
        }
      }
    }
    let tagsOrdered = Object.keys(tagsTracker).sort();
    let allTags = [];
    tagsOrdered.forEach(function(tag) {
        allTags.push({tag: tag, count: tagsTracker[tag]})
    });
    this.setState({
      tags: allTags
    });
  };

  render() {
    return (
      <div>
        <h1>Computer Programming Courses</h1>
        <TagsDisplay tags={this.state.tags} />
        <Courses courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
