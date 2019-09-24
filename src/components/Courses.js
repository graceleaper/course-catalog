import React from "react";
import fetchAuthorData from "../fetchAuthorData";

class Courses extends React.Component {

  state = {
    authors: []
  }

  /*
    - return authors object in fetchAuthors
    - hashmap --> an array with objects as elements -- each obj will have course id & author name
    - set state to be an array (the hashmap)
  */

  fetchAuthors = async () => {
    const response = await fetchAuthorData.get()
    // this.setState({authors: response.data.authors})
    return response.data.authors
  }

  componentDidMount() {
    this.defineAuthors()
  }

  defineAuthors = async () => {
    const authorsObj = await this.fetchAuthors()
    let authorIds = Object.keys(authorsObj)
    let authorNames = []
    for (let key in authorsObj) {
      authorNames.push(authorsObj[key])
    }

    const allAuthorInfo = authorIds.map((id) => {
      return authorNames.map((name) => {
        return {id: id, name: name.name}
      })
    })

    this.setState({authors: allAuthorInfo})
    console.log(this.state.authors)
  }

  render() {
    const allCourses = this.props.courses.map(course => {
      return (
        <div className="col" key={course.id}>
        <img className="course" alt="course preview" src={course.image} />
          <h3>{course.title}</h3>
          <p className="description">{course.description}</p>
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
