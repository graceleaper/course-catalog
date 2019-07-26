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
      console.log(tag);
      if (currentCourse.tags.includes(tag.tag)) {
        selectedCourses.push(currentCourse);
      }
    }
    this.setState({
      courses: selectedCourses
    })
  }

  render() {
    return (
      <div>
        <h1>Computer Programming Courses</h1>
        <TagsDisplay tags={this.state.tags} getSpecificCourses={this.getSpecificCourses} />
        <Courses courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
