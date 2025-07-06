import React from 'react';

const BudgetItem = ({ item, onEdit, onDelete }) => (
  <div
    style={{
      background: '#fff',
      marginBottom: 10,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      padding: 10,
    }}
  >
    <div style={{ flex: 1, fontWeight: 'bold' }}>{item.name}</div>
    <div style={{ width: 100, textAlign: 'right' }}>
      {item.cost.toLocaleString()} 원
    </div>
    <button
      onClick={() => onEdit(item.id)}
      style={{
        background: 'none',
        border: 'none',
        marginLeft: 10,
        cursor: 'pointer',
      }}
    >
      ✏️
    </button>
    <button
      onClick={() => onDelete(item.id)}
      style={{
        background: 'none',
        border: 'none',
        marginLeft: 5,
        cursor: 'pointer',
      }}
    >
      🗑️
    </button>
  </div>
);

export default BudgetItem;
