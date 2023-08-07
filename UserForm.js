import { Component } from 'react';
import Address from './Address';
import Car from './Car';
import UserCar from './UserCar';

class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <h1>
                UserPage hai bhaiya  !
            </h1>
            <div>
                Id is {this.props.id}
            </div>
            <div>
                Name is {this.props.name}
            </div>
            <Address city="GREATER NOIDA "state="UP"country="BHARAT"></Address>
            <UserCar car={Car}></UserCar>
            
        </div>
        
        )
    }
}
export default UserForm;