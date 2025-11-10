// class component example
import { Component } from "react";

class PersonInfo extends Component {
  render() {
    const { name = "", address, phone, email } = this.props;
    const initials = String(name)
      .split(" ")
      .map((n) => (n ? n[0] : ""))
      .join("")
      .toUpperCase();

    return (
      <div className="card person">
        <div className="avatar" aria-hidden>
          {initials}
        </div>
        <h2>{name}</h2>
        <div>Address: {address}</div>
        <div>Phone: {phone}</div>
        <div>Email: {email}</div>
      </div>
    );
  }
}

export default PersonInfo;
