
import ItemList from "./ItemList";

const Content = ({items, hendleCheck, hendleDelete}) => {
   
    return ( 
       < main >
            {items.length ? (
            <ItemList 
                items={items}
                hendleCheck={hendleCheck}
                hendleDelete={hendleDelete}
            />
            ) : (
                <p>Your list is empty.</p>
            )}
        </main>
    )
}
export default Content