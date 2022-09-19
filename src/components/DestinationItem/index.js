// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {imgUrl, name} = destination

  return (
    <li className="destination-item-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
