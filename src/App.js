import { useState } from 'react';
import AddItems from './components/AddItems';
import Items from './components/Items';

function App() {
  const [itemList, setItemList] = useState([
    {
      id: 1,
      item: 'Milk ',
      noOfItems: 2,
      priceOfEachItem: 20,
    },
    {
      id: 2,
      item: 'Curd',
      noOfItems: 4,
      priceOfEachItem: 25,
    },
  ]);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 1000000) + 1;
    const newItem = { id, ...item };
    setItemList([...itemList, newItem]);
  };

  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    const updatedList = itemList.map((item) =>
      item.id === updatedItem.id ? { ...updatedItem } : item
    );
    setItemList(updatedList);
  };

  return (
    <div className="App">
      <h1> Grocery List </h1>
      <AddItems addItem={addItem} />
      <Items items={itemList} onDelete={deleteItem} onUpdate={updateItem} />
    </div>
  );
}

export default App;
