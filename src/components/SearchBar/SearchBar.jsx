export const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Filter by name..."
      />
    </div>
  );
};
