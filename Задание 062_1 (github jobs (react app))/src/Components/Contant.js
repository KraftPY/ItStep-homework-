import React from "react";

class EmptyBlock extends React.Component {
  render() {
    return (
      <h3>{this.props.msg}</h3>
    );
  }
}

class TableJobs extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Type</th>
            <th>Company</th>
            <th>Location</th>
            <th>Created</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((work, i) => {
            return (
              <tr key={work.id}>
                <td>{i + 1}</td>
                <td>{work.title}</td>
                <td>{work.type}</td>
                <td>{work.company}</td>
                <td>{work.location}</td>
                <td>{new Date(work.created_at).toLocaleDateString()}</td>
                <td><a href={work.url} target="_blank" rel="noreferrer noopener">Link</a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class Contant extends React.Component {
  render() {
    return (
      < div className="content" >
        {
          (this.props.isSearch) ?
            <EmptyBlock msg={'Loading...'} /> :
            this.props.data && this.props.data.length ? (
              <TableJobs data={this.props.data} />
            ) : (
                <EmptyBlock msg={'No find jobs'} />
              )
        }
      </div >

    );
  }
}

export default Contant;