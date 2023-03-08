import React, { useState, useEffect } from 'react';
import { types } from '../';

function MenuCategoryScreen() {
  const [data, setData] = useState({});
  const [showCategory, setShowCategory] = useState();

  useEffect(() => {
    const getMenuCategories = async () => {
      try {
        const res = await fetch('http://localhost:5005/menu');
        const categories = await res.json();
        setData(categories);
      } catch (error) {
        console.error(error);
      }
    };
    getMenuCategories();
  }, []);

  const handleClick = (category: string) => {
    setShowCategory(data[category]);
  };

  console.log(data);

  return (
    <div>
      {Object.keys(data).map(category => (
        <div onClick={() => handleClick(category)}>{category}</div>
      ))}
      {showCategory && (
        <ul>
          {showCategory.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuCategoryScreen;
