import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import AppReducer from "./AppReducer";
import { auth } from "../../Firebase/Firebase";

// initial state

export const initialState = {
  basket: [],
  user: null,
};

// create context

export const GlobalContext = createContext();

// provider Context

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // action
  // Add to basket
  const addToBasket = (product) => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  // remove from basket
  // dispatch({type: ""})
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        addToBasket,
        removeFromBasket,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
  console.log(state.user);  
};
