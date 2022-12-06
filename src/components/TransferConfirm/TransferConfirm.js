import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useRef } from "react";

const TransferConfirm = () => {
  const params = useParams();
  const { id1, id2 } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state).filter(
    (user) => user.id.$oid === id1 || user.id.$oid === id2
  );
  const amountRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    dispatch({
      type: "transfer",
      payload: {
        id1: id1,
        id2: id2,
        amount: parseInt(amountRef.current.value),
      },
    });
    navigate('/')

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
          </div>
        </div>
      ))}
      <form onSubmit={submitHandler}>
        <label htmlFor="amount">Enter the amount</label>
        <input id="amount" ref={amountRef} type='number'/>
        <Button type="submit">Transfer</Button>
      </form>
    </>
  );
};
export default TransferConfirm;
