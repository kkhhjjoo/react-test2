import React from 'react';
import BudgetItem from './BudgetItem';

const BudgetList = ({ items, onEdit, onDelete, onClear }) => (
  <div>
    {items.map((item) => (
      <BudgetItem
        key={item.id}
        item={item}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
    <button
      onClick={onClear}
      style={{
        background: '#8a9b5b',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: 4,
        fontWeight: 'bold',
        marginTop: 10,
        cursor: 'pointer',
      }}
    >
      목록 지우기 🗑️
    </button>
  </div>
);

export default BudgetList;
