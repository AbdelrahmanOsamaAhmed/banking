import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import f from '../../files/MOCK_DATA.json'
import TransferTo from "../TransferTo/TransferTo";
import UserBar from "../UserBar/UserBar";
const UserTransfer = () => {
  const navigate = useNavigate();
  function backHandler() {
    navigate("/");
  }
  const params = useParams();
  const user = f.find((user) => user.id.$oid === params.id);
  return (
    <>
      <UserBar
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        balance={user.balance}
        id={user.id.$oid}
      />
      <Button onClick={backHandler}>Back</Button>
      <TransferTo id={params.id}/>
    </>
  );
};
export default UserTransfer;
