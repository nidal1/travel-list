export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percents = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percents === 100
          ? 'You are ready to go'
          : `You have ${numItems} items on your list, and you already packed ${numPacked} ${percents}%`}
      </em>
    </footer>
  );
}
