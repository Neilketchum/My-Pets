import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        const petLinks = this.props.pets.map((pet,index)=>(
            <li className="nav-item">
                <NavLink className = 'nav-link' exact to = {`/pets/${pet.name}`}>
                    {pet.name}
                </NavLink>
            </li>
           
        ))
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link exact to = '/pets' className = 'navbar-brand'>Pet</Link>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navBarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navBarNav">
                        <ul class="navbar-nav ml-auto">
                          <NavLink exact to = '/pets' className = 'nav-link'>Home</NavLink>
                          {petLinks}
                        </ul>
                       
                    </div>
            </nav>
        )
    }
}
export default Navbar