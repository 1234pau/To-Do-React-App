const Footer = ({length}) => {
   
    return ( 
       < footer >
            <p>{length} {length === 0 ? "" : "List"} {length === 1 ? "Item" : "Items"}</p>
        </footer>
    )
}
export default Footer