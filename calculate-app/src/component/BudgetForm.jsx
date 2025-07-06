import React, { useState, useEffect } from 'react';

const BudgetForm = ({ onSubmit, editItem }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setCost(editItem.cost);
    } else {
      setName('');
      setCost('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !cost) return;
    onSubmit({
      id: editItem ? editItem.id : undefined,
      name,
      cost: Number(cost),
    });
    setName('');
    setCost('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#fff',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
      }}
    >
      <div style={{ display: 'flex', gap: 20, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <label style={{ color: '#e0a04b' }}>지출 항목</label>
          <input
            type='text'
            placeholder='예) 렌트비'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '2px solid #e0a04b',
              outline: 'none',
              fontSize: 16,
              marginTop: 5,
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ color: '#e0a04b' }}>비용</label>
          <input
            type='number'
            placeholder='예) 100'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              borderBottom: '2px solid #e0a04b',
              outline: 'none',
              fontSize: 16,
              marginTop: 5,
            }}
          />
        </div>
      </div>
      <button
        type='submit'
        style={{
          background: '#8a9b5b',
          color: '#fff',
          padding: '10px 30px',
          border: 'none',
          borderRadius: 4,
          fontWeight: 'bold',
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        {editItem ? '수정' : 'SUBMIT'}{' '}
        <span style={{ fontWeight: 'bold' }}>{'>'}</span>
      </button>
    </form>
  );
};

export default BudgetForm;
