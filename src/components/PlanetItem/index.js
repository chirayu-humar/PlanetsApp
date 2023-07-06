// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  return (
    <div>
      <p>{details.name}</p>
      <img className="image" src={details.imageUrl} />
      <p>{details.description}</p>
    </div>
  )
}

export default PlanetItem
