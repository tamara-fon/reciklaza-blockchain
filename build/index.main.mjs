// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function centar(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for centar expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for centar expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v27, from: v86 } = txn1;
  ;
  const v92 = stdlib.protect(ctc1, await interact.acceptPrijava(v87), {
    at: './index.rsh:31:75:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:18:function exp)'],
    msg: 'acceptPrijava',
    who: 'centar'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v86, v92],
    evt_cnt: 1,
    funcNum: 1,
    lct: v88,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v36, from: v93 } = txn2;
      
      ;
      if (v94) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v36, from: v93 } = txn2;
  ;
  if (v94) {
    const txn3 = await (ctc.sendrecv({
      args: [v86, v93, stdlib.checkedBigNumberify('./index.rsh:42:38:decimal', stdlib.UInt_max, '4')],
      evt_cnt: 1,
      funcNum: 2,
      lct: v95,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:43:10:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v105], secs: v107, time: v106, didSend: v55, from: v104 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v105], secs: v107, time: v106, didSend: v55, from: v104 } = txn3;
    ;
    const v108 = stdlib.addressEq(v93, v104);
    stdlib.assert(v108, {
      at: './index.rsh:43:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'centar'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v86, v93, v105],
      evt_cnt: 0,
      funcNum: 3,
      lct: v106,
      onlyIf: true,
      out_tys: [],
      pay: [v105, []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v111, time: v110, didSend: v62, from: v109 } = txn4;
        
        sim_r.txns.push({
          amt: v105,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v86,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v111, time: v110, didSend: v62, from: v109 } = txn4;
    ;
    const v114 = stdlib.addressEq(v93, v109);
    stdlib.assert(v114, {
      at: './index.rsh:46:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'centar'
      });
    ;
    stdlib.protect(ctc2, await interact.reportTransfer(v105), {
      at: './index.rsh:51:58:application',
      fs: ['at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)'],
      msg: 'reportTransfer',
      who: 'centar'
      });
    
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:35:65:application',
      fs: ['at ./index.rsh:35:10:application call to [unknown function] (defined at: ./index.rsh:35:35:function exp)'],
      msg: 'reportCancellation',
      who: 'centar'
      });
    
    return;
    }
  
  
  
  };
export async function gradjanin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for gradjanin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for gradjanin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const v85 = stdlib.protect(ctc0, await interact.getPrijava(), {
    at: './index.rsh:26:53:application',
    fs: ['at ./index.rsh:25:17:application call to [unknown function] (defined at: ./index.rsh:25:21:function exp)'],
    msg: 'getPrijava',
    who: 'gradjanin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v85],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v87], secs: v89, time: v88, didSend: v27, from: v86 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v87], secs: v89, time: v88, didSend: v27, from: v86 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v36, from: v93 } = txn2;
  ;
  if (v94) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v105], secs: v107, time: v106, didSend: v55, from: v104 } = txn3;
    ;
    const v108 = stdlib.addressEq(v93, v104);
    stdlib.assert(v108, {
      at: './index.rsh:43:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'gradjanin'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v111, time: v110, didSend: v62, from: v109 } = txn4;
    ;
    const v114 = stdlib.addressEq(v93, v109);
    stdlib.assert(v114, {
      at: './index.rsh:46:10:dot',
      fs: [],
      msg: 'sender correct',
      who: 'gradjanin'
      });
    ;
    stdlib.protect(ctc2, await interact.reportTransfer(v105), {
      at: './index.rsh:51:58:application',
      fs: ['at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:32:function exp)'],
      msg: 'reportTransfer',
      who: 'gradjanin'
      });
    
    return;
    
    
    
    
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:35:65:application',
      fs: ['at ./index.rsh:35:10:application call to [unknown function] (defined at: ./index.rsh:35:35:function exp)'],
      msg: 'reportCancellation',
      who: 'gradjanin'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAECAyYCAQAAIjUAMRhBAa0pZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAChSSUMQABIJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDgUBbNf+ABKdlxLSwNP+IAW00A1cgIDEAEkSxIrIBNP+yCCOyEDQDVwAgsgezQgDhSCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFFzX9gASXTvcXNP0WULA0/jEAEkQ0/zT+UDT9FlAoSwFXAEhnSCU1ATIGNQJCAKpJIwxAAEtIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABA+/xjQ0/hZRBwhQsDT+QQAXNP8xAFAoSwFXAEBnSCQ1ATIGNQJCAFxCAD1IgaCNBogAoiI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v168","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T2","name":"v170","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v172","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v174","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62000d4160806001600160401b03601f1938849003601f8101821684019084821084831117620002cf5780859160409788948552833981010312620002e557835184810181811084821117620002cf5785528351815260208094015190848101918252436003558551906200007482620002ea565b600080925260049260ff845416620002b85760607f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f9189519033825284518a830152518a820152a1518015908115620002ab575b50156200029457346200027d578551620000e281620002ea565b3390526001948582554386558651923382850152818452878401848110878211176200026a57885283519586116200025757600254908782811c921680156200024c575b83831014620002395750601f8111620001ed575b508093601f8611600114620001855750509183949184939462000179575b50501b916000199060031b1c1916176002555b51610a3a9081620003078239f35b01519250388062000158565b600283528183209493928692918316915b88838310620001d25750505010620001b8575b505050811b016002556200016b565b015160001960f88460031b161c19169055388080620001a9565b85870151885590960195948501948793509081019062000196565b60028352818320601f870160051c8101918388106200022e575b601f0160051c019087905b828110620002225750506200013a565b84815501879062000212565b909150819062000207565b634e487b7160e01b845260229052602483fd5b91607f169162000126565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000c8565b875163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002cf5760405256fe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c9182631e93b0f1146107f3575081632a4607101461058d57816341712c0a146103dd5781637bf0667f146100fd5750806383230757146100df5763ab53f2c6146100715780610012565b346100db57816003193601126100db57815461008b6108b0565b91805193849283526020828185015284518093850152815b8381106100c457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a3565b5080fd5b50346100db57816003193601126100db576020906001549051908152f35b8383806003193601126100db5781815161011681610849565b528051926101238461087a565b80358452602093848101916024928335815260ff8254166103c7577f825a9ccfdfb1287f6bbf7f557926d7e91c3f46a7a55dbaa5b7e395530c27990f6060865133815285518a820152835188820152a1600293848754036103b3576101866108b0565b86818051810103126103af576101b5878051926101a28461087a565b6101ad8c8201610965565b845201610965565b948982019586525180159081156103a3575b501561038e57346103795784516001600160a01b03903390821603610363578751936101f285610895565b898552818b8601978b8952818b8801958d8752511680975251168752518252600389556001954387558851948b86015251168784015251606083015260608252608082019260018060401b0393838110858211176103515787528251938411610340575050610261845461080f565b601f8111610307575b508690601f83116001146102a857928293918392889461029d575b50501b916000199060031b1c19161790555b51908152f35b015192508880610285565b848752878720919083601f198116895b8b888383106102f057505050106102d7575b505050811b019055610297565b015160001960f88460031b161c191690558680806102ca565b8686015188559096019594850194879350016102b8565b61033090858852888820601f850160051c8101918a8610610336575b601f0160051c019061097e565b8761026a565b9091508190610323565b634e487b7160e01b88526041905286fd5b50634e487b7160e01b88526041905286fd5b875163100960cb60e01b81526012818701528390fd5b50855163100960cb60e01b8152601181850152fd5b50855163100960cb60e01b8152601081850152fd5b9050600154148a6101c7565b8780fd5b855163100960cb60e01b8152600f81850152fd5b845163100960cb60e01b8152600e818401528490fd5b90506020366003190112610589578282516103f781610849565b5281519061040482610849565b8035825260ff815416610572577fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e851583805133815284516020820152a1600384540361055b576104516108b0565b906060828051810103126105575783519061046b82610895565b61047760208401610965565b82526060610486868501610965565b936020840194855201519385830194855251801590811561054b575b5015610534578351340361051d5791516001600160a01b039290339084160361050657508480938193829351169051908282156104fd575bf1156104f3579060209181805581600155610297610995565b51903d90823e3d90fd5b506108fc6104da565b602490601786519163100960cb60e01b8352820152fd5b602490601686519163100960cb60e01b8352820152fd5b602490601586519163100960cb60e01b8352820152fd5b905060015414386104a2565b8480fd5b602490601484519163100960cb60e01b8352820152fd5b602490601384519163100960cb60e01b8352820152fd5b8280fd5b8383806003193601126100db578181516105a681610849565b5280516105b28161087a565b8335815260249384359081151582036105575760209586840192835260ff8254166107de577f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f16060865133815286518a8201528551151588820152a1600192838754036107c8576106216108b0565b9488868051810103126103af576106448988519761063e89610849565b01610965565b86525180159081156107bd575b50156107a75734610791575186901561077c57508451906106718261087a565b86825287820187815294516001600160a01b039081169283905233865260028089554386558751808b0194909452955116828701528582526106b282610895565b8151926001600160401b0384116103405750506106cf845461080f565b601f811161074e575b508690601f831160011461070957928293918392889461029d5750501b916000199060031b1c191617905551908152f35b848752878720919083601f198116895b8b8883831061073757505050106102d757505050811b019055610297565b868601518855909601959485019487935001610719565b61077690858852888820601f850160051c8101918a861061033657601f0160051c019061097e565b876106d8565b935050508180555561078c610995565b610297565b5090600d85519163100960cb60e01b8352820152fd5b5090600c85519163100960cb60e01b8352820152fd5b905084541489610651565b5090600b85519163100960cb60e01b8352820152fd5b90600a85519163100960cb60e01b8352820152fd5b8490346100db57816003193601126100db576020906003548152f35b90600182811c9216801561083f575b602083101461082957565b634e487b7160e01b600052602260045260246000fd5b91607f169161081e565b602081019081106001600160401b0382111761086457604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761086457604052565b606081019081106001600160401b0382111761086457604052565b6040519060006002546108c28161080f565b8085526001918083169081156109465750600114610900575b5050829003601f01601f191682016001600160401b0381118382101761086457604052565b60026000908152602093509183600080516020610a0e8339815191525b838510610932575050505083010138806108db565b80548886018301529301928490820161091d565b919250506020925060ff191682850152151560051b83010138806108db565b51906001600160a01b038216820361097957565b600080fd5b818110610989575050565b6000815560010161097e565b6109a060025461080f565b806109a85750565b601f81116001146109bb57506000600255565b6002600052610a0090601f0160051c600080516020610a0e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61097e565b600060208120816002555556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 3393,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:34:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "centar": centar,
  "gradjanin": gradjanin
  };
export const _APIs = {
  };
