import React from 'react'
const TodoList =({todolist,deleteHandler    })=>{
    return (
        <div>
            {todolist.map((todo,index)=> <div>
                <h5>{todo}  <button onClick={() => deleteHandler(index) }  className='btn btn-primary'>Delete</button></h5>
            </div>)}

        </div>
    )
}


export default TodoList