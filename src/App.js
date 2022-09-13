import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from "react";


function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopinglist')));
    const [newItem, setNewItem]=useState('')
    const [search, setSearch]=useState('')

    const setAndSaveItems = (newItems) =>{
        setItems(newItems)
        localStorage.setItem('shopinglist', JSON.stringify(newItems))
    }
    const addItem=(item)=>{
        const id = items.length ? items[items.length-1].id+1 : 1;
        const myNewItem = {id, checked: false, item}
        const listItems = [...items, myNewItem]
        setAndSaveItems(listItems)
    }
    const hendleCheck=(id)=>{
        const listItems = items.map((item) => item.id === id ? {...item,
        checked: !item.checked} : item);
        setAndSaveItems(listItems)
    }

    const hendleDelete = (id)=>{
        const listItems = items.filter((item) => item.id !== id)
        setAndSaveItems(listItems)
    }

    const hendleSubmit=(e)=>{
        e.preventDefault()
        if(!newItem) return
        addItem(newItem)
        setNewItem('')
    }
    return ( 
        <div className = "App" >
          <Header />
          
          <AddItem 
            newItem={newItem}
            setNewItem={setNewItem}
            hendleSubmit={hendleSubmit}
          />
          <SearchItem 
            search={search}
            setSearch={setSearch}
          />
          <Content 
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            hendleCheck={hendleCheck}
            hendleDelete={hendleDelete}
          />
          <Footer length={items.length}/>
        </div>
    );
}

export default App;