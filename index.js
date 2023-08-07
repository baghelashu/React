import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello1 from './hello1';
import UserForm from '../src/UserForm';
import UserCar from '../src/UserCar';
import UserCounter from '../src/Usercounter';
import CustomerForm from './CustomerForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
<UserForm id="10001" name="Aman baghel"></UserForm>


    {/* <Hello1></Hello1> */}
    {/* <UserForm> </UserForm> */}
    <UserCounter> </UserCounter>
    <CustomerForm>  </CustomerForm>
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
