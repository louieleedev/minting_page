import React from "react";
import "./IncrementDecrement.css";

class IncrementDecrement extends React.Component {
  state = { counter: this.props.min };

  handleDecrement = () => {
    let value = this.validateValue(this.state.counter - this.props.step);

    this.setState({ counter: value });
  };

  handleIncrement = () => {
    let value = this.validateValue(this.state.counter + this.props.step);

    this.setState({ counter: value });
  };

  handleChange = (e) => {
    let value = e.target.value ? parseInt(e.target.value) : 0;

    value = this.validateValue(value);

    this.setState({ counter: value });
  };

  validateValue(value) {
    if (value < this.props.min) {
      value = this.props.min;
    }

    if (value > this.props.max) {
      value = this.props.max;
    }

    return value;
  }

  render() {
    return (
      <div className="increment-decrement ">
        {/**increment-decrement */}
        <button
          className="count-btn count-down"
          type="button"
          onClick={this.handleDecrement}
        >
          &ndash;
        </button>
        {/** Type: number */}

        <input
          type="number"
          name="counter"
          className="counter"
          value={this.state.counter}
          onChange={this.handleChange}
        />

        <button
          className="count-btn count-up"
          type="button"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

IncrementDecrement.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
};

export default IncrementDecrement;
