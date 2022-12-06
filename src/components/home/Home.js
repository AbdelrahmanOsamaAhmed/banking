import { useSelector } from "react-redux";
import UserBar from "../UserBar/UserBar";
//import f from '../../files/MOCK_DATA.json'

const Home = () => {
  const users = useSelector(state => state)
  return users.map((user) => (
    <UserBar
      key={user.id.$oid}
      first_name={user.first_name}
      last_name={user.last_name}
      email={user.email}
      balance={user.balance}
      id={user.id.$oid}
    />
  ));
};
export default Home;

/*
 * view all customers as cards
 * click on card redirects to customer page with all info
 * click transfere shows all customers with selection
 * typing money amount
 * transfer completion
 * pass transfer request as 2 parts with id to local array and apply it
 */
