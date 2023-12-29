import { useState } from "react";
import Appbar from "./Appbar";
import UserInput from "./UserInput";
import DisplayList from "./DisplayList";
import Summary from "./Summary";

export default function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Move to Trash 🗑️ Permanently?");
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Appbar />
      <UserInput onAddItems={handleNewItem} />
      <DisplayList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClear}
      />
      <Summary items={items} />
    </div>
  );
}
