import { Component } from "react";

class Classcomp extends Component
{
    constructor(name, city , phone)
    {
        super()
        this.name="ABC"
        this.city="Pune"
        this.phone=8600719189
    }
    render()
    {
        return(
            <>
            <h1>{this.props.msg}</h1>
            <h1>User name: {this.name}</h1>
            <h3>Address  :  {this.city}</h3>
            <h3>Phone number  : {this.phone}</h3>
            </>
        )
    }
}
export default Classcomp