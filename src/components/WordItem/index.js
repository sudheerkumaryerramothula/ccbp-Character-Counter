import './index.css'

const WordItem = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li className="listItem">
      <p className="result">
        {word} : {word.length}
      </p>
    </li>
  )
}
export default WordItem
