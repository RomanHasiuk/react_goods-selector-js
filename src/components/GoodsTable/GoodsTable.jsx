import './GoodsTable.scss';
import { GoodItem } from '../GoodItem/GoodItem';

export const GoodsTable = ({ goods, selectedGood, onSelect, onRemove }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <GoodItem
          key={good}
          good={good}
          isSelected={good === selectedGood}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      ))}
    </tbody>
  </table>
);
