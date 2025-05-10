import { createContext, useContext, useReducer } from "react";
import { DeleteData, GetDatas, GetSingleData, PostData, UpdateData } from "../api/GetServices";

export const JokesContext = createContext();

const initialState = {
    jokesStore: [],
    formData: {
        title: "",
        punchline: "",
    },
    editId: null,
    isLoading: false,
    error: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_JOKES":
            return {...state, jokesStore: action.payload};
        case "GET_SINGLE_JOKE":
            return {...state, jokesStore: [action.payload]};
        case "SET_FORM":
            return {...state, formData: {...state.formData, [action.payload.name]: action.payload.value}}
        case "POST_JOKE":
            return {...state, jokesStore: [...state.jokesStore, action.payload], isLoading: false};
        case "SET_EDIT_DETAILS":
            return {...state, formData: {...state.formData, title: action.payload.title, punchline: action.payload.punchline}, editId: action.payload.editId};
        case "UPDATE_JOKE": 
            return {...state, jokesStore: state.jokesStore?.map((joke) => joke.id === action.payload.id ? action.payload : joke), editId: null}
        case "DELETE_JOKE":
            return {...state, jokesStore: state.jokesStore?.filter((joke) => joke.id !== action.payload)}
        case "RESET_FORM":
            return {...state, formData: {title: "", punchline: ""}}
        case "LOADING":
            return {...state, isLoading: action.payload};
        case "ERROR":
            return {...state, error: action.payload, isLoading: false};
        default:
            return state;
    }
}

export const JokesProvider = ({children}) => {
    const [jokes, dispatch] = useReducer(reducer, initialState);


    // fetch all jokes
    const GetJokes = async () => {
        dispatch({type: "LOADING", payload: true});
        try{
            const res = await GetDatas();
            dispatch({type: "GET_ALL_JOKES", payload: res.data});
        } catch(error) {
            dispatch({type: "ERROR", payload: error.message});
        } finally {
            dispatch({type: "LOADING", payload: false});
        }
    }

    // fetch single joke
    const IndivJoke = async (id) => {
        dispatch({type: "LOADING", payload: true});
        try{
            const res = await GetSingleData(id);
            dispatch({type: "GET_SINGLE_JOKE", payload: res.data});
        } catch(error) {
            dispatch({type: "ERROR", payload: error.message});
        } finally {
            dispatch({type: "LOADING", payload: false});
        }
    }

    // set form data
    const setForm = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       dispatch({type: "SET_FORM", payload: {name, value}});
    }

    // post joke
    const PostJoke = async (newJoke) => {
        dispatch({type: "LOADING", payload: true});
        try{
            const res = await PostData(newJoke);
            dispatch({type: "POST_JOKE", payload: res.data});
        } catch(error) {
            dispatch({type: "ERROR", payload: error.message});
        } finally {
            dispatch({type: "LOADING", payload: false})
            dispatch({type: "RESET_FORM"});
        }
    }

    // set current joke 
    const setEdit = (currJoke) => {
        dispatch({type: "SET_EDIT_DETAILS", payload: {title: currJoke.title, punchline: currJoke.punchline, editId: currJoke.id}}) 
    }

    // update joke
    const UpdateJoke = async (id, editJoke) => {
        dispatch({type: "LOADING", payload: true});
        try{
            const res = await UpdateData(id, editJoke);
            dispatch({type: "UPDATE_JOKE", payload: res.data})
        } catch(error) {
            dispatch({type: "ERROR", payload: error.message});
        } finally {
            dispatch({type: "LOADING", payload: false});
            dispatch({type: "RESET_FORM"});
        }
    }

    // delete joke
    const DeleteJoke = async (id) => {
        dispatch({type: "LOADING", payload: true});
        try{
            const res = await DeleteData(id);
            dispatch({type: "DELETE_JOKE", payload: id});
        } catch(error) {
            dispatch({type: "ERROR", payload: error.message});
        } finally {
            dispatch({type: "LOADING", payload: false});
        }
    }
    
    

  return ( 
    <JokesContext.Provider value={{ jokes, GetJokes, IndivJoke, setForm, PostJoke, DeleteJoke, setEdit, UpdateJoke }}>
        {children}
    </JokesContext.Provider>
  )
}

export const useJokes = () => {
    return useContext(JokesContext)
}