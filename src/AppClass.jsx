import React from "react";
import Button from "./components/Button";
import logo from "./logo.svg";
import "./App.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countText: "count is 0",
    };

    this.onClickCallback = this.onClickCallback.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.setState({
        ...this.state,
        countText: `count is ${this.state.count}`,
      });
    }
  }

  onClickCallback() {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  generateData() {
    return [{ a: 1 }, { b: 1 }, { c: 2 }];
  }

  render() {
    const data = this.generateData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React! from Class</p>

          <Button
            buttonText={this.state.countText}
            onClickCallback={this.onClickCallback}
            countHistory={data}
          />
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
