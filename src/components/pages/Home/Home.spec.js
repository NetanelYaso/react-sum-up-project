import React    from "react";
import template from "./Home.jsx";

class Home extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Home;
