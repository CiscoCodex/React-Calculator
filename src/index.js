import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Operator(props) {
  return (
    <button className="button-operator" onClick={props.onClick}>
      {props.operator}
    </button>
  )
}

class Calculate extends React.Component {
  renderOperator(i) {
    return(
      <Operator
        operator={i}
        onClick={() => this.props.onClick(i)}/>
    );
  }

  render() {
    return(
      <div>
        <table>
          <tr>
          <td>{this.renderOperator("-")}</td>
          <td>{this.renderOperator("+")}</td>
          <td>{this.renderOperator("=")}</td>
          </tr>
        </table>
      </div>
    );
  }
}

function Value(props) {
  return (
    <button className="button-number" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Number extends React.Component {
    renderValue(i) {
      return(
        <Value
          value={i}
          onClick={() => this.props.onClick(i)}/>
      );
    }

    createTable = () => {
      let table =[]

      // Outer loopto create parent
      for (let i = 0; i < 3; i++) {
        let children = []
        // Inner loop to create children
        for (let j = 1; j < 4; j++) {
          children.push(<td>{this.renderValue(j + (3 * i))}</td>)
        }

        // Create the parent and add the children
        table.push(<tr>{children}</tr>)
      }
      return table
    }

    render() {
      return (
          <div>
            <table>
              {this.createTable()}
            </table>
          </div>
      );
    }
}

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      solution: null
    }
  }

  handleNumberClick(i) {
    this.setState({
      input: this.state.input.concat(i),
      solution: 0
    });
  }

  render() {
    return (
      <div>
        <div>
        <Number onClick={i => this.handleNumberClick(i)}/>
        </div>
        <div>
        <Calculate onClick={i => this.handleNumberClick(i)}/>
        </div>
        <div className="solution">
          {this.state.input}
          <br/>
          {this.state.solution}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
