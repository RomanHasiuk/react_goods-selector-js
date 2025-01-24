import './GoodItem.scss';

export const GoodItem = ({ good, isSelected, onSelect, onRemove }) => (
  <tr
    data-cy="Good"
    className={isSelected ? 'has-background-success-light' : ''}
  >
    <td>
      {isSelected ? (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => onRemove()}
        >
          -
        </button>
      ) : (
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => onSelect(good)}
        >
          +
        </button>
      )}
    </td>
    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
