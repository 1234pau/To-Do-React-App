import LineItem from "./LineItem";

const ItemList = ({items, hendleCheck, hendleDelete}) => {
  return (
    <ul>
        {items.map((item) =>(
            <LineItem
                key={item.id}
                item={item}
                hendleCheck={hendleCheck}
                hendleDelete={hendleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList