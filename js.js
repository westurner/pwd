   function randomizzle(E,Q){
var G=626,a=4294967295,W=[],T=NaN,V=[0,2567483615];
var I=397,P=G-1,d=G-I,S=I-G,C=2147483648,J=2147483647,F=4294967296;
function K(N,M){
var i=4294901760,g=65535,U=4294967296,p=N&g,o=(N&i)>>>16,f=M&g,e=(M&i)>>>16,l,k,h;
l=p*f,k=l>>>16,l&=g,k+=p*e,k&=g,k+=o*f,k&=g,h=(k<<16)|l;
return(h<0?h+U:h)}
this.init0=function Z(M){
var L=(arguments.length>0&&isFinite(M)?M&a:4357),N;
for(W=[L],T=G,N=1;
N<G;
W[N++]=L=(69069*L)&a){
}
}
;
this.init=function b(M){
var L=(arguments.length>0&&isFinite(M)?M&a:5489),N;
for(W=[L],T=G,N=1;
N<G;
W[N]=L=K(L^(L>>>30),1812433253)+N++){
}
}
;
this.initByArray=function H(h,R){
var g=G-1,N=h.length,M,f,e,U;
this.init(arguments.length>1&&isFinite(R)?R:19650218);
M=W[0],f=1,e=0,U=Math.max(G,N);
for(;
U;
e%=N,U--){
W[f]=M=((W[f++]^K(M^(M>>>30),1664525))+h[e]+e++)&a;
if(f>g){
W[0]=M=W[g];
f=1}
}
for(U=G-1;
U;
U--){
W[f]=M=((W[f]^K(M^(M>>>30),1566083941))-f++)&a;
if(f>g){
W[0]=M=W[g];
f=1}
}
W[0]=2147483648}
;
this.randomInt32=function O(){
var M,L;
while(T>=G||T<0){
T=Math.max(0,T-G);
for(L=0;
L<d;
M=(W[L]&C)|(W[L+1]&J),W[L]=W[L+I]^(M>>>1)^V[M&1],L++){
}
for(;
L<P;
M=(W[L]&C)|(W[L+1]&J),W[L]=W[L+S]^(M>>>1)^V[M&1],L++){
}
M=(W[P]&C)|(W[0]&J),W[P]=W[I-1]^(M>>>1)^V[M&1]}
M=W[T++],M^=(M>>>11),M^=(M<<7)&2636928640,M^=(M<<15)&4022730752,M^=(M>>>18);
return(M<0?M+F:M)}
;
this.randomInt53=function B(){
var L=67108864;
return(this.randomInt32()>>>5)*L+(this.randomInt32()>>>6)}
;
this.randomReal32=function A(){
var L=4294967296;
return this.randomInt32()/L}
;
this.randomReal53=function Y(){
var L=9007199254740992;
return this.randomInt53()/L}
;
this.randomString=function D(M){
var N,R,L="",U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(N=0;
N<M;
L+=U.charAt((((N++)%5)>0?R:R=this.randomInt32())&63),R>>>=6){
}
return L}
;
this.skip=function X(L){
T=(L<=0?-1:T+L)}
;
this.random=this.randomReal53;
this.randomInt=this.randomInt32;
this.randomInRange=function c(N,R){
var M=R-N;
var L=N+Math.round(M*(this.randomInt32()/4294967295));
return L}
;
if(arguments.length>1){
this.initByArray(Q,E)}
else{
if(arguments.length>0){
this.init(E)}
else{
this.init()}
}
}
var hexcase=0;
var b64pad="";
var chrsz=8;
function hex_md5(A){
return binl2hex(core_md5(str2binl(A),A.length*chrsz))}
function b64_md5(A){
return binl2b64(core_md5(str2binl(A),A.length*chrsz))}
function str_md5(A){
return binl2str(core_md5(str2binl(A),A.length*chrsz))}
function hex_hmac_md5(A,B){
return binl2hex(core_hmac_md5(A,B))}
function b64_hmac_md5(A,B){
return binl2b64(core_hmac_md5(A,B))}
function str_hmac_md5(A,B){
return binl2str(core_hmac_md5(A,B))}
function md5_vm_test(){
return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}
function core_md5(K,F){
K[F>>5]|=128<<((F)%32);
K[(((F+64)>>>9)<<4)+14]=F;
var J=1732584193;
var I=-271733879;
var H=-1732584194;
var G=271733878;
for(var C=0;
C<K.length;
C+=16){
var E=J;
var D=I;
var B=H;
var A=G;
J=md5_ff(J,I,H,G,K[C+0],7,-680876936);
G=md5_ff(G,J,I,H,K[C+1],12,-389564586);
H=md5_ff(H,G,J,I,K[C+2],17,606105819);
I=md5_ff(I,H,G,J,K[C+3],22,-1044525330);
J=md5_ff(J,I,H,G,K[C+4],7,-176418897);
G=md5_ff(G,J,I,H,K[C+5],12,1200080426);
H=md5_ff(H,G,J,I,K[C+6],17,-1473231341);
I=md5_ff(I,H,G,J,K[C+7],22,-45705983);
J=md5_ff(J,I,H,G,K[C+8],7,1770035416);
G=md5_ff(G,J,I,H,K[C+9],12,-1958414417);
H=md5_ff(H,G,J,I,K[C+10],17,-42063);
I=md5_ff(I,H,G,J,K[C+11],22,-1990404162);
J=md5_ff(J,I,H,G,K[C+12],7,1804603682);
G=md5_ff(G,J,I,H,K[C+13],12,-40341101);
H=md5_ff(H,G,J,I,K[C+14],17,-1502002290);
I=md5_ff(I,H,G,J,K[C+15],22,1236535329);
J=md5_gg(J,I,H,G,K[C+1],5,-165796510);
G=md5_gg(G,J,I,H,K[C+6],9,-1069501632);
H=md5_gg(H,G,J,I,K[C+11],14,643717713);
I=md5_gg(I,H,G,J,K[C+0],20,-373897302);
J=md5_gg(J,I,H,G,K[C+5],5,-701558691);
G=md5_gg(G,J,I,H,K[C+10],9,38016083);
H=md5_gg(H,G,J,I,K[C+15],14,-660478335);
I=md5_gg(I,H,G,J,K[C+4],20,-405537848);
J=md5_gg(J,I,H,G,K[C+9],5,568446438);
G=md5_gg(G,J,I,H,K[C+14],9,-1019803690);
H=md5_gg(H,G,J,I,K[C+3],14,-187363961);
I=md5_gg(I,H,G,J,K[C+8],20,1163531501);
J=md5_gg(J,I,H,G,K[C+13],5,-1444681467);
G=md5_gg(G,J,I,H,K[C+2],9,-51403784);
H=md5_gg(H,G,J,I,K[C+7],14,1735328473);
I=md5_gg(I,H,G,J,K[C+12],20,-1926607734);
J=md5_hh(J,I,H,G,K[C+5],4,-378558);
G=md5_hh(G,J,I,H,K[C+8],11,-2022574463);
H=md5_hh(H,G,J,I,K[C+11],16,1839030562);
I=md5_hh(I,H,G,J,K[C+14],23,-35309556);
J=md5_hh(J,I,H,G,K[C+1],4,-1530992060);
G=md5_hh(G,J,I,H,K[C+4],11,1272893353);
H=md5_hh(H,G,J,I,K[C+7],16,-155497632);
I=md5_hh(I,H,G,J,K[C+10],23,-1094730640);
J=md5_hh(J,I,H,G,K[C+13],4,681279174);
G=md5_hh(G,J,I,H,K[C+0],11,-358537222);
H=md5_hh(H,G,J,I,K[C+3],16,-722521979);
I=md5_hh(I,H,G,J,K[C+6],23,76029189);
J=md5_hh(J,I,H,G,K[C+9],4,-640364487);
G=md5_hh(G,J,I,H,K[C+12],11,-421815835);
H=md5_hh(H,G,J,I,K[C+15],16,530742520);
I=md5_hh(I,H,G,J,K[C+2],23,-995338651);
J=md5_ii(J,I,H,G,K[C+0],6,-198630844);
G=md5_ii(G,J,I,H,K[C+7],10,1126891415);
H=md5_ii(H,G,J,I,K[C+14],15,-1416354905);
I=md5_ii(I,H,G,J,K[C+5],21,-57434055);
J=md5_ii(J,I,H,G,K[C+12],6,1700485571);
G=md5_ii(G,J,I,H,K[C+3],10,-1894986606);
H=md5_ii(H,G,J,I,K[C+10],15,-1051523);
I=md5_ii(I,H,G,J,K[C+1],21,-2054922799);
J=md5_ii(J,I,H,G,K[C+8],6,1873313359);
G=md5_ii(G,J,I,H,K[C+15],10,-30611744);
H=md5_ii(H,G,J,I,K[C+6],15,-1560198380);
I=md5_ii(I,H,G,J,K[C+13],21,1309151649);
J=md5_ii(J,I,H,G,K[C+4],6,-145523070);
G=md5_ii(G,J,I,H,K[C+11],10,-1120210379);
H=md5_ii(H,G,J,I,K[C+2],15,718787259);
I=md5_ii(I,H,G,J,K[C+9],21,-343485551);
J=safe_add(J,E);
I=safe_add(I,D);
H=safe_add(H,B);
G=safe_add(G,A)}
return Array(J,I,H,G)}
function md5_cmn(F,C,B,A,E,D){
return safe_add(bit_rol(safe_add(safe_add(C,F),safe_add(A,D)),E),B)}
function md5_ff(C,B,G,F,A,E,D){
return md5_cmn((B&G)|((~B)&F),C,B,A,E,D)}
function md5_gg(C,B,G,F,A,E,D){
return md5_cmn((B&F)|(G&(~F)),C,B,A,E,D)}
function md5_hh(C,B,G,F,A,E,D){
return md5_cmn(B^G^F,C,B,A,E,D)}
function md5_ii(C,B,G,F,A,E,D){
return md5_cmn(G^(B|(~F)),C,B,A,E,D)}
function core_hmac_md5(C,F){
var E=str2binl(C);
if(E.length>16){
E=core_md5(E,C.length*chrsz)}
var A=Array(16),D=Array(16);
for(var B=0;
B<16;
B++){
A[B]=E[B]^909522486;
D[B]=E[B]^1549556828}
var G=core_md5(A.concat(str2binl(F)),512+F.length*chrsz);
return core_md5(D.concat(G),512+128)}
function safe_add(A,D){
var C=(A&65535)+(D&65535);
var B=(A>>16)+(D>>16)+(C>>16);
return(B<<16)|(C&65535)}
function bit_rol(A,B){
return(A<<B)|(A>>>(32-B))}
function str2binl(D){
var C=Array();
var A=(1<<chrsz)-1;
for(var B=0;
B<D.length*chrsz;
B+=chrsz){
C[B>>5]|=(D.charCodeAt(B/chrsz)&A)<<(B%32)}
return C}
function binl2str(C){
var D="";
var A=(1<<chrsz)-1;
for(var B=0;
B<C.length*32;
B+=chrsz){
D+=String.fromCharCode((C[B>>5]>>>(B%32))&A)}
return D}
function binl2hex(C){
var B=hexcase?"0123456789ABCDEF":"0123456789abcdef";
var D="";
for(var A=0;
A<C.length*4;
A++){
D+=B.charAt((C[A>>2]>>((A%4)*8+4))&15)+B.charAt((C[A>>2]>>((A%4)*8))&15)}
return D}
function binl2b64(D){
var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var F="";
for(var B=0;
B<D.length*4;
B+=3){
var E=(((D[B>>2]>>8*(B%4))&255)<<16)|(((D[B+1>>2]>>8*((B+1)%4))&255)<<8)|((D[B+2>>2]>>8*((B+2)%4))&255);
for(var A=0;
A<4;
A++){
if(B*8+A*6>D.length*32){
F+=b64pad}
else{
F+=C.charAt((E>>6*(3-A))&63)}
}
}
return F}
var GST=null;
var GPT=null;
var GT=new Array();
function getLetter(A){
if(A.randomInRange(0,1)){
return"abcdefghijkmnpqrstuvwxyz".charAt(A.randomInRange(0,23))}
else{
return"ABCDEFGHIJKLMNPQRSTUVWXY".charAt(A.randomInRange(0,23))}
}
function getNumber(A){
return"346789".charAt(A.randomInRange(0,5))}
function getPunct(A){
return"~!@#$%^&*_+?".charAt(A.randomInRange(0,11))}
function getCharacter(A,C,B){
while(1){
switch(A.randomInRange(0,3)){
case 0:case 1:return getLetter(A);
case 2:if(C){
return getNumber(A)}
break;
case 3:if(B){
return getPunct(A)}
break}
}
}
function getGarbage(B,F,E){
var D;
var C="";
var A=B.randomInRange(1,3);
for(D=0;
D<A;
D++){
C+=getCharacter(B,F,E)}
return C}
function translatePwd(){
if(GPT!=null){
clearInterval(GPT);
GPT=null}
var D=document.forms[0].elements.seed.value;
var F=document.forms[0].elements.pwd.value.toUpperCase();
var I=document.getElementById("chartResults");
if(D.length>0){
if(F.length>0){
var B="<p><table cellpadding=5 cellspacing=0 id='resultTable'><tr>";
var H="";
var J="0".charCodeAt(0);
var A="A".charCodeAt(0);
var C;
for(C=0;
C<F.length;
C++){
var E=F.charAt(C);
B+="<td><b>"+E+"</b>";
var G=-1;
if((E>="0")&&(E<="9")){
G=26+(E.charCodeAt(0)-J)}
else{
if((E>="A")&&(E<="Z")){
G=E.charCodeAt(0)-A}
}
if(G!=-1){
H+=GT[G];
B+="<br><span class='emph'>"+GT[G]+"</span>"}
B+="</td>"}
B+="</tr></table></p><p><textarea class='result' readonly rows=1 cols=45>"+H+"</textarea></p>";
I.innerHTML=B}
else{
I.innerHTML="<span class='emph nop'>[..]</span>"}
}
else{
if(F.length==0){
I.innerHTML="<span class='emph'>[..]</span>"}
else{
I.innerHTML="<span class='emph'>[ ]</span>"}
}
displayChart()}
function makeChart(){
if(GST!=null){
clearInterval(GST);
GST=null}
var B=document.forms[0].elements.seed.value+"nalgene";
if(B.length>0){
var A=parseInt(hex_md5(B).substr(0,8),16);
var C=new randomizzle(A);
var G=document.forms[0].elements.numbers.checked;
var F=document.forms[0].elements.punct.checked;
var D=(G||F?(G&&F?4:(F?3:2)):1);
document.getElementById("CNB").innerHTML="# "+(A*D);
var E;
for(E=0;
E<36;
E++){
GT[E]=getGarbage(C,G,F)}
}
else{
document.getElementById("CNB").innerHTML="&nbsp;
"}
translatePwd()}
function displayChart(){
var C="<table cellspacing=3 cellpadding=3>";
var A=document.forms[0].elements.seed.value;
if(A.length>0){
var E=document.forms[0].elements.pwd.value.toUpperCase();
var B;
var D="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
for(B=0;
B<36;
B++){
if(B%4==0){
C+="<tr>"}
C+="<td width=75><b>"+D.charAt(B)+"</b>: ";
if(E.indexOf(D.charAt(B))!=-1){
C+=("<span class='emph'>"+GT[B]+"</span></td>")}
else{
C+=GT[B]}
C+="</td>";
if((B+1)%4==0){
C+="</tr>"}
}
C+="</table>";
document.getElementById("chart").innerHTML=C}
else{
for(B=0;
B<9;
B++){
C+="<tr>";
for(j=0;
j<4;
j++){
C+="<td width=75>&nbsp;
</td>"}
C+="</tr>"}
C+="</table>"}
document.getElementById("chart").innerHTML=C}
function seedKeypressed(A){
if(GST!=null){
clearInterval(GST)}
GST=setInterval("makeChart();
",50)}
function pwdKeypressed(A){
if(GPT!=null){
clearInterval(GPT)}
GPT=setInterval("translatePwd();
",50)}
;


