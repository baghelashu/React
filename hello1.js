function Hello1(){
    return (
        <div>
            <h1>User Information</h1>
            <table border={5} className="table table-striped bg-light text-dark">
                <thead>
                    <th > Id</th>
                    <th > Name</th>
                    <th > Salary</th>
                    <th > Address</th>

                </thead>
                <tbody>
                    <tr>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.salary}</td>
                        <td >{user.address}</td>
                    </tr>
                </tbody>
            </table>



        </div>
    )
}
const user={'id':10001,'name':'suman kumar',
'salary':15672567,
'address':'aapko nhi pata !'
}

export default Hello1;
