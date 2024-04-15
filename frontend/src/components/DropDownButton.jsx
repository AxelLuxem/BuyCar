const DropDownButton = ({ list, onChange }) => {
  const uniqueArr = list.filter((item, index, array) => {
    const iteamIndex = array.findIndex(
      (x) => item.value === x.value
    );
    return index === iteamIndex;
  });

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option>select an option</option>
      {uniqueArr.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

export default DropDownButton;
