import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import axios from 'axios';

class LogsList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    const jwt = localStorage.getItem('jwt-token');

    axios
      .get('/api/user/logs/list', { headers: { 'auth-token': jwt } })
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise = id => {
    const jwt = localStorage.getItem('jwt-token');

    axios
      .delete('/api/user/logs/delete/' + id, {
        headers: { 'auth-token': jwt }
      })
      .catch(err => console.log(err));

    this.setState(prevState => {
      return {
        list: prevState.list.filter(el => el._id !== id)
      };
    });
  };

  render() {
    if (this.state.list.length !== 0)
      return (
        <>
          <div>
            <table className='content-table'>
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Sets</th>
                  <th>Kg</th>
                  <th>Reps</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...this.state.list].reverse().map((row, i) => (
                  <tr key={i}>
                    <td>{row.exercise}</td>
                    <td>{row.description}</td>
                    <td>{row.duration}</td>
                    <td>{row.date.substring(0, 10)}</td>
                    <td>{row.sets}</td>
                    <td>
                      {row.entries.map((item, i) => (
                        <React.Fragment key={i}>
                          <span>{item.kg}</span>
                          <br />
                        </React.Fragment>
                      ))}
                    </td>
                    <td>
                      {row.entries.map((item, i) => (
                        <React.Fragment key={i}>
                          <span>{item.reps}</span>
                          <br />
                        </React.Fragment>
                      ))}
                    </td>
                    <td>
                      <DeleteOutlinedIcon
                        onClick={() => this.deleteExercise(row._id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );

    return (
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '2em'
        }}
      >
        You haven't logged any exercise!
      </div>
    );
  }
}

export default LogsList;
