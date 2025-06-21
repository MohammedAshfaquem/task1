import React from 'react'

function Country(props) {
  return (
    <div>
       <Disrtict city={props.city} />
    </div>
  )
}

function Disrtict(props) {
  return (
 
       <City city={props.city}/>
    
  )
}
function City(props) {
  return (
    <div>
        {props.city}
    </div>
  )
}

export default Country;
