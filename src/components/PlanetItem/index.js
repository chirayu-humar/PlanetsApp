// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  return (
    <div>
      <h1>{details.name}</h1>
      <img
        alt={`planet ${details.name}`}
        className="image"
        src={details.imageUrl}
      />
      <p>{details.description}</p>
    </div>
  )
}

export default PlanetItem
