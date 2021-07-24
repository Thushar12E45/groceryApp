import { useState } from 'react';

import { FaTimes, FaEdit } from 'react-icons/fa';

const Item = ({ itm, onDelete, onUpdate }) => {
  const { id } = itm;
  const [item, setItem] = useState(itm.item);
  const [noOfItems, setNoOfItems] = useState(itm.noOfItems);
  const [priceOfEachItem, setPriceOfEachItems] = useState(itm.priceOfEachItem);
  const [editContent,setEditContent] = useState(false)
  return (
    <tr onBlur={() => onUpdate({ id, item, noOfItems, priceOfEachItem })}>
      <td contentEditable={editContent}  onInput={(e) => setItem(e.currentTarget.innerText)}
      suppressContentEditableWarning >
        {itm.item}
      </td>
      <td contentEditable={editContent}  onInput={(e) => setNoOfItems(+e.currentTarget.innerText)}
      suppressContentEditableWarning >
        {itm.noOfItems}
      </td>
      <td contentEditable={editContent} onInput={(e) => setPriceOfEachItems(+e.currentTarget.innerText)}
      suppressContentEditableWarning >
        {itm.priceOfEachItem}
      </td>
      <td> {noOfItems * priceOfEachItem} </td>
      <td>
        <FaEdit style={{ color: 'green', cursor: 'pointer' }} onClick={ ()=> setEditContent((prevState)=> !prevState) } /> &ensp;
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(id)} />

      </td>
    </tr>
  );
};

export default Item;
