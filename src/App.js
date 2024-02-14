import { createContext, useState } from "react";
import Loginpage from "./Loginpage";


export const Theme =  createContext()

function App() {

  const [theme,settheme] = useState("light")

  return (
    <>
    <Theme.Provider value={{theme,settheme}}>
    <Loginpage/>
    </Theme.Provider>

    </>
  );
}

export default App;
