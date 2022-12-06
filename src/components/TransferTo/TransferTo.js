import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const TransferTo = ({ id }) => {
    const navigate = useNavigate();
  const users = useSelector((state) => state).filter(
    (user) => user.id.$oid !== id
  );
  function transferHandler(userId){
    navigate(`/transferconfirm/${id}/${userId}`)
  }
  return (
    <>
      {users.map((user) => (
        <div key={user.id.$oid}>
          <div style={{ margin: "20px" }}>
            <div>First Name : {user.first_name}</div>
            <div>Last Name : {user.last_name}</div>
            <div>Email : {user.email}</div>
            <div>Balance : {user.balance}</div>
            <Button onClick={()=>transferHandler(user.id.$oid)}>Transfer to</Button>
          </div>
        </div>
      ))}
    </>
  );
};
export default TransferTo;
