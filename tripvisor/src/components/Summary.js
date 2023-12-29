export default function Summary({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>⦿ Start adding items to your packing list ⦿</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {numPercentage === 100
        ? "You are ready to go for the Trip 🚀"
        : `You have ${
            numItems === 1 ? `${numItems} item` : `${numItems} items`
          }  ☺️ in the list and ${numPacked} items are packed.
        ${numPercentage}%`}
    </footer>
  );
}
