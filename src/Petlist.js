import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Petlist.css';
class Petlist extends Component {
    render() {
        return (
            <div class = "PetList">
                <h1 className='display-1 text-center mt-3 mb-5'>My Pets</h1>
              
                    <div className="row">
                        {this.props.pet.map(pet => (
                            <div class="col-lg-4 Pet text-center">
                                <img src={pet.src} alt={pet.name} className = 'mb-3' />
                                <br/>
                                <h3 className = 'mt-3'>
                        <Link className='underline' to={`/pets/${pet.name}`}>{pet.name}</Link>
                                </h3>
                              
                            </div>

                        ))}

                </div>
            </div>
        )
    }
}
export default Petlist;
