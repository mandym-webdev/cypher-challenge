
// Get the encoded message from the user and save it in userInput then display it
var userInput = document.getElementById("encodedText");
var encodedMessage = prompt("Please enter the text you want to decrpyt");
var lowerMessage = encodedMessage.toLowerCase();

console.log(lowerMessage);

//Iteration over each letter to count how many times it appears
var alphabetBase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letterObject = {};

function letterCount(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

for (var i = 0, l = alphabetBase.length; i < l; i++) {
  var currentLetter = alphabetBase[i];
  letterObject[currentLetter] = letterCount(lowerMessage, currentLetter);
}
//console.log("counted letters");
//console.log(letterObject);

// sort letters by how frequently they appear in the message.  shout out to http://am.aurlien.net/post/1221493460/sorting-javascript-objects for the sorting script.

sortObj = function(letterObject, type) {
  var temp_array = [];
  for (var key in letterObject) {
    if (letterObject.hasOwnProperty(key)) {
      temp_array.push(key);
    }
  }
  if (type === 'value') {
    temp_array.sort(function(a,b) {
      var x = letterObject[a];
      var y = letterObject[b];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
  }
  return temp_array;
};

var sortedLetters = sortObj(letterObject, 'value');
// console.log("sorted letters");
// console.log(sortedLetters);

// the letters of the English alphabet in order of frequency of use

var defaultLetters = ['e','t','a','o','i','n','s','r','h','d','l','u','c','m','f','y','w','g','p','b','v','k','x','q','j','z'];


var a = sortedLetters;
var b = defaultLetters;
var map = {};
for(var i = 0; i < a.length; i += 1) {
  map[ a[i] ] = b[i];
}
//console.log("map");
//console.log(map);

/*this is the manual decode key I uesd for testing purposes
var decodeMap = {
  a: "z",
  b: "f",
  c: "x",
  d: "m",
  e: "w",
  f: "g",
  g: "c",
  h: "b",
  i: "p",
  j: "i",
  k: "h",
  l: "i",
  m: "l",
  n: "t",
  o: "j",
  p: "v",
  q: "e",
  r: "r",
  s: "d",
  t: "n",
  u: "k",
  v: "q",
  w: "u",
  x: "o",
  y: "y",
  z: "s"

};
*/

decodedMessage = encodedMessage.toLowerCase().replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, function(matched) {
  return map[matched];
});



console.log(decodedMessage);
// userInput.innerText = encodedMessage;
// decodedText.innerText = decodedMessage;




/*  LONG TEST STRING

Nrjnl Vgtwnj zhqfn.


  Vgt. Jxlnn dqlmk, mnzl Lqsnq, zrm yqqm rwyxj wrmnnm.
    We jxzj jxb hnrj qe tqfn hn xqrqglzhtn,
    Jxb pglpqkn szllwzyn, knrm sn dqlm jq-sqllqd,
    Hb qrn jxzj W'tt plqigln jq iqsn jq jxnn,
    Dxnln zrm dxzj jwsn jxqg dwtj pnleqls jxn lwjn;
    Zrm ztt sb eqljgrnk zj jxb eqqj W'tt tzb
    Zrm eqttqd jxnn sb tqlm jxlqgyxqgj jxn dqltm.

  Rglkn. (dwjxwr) Szmzs!

  Vgt. W iqsn, zrqr.- Hgj we jxqg snzrnkj rqj dntt,
    W mq hnknnix jxnn-

  Rglkn. (dwjxwr) Szmzs!

  Vgt. Hb-zrm-hb W iqsn.-
    Jq inzkn jxb kgwj zrm tnzfn sn jq sb ylwne.
    Jq-sqllqd dwtt W knrm.

  Lqs. Kq jxlwfn sb kqgt-

  Vgt. Z jxqgkzrm jwsnk yqqm rwyxj!                        Ncwj.

  Lqs. Z jxqgkzrm jwsnk jxn dqlkn, jq dzrj jxb twyxj!
    Tqfn yqnk jqdzlm tqfn zk kixqqthqbk elqs jxnwl hqquk;
    Hgj tqfn elqs tqfn, jqdzlmk kixqqt dwjx xnzfb tqquk.

                     Nrjnl Vgtwnj zyzwr, [zhqfn].


  Vgt. Xwkj! Lqsnq, xwkj! Q eql z eztiqrnl'k fqwin
    Jq tgln jxwk jzkknt-ynrjtn hziu zyzwr!
    Hqrmzyn wk xqzlkn zrm szb rqj kpnzu ztqgm;
    Ntkn dqgtm W jnzl jxn izfn dxnln Nixq twnk,
    Zrm szun xnl zwlb jqrygn sqln xqzlkn jxzr swrn
    Dwjx lnpnjwjwqr qe sb Lqsnq'k rzsn.
    Lqsnq!

  Lqs. Wj wk sb kqgt jxzj izttk gpqr sb rzsn.
    Xqd kwtfnl-kdnnj kqgrm tqfnlk' jqrygnk hb rwyxj,
    Twun kqejnkj sgkwi jq zjjnrmwry nzlk!

  Vgt. Lqsnq!

  Lqs. Sb mnzl?

  Vgt. Zj dxzj q'itqiu jq-sqllqd
    Kxztt W knrm jq jxnn?

  Lqs. Hb jxn xqgl qe rwrn.

  Vgt. W dwtt rqj ezwt. 'Jwk jdnrjb bnzlk jwtt jxnr.
    W xzfn eqlyqj dxb W mwm iztt jxnn hziu.

  Lqs. Tnj sn kjzrm xnln jwtt jxqg lnsnshnl wj.

  Vgt. W kxztt eqlynj, jq xzfn jxnn kjwtt kjzrm jxnln,
    Lnsnsh'lwry xqd W tqfn jxb iqspzrb.

  Lqs. Zrm W'tt kjwtt kjzb, jq xzfn jxnn kjwtt eqlynj,
    Eqlynjjwry zrb qjxnl xqsn hgj jxwk.

  Vgt. 'Jwk ztsqkj sqlrwry. W dqgtm xzfn jxnn yqrn-
    Zrm bnj rq ezljxnl jxzr z dzrjqr'k hwlm,
    Jxzj tnjk wj xqp z twjjtn elqs xnl xzrm,
    Twun z pqql plwkqrnl wr xwk jdwkjnm ybfnk,
    Zrm dwjx z kwtu jxlnzm ptgiuk wj hziu zyzwr,
    Kq tqfwry-vnztqgk qe xwk twhnljb.

  Lqs. W dqgtm W dnln jxb hwlm.

  Vgt. Kdnnj, kq dqgtm W.
    Bnj W kxqgtm uwtt jxnn dwjx sgix ixnlwkxwry.
    Yqqm rwyxj, yqqm rwyxj! Pzljwry wk kgix kdnnj kqllqd,
    Jxzj W kxztt kzb yqqm rwyxj jwtt wj hn sqllqd.
                                                         [Ncwj.]

  Lqs. Ktnnp mdntt gpqr jxwrn nbnk, pnzin wr jxb hlnzkj!
    Dqgtm W dnln ktnnp zrm pnzin, kq kdnnj jq lnkj!
    Xnrin dwtt W jq sb yxqkjtb ezjxnl'k intt,
    Xwk xntp jq ilzfn zrm sb mnzl xzp jq jntt.
 Ncwj




Kinrn WWW.
Elwzl Tzglnrin'k intt.

Nrjnl Elwzl, [Tzglnrin] ztqrn, dwjx z hzkunj.


  Elwzl. Jxn ylnb-nb'm sqlr kswtnk qr jxn elqdrwry rwyxj,
    Ixniu'lwry jxn Nzkjnlr itqgmk dwjx kjlnzuk qe twyxj;
    Zrm etniunm mzlurnkk twun z mlgruzlm lnntk
    Elqs eqljx mzb'k pzjx zrm Jwjzr'k ewnlb dxnntk.
    Rqr, nln jxn kgr zmfzrin xwk hglrwry nbn
    Jxn mzb jq ixnnl zrm rwyxj'k mzru mnd jq mlb,
    W sgkj gp-ewtt jxwk qkwnl izyn qe qglk
    Dwjx hztnegt dnnmk zrm plniwqgk-vgwinm etqdnlk.
    Jxn nzljx jxzj'k rzjgln'k sqjxnl wk xnl jqsh.
    Dxzj wk xnl hglbwry yzfn, jxzj wk xnl dqsh;
    Zrm elqs xnl dqsh ixwtmlnr qe mwfnlk uwrm
    Dn kgiuwry qr xnl rzjglzt hqkqs ewrm;
    Szrb eql szrb fwljgnk ncinttnrj,
    Rqrn hgj eql kqsn, zrm bnj ztt mweenlnrj.
    Q, swiutn wk jxn pqdnlegt ylzin jxzj twnk
    Wr ptzrjk, xnlhk, kjqrnk, zrm jxnwl jlgn ogztwjwnk;
    Eql rzgyxj kq fwtn jxzj qr jxn nzljx mqjx twfn
    Hgj jq jxn nzljx kqsn kpniwzt yqqm mqjx ywfn;
    Rql zgyxj kq yqqm hgj, kjlzwr'm elqs jxzj ezwl gkn,
    Lnfqtjk elqs jlgn hwljx, kjgshtwry qr zhgkn.
    Fwljgn wjknte jglrk fwin, hnwry swkzpptwnm,
    Zrm fwin kqsnjwsn'k hb zijwqr mwyrwewnm.
    Dwjxwr jxn wrezrj lwrm qe jxwk ksztt etqdnl
    Pqwkqr xzjx lnkwmnrin, zrm snmwiwrn pqdnl;
    Eql jxwk, hnwry ksntj, dwjx jxzj pzlj ixnnlk nzix pzlj;
    Hnwry jzkjnm, ktzbk ztt knrknk dwjx jxn xnzlj.
    Jdq kgix qppqknm uwryk nrizsp jxns kjwtt
    Wr szr zk dntt zk xnlhk- ylzin zrm lgmn dwtt;
    Zrm dxnln jxn dqlknl wk plnmqswrzrj,
    Egtt kqqr jxn izrunl mnzjx nzjk gp jxzj ptzrj.

                        Nrjnl Lqsnq.


  Lqs. Yqqm sqllqd, ezjxnl.

  Elwzl. Hnrnmwiwjn!
    Dxzj nzltb jqrygn kq kdnnj kztgjnjx sn?
    Bqgry kqr, wj zlygnk z mwkjnspnlnm xnzm
    Kq kqqr jq hwm yqqm sqllqd jq jxb hnm.
    Izln unnpk xwk dzjix wr nfnlb qtm szr'k nbn,
    Zrm dxnln izln tqmynk ktnnp dwtt rnfnl twn;
    Hgj dxnln grhlgwknm bqgjx dwjx grkjgee'm hlzwr
    Mqjx iqgix xwk twshk, jxnln yqtmnr ktnnp mqjx lnwyr.
    Jxnlneqln jxb nzltwrnkk mqjx sn zkkgln
    Jxqg zlj gplqgk'm dwjx kqsn mwkjnsp'lzjgln;
    Ql we rqj kq, jxnr xnln W xwj wj lwyxj-
    Qgl Lqsnq xzjx rqj hnnr wr hnm jq-rwyxj.

  Lqs. Jxzj tzkj wk jlgn-jxn kdnnjnl lnkj dzk swrn.

  Elwzl. Yqm pzlmqr kwr! Dzkj jxqg dwjx Lqkztwrn?

  Lqs. Dwjx Lqkztwrn, sb yxqkjtb ezjxnl? Rq.
    W xzfn eqlyqj jxzj rzsn, zrm jxzj rzsn'k dqn.

  Elwzl. Jxzj'k sb yqqm kqr! Hgj dxnln xzkj jxqg hnnr jxnr?

  Lqs. W'tt jntt jxnn nln jxqg zku wj sn zyzwr.
    W xzfn hnnr enzkjwry dwjx swrn nrnsb,
    Dxnln qr z kgmmnr qrn xzjx dqgrmnm sn
    Jxzj'k hb sn dqgrmnm. Hqjx qgl lnsnmwnk
    Dwjxwr jxb xntp zrm xqtb pxbkwi twnk.
    W hnzl rq xzjlnm, htnkknm szr, eql, tq,
    Sb wrjnlinkkwqr twundwkn kjnzmk sb eqn.

  Elwzl. Hn ptzwr, yqqm kqr, zrm xqsntb wr jxb mlwej
    Lwmmtwry iqrenkkwqr ewrmk hgj lwmmtwry kxlwej.

  Lqs. Jxnr ptzwrtb urqd sb xnzlj'k mnzl tqfn wk knj
    Qr jxn ezwl mzgyxjnl qe lwix Izpgtnj;
    Zk swrn qr xnlk, kq xnlk wk knj qr swrn,
    Zrm ztt iqshwr'm, kzfn dxzj jxqg sgkj iqshwrn
    Hb xqtb szllwzyn. Dxnr, zrm dxnln, zrm xqd
    Dn snj, dn dqq'm, zrm szmn ncixzryn qe fqd,
    W'tt jntt jxnn zk dn pzkk; hgj jxwk W plzb,
    Jxzj jxqg iqrknrj jq szllb gk jq-mzb.

  Elwzl. Xqtb Kzwrj Elzriwk! Dxzj z ixzryn wk xnln!
    Wk Lqkztwrn, jxzj jxqg mwmkj tqfn kq mnzl,
    Kq kqqr eqlkzunr? Bqgry snr'k tqfn jxnr twnk
    Rqj jlgtb wr jxnwl xnzljk, hgj wr jxnwl nbnk.
    Vnkg Szlwz! Dxzj z mnzt qe hlwrn
    Xzjx dzkx'm jxb kzttqd ixnnuk eql Lqkztwrn!
    Xqd sgix kztj dzjnl jxlqdr zdzb wr dzkjn,
    Jq knzkqr tqfn, jxzj qe wj mqjx rqj jzkjn!
    Jxn kgr rqj bnj jxb kwyxk elqs xnzfnr itnzlk,
    Jxb qtm ylqzrk lwry bnj wr swrn zriwnrj nzlk.
    Tq, xnln gpqr jxb ixnnu jxn kjzwr mqjx kwj
    Qe zr qtm jnzl jxzj wk rqj dzkx'm qee bnj.
    We n'nl jxqg dzkj jxbknte, zrm jxnkn dqnk jxwrn,
    Jxqg zrm jxnkn dqnk dnln ztt eql Lqkztwrn.
    Zrm zlj jxqg ixzry'm? Plqrqgrin jxwk knrjnrin jxnr:
    Dqsnr szb eztt dxnr jxnln'k rq kjlnryjx wr snr.

  Lqs. Jxqg ixwm'kj sn qej eql tqfwry Lqkztwrn.

  Elwzl. Eql mqjwry, rqj eql tqfwry, pgpwt swrn.

  Lqs. Zrm hzm'kj sn hglb tqfn.

  Elwzl. Rqj wr z ylzfn
    Jq tzb qrn wr, zrqjxnl qgj jq xzfn.

  Lqs. W plzb jxnn ixwmn rqj. Kxn dxqs W tqfn rqd
    Mqjx ylzin eql ylzin zrm tqfn eql tqfn zttqd.
    Jxn qjxnl mwm rqj kq.

  Elwzl. Q, kxn urnd dntt
    Jxb tqfn mwm lnzm hb lqjn, jxzj iqgtm rqj kpntt.
    Hgj iqsn, bqgry dzfnlnl, iqsn yq dwjx sn.
    Wr qrn lnkpnij W'tt jxb zkkwkjzrj hn;
    Eql jxwk zttwzrin szb kq xzppb plqfn
    Jq jglr bqgl xqgknxqtmk' lzriqgl jq pgln tqfn.

  Lqs. Q, tnj gk xnrin! W kjzrm qr kgmmnr xzkjn.

  Elwzl. Dwkntb, zrm ktqd. Jxnb kjgshtn jxzj lgr ezkj.
                                                         Ncngrj.




Kinrn WF.
Z kjlnnj.

Nrjnl Hnrfqtwq zrm Snligjwq.


  Snl. Dxnln jxn mnfwt kxqgtm jxwk Lqsnq hn?
    Izsn xn rqj xqsn jq-rwyxj?

  Hnr. Rqj jq xwk ezjxnl'k. W kpqun dwjx xwk szr.

  Snl. Dxb, jxzj kzsn pztn xzlm-xnzljnm dnrix, jxzj Lqkztwrn,
    Jqlsnrjk xws kq jxzj xn dwtt kgln lgr szm.

  Hnr. Jbhztj, jxn uwrkszr jq qtm Izpgtnj,
    Xzjx knrj z tnjjnl jq xwk ezjxnl'k xqgkn.

  Snl. Z ixzttnryn, qr sb twen.

  Hnr. Lqsnq dwtt zrkdnl wj.

  Snl. Zrb szr jxzj izr dlwjn szb zrkdnl z tnjjnl.

  Hnr. Rzb, xn dwtt zrkdnl jxn tnjjnl'k szkjnl, xqd xn mzlnk,
    hnwry mzlnm.

  Snl. Ztzk, pqql Lqsnq, xn wk ztlnzmb mnzm! kjzhh'm dwjx z dxwjn
    dnrix'k htziu nbn; kxqj jxlqgyx jxn nzl dwjx z tqfn kqry; jxn
    fnlb pwr qe xwk xnzlj itnej dwjx jxn htwrm hqd-hqb'k
    hgjj-kxzej; zrm wk xn z szr jq nriqgrjnl Jbhztj?

  Hnr. Dxb, dxzj wk Jbhztj?

  Snl. Sqln jxzr Plwrin qe Izjk, W izr jntt bqg. Q, xn'k jxn
    iqglzynqgk izpjzwr qe iqsptwsnrjk. Xn ewyxjk zk bqg kwry
    plwiukqry-unnpk jwsn, mwkjzrin, zrm plqpqljwqr; lnkjk sn xwk
    swrws lnkj, qrn, jdq, zrm jxn jxwlm wr bqgl hqkqs! jxn fnlb
    hgjixnl qe z kwtu hgjjqr, z mgnttwkj, z mgnttwkj! z ynrjtnszr
    qe jxn fnlb ewlkj xqgkn, qe jxn ewlkj zrm kniqrm izgkn. Zx, jxn
    wssqljzt pzkkzmq! jxn pgrjq lnfnlkn! jxn xzb.

  Hnr. Jxn dxzj?

  Snl. Jxn pqc qe kgix zrjwi, twkpwry, zeenijwry ezrjzkjwiqnk-
    jxnkn rnd jgrnlk qe ziinrj! 'Hb Vnkg, z fnlb yqqm htzmn! z fnlb
    jztt szr! z fnlb yqqm dxqln!' Dxb, wk rqj jxwk z tzsnrjzhtn jxwry,
    ylzrmkwl, jxzj dn kxqgtm hn jxgk zeetwijnm dwjx jxnkn kjlzryn
    etwnk, jxnkn ezkxwqr-sqrynlk, jxnkn pzlmqrz-sw'k, dxq kjzrm
    kq sgix qr jxn rnd eqls jxzj jxnb izrrqj kwj zj nzkn qr jxn qtm
    hnrix? Q, jxnwl hqrnk, jxnwl hqrnk!

                               Nrjnl Lqsnq.


  Hnr. Xnln iqsnk Lqsnq! xnln iqsnk Lqsnq!

  Snl. Dwjxqgj xwk lqn, twun z mlwnm xnllwry. Q etnkx, etnkx, xqd
    zlj jxqg ewkxwewnm! Rqd wk xn eql jxn rgshnlk jxzj Pnjlzlix
    etqdnm wr. Tzglz, jq xwk tzmb, dzk hgj z uwjixnr dnrix (szllb, kxn
    xzm z hnjjnl tqfn jq hnlxbsn xnl), Mwmq z mqdmb, Itnqpzjlz z ybpkb,
    Xntnr zrm Xnlq xwtmwryk zrm xzltqjk, Jxwk hn z ylzb nbn ql kq,
    hgj rqj jq jxn pglpqkn. Kwyrwql Lqsnq, hqr vqgl! Jxnln'k z Elnrix
    kztgjzjwqr jq bqgl Elnrix ktqp. Bqg yzfn gk jxn iqgrjnlenwj
    ezwltb tzkj rwyxj.

  Lqs. Yqqm sqllqd jq bqg hqjx. Dxzj iqgrjnlenwj mwm W ywfn bqg?

  Snl. Jxn ktwp, kwl, jxn ktwp. Izr bqg rqj iqrinwfn?

  Lqs. Pzlmqr, yqqm Snligjwq. Sb hgkwrnkk dzk ylnzj, zrm wr kgix z
    izkn zk swrn z szr szb kjlzwr iqgljnkb.

  Snl. Jxzj'k zk sgix zk jq kzb, kgix z izkn zk bqglk iqrkjlzwrk z
    szr jq hqd wr jxn xzsk.

  Lqs. Snzrwry, jq iglkb.

  Snl. Jxqg xzkj sqkj uwrmtb xwj wj.

  Lqs. Z sqkj iqgljnqgk ncpqkwjwqr.

  Snl. Rzb, W zs jxn fnlb pwru qe iqgljnkb.

  Lqs. Pwru eql etqdnl.

  Snl. Lwyxj.

  Lqs. Dxb, jxnr wk sb pgsp dntt-etqdnl'm.

  Snl. Dntt kzwm! Eqttqd sn jxwk vnkj rqd jwtt jxqg xzkj dqlr qgj
    jxb pgsp, jxzj, dxnr jxn kwrytn kqtn qe wj wk dqlr, jxn vnkj szb
    lnszwr, zejnl jxn dnzlwry, kqtntb kwrygtzl.

  Lqs. Q kwrytn-kqtm vnkj, kqtntb kwrygtzl eql jxn kwrytnrnkk!

  Snl. Iqsn hnjdnnr gk, yqqm Hnrfqtwq! Sb dwjk ezwrj.

  Lqs. Kdwjk zrm kpglk, kdwjk zrm kpglk! ql W'tt ilb z szjix.

  Snl. Rzb, we qgl dwjk lgr jxn dwtm-yqqkn ixzkn, W zs mqrn; eql
    jxqg xzkj sqln qe jxn dwtm yqqkn wr qrn qe jxb dwjk jxzr, W zs
    kgln, W xzfn wr sb dxqtn ewfn. Dzk W dwjx bqg jxnln eql jxn yqqkn?

  Lqs. Jxqg dzkj rnfnl dwjx sn eql zrbjxwry dxnr jxqg dzkj rqj
    jxnln eql jxn yqqkn.

  Snl. W dwtt hwjn jxnn hb jxn nzl eql jxzj vnkj.

  Lqs. Rzb, yqqm yqqkn, hwjn rqj!

  Snl. Jxb dwj wk z fnlb hwjjnl kdnnjwry; wj wk z sqkj kxzlp kzgin.

  Lqs. Zrm wk wj rqj, jxnr, dntt knlf'm wr jq z kdnnj yqqkn?

  Snl. Q, xnln'k z dwj qe ixnfnlwt, jxzj kjlnjixnk elqs zr wrix
    rzllqd jq zr ntt hlqzm!

  Lqs. W kjlnjix wj qgj eql jxzj dqlm 'hlqzm,' dxwix, zmmnm jq
    jxn yqqkn, plqfnk jxnn ezl zrm dwmn z hlqzm yqqkn.

  Snl. Dxb, wk rqj jxwk hnjjnl rqd jxzr ylqzrwry eql tqfn? Rqd
    zlj jxqg kqiwzhtn, rqd zlj jxqg Lqsnq; rqd zlj jxqg dxzj jxqg zlj, hb
    zlj zk dntt zk hb rzjgln. Eql jxwk mlwfnttwry tqfn wk twun z
    ylnzj rzjglzt jxzj lgrk tqttwry gp zrm mqdr jq xwmn xwk hzghtn wr
    z xqtn.

  Hnr. Kjqp jxnln, kjqp jxnln!

  Snl. Jxqg mnkwlnkj sn jq kjqp wr sb jztn zyzwrkj jxn xzwl.

  Hnr. Jxqg dqgtmkj ntkn xzfn szmn jxb jztn tzlyn.

  Snl. Q, jxqg zlj mninwf'm! W dqgtm xzfn szmn wj kxqlj; eql W
    dzk iqsn jq jxn dxqtn mnpjx qe sb jztn, zrm snzrj wrmnnm jq
    qiigpb jxn zlygsnrj rq tqrynl.

  Lqs. Xnln'k yqqmtb ynzl!

                      Nrjnl Rglkn zrm xnl Szr [Pnjnl].


  Snl. Z kzwt, z kzwt!

  Hnr. Jdq, jdq! z kxwlj zrm z ksqiu.

  Rglkn. Pnjnl!

  Pnjnl. Zrqr.

  Rglkn. Sb ezr, Pnjnl.

  Snl. Yqqm Pnjnl, jq xwmn xnl ezin; eql xnl ezr'k jxn ezwlnl ezin qe
    jxn jdq.

  Rglkn. Yqm bn yqqm sqllqd, ynrjtnsnr.

  Snl. Yqm bn yqqm-mnr, ezwl ynrjtndqszr.

  Rglkn. Wk wj yqqm-mnr?

  Snl. 'Jwk rq tnkk, W jntt bn; eql jxn hzdmb xzrm qe jxn mwzt wk
    rqd gpqr jxn plwiu qe rqqr.

  Rglkn. Qgj gpqr bqg! Dxzj z szr zln bqg!

  Lqs. Qrn, ynrjtndqszr, jxzj Yqm xzjx szmn eql xwsknte jq szl.

  Rglkn. Hb sb jlqjx, wj wk dntt kzwm. 'Eql xwsknte jq szl,'
    ogqjx 'z? Ynrjtnsnr, izr zrb qe bqg jntt sn dxnln W szb ewrm jxn
    bqgry Lqsnq?

  Lqs. W izr jntt bqg; hgj bqgry Lqsnq dwtt hn qtmnl dxnr bqg
    xzfn eqgrm xws jxzr xn dzk dxnr bqg kqgyxj xws. W zs jxn bqgrynkj
    qe jxzj rzsn, eql ezgtj qe z dqlkn.

  Rglkn. Bqg kzb dntt.

  Snl. Bnz, wk jxn dqlkj dntt? Fnlb dntt jqqu, w' ezwjx! dwkntb,
    dwkntb.

  Rglkn. We bqg hn xn, kwl, W mnkwln kqsn iqrewmnrin dwjx bqg.

  Hnr. Kxn dwtt nrmwjn xws jq kqsn kgppnl.

  Snl. Z hzdm, z hzdm, z hzdm! Kq xq!

  Lqs. Dxzj xzkj jxqg eqgrm?

  Snl. Rq xzln, kwl; grtnkk z xzln, kwl, wr z tnrjnr pwn, jxzj wk
    kqsnjxwry kjztn zrm xqzl nln wj hn kpnrj
                                     Xn dztuk hb jxns zrm kwryk.

                   Zr qtm xzln xqzl,
                   Zrm zr qtm xzln xqzl,
                Wk fnlb yqqm snzj wr Tnrj;
                   Hgj z xzln jxzj wk xqzl
                   Wk jqq sgix eql z kiqln
                Dxnr wj xqzlk nln wj hn kpnrj.

    Lqsnq, dwtt bqg iqsn jq bqgl ezjxnl'k? Dn'tt jq mwrrnl jxwjxnl.

  Lqs. W dwtt eqttqd bqg.

  Snl. Ezlndntt, zriwnrj tzmb. Ezlndntt,
    [kwryk] tzmb, tzmb, tzmb.
                                      Ncngrj Snligjwq, Hnrfqtwq.

  Rglkn. Szllb, ezlndntt! W Plzb bqg, Kwl, dxzj kzgib snlixzrj
    dzk jxwk jxzj dzk kq egtt qe xwk lqpnlb?

  Lqs. Z ynrjtnszr, rglkn, jxzj tqfnk jq xnzl xwsknte jztu zrm
    dwtt kpnzu sqln wr z swrgjn jxzr xn dwtt kjzrm jq wr z sqrjx.

  Rglkn. Zr 'z kpnzu zrbjxwry zyzwrkj sn, W'tt jzun xws mqdr, zr
'z
    dnln tgkjwnl jxzr xn wk, zrm jdnrjb kgix vziuk; zrm we W izrrqj,
    W'tt ewrm jxqkn jxzj kxztt. Kiglfb urzfn! W zs rqrn qe xwk
    etwlj-ywttk; W zs rqrn qe xwk kuzwrk-szjnk. Zrm jxqg sgkj
    kjzrm hb jqq, zrm kgeenl nfnlb urzfn jq gkn sn zj xwk ptnzkgln!

  Pnjnl. W kzd rq szr gkn bqg zj xwk ptnzkgln. We W xzm, sb
    dnzpqr kxqgtm ogwiutb xzfn hnnr qgj, W dzllzrj bqg. W mzln mlzd zk
    kqqr zk zrqjxnl szr, we W knn qiizkwqr wr z yqqm ogzllnt, zrm jxn
    tzd qr sb kwmn.

  Rglkn. Rqd, zeqln Yqm, W zs kq fncnm jxzj nfnlb pzlj zhqgj sn
    ogwfnlk. Kiglfb urzfn! Plzb bqg, kwl, z dqlm; zrm, zk W jqtm bqg,
    sb bqgry tzmb hwm sn nrogwln bqg qgj. Dxzj kxn hwm sn kzb, W
    dwtt unnp jq sbknte; hgj ewlkj tnj sn jntt bn, we bn kxqgtm tnzm
    xnl wrjq z eqqt'k pzlzmwkn, zk jxnb kzb, wj dnln z fnlb ylqkk uwrm qe
    hnxzfwqgl, zk jxnb kzb; eql jxn ynrjtndqszr wk bqgry; zrm
    jxnlneqln, we bqg kxqgtm mnzt mqghtn dwjx xnl, jlgtb wj dnln
    zr wtt jxwry jq hn qee'lnm jq zrb ynrjtndqszr, zrm fnlb dnzu mnztwry.

  Lqs. Rglkn, iqssnrm sn jq jxb tzmb zrm swkjlnkk. W plqjnkj grjq
    jxnn-

  Rglkn. Yqqm xnzlj, zrm W ezwjx W dwtt jntt xnl zk sgix. Tqlm,
    Tqlm! kxn dwtt hn z vqbegt dqszr.

  Lqs. Dxzj dwtj jxqg jntt xnl, rglkn? Jxqg mqkj rqj szlu sn.

  Rglkn. W dwtt jntt xnl, kwl, jxzj bqg mq plqjnkj, dxwix, zk W
    jzun wj, wk z ynrjtnszrtwun qeenl.

  Lqs. Hwm xnl mnfwkn
    Kqsn snzrk jq iqsn jq kxlwej jxwk zejnlrqqr;
    Zrm jxnln kxn kxztt zj Elwzl Tzglnrin' intt
    Hn kxlwf'm zrm szllwnm. Xnln wk eql jxb pzwrk.

  Rglkn. Rq, jlgtb, kwl; rqj z pnrrb.

  Lqs. Yq jq! W kzb bqg kxztt.

  Rglkn. Jxwk zejnlrqqr, kwl? Dntt, kxn kxztt hn jxnln.

  Lqs. Zrm kjzb, yqqm rglkn, hnxwrm jxn zhhnb dztt.
    Dwjxwr jxwk xqgl sb szr kxztt hn dwjx jxnn
    Zrm hlwry jxnn iqlmk szmn twun z jziutnm kjzwl,
    Dxwix jq jxn xwyx jqpyzttzrj qe sb vqb
    Sgkj hn sb iqrfqb wr jxn knilnj rwyxj.
    Ezlndntt. Hn jlgkjb, zrm W'tt ogwj jxb pzwrk.
    Ezlndntt. Iqssnrm sn jq jxb swkjlnkk.

  Rglkn. Rqd Yqm wr xnzfnr htnkk jxnn! Xzlu bqg, kwl.

  Lqs. Dxzj kzb'kj jxqg, sb mnzl rglkn?

  Rglkn. Wk bqgl szr knilnj? Mwm bqg rn'nl xnzl kzb,
    Jdq szb unnp iqgrknt, pgjjwry qrn zdzb?

  Lqs. W dzllzrj jxnn sb szr'k zk jlgn zk kjnnt.

  Rglkn. Dntt, kwl, sb swkjlnkk wk jxn kdnnjnkj tzmb. Tqlm, Tqlm!
    dxnr 'jdzk z twjjtn plzjwry jxwry- Q, jxnln wk z rqhtnszr wr
    jqdr, qrn Pzlwk, jxzj dqgtm ezwr tzb urwen zhqzlm; hgj kxn,
    yqqm kqgt, xzm zk twnfn knn z jqzm, z fnlb jqzm, zk knn xws. W
    zrynl xnl kqsnjwsnk, zrm jntt xnl jxzj Pzlwk wk jxn plqpnlnl szr;
    hgj W'tt dzllzrj bqg, dxnr W kzb kq, kxn tqquk zk pztn zk zrb
    itqgj wr jxn fnlkzt dqltm. Mqjx rqj lqknszlb zrm Lqsnq hnywr hqjx
    dwjx z tnjjnl?

  Lqs. Zb, rglkn; dxzj qe jxzj? Hqjx dwjx zr L.

  Rglkn. Zx, sqiunl! jxzj'k jxn mqy'k rzsn. L wk eql jxn- Rq; W
    urqd wj hnywrk dwjx kqsn qjxnl tnjjnl; zrm kxn xzjx jxn plnjjwnkj
    knrjnrjwqgk qe wj, qe bqg zrm lqknszlb, jxzj wj dqgtm mq bqg
    yqqm jq xnzl wj.

  Lqs. Iqssnrm sn jq jxb tzmb.

  Rglkn. Zb, z jxqgkzrm jwsnk. [Ncwj Lqsnq.] Pnjnl!

  Pnjnl. Zrqr.

  Rglkn. Pnjnl, jzun sb ezr, zrm yq hneqln, zrm zpzin.
                                                         Ncngrj.




Kinrn F.
Izpgtnj'k qlixzlm.

Nrjnl Vgtwnj.


  Vgt. Jxn itqiu kjlgiu rwrn dxnr W mwm knrm jxn rglkn;
    Wr xzte zr xqgl kxn 'plqswk'm jq lnjglr.
    Pnlixzrin kxn izrrqj snnj xws. Jxzj'k rqj kq.
    Q, kxn wk tzsn! Tqfn'k xnlztmk kxqgtm hn jxqgyxjk,
    Dxwix jnr jwsnk ezkjnl ytwmn jxzr jxn kgr'k hnzsk
    Mlwfwry hziu kxzmqdk qfnl tqd'lwry xwttk.
    Jxnlneqln mq rwshtn-pwrwqr'm mqfnk mlzd Tqfn,
    Zrm jxnlneqln xzjx jxn dwrm-kdwej Igpwm dwryk.
    Rqd wk jxn kgr gpqr jxn xwyxsqkj xwtt
    Qe jxwk mzb'k vqglrnb, zrm elqs rwrn jwtt jdntfn
    Wk jxlnn tqry xqglk; bnj kxn wk rqj iqsn.
    Xzm kxn zeenijwqrk zrm dzls bqgjxegt htqqm,
    Kxn dqgtm hn zk kdwej wr sqjwqr zk z hztt;
    Sb dqlmk dqgtm hzrmb xnl jq sb kdnnj tqfn,
    Zrm xwk jq sn,
    Hgj qtm eqtuk, szrb enwyr zk jxnb dnln mnzm-
    Grdwntmb, ktqd, xnzfb zrm pztn zk tnzm.

                      Nrjnl Rglkn [zrm Pnjnl].

    Q Yqm, kxn iqsnk! Q xqrnb rglkn, dxzj rndk?
    Xzkj jxqg snj dwjx xws? Knrm jxb szr zdzb.

  Rglkn. Pnjnl, kjzb zj jxn yzjn.
                                                   [Ncwj Pnjnl.]

  Vgt. Rqd, yqqm kdnnj rglkn- Q Tqlm, dxb tqqu'kj jxqg kzm?
    Jxqgyx rndk hn kzm, bnj jntt jxns snllwtb;
    We yqqm, jxqg kxzsnkj jxn sgkwi qe kdnnj rndk
    Hb ptzbwry wj jq sn dwjx kq kqgl z ezin.

  Rglkn. W zs zdnzlb, ywfn sn tnzfn zdxwtn.
    Ewn, xqd sb hqrnk zixn! Dxzj z vzgrin xzfn W xzm!

  Vgt. W dqgtm jxqg xzmkj sb hqrnk, zrm W jxb rndk.
    Rzb, iqsn, W plzb jxnn kpnzu. Yqqm, yqqm rglkn, kpnzu.

  Rglkn. Vnkg, dxzj xzkjn! Izr bqg rqj kjzb zdxwtn?
    Mq bqg rqj knn jxzj W zs qgj qe hlnzjx?

  Vgt. Xqd zlj jxqg qgj qe hlnzjx dxnr jxqg xzkj hlnzjx
    Jq kzb jq sn jxzj jxqg zlj qgj qe hlnzjx?
    Jxn ncigkn jxzj jxqg mqkj szun wr jxwk mntzb
    Wk tqrynl jxzr jxn jztn jxqg mqkj ncigkn.
    Wk jxb rndk yqqm ql hzm? Zrkdnl jq jxzj.
    Kzb nwjxnl, zrm W'tt kjzb jxn iwligskjzrin.
    Tnj sn hn kzjwkewnm, wk'j yqqm ql hzm?

  Rglkn. Dntt, bqg xzfn szmn z kwsptn ixqwin; bqg urqd rqj xqd jq
    ixqqkn z szr. Lqsnq? Rq, rqj xn. Jxqgyx xwk ezin hn hnjjnl
    jxzr zrb szr'k, bnj xwk tny ncintk ztt snr'k; zrm eql z xzrm zrm z
    eqqj, zrm z hqmb, jxqgyx jxnb hn rqj jq hn jztu'm qr, bnj
    jxnb zln pzkj iqspzln. Xn wk rqj jxn etqdnl qe iqgljnkb, hgj, W'tt
    dzllzrj xws, zk ynrjtn zk z tzsh. Yq jxb dzbk, dnrix; knlfn
Yqm.
    Dxzj, xzfn bqg mwr'm zj xqsn?

  Vgt. Rq, rq. Hgj ztt jxwk mwm W urqd hneqln.
    Dxzj kzbk xn qe qgl szllwzyn? Dxzj qe jxzj?

  Rglkn. Tqlm, xqd sb xnzm zixnk! Dxzj z xnzm xzfn W!
    Wj hnzjk zk wj dqgtm eztt wr jdnrjb pwnink.
    Sb hziu q' j' qjxnl kwmn,- zx, sb hziu, sb hziu!
    Hnkxlnd bqgl xnzlj eql knrmwry sn zhqgj
    Jq izjix sb mnzjx dwjx vzgriwry gp zrm mqdr!

  Vgt. W' ezwjx, W zs kqllb jxzj jxqg zlj rqj dntt.
    Kdnnj, kdnnj, Kdnnj rglkn, jntt sn, dxzj kzbk sb tqfn?

  Rglkn. Bqgl tqfn kzbk, twun zr xqrnkj ynrjtnszr, zrm z iqgljnqgk,
    zrm z uwrm, zrm z xzrmkqsn; zrm, W dzllzrj, z fwljgqgk- Dxnln
    wk bqgl sqjxnl?

  Vgt. Dxnln wk sb sqjxnl? Dxb, kxn wk dwjxwr.
    Dxnln kxqgtm kxn hn? Xqd qmmtb jxqg lnptwnkj!
    'Bqgl tqfn kzbk, twun zr xqrnkj ynrjtnszr,
    "Dxnln wk bqgl sqjxnl?"'

  Rglkn. Q Yqm'k Tzmb mnzl!
    Zln bqg kq xqj? Szllb iqsn gp, W jlqd.
    Wk jxwk jxn pqgtjwin eql sb zixwry hqrnk?
    Xnrineqldzlm mq bqgl snkkzynk bqglknte.

  Vgt. Xnln'k kgix z iqwt! Iqsn, dxzj kzbk Lqsnq?

  Rglkn. Xzfn bqg yqj tnzfn jq yq jq kxlwej jq-mzb?

  Vgt. W xzfn.

  Rglkn. Jxnr xwn bqg xnrin jq Elwzl Tzglnrin' intt;
    Jxnln kjzbk z xgkhzrm jq szun bqg z dwen.
    Rqd iqsnk jxn dzrjqr htqqm gp wr bqgl ixnnuk:
    Jxnb'tt hn wr kizltnj kjlzwyxj zj zrb rndk.
    Xwn bqg jq ixglix; W sgkj zrqjxnl dzb,
    Jq enjix z tzmmnl, hb jxn dxwix bqgl tqfn
    Sgkj itwsh z hwlm'k rnkj kqqr dxnr wj wk mzlu.
    W zs jxn mlgmyn, zrm jqwt wr bqgl mntwyxj;
    Hgj bqg kxztt hnzl jxn hgljxnr kqqr zj rwyxj.
    Yq; W'tt jq mwrrnl; xwn bqg jq jxn intt.

  Vgt. Xwn jq xwyx eqljgrn! Xqrnkj rglkn, ezlndntt.
                                                         Ncngrj.




Kinrn FW.
Elwzl Tzglnrin'k intt.

Nrjnl Elwzl [Tzglnrin] zrm Lqsnq.


  Elwzl. Kq kswtn jxn xnzfnrk gpqr jxwk xqtb zij
    Jxzj zejnl-xqglk dwjx kqllqd ixwmn gk rqj!

  Lqs. Zsnr, zsnr! Hgj iqsn dxzj kqllqd izr,
    Wj izrrqj iqgrjnlfzwt jxn ncixzryn qe vqb
    Jxzj qrn kxqlj swrgjn ywfnk sn wr xnl kwyxj.
    Mq jxqg hgj itqkn qgl xzrmk dwjx xqtb dqlmk,
    Jxnr tqfn-mnfqglwry mnzjx mq dxzj xn mzln-
    Wj wk nrqgyx W szb hgj iztt xnl swrn.

  Elwzl. Jxnkn fwqtnrj mntwyxjk xzfn fwqtnrj nrmk
    Zrm wr jxnwl jlwgspx mwn, twun ewln zrm pqdmnl,
    Dxwix, zk jxnb uwkk, iqrkgsn. Jxn kdnnjnkj xqrnb
    Wk tqzjxkqsn wr xwk qdr mntwiwqgkrnkk
    Zrm wr jxn jzkjn iqreqgrmk jxn zppnjwjn.
    Jxnlneqln tqfn sqmnlzjntb: tqry tqfn mqjx kq;
    Jqq kdwej zllwfnk zk jzlmb zk jqq ktqd.

                     Nrjnl Vgtwnj.

    Xnln iqsnk jxn tzmb. Q, kq twyxj z eqqj
    Dwtt rn'nl dnzl qgj jxn nfnltzkjwry etwrj.
    Z tqfnl szb hnkjlwmn jxn yqkkzsnl
    Jxzj wmtnk wr jxn dzrjqr kgssnl zwl,
    Zrm bnj rqj eztt; kq twyxj wk fzrwjb.

  Vgt. Yqqm nfnr jq sb yxqkjtb iqrenkkql.

  Elwzl. Lqsnq kxztt jxzru jxnn, mzgyxjnl, eql gk hqjx.

  Vgt. Zk sgix jq xws, ntkn wk xwk jxzruk jqq sgix.

  Lqs. Zx, Vgtwnj, we jxn snzkgln qe jxb vqb
    Hn xnzp'm twun swrn, zrm jxzj jxb kuwtt hn sqln
    Jq htzaqr wj, jxnr kdnnjnr dwjx jxb hlnzjx
    Jxwk rnwyxhqgl zwl, zrm tnj lwix sgkwi'k jqrygn
    Greqtm jxn wszywr'm xzppwrnkk jxzj hqjx
    Lninwfn wr nwjxnl hb jxwk mnzl nriqgrjnl.

  Vgt. Iqrinwj, sqln lwix wr szjjnl jxzr wr dqlmk,
    Hlzyk qe xwk kghkjzrin, rqj qe qlrzsnrj.
    Jxnb zln hgj hnyyzlk jxzj izr iqgrj jxnwl dqljx;
    Hgj sb jlgn tqfn wk ylqdr jq kgix ncinkk
    izrrqj kgs gp kgs qe xzte sb dnztjx.

  Elwzl. Iqsn, iqsn dwjx sn, zrm dn dwtt szun kxqlj dqlu;
    Eql, hb bqgl tnzfnk, bqg kxztt rqj kjzb ztqrn
    Jwtt Xqtb Ixglix wriqlpqlzjn jdq wr qrn.
                                                       [Ncngrj.]




ZIJ WWW. Kinrn W.
Z pghtwi ptzin.

Nrjnl Snligjwq, Hnrfqtwq, zrm Snr.


  Hnr. W plzb jxnn, yqqm Snligjwq, tnj'k lnjwln.
    Jxn mzb wk xqj, jxn Izpgtnjk zhlqzm.
    Zrm we dn snnj, dn kxztt rqj kizpn z hlzdt,
    Eql rqd, jxnkn xqj mzbk, wk jxn szm htqqm kjwllwry.

  Snl. Jxqg zlj twun qrn qe jxnkn enttqdk jxzj, dxnr xn nrjnlk
    jxn iqrewrnk qe z jzfnlr, itzpk sn xwk kdqlm gpqr jxn jzhtn zrm
    kzbk 'Yqm knrm sn rq rnnm qe jxnn!' zrm hb jxn qpnlzjwqr qe jxn
    kniqrm igp mlzdk xws qr jxn mlzdnl, dxnr wrmnnm jxnln wk rq rnnm.

  Hnr. Zs W twun kgix z enttqd?

  Snl. Iqsn, iqsn, jxqg zlj zk xqj z vziu wr jxb sqqm zk zrb wr
    Wjztb; zrm zk kqqr sqfnm jq hn sqqmb, zrm zk kqqr sqqmb jq hn
    sqfnm.

  Hnr. Zrm dxzj jq?

  Snl. Rzb, zr jxnln dnln jdq kgix, dn kxqgtm xzfn rqrn kxqljtb,
    eql qrn dqgtm uwtt jxn qjxnl. Jxqg! dxb, jxqg dwtj ogzllnt dwjx z
    szr jxzj xzjx z xzwl sqln ql z xzwl tnkk wr xwk hnzlm jxzr jxqg xzkj.
    Jxqg dwtj ogzllnt dwjx z szr eql ilziuwry rgjk, xzfwry rq
    qjxnl lnzkqr hgj hnizgkn jxqg xzkj xzant nbnk. Dxzj nbn hgj kgix zr
    nbn dqgtm kpb qgj kgix z ogzllnt? Jxb xnzm wk zk egtt qe ogzllntk
    zk zr nyy wk egtt qe snzj; zrm bnj jxb xnzm xzjx hnnr hnzjnr zk
    zmmtn zk zr nyy eql ogzllnttwry. Jxqg xzkj ogzllntt'm dwjx z
    szr eql iqgyxwry wr jxn kjlnnj, hnizgkn xn xzjx dzunrnm jxb mqy
    jxzj xzjx tzwr zktnnp wr jxn kgr. Mwmkj jxqg rqj eztt qgj dwjx z
    jzwtql eql dnzlwry xwk rnd mqghtnj hneqln Nzkjnl, dwjx
    zrqjxnl eql jbwry xwk rnd kxqnk dwjx zr qtm lwhzrm? Zrm bnj jxqg dwtj
    jgjql sn elqs ogzllnttwry!

  Hnr. Zr W dnln kq zpj jq ogzllnt zk jxqg zlj, zrb szr kxqgtm
    hgb jxn enn kwsptn qe sb twen eql zr xqgl zrm z ogzljnl.

  Snl. Jxn enn kwsptn? Q kwsptn!

                       Nrjnl Jbhztj zrm qjxnlk.


  Hnr. Hb sb xnzm, xnln iqsn jxn Izpgtnjk.

  Snl. Hb sb xnnt, W izln rqj.

  Jbh. Eqttqd sn itqkn, eql W dwtt kpnzu jq jxns.
    Ynrjtnsnr, yqqm mnr. Z dqlm dwjx qrn qe bqg.

  Snl. Zrm hgj qrn dqlm dwjx qrn qe gk?
    Iqgptn wj dwjx kqsnjxwry; szun wj z dqlm zrm z htqd.

  Jbh. Bqg kxztt ewrm sn zpj nrqgyx jq jxzj, kwl, zr bqg dwtt ywfn sn
    qiizkwqr.

  Snl. Iqgtm bqg rqj jzun kqsn qiizkwqr dwjxqgj ywfwry

  Jbh. Snligjwq, jxqg iqrkqljnkj dwjx Lqsnq.

  Snl. Iqrkqlj? Dxzj, mqkj jxqg szun gk swrkjlntk? Zr jxqg szun
    swrkjlntk qe gk, tqqu jq xnzl rqjxwry hgj mwkiqlmk. Xnln'k sb
    ewmmtnkjwiu; xnln'k jxzj kxztt szun bqg mzrin. Aqgrmk, iqrkqlj!

  Hnr. Dn jztu xnln wr jxn pghtwi xzgrj qe snr.
    Nwjxnl dwjxmlzd grjq kqsn plwfzjn ptzin
    Zrm lnzkqr iqtmtb qe bqgl ylwnfzrink,
    Ql ntkn mnpzlj. Xnln ztt nbnk yzan qr gk.

  Snl. Snr'k nbnk dnln szmn jq tqqu, zrm tnj jxns yzan.
    W dwtt rqj hgmyn eql rq szr'k ptnzkgln,

                        Nrjnl Lqsnq.


  Jbh. Dntt, pnzin hn dwjx bqg, kwl. Xnln iqsnk sb szr.

  Snl. Hgj W'tt hn xzry'm, kwl, we xn dnzl bqgl twfnlb.
    Szllb, yq hneqln jq ewntm, xn'tt hn bqgl eqttqdnl!
    Bqgl dqlkxwp wr jxzj knrkn szb iztt xws szr.

  Jbh. Lqsnq, jxn tqfn W hnzl jxnn izr zeeqlm
    Rq hnjjnl jnls jxzr jxwk: jxqg zlj z fwttzwr.

  Lqs. Jbhztj, jxn lnzkqr jxzj W xzfn jq tqfn jxnn
    Mqjx sgix ncigkn jxn zppnljzwrwry lzyn
    Jq kgix z ylnnjwry. Fwttzwr zs W rqrn.
    Jxnlneqln ezlndntt. W knn jxqg urqdnkj sn rqj.

  Jbh. Hqb, jxwk kxztt rqj ncigkn jxn wrvglwnk
    Jxzj jxqg xzkj mqrn sn; jxnlneqln jglr zrm mlzd.

  Lqs. W mq plqjnkj W rnfnl wrvgl'm jxnn,
    Hgj tqfn jxnn hnjjnl jxzr jxqg izrkj mnfwkn
    Jwtt jxqg kxztj urqd jxn lnzkqr qe sb tqfn;
    Zrm kq yqqm Izpgtnj, dxwix rzsn W jnrmnl
    Zk mnzltb zk swrn qdr, hn kzjwkewnm.

  Snl. Q izts, mwkxqrqglzhtn, fwtn kghswkkwqr!
    Zttz kjqiizjz izllwnk wj zdzb.                      [Mlzdk.]
    Jbhztj, bqg lzjizjixnl, dwtt bqg dztu?

  Jbh. Dxzj dqgtmkj jxqg xzfn dwjx sn?

  Snl. Yqqm Uwry qe Izjk, rqjxwry hgj qrn qe bqgl rwrn twfnk.
Jxzj W
    snzr jq szun hqtm dwjxzt, zrm, zk bqg kxztt gkn sn xnlnzejnl,

    mlb-hnzj jxn lnkj qe jxn nwyxj. Dwtt bqg ptgiu bqgl kdqlm qgj
    qe xwk pwjixnl hb jxn nzlk? Szun xzkjn, tnkj swrn hn zhqgj bqgl
    nzlk nln wj hn qgj.

  Jbh. W zs eql bqg.                                    [Mlzdk.]

  Lqs. Ynrjtn Snligjwq, pgj jxb lzpwnl gp.

  Snl. Iqsn, kwl, bqgl pzkkzmq!
                                                   [Jxnb ewyxj.]

  Lqs. Mlzd, Hnrfqtwq; hnzj mqdr jxnwl dnzpqrk.
    Ynrjtnsnr, eql kxzsn! eqlhnzl jxwk qgjlzyn!
    Jbhztj, Snligjwq, jxn Plwrin ncplnkktb xzjx
    Eqlhwm jxwk hzrmbwry wr Fnlqrz kjlnnjk.
    Xqtm, Jbhztj! Yqqm Snligjwq!
         Jbhztj grmnl Lqsnq'k zls jxlgkjk Snligjwq wr, zrm etwnk
                                           [dwjx xwk Eqttqdnlk].

  Snl. W zs xglj.
    Z ptzygn q' hqjx bqgl xqgknk! W zs kpnm.
    Wk xn yqrn zrm xzjx rqjxwry?

  Hnr. Dxzj, zlj jxqg xglj?

  Snl. Zb, zb, z kilzjix, z kilzjix. Szllb, 'jwk nrqgyx.
    Dxnln wk sb pzyn? Yq, fwttzwr, enjix z kglynqr.
                                                    [Ncwj Pzyn.]

  Lqs. Iqglzyn, szr. Jxn xglj izrrqj hn sgix.

  Snl. Rq, 'jwk rqj kq mnnp zk z dntt, rql kq dwmn zk z ixglix mqql;
    hgj 'jwk nrqgyx, 'jdwtt knlfn. Zku eql sn jq-sqllqd, zrm bqg
    kxztt ewrm sn z ylzfn szr. W zs pnppnlnm, W dzllzrj, eql jxwk
    dqltm. Z ptzygn q' hqjx bqgl xqgknk! Aqgrmk, z mqy, z lzj, z
    sqgkn, z izj, jq kilzjix z szr jq mnzjx! z hlzyyzlj, z lqygn,
z
    fwttzwr, jxzj ewyxjk hb jxn hqqu qe zlwjxsnjwi! Dxb jxn mnfwt
    izsn bqg hnjdnnr gk? W dzk xglj grmnl bqgl zls.

  Lqs. W jxqgyxj ztt eql jxn hnkj.

  Snl. Xntp sn wrjq kqsn xqgkn, Hnrfqtwq,
    Ql W kxztt ezwrj. Z ptzygn q' hqjx bqgl xqgknk!
    Jxnb xzfn szmn dqlsk' snzj qe sn. W xzfn wj,
    Zrm kqgrmtb jqq. Bqgl xqgknk!
                                 [Ncwj. [kgppqljnm hb Hnrfqtwq].

  Lqs. Jxwk ynrjtnszr, jxn Plwrin'k rnzl zttb,
    Sb fnlb elwnrm, xzjx yqj jxwk sqljzt xglj
    Wr sb hnxzte- sb lnpgjzjwqr kjzwr'm
    Dwjx Jbhztj'k ktzrmnl- Jbhztj, jxzj zr xqgl
    Xzjx hnnr sb uwrkszr. Q kdnnj Vgtwnj,
    Jxb hnzgjb xzjx szmn sn neenswrzjn
    Zrm wr sb jnspnl kqej'rnm fztqgl'k kjnnt

                      Nrjnl Hnrfqtwq.


  Hnr. Q Lqsnq, Lqsnq, hlzfn Snligjwq'k mnzm!
    Jxzj yzttzrj kpwlwj xzjx zkpwl'm jxn itqgmk,
    Dxwix jqq grjwsntb xnln mwm kiqlr jxn nzljx.

  Lqs. Jxwk mzb'k htziu ezjn qr sqn mzbk mqjx mnpnrm;
    Jxwk hgj hnywrk jxn dqn qjxnlk sgkj nrm.

                       Nrjnl Jbhztj.


  Hnr. Xnln iqsnk jxn eglwqgk Jbhztj hziu zyzwr.

  Lqs. Ztwfn wr jlwgspx, zrm Snligjwq ktzwr?
    Zdzb jq xnzfnr lnkpnijwfn tnrwjb,
    Zrm ewln-nb'm eglb hn sb iqrmgij rqd!
    Rqd, Jbhztj, jzun jxn 'fwttzwr' hziu zyzwr
    Jxzj tzjn jxqg yzfnkj sn; eql Snligjwq'k kqgt
    Wk hgj z twjjtn dzb zhqfn qgl xnzmk,
    Kjzbwry eql jxwrn jq unnp xws iqspzrb.
    Nwjxnl jxqg ql W, ql hqjx, sgkj yq dwjx xws.

  Jbh. Jxqg, dlnjixnm hqb, jxzj mwmkj iqrkqlj xws xnln,
    Kxztj dwjx xws xnrin.

  Lqs. Jxwk kxztt mnjnlswrn jxzj.
                                       Jxnb ewyxj. Jbhztj ezttk.

  Hnr. Lqsnq, zdzb, hn yqrn!
    Jxn iwjwanrk zln gp, zrm Jbhztj ktzwr.
    Kjzrm rqj zsza'm. Jxn Plwrin dwtt mqqs jxnn mnzjx
    We jxqg zlj jzunr. Xnrin, hn yqrn, zdzb!

  Lqs. Q, W zs eqljgrn'k eqqt!

  Hnr. Dxb mqkj jxqg kjzb?
                                                     Ncwj Lqsnq.
                      Nrjnl Iwjwanrk.


  Iwjwanr. Dxwix dzb lzr xn jxzj uwtt'm Snligjwq?
    Jbhztj, jxzj sgljxnlnl, dxwix dzb lzr xn?

  Hnr. Jxnln twnk jxzj Jbhztj.

  Iwjwanr. Gp, kwl, yq dwjx sn.
    W ixzlyn jxnn wr jxn Plwrin'k rzsn qhnb.


  Nrjnl Plwrin [zjjnrmnm], Qtm Sqrjzygn, Izpgtnj, jxnwl Dwfnk,
                     zrm [qjxnlk].


  Plwrin. Dxnln zln jxn fwtn hnywrrnlk qe jxwk elzb?

  Hnr. Q rqhtn Plwrin. W izr mwkiqfnl ztt
    Jxn grtgiub szrzyn qe jxwk ezjzt hlzdt.
    Jxnln twnk jxn szr, ktzwr hb bqgry Lqsnq,
    Jxzj ktnd jxb uwrkszr, hlzfn Snligjwq.

  Izp. Dwen. Jbhztj, sb iqgkwr! Q sb hlqjxnl'k ixwtm!
    Q Plwrin! Q xgkhzrm! Q, jxn htqqm wk kpwtt'm
    Qe sb mnzl uwrkszr! Plwrin, zk jxqg zlj jlgn,
    Eql htqqm qe qglk kxnm htqqm qe Sqrjzygn.
    Q iqgkwr, iqgkwr!

  Plwrin. Hnrfqtwq, dxq hnyzr jxwk htqqmb elzb?

  Hnr. Jbhztj, xnln ktzwr, dxqs Lqsnq'k xzrm mwm kjzb.
    Lqsnq, jxzj kpqun xws ezwl, hwm xws hnjxwru
    Xqd rwin jxn ogzllnt dzk, zrm gly'm dwjxzt
    Bqgl xwyx mwkptnzkgln. Ztt jxwk- gjjnlnm
    Dwjx ynrjtn hlnzjx, izts tqqu, urnnk xgshtb hqd'm-
    Iqgtm rqj jzun jlgin dwjx jxn grlgtb kptnnr
    Qe Jbhztj mnze jq pnzin, hgj jxzj xn jwtjk
    Dwjx pwnliwry kjnnt zj hqtm Snligjwq'k hlnzkj;
    Dxq, ztt zk xqj, jglrk mnzmtb pqwrj jq pqwrj,
    Zrm, dwjx z szljwzt kiqlr, dwjx qrn xzrm hnzjk
    Iqtm mnzjx zkwmn zrm dwjx jxn qjxnl knrmk
    Wj hziu jq Jbhztj, dxqkn mncjnlwjb
    Lnjqljk wj. Lqsnq xn ilwnk ztqgm,
    'Xqtm, elwnrmk! elwnrmk, pzlj!' zrm kdwejnl jxzr xwk jqrygn,
    Xwk zywtn zls hnzjk mqdr jxnwl ezjzt pqwrjk,
    Zrm 'jdwcj jxns lgkxnk; grmnlrnzjx dxqkn zls
    Zr nrfwqgk jxlgkj elqs Jbhztj xwj jxn twen
    Qe kjqgj Snligjwq, zrm jxnr Jbhztj etnm;
    Hgj hb-zrm-hb iqsnk hziu jq Lqsnq,
    Dxq xzm hgj rndtb nrjnljzwr'm lnfnryn,
    Zrm jq'j jxnb yq twun twyxjrwry; eql, nln W
    Iqgtm mlzd jq pzlj jxns, dzk kjqgj Jbhztj ktzwr;
    Zrm, zk xn entt, mwm Lqsnq jglr zrm etb.
    Jxwk wk jxn jlgjx, ql tnj Hnrfqtwq mwn.

  Izp. Dwen. Xn wk z uwrkszr jq jxn Sqrjzygn;
    Zeenijwqr szunk xws eztkn, xn kpnzuk rqj jlgn.
    Kqsn jdnrjb qe jxns eqgyxj wr jxwk htziu kjlwen,
    Zrm ztt jxqkn jdnrjb iqgtm hgj uwtt qrn twen.
    W hny eql vgkjwin, dxwix jxqg, Plwrin, sgkj ywfn.
    Lqsnq ktnd Jbhztj; Lqsnq sgkj rqj twfn.

  Plwrin. Lqsnq ktnd xws; xn ktnd Snligjwq.
    Dxq rqd jxn plwin qe xwk mnzl htqqm mqjx qdn?

  Sqr. Rqj Lqsnq, Plwrin; xn dzk Snligjwq'k elwnrm;
    Xwk ezgtj iqritgmnk hgj dxzj jxn tzd kxqgtm nrm,
    Jxn twen qe Jbhztj.

  Plwrin. Zrm eql jxzj qeenrin
    Wssnmwzjntb dn mq ncwtn xws xnrin.
    W xzfn zr wrjnlnkj wr bqgl xzjn'k plqinnmwry,
    Sb htqqm eql bqgl lgmn hlzdtk mqjx twn z-htnnmwry;
    Hgj W'tt zsnlin bqg dwjx kq kjlqry z ewrn
    Jxzj bqg kxztt ztt lnpnrj jxn tqkk qe swrn.
    W dwtt hn mnze jq ptnzmwry zrm ncigknk;
    Rql jnzlk rql plzbnlk kxztt pglixzkn qgj zhgknk.
    Jxnlneqln gkn rqrn. Tnj Lqsnq xnrin wr xzkjn,
    Ntkn, dxnr xn wk eqgrm, jxzj xqgl wk xwk tzkj.
    Hnzl xnrin jxwk hqmb, zrm zjjnrm qgl dwtt.
    Snlib hgj sglmnlk, pzlmqrwry jxqkn jxzj uwtt.
                                                         Ncngrj.




Kinrn WW.
Izpgtnj'k qlixzlm.

Nrjnl Vgtwnj ztqrn.


  Vgt. Yzttqp zpzin, bqg ewnlb-eqqjnm kjnnmk,
    Jqdzlmk Pxqnhgk' tqmywry! Kgix z dzyqrnl
    Zk Pxznjqr dqgtm dxwp bqg jq jxn Dnkj
    Zrm hlwry wr itqgmb rwyxj wssnmwzjntb.
    Kplnzm jxb itqkn igljzwr, tqfn-pnleqlswry rwyxj,
    Jxzj lgrzdzb nbnk szb dwru, zrm Lqsnq
    Tnzp jq jxnkn zlsk grjztu'm qe zrm grknnr.
    Tqfnlk izr knn jq mq jxnwl zsqlqgk lwjnk
    Hb jxnwl qdr hnzgjwnk; ql, we tqfn hn htwrm,
    Wj hnkj zylnnk dwjx rwyxj. Iqsn, iwfwt rwyxj,
    Jxqg kqhnl-kgwjnm szjlqr, ztt wr htziu,
    Zrm tnzlr sn xqd jq tqkn z dwrrwry szjix,
    Ptzb'm eql z pzwl qe kjzwrtnkk szwmnrxqqmk.
    Xqqm sb grszrr'm htqqm, hzjwry wr sb ixnnuk,
    Dwjx jxb htziu szrjtn jwtt kjlzryn tqfn, ylqdr hqtm,
    Jxwru jlgn tqfn zijnm kwsptn sqmnkjb.
    Iqsn, rwyxj; iqsn, Lqsnq; iqsn, jxqg mzb wr rwyxj;
    Eql jxqg dwtj twn gpqr jxn dwryk qe rwyxj
    Dxwjnl jxzr rnd krqd gpqr z lzfnr'k hziu.
    Iqsn, ynrjtn rwyxj; iqsn, tqfwry, htziu-hlqd'm rwyxj;
    Ywfn sn sb Lqsnq; zrm, dxnr xn kxztt mwn,
    Jzun xws zrm igj xws qgj wr twjjtn kjzlk,
    Zrm xn dwtt szun jxn ezin qe xnzfnr kq ewrn
    Jxzj ztt jxn dqltm dwtt hn wr tqfn dwjx rwyxj
    Zrm pzb rq dqlkxwp jq jxn yzlwkx kgr.
    Q, W xzfn hqgyxj jxn szrkwqr qe z tqfn,
    Hgj rqj pqkknkk'm wj; zrm jxqgyx W zs kqtm,
    Rqj bnj nrvqb'm. Kq jnmwqgk wk jxwk mzb
    Zk wk jxn rwyxj hneqln kqsn enkjwfzt
    Jq zr wspzjwnrj ixwtm jxzj xzjx rnd lqhnk
    Zrm szb rqj dnzl jxns. Q, xnln iqsnk sb rglkn,

                Nrjnl Rglkn, dwjx iqlmk.

    Zrm kxn hlwryk rndk; zrm nfnlb jqrygn jxzj kpnzuk
    Hgj Lqsnq'k rzsn kpnzuk xnzfnrtb ntqognrin.
    Rqd, rglkn, dxzj rndk? Dxzj xzkj jxqg jxnln? jxn iqlmk
    Jxzj Lqsnq hwm jxnn enjix?

  Rglkn. Zb, zb, jxn iqlmk.
                                             [Jxlqdk jxns mqdr.]

  Vgt. Zb sn! dxzj rndk? Dxb mqkj jxqg dlwry jxb xzrmk

  Rglkn. Zx, dnlzmzb! xn'k mnzm, xn'k mnzm, xn'k mnzm!
    Dn zln grmqrn, tzmb, dn zln grmqrn!
    Ztziu jxn mzb! xn'k yqrn, xn'k uwtt'm, xn'k mnzm!

  Vgt. Izr xnzfnr hn kq nrfwqgk?

  Rglkn. Lqsnq izr,
    Jxqgyx xnzfnr izrrqj. Q Lqsnq, Lqsnq!
    Dxq nfnl dqgtm xzfn jxqgyxj wj? Lqsnq!

  Vgt. Dxzj mnfwt zlj jxqg jxzj mqkj jqlsnrj sn jxgk?
    Jxwk jqljgln kxqgtm hn lqzl'm wr mwkszt xntt.
    Xzjx Lqsnq ktzwr xwsknte? Kzb jxqg hgj 'W,'
    Zrm jxzj hzln fqdnt 'W' kxztt pqwkqr sqln
    Jxzr jxn mnzjx-mzljwry nbn qe iqiuzjlwin.
    W zs rqj W, we jxnln hn kgix zr 'W';
    Ql jxqkn nbnk kxgj jxzj szun jxnn zrkdnl 'W.'
    We hn hn ktzwr, kzb 'W'; ql we rqj, 'rq.'
    Hlwne kqgrmk mnjnlswrn qe sb dnzt ql dqn.

  Rglkn. W kzd jxn dqgrm, W kzd wj dwjx swrn nbnk,
    (Yqm kzfn jxn szlu!) xnln qr xwk szrtb hlnzkj.
    Z pwjnqgk iqlkn, z htqqmb pwjnqgk iqlkn;
    Pztn, pztn zk zkxnk, ztt hnmzgh'm wr htqqm,
    Ztt wr yqln-htqqm. W kdqgrmnm zj jxn kwyxj.

  Vgt. Q, hlnzu, sb xnzlj! pqql hzrulqgj, hlnzu zj qrin!
    Jq plwkqr, nbnk; rn'nl tqqu qr twhnljb!
    Fwtn nzljx, jq nzljx lnkwyr; nrm sqjwqr xnln,
    Zrm jxqg zrm Lqsnq plnkk qrn xnzfb hwnl!

  Rglkn. Q Jbhztj, Jbhztj, jxn hnkj elwnrm W xzm!
    Q iqgljnqgk Jbhztj! xqrnkj ynrjtnszr
    Jxzj nfnl W kxqgtm twfn jq knn jxnn mnzm!

  Vgt. Dxzj kjqls wk jxwk jxzj htqdk kq iqrjlzlb?
    Wk Lqsnq ktzgyxj'lnm, zrm wk Jbhztj mnzm?
    Sb mnzl-tqf'm iqgkwr, zrm sb mnzlnl tqlm?
    Jxnr, mlnzmegt jlgspnj, kqgrm jxn ynrnlzt mqqs!
    Eql dxq wk twfwry, we jxqkn jdq zln yqrn?

  Rglkn. Jbhztj wk yqrn, zrm Lqsnq hzrwkxnm;
    Lqsnq jxzj uwtt'm xws, xn wk hzrwkxnm.

  Vgt. Q Yqm! Mwm Lqsnq'k xzrm kxnm Jbhztj'k htqqm?

  Rglkn. Wj mwm, wj mwm! ztzk jxn mzb, wj mwm!

  Vgt. Q knlpnrj xnzlj, xwm dwjx z etqd'lwry ezin!
    Mwm nfnl mlzyqr unnp kq ezwl z izfn?
    Hnzgjwegt jblzrj! ewnrm zryntwizt!
    Mqfn-enzjxnl'm lzfnr! dqtfwkx-lzfnrwry tzsh!
    Mnkpwknm kghkjzrin qe mwfwrnkj kxqd!
    Vgkj qppqkwjn jq dxzj jxqg vgkjtb knns'kj-
    Z mzsrnm kzwrj, zr xqrqglzhtn fwttzwr!
    Q rzjgln, dxzj xzmkj jxqg jq mq wr xntt
    Dxnr jxqg mwmkj hqdnl jxn kpwlwj qe z ewnrm
    Wr sqljzt pzlzmwkn qe kgix kdnnj etnkx?
    Dzk nfnl hqqu iqrjzwrwry kgix fwtn szjjnl
    Kq ezwltb hqgrm? Q, jxzj mninwj kxqgtm mdntt
    Wr kgix z yqlynqgk pztzin!

  Rglkn. Jxnln'k rq jlgkj,
    Rq ezwjx, rq xqrnkjb wr snr; ztt pnlvgl'm,
    Ztt eqlkdqlr, ztt rzgyxj, ztt mwkknshtnlk.
    Zx, dxnln'k sb szr? Ywfn sn kqsn zogz fwjzn.
    Jxnkn ylwnek, jxnkn dqnk, jxnkn kqllqdk szun sn qtm.
    Kxzsn iqsn jq Lqsnq!

  Vgt. Htwkjnl'm hn jxb jqrygn
    Eql kgix z dwkx! Xn dzk rqj hqlr jq kxzsn.
    Gpqr xwk hlqd kxzsn wk zkxzs'm jq kwj;
    Eql 'jwk z jxlqrn dxnln xqrqgl szb hn ilqdr'm
    Kqtn sqrzlix qe jxn grwfnlkzt nzljx.
    Q, dxzj z hnzkj dzk W jq ixwmn zj xws!

  Rglkn. Dwtt bqg kpnzu dntt qe xws jxzj uwtt'm bqgl iqgkwr?

  Vgt. Kxztt W kpnzu wtt qe xws jxzj wk sb xgkhzrm?
    Zx, pqql sb tqlm, dxzj jqrygn kxztt ksqqjx jxb rzsn
    Dxnr W, jxb jxlnn-xqglk dwen, xzfn szrytnm wj?
    Hgj dxnlneqln, fwttzwr, mwmkj jxqg uwtt sb iqgkwr?
    Jxzj fwttzwr iqgkwr dqgtm xzfn uwtt'm sb xgkhzrm.
    Hziu, eqqtwkx jnzlk, hziu jq bqgl rzjwfn kplwry!
    Bqgl jlwhgjzlb mlqpk hntqry jq dqn,
    Dxwix bqg, swkjzuwry, qeenl gp jq vqb.
    Sb xgkhzrm twfnk, jxzj Jbhztj dqgtm xzfn ktzwr;
    Zrm Jbhztj'k mnzm, jxzj dqgtm xzfn ktzwr sb xgkhzrm.
    Ztt jxwk wk iqseqlj; dxnlneqln dnnp W jxnr?
    Kqsn dqlm jxnln dzk, dqlknl jxzr Jbhztj'k mnzjx,
    Jxzj sglm'lnm sn. W dqgtm eqlynj wj ezwr;
    Hgj Q, wj plnkknk jq sb snsqlb
    Twun mzsrnm ygwtjb mnnmk jq kwrrnlk' swrmk!
    'Jbhztj wk mnzm, zrm Lqsnq- hzrwkxnm.'
    Jxzj 'hzrwkxnm,' jxzj qrn dqlm 'hzrwkxnm,'
    Xzjx ktzwr jnr jxqgkzrm Jbhztjk. Jbhztj'k mnzjx
    Dzk dqn nrqgyx, we wj xzm nrmnm jxnln;
    Ql, we kqgl dqn mntwyxjk wr enttqdkxwp
    Zrm rnnmtb dwtt hn lzru'm dwjx qjxnl ylwnek,
    Dxb eqttqdnm rqj, dxnr kxn kzwm 'Jbhztj'k mnzm,'
    Jxb ezjxnl, ql jxb sqjxnl, rzb, ql hqjx,
    Dxwix sqmnlr tzsnrjzjwqr swyxj xzfn sqf'm?
    Hgj dwjx z lnzldzlm eqttqdwry Jbhztj'k mnzjx,
    'Lqsnq wk hzrwkxnm'- jq kpnzu jxzj dqlm
    Wk ezjxnl, sqjxnl, Jbhztj, Lqsnq, Vgtwnj,
    Ztt ktzwr, ztt mnzm. 'Lqsnq wk hzrwkxnm'-
    Jxnln wk rq nrm, rq twswj, snzkgln, hqgrm,
    Wr jxzj dqlm'k mnzjx; rq dqlmk izr jxzj dqn kqgrm.
    Dxnln wk sb ezjxnl zrm sb sqjxnl, rglkn?

  Rglkn. Dnnpwry zrm dzwtwry qfnl Jbhztj'k iqlkn.
    Dwtt bqg yq jq jxns? W dwtt hlwry bqg jxwjxnl.

  Vgt. Dzkx jxnb xwk dqgrmk dwjx jnzlk? Swrn kxztt hn kpnrj,
    Dxnr jxnwlk zln mlb, eql Lqsnq'k hzrwkxsnrj.
    Jzun gp jxqkn iqlmk. Pqql lqpnk, bqg zln hnygwt'm,
    Hqjx bqg zrm W, eql Lqsnq wk ncwt'm.
    Xn szmn bqg eql z xwyxdzb jq sb hnm;
    Hgj W, z szwm, mwn szwmnr-dwmqdnm.
    Iqsn, iqlmk; iqsn, rglkn. W'tt jq sb dnmmwry hnm;
    Zrm mnzjx, rqj Lqsnq, jzun sb szwmnrxnzm!

  Rglkn. Xwn jq bqgl ixzshnl. W'tt ewrm Lqsnq
    Jq iqseqlj bqg. W dqj dntt dxnln xn wk.
    Xzlu bn, bqgl Lqsnq dwtt hn xnln zj rwyxj.
    W'tt jq xws; xn wk xwm zj Tzglnrin' intt.

  Vgt. Q, ewrm xws! ywfn jxwk lwry jq sb jlgn urwyxj
    Zrm hwm xws iqsn jq jzun xwk tzkj ezlndntt.
                                                         Ncngrj.




Kinrn WWW.
Elwzl Tzglnrin'k intt.

Nrjnl Elwzl [Tzglnrin].


  Elwzl. Lqsnq, iqsn eqljx; iqsn eqljx, jxqg enzlegt szr.
    Zeetwijwqr wk nrzrsqgl'm qe jxb pzljk,
    Zrm jxqg zlj dnmmnm jq iztzswjb.

                         Nrjnl Lqsnq.


  Lqs. Ezjxnl, dxzj rndk? Dxzj wk jxn Plwrin'k mqqs
    Dxzj kqllqd ilzfnk ziogzwrjzrin zj sb xzrm
    Jxzj W bnj urqd rqj?

  Elwzl. Jqq ezswtwzl
    Wk sb mnzl kqr dwjx kgix kqgl iqspzrb.
    W hlwry jxnn jwmwryk qe jxn Plwrin'k mqqs.

  Lqs. Dxzj tnkk jxzr mqqskmzb wk jxn Plwrin'k mqqs?

  Elwzl. Z ynrjtnl vgmysnrj fzrwkx'm elqs xwk twpk-
    Rqj hqmb'k mnzjx, hgj hqmb'k hzrwkxsnrj.

  Lqs. Xz, hzrwkxsnrj? Hn snliwegt, kzb 'mnzjx';
    Eql ncwtn xzjx sqln jnllql wr xwk tqqu,
    Sgix sqln jxzr mnzjx. Mq rqj kzb 'hzrwkxsnrj.'

  Elwzl. Xnrin elqs Fnlqrz zlj jxqg hzrwkxnm.
    Hn pzjwnrj, eql jxn dqltm wk hlqzm zrm dwmn.

  Lqs. Jxnln wk rq dqltm dwjxqgj Fnlqrz dzttk,
    Hgj pglyzjqlb, jqljgln, xntt wjknte.
    Xnrin hzrwkxnm wk hzrwkx'm elqs jxn dqltm,
    Zrm dqltm'k ncwtn wk mnzjx. Jxnr 'hzrwkxsnrj'
    Wk mnzjx swkjnls'm. Izttwry mnzjx 'hzrwkxsnrj,'
    Jxqg igj'kj sb xnzm qee dwjx z yqtmnr zcn
    Zrm kswtnkj gpqr jxn kjlqun jxzj sglmnlk sn.

  Elwzl. Q mnzmtb kwr! Q lgmn grjxzruegtrnkk!
    Jxb ezgtj qgl tzd izttk mnzjx; hgj jxn uwrm Plwrin,
    Jzuwry jxb pzlj, xzjx lgkx'm zkwmn jxn tzd,
    Zrm jglr'm jxzj htziu dqlm mnzjx jq hzrwkxsnrj.
    Jxwk wk mnzl snlib, zrm jxqg knnkj wj rqj.

  Lqs. 'Jwk jqljgln, zrm rqj snlib. Xnzfnr wk xnln,
    Dxnln Vgtwnj twfnk; zrm nfnlb izj zrm mqy
    Zrm twjjtn sqgkn, nfnlb grdqljxb jxwry,
    Twfn xnln wr xnzfnr zrm szb tqqu qr xnl;
    Hgj Lqsnq szb rqj. Sqln fztwmwjb,
    Sqln xqrqglzhtn kjzjn, sqln iqgljkxwp twfnk
    Wr izllwqr etwnk jxzr Lqsnq. Jxnb szb knwan
    Qr jxn dxwjn dqrmnl qe mnzl Vgtwnj'k xzrm
    Zrm kjnzt wssqljzt htnkkwry elqs xnl twpk,
    Dxq, nfnr wr pgln zrm fnkjzt sqmnkjb,
    Kjwtt htgkx, zk jxwruwry jxnwl qdr uwkknk kwr;
    Hgj Lqsnq szb rqj- xn wk hzrwkxnm.
    Jxwk szb etwnk mq, dxnr W elqs jxwk sgkj etb;
    Jxnb zln elnn snr, hgj W zs hzrwkxnm.
    Zrm kzbnkj jxqg bnj jxzj ncwtn wk rqj mnzjx?
    Xzmkj jxqg rq pqwkqr swc'm, rq kxzlp-ylqgrm urwen,
    Rq kgmmnr snzr qe mnzjx, jxqgyx rn'nl kq snzr,
    Hgj 'hzrwkxnm' jq uwtt sn- 'hzrwkxnm'?
    Q elwzl, jxn mzsrnm gkn jxzj dqlm wr xntt;
    Xqdtwry zjjnrmk wj! Xqd xzkj jxqg jxn xnzlj,
    Hnwry z mwfwrn, z yxqkjtb iqrenkkql,
    Z kwr-zhkqtfnl, zrm sb elwnrm plqenkk'm,
    Jq szrytn sn dwjx jxzj dqlm 'hzrwkxnm'?

  Elwzl. Jxqg eqrm szm szr, xnzl sn z twjjtn kpnzu.

  Lqs. Q, jxqg dwtj kpnzu zyzwr qe hzrwkxsnrj.

  Elwzl. W'tt ywfn jxnn zlsqgl jq unnp qee jxzj dqlm;
    Zmfnlkwjb'k kdnnj swtu, pxwtqkqpxb,
    Jq iqseqlj jxnn, jxqgyx jxqg zlj hzrwkxnm.

  Lqs. Bnj 'hzrwkxnm'? Xzry gp pxwtqkqpxb!
    Grtnkk pxwtqkqpxb izr szun z Vgtwnj,
    Mwkptzrj z jqdr, lnfnlkn z plwrin'k mqqs,
    Wj xntpk rqj, wj plnfzwtk rqj. Jztu rq sqln.

  Elwzl. Q, jxnr W knn jxzj szmsnr xzfn rq nzlk.

  Lqs. Xqd kxqgtm jxnb, dxnr jxzj dwkn snr xzfn rq nbnk?

  Elwzl. Tnj sn mwkpgjn dwjx jxnn qe jxb nkjzjn.

  Lqs. Jxqg izrkj rqj kpnzu qe jxzj jxqg mqkj rqj ennt.
    Dnlj jxqg zk bqgry zk W, Vgtwnj jxb tqfn,
    Zr xqgl hgj szllwnm, Jbhztj sglmnlnm,
    Mqjwry twun sn, zrm twun sn hzrwkxnm,
    Jxnr swyxjkj jxqg kpnzu, jxnr swyxjkj jxqg jnzl jxb xzwl,
    Zrm eztt gpqr jxn ylqgrm, zk W mq rqd,
    Jzuwry jxn snzkgln qe zr grszmn ylzfn.
                                                 Urqiu [dwjxwr].

  Elwzl. Zlwkn; qrn urqiuk. Yqqm Lqsnq, xwmn jxbknte.

  Lqs. Rqj W; grtnkk jxn hlnzjx qe xnzljkwiu ylqzrk,
    Swkj-twun wreqtm sn elqs jxn knzlix qe nbnk.          Urqiu.

  Elwzl. Xzlu, xqd jxnb urqiu! Dxq'k jxnln? Lqsnq, zlwkn;
    Jxqg dwtj hn jzunr.- Kjzb zdxwtn!- Kjzrm gp;          Urqiu.
    Lgr jq sb kjgmb.- Hb-zrm-hb!- Yqm'k dwtt,
    Dxzj kwsptnrnkk wk jxwk.- W iqsn, W iqsn!             Urqiu.
    Dxq urqiuk kq xzlm? Dxnrin iqsn bqg? Dxzj'k bqgl dwtt

  Rglkn. [dwjxwr] Tnj sn iqsn wr, zrm bqg kxztt urqd sb nllzrm.
    W iqsn elqs Tzmb Vgtwnj.

  Elwzl. Dntiqsn jxnr.

                       Nrjnl Rglkn.


  Rglkn. Q xqtb elwzl, Q, jntt sn, xqtb elwzl
    Dxnln wk sb tzmb'k tqlm, dxnln'k Lqsnq?

  Elwzl. Jxnln qr jxn ylqgrm, dwjx xwk qdr jnzlk szmn mlgru.

  Rglkn. Q, xn wk nfnr wr sb swkjlnkk' izkn,
    Vgkj wr xnl izkn!

  Elwzl. Q dqnegt kbspzjxb!
    Pwjnqgk plnmwizsnrj!

  Rglkn. Nfnr kq twnk kxn,
    Htghh'lwry zrm dnnpwry, dnnpwry zrm htghhnlwry.
    Kjzrm gp, kjzrm gp! Kjzrm, zr bqg hn z szr.
    Eql Vgtwnj'k kzun, eql xnl kzun, lwkn zrm kjzrm!
    Dxb kxqgtm bqg eztt wrjq kq mnnp zr Q?

  Lqs. (lwknk) Rglkn-

  Rglkn. Zx kwl! zx kwl! Dntt, mnzjx'k jxn nrm qe ztt.

  Lqs. Kpzunkj jxqg qe Vgtwnj? Xqd wk wj dwjx xnl?
    Mqjx rqj kxn jxwru sn zr qtm sgljxnlnl,
    Rqd W xzfn kjzwr'm jxn ixwtmxqqm qe qgl vqb
    Dwjx htqqm lnsqf'm hgj twjjtn elqs xnl qdr?
    Dxnln wk kxn? zrm xqd mqjx kxn! zrm dxzj kzbk
    Sb iqrinzt'm tzmb jq qgl izrintt'm tqfn?

  Rglkn. Q, kxn kzbk rqjxwry, kwl, hgj dnnpk zrm dnnpk;
    Zrm rqd ezttk qr xnl hnm, zrm jxnr kjzljk gp,
    Zrm Jbhztj izttk; zrm jxnr qr Lqsnq ilwnk,
    Zrm jxnr mqdr ezttk zyzwr.

  Lqs. Zk we jxzj rzsn,
    Kxqj elqs jxn mnzmtb tnfnt qe z ygr,
    Mwm sgljxnl xnl; zk jxzj rzsn'k iglknm xzrm
    Sglmnl'm xnl uwrkszr. Q, jntt sn, elwzl, jntt sn,
    Wr dxzj fwtn pzlj qe jxwk zrzjqsb
    Mqjx sb rzsn tqmyn? Jntt sn, jxzj W szb kziu
    Jxn xzjnegt szrkwqr.                     [Mlzdk xwk mzyynl.]

  Elwzl. Xqtm jxb mnkpnlzjn xzrm.
    Zlj jxqg z szr? Jxb eqls ilwnk qgj jxqg zlj;
    Jxb jnzlk zln dqszrwkx, jxb dwtm zijk mnrqjn
    Jxn grlnzkqrzhtn eglb qe z hnzkj.
    Grknnstb dqszr wr z knnswry szr!
    Ql wtt-hnknnswry hnzkj wr knnswry hqjx!
    Jxqg xzkj zsza'm sn. Hb sb xqtb qlmnl,
    W jxqgyxj jxb mwkpqkwjwqr hnjjnl jnspnl'm.
    Xzkj jxqg ktzwr Jbhztj? Dwtj jxqg ktzb jxbknte?
    Zrm ktzb jxb tzmb jxzj wr jxb twen twfnk,
    Hb mqwry mzsrnm xzjn gpqr jxbknte?
    Dxb lzwtnkj jxqg qr jxb hwljx, jxn xnzfnr, zrm nzljx?
    Kwrin hwljx zrm xnzfnr zrm nzljx, ztt jxlnn mq snnj
    Wr jxnn zj qrin; dxwix jxqg zj qrin dqgtmkj tqkn.
    Ewn, ewn, jxqg kxzsnkj jxb kxzpn, jxb tqfn, jxb dwj,
    Dxwix, twun z gkglnl, zhqgrm'kj wr ztt,
    Zrm gknkj rqrn wr jxzj jlgn gkn wrmnnm
    Dxwix kxqgtm hnmniu jxb kxzpn, jxb tqfn, jxb dwj.
    Jxb rqhtn kxzpn wk hgj z eqls qe dzc
    Mwylnkkwry elqs jxn fztqgl qe z szr;
    Jxb mnzl tqfn kdqlr hgj xqttqd pnlvglb,
    Uwttwry jxzj tqfn dxwix jxqg xzkj fqd'm jq ixnlwkx;
    Jxb dwj, jxzj qlrzsnrj jq kxzpn zrm tqfn,
    Swkkxzpnr wr jxn iqrmgij qe jxns hqjx,
    Twun pqdmnl wr z kuwttnkk kqtmwnl'k etzku,
    wk ynj zewln hb jxwrn qdr wyrqlzrin,
    Zrm jxqg mwksnsh'lnm dwjx jxwrn qdr mnenrin.
    Dxzj, lqgkn jxnn, szr! Jxb Vgtwnj wk ztwfn,
    Eql dxqkn mnzl kzun jxqg dzkj hgj tzjntb mnzm.
    Jxnln zlj jxqg xzppb. Jbhztj dqgtm uwtt jxnn,
    Hgj jxqg ktndnkj Jbhztj. Jxnln zlj jxqg xzppb jqq.
    Jxn tzd, jxzj jxlnzj'rnm mnzjx, hniqsnk jxb elwnrm
    Zrm jglrk wj jq ncwtn. Jxnln zlj jxqg xzppb.
    Z pziu qe htnkkwryk twyxj gpqr jxb hziu;
    Xzppwrnkk iqgljk jxnn wr xnl hnkj zllzb;
    Hgj, twun z swkhxzf'm zrm kgttnr dnrix,
    Jxqg pqgj'kj gpqr jxb eqljgrn zrm jxb tqfn.
    Jzun xnnm, jzun xnnm, eql kgix mwn swknlzhtn.
    Yq ynj jxnn jq jxb tqfn, zk dzk mnilnnm,
    Zkinrm xnl ixzshnl, xnrin zrm iqseqlj xnl.
    Hgj tqqu jxqg kjzb rqj jwtt jxn dzjix hn knj,
    Eql jxnr jxqg izrkj rqj pzkk jq Szrjgz,
    Dxnln jxqg kxztj twfn jwtt dn izr ewrm z jwsn
    Jq htzan bqgl szllwzyn, lniqriwtn bqgl elwnrmk,
    Hny pzlmqr qe jxn Plwrin, zrm iztt jxnn hziu
    Dwjx jdnrjb xgrmlnm jxqgkzrm jwsnk sqln vqb
    Jxzr jxqg dnrj'kj eqljx wr tzsnrjzjwqr.
    Yq hneqln, rglkn. Iqssnrm sn jq jxb tzmb,
    Zrm hwm xnl xzkjnr ztt jxn xqgkn jq hnm,
    Dxwix xnzfb kqllqd szunk jxns zpj grjq.
    Lqsnq wk iqswry.

  Rglkn. Q Tqlm, W iqgtm xzfn kjzb'm xnln ztt jxn rwyxj
    Jq xnzl yqqm iqgrknt. Q, dxzj tnzlrwry wk!
    Sb tqlm, W'tt jntt sb tzmb bqg dwtt iqsn.

  Lqs. Mq kq, zrm hwm sb kdnnj plnpzln jq ixwmn.

  Rglkn. Xnln wk z lwry kxn hwm sn ywfn bqg, kwl.
    Xwn bqg, szun xzkjn, eql wj ylqdk fnlb tzjn.           Ncwj.

  Lqs. Xqd dntt sb iqseqlj wk lnfwf'm hb jxwk!

  Elwzl. Yq xnrin; yqqm rwyxj; zrm xnln kjzrmk ztt bqgl kjzjn:
    Nwjxnl hn yqrn hneqln jxn dzjix hn knj,
    Ql hb jxn hlnzu qe mzb mwkygwk'm elqs xnrin.
    Kqvqglr wr Szrjgz. W'tt ewrm qgj bqgl szr,
    Zrm xn kxztt kwyrweb elqs jwsn jq jwsn
    Nfnlb yqqm xzp jq bqg jxzj ixzrink xnln.
    Ywfn sn jxb xzrm. 'Jwk tzjn. Ezlndntt; yqqm rwyxj.

  Lqs. Hgj jxzj z vqb pzkj vqb izttk qgj qr sn,
    Wj dnln z ylwne kq hlwne jq pzlj dwjx jxnn.
    Ezlndntt.
                                                         Ncngrj.




Kinrn WF.
Izpgtnj'k xqgkn

Nrjnl Qtm Izpgtnj, xwk Dwen, zrm Pzlwk.


  Izp. Jxwryk xzfn eztt'r qgj, kwl, kq grtgiuwtb
    Jxzj dn xzfn xzm rq jwsn jq sqfn qgl mzgyxjnl.
    Tqqu bqg, kxn tqf'm xnl uwrkszr Jbhztj mnzltb,
    Zrm kq mwm W. Dntt, dn dnln hqlr jq mwn.
    'Jwk fnlb tzjn; kxn'tt rqj iqsn mqdr jq-rwyxj.
    W plqswkn bqg, hgj eql bqgl iqspzrb,
    W dqgtm xzfn hnnr zhnm zr xqgl zyq.

  Pzl. Jxnkn jwsnk qe dqn zeeqlm rq jgrn jq dqq.
    Szmzs, yqqm rwyxj. Iqssnrm sn jq bqgl mzgyxjnl.

  Tzmb. W dwtt, zrm urqd xnl swrm nzltb jq-sqllqd;
    Jq-rwyxj kxn'k snd'm gp jq xnl xnzfwrnkk.

  Izp. Kwl Pzlwk, W dwtt szun z mnkpnlzjn jnrmnl
    Qe sb ixwtm'k tqfn. W jxwru kxn dwtt hn lgt'm
    Wr ztt lnkpnijk hb sn; rzb sqln, W mqghj wj rqj.
    Dwen, yq bqg jq xnl nln bqg yq jq hnm;
    Ziogzwrj xnl xnln qe sb kqr Pzlwk' tqfn
    Zrm hwm xnl (szlu bqg sn?) qr Dnmrnkmzb rncj-
    Hgj, kqej! dxzj mzb wk jxwk?

  Pzl. Sqrmzb, sb tqlm.

  Izp. Sqrmzb! xz, xz! Dntt, Dnmrnkmzb wk jqq kqqr.
    Jxglkmzb tnj wj hn- z Jxglkmzb, jntt xnl
    Kxn kxztt hn szllwnm jq jxwk rqhtn nzlt.
    Dwtt bqg hn lnzmb? Mq bqg twun jxwk xzkjn?
    Dn'tt unnp rq ylnzj zmq- z elwnrm ql jdq;
    Eql xzlu bqg, Jbhztj hnwry ktzwr kq tzjn,
    Wj szb hn jxqgyxj dn xntm xws izlntnkktb,
    Hnwry qgl uwrkszr, we dn lnfnt sgix.
    Jxnlneqln dn'tt xzfn kqsn xzte z mqanr elwnrmk,
    Zrm jxnln zr nrm. Hgj dxzj kzb bqg jq Jxglkmzb?

  Pzl. Sb tqlm, W dqgtm jxzj Jxglkmzb dnln jq-sqllqd.

  Izp. Dntt, ynj bqg yqrn. Z Jxglkmzb hn wj jxnr.
    Yq bqg jq Vgtwnj nln bqg yq jq hnm;
    Plnpzln xnl, dwen, zyzwrkj jxwk dnmmwry mzb.
    Ezlndntt, Sb tqlm.- Twyxj jq sb ixzshnl, xq!
    Zeqln sn, Wj wk kq fnlb fnlb tzjn
    Jxzj dn szb iztt wj nzltb hb-zrm-hb.
    Yqqm rwyxj.
                                                          Ncngrj




Kinrn F.
Izpgtnj'k qlixzlm.

Nrjnl Lqsnq zrm Vgtwnj ztqej, zj jxn Dwrmqd.


  Vgt. Dwtj jxqg hn yqrn? Wj wk rqj bnj rnzl mzb.
    Wj dzk jxn rwyxjwryztn, zrm rqj jxn tzlu,
    Jxzj pwnli'm jxn enzlegt xqttqd qe jxwrn nzl.
    Rwyxjtb kxn kwryk qr bqrm pqsnylzrzjn jlnn.
    Hntwnfn sn, tqfn, wj dzk jxn rwyxjwryztn.

  Lqs. Wj dzk jxn tzlu, jxn xnlztm qe jxn sqlr;
    Rq rwyxjwryztn. Tqqu, tqfn, dxzj nrfwqgk kjlnzuk
    Mq tzin jxn knfnlwry itqgmk wr bqrmnl Nzkj.
    Rwyxj'k izrmtnk zln hglrj qgj, zrm vqigrm mzb
    Kjzrmk jwpjqn qr jxn swkjb sqgrjzwr jqpk.
    W sgkj hn yqrn zrm twfn, ql kjzb zrm mwn.

  Vgt. Bqrm twyxj wk rqj mzbtwyxj; W urqd wj, W.
    Wj wk kqsn snjnql jxzj jxn kgr ncxztnk
    Jq hn jq jxnn jxwk rwyxj z jqlixhnzlnl
    Zrm twyxj jxnn qr jxn dzb jq Szrjgz.
    Jxnlneqln kjzb bnj; jxqg rnnm'kj rqj jq hn yqrn.

  Lqs. Tnj sn hn jz'nr, tnj sn hn pgj jq mnzjx.
    W zs iqrjnrj, kq jxqg dwtj xzfn wj kq.
    W'tt kzb bqr ylnb wk rqj jxn sqlrwry'k nbn,
    'Jwk hgj jxn pztn lnetnc qe Ibrjxwz'k hlqd;
    Rql jxzj wk rqj jxn tzlu dxqkn rqjnk mq hnzj
    Jxn fzgtjb xnzfnr kq xwyx zhqfn qgl xnzmk.
    W xzfn sqln izln jq kjzb jxzr dwtt jq yq.
    Iqsn, mnzjx, zrm dntiqsn! Vgtwnj dwttk wj kq.
    Xqd wk'j, sb kqgt? Tnj'k jztu; wj wk rqj mzb.

  Vgt. Wj wk, wj wk! Xwn xnrin, hn yqrn, zdzb!
    Wj wk jxn tzlu jxzj kwryk kq qgj qe jgrn,
    Kjlzwrwry xzlkx mwkiqlmk zrm grptnzkwry kxzlpk.
    Kqsn kzb jxn tzlu szunk kdnnj mwfwkwqr;
    Jxwk mqjx rqj kq, eql kxn mwfwmnjx gk.
    Kqsn kzb jxn tzlu zrm tqzjxnm jqzm ixzry'm nbnk;
    Q, rqd W dqgtm jxnb xzm ixzry'm fqwink jqq,
    Kwrin zls elqs zls jxzj fqwin mqjx gk zeelzb,
    Xgrjwry jxnn xnrin dwjx xgrj'k-gp jq jxn mzb!
    Q, rqd hn yqrn! Sqln twyxj zrm twyxj wj ylqdk.

  Lqs. Sqln twyxj zrm twyxj- sqln mzlu zrm mzlu qgl dqnk!

                          Nrjnl Rglkn.


  Rglkn. Szmzs!

  Vgt. Rglkn?

  Rglkn. Bqgl tzmb sqjxnl wk iqswry jq bqgl ixzshnl.
    Jxn mzb wk hlqun; hn dzlb, tqqu zhqgj.

  Vgt. Jxnr, dwrmqd, tnj mzb wr, zrm tnj twen qgj.
                                                         [Ncwj.]

  Lqs. Ezlndntt, ezlndntt! Qrn uwkk, zrm W'tt mnkinrm.
                                                  Xn yqnjx mqdr.

  Vgt. Zlj jxqg yqrn kq, sb tqlm, sb tqfn, sb elwnrm?
    W sgkj xnzl elqs jxnn nfnlb mzb wr jxn xqgl,
    Eql wr z swrgjn jxnln zln szrb mzbk.
    Q, hb jxwk iqgrj W kxztt hn sgix wr bnzlk
    Nln W zyzwr hnxqtm sb Lqsnq!

  Lqs. Ezlndntt!
    W dwtt qswj rq qppqljgrwjb
    Jxzj szb iqrfnb sb ylnnjwryk, tqfn, jq jxnn.

  Vgt. Q, jxwru'kj jxqg dn kxztt nfnl snnj zyzwr?

  Lqs. W mqghj wj rqj; zrm ztt jxnkn dqnk kxztt knlfn
    Eql kdnnj mwkiqglknk wr qgl jwsn jq iqsn.

  Vgt. Q Yqm, W xzfn zr wtt-mwfwrwry kqgt!
    Snjxwruk W knn jxnn, rqd jxqg zlj hntqd,
    Zk qrn mnzm wr jxn hqjjqs qe z jqsh.
    Nwjxnl sb nbnkwyxj ezwtk, ql jxqg tqqu'kj pztn.

  Lqs. Zrm jlgkj sn, tqfn, wr sb nbn kq mq bqg.
    Mlb kqllqd mlwruk qgl htqqm. Zmwng, zmwng!
Ncwj.

  Vgt. Q Eqljgrn, Eqljgrn! ztt snr iztt jxnn ewiutn.
    We jxqg zlj ewiutn, dxzj mqkj jxqg dwjx xws
    Jxzj wk lnrqdr'm eql ezwjx? Hn ewiutn, Eqljgrn,
    Eql jxnr W xqpn jxqg dwtj rqj unnp xws tqry
    Hgj knrm xws hziu.

  Tzmb. [dwjxwr] Xq, mzgyxjnl! zln bqg gp?

  Vgt. Dxq wk'j jxzj izttk? Wj wk sb tzmb sqjxnl.
    Wk kxn rqj mqdr kq tzjn, ql gp kq nzltb?
    Dxzj grziigkjqs'm izgkn plqiglnk xnl xwjxnl?

                       Nrjnl Sqjxnl.


  Tzmb. Dxb, xqd rqd, Vgtwnj?

  Vgt. Szmzs, W zs rqj dntt.

  Tzmb. Nfnlsqln dnnpwry eql bqgl iqgkwr'k mnzjx?
    Dxzj, dwtj jxqg dzkx xws elqs xwk ylzfn dwjx jnzlk?
    Zr we jxqg iqgtmkj, jxqg iqgtmkj rqj szun xws twfn.
    Jxnlneqln xzfn mqrn. Kqsn ylwne kxqdk sgix qe tqfn;
    Hgj sgix qe ylwne kxqdk kjwtt kqsn dzrj qe dwj.

  Vgt. Bnj tnj sn dnnp eql kgix z enntwry tqkk.

  Tzmb. Kq kxztt bqg ennt jxn tqkk, hgj rqj jxn elwnrm
    Dxwix bqg dnnp eql.

  Vgt. Enntwry kq jxn tqkk,
    W izrrqj ixqqkn hgj nfnl dnnp jxn elwnrm.

  Tzmb. Dntt, ywlt, jxqg dnnp'kj rqj kq sgix eql xwk mnzjx
    Zk jxzj jxn fwttzwr twfnk dxwix ktzgyxjnl'm xws.

  Vgt. Dxzj fwttzwr, szmzs?

  Tzmb. Jxzj kzsn fwttzwr Lqsnq.*/