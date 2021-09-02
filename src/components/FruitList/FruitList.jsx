const FruitList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
