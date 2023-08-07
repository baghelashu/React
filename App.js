import logo from './logo.svg';
import './App.css';
let ar=[1,2,3,4,5];

function App() {
  return (
    <div>
    <img src={logo} width='200' height='100'></img>
    <h1>chalo react suru krte hai bhaiya ! </h1>
  <ul className='class1'> </ul>
  <li> {ar[0]}</li>
  <li> {ar[1]}</li>
  <li> {ar[2]}</li>
  <li> {ar[3]}</li>
  <li> {ar[4]}</li>
  <li> {ar[5]}</li>

    </div>
  
    );
}

export default App;
