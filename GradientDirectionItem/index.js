// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, updateDirectionId} = props
  const {value, displayText} = gradientDetails

  const onClickDirection = () => {
    updateDirectionId(value)
  }
  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
