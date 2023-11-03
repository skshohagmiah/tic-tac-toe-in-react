/* eslint-disable react/prop-types */


const Square = ({value,onclick}) => {
  return (
    <div>
        <button className="square" onClick={onclick}>{value}</button>
    </div>
  )
}

export default Square