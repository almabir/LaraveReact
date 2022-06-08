import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Procted(props) {
    let Com = props.Com;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-key'))
        navigate('/register');
       },[]);
       
  return (
    <div>
        <Com/>
    </div>
  )
}

export default Procted