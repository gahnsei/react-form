import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

const useServer = () => {
  const [db, setDb] = useState([]);
  const [currentUser, setCurrentUser] = useState(``);

  const navigate = useNavigate();

  const addUser = (userInfo) => {
    if (db.find((ele) => ele.email === userInfo.email)) {
      return `Email already exists`;
    } else {
      const userId = nanoid();
      navigate(`/user?user=${userId}`);
      setDb((prevDb) => [...prevDb, { ...userInfo, userId }]);
      setCurrentUser({ ...userInfo, userId });
    }
  };

  const loginUser = (userInfo) => {
    const user = db.find((ele) => ele.email === userInfo.email);
    if (!user || user.password !== userInfo.password) {
      return `Email/Password Not Found`;
    } else {
      const foundUser = db.filter((ele) => ele.email === userInfo.email)[0];
      console.log(foundUser);
      setCurrentUser(foundUser);
      navigate(`/user?user=${foundUser.userId}`);
    }
  };
  return { currentUser, addUser, loginUser };
};

export default useServer;
