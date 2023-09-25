import * as React from "react";
const INITIAL_STATE = {
  Items: JSON.parse(localStorage.getItem("user")) || [],
  isFetching: false,
  error: false,
};

export const CountContext = React.createContext();

export const CountProvider = ({ children }) => {
  const [us, setus] = React.useState(INITIAL_STATE);
  const fun = () => {
    setus("nooo");
  };

  const value = "hira";
  return (
    <>
      <CountContext.Provider
        value={{
          us: us,
          user: function rain(param) {
            setus(param);
          },
        }}
      >
        {children}
      </CountContext.Provider>
    </>
  );
};
