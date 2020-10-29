import React from 'react'

let Country = (props) => {
    return (
      <div>
        {props.country.questions.map((question) => {
          return (<h6>{question}</h6>)
        })}
      </div>
    )
}

export default Country;