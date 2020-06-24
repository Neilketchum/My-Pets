import React, { Component } from 'react'
import Petlist from './Petlist'
import './PetDetails.css'
import {Link} from 'react-router-dom';
class PetDetail extends Component {
    render() {
        // console.log(this.props)
        let pet = this.props.pet;
        return (
   
                <div className="DogDetails row justify-content-center mt-5">
                    <div className="col-11 col-lg-8">
                        <div className="DogDetails-card card">
                            <img src={pet.src} alt="" />
                            <div className="card-body">
                                <div className="container">
                                    <h2 className="card-title align-center">
                                        {pet.name}
                                    </h2>
                                    <h4 className="card-subtitle textmuted ">
                                        {pet.age}   {pet.age === 1?'Year':'Years'} old
                                    </h4>
                                </div>
                            </div>
                        <ul className="list-group list-group-flush">
                            {pet.facts.map((fact,index)=>(
                                 <li className="list-group-item" key = {index}>{fact}</li>   
                            ))}
                        </ul>
                        <div className="card-body">
                            <Link to = '/pets' ><button className="btn btn-outline-info btn-block">Go Back</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
                 )
    }
}
export default PetDetail;