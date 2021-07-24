import Item from './Item';

const Items = ({ items, onDelete, onUpdate }) => (
  <table>
    <thead>
      <tr>
        <th> Items</th>
        <th> No of Items</th>
        <th> Price of each item</th>
        <th> Cost Price</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <Item key={item.id} itm={item} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td>Total Cost </td>
        <td />
        <td />
        <td>{items.reduce((totalCost, item) => totalCost + item.noOfItems * item.priceOfEachItem, 0)}</td>
        <td />
      </tr>
    </tfoot>
  </table>
);

export default Items;
