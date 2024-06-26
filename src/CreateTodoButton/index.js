import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
          props.toggleModal()
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
