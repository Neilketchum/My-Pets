import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Petlist from './Petlist'
import PetDetail from './PetDetail'
class Routes extends Component {
    render() {
        const getPet = props => {
            let name = props.match.params.name;
            let currPet = this.props.myPets.find(
                pet => pet.name.toLowerCase() === name.toLowerCase()
            );
            return <PetDetail {...props} pet={currPet} />
        }
        return (
            <Switch>
                <Route exact path='/pets/' render={() => <Petlist pet={this.props.myPets} />} />
                <Route exact path='/pets/:name' render={getPet} />
            </Switch>
        )
    }
}
export default Routes;
