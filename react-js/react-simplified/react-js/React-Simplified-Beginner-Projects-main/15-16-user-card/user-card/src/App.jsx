import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard.jsx";

function App() {
  return (
    <UserCard
      age={JSON.stringify(user.age)}
      phoneNumber={JSON.stringify(user.phoneNumber)}
      name={JSON.stringify(user.name)}
      address={JSON.stringify(user.address)}
    />
  );
}

export default App;
