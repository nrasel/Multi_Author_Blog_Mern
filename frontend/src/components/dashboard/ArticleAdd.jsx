import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_tag_category } from "../../store/actions/Dashboard/articleAction";

const ArticleAdd = () => {
  const dispatch = useDispatch();
  const { allTag, allCategory } = useSelector((state) => state.articleReducer);
  const [text, setText] = useState("");
  const editor = useRef();
  const config = {
    readonly: false,
  };

  useEffect(() => {
    dispatch(get_tag_category());
  }, []);

  return (
    <div className="add-article">
      <Helmet>
        <title>Article Add</title>
      </Helmet>
      <div className="add">
        <div className="title-show-article">
          <h2>Add Article</h2>
          <Link className="btn" to="/dashboard/all-article">
            All Article
          </Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Article title</label>
            <input
              type="text"
              name="title"
              placeholder="Article Title"
              className="form-control"
              id="title"
            />
            <p className="error">Please Provide article title</p>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Article Slug</label>
            <input
              type="text"
              className="form-control"
              placeholder="Article Slug"
              name="slug"
              id="slug"
            />
            <p className="error">Please Provide article slug</p>
          </div>
          <button className="btn">Update</button>
          <div className="form-group">
            <label htmlFor="categoryadd">Category</label>
            <select className="form-control" name="category" id="categoryadd">
              <option value="">--Select Article Category--</option>
              {allCategory.length > 0
                ? allCategory.map((c, index) => (
                    <option key={index} value={c.categorySlug}>
                      {c.categoryName}
                    </option>
                  ))
                : ""}
            </select>
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Category</label>
            <select className="form-control" name="tags" id="tags">
              <option value="">--Select Article Tag--</option>
              {allTag.length > 0
                ? allTag.map((t, index) => (
                    <option key={index} value={t.tagSlug}>
                      {t.tagName}
                    </option>
                  ))
                : ""}
            </select>
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group img-upload">
            <div className="upload">
              <label htmlFor="uploadImage">
                <BsCardImage />
              </label>
              <input type="file" id="uploadImage" />
            </div>
            <label htmlFor="articleText">Article Text</label>
            <JoditEditor
              ref={editor}
              value={text}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newText) => setText(newText)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <div className="image-select">
              <span>Upload Image</span>
              <label htmlFor="image">Select Image</label>
              <input
                type="file"
                className="form-control"
                name="image"
                id="image"
              />
            </div>
            <div className="image">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
            </div>
            <p className="error">Please Provide Article Image</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Add Article</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleAdd;
