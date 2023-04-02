'reach 0.1';
'use strict';

const Player = {
  ...hasRandom,
  reportCancellation: Fun([], Null),
  reportTransfer: Fun([UInt], Null)

}

export const main = Reach.App(() => {
  const gradjanin = Participant('gradjanin', {
    ...Player,
    
    getPrijava: Fun([], UInt)
  });
  const centar = Participant('centar', {
    ...Player,
    acceptPrijava: Fun([UInt], Bool),

  });
  init();


  gradjanin.only(() => {
    const prijava_b = declassify(interact.getPrijava());
  })
  gradjanin.publish(prijava_b);
  commit();

  centar.only(() => { const prihvaceno = declassify(interact.acceptPrijava(prijava_b)); });
  centar.publish(prihvaceno);
   if (!prihvaceno) {
     commit();
     each([gradjanin, centar], () => interact.reportCancellation());

     exit();
   } else {
     commit();
   }
  
  centar.only(() => {const nagrada = 4})
  centar.publish(nagrada);
  commit();

  centar.pay(nagrada);
  
  transfer(nagrada).to(gradjanin)
  commit();

  each([gradjanin, centar], () => interact.reportTransfer(nagrada));
  exit();
});


  

