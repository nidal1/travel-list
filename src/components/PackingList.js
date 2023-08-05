import { useState } from 'react';
import { Item } from './Item';

export function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onDeleteItems,
}) {
  const [orderBy, setOrderBy] = useState('input');

  let sortedItems;

  if (orderBy === 'input') sortedItems = items;

  if (orderBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (orderBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onDeleteItems}>Clear list</button>
      </div>
    </div>
  );
}
