import React from 'react';
import axios from 'axios';
import UserService from '../Service/UserService';
class PersonList extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            books:[]
        }
    }
    componentDidMount(){
        UserService.getUsers().then((Response)=>{
            this.setState({books:Response.data})
        });
    }
    render(){
        return(
        <div>
            <h1 className="text-center mt-5 ">List of Books</h1>
            <div className="container mt-2">
            <table className="table table-bordered border-info">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Book Name</th>
                    <th>Book Author</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map(
                            books =>
                                <tr key = {books.id}>
                                        <td>{books.name}</td>
                                        <td>{books.mail}</td>
                                        <td>{books.userName}</td>
                                        <td>{books.imageURL}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
        )
    }
}
export default PersonList;