import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../utils/api';

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createCategory({ name: categoryName });
      if (response.success) {
        toast.success('Category created successfully!');
        setCategoryName('');
      }
    } catch (error) {
      toast.error('Failed to create category');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h2 className="text-xl font-bold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;