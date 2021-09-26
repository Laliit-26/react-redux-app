import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../redux/cakes/CakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h2>number of cakes:{props.numofcakes}</h2>
      <button onClick={props.buycake}>buy cake</button>
        </div>
    )
}
const mapstatetoprops = state => {
    return {
        numofcakes:state.numofcakes
    }
}

const mapdispatchtoprops = dispatch => {
    return {
        buycake: () =>{dispatch(buycake())}
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(CakeContainer);

