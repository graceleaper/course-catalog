import React, { Component } from "react";
import Courses from "./Courses";
import TagsDisplay from "./TagsDisplay";
import allCourses from "../allCourses";

class App extends Component {

 state = {
  courses: [],
  tags: []
};

  async componentDidMount() {
    this.setState({
      courses: await allCourses
    });

    this.getAllTags();
  }

  getAllTags = () => {
    /*
      create hash map to keep track of tags and their
      count (the # of times they appear throughout all courses) 
    */
    let tagsTracker = {};

    allCourses.forEach((currentCourse) => {
      let currentCourseTags = currentCourse.tags;
      currentCourseTags.forEach((currentTag) => {
        if (!tagsTracker[currentTag]) tagsTracker[currentTag] = 0;
        tagsTracker[currentTag]++;
      })
    });

    /*
      (1) get the keys from tagsTracker object
      (2) put them into an array
      (3) sort the array
    */

    let tagsOrdered = Object.keys(tagsTracker).sort();

    /*
      Map tagsOrdered. At each element, return an object with the tag name AND count

      allTags will be an array, where each element is an object
      containing a tag name and the # of times it appears
    */

    let allTags = tagsOrdered.map(tag => {
      return {tag, count: tagsTracker[tag]}
    })

    this.setState({
      tags: allTags
    });
  };

  /*
    "tag" that is being passed in is an object with
    key/value of "tag" name and its "count"
  */
  getSpecificCourses = (tag) => {

    let selectedCourses = allCourses.filter((currentCourse) => {
      return currentCourse.tags.includes(tag.tag)
    })

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
