function Address(props){
    return(
        <div className="border border-primary">
            <h1> Address hai ...</h1>
            <div>
                city is {props.city}

            </div>
            <div>
                city is {props.state}

            </div>
            <div>
                city is {props.country}

            </div>
            
        </div>
    )
}
export default Address;