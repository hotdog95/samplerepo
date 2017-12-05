import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [
                {
                    "id": 1,
                    "name": "Jimmy",
                    "age": 21
                },
                {
                    "id": 2,
                    "name": "Billy",
                    "age": 22
                },
                {
                    "id": 3,
                    "name": "Freddy",
                    "age": 23
                }
            ]
        }
    }

    render() {
        return (
            <div>
            <Header />
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person /* data is a prop name for TableRow */} />)}
                    {/*Using key here helps with the performance of react when dynamically changine the */}
                </tbody>
            </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Some People</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>{/* This is how props are used in components */}
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;
