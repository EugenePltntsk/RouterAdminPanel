import Form from "components/Form/Form";
import { AuthContext } from "context/AuthContext";
import { useContext, useState } from "react";
import ContextForm from "./ContextForm/ContextForm";
import UserCabinet from "./UserCabinet/UserCabinet";

export const App = () => {
  const {isLoggedInContext} = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>

 <div>
  {!isLoggedIn && <Form setIsLoggedIn={setIsLoggedIn}/>}
  {isLoggedIn && <UserCabinet/>}
 </div>

 <div>
  {!isLoggedInContext && <ContextForm/>}
  {isLoggedInContext && <UserCabinet/>}
 </div>
 </>
  );
};
