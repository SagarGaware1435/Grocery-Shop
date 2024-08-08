let msg="Good morning all "
 function add(a,b)
{
    console.log(a+b);
}
class students
{
    constructor(rno,name)
    {
        this.rno=rno
        this.name=name
    }
    info()
    {
        return `Roll no : ${this.rno} Name : ${this.name}`
    }
}

let employee={
    id: 101,
    name:"Sagar",
    email: "sgaware383@gmail.com",
    phone:8600719189
}
let states=["Maharashtra", "Gujarat","Punjab","Rajasthan"]
export {msg,add,students,employee,states}