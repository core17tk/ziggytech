import React, {useState, useEffect} from 'react'
import TaskContext from "./TaskContext";

const TaskState = (props) => {
  
  const [userValue, setUserValue] = useState({})

  const setValue = (value) => {
    setUserValue(value)
  }
  

  return (
    <div>
        <TaskContext.Provider value={{userValue, setValue}}>
            {props.children}
        </TaskContext.Provider>
    </div>
  )
}

export default TaskState