import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import TotalExpense from './TotalExpense';
import Alert from './Alert';

const BudgetCalculator = () => {
  const [items, setItems] = useState([
    { id: 1, name: '식비', cost: 10000 },
    { id: 2, name: '헬스 등록', cost: 20000 },
    { id: 3, name: '교통비', cost: 3000 },
  ]);
  const [editItem, setEditItem] = useState(null);
  const [alert, setAlert] = useState('');

  const handleAddOrEdit = (item) => {
    if (item.id) {
      setItems(items.map((i) => (i.id === item.id ? item : i)));
      setAlert('아이템이 수정되었습니다.');
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
      setAlert('아이템이 생성되었습니다.');
    }
    setEditItem(null);
    setTimeout(() => setAlert(''), 1500);
  };

  const handleEdit = (id) => {
    setEditItem(items.find((i) => i.id === id));
  };

  const handleDelete = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div style={{ background: '#e0a04b', minHeight: '100vh', padding: 20 }}>
      <Alert message={alert} />
      <h1>예산 계산기</h1>
      <BudgetForm onSubmit={handleAddOrEdit} editItem={editItem} />
      <BudgetList
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClear={handleClear}
      />
      <TotalExpense total={total} />
    </div>
  );
};

export default BudgetCalculator;
