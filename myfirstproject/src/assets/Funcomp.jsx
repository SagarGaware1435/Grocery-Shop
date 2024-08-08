function Funcomp(prop)
{
  let students=[
  {
    rno:1,
    name:"AAA",
    city:"Pune",
    phone:111
  },
  {
    rno:2,
    name:"BBB",
    city:"Delhi",
    phone:222
  },
  {
    rno:3,
    name:"CCC",
    city:"Mumbai",
    phone:33333
  },
  {
    rno:4,
    name:"DDD",
    city:"benglore",
    phone:4444
  },
  {
    rno:5,
    name:"EEEE",
    city:"Nashik",
    phone:55555
  },
  {
    rno:6,
    name:"FFF",
    city:"Kolhapur",
    phone:6666
  },
]
return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{item.rno}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.phone}</td>

                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
        <ul>
          <li>User name: {prop.person.name} &nbsp; &nbsp;
            <span>Email Address : {prop.person.email}</span>
          </li>
        </ul>
    </div>
)
}
export default Funcomp