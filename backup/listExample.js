import React from 'react'
import ReactDOM from 'react-dom'

var ListApp = React.createClass({
    getInitialState() {
        return {
            users: [],
            username: '',
            profession:''
        }
    },
    onChangeUsername(event) {
        this.setState({ username: event.target.value })
    },
    onChangeProfession(event) {
        this.setState({ profession: event.target.value })
    },
    handleSubmit(event) {
        event.preventDefault();

        this.state.users.push({
            username: this.state.username,
            profession: this.state.profession
        })

        this.setState({
            username: '',
            profession: ''
        })
    },
    render() {
        return (
            <div className="container">
                <h3>List App</h3>
                <form onSubmit={this.handleSubmit} className="listForm form-inline">
                    Name &nbsp;
                    <input onChange={this.onChangeUsername} value={this.state.username} id="user" type="text" className="form-control"/>
                    <span>&nbsp;&nbsp;</span>
                    Profession &nbsp;
                    <input onChange={this.onChangeProfession} value={this.state.profession} id="profession" type="text" className="form-control"/>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <hr/>
                <ListTable data={this.state.users}/>
            </div>
        )
    }
});

var User = React.createClass({
    render() {
        return(
            <tr>
                <td>{this.props.username}</td>
                <td>{this.props.profession}</td>
            </tr>
        )
    }
})
var ListTable = React.createClass({
   render() {
       var users = this.props.data.map((user) => {
           return <User username={user.username} profession={user.profession}></User>
       })
       return(
           <table className="table table-striped">
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Profession</th>
                   </tr>
               </thead>
               <tbody>
               {users}
               </tbody>
           </table>
       )
   }
});

export default ListApp