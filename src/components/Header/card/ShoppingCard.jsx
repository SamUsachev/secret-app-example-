import React, { useState } from 'react';
import { defaultItems } from './data';
import { ItemsTable } from './ItemsTable';

export const ShoppingCard = () => {
  const [items, setItems] = useState(defaultItems);
  const result = items.reduce(
    (perviousValue, currentItem) =>
      perviousValue + currentItem.count * currentItem.price,
    0
  );
  const FinalPrice = (
    <div className="result-panel">
      <span>
        Общая стоимость: <span className="value">{result}</span> $.
      </span>
      <button>Оформить</button>
    </div>
  );
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleIncreaceCount = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.count++;
        }
        return item;
      })
    );
  };

  const handleDecreaceCount = (id, count) => {
    if (count < 2) {
      handleRemoveItem(id);
    } else {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            item.count--;
          }
          return item;
        })
      );
    }
  };
  return (
    <div>
      <h1>Корзина</h1>
      {!!items.length && (
        <ItemsTable
          items={items}
          removeItem={handleRemoveItem}
          increaceCount={handleIncreaceCount}
          decreaceCount={handleDecreaceCount}
        />
      )}
      {!items.length && (
        <div className="empty-text">У вас нет товаров в корзине</div>
      )}

      {!!items.length && FinalPrice}
    </div>
  );
};
