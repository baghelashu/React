import { Component } from 'react';

class CustomerForm extends Component{
    constructor(props){
        super(props);
        this.state={
            'id':0,
            'name':'',
            'salary':0
        }
    
    }
    idChange=(event)=>{
        this.setState(
            {id:event.target.value}
        )
    }
    idChange=(event)=>{
        this.setState(
            {id:event.target.value}
        )
    }
    idChange=(event)=>{
        this.setState(
            {id:event.target.value}
        )
    }





    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Enter Id</label>
                        <input className="form-control" onChange={this.Idchange}></input>

                    </div>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input className="form-control"onChange={this.namechange}></input>

                    </div>
                    <div className="form-group">
                        <label>Enter Salary</label>
                        <input className="form-control"onChange={this.salarychange}></input>

                    </div>

                </form>
                <div> Id is {this.state.id}</div>
                <div> Id is {this.state.name}</div>
                <div> Id is {this.state.salary}</div>
            </div>
        )
    }
}
export default CustomerForm;
