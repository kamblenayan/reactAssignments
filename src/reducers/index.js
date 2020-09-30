
let defaultState = {
    books :[],
    selectedBook:null
}

const mainReducer = (state = defaultState,action) =>{
    if(action.type === "SEARCHED_BOOKS"){
      return Object.assign({}, state, { books: action.data })
    }

    if(action.type==='SHOW_BOOK'){
      return Object.assign({},state,{selectedBook: action.data})
    }
    return state;
    
}

export default mainReducer;