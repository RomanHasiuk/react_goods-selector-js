import './Title.scss';

export const Title = ({ selectedGood, onClearSelection }) => (
  <h1 className="title is-flex is-align-items-center">
    {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
    {selectedGood && (
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={onClearSelection}
      />
    )}
  </h1>
);
