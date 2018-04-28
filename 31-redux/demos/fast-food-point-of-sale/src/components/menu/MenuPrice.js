// helper function that converts a penny-price value
// like the number 209 into displaying as "$2.09"
export default (props) => {
  let pennies = props.price % 100;
  let dollars = Math.floor(props.price / 100);
  if (pennies < 10) {
    pennies = '0' + pennies;
  }
  return `\$${dollars}.${pennies}`;
}
