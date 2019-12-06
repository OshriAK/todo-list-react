import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items, ClearList, HandleDelete, HandleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">
                    todo list
                    {items.map(item => {
                       return <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        handleDelete={() => HandleDelete(item.id)} 
                        handleEdit={() => HandleEdit(item.id)} />;
                    })}
                </h3>
                <button 
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={ClearList}>
                    clear list
                </button>
            </ul>
        );
    };
};
