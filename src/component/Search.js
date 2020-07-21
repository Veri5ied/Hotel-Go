import React from "react";

const Search = () => {
  return (
    <div>
      <form className="form-inline mt-2 float-center row justify-content-center">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="search"
            className="form-control"
            id="search"
            placeholder="Search Hotel"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Launch Search
        </button>
      </form>
    </div>
  );
};

export default Search;
