import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    };
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.refs.title.value === '') {
      alert('Title is required')
    } else {
      this.setState({newProject: {
        id:uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject)
      })
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      )
    })

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type='text' placeholder='Add Project' ref='title'></input>
          </div>
          <div>
            <label>Category</label>
            <select ref='category'>
              {categoryOptions}
            </select>
          </div>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }

}

export default AddProject;
