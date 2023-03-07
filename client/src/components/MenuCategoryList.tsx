import React, { useState, useEffect } from 'react';

function MenuCategoryList() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getMenuCategories = async () => {
      try {
        const res = await fetch('http://localhost:5005/menu');
        const categories = await res.json();
        setData(categories);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getMenuCategories();
  }, []);

  return (
    <div>
      {Object.keys(data).map(category => (
        <div>{category}</div>
      ))}
    </div>
  );
}

export default MenuCategoryList;
