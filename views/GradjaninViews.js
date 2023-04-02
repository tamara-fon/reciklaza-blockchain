import React from 'react';
import PlayersViews from './PlayersViews.js';


const exports = {...PlayersViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
      const {content} = this.props;
      return (
        <div className="Gradjanin">
          <h2>Gradjanin (gradjanin)</h2>
          {content}
        </div>
      );
    }
  }

  exports.Deploy = class extends React.Component {
    render() {
      const {parent} = this.props;
      return (
        <div>
          Dobrodosli, pokrenite ugovor
          <br />
          <button
            onClick={() => parent.deploy()}
          >Pokreni</button>
        </div>
      );
    }
  }

  exports.Deploying = class extends React.Component {
    render() {
      return (
        <div>Pokretanje...</div>
      );
    }
  }

  exports.WaitingForCentar = class extends React.Component {
    async copyToClipboard(button) {
      const {ctcInfoStr} = this.props;
      navigator.clipboard.writeText(ctcInfoStr);
      const origInnerHTML = button.innerHTML;
      button.innerHTML = 'Copied!';
      button.disabled = true;
      await sleep(1000);
      button.innerHTML = origInnerHTML;
      button.disabled = false;
    }
    render() {
        const {ctcInfoStr} = this.props;
        return (
          <div>
            Waiting for Centar to join...
            <br /> Please give them this contract info:
            <pre className='ContractInfo'>
              {ctcInfoStr}
            </pre>
            <button
              onClick={(e) => this.copyToClipboard(e.currentTarget)}
            >Copy to clipboard</button>
          </div>
        )
      }
    }
  exports.GetPrijava = class extends React.Component{
    render() {
      const { parent, playable, prijavaf} = this.props;
      return (
        <div>
          {prijavaf ? 'neuspjesno slanje' : '' }
          <br />
          {!playable ? 'Please wait...' : ''}
          <br /> 
          <button 
          disabled={!playable}
          onClick={() => parent.playPrijava(0)}
          >0</button>
          <button 
          disabled={!playable}
          onClick={()=> parent.playPrijava(1)}
          >1</button>
        </div>
      )
    }
 
  }

  exports.WaitingForResults = class extends React.Component {
    render() {
      return (
        <div>
          Waiting for results...
        </div>
      );
    }
  }

  exports.Cancellation = class extends React.Component {
    render() {
      return (
        <div>
          Nazalost, vasa prijava je odbijena...
        </div>
      );
    }
  }

  exports.Transfer = class extends React.Component {
    render() {
      return (
        <div>
          Prijava je prihvacena! Nagradjeni ste...
        </div>
      );
    }
  }

    export default exports;
