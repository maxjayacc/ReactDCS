import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  /*console.log("props.courses",props.courses);
  console.log("props.professors",props.professors);
  let data = [];
  if (props.professors && props.professors.length > 0) {
    props.courses.map(item => {
      let new_item = Object.assign({}, item);
      props.professors.map(element => {
        if (item.professorId === element.id) {
          new_item.professorName = element.name;
        }
      });
      data.push(new_item);
    });
  }*/
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Professor</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) props.deleteCourse(course.id) } }
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.professorName}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      professorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;