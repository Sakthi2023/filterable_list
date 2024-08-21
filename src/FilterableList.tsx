/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const FilterableList = () => {
  const list = ["phone", "laptop", "television", "tab"];
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilterItem] = useState(list);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSearchItem(value);
    const filterItems = list.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilterItem(filterItems);
  };

  return (
    <div className="flex m-16 flex-col gap-10">
      <h1>Filter List</h1>
      <input
        type="text"
        placeholder="search hear"
        value={searchItem}
        onChange={handleChange}
        className="w-40 h-5"
      />
      <ul>
        {filterItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
