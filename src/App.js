import { Routes, Route } from "react-router";
import Root from "./components/Root";
import SignIn from "./components/SignIn";
import UserProvider from "./utils/UserContext";
import CreateAccount from "./components/CreateAccount";
import UserAccount from "./components/UserAccount";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="background"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/user" element={<UserAccount />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
