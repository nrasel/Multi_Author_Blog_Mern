import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const EditCategory = () => {
  return (
    <div className="add-category">
      <Helmet>
        <title>Edit Category</title>
      </Helmet>
      <div className="added">
        <div className="title-show-article">
          <h2>Edit Category</h2>
          <Link className="btn" to="/dashboard/all-category">
            All Category
          </Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="category_name">Category Name</label>
            <input
              type="text"
              placeholder="Category Name"
              className="form-control"
              name="cat_name"
              id="category_name"
            />
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Category Description</label>
            <textarea
              className="form-control"
              name="cate_desc"
              id="category_desc"
              cols="30"
              rows="10"
              placeholder="Write Description.."
            ></textarea>
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Edit Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
