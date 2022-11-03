// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  return (
    <div>
      <h1>Hey guys! My name is {name}!</h1>
      <h2>Things I like!</h2>
      <ul>
        <li>Peas</li>
        <li>Carrots</li>
        <li>Love</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
const name = "Baer"
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
