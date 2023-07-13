import React from "react";
import UserList from "./components/UserList";
import TodoLIst from "./components/TodoLIst";

const App=()=>{
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoLIst/>
        </div>
    )
}

export default App;