const { Component } = require("react");

class Employee extends Component{

    constructor()
    {
        super()
        this.state={
            emp:[
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               },
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               },
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               },
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               },
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               },
               {
                id:1,
                name:"AAA",
                email:"aaa@gmail.com",
                phone:1111,
                city:"Pune"
               }
                

            ]
        }
    }
    render()
    {
        return(
            <>
            <table border={2}><thead><th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>CITY</th><tr/>
            </thead>
            <tbody>
                {
                    this.state.emp.map((item,index)=>{
                        return(
                            <tr key={{index}}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.city}</td>

                            </tr>
                        )

                    })
                }
            </tbody>
            
            
            </table>
            
            </>
        )
    }
}
export default Employee