import React, { useEffect, useState } from "react";
import useProviderStore from "../../services/providerService";

const CategoryList = () => {
  const {
    categories,
    subCategories,
    getCategories,
    getSubCategories,
    loading,
  } = useProviderStore();

  const [selectedCatId, setSelectedCatId] = useState("");
  const [selectedSubCatId, setSelectedSubCatId] = useState("");

  useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  // Filter SubCategories by selectedCatId
  const filteredSubCategories = subCategories.filter(
    (sub) => sub.subCatId.toString().charAt(0) === selectedCatId
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      <label htmlFor="category">Category</label>
      <ul>
        <select
          id="category"
          className="btn"
          onChange={(e) => setSelectedCatId(e.target.value)}
        >
          <option value=""> Select Category</option>
          {categories.map((cat) => (
            <option
              key={cat.categoryId}
              value={cat.categoryId.toString().charAt(0)}
            >
              {cat.categoryName}
            </option>
          ))}
        </select>
      </ul>

      <label htmlFor="subCategory">SubCategory:</label>
      <ul>
        <select
          id="subCategory"
          className="btn"
          onChange={(e) => setSelectedSubCatId(e.target.value)}
        >
          {filteredSubCategories.map((sub) => (
            <option key={sub.subCatId}>{sub.subCatName}</option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default CategoryList;