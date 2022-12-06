import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const UserBar = ({ first_name, last_name, email, balance, id }) => {
    const navigate = useNavigate();
    function transferHandler() {
        navigate(`/user/${id}`)
    }
  return (
    <div style={{ margin: "20px" }}>
      <div>First Name : {first_name}</div>
      <div>Last Name : {last_name}</div>
      <div>Email : {email}</div>
      <div>Balance : {balance}</div>
      <Button onClick={transferHandler}>Transfer</Button>
    </div>
  );
};
export default UserBar;
