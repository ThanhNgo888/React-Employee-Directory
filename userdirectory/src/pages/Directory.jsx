import React from "react";
import Form from "../components/Form/index";
import Table from "../components/Table/index";
import API from "../utils/API";

class Directory extends Component {
  state = {
    employeeAlpha: [],
    employeeZeta: [],
    search: "",
  };
  //===========================================================
  compomentDidMount() {
    API.search().then(res) => {
      this.setState({
        employeeAlpha: res.data.results,
        employeeZeta: res.data.results,
      });
    };
  }
  //===========================================================
  
}