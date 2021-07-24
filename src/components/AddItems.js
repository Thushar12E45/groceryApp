import { useState } from 'react';

const AddItems = ({ addItem }) => {
  const [item, setItem] = useState('');
  const [noOfItems, setNoOfItems] = useState('');
  const [priceOfEachItem, setPriceOfEachItems] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!item || !noOfItems || !priceOfEachItem) {
      alert('Please fill all the data');
    }
    addItem({ item, noOfItems, priceOfEachItem });
    setItem('');
    setNoOfItems('');
    setPriceOfEachItems('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label> Item </label>
        <input type="text" required placeholder="Item Name" value={item} onChange={(e) => setItem(e.target.value)} />
      </div>
      <div>
        <label> Quantity </label>
        <input
          type="number"
          required
          placeholder="No. of Items"
          value={noOfItems}
          onChange={(e) => setNoOfItems(e.target.value)}
        />
      </div>
      <div>
        <label> Price of a unit </label>
        <input
          type="number"
          required
          placeholder="Price "
          value={priceOfEachItem}
          onChange={(e) => setPriceOfEachItems(e.target.value)}
        />
      </div>
      <button type="submit"> Add Item </button>
    </form>
  );
};

export default AddItems;
