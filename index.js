import React from 'react';
import AppViews from './views/AppViews.js';
import GradjaninViews from './views/GradjaninViews.js';
import CentarViews from './views/CentarViews.js';
import {renderDOM, renderView} from './views/Render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const reach = loadStdlib(process.env);

//povezivanje na MyAlgo Wallet
import {ALGO_MyAlgoConnect as MyAlgoConnect} from "@reach-sh/stdlib";
reach.setWalletFallback(
    reach.walletFallback({
        providerEnv: "TestNet", 
        MyAlgoConnect
    })
)

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultNagrada: '3', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'GradjaninOrCentar'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'GradjaninOrCentar'});
  }
  async skipFundAccount() { this.setState({view: 'GradjaninOrCentar'}); }
  selectCentar() { this.setState({view: 'Wrapper', ContentView: Centar}); }
  selectGradjanin() { this.setState({view: 'Wrapper', ContentView: Gradjanin}); }
  render() { return renderView(this, AppViews); }
}

 class Gradjanin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {view: 'Deploy'};
  }
  async deploy() {
    this.setState({view: 'Deploying'});
    const ctc = this.props.acc.contract(backend);
    

    backend.gradjanin(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForCentar', ctcInfoStr});
  }
  async getPrijava() {
    const prijavaf = await new Promise(resolvePrijavaP => {
      this.setState({view: 'GetPrijava', playable: true, resolvePrijavaP });

    });
    this.setState({view: 'WaitingForResults', prijavaf});
    return prijavaf;
  }
  reportCancellation() {this.setState({view: 'Cancellation'});}
  reportTransfer() {this.setState({view: 'Transfer'}); }
 
  playPrijava(prijavaf){ this.state.resolvePrijavaP(prijavaf);}
  render() { return renderView(this, GradjaninViews); }
 }
 
 class Centar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.centar(ctc, this);
  }
  async acceptPrijava(prijavaf) { 
    if(prijavaf == 0){
      return true
    } else return false
   
    
  }
  reportCancellation() {this.setState({view: 'Cancellation'});}
  reportTransfer() {this.setState({view: 'Transfer'}); }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]});}
  render() { return renderView(this, CentarViews); }

 }
  renderDOM(<App />);
