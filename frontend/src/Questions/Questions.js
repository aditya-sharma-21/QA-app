import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Questions extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      questions: null,
    };
  }

  async componentDidMount() {
    const questions = (await axios.get("http://localhost:5000/questions/")).data;
    this.setState({
      questions: questions,
    });
  }

  render() {
    return (
        <div className="container">
        <div className="row">
          {this.state.questions === null && <p>Loading questions...</p>}
          {
            this.state.questions && this.state.questions.map(question => (
              <div key={question._id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/${question._id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Answers: {this.setState.answers}</div>
                    <div className="card-body">
                      <h4 className="card-title">{question.title}</h4>
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Questions;