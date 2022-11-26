import React from "react";

function EmployeeTable(props) {
  return (
    <div>
      <table className="table mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th
              onClick={props.handleToggle}
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              scope="col"
            >
              Name
            </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeList.length > 0 ? (
            props.employeeList.map((employee) => {
              return (
                <tr key={employee.login.uuid}>
                  <th>
                    <img src={employee.picture.thumbnail} alt="profPic" />
                  </th>
                  <td>
                    {employee.name.first} {employee.name.last}
                  </td>
                  <td>{employee.phone}</td>
                  <td>{employee.dob.date}</td>
                  <td>{employee.email}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;