import React, { useState } from 'react';

import 'bulma/css/bulma.css';
// import ''
import './App.scss';

import { Title } from './components/Title';
import { GoodsTable } from './components/GoodsTable';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelect = good => {
    setSelectedGood(good);
  };

  const handleClear = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <Title selectedGood={selectedGood} onClearSelection={handleClear} />
      <GoodsTable
        goods={goods}
        selectedGood={selectedGood}
        onSelect={handleSelect}
        onRemove={handleClear}
      />
    </main>
  );
};
