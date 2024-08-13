import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
      };

    const onCancel= (event) => {
        setOpenModal(false);
    }

    const onChange= (event) => {
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea name="" id="" placeholder="Cortar cebolla para el almuerzo" required value={newTodoValue} onChange={onChange}/>

            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">Cancelar</button>  
                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>  
            </div>
        </form>
    )
}

export { TodoForm };