import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, hendleCheck, hendleDelete}) => {
  return (
    <li className = "item">
        <input
            type="checkbox"
            onChange={() => hendleCheck(item.id)}
            checked={item.checked}
        />
        <label
            style={(item.checked) ? {textDecoration:'line-through'} : null}
            onDoubleClick={() => hendleCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt 
            onClick={() => hendleDelete(item.id)}
            role="button" 
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem