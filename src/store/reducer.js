const initialState = {
    age: 20
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "AGE_UP_ASYNC":  // change the action name
        newState.age += action.value;
        console.log(newState.age)
       break;
  
      case "AGE_DOWN":
        newState.age -= action.value;
        console.log(newState.age)
        break;
    }
    return newState;
  };
  
  export default reducer;
  