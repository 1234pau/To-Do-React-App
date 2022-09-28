
import ItemList from "./ItemList";

const Content = ({items, hendleCheck, hendleDelete}) => {
   
    return ( 
       <>
            {items.length ? (
            <ItemList 
                items={items}
                hendleCheck={hendleCheck}
                hendleDelete={hendleDelete}
            />
            ) : (
                <p>Your list is empty.</p>
            )}
        </>
    )
}
export default Content