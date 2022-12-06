import f from "../files/MOCK_DATA.json";
let initial = f;
export default function Reducer(state = initial, action) {
  if (action.type === "transfer") {
    for (let index in initial) {
      if (initial[index].id.$oid === action.payload.id1) {
        initial[index].balance =
          +initial[index].balance - +action.payload.amount;
      }
      if (initial[index].id.$oid === action.payload.id2) {
        initial[index].balance = +initial[index].balance + +action.payload.amount;
      }
    }
  }
  return state;
}
