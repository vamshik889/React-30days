export const initialState = {
  balance: 0,
};
function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case "withdraw":
      if (state.balance >= +action.payload) {
        return { ...state, balance: +state.balance - +action.payload };
      }
      return state;
    case "deposit":
      if (+action.payload > 0) {
        return { ...state, balance: + state.balance + + action.payload };
      }
      return state;

    default:
      return state;
  }
}

export default AccountReducer;
