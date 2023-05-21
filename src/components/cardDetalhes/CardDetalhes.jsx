/* eslint-disable react/prop-types */
import './styleCardDetalhes.css'

export default function CardDetalhes(props) {
  return (
    <div className="detalhe-container">
      <img className="detalhe-container-img" src={props.value.thumbnail} />
      <div className="detalhe-container-content">
        <p className="detalhe-container-content-title">{props.value.title}</p>
        <p className="detalhe-container-content-category">
          {props.value.category}
        </p>
        <p className="detalhe-container-content-price">{props.value.price}</p>
        <p className="detalhe-container-content-description">
          {props.value.description}
        </p>
      </div>
    </div>
  )
}
