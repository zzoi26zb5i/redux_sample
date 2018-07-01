const initialState = {
  task:'',
  tasks:[]
}

const tasksReducer = (state=initialState,action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks:[...state.tasks,action.payload.task]
      }
    case 'INPUT_TASK':
      return {
        ...state,
        task:action.payload.task
      }
    default:
      return state;
  }
}

export default tasksReducer;