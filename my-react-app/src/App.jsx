/**we are gonna talk about JSX */
/**JSX: JavaScript XML */

/**JSX allows you to write HTML in your JS code  */

/**we are gonna start with JSX Elements  */

const anything = <h1>hello world</h1>; /** this is only for 1 element */

/**if we have more than 1 element, we wrap them in a parent element or fragments */

const simmilar=(
  <> 
  <h1>hello world</h1>
  <p>this is a paragraph</p>  
  <p>this is another paragraph</p>
  </>
  /**try removing the fragments <></> */
)

/**lets do react expressions */
const hp= 218*1.323
function KwtHp(kw){
  return kw*1.323;
}
const car ={name:"BMW", model:"X5", year:2023, hp:KwtHp(218)}

const carInfo=(
  <>
  <h1>car name: {car.name}</h1>
  <p>car model: {car.model}</p>
  <p>car year: {car.year}</p>
  <p>car hp: {car.hp}</p>
  </>
)

/**lets do attributes */
const greet = () => alert("hello roya");

const attributes  =(
  <>
  <button onClick={greet}>Click me</button>
    <p> this will be a click me button, when clicked an alert will appear.</p>
  </>
  
)

/**lets do list map with key */

const stack=["HTML", "CSS", "JS", "React", "NodeJs"]
const techlst= stack.map((tech, index) => <li key={index}>{tech}</li>)

function App() {
  return (
    <div>
      {anything}
      {simmilar}
      {carInfo}
      {attributes}
      <ul>
        {techlst}
      </ul> 
    </div>
  );
}

export default App;