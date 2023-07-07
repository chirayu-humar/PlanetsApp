// Write your code here
import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="PlanetsOuter">
      <h1>PLANETS</h1>
      <Slider data-testid="planets">
        {planetsList.map(eachItem => (
          <PlanetItem details={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
