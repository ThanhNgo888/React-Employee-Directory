import React from "react";

function SearchForm(props) {
  return (
    <div className="row justify-content-center">
      <div className="row bg-dark">
        <form>
          <div className="form-inline">
            <div className="input-group input group-sm m1-3">
              <div className="input-group prepend inline"></div>
            </div>
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              placeholder="Search Employee"
              type="text"
              class="form-control"
              aria-label="small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;