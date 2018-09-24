import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <KanbanBoard/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Component</h1>
         </div>
      );
   }
}

class KanbanBoard extends React.Component {
    constructor(){
        super();
        this.cards = [
            {
                id: 1,
                title: "Read the Book",
                description: "I should read the whole book",
                status: "in-progress",
                tasks: []
            },
            {
                id: 2,
                title: "Write some code",
                description: "Code along with the samples in the book",
                status: "todo",
                tasks: [
                {
                    id: 1,
                    name: "ContactList Example",
                    done: true
                    },
                    {
                    id: 2,
                    name: "Kanban Example",
                    done: false
                    },
                    {
                    id: 3,
                    name: "My own experiments",
                    done: false
                    }
                ]
            },
        ];

        this.state = {
            data:
            [
                {
                    "id" : 1,
                    "name" : "Foo",
                    "age" : "20"
                },
                {
                    "id" : 2,
                    "name" : "Bar",
                    "age" : "30"
                }
            ]
        }
    }
    render(){
      return (
        <div>
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                </tbody>
            </table>
        </div>
      );
    }
}

class TableRow extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;