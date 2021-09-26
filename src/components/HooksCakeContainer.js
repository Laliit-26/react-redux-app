import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buycake } from '../redux/Index';

function HooksCakeContainer() {
    const currstate = useSelector(state => state.numofcakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>number of cakes:{currstate}</h2>
            <button onClick={()=>dispatch(buycake())}>buy one</button>
        </div>
    )
}

export default HooksCakeContainer
