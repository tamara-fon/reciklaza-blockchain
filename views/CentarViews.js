import React from 'react';
import PlayersViews from './PlayersViews.js';


const exports = {...PlayersViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Centar">
        <h2>Centar (centar)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
    render() {
      const {parent} = this.props;
      const {ctcInfoStr} = this.state || {};
      return (
        <div>
          Please paste the contract info to attach to:
          <br />
          <textarea spellCheck="false"
            className='ContractInfo'
            onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
            placeholder='{}'
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={() => parent.attach(ctcInfoStr)}
          >Attach</button>
        </div>
      );
    }
  }

  exports.Attaching = class extends React.Component {
    render() {
      return (
        <div>
          Attaching, please wait...
        </div>
      );
    }
  }
  
  exports.Cancellation = class extends React.Component {
    render() {
      return (
        <div>
          Odbili ste prijavu...
        </div>
      );
    }
  }

  exports.Transfer = class extends React.Component {
    render() {
      return (
        <div>
          Prijava je prihvacena, gradjanin je nagradjen...
        </div>
      );
    }
  }
  
  export default exports;
