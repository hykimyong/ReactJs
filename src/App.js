import {useState, useEffect} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }

        setToDos((currrentArray) => [toDo, ...currrentArray]);
        /*
        const food = [1,2,3,4];
        [6,food]
        결과를 보면 이상하게 들어감 4 뒤에 6을 추가하고싶을때는
        [6, ...food]
        이렇게 쓰면 [1,2,3,4,6]이렇게 들어감
        */
        setToDo("");
    }
    console.log(toDos);
    return (
      <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add to Do</button>
        </form>
      </div>
    );
}

export default App;
