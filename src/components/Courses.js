import React from "react";
import fetchAuthorData from "../fetchAuthorData";
// import axios from 'axios'

class Courses extends React.Component {

  state = {
    authors: {}
  }

  async componentDidMount() {
    try {
      // const response = await axios.get('https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json')
      const response = await fetchAuthorData.get()
      const authors = response.data.authors
      this.setState({authors: authors})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const allCourses = this.props.courses.map(course => {
      return (
        <div className="col" key={course.id}>
        <img className="course" alt="course preview" src={course.image} />
          <h3>{course.title}</h3>
          <p className="description">{course.description}</p>
          {/* Because of async request to API, have ternary to show author name based on if state was set */}
          {this.state.authors[course.author_id] ? <p>Author: {this.state.authors[course.author_id].name}</p> : null}
          {course.pro ? <p className="pro">Pro</p> : null}

        </div>
      );
    })

    return (
        <div className="flex-grid">
        {allCourses}
        </div>
    );
  }
};

export default Courses;
