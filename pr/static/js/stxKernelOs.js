/* File generated Thu Apr 16 2015 18:26:44 GMT-0400 (EDT) */
/* Expires on 2015/05/16 */
/*
Copyright 2014 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2015/05/16";
	if (trialExpiration != "undefined") {
		var expiration = new Date(trialExpiration);
		var now = new Date();
		if (now.getTime() > expiration.getTime()) {
			alert("This license has expired!");
			console.log("This license has expired!");
		} else {
			var diffDays = (expiration.getTime() - now.getTime());
			diffDays = Math.round(Math.abs(diffDays/(1000*60*60*24)));
			if ( diffDays < 3) {
				alert("This license expires in " + diffDays + " days!");
				console.log("This license expires in " + diffDays + " days!");
			}
		}
	}
	var version=["Version -hackathon"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=[/*<domains>*/];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var B5O={'i1u':function(a1u,U1u){return a1u-U1u;}
,'l0b':function(c0b,R0b){return c0b!=R0b;}
,'P79':function(E79,j79){return E79-j79;}
,'L00':function(t00,A00){return t00!=A00;}
,'v9X':function(W9X,s9X){return W9X-s9X;}
,'o3b':function(d3b,u3b){return d3b/u3b;}
,'e09':function(o09,d09){return o09*d09;}
,'A10':function(v10,W10){return v10==W10;}
,'B6S':function(x6S,P6S){return x6S==P6S;}
,'i8S':function(a8S,U8S){return a8S==U8S;}
,'X6N':function(Q6N,H6N){return Q6N==H6N;}
,'B69':function(x69,P69){return x69*P69;}
,'A0N':function(v0N,W0N){return v0N!=W0N;}
,'a4b':function(U4b,b4b){return U4b-b4b;}
,'i3u':function(a3u,U3u){return a3u<U3u;}
,'C8b':function(K8b,D8b){return K8b/D8b;}
,'D9S':function(k9S,V9S){return k9S!=V9S;}
,'W80':function(s80,p80){return s80==p80;}
,'v2b':function(W2b,s2b){return W2b==s2b;}
,'s5S':function(p5S,r5S){return p5S<r5S;}
,'E29':function(j29,T29){return j29-T29;}
,'Y49':function(w49,f49){return w49==f49;}
,'f8S':function(B8S,x8S){return B8S!==x8S;}
,'a1S':function(U1S,b1S){return U1S*b1S;}
,'s1b':function(p1b,r1b){return p1b>r1b;}
,'L89':function(t89,A89){return t89<=A89;}
,'y1u':function(F1u,M1u){return F1u==M1u;}
,'p5N':function(r5N,N5N){return r5N<=N5N;}
,'o3k':function(d3k,u3k){return d3k==u3k;}
,'e4k':function(o4k,d4k){return o4k<d4k;}
,'m29':function(O79,h79){return O79-h79;}
,'q1k':function(i1k,a1k){return i1k*a1k;}
,'J7S':function(g7S,q7S){return g7S<q7S;}
,'M49':function(J49,g49){return J49==g49;}
,'q49':function(i49,a49){return i49==a49;}
,'c4S':function(R4S,n4S){return R4S>n4S;}
,'l5':function(c5,R5){return c5/R5;}
,'R1b':function(n1b,Z1b){return n1b-Z1b;}
,'d0k':function(u0k,Y0k){return u0k-Y0k;}
,'J66':function(g66,q66){return g66!=q66;}
,'T0S':function(m0S,O1S){return m0S*O1S;}
,'R5u':function(n5u,Z5u){return n5u>=Z5u;}
,'Z8k':function(I8k,X8k){return I8k*X8k;}
,'r79':function(N79,y79){return N79!=y79;}
,'j36':function(T36,m36){return T36<=m36;}
,'S0S':function(G0S,l0S){return G0S>=l0S;}
,'t86':function(A86,v86){return A86==v86;}
,'A59':function(v59,W59){return v59!=W59;}
,'v89':function(W89,s89){return W89*s89;}
,'d9':function(u9,Y9){return u9<Y9;}
,'B1k':function(x1k,P1k){return x1k>P1k;}
,'X7N':function(Q7N,H7N){return Q7N-H7N;}
,'S8X':function(G8X,l8X){return G8X==l8X;}
,'x8N':function(P8N,E8N){return P8N>E8N;}
,'j9k':function(T9k,m9k){return T9k*m9k;}
,'o59':function(d59,u59){return d59!=u59;}
,'d46':function(u46,Y46){return u46/Y46;}
,'p5I':function(r5I,N5I){return r5I==N5I;}
,'K6u':function(D6u,k6u){return D6u>k6u;}
,'F6k':function(M6k,J6k){return M6k<J6k;}
,'Q8k':function(H8k,z8k){return H8k*z8k;}
,'V70':function(L70,t70){return L70==t70;}
,'e4S':function(o4S,d4S){return o4S-d4S;}
,'L0b':function(t0b,A0b){return t0b==A0b;}
,'S8k':function(G8k,l8k){return G8k>l8k;}
,'V3b':function(L3b,t3b){return L3b<t3b;}
,'Y3b':function(w3b,f3b){return w3b!=f3b;}
,'D7':function(k7,V7){return k7!=V7;}
,'p0X':function(r0X,N0X){return r0X-N0X;}
,'V3S':function(L3S,t3S,A3S){return L3S-t3S-A3S;}
,'M5':function(J5,g5){return J5==g5;}
,'y5N':function(F5N,M5N){return F5N<M5N;}
,'C1N':function(K1N,D1N){return K1N|D1N;}
,'M26':function(J26,g26){return J26>=g26;}
,'w3S':function(f3S,B3S){return f3S<B3S;}
,'c5X':function(R5X,n5X){return R5X==n5X;}
,'N7k':function(y7k,F7k){return y7k-F7k;}
,'O4u':function(h4u,C4u){return h4u<C4u;}
,'w7S':function(f7S,B7S){return f7S!==B7S;}
,'G10':function(l10,c10){return l10-c10;}
,'r40':function(N40,y40){return N40==y40;}
,'r0u':function(N0u,y0u){return N0u<=y0u;}
,'E10':function(j10,T10){return j10-T10;}
,'D1u':function(k1u,V1u){return k1u>=V1u;}
,'G26':function(l26,c26){return l26<c26;}
,'o6u':function(d6u,u6u){return d6u==u6u;}
,'R59':function(n59,Z59){return n59<=Z59;}
,'F29':function(M29,J29){return M29>J29;}
,'d0b':function(u0b,Y0b){return u0b<Y0b;}
,'N3':function(y3,F3,M3){return y3*F3/M3;}
,'G49':function(l49,c49){return l49!=c49;}
,'M3X':function(J3X,g3X){return J3X*g3X;}
,'E4u':function(j4u,T4u){return j4u>=T4u;}
,'E56':function(j56,T56){return j56==T56;}
,'D2k':function(k2k,V2k){return k2k*V2k;}
,'D9X':function(k9X,V9X){return k9X<V9X;}
,'m8u':function(O9u,h9u){return O9u-h9u;}
,'s70':function(p70,r70){return p70<r70;}
,'S1S':function(G1S,l1S){return G1S-l1S;}
,'L4':function(t4,A4,v4){return t4*A4*v4;}
,'X2k':function(Q2k,H2k){return Q2k<H2k;}
,'W6k':function(s6k,p6k){return s6k*p6k;}
,'W2u':function(s2u,p2u){return s2u&p2u;}
,'x5I':function(P5I,E5I){return P5I>=E5I;}
,'Z0S':function(I0S,X0S){return I0S<X0S;}
,'h7':function(C7,K7){return C7-K7;}
,'K1k':function(D1k,k1k){return D1k==k1k;}
,'p2X':function(r2X,N2X){return r2X==N2X;}
,'e4b':function(o4b,d4b){return o4b-d4b;}
,'C0S':function(K0S,D0S){return K0S-D0S;}
,'z9k':function(e9k,o9k){return e9k<o9k;}
,'u39':function(Y39,w39,f39){return Y39-w39-f39;}
,'Y3k':function(w3k,f3k){return w3k/f3k;}
,'U7b':function(b7b,S7b){return b7b==S7b;}
,'M9N':function(J9N,g9N){return J9N>=g9N;}
,'s3':function(p3,r3){return p3==r3;}
,'G3k':function(l3k,c3k,R3k,n3k){return l3k-c3k+R3k+n3k;}
,'f5b':function(B5b,x5b){return B5b in x5b;}
,'P4b':function(E4b,j4b){return E4b!=j4b;}
,'S76':function(G76,l76){return G76/l76;}
,'R5S':function(n5S,Z5S){return n5S==Z5S;}
,'g0':function(q0,i0){return q0/i0;}
,'Q60':function(H60,z60){return H60/z60;}
,'l20':function(c20,R20){return c20==R20;}
,'P96':function(E96,j96){return E96<j96;}
,'P8k':function(E8k,j8k){return E8k!=j8k;}
,'L5I':function(t5I,A5I){return t5I-A5I;}
,'t5X':function(A5X,v5X){return A5X==v5X;}
,'j2X':function(T2X,m2X){return T2X<m2X;}
,'y0k':function(F0k,M0k){return F0k>M0k;}
,'x8I':function(P8I,E8I){return P8I/E8I;}
,'F6X':function(M6X,J6X){return M6X==J6X;}
,'q6u':function(i6u,a6u){return i6u!=a6u;}
,'l3':function(c3,R3){return c3==R3;}
,'r09':function(N09,y09){return N09==y09;}
,'i9k':function(a9k,U9k){return a9k==U9k;}
,'f0S':function(B0S,x0S){return B0S-x0S;}
,'I4u':function(X4u,Q4u){return X4u-Q4u;}
,'R8u':function(n8u,Z8u){return n8u<Z8u;}
,'C09':function(K09,D09){return K09==D09;}
,'K9N':function(D9N,k9N){return D9N>=k9N;}
,'H10':function(z10,e10){return z10<e10;}
,'a6k':function(U6k,b6k){return U6k>b6k;}
,'Z0u':function(I0u,X0u){return I0u>X0u;}
,'I90':function(X90,Q90){return X90*Q90;}
,'R56':function(n56,Z56){return n56==Z56;}
,'d2b':function(u2b,Y2b){return u2b<Y2b;}
,'A1b':function(v1b,W1b){return v1b<=W1b;}
,'f1S':function(B1S,x1S){return B1S-x1S;}
,'y96':function(F96,M96){return F96*M96;}
,'N0I':function(y0I,F0I){return y0I<=F0I;}
,'o1k':function(d1k,u1k){return d1k<u1k;}
,'J9k':function(g9k,q9k){return g9k<q9k;}
,'f9u':function(B9u,x9u){return B9u*x9u;}
,'B56':function(x56,P56){return x56-P56;}
,'n19':function(Z19,I19){return Z19>=I19;}
,'F8k':function(M8k,J8k){return M8k<J8k;}
,'z4N':function(e4N,o4N){return e4N>o4N;}
,'s0I':function(p0I,r0I){return p0I<r0I;}
,'W8b':function(s8b,p8b){return s8b>p8b;}
,'E9I':function(j9I,T9I){return j9I>=T9I;}
,'d4N':function(u4N,Y4N){return u4N-Y4N;}
,'k66':function(V66,L66){return V66<L66;}
,'n3u':function(Z3u,I3u){return Z3u<I3u;}
,'I6u':function(X6u,Q6u){return X6u>=Q6u;}
,'R6':function(n6,Z6){return n6==Z6;}
,'D9k':function(k9k,V9k){return k9k<V9k;}
,'G7N':function(l7N,c7N,R7N){return l7N-c7N+R7N;}
,'D2S':function(k2S,V2S){return k2S==V2S;}
,'C60':function(K60,D60){return K60==D60;}
,'K1b':function(D1b,k1b){return D1b==k1b;}
,'M70':function(J70,g70){return J70==g70;}
,'k1':function(V1,L1){return V1<=L1;}
,'x0k':function(P0k,E0k){return P0k/E0k;}
,'l46':function(c46,R46){return c46==R46;}
,'n66':function(Z66,I66){return Z66<I66;}
,'F2u':function(M2u,J2u){return M2u&J2u;}
,'o6S':function(d6S,u6S){return d6S==u6S;}
,'l9':function(c9,R9){return c9-R9;}
,'O2N':function(h2N,C2N){return h2N!=C2N;}
,'k0u':function(V0u,L0u){return V0u&L0u;}
,'Y7b':function(w7b,f7b){return w7b>=f7b;}
,'L2X':function(t2X,A2X){return t2X<=A2X;}
,'a0S':function(U0S,b0S){return U0S<b0S;}
,'B49':function(x49,P49){return x49!=P49;}
,'u1S':function(Y1S,w1S){return Y1S<w1S;}
,'X0X':function(Q0X,H0X){return Q0X/H0X;}
,'o0N':function(d0N,u0N){return d0N==u0N;}
,'b3S':function(S3S,G3S){return S3S<G3S;}
,'C39':function(K39,D39){return K39==D39;}
,'s5u':function(p5u,r5u){return p5u==r5u;}
,'a06':function(U06,b06){return U06*b06;}
,'t4b':function(A4b,v4b){return A4b<=v4b;}
,'F8':function(M8,J8){return M8!=J8;}
,'Y9N':function(w9N,f9N){return w9N!=f9N;}
,'N1b':function(y1b,F1b){return y1b*F1b;}
,'J0X':function(g0X,q0X){return g0X-q0X;}
,'n7':function(Z7,I7){return Z7==I7;}
,'s1k':function(p1k,r1k){return p1k>r1k;}
,'g80':function(q80,i80){return q80<i80;}
,'A99':function(v99,W99){return v99==W99;}
,'A7k':function(v7k,W7k){return v7k-W7k;}
,'P5k':function(E5k,j5k){return E5k*j5k;}
,'j5N':function(T5N,m5N){return T5N<m5N;}
,'b0X':function(S0X,G0X){return S0X-G0X;}
,'A5S':function(v5S,W5S){return v5S<=W5S;}
,'Z76':function(I76,X76){return I76-X76;}
,'z3u':function(e3u,o3u){return e3u>o3u;}
,'N3k':function(y3k,F3k,M3k){return y3k-F3k+M3k;}
,'L19':function(t19,A19){return t19-A19;}
,'H7k':function(z7k,e7k){return z7k==e7k;}
,'i0X':function(a0X,U0X){return a0X==U0X;}
,'x3u':function(P3u,E3u){return P3u/E3u;}
,'w2k':function(f2k,B2k){return f2k*B2k;}
,'e5b':function(o5b,d5b){return o5b>d5b;}
,'d7N':function(u7N,Y7N){return u7N/Y7N;}
,'O7b':function(h7b,C7b){return h7b-C7b;}
,'Z3I':function(I3I,X3I){return I3I<X3I;}
,'t66':function(A66,v66){return A66-v66;}
,'g6k':function(q6k,i6k){return q6k<i6k;}
,'n2X':function(Z2X,I2X){return Z2X==I2X;}
,'S4b':function(G4b,l4b){return G4b-l4b;}
,'J9X':function(g9X,q9X){return g9X==q9X;}
,'y4N':function(F4N,M4N){return F4N*M4N;}
,'N1':function(F1,M1){return F1==M1;}
,'K2N':function(D2N,k2N){return D2N/k2N;}
,'D7S':function(k7S,V7S){return k7S!=V7S;}
,'U7k':function(b7k,S7k){return b7k<=S7k;}
,'K3':function(D3,k3){return D3==k3;}
,'k76':function(V76,L76){return V76/L76;}
,'W0S':function(s0S,p0S){return s0S==p0S;}
,'r69':function(N69,y69){return N69/y69;}
,'e1N':function(o1N,d1N){return o1N==d1N;}
,'Y1b':function(w1b,f1b){return w1b-f1b;}
,'K1X':function(D1X,k1X){return D1X>k1X;}
,'x16':function(P16,E16){return P16/E16;}
,'b7':function(S7,G7){return S7==G7;}
,'M8u':function(J8u,g8u){return J8u==g8u;}
,'h9S':function(C9S,K9S){return C9S-K9S;}
,'z9':function(e9,o9){return e9==o9;}
,'l5I':function(c5I,R5I){return c5I-R5I;}
,'X9k':function(Q9k,H9k){return Q9k<H9k;}
,'g1S':function(q1S,i1S){return q1S*i1S;}
,'E3X':function(j3X,T3X){return j3X==T3X;}
,'i8I':function(a8I,U8I){return a8I/U8I;}
,'V0N':function(L0N,t0N){return L0N!=t0N;}
,'g0u':function(q0u,i0u){return q0u>=i0u;}
,'y90':function(F90,M90){return F90!=M90;}
,'y5I':function(F5I,M5I){return F5I>M5I;}
,'w89':function(f89,B89){return f89!=B89;}
,'U56':function(b56,S56){return b56==S56;}
,'e8b':function(o8b,d8b){return o8b/d8b;}
,'y19':function(F19,M19){return F19-M19;}
,'X89':function(Q89,H89){return Q89!=H89;}
,'U3b':function(b3b,S3b){return b3b!=S3b;}
,'b9':function(S9,G9){return S9==G9;}
,'Q80':function(H80,z80){return H80<=z80;}
,'p20':function(r20,N20){return r20==N20;}
,'z8I':function(e8I,o8I){return e8I==o8I;}
,'l1':function(c1,R1){return c1*R1;}
,'Q1N':function(H1N,z1N){return H1N==z1N;}
,'c86':function(R86,n86){return R86<n86;}
,'x36':function(P36,E36){return P36!=E36;}
,'d9S':function(u9S,Y9S){return u9S!=Y9S;}
,'Y70':function(w70,f70){return w70==f70;}
,'x7':function(P7,E7){return P7<E7;}
,'p4N':function(r4N,N4N){return r4N==N4N;}
,'I56':function(X56,Q56){return X56==Q56;}
,'H3X':function(z3X,e3X){return z3X<e3X;}
,'C3N':function(K3N,D3N){return K3N in D3N;}
,'h2':function(C2,K2){return C2*K2;}
,'l9k':function(c9k,R9k){return c9k>R9k;}
,'L46':function(t46,A46){return t46-A46;}
,'H8u':function(z8u,e8u){return z8u<e8u;}
,'E9N':function(j9N,T9N){return j9N!=T9N;}
,'z7N':function(e7N,o7N){return e7N<o7N;}
,'i89':function(a89,U89){return a89==U89;}
,'K0N':function(D0N,k0N){return D0N%k0N;}
,'B0N':function(x0N,P0N){return x0N|P0N;}
,'e2':function(o2,u2){return o2*u2;}
,'q9I':function(i9I,a9I){return i9I>=a9I;}
,'M30':function(J30,g30){return J30==g30;}
,'r3I':function(N3I,y3I){return N3I<y3I;}
,'F06':function(M06,J06){return M06==J06;}
,'x9S':function(P9S,E9S){return P9S*E9S;}
,'m6':function(O86,h86){return O86<h86;}
,'Z40':function(I40,X40){return I40!=X40;}
,'w2N':function(f2N,B2N){return f2N>=B2N;}
,'K0I':function(D0I,k0I){return D0I<k0I;}
,'Z6b':function(I6b,X6b){return I6b==X6b;}
,'x4N':function(P4N,E4N){return P4N-E4N;}
,'h5N':function(C5N,K5N){return C5N%K5N;}
,'Z3N':function(I3N,X3N){return I3N==X3N;}
,'j7N':function(T7N,m7N){return T7N==m7N;}
,'y9S':function(F9S,M9S){return F9S*M9S;}
,'q7b':function(i7b,a7b){return i7b<a7b;}
,'M0N':function(J0N,g0N){return J0N==g0N;}
,'H4u':function(z4u,e4u){return z4u/e4u;}
,'K10':function(D10,k10){return D10>k10;}
,'H70':function(z70,e70){return z70*e70;}
,'o9I':function(d9I,u9I){return d9I>=u9I;}
,'K5u':function(D5u,k5u){return D5u*k5u;}
,'B7X':function(x7X,P7X){return x7X!=P7X;}
,'p36':function(r36,N36){return r36>N36;}
,'o3X':function(d3X,u3X){return d3X>u3X;}
,'l9X':function(c9X,R9X){return c9X-R9X;}
,'D0k':function(k0k,V0k){return k0k*V0k;}
,'Z96':function(I96,X96){return I96==X96;}
,'a6b':function(U6b,b6b){return U6b-b6b;}
,'t39':function(A39,v39){return A39<v39;}
,'e4':function(o4,d4){return o4!=d4;}
,'i9S':function(a9S,U9S){return a9S>U9S;}
,'n2b':function(Z2b,I2b){return Z2b==I2b;}
,'S5X':function(G5X,l5X){return G5X<l5X;}
,'c8':function(R8,n8){return R8<n8;}
,'e96':function(o96,d96){return o96<d96;}
,'M4I':2,'L9S':function(t9S,A9S){return t9S<A9S;}
,'H56':function(z56,e56){return z56==e56;}
,'x20':function(P20,E20){return P20!=E20;}
,'t3I':function(A3I,v3I){return A3I==v3I;}
,'F8X':function(M8X,J8X){return M8X<J8X;}
,'P06':function(E06,j06){return E06==j06;}
,'Y9I':function(w9I,f9I){return w9I/f9I;}
,'i4S':function(a4S,U4S,b4S){return a4S-U4S-b4S;}
,'a60':function(U60,b60){return U60/b60;}
,'c06':function(R06,n06){return R06<n06;}
,'e6b':function(o6b,d6b){return o6b<=d6b;}
,'D20':function(k20,V20){return k20>=V20;}
,'X1':function(Q1,H1){return Q1<H1;}
,'U59':function(b59,S59){return b59<=S59;}
,'m30':function(O50,h50){return O50>h50;}
,'T8S':function(m8S,O9S){return m8S*O9S;}
,'J7u':function(g7u,q7u){return g7u>=q7u;}
,'x7N':function(P7N,E7N){return P7N==E7N;}
,'W4k':function(s4k,p4k){return s4k<=p4k;}
,'h4N':function(C4N,K4N){return C4N<K4N;}
,'D19':function(k19,V19){return k19!=V19;}
,'D2':function(k2,V2){return k2==V2;}
,'p0':function(r0,N0){return r0==N0;}
,'W69':function(s69,p69){return s69*p69;}
,'v0X':function(W0X,s0X){return W0X==s0X;}
,'C1':function(K1,D1){return K1*D1;}
,'a8b':function(U8b,b8b){return U8b==b8b;}
,'r8k':function(N8k,y8k){return N8k-y8k;}
,'g29':function(q29,i29){return q29>i29;}
,'h96':function(C96,K96){return C96*K96;}
,'U99':function(b99,S99){return b99==S99;}
,'T4b':function(m4b,O2b){return m4b-O2b;}
,'j4N':function(T4N,m4N){return T4N>=m4N;}
,'g5k':function(q5k,i5k){return q5k&i5k;}
,'j5I':function(T5I,m5I){return T5I-m5I;}
,'X16':function(Q16,H16){return Q16==H16;}
,'V7k':function(L7k,t7k){return L7k<=t7k;}
,'G7k':function(l7k,c7k){return l7k!=c7k;}
,'M2N':function(J2N,g2N){return J2N>g2N;}
,'u96':function(Y96,w96){return Y96<w96;}
,'D90':function(k90,V90){return k90/V90;}
,'q5':function(i5,a5){return i5==a5;}
,'o5u':function(d5u,u5u){return d5u-u5u;}
,'Q40':function(H40,z40){return H40==z40;}
,'r5b':function(N5b,y5b){return N5b in y5b;}
,'X5N':function(Q5N,H5N){return Q5N<H5N;}
,'h36':function(C36,K36){return C36<K36;}
,'g09':function(q09,i09){return q09==i09;}
,'z16':function(e16,o16){return e16-o16;}
,'s9I':function(p9I,r9I){return p9I<r9I;}
,'z89':function(e89,o89){return e89<o89;}
,'n16':function(Z16,I16){return Z16==I16;}
,'Q4S':function(H4S,z4S){return H4S==z4S;}
,'c4':function(R4,n4){return R4<n4;}
,'m56':function(O06,h06){return O06==h06;}
,'x89':function(P89,E89){return P89!=E89;}
,'R7b':function(n7b,Z7b){return n7b*Z7b;}
,'f6b':function(B6b,x6b){return B6b==x6b;}
,'m0N':function(O1N,h1N){return O1N|h1N;}
,'w3u':function(f3u,B3u){return f3u*B3u;}
,'l3u':function(c3u,R3u){return c3u-R3u;}
,'E4o':"r",'O0I':function(h0I,C0I){return h0I>=C0I;}
,'q10':function(i10,a10){return i10<a10;}
,'Z4b':function(I4b,X4b){return I4b-X4b;}
,'P8S':function(E8S,j8S){return E8S*j8S;}
,'n89':function(Z89,I89){return Z89*I89;}
,'d8I':function(u8I,Y8I){return u8I==Y8I;}
,'r4X':function(N4X,y4X){return N4X>y4X;}
,'j39':function(T39,m39){return T39-m39;}
,'X36':function(Q36,H36){return Q36>H36;}
,'G4o':"t",'p90':function(r90,N90){return r90*N90;}
,'V10':function(L10,t10){return L10<t10;}
,'c60':function(R60,n60){return R60/n60;}
,'Y2':function(f2,B2){return f2<B2;}
,'H3b':function(z3b,e3b){return z3b!=e3b;}
,'P86':function(E86,j86){return E86/j86;}
,'j9b':function(T9b,m9b){return T9b/m9b;}
,'p9S':function(r9S,N9S){return r9S-N9S;}
,'w2X':function(f2X,B2X){return f2X instanceof B2X;}
,'d36':function(u36,Y36){return u36<Y36;}
,'E59':function(j59,T59){return j59<T59;}
,'U7X':function(b7X,S7X){return b7X-S7X;}
,'B3b':function(x3b,P3b){return x3b/P3b;}
,'j7u':function(T7u,m7u){return T7u<m7u;}
,'C5b':function(K5b,D5b){return K5b*D5b;}
,'o1b':function(d1b,u1b){return d1b/u1b;}
,'t50':function(A50,v50){return A50!=v50;}
,'L8N':function(t8N,A8N){return t8N==A8N;}
,'K5S':function(D5S,k5S){return D5S-k5S;}
,'d3S':function(u3S,Y3S){return u3S>Y3S;}
,'f40':function(B40,x40){return B40<x40;}
,'a3N':function(U3N,b3N){return U3N!=b3N;}
,'J8I':function(g8I,q8I){return g8I!=q8I;}
,'T8X':function(m8X,O9X){return m8X-O9X;}
,'b90':function(S90,G90,l90){return S90-G90+l90;}
,'K49':function(D49,k49){return D49==k49;}
,'D4S':function(k4S,V4S){return k4S==V4S;}
,'n9X':function(Z9X,I9X){return Z9X/I9X;}
,'r86':function(N86,y86){return N86/y86;}
,'s10':function(p10,r10){return p10/r10;}
,'M1k':function(J1k,g1k){return J1k*g1k;}
,'O5S':function(h5S,C5S){return h5S<C5S;}
,'V5u':function(L5u,t5u){return L5u-t5u;}
,'v7u':function(W7u,s7u){return W7u-s7u;}
,'k8k':function(V8k,L8k){return V8k-L8k;}
,'n9S':function(Z9S,I9S){return Z9S-I9S;}
,'R99':function(n99,Z99){return n99==Z99;}
,'A49':function(v49,W49){return v49==W49;}
,'N6':function(y6,F6){return y6<F6;}
,'t6b':function(A6b,v6b){return A6b==v6b;}
,'v5I':function(W5I,s5I){return W5I<s5I;}
,'K9I':function(D9I,k9I){return D9I!=k9I;}
,'F1S':function(M1S,J1S){return M1S*J1S;}
,'j46':function(T46,m46){return T46<m46;}
,'w1u':function(f1u,B1u){return f1u*B1u;}
,'a5k':function(U5k,b5k){return U5k<=b5k;}
,'W39':function(s39,p39){return s39<p39;}
,'d16':function(u16,Y16){return u16!=Y16;}
,'q5u':function(i5u,a5u){return i5u*a5u;}
,'Z69':function(I69,X69){return I69/X69;}
,'j3S':function(T3S,m3S){return T3S==m3S;}
,'u4X':function(Y4X,w4X){return Y4X!=w4X;}
,'w2t':"ha",'J19':function(g19,q19){return g19!=q19;}
,'N70':function(y70,F70){return y70==F70;}
,'K70':function(D70,k70){return D70==k70;}
,'o5S':function(d5S,u5S){return d5S>u5S;}
,'m99':function(O39,h39){return O39==h39;}
,'b7u':function(S7u,G7u){return S7u<=G7u;}
,'z20':function(e20,o20){return e20!=o20;}
,'l8N':function(c8N,R8N){return c8N!=R8N;}
,'i7S':function(a7S,U7S){return a7S>U7S;}
,'K59':function(D59,k59){return D59!=k59;}
,'S06':function(G06,l06){return G06*l06;}
,'M99':function(J99,g99){return J99==g99;}
,'i3k':function(a3k,U3k,b3k,S3k){return a3k-U3k+b3k+S3k;}
,'Y56':function(w56,f56){return w56<=f56;}
,'i2X':function(a2X,U2X){return a2X<U2X;}
,'A1k':function(v1k,W1k){return v1k<W1k;}
,'n1u':function(Z1u,I1u){return Z1u!=I1u;}
,'e3I':function(o3I,d3I){return o3I<d3I;}
,'v36':function(W36,s36){return W36<s36;}
,'u5k':function(Y5k,w5k){return Y5k>w5k;}
,'f6k':function(B6k,x6k){return B6k<x6k;}
,'H0N':function(z0N,e0N){return z0N<e0N;}
,'R0I':function(n0I,Z0I){return n0I>=Z0I;}
,'X9X':function(Q9X,H9X){return Q9X!=H9X;}
,'d5':function(u5,Y5){return u5==Y5;}
,'e39':function(o39,d39){return o39!=d39;}
,'l3S':function(c3S,R3S){return c3S==R3S;}
,'z19':function(e19,o19){return e19<=o19;}
,'i20':function(a20,U20){return a20*U20;}
,'O0N':function(h0N,C0N){return h0N*C0N;}
,'a5X':function(U5X,b5X){return U5X==b5X;}
,'z3':function(e3,o3){return e3<o3;}
,'D8S':function(k8S,V8S){return k8S!=V8S;}
,'O59':function(h59,C59){return h59!=C59;}
,'m26':function(O76,h76){return O76-h76;}
,'y3u':function(F3u,M3u){return F3u!=M3u;}
,'V56':function(L56,t56){return L56==t56;}
,'q7k':function(i7k,a7k){return i7k<=a7k;}
,'m90':function(O30,h30){return O30!=h30;}
,'k86':function(V86,L86){return V86<L86;}
,'k8b':function(V8b,L8b){return V8b<L8b;}
,'h4':function(C4,K4){return C4/K4;}
,'f1N':function(B1N,x1N){return B1N<x1N;}
,'K5':function(D5,k5){return D5<k5;}
,'b1':function(S1,G1){return S1==G1;}
,'b3':function(S3,G3){return S3==G3;}
,'K7k':function(D7k,k7k){return D7k==k7k;}
,'i7':function(a7,U7){return a7>U7;}
,'G1X':function(l1X,c1X){return l1X==c1X;}
,'B99':function(x99,P99){return x99==P99;}
,'l89':function(c89,R89){return c89/R89;}
,'Z6k':function(I6k,X6k){return I6k>X6k;}
,'V7N':function(L7N,t7N){return L7N<t7N;}
,'P4':function(E4,j4){return E4!=j4;}
,'J20':function(g20,q20){return g20*q20;}
,'x66':function(P66,E66){return P66!=E66;}
,'X46':function(Q46,H46){return Q46*H46;}
,'U49':function(b49,S49){return b49!=S49;}
,'J89':function(g89,q89){return g89!=q89;}
,'I6S':function(X6S,Q6S){return X6S==Q6S;}
,'z1':function(e1,o1){return e1!=o1;}
,'l5N':function(c5N,R5N){return c5N>R5N;}
,'G56':function(l56,c56){return l56==c56;}
,'V7b':function(L7b,t7b){return L7b==t7b;}
,'e8X':function(o8X,d8X){return o8X<d8X;}
,'I7b':function(X7b,Q7b){return X7b>Q7b;}
,'j16':function(T16,m16){return T16*m16;}
,'B26':function(x26,P26){return x26/P26;}
,'b00':function(S00,G00){return S00-G00;}
,'y9X':function(F9X,M9X){return F9X-M9X;}
,'J7':function(g7,q7){return g7>q7;}
,'m10':function(O40,h40){return O40-h40;}
,'H9I':function(z9I,e9I){return z9I/e9I;}
,'w36':function(f36,B36){return f36<B36;}
,'h89':function(C89,K89){return C89<K89;}
,'C80':function(K80,D80){return K80-D80;}
,'G2N':function(l2N,c2N){return l2N>c2N;}
,'t29':function(A29,v29){return A29<v29;}
,'E1b':function(j1b,T1b){return j1b==T1b;}
,'P0u':function(E0u,j0u){return E0u<j0u;}
,'u3I':function(Y3I,w3I){return Y3I>w3I;}
,'u80':function(Y80,w80){return Y80==w80;}
,'a80':function(U80,b80){return U80==b80;}
,'Z7o':"o",'i8N':function(a8N,U8N){return a8N==U8N;}
,'A9I':function(v9I,W9I){return v9I/W9I;}
,'T50':function(m50,O00){return m50==O00;}
,'h00':function(C00,K00){return C00==K00;}
,'r06':function(N06,y06){return N06>=y06;}
,'z7':function(e7,o7){return e7==o7;}
,'Y8u':function(w8u,f8u){return w8u>f8u;}
,'Y5S':function(w5S,f5S){return w5S==f5S;}
,'J5I':function(g5I,q5I){return g5I<q5I;}
,'Q1S':function(H1S,z1S){return H1S!=z1S;}
,'C76':function(K76,D76){return K76-D76;}
,'p9k':function(r9k,N9k){return r9k<=N9k;}
,'S2u':function(G2u,l2u){return G2u>l2u;}
,'i2S':function(a2S,U2S){return a2S==U2S;}
,'O3X':function(h3X,C3X){return h3X>C3X;}
,'P1S':function(E1S,j1S){return E1S==j1S;}
,'H6u':function(z6u,e6u){return z6u<=e6u;}
,'n00':function(Z00,I00){return Z00<I00;}
,'m70':function(O60,h60){return O60==h60;}
,'p16':function(r16,N16){return r16<N16;}
,'s26':function(p26,r26){return p26/r26;}
,'s30':function(p30,r30){return p30==r30;}
,'S4X':function(G4X,l4X){return G4X>=l4X;}
,'F40':function(M40,J40){return M40-J40;}
,'I1k':function(X1k,Q1k){return X1k>Q1k;}
,'J9b':function(g9b,q9b){return g9b==q9b;}
,'O46':function(h46,C46){return h46*C46;}
,'k06':function(V06,L06){return V06==L06;}
,'a39':function(U39,b39){return U39-b39;}
,'U4u':function(b4u,S4u){return b4u==S4u;}
,'f4b':function(B4b,x4b){return B4b!=x4b;}
,'n4N':function(Z4N,I4N){return Z4N-I4N;}
,'U9N':function(b9N,S9N){return b9N-S9N;}
,'O5':function(h5,C5){return h5==C5;}
,'D69':function(k69,V69){return k69-V69;}
,'E90':function(j90,T90){return j90==T90;}
,'f86':function(B86,x86){return B86-x86;}
,'X1u':function(Q1u,H1u){return Q1u==H1u;}
,'m6u':function(O8k,h8k){return O8k>h8k;}
,'o70':function(d70,u70){return d70>u70;}
,'g8':function(q8,i8){return q8!=i8;}
,'b46':function(S46,G46){return S46/G46;}
,'e60':function(o60,d60){return o60<d60;}
,'U26':function(b26,S26){return b26/S26;}
,'z9b':function(e9b,o9b){return e9b<=o9b;}
,'J3':function(g3,q3){return g3/q3;}
,'f8k':function(B8k,x8k){return B8k<x8k;}
,'P6N':function(E6N,j6N){return E6N>=j6N;}
,'e0S':function(o0S,d0S){return o0S<d0S;}
,'t8k':function(A8k,v8k){return A8k<=v8k;}
,'r4k':function(N4k,y4k){return N4k==y4k;}
,'f3N':function(B3N,x3N){return B3N!=x3N;}
,'i5I':function(a5I,U5I){return a5I-U5I;}
,'t1N':function(A1N,v1N){return A1N|v1N;}
,'o90':function(d90,u90){return d90-u90;}
,'z0b':function(e0b,o0b){return e0b<o0b;}
,'I8u':function(X8u,Q8u){return X8u<Q8u;}
,'x5':function(P5,E5){return P5==E5;}
,'R4u':function(n4u,Z4u){return n4u!=Z4u;}
,'T5k':function(m5k,O0k){return m5k-O0k;}
,'e79':function(o79,d79){return o79/d79;}
,'y9':function(F9,M9){return F9==M9;}
,'V3X':function(L3X,t3X){return L3X<t3X;}
,'T6N':function(m6N,O8S){return m6N-O8S;}
,'c69':function(R69,n69){return R69-n69;}
,'e40':function(o40,d40){return o40==d40;}
,'D00':function(k00,V00){return k00==V00;}
,'F9u':function(M9u,J9u){return M9u-J9u;}
,'x2X':function(P2X,E2X){return P2X>E2X;}
,'a2u':function(U2u,b2u){return U2u<b2u;}
,'t8b':function(A8b,v8b){return A8b>=v8b;}
,'f76':function(B76,x76){return B76*x76;}
,'V4u':function(L4u,t4u){return L4u-t4u;}
,'U1X':function(b1X,S1X){return b1X==S1X;}
,'K99':function(D99,k99){return D99<k99;}
,'p96':function(r96,N96){return r96==N96;}
,'v7':function(W7,s7){return W7>s7;}
,'f4':function(B4,x4){return B4!=x4;}
,'z5N':function(e5N,o5N){return e5N>=o5N;}
,'T1S':function(m1S,O4S){return m1S==O4S;}
,'P6X':function(E6X,j6X){return E6X*j6X;}
,'L4N':function(t4N,A4N){return t4N==A4N;}
,'Z86':function(I86,X86){return I86<=X86;}
,'f6X':function(B6X,x6X){return B6X-x6X;}
,'z46':function(e46,o46){return e46*o46;}
,'n9':function(Z9,I9){return Z9!=I9;}
,'e8k':function(o8k,d8k){return o8k>d8k;}
,'v0':function(W0,s0){return W0/s0;}
,'B5u':function(x5u,P5u){return x5u==P5u;}
,'P2S':function(E2S,j2S){return E2S/j2S;}
,'A6u':function(v6u,W6u){return v6u<=W6u;}
,'w4N':function(f4N,B4N){return f4N/B4N;}
,'h8I':function(C8I,K8I){return C8I<K8I;}
,'G8u':function(l8u,c8u){return l8u==c8u;}
,'V26':function(L26,t26){return L26==t26;}
,'I0I':function(X0I,Q0I){return X0I>Q0I;}
,'T4':function(m4,O2){return m4!=O2;}
,'S8':function(G8,l8){return G8<l8;}
,'G99':function(l99,c99){return l99==c99;}
,'l00':function(c00,R00){return c00==R00;}
,'h9b':function(C9b,K9b){return C9b*K9b;}
,'d3u':function(u3u,Y3u){return u3u==Y3u;}
,'d5N':function(u5N,Y5N){return u5N<Y5N;}
,'T6k':function(m6k,O89){return m6k/O89;}
,'G1b':function(l1b,c1b){return l1b-c1b;}
,'N3X':function(y3X,F3X){return y3X*F3X;}
,'K8u':function(D8u,k8u){return D8u-k8u;}
,'D3u':function(k3u,V3u){return k3u==V3u;}
,'h0X':function(C0X,K0X){return C0X-K0X;}
,'O7k':function(h7k,C7k){return h7k==C7k;}
,'q4u':function(i4u,a4u){return i4u*a4u;}
,'l36':function(c36,R36){return c36!=R36;}
,'B10':function(x10,P10){return x10/P10;}
,'i19':function(a19,U19){return a19/U19;}
,'q56':function(i56,a56){return i56==a56;}
,'u5b':function(Y5b,w5b){return Y5b-w5b;}
,'t6X':function(A6X,v6X){return A6X==v6X;}
,'K6S':function(D6S,k6S){return D6S==k6S;}
,'Q50':function(H50,z50){return H50*z50;}
,'O9I':function(h9I,C9I){return h9I==C9I;}
,'M56':function(J56,g56){return J56==g56;}
,'Z60':function(I60,X60){return I60<X60;}
,'n7N':function(Z7N,I7N){return Z7N>I7N;}
,'E7X':function(j7X,T7X){return j7X<T7X;}
,'e50':function(o50,d50){return o50*d50;}
,'h8N':function(C8N,K8N){return C8N>K8N;}
,'a69':function(U69,b69){return U69-b69;}
,'U1k':function(b1k,S1k){return b1k<S1k;}
,'W1N':function(s1N,p1N){return s1N==p1N;}
,'b66':function(S66,G66){return S66<G66;}
,'A3':function(v3,W3){return v3==W3;}
,'v00':function(W00,s00){return W00==s00;}
,'R6S':function(n6S,Z6S){return n6S==Z6S;}
,'A7b':function(v7b,W7b){return v7b==W7b;}
,'V1k':function(L1k,t1k){return L1k==t1k;}
,'Z79':function(I79,X79){return I79/X79;}
,'D2X':function(k2X,V2X){return k2X>=V2X;}
,'Z4X':function(I4X,X4X){return I4X>X4X;}
,'u5X':function(Y5X,w5X){return Y5X==w5X;}
,'v4S':function(W4S,s4S){return W4S==s4S;}
,'y89':function(F89,M89){return F89-M89;}
,'r4':function(N4,y4){return N4!=y4;}
,'E70':function(j70,T70){return j70==T70;}
,'M7b':function(J7b,g7b){return J7b<g7b;}
,'N6N':function(y6N,F6N){return y6N/F6N;}
,'k8X':function(V8X,L8X){return V8X>L8X;}
,'b9S':function(S9S,G9S){return S9S/G9S;}
,'h69':function(C69,K69){return C69-K69;}
,'M5S':function(J5S,g5S){return J5S==g5S;}
,'r60':function(N60,y60){return N60==y60;}
,'S86':function(G86,l86){return G86<l86;}
,'k6k':function(V6k,L6k){return V6k-L6k;}
,'H30':function(z30,e30){return z30>e30;}
,'j5':function(T5,m5){return T5==m5;}
,'P09':function(E09,j09){return E09>j09;}
,'I99':function(X99,Q99){return X99==Q99;}
,'W3I':function(s3I,p3I){return s3I<=p3I;}
,'g39':function(q39,i39){return q39*i39;}
,'O99':function(h99,C99){return h99<C99;}
,'P6k':function(E6k,j6k){return E6k>j6k;}
,'c90':function(R90,n90,Z90){return R90-n90+Z90;}
,'N30':function(y30,F30){return y30==F30;}
,'y4S':function(F4S,M4S){return F4S==M4S;}
,'G59':function(l59,c59){return l59>=c59;}
,'a1N':function(U1N,b1N){return U1N<b1N;}
,'L2S':function(t2S,A2S){return t2S<A2S;}
,'l7S':function(c7S,R7S){return c7S==R7S;}
,'e06':function(o06,d06){return o06==d06;}
,'i36':function(a36,U36){return a36-U36;}
,'D0b':function(k0b,V0b){return k0b==V0b;}
,'b7S':function(S7S,G7S){return S7S/G7S;}
,'T4X':function(m4X,O2X){return m4X>=O2X;}
,'V5':function(L5,t5){return L5==t5;}
,'E69':function(j69,T69){return j69/T69;}
,'c6k':function(R6k,n6k){return R6k<n6k;}
,'b4I':0,'u86':function(Y86,w86){return Y86*w86;}
,'P8b':function(E8b,j8b){return E8b==j8b;}
,'h19':function(C19,K19){return C19-K19;}
,'o4u':function(d4u,u4u){return d4u<=u4u;}
,'e76':function(o76,d76){return o76%d76;}
,'a5b':function(U5b,b5b){return U5b*b5b;}
,'F60':function(M60,J60){return M60==J60;}
,'g1N':function(q1N,i1N){return q1N>i1N;}
,'M6u':function(J6u,g6u){return J6u==g6u;}
,'T4S':function(m4S,O2S){return m4S-O2S;}
,'C30':function(K30,D30){return K30-D30;}
,'j1u':function(T1u,m1u){return T1u-m1u;}
,'H0I':function(z0I,e0I){return z0I>e0I;}
,'J46':function(g46,q46){return g46<=q46;}
,'h7u':function(C7u,K7u){return C7u<=K7u;}
,'p7S':function(r7S,N7S){return r7S==N7S;}
,'I10':function(X10,Q10){return X10/Q10;}
,'N6u':function(y6u,F6u){return y6u/F6u;}
,'h8S':function(C8S,K8S){return C8S<K8S;}
,'t4X':function(A4X,v4X){return A4X==v4X;}
,'C66':function(K66,D66){return K66>D66;}
,'s1X':function(p1X,r1X){return p1X*r1X;}
,'H7X':function(z7X,e7X){return z7X-e7X;}
,'K7b':function(D7b,k7b){return D7b-k7b;}
,'c2':function(R2,n2){return R2-n2;}
,'n8S':function(Z8S,I8S,X8S){return Z8S*I8S/X8S;}
,'X9':function(Q9,H9){return Q9*H9;}
,'o26':function(d26,u26){return d26!=u26;}
,'s7X':function(p7X,r7X){return p7X!=r7X;}
,'d66':function(u66,Y66){return u66>=Y66;}
,'g8X':function(q8X,i8X){return q8X/i8X;}
,'u8':function(Y8,w8){return Y8<w8;}
,'C6b':function(K6b,D6b){return K6b*D6b;}
,'t3N':function(A3N,v3N){return A3N*v3N;}
,'C3I':function(K3I,D3I){return K3I>=D3I;}
,'G7b':function(l7b,c7b){return l7b-c7b;}
,'C8X':function(K8X,D8X){return K8X-D8X;}
,'F69':function(M69,J69){return M69/J69;}
,'O6S':function(h6S,C6S){return h6S==C6S;}
,'r6b':function(N6b,y6b){return N6b!==y6b;}
,'P9u':function(E9u,j9u){return E9u==j9u;}
,'k4k':function(V4k,L4k){return V4k-L4k;}
,'s3k':function(p3k,r3k){return p3k==r3k;}
,'p0k':function(r0k,N0k){return r0k-N0k;}
,'Q5k':function(H5k,z5k){return H5k!=z5k;}
,'n0X':function(Z0X,I0X){return Z0X-I0X;}
,'R9N':function(n9N,Z9N){return n9N-Z9N;}
,'L9b':function(t9b,A9b){return t9b<A9b;}
,'Z3k':function(I3k,X3k){return I3k-X3k;}
,'S79':function(G79,l79){return G79*l79;}
,'A1X':function(v1X,W1X){return v1X<W1X;}
,'O1X':function(h1X,C1X){return h1X>C1X;}
,'V1X':function(L1X,t1X){return L1X<t1X;}
,'f1':function(B1,P1){return B1==P1;}
,'b4N':function(S4N,G4N){return S4N-G4N;}
,'c5k':function(R5k,n5k){return R5k>=n5k;}
,'R26':function(n26,Z26){return n26/Z26;}
,'o56':function(d56,u56){return d56!=u56;}
,'u79':function(Y79,w79){return Y79-w79;}
,'q6N':function(i6N,a6N,U6N){return i6N-a6N-U6N;}
,'K3k':function(D3k,k3k){return D3k/k3k;}
,'y7S':function(F7S,M7S){return F7S==M7S;}
,'a0u':function(U0u,b0u){return U0u&b0u;}
,'A3X':function(v3X,W3X){return v3X*W3X;}
,'A6N':function(v6N,W6N){return v6N-W6N;}
,'A0I':function(v0I,W0I){return v0I>=W0I;}
,'u6N':function(Y6N,w6N){return Y6N==w6N;}
,'h9':function(C9,K9){return C9==K9;}
,'b2S':function(S2S,G2S){return S2S-G2S;}
,'p7u':function(r7u,N7u){return r7u*N7u;}
,'q1b':function(i1b,a1b){return i1b<a1b;}
,'g4k':function(q4k,i4k){return q4k<i4k;}
,'q0N':function(i0N,a0N){return i0N==a0N;}
,'W3N':function(s3N,p3N){return s3N in p3N;}
,'o1X':function(d1X,u1X){return d1X==u1X;}
,'q3X':function(i3X,a3X){return i3X==a3X;}
,'h2b':function(C2b,K2b){return C2b==K2b;}
,'y46':function(F46,M46){return F46/M46;}
,'L0k':function(t0k,A0k){return t0k<A0k;}
,'x9b':function(P9b,E9b){return P9b==E9b;}
,'T2S':function(m2S,O7S){return m2S==O7S;}
,'V2n':"od",'u06':function(Y06,w06){return Y06==w06;}
,'N1X':function(y1X,F1X){return y1X*F1X;}
,'K4u':function(D4u,k4u){return D4u<k4u;}
,'b5I':function(S5I,G5I){return S5I<G5I;}
,'l2X':function(c2X,R2X){return c2X<R2X;}
,'U3X':function(b3X,S3X){return b3X==S3X;}
,'c3N':function(R3N,n3N){return R3N-n3N;}
,'Z5X':function(I5X,X5X){return I5X==X5X;}
,'Q76':function(H76,z76){return H76-z76;}
,'q5S':function(i5S,a5S){return i5S==a5S;}
,'g4':function(q4,i4){return q4-i4;}
,'X8N':function(Q8N,H8N){return Q8N/H8N;}
,'V59':function(L59,t59){return L59!=t59;}
,'S60':function(G60,l60){return G60/l60;}
,'I5S':function(X5S,Q5S){return X5S>Q5S;}
,'J5N':function(g5N,q5N){return g5N!=q5N;}
,'b9b':function(S9b,G9b){return S9b-G9b;}
,'l2k':function(c2k,R2k){return c2k<=R2k;}
,'d1u':function(u1u,Y1u){return u1u>Y1u;}
,'E6u':function(j6u,T6u){return j6u<T6u;}
,'o6':function(d6,u6){return d6<u6;}
,'O6N':function(h6N,C6N){return h6N*C6N;}
,'s3X':function(p3X,r3X){return p3X*r3X;}
,'k0S':function(V0S,L0S){return V0S>=L0S;}
,'o69':function(d69,u69){return d69<=u69;}
,'h2S':function(C2S,K2S){return C2S==K2S;}
,'U6':function(b6,S6){return b6==S6;}
,'z2k':function(e2k,o2k){return e2k>o2k;}
,'k6X':function(V6X,L6X){return V6X*L6X;}
,'I49':function(X49,Q49){return X49-Q49;}
,'X0b':function(Q0b,H0b){return Q0b-H0b;}
,'x2k':function(P2k,E2k){return P2k*E2k;}
,'H49':function(z49,e49){return z49-e49;}
,'h20':function(C20,K20){return C20<=K20;}
,'n8N':function(Z8N,I8N){return Z8N!=I8N;}
,'W8k':function(s8k,p8k){return s8k<=p8k;}
,'u40':function(Y40,w40){return Y40==w40;}
,'t76':function(A76,v76){return A76==v76;}
,'P4S':function(E4S,j4S){return E4S==j4S;}
,'Y69':function(w69,f69){return w69==f69;}
,'I1b':function(X1b,Q1b){return X1b-Q1b;}
,'k29':function(V29,L29){return V29==L29;}
,'C6X':function(K6X,D6X){return K6X!=D6X;}
,'n8I':function(Z8I,I8I){return Z8I<I8I;}
,'U2N':function(b2N,S2N){return b2N<S2N;}
,'Q0':function(H0,z0){return H0-z0;}
,'Q29':function(H29,z29){return H29>z29;}
,'p9X':function(r9X,N9X){return r9X==N9X;}
,'n5N':function(Z5N,I5N){return Z5N<I5N;}
,'Z80':function(I80,X80){return I80==X80;}
,'P50':function(E50,j50){return E50==j50;}
,'O5u':function(h5u,C5u){return h5u==C5u;}
,'J3S':function(g3S,q3S){return g3S==q3S;}
,'J2k':function(g2k,q2k){return g2k!=q2k;}
,'G6u':function(l6u,c6u){return l6u*c6u;}
,'b9X':function(S9X,G9X){return S9X==G9X;}
,'M1b':function(J1b,g1b){return J1b/g1b;}
,'M7N':function(J7N,g7N){return J7N*g7N;}
,'t40':function(A40,v40){return A40-v40;}
,'n9k':function(Z9k,I9k){return Z9k==I9k;}
,'F79':function(M79,J79){return M79/J79;}
,'V1b':function(L1b,t1b){return L1b>t1b;}
,'u29':function(Y29,w29){return Y29!=w29;}
,'Q6b':function(H6b,z6b){return H6b>z6b;}
,'W40':function(s40,p40){return s40<=p40;}
,'C50':function(K50,D50){return K50==D50;}
,'N7X':function(y7X,F7X){return y7X!=F7X;}
,'u4b':function(Y4b,w4b){return Y4b-w4b;}
,'F86':function(M86,J86){return M86-J86;}
,'q7X':function(i7X,a7X){return i7X!=a7X;}
,'B39':function(x39,P39,E39){return x39-P39-E39;}
,'S96':function(G96,l96){return G96/l96;}
,'X7u':function(Q7u,H7u){return Q7u>H7u;}
,'V8u':function(L8u,t8u){return L8u<t8u;}
,'d2S':function(u2S,Y2S,w2S){return u2S*Y2S/w2S;}
,'I7k':function(X7k,Q7k){return X7k<=Q7k;}
,'V0I':function(L0I,t0I){return L0I-t0I;}
,'N6S':function(y6S,F6S){return y6S==F6S;}
,'S5k':function(G5k,l5k){return G5k&l5k;}
,'g6b':function(q6b,i6b){return q6b*i6b;}
,'u8k':function(Y8k,w8k){return Y8k<w8k;}
,'D1S':function(k1S,V1S){return k1S>V1S;}
,'a8k':function(U8k,b8k){return U8k<b8k;}
,'c6b':function(R6b,n6b){return R6b<n6b;}
,'C6k':function(K6k,D6k){return K6k>D6k;}
,'T5X':function(m5X,O0X){return m5X<O0X;}
,'S3I':function(G3I,l3I){return G3I>l3I;}
,'M5u':function(J5u,g5u){return J5u>=g5u;}
,'Z09':function(I09,X09){return I09/X09;}
,'P3N':function(E3N,j3N){return E3N*j3N;}
,'l2S':function(c2S,R2S){return c2S==R2S;}
,'H4I':8,'W4X':function(s4X,p4X){return s4X==p4X;}
,'N8u':function(y8u,F8u){return y8u==F8u;}
,'e2u':function(o2u,d2u){return o2u<d2u;}
,'j89':function(T89,m89){return T89<m89;}
,'h4S':function(C4S,K4S){return C4S-K4S;}
,'T0u':function(m0u,O1u){return m0u-O1u;}
,'U9I':function(b9I,S9I){return b9I/S9I;}
,'Z8X':function(I8X,X8X){return I8X==X8X;}
,'r5k':function(N5k,y5k){return N5k<=y5k;}
,'p19':function(r19,N19){return r19-N19;}
,'F50':function(M50,J50){return M50<J50;}
,'V5S':function(L5S,t5S){return L5S>=t5S;}
,'J00':function(g00,q00){return g00*q00;}
,'k09':function(V09,L09){return V09>L09;}
,'H1k':function(z1k,e1k){return z1k*e1k;}
,'e4X':function(o4X,d4X){return o4X>d4X;}
,'P4X':function(E4X,j4X){return E4X>=j4X;}
,'f29':function(B29,x29,P29){return B29-x29-P29;}
,'b5N':function(S5N,G5N){return S5N!=G5N;}
,'a29':function(U29,b29){return U29-b29;}
,'Z2':function(I2,X2){return I2*X2;}
,'K46':function(D46,k46,V46){return D46-k46+V46;}
,'O0':function(h0,C0){return h0>C0;}
,'d2k':function(u2k,Y2k){return u2k!=Y2k;}
,'i2b':function(a2b,U2b){return a2b==U2b;}
,'b3u':function(S3u,G3u){return S3u>G3u;}
,'r8b':function(N8b,y8b){return N8b<=y8b;}
,'U7N':function(b7N,S7N){return b7N-S7N;}
,'E0':function(j0,T0){return j0>=T0;}
,'W29':function(s29,p29){return s29>p29;}
,'O6':function(h6,C6){return h6-C6;}
,'g50':function(q50,i50){return q50==i50;}
,'h5I':function(C5I,K5I){return C5I<K5I;}
,'r0S':function(N0S,y0S){return N0S-y0S;}
,'e8':function(o8,d8){return o8==d8;}
,'P0R':(function(K1R){return (function(v1R,t1R){return (function(W1R){return {E0R:W1R}
;}
)(function(T0R){var V1R,m0R=((0x1,0x197)>4?(0x153,0):(0x10D,98.)<(3.92E2,44.)?"A":(0x1,51.2E1));for(var A1R=v1R;m0R<T0R["length"];m0R++){var L1R=t1R(T0R,m0R);V1R=m0R===(0x1D0<=(31.70E1,70.10E1)?(0x11A,0):(7.53E2,147.8E1))?L1R:V1R^L1R;}
return V1R?A1R:!A1R;}
);}
)((function(D1R,h1R,O1R,k1R){var C1R=((15.4E1,17.)>51.?33:(48,8.70E1)>=65.?(0x1AE,31):(0x203,92.9E1)<=(0x9D,0x15B)?70.:(9.56E2,1.1400E3));return D1R(K1R,C1R)-k1R(h1R,O1R)>C1R;}
)(parseInt,Date,(function(h1R){return (''+h1R)["substring"](((0x119,41)<=(40.,90.)?(0x1F,1):(0x1BE,19)),(h1R+'')["length"]-((5.44E2,1.37E2)<(0x1B5,1.208E3)?(103,1):(1.52E2,0x173)<56?(21.3E1,'N'):(34.80E1,6.4E1)>=3.38E2?0x1C4:(0x147,1.058E3)));}
)('_getTime2'),function(h1R,O1R){return new h1R()[O1R]();}
),function(T0R,m0R){var j0R=parseInt(T0R["charAt"](m0R),(84>=(21.,40.90E1)?(30,51.):83<(45.,1.167E3)?(0x31,16):(58.,4.22E2)))["toString"]((41>(0x1E4,31.)?(43.1E1,2):11.98E2>(7,127.10E1)?46.:0xFF>=(0xBA,10.540E2)?(0x3E,31):(137.20E1,43.90E1)));return j0R["charAt"](j0R["length"]-(6.73E2<(7.44E2,0x110)?(104,5.83E2):(0x1B2,0x85)<=0xBE?(55,1):(0x23F,72)));}
);}
)('1l16ko2a5'),'N26':function(y26,F26){return y26<F26;}
,'F0':function(M0,J0){return M0*J0;}
,'H5u':function(z5u,e5u){return z5u-e5u;}
,'Q3N':function(H3N,z3N){return H3N<z3N;}
,'f4X':function(B4X,x4X){return B4X>=x4X;}
,'a3I':function(U3I,b3I){return U3I==b3I;}
,'E7k':function(j7k,T7k){return j7k-T7k;}
,'E26':function(j26,T26){return j26<=T26;}
,'n3S':function(Z3S,I3S){return Z3S==I3S;}
,'r1S':function(N1S,y1S){return N1S/y1S;}
,'O3S':function(h3S,C3S){return h3S==C3S;}
,'p89':function(r89,N89){return r89*N89;}
,'Q6X':function(H6X,z6X){return H6X-z6X;}
,'f4k':function(B4k,x4k){return B4k-x4k;}
,'w5N':function(f5N,B5N){return f5N<B5N;}
,'z5':function(e5,o5){return e5/o5;}
,'T96':function(m96,O36){return m96-O36;}
,'l9b':function(c9b,R9b){return c9b-R9b;}
,'Q0u':function(H0u,z0u){return H0u*z0u;}
,'x2N':function(P2N,E2N){return P2N<E2N;}
,'M10':function(J10,g10){return J10==g10;}
,'O10':function(h10,C10){return h10>C10;}
,'x00':function(P00,E00){return P00<E00;}
,'O3b':function(h3b,C3b){return h3b==C3b;}
,'M3b':function(J3b,g3b){return J3b*g3b;}
,'L5N':function(t5N,A5N){return t5N==A5N;}
,'z36':function(e36,o36){return e36==o36;}
,'p3u':function(r3u,N3u){return r3u==N3u;}
,'r3N':function(N3N,y3N){return N3N<y3N;}
,'u60':function(Y60,w60){return Y60<w60;}
,'v20':function(W20,s20){return W20<s20;}
,'y0b':function(F0b,M0b){return F0b==M0b;}
,'s6S':function(p6S,r6S){return p6S-r6S;}
,'j2b':function(T2b,m2b){return T2b-m2b;}
,'m1k':function(O4k,h4k){return O4k>h4k;}
,'s49':function(p49,r49){return p49!=r49;}
,'A7N':function(v7N,W7N){return v7N==W7N;}
,'W60':function(s60,p60){return s60==p60;}
,'q26':function(i26,a26){return i26==a26;}
,'N59':function(y59,F59){return y59>=F59;}
,'S80':function(G80,l80){return G80>l80;}
,'F6b':function(M6b,J6b){return M6b/J6b;}
,'k5X':function(V5X,L5X){return V5X==L5X;}
,'g8b':function(q8b,i8b){return q8b==i8b;}
,'N10':function(y10,F10){return y10<F10;}
,'n7u':function(Z7u,I7u){return Z7u<I7u;}
,'o7k':function(d7k,u7k){return d7k*u7k;}
,'z5I':function(e5I,o5I){return e5I!=o5I;}
,'h3u':function(C3u,K3u){return C3u/K3u;}
,'h1u':function(C1u,K1u){return C1u>K1u;}
,'l1u':function(c1u,R1u){return c1u==R1u;}
,'g69':function(q69,i69){return q69-i69;}
,'a4k':function(U4k,b4k){return U4k>b4k;}
,'X3S':function(Q3S,H3S){return Q3S-H3S;}
,'c4X':function(R4X,n4X){return R4X<n4X;}
,'g3I':function(q3I,i3I){return q3I<i3I;}
,'X5I':function(Q5I,H5I){return Q5I>=H5I;}
,'V6u':function(L6u,t6u){return L6u>=t6u;}
,'F3N':function(M3N,J3N){return M3N*J3N;}
,'G0N':function(l0N,c0N){return l0N==c0N;}
,'t8X':function(A8X,v8X){return A8X<v8X;}
,'g8k':function(q8k,i8k){return q8k==i8k;}
,'z6N':function(e6N,o6N,d6N){return e6N-o6N+d6N;}
,'E5S':function(j5S,T5S){return j5S!=T5S;}
,'w7N':function(f7N,B7N){return f7N-B7N;}
,'W5k':function(s5k,p5k){return s5k-p5k;}
,'f80':function(B80,x80){return B80==x80;}
,'T8k':function(m8k,O9k){return m8k>O9k;}
,'Y0I':(function(){var t1I={}
,x0I=function(P0I,E0I){var j0I=E0I&((9.03E2,0x76)<=(9,14.08E2)?(8.34E2,0xffff):0x12A>=(77.,0x22F)?(22.,'a'):146<=(53.,133)?(0x6E,"pan"):(129.,0x3A));var T0I=E0I-j0I;return ((T0I*P0I|((0x1CA,14.65E2)>(0x16D,0x213)?(118,0):(1.119E3,0x18A)>=112.0E1?(7.100E2,1.296E3):0x1CE>=(0x1FD,14.35E2)?(26,96.80E1):(6.140E2,91.0E1)))+(j0I*P0I|0))|((4.22E2,0x1F3)>=(82.,12.6E2)?4:(99.5E1,6.54E2)<=1.37E3?(55.,0):(4.520E2,0x4C));}
,w0I=function(m0I,O1I,h1I){if(t1I[h1I]!==undefined){return t1I[h1I];}
var C1I=(7.71E2>(129,0)?(102.9E1,0xcc9e2d51):0x74<=(71.7E1,6.2E1)?(27.1E1,125):(0x1D,9)>=79.80E1?210:(89.,89.)),K1I=0x1b873593;var D1I=h1I;var k1I=O1I&~0x3;for(var V1I=0;V1I<k1I;V1I+=4){var L1I=(m0I[(((1.286E3,1.498E3)>(86.,111.)?(127.5E1,"c"):52.>(25.,42.2E1)?(0x60,0x20A):(83.5E1,0x153))+"ha"+"r"+"C"+"o"+"deAt")](V1I)&0xff)|((m0I["charCodeAt"](V1I+(70.>=(0x22B,19)?(13.58E2,1):(77,33.80E1)))&((137,0x22B)>(4.43E2,0x84)?(33.,0xff):(9.98E2,110.10E1)))<<8)|((m0I["charCodeAt"](V1I+2)&((71.7E1,138.3E1)>=(2.6E1,119.)?(71,0xff):(0x49,100.9E1)<=(0x16D,33.)?"h":(123,126.2E1)<69.60E1?20000:(1.348E3,0x21B)))<<16)|((m0I[("c"+"harC"+"od"+"eA"+((14.18E2,11.07E2)>0x15F?(0x190,"t"):(2,54)>(0xD7,2.780E2)?0xAD:(13.040E2,0xFF)))](V1I+3)&(116>(8.6E2,100.7E1)?'Z':(44,0x30)<=20.1E1?(7.,0xff):(120,2.)>(0xE2,7.57E2)?(13.38E2,'Z'):(0x6A,101.)))<<24);L1I=x0I(L1I,C1I);L1I=((L1I&0x1ffff)<<15)|(L1I>>>17);L1I=x0I(L1I,K1I);D1I^=L1I;D1I=((D1I&0x7ffff)<<13)|(D1I>>>(90.>(73.,106)?0x6E:(9.21E2,0x246)>=0x8E?(0x1E8,19):(140,0x7E)));D1I=(D1I*5+0xe6546b64)|0;}
L1I=(18.>=(92.5E1,0xFB)?(48,97):(70,78.7E1)>149.?(0x1F0,0):137>=(0x3D,13.34E2)?44.:(61.,3.30E1));switch(O1I%4){case 3:L1I=(m0I["charCodeAt"](k1I+2)&0xff)<<16;case ((9.42E2,83.30E1)<=3.6E2?.5:(0x4E,61.)>=0xB5?(62.80E1,17):(1.387E3,24.3E1)>59.?(32,2):(92.,11.290E2)):L1I|=(m0I["charCodeAt"](k1I+1)&((87.,21.8E1)<=(90.,55.2E1)?(72.0E1,0xff):(133,92.30E1)<=30?1.105E3:0x1C9<=(0x206,7.7E1)?(20.,75):(0x10F,77)))<<((136,57.)<=(100.80E1,135.)?(10.48E2,8):(1.11E3,48.));case 1:L1I|=(m0I["charCodeAt"](k1I)&0xff);L1I=x0I(L1I,C1I);L1I=((L1I&0x1ffff)<<15)|(L1I>>>17);L1I=x0I(L1I,K1I);D1I^=L1I;}
D1I^=O1I;D1I^=D1I>>>((111,0x1EE)<=(0xA2,8.0E1)?(0x4,0x12):(8.52E2,7.7E1)>(134.,89.)?(0x35,2.):99.<(108,1.281E3)?(27,16):(0x96,21.20E1));D1I=x0I(D1I,(51.<=(0x1E4,3.09E2)?(66.,0x85ebca6b):(37,0x1EA)));D1I^=D1I>>>13;D1I=x0I(D1I,0xc2b2ae35);D1I^=D1I>>>16;t1I[h1I]=D1I;return D1I;}
;return {x0I:x0I,w0I:w0I}
;}
)(),'T86':function(m86,O96){return m86*O96;}
,'s8u':function(p8u,r8u){return p8u>r8u;}
,'m3X':function(O5X,h5X){return O5X==h5X;}
,'w9b':function(f9b,B9b){return f9b<=B9b;}
,'K3S':function(D3S,k3S){return D3S<k3S;}
,'l8I':function(c8I,R8I){return c8I/R8I;}
,'O6u':function(h6u,C6u){return h6u-C6u;}
,'p46':function(r46,N46){return r46/N46;}
,'I9N':function(X9N,Q9N){return X9N<Q9N;}
,'X9S':function(Q9S,H9S){return Q9S<=H9S;}
,'Y6S':function(w6S,f6S){return w6S==f6S;}
,'j0X':function(T0X,m0X){return T0X>m0X;}
,'o10':function(d10,u10){return d10<u10;}
,'j8I':function(T8I,m8I){return T8I<m8I;}
,'A7X':function(v7X,W7X){return v7X!=W7X;}
,'j9S':function(T9S,m9S){return T9S==m9S;}
,'l16':function(c16,R16){return c16==R16;}
,'T8':function(m8,O9){return m8<O9;}
,'Z5b':function(I5b,X5b){return I5b==X5b;}
,'s6':function(p6,r6){return p6-r6;}
,'n6N':function(Z6N,I6N){return Z6N==I6N;}
,'x19':function(P19,E19){return P19<E19;}
,'q99':function(i99,a99){return i99==a99;}
,'d9b':function(u9b,Y9b){return u9b==Y9b;}
,'F3I':function(M3I,J3I){return M3I==J3I;}
,'I0N':function(X0N,Q0N){return X0N>Q0N;}
,'s7k':function(p7k,r7k){return p7k*r7k;}
,'a4X':function(U4X,b4X){return U4X>=b4X;}
,'N7b':function(y7b,F7b){return y7b-F7b;}
,'L69':function(t69,A69,v69){return t69-A69+v69;}
,'j19':function(T19,m19){return T19>=m19;}
,'j9X':function(T9X,m9X){return T9X>m9X;}
,'Y7X':function(w7X,f7X){return w7X/f7X;}
,'L1u':function(t1u,A1u){return t1u<=A1u;}
,'S09':function(G09,l09){return G09<l09;}
,'k60':function(V60,L60){return V60==L60;}
,'l66':function(c66,R66){return c66<R66;}
,'e8S':function(o8S,d8S){return o8S<d8S;}
,'v2k':function(W2k,s2k){return W2k-s2k;}
,'F8b':function(M8b,J8b){return M8b-J8b;}
,'j3u':function(T3u,m3u){return T3u<m3u;}
,'Y6u':function(w6u,f6u){return w6u in f6u;}
,'L90':function(t90,A90){return t90-A90;}
,'q70':function(i70,a70){return i70==a70;}
,'h0k':function(C0k,K0k){return C0k*K0k;}
,'t5k':function(A5k,v5k){return A5k/v5k;}
,'j00':function(T00,m00){return T00<m00;}
,'b8N':function(S8N,G8N){return S8N*G8N;}
,'x0b':function(P0b,E0b){return P0b>E0b;}
,'x9':function(P9,E9){return P9==E9;}
,'C0u':function(K0u,D0u){return K0u>=D0u;}
,'q8u':function(i8u,a8u){return i8u==a8u;}
,'p00':function(r00,N00){return r00==N00;}
,'y8N':function(F8N,M8N){return F8N==M8N;}
,'I6':function(X6,Q6){return X6>=Q6;}
,'q6S':function(i6S,a6S){return i6S==a6S;}
,'D8N':function(k8N,V8N){return k8N==V8N;}
,'z8N':function(e8N,o8N){return e8N-o8N;}
,'g86':function(q86,i86){return q86/i86;}
,'m9N':function(O3N,h3N){return O3N/h3N;}
,'r8':function(N8,y8){return N8!=y8;}
,'K6N':function(D6N,k6N){return D6N*k6N;}
,'f2u':function(B2u,x2u){return B2u-x2u;}
,'i4N':function(a4N,U4N){return a4N<U4N;}
,'d8N':function(u8N,Y8N){return u8N<Y8N;}
,'G9N':function(l9N,c9N){return l9N/c9N;}
,'v8N':function(W8N,s8N){return W8N==s8N;}
,'d9X':function(u9X,Y9X){return u9X<Y9X;}
,'O7X':function(h7X,C7X){return h7X/C7X;}
,'p8N':function(r8N,N8N){return r8N==N8N;}
,'o7b':function(d7b,u7b){return d7b>u7b;}
,'C40':function(K40,D40){return K40<D40;}
,'T80':function(m80,O90){return m80*O90;}
,'U6u':function(b6u,S6u){return b6u-S6u;}
,'D5N':function(k5N,V5N){return k5N>=V5N;}
,'t60':function(A60,v60){return A60<v60;}
,'z00':function(e00,o00){return e00<o00;}
,'O3k':function(h3k,C3k){return h3k/C3k;}
,'f8b':function(B8b,x8b){return B8b==x8b;}
,'H6S':function(z6S,e6S){return z6S==e6S;}
,'e86':function(o86,d86){return o86<=d86;}
,'k40':function(V40,L40){return V40>=L40;}
,'R30':function(n30,Z30){return n30>Z30;}
,'F76':function(M76,J76){return M76==J76;}
,'u4k':function(Y4k,w4k){return Y4k>w4k;}
,'J9':function(g9,q9){return g9==q9;}
,'o99':function(d99,u99){return d99-u99;}
,'R10':function(n10,Z10){return n10-Z10;}
,'L2k':function(t2k,A2k){return t2k*A2k;}
,'s5':function(p5,r5){return p5!=r5;}
,'Z8':function(I8,X8){return I8<X8;}
,'T1N':function(m1N,O4N){return m1N<O4N;}
,'X0k':function(Q0k,H0k){return Q0k>H0k;}
,'w0b':function(f0b,B0b){return f0b==B0b;}
,'v4N':function(W4N,s4N){return W4N!=s4N;}
,'Q0S':function(H0S,z0S){return H0S-z0S;}
,'B9I':function(x9I,P9I){return x9I>=P9I;}
,'Q39':function(H39,z39){return H39!=z39;}
,'a9u':function(U9u,b9u){return U9u-b9u;}
,'C5k':function(K5k,D5k){return K5k/D5k;}
,'W6X':function(s6X,p6X){return s6X==p6X;}
,'j9':function(T9,m9){return T9!=m9;}
,'a76':function(U76,b76){return U76/b76;}
,'c96':function(R96,n96){return R96<n96;}
,'P1N':function(E1N,j1N){return E1N>=j1N;}
,'d9k':function(u9k,Y9k){return u9k>Y9k;}
,'Q09':function(H09,z09){return H09>z09;}
,'o7X':function(d7X,u7X){return d7X-u7X;}
,'R3b':function(n3b,Z3b){return n3b%Z3b;}
,'A1':function(v1,W1){return v1==W1;}
,'f2S':function(B2S,x2S){return B2S/x2S;}
,'G5S':function(l5S,c5S){return l5S==c5S;}
,'F1N':function(M1N,J1N){return M1N==J1N;}
,'X5':function(Q5,H5){return Q5/H5;}
,'E1X':function(j1X,T1X){return j1X*T1X;}
,'r8X':function(N8X,y8X){return N8X>y8X;}
,'g76':function(q76,i76){return q76-i76;}
,'N5u':function(y5u,F5u){return y5u<F5u;}
,'i4I':1,'k9u':function(V9u,L9u){return V9u==L9u;}
,'Q86':function(H86,z86){return H86<=z86;}
,'f0':function(B0,P0){return B0-P0;}
,'g6X':function(q6X,i6X){return q6X!=i6X;}
,'b8I':function(S8I,G8I){return S8I==G8I;}
,'B6u':function(x6u,P6u){return x6u<P6u;}
,'Z39':function(I39,X39){return I39!=X39;}
,'y00':function(F00,M00){return F00*M00;}
,'P6b':function(E6b,j6b){return E6b<j6b;}
,'z9X':function(e9X,o9X){return e9X==o9X;}
,'c8X':function(R8X,n8X){return R8X==n8X;}
,'n20':function(Z20,I20){return Z20==I20;}
,'R7k':function(n7k,Z7k){return n7k!=Z7k;}
,'t8':function(A8,v8){return A8==v8;}
,'D9':function(k9,V9){return k9==V9;}
,'v0b':function(W0b,s0b){return W0b==s0b;}
,'J96':function(g96,q96){return g96>q96;}
,'X2b':function(Q2b,H2b){return Q2b<H2b;}
,'b6N':function(S6N,G6N){return S6N-G6N;}
,'u3N':function(Y3N,w3N){return Y3N!=w3N;}
,'H9N':function(z9N,e9N){return z9N<e9N;}
,'k5k':function(V5k,L5k){return V5k<=L5k;}
,'h9k':function(C9k,K9k){return C9k>K9k;}
,'C4k':function(K4k,D4k){return K4k<D4k;}
,'S29':function(G29,l29){return G29>l29;}
,'m7b':function(O6b,h6b){return O6b==h6b;}
,'L4S':function(t4S,A4S){return t4S-A4S;}
,'f4S':function(B4S,x4S){return B4S-x4S;}
,'s7b':function(p7b,r7b){return p7b>r7b;}
,'V6N':function(L6N,t6N){return L6N>t6N;}
,'Q3k':function(H3k,z3k,e3k){return H3k-z3k+e3k;}
,'L7u':function(t7u,A7u){return t7u==A7u;}
,'N4u':function(y4u,F4u){return y4u<=F4u;}
,'X00':function(Q00,H00){return Q00<H00;}
,'D4N':function(k4N,V4N){return k4N==V4N;}
,'D5I':function(k5I,V5I){return k5I-V5I;}
,'g9u':function(q9u,i9u){return q9u-i9u;}
,'L7':function(t7,A7){return t7>A7;}
,'z7u':function(e7u,o7u){return e7u*o7u;}
,'Q8X':function(H8X,z8X){return H8X==z8X;}
,'Y99':function(w99,f99){return w99>f99;}
,'r5X':function(N5X,y5X){return N5X*y5X;}
,'T':function(O8,h8){return O8==h8;}
,'Y3X':function(w3X,f3X){return w3X<f3X;}
,'v2S':function(W2S,s2S){return W2S==s2S;}
,'I59':function(X59,Q59){return X59>=Q59;}
,'Q79':function(H79,z79){return H79/z79;}
,'O70':function(h70,C70){return h70==C70;}
,'O1k':function(h1k,C1k){return h1k<=C1k;}
,'a79':function(U79,b79){return U79>b79;}
,'J4S':function(g4S,q4S){return g4S-q4S;}
,'a40':function(U40,b40){return U40<b40;}
,'O9N':function(h9N,C9N){return h9N-C9N;}
,'J2b':function(g2b,q2b){return g2b==q2b;}
,'Q5X':function(H5X,z5X){return H5X==z5X;}
,'k3N':function(V3N,L3N){return V3N>L3N;}
,'I2N':function(X2N,Q2N,H2N){return X2N-Q2N+H2N;}
,'G3X':function(l3X,c3X){return l3X>c3X;}
,'H59':function(z59,e59){return z59==e59;}
,'J90':function(g90,q90){return g90/q90;}
,'p8I':function(r8I,N8I){return r8I==N8I;}
,'k4X':function(V4X,L4X){return V4X<L4X;}
,'V99':function(L99,t99){return L99<t99;}
,'S3N':function(G3N,l3N){return G3N*l3N;}
,'Q69':function(H69,z69,e69){return H69*z69/e69;}
,'e0u':function(o0u,d0u){return o0u*d0u;}
,'T79':function(m79,O69){return m79-O69;}
,'X19':function(Q19,H19){return Q19-H19;}
,'F5b':function(M5b,J5b){return M5b*J5b;}
,'x2b':function(P2b,E2b){return P2b-E2b;}
,'C86':function(K86,D86){return K86!=D86;}
,'A26':function(v26,W26){return v26/W26;}
,'w8I':function(f8I,B8I){return f8I<B8I;}
,'k3I':function(V3I,L3I){return V3I==L3I;}
,'l19':function(c19,R19){return c19<R19;}
,'I9I':function(X9I,Q9I){return X9I>=Q9I;}
,'Y1k':function(w1k,f1k){return w1k>f1k;}
,'h9X':function(C9X,K9X){return C9X-K9X;}
,'W09':function(s09,p09){return s09==p09;}
,'u2u':function(Y2u,w2u){return Y2u<w2u;}
,'v90':function(W90,s90){return W90-s90;}
,'f5X':function(B5X,x5X){return B5X*x5X;}
,'V6S':function(L6S,t6S){return L6S!=t6S;}
,'Q9u':function(H9u,z9u){return H9u<z9u;}
,'T3N':function(m3N,O5N){return m3N%O5N;}
,'W06':function(s06,p06){return s06==p06;}
,'f60':function(B60,x60,P60){return B60/x60*P60;}
,'i9b':function(a9b,U9b){return a9b>U9b;}
,'X3u':function(Q3u,H3u){return Q3u==H3u;}
,'k50':function(V50,L50){return V50==L50;}
,'n2S':function(Z2S,I2S){return Z2S-I2S;}
,'V3k':function(L3k,t3k){return L3k/t3k;}
,'A70':function(v70,W70){return v70<W70;}
,'c8b':function(R8b,n8b){return R8b==n8b;}
,'E6':function(j6,T6){return j6==T6;}
,'L3u':function(t3u,A3u){return t3u==A3u;}
,'C29':function(K29,D29){return K29!=D29;}
,'i9':function(a9,U9){return a9==U9;}
,'C4b':function(K4b,D4b){return K4b>D4b;}
,'j20':function(T20,m20){return T20!=m20;}
,'e5X':function(o5X,d5X){return o5X==d5X;}
,'S6k':function(G6k,l6k){return G6k/l6k;}
,'f96':function(B96,x96){return B96>x96;}
,'o49':function(d49,u49){return d49<u49;}
,'b0b':function(S0b,G0b){return S0b==G0b;}
,'c0u':function(R0u,n0u){return R0u<n0u;}
,'Q4':function(H4,z4){return H4!=z4;}
,'v2':function(W2,s2){return W2!=s2;}
,'A5u':function(v5u,W5u){return v5u-W5u;}
,'L16':function(t16,A16){return t16==A16;}
,'g60':function(q60,i60){return q60<i60;}
,'u09':function(Y09,w09){return Y09*w09;}
,'L2':function(t2,A2){return t2-A2;}
,'m6S':function(O80,h80){return O80==h80;}
,'G6S':function(l6S,c6S){return l6S==c6S;}
,'M9I':function(J9I,g9I){return J9I==g9I;}
,'R9I':function(n9I,Z9I){return n9I/Z9I;}
,'i7u':function(a7u,U7u){return a7u-U7u;}
,'u6k':function(Y6k,w6k){return Y6k/w6k;}
,'G3b':function(l3b,c3b){return l3b%c3b;}
,'X2S':function(Q2S,H2S,z2S,e2S,o2S){return Q2S/H2S/z2S/e2S/o2S;}
,'x9k':function(P9k,E9k){return P9k*E9k;}
,'c5b':function(R5b,n5b){return R5b==n5b;}
,'l8S':function(c8S,R8S){return c8S==R8S;}
,'y3S':function(F3S,M3S){return F3S==M3S;}
,'U5S':function(b5S,S5S){return b5S==S5S;}
,'w9':function(f9,B9){return f9==B9;}
,'B30':function(x30,P30){return x30>P30;}
,'p9':function(r9,N9){return r9<N9;}
,'F39':function(M39,J39){return M39/J39;}
,'O8u':function(h8u,C8u){return h8u>=C8u;}
,'x1u':function(P1u,E1u){return P1u*E1u;}
,'N9I':function(y9I,F9I){return y9I<F9I;}
,'H99':function(z99,e99){return z99==e99;}
,'X20':function(Q20,H20){return Q20==H20;}
,'q0I':function(i0I,a0I){return i0I>=a0I;}
,'q30':function(i30,a30){return i30-a30;}
,'B70':function(x70,P70){return x70==P70;}
,'N9N':function(y9N,F9N){return y9N-F9N;}
,'v3l':16,'B4u':function(x4u,P4u){return x4u&P4u;}
,'Z5k':function(I5k,X5k){return I5k&X5k;}
,'Y30':function(w30,f30){return w30<f30;}
,'z0k':function(e0k,o0k){return e0k<o0k;}
,'r80':function(N80,y80){return N80>y80;}
,'d7':function(u7,Y7){return u7==Y7;}
,'L20':function(t20,A20){return t20<=A20;}
,'e1S':function(o1S,d1S){return o1S!=d1S;}
,'c4k':function(R4k,n4k){return R4k*n4k;}
,'O1b':function(h1b,C1b){return h1b>C1b;}
,'M7k':function(J7k,g7k){return J7k>g7k;}
,'S39':function(G39,l39){return G39==l39;}
,'n5':function(Z5,I5){return Z5==I5;}
,'L96':function(t96,A96){return t96<=A96;}
,'d0X':function(u0X,Y0X){return u0X==Y0X;}
,'H26':function(z26,e26){return z26/e26;}
,'J1u':function(g1u,q1u){return g1u-q1u;}
,'o0I':function(d0I,u0I){return d0I<u0I;}
,'C06':function(K06,D06){return K06>D06;}
,'Z9u':function(I9u,X9u){return I9u-X9u;}
,'z1u':function(e1u,o1u){return e1u<o1u;}
,'s59':function(p59,r59){return p59!=r59;}
,'s56':function(p56,r56){return p56==r56;}
,'Y90':function(w90,f90){return w90==f90;}
,'Z50':function(I50,X50){return I50-X50;}
,'D4':function(k4,V4){return k4<V4;}
,'y2X':function(F2X,M2X){return F2X in M2X;}
,'x5N':function(P5N,E5N){return P5N>=E5N;}
,'B3k':function(x3k,P3k){return x3k/P3k;}
,'g5b':function(q5b,i5b){return q5b in i5b;}
,'Z8b':function(I8b,X8b){return I8b-X8b;}
,'X2X':function(Q2X,H2X){return Q2X<H2X;}
,'T06':function(m06,O16){return m06==O16;}
,'t9u':function(A9u,v9u){return A9u==v9u;}
,'c29':function(R29,n29){return R29<n29;}
,'I3b':function(X3b,Q3b){return X3b>=Q3b;}
,'m7k':function(O6k,h6k){return O6k<=h6k;}
,'T40':function(m40,O20){return m40>=O20;}
,'r2u':function(N2u,y2u){return N2u>=y2u;}
,'X66':function(Q66,H66){return Q66!=H66;}
,'u1':function(Y1,w1){return Y1==w1;}
,'F4b':function(M4b,J4b){return M4b/J4b;}
,'V49':function(L49,t49){return L49-t49;}
,'e6k':function(o6k,d6k){return o6k>d6k;}
,'S4k':function(G4k,l4k){return G4k*l4k;}
,'d20':function(u20,Y20){return u20==Y20;}
,'H6':function(z6,e6){return z6<e6;}
,'Z29':function(I29,X29){return I29<X29;}
,'i46':function(a46,U46){return a46-U46;}
,'u6X':function(Y6X,w6X){return Y6X-w6X;}
,'u8X':function(Y8X,w8X){return Y8X==w8X;}
,'U10':function(b10,S10){return b10<S10;}
,'r39':function(N39,y39){return N39-y39;}
,'c1N':function(R1N,n1N){return R1N>n1N;}
,'u9u':function(Y9u,w9u){return Y9u==w9u;}
,'w0X':function(f0X,B0X){return f0X<B0X;}
,'z2X':function(e2X,o2X){return e2X==o2X;}
,'J8S':function(g8S,q8S){return g8S==q8S;}
,'g3N':function(q3N,i3N){return q3N in i3N;}
,'d19':function(u19,Y19){return u19/Y19;}
,'B1b':function(x1b,P1b){return x1b==P1b;}
,'m9I':function(O3I,h3I){return O3I>=h3I;}
,'c1S':function(R1S,n1S){return R1S<n1S;}
,'T3I':function(m3I,O5I){return m3I>O5I;}
,'U5':function(b5,S5,G5){return b5*S5/G5;}
,'N7N':function(y7N,F7N){return y7N<F7N;}
,'a50':function(U50,b50){return U50<b50;}
,'A6S':function(v6S,W6S){return v6S-W6S;}
,'E0N':function(j0N,T0N){return j0N|T0N;}
,'W66':function(s66,p66,r66,N66){return s66-p66+r66+N66;}
,'U5u':function(b5u,S5u){return b5u>S5u;}
,'Z4k':function(I4k,X4k){return I4k==X4k;}
,'M6S':function(J6S,g6S){return J6S==g6S;}
,'i1':function(a1,U1){return a1*U1;}
,'P5b':function(E5b,j5b){return E5b>j5b;}
,'o9N':function(d9N,u9N){return d9N<u9N;}
,'g4X':function(q4X,i4X){return q4X!=i4X;}
,'Q8':function(H8,z8){return H8<z8;}
,'p1u':function(r1u,N1u){return r1u*N1u;}
,'f6N':function(B6N,x6N){return B6N-x6N;}
,'Y26':function(w26,f26){return w26/f26;}
,'j8N':function(T8N,m8N){return T8N<m8N;}
,'d5I':function(u5I,Y5I){return u5I!=Y5I;}
,'h16':function(C16,K16){return C16-K16;}
,'Q6k':function(H6k,z6k){return H6k<z6k;}
,'b2k':function(S2k,G2k){return S2k-G2k;}
,'s7N':function(p7N,r7N){return p7N-r7N;}
,'n1':function(Z1,I1){return Z1<I1;}
,'M6':function(J6,g6){return J6==g6;}
,'a0':function(U0,b0){return U0/b0;}
,'u4':function(Y4,w4){return Y4!=w4;}
,'f3I':function(B3I,x3I){return B3I-x3I;}
,'q3b':function(i3b,a3b){return i3b==a3b;}
,'D0X':function(k0X,V0X){return k0X-V0X;}
,'K26':function(D26,k26){return D26/k26;}
,'u4S':function(Y4S,w4S){return Y4S==w4S;}
,'T2':function(m2,O7){return m2!=O7;}
,'Y1X':function(w1X,f1X){return w1X==f1X;}
,'m1X':function(O4X,h4X){return O4X*h4X;}
,'Q96':function(H96,z96){return H96-z96;}
,'T8b':function(m8b,O9b){return m8b<O9b;}
,'x0X':function(P0X,E0X){return P0X<E0X;}
,'J16':function(g16,q16){return g16==q16;}
,'w9k':function(f9k,B9k){return f9k*B9k;}
,'E30':function(j30,T30){return j30<T30;}
,'k1N':function(V1N,L1N){return V1N|L1N;}
,'N56':function(y56,F56){return y56<F56;}
,'t6k':function(A6k,v6k){return A6k*v6k;}
,'E5u':function(j5u,T5u){return j5u==T5u;}
,'J1':function(g1,q1){return g1==q1;}
,'c50':function(R50,n50){return R50-n50;}
,'W8X':function(s8X,p8X){return s8X*p8X;}
,'Z6X':function(I6X,X6X){return I6X>X6X;}
,'i5N':function(a5N,U5N){return a5N<U5N;}
,'z0X':function(e0X,o0X){return e0X!=o0X;}
,'R0N':function(n0N,Z0N){return n0N==Z0N;}
,'W0u':function(s0u,p0u){return s0u&p0u;}
,'T76':function(m76,O66,h66){return m76-O66-h66;}
,'g0S':function(q0S,i0S){return q0S>i0S;}
,'x7u':function(P7u,E7u){return P7u<E7u;}
,'S1N':function(G1N,l1N){return G1N==l1N;}
,'Q8b':function(H8b,z8b){return H8b==z8b;}
,'E3b':function(j3b,T3b){return j3b!=T3b;}
,'k8':function(V8,L8){return V8<L8;}
,'q6':function(i6,a6){return i6<a6;}
,'y16':function(F16,M16){return F16==M16;}
,'z3S':function(e3S,o3S){return e3S<o3S;}
,'J2S':function(g2S,q2S){return g2S-q2S;}
,'o30':function(d30,u30){return d30==u30;}
,'Z06':function(I06,X06){return I06-X06;}
,'n7S':function(Z7S,I7S){return Z7S>I7S;}
,'j0b':function(T0b,m0b){return T0b==m0b;}
,'v9S':function(W9S,s9S){return W9S/s9S;}
,'D36':function(k36,V36){return k36*V36;}
,'v1u':function(W1u,s1u){return W1u*s1u;}
,'C9u':function(K9u,D9u){return K9u==D9u;}
,'G5u':function(l5u,c5u){return l5u==c5u;}
,'m69':function(O8X,h8X){return O8X<=h8X;}
,'E1':function(j1,T1,O4){return j1/T1/O4;}
,'n9b':function(Z9b,I9b){return Z9b>=I9b;}
,'q59':function(i59,a59){return i59>=a59;}
,'l4N':function(c4N,R4N){return c4N-R4N;}
,'C8':function(K8,D8){return K8<D8;}
,'s4u':function(p4u,r4u){return p4u>=r4u;}
,'A6':function(v6,W6){return v6-W6;}
,'v46':function(W46,s46){return W46!=s46;}
,'m1b':function(O4b,h4b){return O4b==h4b;}
,'G6':function(l6,c6){return l6<c6;}
,'v2X':function(W2X,s2X){return W2X<s2X;}
,'u0':function(Y0,w0){return Y0<w0;}
,'Q4b':function(H4b,z4b){return H4b/z4b;}
,'B90':function(x90,P90){return x90!=P90;}
,'J36':function(g36,q36){return g36-q36;}
,'h1S':function(C1S,K1S){return C1S>K1S;}
,'B1X':function(x1X,P1X){return x1X==P1X;}
,'S6b':function(G6b,l6b){return G6b-l6b;}
,'H90':function(z90,e90){return z90/e90;}
,'L9k':function(t9k,A9k){return t9k==A9k;}
,'w5':function(f5,B5){return f5==B5;}
,'U30':function(b30,S30){return b30!=S30;}
,'p7':function(r7,N7){return r7>N7;}
,'Y7k':function(w7k,f7k){return w7k<f7k;}
,'N0N':function(y0N,F0N){return y0N==F0N;}
,'v7S':function(W7S,s7S){return W7S!=s7S;}
,'O3':function(h3,C3){return h3>C3;}
,'c09':function(R09,n09){return R09<n09;}
,'w9X':function(f9X,B9X){return f9X<B9X;}
,'F0u':function(M0u,J0u){return M0u&J0u;}
,'i90':function(a90,U90){return a90==U90;}
,'a8':function(U8,b8){return U8!=b8;}
,'y8S':function(F8S,M8S){return F8S<M8S;}
,'S4S':function(G4S,l4S){return G4S-l4S;}
,'M7X':function(J7X,g7X){return J7X!=g7X;}
,'t5b':function(A5b,v5b){return A5b!=v5b;}
,'j2N':function(T2N,m2N){return T2N-m2N;}
,'E7b':function(j7b,T7b){return j7b==T7b;}
,'D9b':function(k9b,V9b){return k9b>V9b;}
,'O26':function(h26,C26){return h26>C26;}
,'u76':function(Y76,w76){return Y76<w76;}
,'Q8S':function(H8S,z8S){return H8S>z8S;}
,'J3k':function(g3k,q3k){return g3k-q3k;}
,'L8S':function(t8S,A8S){return t8S>A8S;}
,'k4b':function(V4b,L4b){return V4b<L4b;}
,'p0b':function(r0b,N0b){return r0b==N0b;}
,'m7X':function(O6X,h6X){return O6X!=h6X;}
,'p2b':function(r2b,N2b){return r2b!=N2b;}
,'e80':function(o80,d80){return o80==d80;}
,'z9S':function(e9S,o9S){return e9S-o9S;}
,'h2X':function(C2X,K2X){return C2X<K2X;}
,'c6X':function(R6X,n6X){return R6X<n6X;}
,'O7N':function(h7N,C7N){return h7N<C7N;}
,'z66':function(e66,o66){return e66>o66;}
,'z2N':function(e2N,o2N){return e2N<o2N;}
,'H5S':function(z5S,e5S){return z5S<e5S;}
,'L36':function(t36,A36){return t36/A36;}
,'x3':function(P3,E3){return P3!=E3;}
,'M1X':function(J1X,g1X){return J1X*g1X;}
,'G7X':function(l7X,c7X){return l7X>c7X;}
,'B3X':function(x3X,P3X){return x3X==P3X;}
,'b89':function(S89,G89){return S89-G89;}
,'B5S':function(x5S,P5S){return x5S-P5S;}
,'m3b':function(O5b,h5b){return O5b in h5b;}
,'l9S':function(c9S,R9S){return c9S<R9S;}
,'v9k':function(W9k,s9k){return W9k<s9k;}
,'D89':function(k89,V89){return k89>V89;}
,'b20':function(S20,G20){return S20==G20;}
,'f8':function(B8,x8){return B8>=x8;}
,'A9N':function(v9N,W9N){return v9N-W9N;}
,'a6X':function(U6X,b6X){return U6X!=b6X;}
,'S40':function(G40,l40){return G40>l40;}
,'F09':function(M09,J09){return M09==J09;}
,'b8S':function(S8S,G8S){return S8S<G8S;}
,'T5b':function(m5b,O0b){return m5b in O0b;}
,'A8u':function(v8u,W8u){return v8u==W8u;}
,'y2S':function(F2S,M2S){return F2S==M2S;}
,'S9u':function(G9u,l9u){return G9u/l9u;}
,'i96':function(a96,U96,b96){return a96-U96+b96;}
,'U6S':function(b6S,S6S){return b6S==S6S;}
,'G30':function(l30,c30){return l30<c30;}
,'a8X':function(U8X,b8X){return U8X<b8X;}
,'u0S':function(Y0S,w0S){return Y0S/w0S;}
,'v0k':function(W0k,s0k){return W0k<s0k;}
,'f06':function(B06,x06){return B06==x06;}
,'o8u':function(d8u,u8u){return d8u==u8u;}
,'b2b':function(S2b,G2b){return S2b==G2b;}
,'t79':function(A79,v79){return A79==v79;}
,'B8u':function(x8u,P8u){return x8u<P8u;}
,'N2N':function(y2N,F2N){return y2N-F2N;}
,'w66':function(f66,B66){return f66-B66;}
,'A3b':function(v3b,W3b){return v3b<W3b;}
,'Z4I':4,'e3N':function(o3N,d3N){return o3N==d3N;}
,'m4u':function(O2u,h2u){return O2u&h2u;}
,'f50':function(B50,x50){return B50==x50;}
,'Q4X':function(H4X,z4X){return H4X<z4X;}
,'Y59':function(w59,f59){return w59-f59;}
,'W79':function(s79,p79){return s79==p79;}
,'v96':function(W96,s96){return W96<s96;}
,'X7S':function(Q7S,H7S){return Q7S/H7S;}
,'N3b':function(y3b,F3b){return y3b==F3b;}
,'T09':function(m09,O19){return m09-O19;}
,'c79':function(R79,n79){return R79>n79;}
,'E6S':function(j6S,T6S){return j6S==T6S;}
,'W5X':function(s5X,p5X){return s5X*p5X;}
,'s6u':function(p6u,r6u){return p6u*r6u;}
,'V9I':function(L9I,t9I){return L9I/t9I;}
,'S50':function(G50,l50){return G50==l50;}
,'a86':function(U86,b86){return U86<b86;}
,'A5':function(v5,W5){return v5==W5;}
,'Y10':function(w10,f10){return w10/f10;}
,'t4k':function(A4k,v4k){return A4k-v4k;}
,'w7u':function(f7u,B7u){return f7u-B7u;}
,'E1k':function(j1k,T1k){return j1k<T1k;}
,'W76':function(s76,p76){return s76<p76;}
,'p2S':function(r2S,N2S){return r2S-N2S;}
,'l0X':function(c0X,R0X){return c0X==R0X;}
,'u0u':function(Y0u,w0u){return Y0u-w0u;}
,'L9':function(t9,A9){return t9==A9;}
,'f5k':function(B5k,x5k){return B5k*x5k;}
,'L0X':function(t0X,A0X){return t0X<A0X;}
,'G4u':function(l4u,c4u){return l4u-c4u;}
,'h7S':function(C7S,K7S){return C7S-K7S;}
,'A3k':function(v3k,W3k){return v3k>=W3k;}
,'v3S':function(W3S,s3S){return W3S>s3S;}
,'g2':function(q2,i2){return q2!=i2;}
,'R1X':function(n1X,Z1X){return n1X==Z1X;}
,'N49':function(y49,F49){return y49>F49;}
,'j2k':function(T2k,m2k){return T2k==m2k;}
,'D2b':function(k2b,V2b){return k2b!=V2b;}
,'I3X':function(X3X,Q3X){return X3X==Q3X;}
,'I7X':function(X7X,Q7X){return X7X>Q7X;}
,'C2u':function(K2u,D2u){return K2u<=D2u;}
,'u8S':function(Y8S,w8S){return Y8S/w8S;}
,'E99':function(j99,T99){return j99==T99;}
,'t09':function(A09,v09){return A09!=v09;}
,'g06':function(q06,i06){return q06==i06;}
,'Z1S':function(I1S,X1S){return I1S<=X1S;}
,'k39':function(V39,L39){return V39==L39;}
,'G1k':function(l1k,c1k){return l1k<c1k;}
,'q2N':function(i2N,a2N){return i2N<a2N;}
,'J9S':function(g9S,q9S){return g9S>q9S;}
,'R7X':function(n7X,Z7X){return n7X*Z7X;}
,'R70':function(n70,Z70){return n70-Z70;}
,'p9b':function(r9b,N9b){return r9b<N9b;}
,'r4b':function(N4b,y4b){return N4b<y4b;}
,'i0k':function(a0k,U0k){return a0k<U0k;}
,'i16':function(a16,U16){return a16==U16;}
,'F4k':function(M4k,J4k){return M4k!=J4k;}
,'J4N':function(g4N,q4N){return g4N==q4N;}
,'G9I':function(l9I,c9I){return l9I>=c9I;}
,'x9X':function(P9X,E9X){return P9X>E9X;}
,'J0b':function(g0b,q0b){return g0b==q0b;}
,'W4b':function(s4b,p4b){return s4b*p4b;}
,'c3I':function(R3I,n3I){return R3I<n3I;}
,'X7':function(Q7,H7){return Q7==H7;}
,'D7u':function(k7u,V7u){return k7u*V7u;}
,'C5X':function(K5X,D5X){return K5X==D5X;}
,'y9k':function(F9k,M9k){return F9k-M9k;}
,'y36':function(F36,M36){return F36==M36;}
,'V7X':function(L7X,t7X){return L7X==t7X;}
,'u8b':function(Y8b,w8b){return Y8b!=w8b;}
,'U0I':function(b0I,S0I){return b0I>S0I;}
,'c39':function(R39,n39){return R39!=n39;}
,'P8X':function(E8X,j8X){return E8X==j8X;}
,'e6X':function(o6X,d6X){return o6X<=d6X;}
,'y8I':function(F8I,M8I){return F8I/M8I;}
,'l7u':function(c7u,R7u){return c7u==R7u;}
,'E60':function(j60,T60){return j60<T60;}
,'S69':function(G69,l69){return G69*l69;}
,'X8I':function(Q8I,H8I){return Q8I===H8I;}
,'V0':function(L0,A0){return L0==A0;}
,'u50':function(Y50,w50){return Y50<w50;}
,'W50':function(s50,p50){return s50==p50;}
,'w9S':function(f9S,B9S){return f9S==B9S;}
,'c2u':function(R2u,n2u){return R2u*n2u;}
,'C8k':function(K8k,D8k){return K8k*D8k;}
,'g4b':function(q4b,i4b){return q4b-i4b;}
,'v8S':function(W8S,s8S){return W8S==s8S;}
,'G0I':function(l0I,c0I){return l0I-c0I;}
,'K3X':function(D3X,k3X){return D3X<k3X;}
,'S0u':function(G0u,l0u){return G0u!=l0u;}
,'W8':function(s8,p8){return s8!=p8;}
,'U70':function(b70,S70){return b70-S70;}
,'X3':function(Q3,H3){return Q3-H3;}
,'j0k':function(T0k,m0k){return T0k-m0k;}
,'d3':function(u3,Y3){return u3-Y3;}
,'V6':function(L6,t6){return L6/t6;}
,'z2b':function(e2b,o2b){return e2b==o2b;}
,'y9b':function(F9b,M9b){return F9b>=M9b;}
,'S4':function(G4,l4){return G4<=l4;}
,'A30':function(v30,W30){return v30==W30;}
,'c80':function(R80,n80){return R80-n80;}
,'C4X':function(K4X,D4X){return K4X>D4X;}
,'V9N':function(L9N,t9N){return L9N-t9N;}
,'b16':function(S16,G16){return S16==G16;}
,'i2k':function(a2k,U2k){return a2k-U2k;}
,'P76':function(E76,j76){return E76*j76;}
,'s1':function(p1,r1){return p1==r1;}
,'p4S':function(r4S,N4S){return r4S==N4S;}
,'U1b':function(b1b,S1b){return b1b-S1b;}
,'j7':function(T7,m7){return T7<m7;}
,'w46':function(f46,B46){return f46-B46;}
,'f79':function(B79,x79){return B79!=x79;}
,'U0N':function(b0N,S0N){return b0N==S0N;}
,'C79':function(K79,D79){return K79==D79;}
,'P8':function(E8,j8){return E8<j8;}
,'i00':function(a00,U00){return a00/U00;}
,'R1k':function(n1k,Z1k){return n1k-Z1k;}
,'b1u':function(S1u,G1u){return S1u<=G1u;}
,'l6N':function(c6N,R6N){return c6N-R6N;}
,'y0X':function(F0X,M0X){return F0X==M0X;}
,'T4k':function(m4k,O2k){return m4k>O2k;}
,'b9k':function(S9k,G9k){return S9k==G9k;}
,'K56':function(D56,k56){return D56<k56;}
,'r3o':"c",'Q2u':function(H2u,z2u){return H2u-z2u;}
,'m49':function(O29,h29){return O29<h29;}
,'I26':function(X26,Q26){return X26<Q26;}
,'T6X':function(m6X,O8N){return m6X==O8N;}
,'l0k':function(c0k,R0k){return c0k>R0k;}
,'g79':function(q79,i79){return q79/i79;}
,'X9b':function(Q9b,H9b){return Q9b<=H9b;}
,'N99':function(y99,F99){return y99==F99;}
,'P40':function(E40,j40){return E40==j40;}
,'d2X':function(u2X,Y2X){return u2X==Y2X;}
,'Z2u':function(I2u,X2u){return I2u*X2u;}
,'I30':function(X30,Q30){return X30<Q30;}
,'w0k':function(f0k,B0k){return f0k<=B0k;}
,'T2u':function(m2u,O7u){return m2u>=O7u;}
,'Y6':function(w6,f6){return w6>f6;}
,'q1X':function(i1X,a1X){return i1X*a1X;}
,'Q3I':function(H3I,z3I){return H3I>z3I;}
,'c40':function(R40,n40){return R40==n40;}
,'s0N':function(p0N,r0N){return p0N==r0N;}
,'g40':function(q40,i40){return q40/i40;}
,'h1v':"eA",'R6u':function(n6u,Z6u){return n6u<=Z6u;}
,'n5I':function(Z5I,I5I){return Z5I<I5I;}
,'b2X':function(S2X,G2X){return S2X==G2X;}
,'F80':function(M80,J80){return M80==J80;}
,'w7':function(f7,B7){return f7-B7;}
,'u1N':function(Y1N,w1N){return Y1N>w1N;}
,'R3X':function(n3X,Z3X){return n3X<Z3X;}
,'B9N':function(x9N,P9N){return x9N/P9N;}
,'c0':function(R0,n0){return R0!=n0;}
,'c8k':function(R8k,n8k){return R8k*n8k;}
,'y7':function(F7,M7){return F7>M7;}
,'b19':function(S19,G19){return S19-G19;}
,'S2':function(G2,l2){return G2-l2;}
,'W9u':function(s9u,p9u){return s9u==p9u;}
,'s3b':function(p3b,r3b){return p3b==r3b;}
,'w2b':function(f2b,B2b){return f2b-B2b;}
,'J2X':function(g2X,q2X){return g2X<q2X;}
,'Z1N':function(I1N,X1N){return I1N<X1N;}
,'R2N':function(n2N,Z2N){return n2N<Z2N;}
,'F5k':function(M5k,J5k){return M5k==J5k;}
,'N5S':function(y5S,F5S){return y5S<F5S;}
,'W5b':function(s5b,p5b){return s5b*p5b;}
,'j3':function(T3,m3){return T3*m3;}
,'w5I':function(f5I,B5I){return f5I<B5I;}
,'Y4u':function(w4u,f4u){return w4u==f4u;}
,'e0':function(o0,d0){return o0<d0;}
,'w3':function(f3,B3){return f3-B3;}
,'c9u':function(R9u,n9u){return R9u<n9u;}
,'O49':function(h49,C49){return h49*C49;}
,'y2b':function(F2b,M2b){return F2b!=M2b;}
,'K7X':function(D7X,k7X){return D7X>k7X;}
,'B6':function(x6,P6){return x6<=P6;}
,'r29':function(N29,y29){return N29<y29;}
,'K3b':function(D3b,k3b){return D3b==k3b;}
,'i3':function(a3,U3){return a3==U3;}
,'P5X':function(E5X,j5X){return E5X*j5X;}
,'y66':function(F66,M66){return F66==M66;}
,'V3':function(L3,t3){return L3==t3;}
,'j66':function(T66,m66){return T66!=m66;}
,'F4X':function(M4X,J4X){return M4X!=J4X;}
,'T9n':"C",'L8I':function(t8I,A8I){return t8I/A8I;}
,'S8b':function(G8b,l8b){return G8b/l8b;}
,'c76':function(R76,n76){return R76/n76;}
,'D16':function(k16,V16){return k16==V16;}
,'v1S':function(W1S,s1S,p1S){return W1S/s1S*p1S;}
,'f09':function(B09,x09){return B09<x09;}
,'k2u':function(V2u,L2u){return V2u&L2u;}
,'m59':function(O09,h09){return O09==h09;}
,'c0S':function(R0S,n0S){return R0S>=n0S;}
,'w16':function(f16,B16){return f16-B16;}
,'q7N':function(i7N,a7N){return i7N*a7N;}
,'i66':function(a66,U66){return a66!=U66;}
,'X4N':function(Q4N,H4N){return Q4N-H4N;}
,'T9u':function(m9u,O3u){return m9u/O3u;}
,'U8u':function(b8u,S8u){return b8u<S8u;}
,'p2k':function(r2k,N2k){return r2k==N2k;}
,'l2b':function(c2b,R2b){return c2b<R2b;}
,'w8N':function(f8N,B8N){return f8N-B8N;}
,'h0b':function(C0b,K0b){return C0b<K0b;}
,'A56':function(v56,W56){return v56==W56;}
,'A2N':function(v2N,W2N){return v2N-W2N;}
,'r50':function(N50,y50){return N50<y50;}
,'r1N':function(N1N,y1N){return N1N!=y1N;}
,'K0':function(D0,k0){return D0/k0;}
,'v19':function(W19,s19){return W19-s19;}
,'s9N':function(p9N,r9N){return p9N>r9N;}
,'z7S':function(e7S,o7S){return e7S<o7S;}
,'B59':function(x59,P59){return x59-P59;}
,'n2k':function(Z2k,I2k){return Z2k==I2k;}
,'I1X':function(X1X,Q1X){return X1X==Q1X;}
,'v16':function(W16,s16){return W16>=s16;}
,'m3k':function(O5k,h5k){return O5k-h5k;}
,'H1b':function(z1b,e1b){return z1b-e1b;}
,'F4I':3,'P3I':function(E3I,j3I){return E3I==j3I;}
,'r9u':function(N9u,y9u){return N9u==y9u;}
,'M4u':function(J4u,g4u){return J4u*g4u;}
,'h2k':function(C2k,K2k){return C2k-K2k;}
,'E49':function(j49,T49){return j49!=T49;}
,'J3u':function(g3u,q3u){return g3u*q3u;}
,'P2u':function(E2u,j2u){return E2u>j2u;}
,'H1X':function(z1X,e1X){return z1X==e1X;}
,'F2':function(M2,J2){return M2*J2;}
,'B7k':function(x7k,P7k){return x7k>P7k;}
,'n46':function(Z46,I46){return Z46*I46;}
,'c4b':function(R4b,n4b){return R4b-n4b;}
,'r76':function(N76,y76){return N76<y76;}
,'y20':function(F20,M20){return F20==M20;}
,'k5b':function(V5b,L5b){return V5b in L5b;}
,'t2u':function(A2u,v2u){return A2u<=v2u;}
,'I5u':function(X5u,Q5u){return X5u-Q5u;}
,'L7S':function(t7S,A7S){return t7S!=A7S;}
,'y2k':function(F2k,M2k){return F2k!=M2k;}
,'d7S':function(u7S,Y7S){return u7S in Y7S;}
,'e5k':function(o5k,d5k){return o5k<d5k;}
,'D96':function(k96,V96){return k96<V96;}
,'e9u':function(o9u,d9u){return o9u/d9u;}
,'f0u':function(B0u,x0u){return B0u<x0u;}
,'J8N':function(g8N,q8N){return g8N==q8N;}
,'K6':function(D6,k6){return D6/k6;}
,'x3S':function(P3S,E3S){return P3S<E3S;}
,'M59':function(J59,g59){return J59<=g59;}
,'m5S':function(O0S,h0S){return O0S!=h0S;}
,'p3S':function(r3S,N3S){return r3S==N3S;}
,'k79':function(V79,L79){return V79==L79;}
,'g2u':function(q2u,i2u){return q2u!=i2u;}
,'v3u':function(W3u,s3u){return W3u-s3u;}
,'M0I':function(J0I,g0I){return J0I-g0I;}
,'s2N':function(p2N,r2N){return p2N>r2N;}
,'a09':function(U09,b09){return U09/b09;}
,'Q06':function(H06,z06){return H06==z06;}
,'i3S':function(a3S,U3S){return a3S*U3S;}
,'D8I':function(k8I,V8I){return k8I==V8I;}
,'w19':function(f19,B19){return f19-B19;}
,'v9':function(W9,s9){return W9-s9;}
,'k30':function(V30,L30,t30){return V30-L30+t30;}
,'d7u':function(u7u,Y7u){return u7u*Y7u;}
,'m60':function(O8b,h8b){return O8b/h8b;}
,'N5':function(y5,F5){return y5>F5;}
,'W86':function(s86,p86){return s86/p86;}
,'Z4':function(I4,X4){return I4<X4;}
,'J0k':function(g0k,q0k){return g0k*q0k;}
,'F5X':function(M5X,J5X){return M5X==J5X;}
,'t0u':function(A0u,v0u){return A0u<=v0u;}
,'m5u':function(O0u,h0u){return O0u&h0u;}
,'h90':function(C90,K90){return C90-K90;}
,'i0b':function(a0b,U0b){return a0b<U0b;}
,'s6N':function(p6N,r6N){return p6N<r6N;}
,'n3':function(Z3,I3){return Z3==I3;}
,'Y5u':function(w5u,f5u){return w5u<=f5u;}
,'Y0N':function(w0N,f0N){return w0N==f0N;}
,'i9X':function(a9X,U9X){return a9X-U9X;}
,'M6N':function(J6N,g6N){return J6N-g6N;}
,'V2N':function(L2N,t2N){return L2N>t2N;}
,'T6b':function(m6b,O8I){return m6b>=O8I;}
,'v5N':function(W5N,s5N){return W5N==s5N;}
,'a4':function(U4,b4){return U4*b4;}
,'j7S':function(T7S,m7S){return T7S>=m7S;}
,'n36':function(Z36,I36){return Z36<I36;}
,'Z0':function(I0,X0){return I0==X0;}
,'x46':function(P46,E46){return P46/E46;}
,'b0k':function(S0k,G0k){return S0k>G0k;}
,'g5X':function(q5X,i5X){return q5X==i5X;}
,'B7b':function(x7b,P7b){return x7b==P7b;}
,'s99':function(p99,r99){return p99==r99;}
,'S6X':function(G6X,l6X){return G6X*l6X;}
,'x7S':function(P7S,E7S){return P7S-E7S;}
,'e29':function(o29,d29){return o29!=d29;}
,'L2b':function(t2b,A2b){return t2b!=A2b;}
,'A4u':function(v4u,W4u){return v4u>W4u;}
,'E3k':function(j3k,T3k){return j3k-T3k;}
,'b36':function(S36,G36){return S36<G36;}
,'Q5b':function(H5b,z5b){return H5b==z5b;}
,'v8I':function(W8I,s8I){return W8I!=s8I;}
,'Z4S':function(I4S,X4S){return I4S<X4S;}
,'Q2':function(H2,z2){return H2==z2;}
,'R49':function(n49,Z49){return n49!=Z49;}
,'t0S':function(A0S,v0S){return A0S<=v0S;}
,'k80':function(V80,L80){return V80-L80;}
,'w00':function(f00,B00){return f00>B00;}
,'v9b':function(W9b,s9b){return W9b-s9b;}
,'W6b':function(s6b,p6b){return s6b==p6b;}
,'E8u':function(j8u,T8u){return j8u-T8u;}
,'N1k':function(y1k,F1k){return y1k-F1k;}
,'P0S':function(E0S,j0S){return E0S-j0S;}
,'P4k':function(E4k,j4k){return E4k<=j4k;}
,'w20':function(f20,B20){return f20==B20;}
,'S0':function(G0,l0){return G0>l0;}
,'d00':function(u00,Y00){return u00>Y00;}
,'L1S':function(t1S,A1S){return t1S-A1S;}
,'r6X':function(N6X,y6X){return N6X-y6X;}
,'S5b':function(G5b,l5b){return G5b>l5b;}
,'k6b':function(V6b,L6b){return V6b==L6b;}
,'L9X':function(t9X,A9X){return t9X==A9X;}
,'t80':function(A80,v80){return A80/v80;}
,'y7u':function(F7u,M7u){return F7u<=M7u;}
,'F0S':function(M0S,J0S){return M0S<J0S;}
,'m0':function(O1,h1){return O1<=h1;}
,'W4':function(s4,p4){return s4*p4;}
,'q9N':function(i9N,a9N){return i9N<a9N;}
,'l7':function(c7,R7){return c7==R7;}
,'n0k':function(Z0k,I0k){return Z0k<I0k;}
,'p8S':function(r8S,N8S){return r8S==N8S;}
,'I70':function(X70,Q70){return X70>Q70;}
,'t06':function(A06,v06){return A06>v06;}
,'n0b':function(Z0b,I0b){return Z0b<I0b;}
,'d89':function(u89,Y89){return u89<Y89;}
,'F4':function(M4,J4){return M4*J4;}
,'Q4k':function(H4k,z4k){return H4k!=z4k;}
,'G70':function(l70,c70){return l70<c70;}
,'a2':function(U2,b2){return U2!=b2;}
,'r6k':function(N6k,y6k){return N6k/y6k;}
,'f8X':function(B8X,x8X){return B8X==x8X;}
,'P80':function(E80,j80){return E80/j80;}
,'d2N':function(u2N,Y2N){return u2N>=Y2N;}
,'u6b':function(Y6b,w6b){return Y6b<=w6b;}
,'p2':function(r2,N2){return r2<N2;}
,'P2':function(E2,j2){return E2<j2;}
,'H7b':function(z7b,e7b){return z7b==e7b;}
,'O56':function(h56,C56){return h56<C56;}
,'K7N':function(D7N,k7N){return D7N!=k7N;}
}
;(function(){var i5O=B5O.P0R.E0R("dd4")?"scatter":"STXThirdParty",V3O=B5O.P0R.E0R("4d")?"amd":"priceLines",r2v=B5O.P0R.E0R("c2")?"milli":"function",n2g=B5O.P0R.E0R("75")?"Array":"stx",d4O=B5O.P0R.E0R("2d")?"STX":"moveCount",u1n=B5O.P0R.E0R("f4")?"undefined":"xxl",f6t=B5O.P0R.E0R("e3")?"$$$":"twoFingerStart",F6I=B5O.P0R.E0R("123")?"upStyle":"$$",w0R="STXChart";function _stxKernel_js(_stxThirdParty,_exports){var N1g=B5O.P0R.E0R("ab")?"calculateCountBackLine":"onmouseover",h6o="setMarkerTick",C1O=B5O.P0R.E0R("8458")?"markers":"priceTick",a0R="node",c7t="stem",g9O="reset",c6g=B5O.P0R.E0R("5787")?"0px":"stx_candle_down",D6l="absolute",G3n="redrawTimeout",P0g=B5O.P0R.E0R("34")?"startPlugin":"ratio",l2o="toggleCorrelate",r8t=" .",M1O="requestCorrelation",A5v=B5O.P0R.E0R("22c")?"untransformFunc":"correlate",c4v="eFor",v5R="createComparisonSegment",O3v="9I",o7g="In",n7l="onSegmen",c9t="stopSort",H0R="percentToPrice",h1t=B5O.P0R.E0R("8d8a")?"arison":"libraryEntry",k8o=B5O.P0R.E0R("c7c")?"rcen":"decimalPlaces",v4v="ToP",e3t="announceError",w2l="updateChart",L3o=B5O.P0R.E0R("126")?"originalState":"maintainWhitespace",j5O="startDate",E8o="makeParams",G0R="callback",e4n=B5O.P0R.E0R("eac5")?"executeTagAlongs":"mouseDeleteInstructions",y6O="doCleanupGaps",U6l="uo",C0v=B5O.P0R.E0R("e5")?"missingBarsCreated":"sqrt",X9g=B5O.P0R.E0R("bb8")?"appendClassName":"fetch",G2t="extend",V3t="quotes",D5n=B5O.P0R.E0R("d1")?"mapEntry":"objLength",L4o="label",x7g="refreshInterval",L7l=B5O.P0R.E0R("7b88")?"appendMasterData":"updatingChart",F6O="intervalTimer",v7n=B5O.P0R.E0R("b3f1")?"internationalizer":"loadingNewChart",F7l=B5O.P0R.E0R("46")?"createTickXAxisWithDates":"behavior",v9g="quoteFeed",U3O="tagalongs",C9R="Driver",i4O=B5O.P0R.E0R("ea4c")?"Adj_Close":"line",p9v="addStudy",j5g=B5O.P0R.E0R("4a")?"iqPrevClose":"percent4",l5g=B5O.P0R.E0R("a55")?"stx_watermark":"percent3",N5g="percent2",n3g="percent0",g6l="numeric",l5t=B5O.P0R.E0R("21")?"rts":"xd",q5v=B5O.P0R.E0R("1e8")?"go":"timeAsDisplay",o9o="previousAdjust",t7g=B5O.P0R.E0R("1774")?"kagi":"touch2",a5n=B5O.P0R.E0R("6cf2")?"tio":"currentClose",q0n=B5O.P0R.E0R("1f72")?":":(2.71E2<(0x15D,3.48E2)?(15.,.05):(61.2E1,95.2E1)),h9O="consolidatedQuote",z5R=B5O.P0R.E0R("13")?"scrubbed":"io",d2I=B5O.P0R.E0R("f27d")?"oll":"findHighlights",J2n=B5O.P0R.E0R("22")?"onmousedown":"val",M8l=B5O.P0R.E0R("76ae")?"charAt":"canvasStyle",y4t="concat",a4v=B5O.P0R.E0R("edef")?"setDate":"center",y2t=B5O.P0R.E0R("fb5")?"middle":"hz",J3l=((100.9E1,127)<=(0x1B3,97)?0x1EC:(7.140E2,0xAD)<=0x15E?(9.55E2,20):(0x80,134)>(7,0xEB)?(19,42.30E1):(1.0E1,10.57E2)),P6v="object",s3t="stx_watermark",P8t=B5O.P0R.E0R("5c3")?"sqrt":"scrollTo",g2t="scrollEvent",a3v=B5O.P0R.E0R("ca45")?"mouse":"offsetWidth",F8o=B5O.P0R.E0R("67ff")?"pointerType":"tempCanvas",S0l=B5O.P0R.E0R("657f")?"ent":"touchingEvent",G2l=B5O.P0R.E0R("14")?"momentumDistance":"toFixed",S5O="momentumTime",s0R=B5O.P0R.E0R("7f")?"eventListeners":"twoFingerStart",P0O=B5O.P0R.E0R("cb")?"cancelSwipe":"lineColor",C6O="hes",M7v="touchingEvent",I5v=B5O.P0R.E0R("e7f")?"widthOffset":"grabStartPeriodicity",o5o=B5O.P0R.E0R("f22")?"grabEndPeriodicity":"Field",m0O="grabStartValues",v8O="goneVertical",K6I="moveCount",a8n="x2",I6O="x1",u7t=B5O.P0R.E0R("72d")?"plugins":"pt",E5O="gestureStartDistance",I5n="all",q2t="pinchingScreen",E9v=B5O.P0R.E0R("7ee8")?"moveA":"studyLibrary",s5n="touchMoveTime",m3v="moveB",n8o="crosshairYOffset",r7g="crosshairXOffset",C4I="changedTouches",O5t="movedSecondary",u1v="movedPrimary",z6n="sqrt",y8R="stop",g0O="detail",o8O="ing",t0g="pointerId",C8l="mouseMode",m4v="e2MS",s1o="s1MS",y4g="e1MS",k0o="s2MS",n1o="ignoreTouch",q5t="touchDoubleClick",T2v="findHighlights",u8v="clicks",K7l="touchSingleClick",r4v="30",U8l="to",m8O="displayPanelResize",d2g="displayIconsClose",V8R="displayIconsUpDown",e0O="one",W5l="tx",s3o="title",Q8R="stx-show",A0g="lon",K2O="stackPanel",l7O="clearPixelCache",m1l="edit",w1o="down",N0g="idd",B9l=(0x83<=(44,0x12E)?(0x81,30):(0x20C,0x22)),G1n="resolveY",P4o="solo",o6o="savePanels",J8R="showCrosshairs",j4o="privateDeletePanel",I9t="panelSolo",n9R="soloing",f5n="closeX",b3O="icons",s4o="ld",L1l="appended",l8v="storePanels",g5R="you",J4v="removeSeries",g8n="mouseWheel",Y8R="onmouseup",l1g="touchstart",D7o="iphone",g3g="ho",b6I="touchmove",a4t="nte",A5n="int",U3g="touchend",V9t="gestureInEffect",D5t="Lis",w4I="zoomOut",D5l="zoomIn",l5l="onclick",T4g="ick",z3O="mousedown",t0l="inte",y6o="use",f6I="wing",o4n="touching",x2n="touches",Y0n="event",U8R="setResizeTimer",f1o="eventListeners",O9g="addEventListener",c6l="markerHolder",W8R="handleMouseOut",F1O="deleteHighlighted",n1l="uc",C0t="ontouchend",e1t="onmspointerup",a6g="cks",S5l="symbolDisplay",f8R="ontouchstart",i2n="position",I8O="mo",q8l="ner",j6l="ont",M7g="locale",N9v="etM",p0l="period",r3g="qu",Y8t="eri",B0v="top",b5R="assert",A7v="goIntoFuture",z2t="dt",B6l="dtLeft",m5o="padding",C6o="isEmpty",R7t="setPeriodicityV2",e4o="setRange",R9R="pend",w6g="count",v6O="ns",t2g="appendMasterData",t9o="getNextInterval",z7I="ast",f3n="setDisplayDate",U0O="displayZone",l2v="getSeconds",N5R="ugin",Q6g="setDisplayDates",s4v="toString",m4o="initializeChart",G7o="setMasterData",j3o="symbolObject",Z6I="adjustPanelPositions",L7t="resizeCanvas",C3R="ight",X4l="yaxisWidth",E7g="Can",O9O="mp",v3R="adjustBackingStore",Q4g="rol",F3O="drawCurrentHR",g4v="drawVectors",u8o="splay",K9l="displayChart",O6g="drawXAxis",S1o="initializeDisplay",l6O="createXAxis",W9R="createDataSegment",v6I="drawPanels",p4n="dis",r2g="makeAsyncCallbacks",f3t="asyncCallbacks",Q4O="pendingAsyncs",q1O="transparent",c5t="#000000",A6l="up",h8t="whichSet",w7l="rre",m2l="createVolumeChart",T0O="sol",h5v="eC",h6n="St",A7I="as",b3v="wn",B8n="cand",O0R="ba",B2o="containerColor",W3n="B",k9v="dra",W4o="Wi",x9l=32,y9g="plugins",S0n="Adj_Close",M9v="Split_Close",O2g="hideDrawings",B5v="vectorsShowing",p6t="checkLoadMore",Q3v="eD",I9n="quo",H8g="moreAvailable",f1I="und",i2o="aS",N6I="dataCallback",o4t="bol",m3l="newChart",u6t="quoteDriver",P7O="dontRoll",G5o="drawLegend",W1n="Va",a1g="tex",d7o="baseLegendColors",G5v="legend",w3g="lor",H5g="Co",n3O="lt",h9l="panelClose",P0n="outputMap",E6o="outputs",C0n="na",K1l="splice",U1n="correlationPanel",y8O="isComparison",n7n="erie",g2v="addSeriesData",h1g="masterData",c8g="type",i2O="chartName",B0g="studyPanelMap",T8v="die",U3l="tu",v8n="studies",z9O="inputs",q1o="removeOverlay",H9O="editFunction",f9t="erl",T0t="rightClickOverlay",T8O="grabbingHand",t3O="grabStartScrollX",O8v="gr",O2n="gh",r5v="wh",t9l="manageTouchAndMouse",V3g="appendClassName",g9t="drawingClick",X9v="mouseup",A7g="rightClickHighlighted",e9o="button",M0O="which",r5o="stx-drag-chart",N4v="unappendClassName",h9R="grabOverrideClick",O1n=250,o9t="mouseTimer",m7o="now",w0t="adjustDrawings",P8R="anva",O9l="userPointerDown",Y3v="y1",b9t="yIntersection",s1l="He",m1v="pattern",X2O="undoStamp",b4l="pop",M8v="shallowClone",z5l="undoStamps",g3v="anv",g4O="undo",X1O="ratio",Z5n="nc",I4o="untransformFunc",c6O="priceFromPixel",s7o="ti",h8v="ren",c3R="yl",q8O="handle",F8R="plotLine",M6I="si",V5n="ne",J5O="translationCallback",c8n=((57.80E1,0x84)>(0x138,0x201)?'H':(1.17E3,7.4E1)<=0x21B?(0x1DB,")"):1.78E2>=(4.62E2,116.30E1)?null:(9.1E1,0x1A4)),t6n=" (",a6O=((42.,23)<(5.270E2,0x15B)?(11.07E2,"%"):(16.,7.99E2)),P5n="percent",A0l=10000,n3l=10,O5R=(83<=(0x1B7,0xA9)?(0x4,1000):(131,84.)),Z4v=.01,u3v=100,i8l=.1,x1O="numbers",O5n="spl",k3O="inline-block",O5O="chooseForegroundColor",c0l="backgroundColor",w3R="tyl",v0l="ouc",X5n="children",M4O="dren",A1v="il",P3t="mSticky",u5l=50,e5g="irX",u5t="setMeasure",W2O="2",K1g="yValueCache",U7v="pixelFromPriceTransform",q4I="ght",r5t="highlighted",J1v="permanent",R6n="magnetize",F1g="drawTemporaryPanel",f8o="resizePanels",P8n="repositioner",a3g="valueFromPixelUntransform",H6t="panelName",o8l="repositioningDrawing",v8o="so",o3g="rT",p3g="Ch",X3o="tX",k6n="measure",m7g="render",y8v="dr",i7I="requestAnimationFrame",k4I="sc",x7t="shift",a7v="grabStartZoom",Z3t="span",J3O="whitespace",N8R="cro",O0t="setCandleWidth",X0v="pinchingCenter",w0O="ipad",Z5o="ayo",u5R="minimumCandleWidth",N8t="grabStartCandleWidth",y2v="over",A7l="ctrl",G7v="yToleranceBroken",d9O="grabStartScrollY",J0o="grabStartY",g2I="bS",D0o="grabStartX",t7o="displaySticky",I5g="highlight",L0O="ve",W1t="overlays",J1O="anyHighlighted",V0l="resizingPanel",p6I="displayCrosshairs",D7n="grabbingScreen",G9t="ov",n9g="ht",Q9o="ss",S8t="insideChart",D7I="adjustIfNecessary",j8t="crosshairValue",g8t="crosshairTick",p1t="whichPanel",D8t="os",m1t="setInterval",r5l="clearInterval",e0o="resizeChart",A5O="clientWidth",D6n="clientHeight",w4v="devicePixelRatio",O9n="isAndroid",V7g="pag",F0O="mousemoveinner",c5O="mousemove",R9g="scrollTop",b1v="clientY",r2o="pageY",q4t="documentElement",I8n="scrollLeft",v0g="clientX",I0o="ag",F4o="pageX",k9o="headsUpHR",w4t="ane",a9g="canvasHeight",o6n="offsetWidth",a3t="ef",C1o="ai",a5o="oss",Z7I="stx_baseline_trace",J4o="stx_pandf_up",I2O="offsetHeight",g5O="parentNode",R5g="getPos",D2n="date",s3R="ry",O1v="sso",V9O="last",D6t="cancelTouchSingleClick",y6t="openDialog",g3t="auto",s7n="yle",M7l="lay",O4g="isp",a5R="ir",n8l="ssha",p7v="block",o3O="crosshair",I3v="none",o8R="cursor",b5v="magnet",W9O="trols",O2l="display",s2v="dragToDraw",k2n="undisplayCrosshairs",P7g="displayInitialized",x4n="doDisplayCrosshairs",W2n="updateChartAccessories",a8v="px",g8l=.5,I9g="rX",A5o="shai",O2I="ros",h7n="crosshairY",K0o="backOutY",y0o="backOutX",H5O="ma",S5g="tempCanvas",X0l="pixelFromTick",H2n="crosshairX",R4o="tickFromPixel",a4I="R",V0n="magnetizedPrice",p0v="swapClassName",I2n="annotation",F9o="rent",l4I="am",u9t="vertical",c4g="ter",l3O="ame",h1l="cto",d9o="cur",W0l="horizontal",E5v="vectorType",w4O="currentVectorParameters",m1n="drawingLine",e6n="stx_crosshair_drawing",h6v="stx_crosshair",w3n="setCrosshairColors",L9n="hourMinute",i7v="cx",c3v="barFromPixel",e7l="floatDate",J3v="eF",H8l="zIndex",d4v="style",f9o="clearCanvas",T7n="rendered",t1l="getContext",O8l="childNodes",R5n="floatHR",h4I="Q",s0l="Hi",v0o="Z",I6n="plotLineChart",X4g="orm",d7n="createYAxisLabel",S8v="y2",p4O="extendLastTick",Y7I="skipProjections",A3R="hig",w4n="og",n3n="mu",H7g="bott",S4o="b0",V7v="ic",s4g="ice",P5R="pix",d4n="mul",P3o="ab",Q7t="layo",H1v="ie",w7t="pandf",g9n="endClip",W8O="startClip",v4t="Color",r1O="va",Z5t="op",q4g="rom",v3t="elF",L5l="ier",l1O="Low",P8v="Lo",c2I="High",s3g="ck",w3v="Ti",K7O="1",o4I="Op",H8R="pan",x2I="se",g1l="clo",p6o="close",h6I="Clos",j2g="open",S2o="cache",m8l="Clo",i5g="Cl",N2o="Pr",T2o=((140.,10.)>(7.95E2,0x11F)?'V':69.<(0x23A,0x180)?(8.,"q"):(0xCA,0xB0)),U4O="pen",T2l="Open",U4l="projection",B7o="art",v5O="Axis",l6t="dl",j4t="x_",V2t="and",h5n="dth",F7n="isIE8",M8O="um",Z4o="le",C2t="eW",T5g="ca",o5t="tmpWidth",x8n="pixelFromPrice",G7g="stx_candle_shadow",L4n="stx_candle_down",A4l="stx_candle_up",P3g="drawYAxis",x5g="rP",w9g="cl",t9g="highValue",y8l="abs",Y1I="transformFunc",L0R="baseline",I6I="ype",X9o="tT",K0O="set",V7I="O",x6o="bottomOffset",V0t="el",m1I="an",o2O="parameters",p6g="series",Q5o="_",i6o="axisDrawn",d8n="createYAxis",d2O="studyLibrary",Q2v="Studies",q3R="rt",H7O="iqPrevClose",b2l="translateIf",f7o="watermark",G6I="hidden",p3n="panels",W8t="Volume",Q0v="volumeMax",L2g="hart",U6O="creat",o3R="rs",g9R="hai",U2n="preventDefault",U5t="crossY",N0t="crossX",c1v="nPr",W3O="ces",l3R="har",o3o="currentPanel",W4t="toFixed",i9O="priceFormatters",j3g="condenseInt",S4I="alP",l3t="ed",w4l="defin",M1n="plotYAxisText",X2I="stx_yaxis",v7v="can",G1t="pe",U0o="Y",w8n="plotYAxisGrid",q7O="yaxisLeft",e2o="canvasWidth",H3O="formatYAxisPrice",v0t="priceFormatter",d6n="ot",g2g="ri",H4t="pi",C1n="roundit",x6I="Q7",A8R="ra",N7v="yAxisPlotter",Y6I="aw",p8n="no",k1O="ecim",G2g="printDecimalPlaces",N3l="decimalPlaces",f1t="valueFromPixel",v9o="multiplier",D4n="tCanvas",R5t="oo",w9O="priceTick",n9v="do",i7g="range",b8g="xis",T9o="st",I2l="logShadow",f8l="lo",B2l="logLow",o6g="LN10",f7v="logHigh",R7g="ect",O0v="pr",r3t="activeDrawing",s6g="Dra",l9R="semiLog",s2I="shadow",r6I="K",W4v="ig",S3n="cacheLow",U0R="cacheRight",R1g="cacheLeft",v9t="ow",u0t="he",i5o="ac",t4v="low",R4l="cacheHigh",R1v="high",V3n="noChange",d5R="setMonth",R5o="setDate",b7n="setSeconds",y6n="setMilliseconds",w2O="0",z4t="ea",f2I="N",M8o="F",a2t="ds",J7l="us",g5t="eg",b2n="dat",n3R="city",z9v="clone",S6o="arr",t8t="gme",s5t="Se",g1o="ta",h4O=".",K3l=". ",J8t="or",z7l="ur",q7o="ied",A4t="ec",A9v=": ",Z8R="endMinute",x6n="endHour",d5l="aSe",u4n="DECADE",h2I="ap",O4o="al",o1l="v",c7I="I",l3n="MONTH",I5R="MINUTE",S7o="th",O7l="ndl",Z8O="out",M5n="6",F9v="offset",v9O="index",c2l="pow",m5l="determineMinMax",S9n="autoComputedTickSizePixels",y7O="idealTickSizePixels",v7O="taS",J6I="ax",U7n="displayGridLines",z4O="igh",T6I="E",l7l="xaxisHeight",k5l="bottom",h4t="axisBorders",l3o="displayBorder",E0v="MAX_VALUE",k0t="om",t3l="tt",Y6g="bo",L0t="panel",q6o="newSeries",I3t="Plotter",V8l="right",h3l="left",Y3g="micropixels",A0o="max",p8v="canvasFont",h9g="co",N7t="eX",s6o="end",U5R="ru",B0R="Axi",j3v="pl",b0g="mon",k5n=((0xC9,28)>=147.70E1?0xD9:0xDD>=(0x13F,142.)?(0xEE,"7"):(43,56.5E1)),y1l=(0x8F>(65.3E1,6.45E2)?(22,"V"):(4.25E2,39.40E1)>=0x116?(0x4A,"x"):(88,0x1AF)<=(0xC9,0xF8)?(104,144):(64,8.)),b6O="nt",L6o="m",x9t="ou",R7n="ex",E9l="ks",T7o="Tic",j7g="re",c7O="timeAsDisplay",X2o="li",J6v="Da",S8g="e2",w5g="format",v9n="monthDay",L8v="internationalizer",D8v="formatter",Q9t="lin",B7g="T4",x3R="futureTicks",l3l="useDataDate",N5O="ut",m3n="candleWidthPercent",C9t="g4",j5n="4",r1g="D4",J8l="floor",Q5g="E1",W3l="ceil",U8n="timeShiftDate",H9n="displayDate",M5o="ate",H5v="di",e8g="getMilliseconds",H5n="getDate",B6g="getMonth",B8O="getFullYear",C2g="convertTimeZone",H6n="en",A5t="z1",O3o="xaxis",J4I="dataSegment",p1g="text",z6t="grid",Q0l=(102<(118,145.)?(45,"z"):(58,9.370E2)<(13.5E1,0x1FD)?"W":(0x36,0xA3)<=71.?15:(98,0x13)),R0t="XAxisLabel",L5n="timeZoneOffset",O6t="f0",O9o="H",y4I="Z0",K6g="runAppend",b4O="yAxis",L7o="nel",n7t="pa",x7O="calculateYAxisMargins",S7v="S0",m5g="getCanvasFontSize",V1g="yaxisLabelStyle",E7o="ll",B7v="cr",f7g="candleWidth",D4t="hi",x3l="preferences",h0R="ro",X6O="allowScrollPast",z1v="maxTicks",h7I="min",Q9g="charts",y2o="runPrepend",u3O="scroll",k9O="initialMarginBottom",T7l="initialMarginTop",n6v="zoom",g6o="j",V1v="month",T1t="prevWeek",d3t="week",n5n="5",y7n="day",B2I="at",T1g="Zon",J7n="data",A8O="prevPeriod",L2O="symbol",e1v="cy",s9o="ega",n6I="L",n5l=((1.455E3,40.1E1)<=(54.,9.89E2)?(3.010E2,60):(134.,14.4E2)),Q4I=9,e2t=60000,e3g="s5",W9o="tM",j1O="getHours",k6O=1500,I2v="tick",L6g="minute",X2l="me",F2v="tTi",Z9t="et",t2o="ark",U2I="M",Q6v="round",l2O="3",R3n="A",x8R="setMinutes",B0O="setHours",s0o="getDay",R8o="ay",l6o="nex",X8O="minutesInSession",c5n="beginMinute",x2o="getMinutes",u6o="beginHour",z0v="getHo",K3O="futureTicksInterval",J7o="xAxis",c9O="n9",i0R="im",w0v="strToDateTime",Z4n="ge",t8l="nextMonth",a1n="nextWeek",F8v="i9",V7t="nextDay",d0n="9",Q1O="nextPeriod",C1t="terv",S1t="yI",t8o="D",M3R="is",i1v="da",f4t="prevMonth",J1n="ga",t5v="Le",H6o="k",X7l="prevDay",q5R="dataZone",T2n="ev",U7l="LegacyMarket",z2o="isDailyInterval",t9O="yyyymmddhhmm",E7n="Date",f2v="getTime",x0v="DT",K2t="f8",e2O="dataSet",X5l="periodicity",q3v="interval",G1l=(13.96E2>(87,0x154)?(0x87,"w"):(6.87E2,0x200)<=0x17B?(129.4E1,'a'):(0xB,6.41E2)),H3g="ce",X8l=((0x14B,123)<(0x16D,0x123)?(9.70E1,"i"):(6.92E2,0xBE)),d2v="vector",L6O="abortDrawings",c2o="p",J3g="reconstruct",N1l="Drawing",F2g="name",v2I="serialize",o6v="ct",s7O="ng",H0l="push",l3v="drawingObjects",B3R="rr",A2n="cha",w5O="adj",u4g="chartScale",m4g="yout",C1l="la",O6I="raw",w0n="createDataSet",E5o="aggregationType",E9o="changeOccurred",V5o="draw",b6o="char",V4o="W",c5g="chartType",I4l="layout",n0l="ack",V9l="g",N7l="currentlyImporting",J8o="canvasColor",Z0R="in",E8l=((64.,56.)<123.?(0x13D,"f"):(0x14F,12.3E2)),F3v="de",w6l="un",h1n=(0xFF>(0x122,0x22A)?(105,"r"):148.<(24.,4.51E2)?(0x7D,"8"):(113,0x9A)),W1O="drawingTools",P2t="registerDrawingTool",J5n="nd",G1g="apply",C0l=false,I7t="hideDates",y3o="stripPX",o0O="opacity",k2O="defaultColor",U4v="isTransparent",w5o="color",x3t="context",Y8g="log",J7t="indexOf",V4g="fontSize",X3O=" ",t9t="xt",H4o="te",y7o="n",j9t="es",e9v="canvasStyle",g4g="les",G5l="ty",g6I="removeChild",D7g="body",o4v="className",C2n="div",N3O="styles",V8g="Ca",V5g="ch",j4O="-",W7O="split",r4o="",e7o="l",z9o="a",L1o="V",O1l="y",h9t="er",c1g="rop",q7I="P",c7n="get",a4n="toUpperCase",D0R="replace",q9n="makeCamelCase",u7g=true,X5g="Close",m3O="home",d5t="on",D0t="onmouseover",X1n="onmouseout",c4o="u",B0t="onmo",K4t="touchDevice",t0t="#zoomOut",P3O="ls",M2I="ar",E1v="id",E5t="appendChild",m9o="d",V0R="hil",m3t="fi",L9v="innerHTML",g9v="DIV",E4v="createElement",Y8o="controls",B7O="#",e0l="chartControls",d3l="allowZoom",T3g="container",E6v="chart",S4v='wn',v7l='cu',w7v='nel',s4l='itl',W4O='anel',U2o='ro',l7I='ane',u7l='> ',p0n='yle',C5n='dle',J0l='sp',P6n='ne',c6n='me',s6I='oda',U5v='j',q6I='ome',d3n='mI',V4I='an',f0n='ut',s1v='oom',f2g='ass',S2n='mOut',D9O=((13,84)>(0x23A,0x150)?" ":34.<=(37.,0x1BC)?(101.,'z'):(0x1FF,0x235)<=(0x1D0,0x3C)?(14.26E2,'H'):(42.,0x193)),K8n='Size',U4o='rt',P4g='px',e4I='otto',N8n='pla',j0o='ols',E0t='nt',r9R='rt_c',f0t='x_c',q8g='lass',q8R='ir_',r0R='ha',K4l='ss',y3R='_c',d4I='ir',H0n='oss',R1l=';"></',a6v='on',G4v='shair',i9v='_',P5l='ai',W1v='os',V2l='cr',s6t='x_',T9g='ner',I6l='ice',I2I='as',N8o='iv',V2o='><',R4O='anv',V3R='anva',x2l='oat',I1n='2',m1g='ht',u1o='ig',V0v='h',V9n='idth',p1O=((0xD9,5.94E2)>=36.?(5.93E2,'w'):(9.82E2,8.48E2)),E5l='vas',l9n=';"><',l9o='spla',j8n='le',x9n='ce',G1o='ri',N6t=((9.06E2,37.)>=0x72?'r':(101.4E1,0x198)>=(70.,120.10E1)?72:0x17A>(0x140,0x149)?(130.,'f'):(4.08E2,1.0030E3)),F3l='>)</',X9O='te',g7n='el',E9n='li',v3g='gh',l5o='>(</',r4t='ns',W6o='ctio',E1O='u',k0n='eInst',r1o='eDel',Z0v='ou',G0o='></',T6g=';</',i0o='bsp',Z0o='">&',y3l='sh',O5o='ra',e5n='co',k5t='las',D4O='"><',H2o='spl',c2O='ty',d6t='Can',k9R='ash',d5O=(0x114<=(7.26E2,7.)?87.:(65.,59.6E1)>=(0x12A,112.)?(114,'r'):(1.391E3,0xFA)<(0x45,2.)?(20,93):(14.,12.200E2)),B2t='yT',d0o='rl',r8l='> <',F4t='"></',S3g='ior',Q2t='ter',K1v='ickyI',J1t='S',o1n='"> <',n3v='k',V3v='St',h5t='cel',m9O=(2.40E1<=(122,101.)?(0x13E,'x'):(0xF5,0x1E1)<68?84.7E1:(0x147,0x145)),r2n='0',j4n='1',K7n=':',C6n='ef',f9g='gi',q2I='ar',P9v='m',Z6t='; ',p2g='one',e6I='ay',B2g='pl',t3t='yl',I0t='ance',B9t='n_',a2I='io',X5O='tn',P5g='pa',T8t='>',U2g='pan',V1n='</',v6o='ave',c7o=';">',k7t=': ',i3O='y',O5v='l',H1t='isp',V8v=((0x1C2,76)>(83,49.)?(142.,'d'):(0x205,0x165)<=17.?(0x1E0,"x0"):(78,6.09E2)),v0O='tyle',o1v='" ',C6t='e',D1O=(14.5E1>(140.,11.02E2)?(0xA7,0x12C):(6.29E2,79.)<0xAA?(0x206,'v'):(101,81.2E1)),Z7g='n_sa',W5v='i',T2I='at',M3v='o',s2t='nn',i1t='x_a',c1O=((0x34,3.69E2)<=0x122?64.:(1.447E3,3.93E2)>=(7.80E1,54.)?(8.84E2,'t'):(113,141.)),C9v='b',f4n='-',v2O='tx',z8n='="',e8O='la',e6t=((0x2,12)>(94.,149.)?(1.335E3,"V"):0x3C<=(62.,1.327E3)?(32.,'c'):(0x1C6,0x212)),z8R=' ',N3v=((67,0x20D)>=49.?(71,'n'):(0x238,9.70E1)>=14.3E2?109:(0x119,0xAD)),R8v='a',a0O='p',k0O='s',I7n='<',F2o="s",F0t="ol",G9R="Contr",Y4n="tml",p8l="h",X7g=null,W3o="e",A3n="tur",N7n="ges",i9o="b",U1v="target",o5v="gesture",a2O="gesturePointerId",f9v="isSurface",Y1o="X",p2I="T",C2I="S",a0n="timezoneJS",e9R="plotSpline",Q6o="camelCaseRegExp",x7v="CLOSEUP",T7t="CLOSEDOWN",i9n="CLOSEEVEN",A6t="CANDLEUP",c3O="CANDLEDOWN",f4O="Comparison",Z8g="currentZindex",q7v="Markers",f=function(B){STX[q7v][Z8g]=B;}
,u=function(Y){var M2l="mouseHasMoved";STX[f4O][M2l]=Y;}
,H=function(z){var N2t="CANDLEEVEN";STXChart[N2t]=z;}
,X=function(Q){STXChart[c3O]=Q;}
,R=function(Z){STXChart[A6t]=Z;}
,S=function(G){STXChart[i9n]=G;}
,J=function(U){STXChart[T7t]=U;}
,F=function(M){STXChart[x7v]=M;}
,W=function(N){var F3o="NONE";STXChart[F3o]=N;}
,L=function(A){STX[Q6o]=A;}
,plotSpline=_stxThirdParty[e9R],timezoneJS=_stxThirdParty[a0n],STX=_exports[(C2I+p2I+Y1o)],STXChart=_exports[w0R],$$=_exports[(F6I)],$$$=_exports[f6t];STXChart.prototype.plugins={}
;if(STX[f9v]){var D=function(V){STX[a2O]=V;}
,C=function(K){var G9n="ody";STX[o5v][U1v]=K[(i9o+G9n)];}
;STX[(N7n+A3n+W3o)]=new MSGesture;C(document);D(X7g);}
STXChart[(p8l+Y4n+G9R+F0t+F2o)]={"annotationSave":(I7n+k0O+a0O+R8v+N3v+z8R+e6t+e8O+k0O+k0O+z8n+k0O+v2O+f4n+C9v+c1O+N3v+z8R+k0O+c1O+i1t+s2t+M3v+c1O+T2I+W5v+M3v+Z7g+D1O+C6t+o1v+k0O+v0O+z8n+V8v+H1t+O5v+R8v+i3O+k7t+N3v+M3v+N3v+C6t+c7o+k0O+v6o+V1n+k0O+U2g+T8t),"annotationCancel":(I7n+k0O+P5g+N3v+z8R+e6t+O5v+R8v+k0O+k0O+z8n+k0O+v2O+f4n+C9v+X5O+z8R+k0O+c1O+i1t+N3v+N3v+M3v+c1O+R8v+c1O+a2I+B9t+e6t+I0t+O5v+o1v+k0O+c1O+t3t+C6t+z8n+V8v+W5v+k0O+B2g+e6I+k7t+N3v+p2g+Z6t+P9v+q2I+f9g+N3v+f4n+O5v+C6n+c1O+K7n+j4n+r2n+a0O+m9O+c7o+e6t+R8v+N3v+h5t+V1n+k0O+a0O+R8v+N3v+T8t),"mSticky":(I7n+V8v+W5v+D1O+z8R+W5v+V8v+z8n+P9v+V3v+W5v+e6t+n3v+i3O+o1n+k0O+U2g+z8R+W5v+V8v+z8n+P9v+J1t+c1O+K1v+N3v+Q2t+S3g+F4t+k0O+U2g+r8l+k0O+U2g+z8R+W5v+V8v+z8n+M3v+D1O+C6t+d0o+R8v+B2t+d5O+k9R+d6t+o1v+e6t+O5v+R8v+k0O+k0O+z8n+k0O+c1O+m9O+f4n+C9v+c1O+N3v+o1v+k0O+c2O+O5v+C6t+z8n+V8v+W5v+H2o+e6I+K7n+N3v+M3v+N3v+C6t+D4O+k0O+U2g+z8R+e6t+k5t+k0O+z8n+k0O+c1O+m9O+f4n+W5v+e5n+f4n+c1O+O5o+y3l+Z0o+N3v+i0o+T6g+k0O+U2g+G0o+k0O+U2g+r8l+k0O+P5g+N3v+z8R+W5v+V8v+z8n+P9v+Z0v+k0O+r1o+C6t+c1O+k0n+d5O+E1O+W6o+r4t+D4O+k0O+a0O+R8v+N3v+l5o+k0O+P5g+N3v+T8t+d5O+W5v+v3g+c1O+f4n+e6t+E9n+e6t+n3v+z8R+c1O+M3v+z8R+V8v+g7n+C6t+X9O+I7n+k0O+U2g+F3l+k0O+P5g+N3v+G0o+k0O+a0O+R8v+N3v+G0o+V8v+W5v+D1O+T8t),"floatHR":(I7n+V8v+W5v+D1O+z8R+e6t+e8O+k0O+k0O+z8n+k0O+v2O+f4n+N6t+O5v+M3v+T2I+f4n+a0O+G1o+x9n+o1v+k0O+c1O+i3O+j8n+z8n+V8v+W5v+l9o+i3O+k7t+N3v+M3v+N3v+C6t+l9n+e6t+R8v+N3v+E5l+z8R+p1O+V9n+z8n+j4n+r2n+r2n+o1v+V0v+C6t+u1o+m1g+z8n+I1n+r2n+o1v+e6t+k5t+k0O+z8n+k0O+c1O+m9O+f4n+N6t+O5v+x2l+f4n+a0O+G1o+e6t+C6t+f4n+e6t+V3R+k0O+F4t+e6t+R4O+R8v+k0O+V2o+V8v+N8o+z8R+e6t+O5v+I2I+k0O+z8n+k0O+c1O+m9O+f4n+N6t+O5v+x2l+f4n+a0O+d5O+I6l+f4n+W5v+N3v+T9g+F4t+V8v+W5v+D1O+G0o+V8v+W5v+D1O+T8t),"crossX":(I7n+V8v+N8o+z8R+e6t+O5v+R8v+k0O+k0O+z8n+k0O+c1O+s6t+V2l+W1v+k0O+V0v+P5l+d5O+z8R+k0O+v2O+i9v+V2l+W1v+G4v+i9v+m9O+o1v+k0O+c1O+i3O+j8n+z8n+V8v+W5v+k0O+B2g+R8v+i3O+k7t+N3v+a6v+C6t+R1l+V8v+W5v+D1O+T8t),"crossY":(I7n+V8v+N8o+z8R+e6t+k5t+k0O+z8n+k0O+c1O+s6t+e6t+d5O+H0n+V0v+R8v+d4I+z8R+k0O+v2O+y3R+d5O+M3v+K4l+r0R+q8R+i3O+o1v+k0O+c2O+j8n+z8n+V8v+W5v+H2o+R8v+i3O+k7t+N3v+p2g+R1l+V8v+N8o+T8t),"chartControls":(I7n+V8v+N8o+z8R+e6t+q8g+z8n+k0O+c1O+f0t+V0v+R8v+r9R+M3v+E0t+d5O+j0o+o1v+k0O+v0O+z8n+V8v+W5v+k0O+N8n+i3O+k7t+N3v+M3v+N3v+C6t+Z6t+C9v+e4I+P9v+k7t+I1n+I1n+P4g+l9n+V8v+N8o+z8R+W5v+V8v+z8n+e6t+V0v+R8v+U4o+K8n+D4O+k0O+U2g+z8R+W5v+V8v+z8n+D9O+M3v+M3v+S2n+o1v+e6t+O5v+f2g+z8n+k0O+c1O+m9O+f4n+D9O+s1v+f4n+M3v+f0n+F4t+k0O+a0O+V4I+V2o+k0O+a0O+V4I+z8R+W5v+V8v+z8n+D9O+M3v+M3v+d3n+N3v+o1v+e6t+k5t+k0O+z8n+k0O+c1O+m9O+f4n+D9O+M3v+M3v+P9v+f4n+W5v+N3v+F4t+k0O+P5g+N3v+G0o+V8v+N8o+G0o+V8v+W5v+D1O+T8t),"home":(I7n+V8v+W5v+D1O+z8R+W5v+V8v+z8n+V0v+q6I+o1v+e6t+e8O+k0O+k0O+z8n+k0O+v2O+i9v+U5v+E1O+P9v+a0O+i9v+c1O+s6I+i3O+z8R+V0v+M3v+c6n+o1v+k0O+c1O+i3O+j8n+z8n+V8v+W5v+k0O+N8n+i3O+K7n+N3v+M3v+P6n+D4O+k0O+a0O+V4I+G0o+k0O+U2g+G0o+V8v+N8o+T8t),"floatDate":(I7n+V8v+N8o+z8R+e6t+O5v+f2g+z8n+k0O+v2O+f4n+N6t+O5v+x2l+f4n+V8v+R8v+c1O+C6t+o1v+k0O+c1O+i3O+j8n+z8n+V8v+W5v+J0l+e8O+i3O+k7t+N3v+M3v+P6n+R1l+V8v+W5v+D1O+T8t),"handleTemplate":(I7n+V8v+W5v+D1O+z8R+e6t+e8O+k0O+k0O+z8n+k0O+v2O+f4n+W5v+e5n+f4n+V0v+R8v+N3v+C5n+o1v+k0O+c1O+p0n+z8n+V8v+H1t+O5v+R8v+i3O+k7t+N3v+a6v+C6t+l9n+k0O+a0O+V4I+G0o+k0O+P5g+N3v+G0o+V8v+N8o+u7l),"iconsTemplate":(I7n+V8v+N8o+z8R+e6t+O5v+R8v+K4l+z8n+k0O+c1O+m9O+f4n+a0O+l7I+O5v+f4n+e6t+M3v+E0t+U2o+O5v+D4O+V8v+W5v+D1O+z8R+e6t+k5t+k0O+z8n+k0O+v2O+f4n+a0O+W4O+f4n+c1O+s4l+C6t+F4t+V8v+W5v+D1O+V2o+V8v+W5v+D1O+z8R+e6t+O5v+f2g+z8n+k0O+c1O+m9O+f4n+C9v+c1O+N3v+f4n+a0O+R8v+w7v+D4O+k0O+U2g+z8R+e6t+q8g+z8n+k0O+c1O+m9O+f4n+W5v+e5n+f4n+E1O+a0O+F4t+k0O+P5g+N3v+G0o+V8v+N8o+V2o+V8v+N8o+z8R+e6t+O5v+R8v+k0O+k0O+z8n+k0O+c1O+m9O+f4n+C9v+c1O+N3v+f4n+a0O+R8v+P6n+O5v+D4O+k0O+a0O+R8v+N3v+z8R+e6t+O5v+f2g+z8n+k0O+v2O+f4n+W5v+e5n+f4n+N6t+M3v+v7l+k0O+F4t+k0O+a0O+R8v+N3v+G0o+V8v+W5v+D1O+V2o+V8v+N8o+z8R+e6t+O5v+R8v+K4l+z8n+k0O+v2O+f4n+C9v+X5O+f4n+a0O+R8v+N3v+C6t+O5v+D4O+k0O+a0O+V4I+z8R+e6t+e8O+k0O+k0O+z8n+k0O+v2O+f4n+W5v+e5n+f4n+V8v+M3v+S4v+F4t+k0O+P5g+N3v+G0o+V8v+N8o+V2o+V8v+N8o+z8R+e6t+e8O+K4l+z8n+k0O+v2O+f4n+C9v+X5O+f4n+a0O+l7I+O5v+D4O+k0O+a0O+R8v+N3v+z8R+e6t+O5v+I2I+k0O+z8n+k0O+c1O+m9O+f4n+W5v+e5n+f4n+C6t+V8v+W5v+c1O+F4t+k0O+U2g+G0o+V8v+N8o+V2o+V8v+N8o+z8R+e6t+O5v+R8v+k0O+k0O+z8n+k0O+c1O+m9O+f4n+C9v+c1O+N3v+f4n+a0O+R8v+N3v+g7n+D4O+k0O+U2g+z8R+e6t+e8O+k0O+k0O+z8n+k0O+c1O+m9O+f4n+W5v+e5n+f4n+e6t+O5v+M3v+k0O+C6t+F4t+k0O+a0O+R8v+N3v+G0o+V8v+N8o+G0o+V8v+N8o+T8t)}
;STXChart.prototype.registerHTMLElements=function(){var y3O="safeClickTouch",x4t="rols",T1l="modalEnd",n9o="modalBegin",c0t="eove",z6o="#zoomIn",W1g="ntro",f0l="tCo",l0g="htmlControls",c=this[E6v][T3g];for(var control in STXChart[l0g]){if(typeof this[E6v][control]==u1n){if(!this[d3l]&&B5O[p2I](control,e0l))continue;var el=$$$(B7O+control,c);if(el){this[E6v][control]=el;this[Y8o][control]=el;}
else{var rawHTML=STXChart[l0g][control],div=document[E4v](g9v);div[L9v]=rawHTML;el=div[(m3t+B5O.E4o+F2o+B5O.G4o+B5O.T9n+V0R+m9o)];c[E5t](el);this[E6v][control]=el;this[Y8o][control]=el;el[E1v]=control;}
}
}
;if(this[Y8o][(B5O.r3o+p8l+M2I+f0l+W1g+P3O)]){var zoomIn=$$$(z6o,this[Y8o][e0l]),zoomOut=$$$(t0t,this[Y8o][e0l]);if(!STX[K4t]){zoomIn[(B0t+c4o+F2o+c0t+B5O.E4o)]=(function(self){return function(e){self[n9o]();}
;}
)(this);zoomIn[X1n]=(function(self){return function(e){self[T1l]();}
;}
)(this);zoomOut[D0t]=(function(self){return function(e){self[n9o]();}
;}
)(this);zoomOut[X1n]=(function(self){return function(e){self[T1l]();}
;}
)(this);}
}
if(this[(B5O.r3o+d5t+B5O.G4o+x4t)][m3O]){STX[y3O](this[Y8o][m3O],(function(self){var M6o=((0x18E,0xE4)>(0xF8,0xD7)?(21,7106337):(0x1E,0x223)),v4g=2317547,t8v=1692918707,Q8v=1832090051;var a1I=-Q8v,U1I=t8v,i1I=B5O.M4I;for(var q1I=B5O.i4I;B5O.Y0I.w0I(q1I.toString(),q1I.toString().length,v4g)!==a1I;q1I++){this.getDefaultColor();this.zoomOut();i1I+=B5O.M4I;}
if(B5O.Y0I.w0I(i1I.toString(),i1I.toString().length,M6o)!==U1I){fields.push(X5g);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.drawCandles(chart,colorFunction,u7g);return A29<v29;}
return function(e){self[m3O]();}
;}
)(this));if(!STX[K4t]){this[Y8o][m3O][D0t]=(function(self){return function(e){self[n9o]();}
;}
)(this);this[Y8o][m3O][X1n]=(function(self){return function(e){self[T1l]();}
;}
)(this);}
}
}
;L(/-([a-z])/g);STX[q9n]=function(name){return name[D0R](STX[Q6o],function(g){return g[B5O.i4I][a4n]();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var q8v="slice",E2v="rA",rc={}
;for(var i in styleObject){var v=styleObject[i];if(!isNaN(i)){var x=styleObject[(c7n+q7I+c1g+h9t+B5O.G4o+O1l+L1o+z9o+e7o+c4o+W3o)](v);if(x){var vcc=r4o;v=v[W7O](j4O);var ii=B5O.b4I;jj=v.length;while(++ii<jj){vcc+=v[ii][(V5g+z9o+E2v+B5O.G4o)](B5O.b4I)[a4n]()+v[ii][q8v](B5O.i4I);}
rc[vcc]=x;}
}
else{var icc=i[D0R](STX[Q6o],function(g){var N9o="toUpper";return g[B5O.i4I][(N9o+V8g+F2o+W3o)]();}
);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var M2o="cloneStyle",s=this[N3O][className];if(!s){var div=document[E4v](C2n);div[o4v]=className;document[D7g][E5t](div);var styles=getComputedStyle(div);s=this[N3O][className]=this[M2o](styles);document[D7g][g6I](div);if(!styles){this[(F2o+G5l+g4g)][className]=X7g;}
}
return s;}
;STXChart.prototype.clearStyles=function(){this[N3O]={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){var G4l="tyle";if(!this[N3O][obj]){this[e9v](obj);}
if(!this[(F2o+G4l+F2o)][obj])this[(F2o+B5O.G4o+O1l+e7o+j9t)][obj]={}
;this[N3O][obj][STX[q9n](attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var o2n="bad css style for class ",z1t="fontFamily",H0v="fontWeight",d9g="fontStyle";if(!ctx)ctx=this[E6v][(B5O.r3o+B5O.Z7o+y7o+H4o+t9t)];var style=this[e9v](className);if(!style)return ;var result=style[d9g]+X3O+style[H0v]+X3O+style[V4g]+X3O+style[z1t];if(result[J7t](u1n)==-B5O.i4I){ctx.font=result;}
else{this[N3O][className]=X7g;console[Y8g](o2n+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this[E6v][x3t];var style=this[e9v](className);if(!style)return ;var color=style[w5o];if(STX[U4v](color))color=this[k2O];ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style[o0O];if(typeof opacity!=u1n)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var p2n="12",s=this[e9v](className),fs=s[V4g];if(!fs)fs=p2n;return parseInt(STX[y3o](fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this[e9v](className);return s[w5o];}
;STXChart[I7t]=function(){return C0l;}
;STXChart.prototype.runPrepend=function(o,args,self){var e7n="C8",prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;B5O[e7n](i,prepends.length);i++){var rv=prepends[i][G1g](self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var p3R="k8",b5l="ppe",appends=this[(z9o+b5l+J5n)+o];if(!appends)return false;if(!self)self=this;for(var i=0;B5O[p3R](i,appends.length);i++){var rv=appends[i][G1g](self,args);if(rv)return rv;}
return false;}
;STXChart[P2t]=function(name,func){STXChart[W1O][name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(B5O[(B5O.G4o+h1n)](context,null))context=this[E6v][x3t];if(typeof (height)==(w6l+F3v+E8l+Z0R+W3o+m9o)){return ;}
this[J8o](className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){var z4o="lb",u8l="chan",b8o="changeCallback";if(this[N7l])return ;if(this[b8o])this[(u8l+V9l+W3o+V8g+e7o+z4o+n0l)](this,change);}
;STXChart.prototype.setChartType=function(chartType){this[I4l][c5g]=chartType;if(B5O[(V4o+h1n)](this[(b6o+B5O.G4o)].canvas,null))this[V5o]();this[E9o]("layout");}
;STXChart.prototype.setAggregationType=function(aggregationType){var G6t="r8";this[I4l][E5o]=aggregationType;if(B5O[G6t](this[E6v].canvas,null)){this[w0n]();this[(m9o+O6I)]();}
this[E9o]("layout");}
;STXChart.prototype.setChartScale=function(chartScale){var S3O="F8";if(!chartScale)chartScale="linear";this[(C1l+m4g)][u4g]=chartScale;if(B5O[S3O](this[E6v].canvas,null))this[V5o]();this[E9o]("layout");}
;STXChart.prototype.setAdjusted=function(data){var j2n="g8";this[I4l][w5O]=data;if(B5O[j2n](this[E6v].canvas,null)){this[w0n]();this[V5o]();}
this[E9o]("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){var H9o="ccu",C7g="geO",r7l="a8",M9R="volumeUnderlay";this[I4l][M9R]=data;if(B5O[(r7l)](this[(B5O.r3o+p8l+M2I+B5O.G4o)].canvas,null))this[V5o]();this[(A2n+y7o+C7g+H9o+B3R+W3o+m9o)]("layout");}
;STXChart.prototype.serializeDrawings=function(){var O3l="Obj",F9O="awi",t1v="S8",arr=[];for(var i=0;B5O[t1v](i,this[l3v].length);i++){arr[H0l](this[(m9o+B5O.E4o+F9O+s7O+O3l+W3o+o6v+F2o)][i][v2I]());}
return arr;}
;STXChart.prototype.abortDrawings=function(){var o7I="c8";for(var i=0;B5O[o7I](i,this[l3v].length);i++){this[l3v][i].abort(true);}
this[l3v]=[];}
;STXChart.prototype.reconstructDrawings=function(arr){var E7I="Z8";for(var i=0;B5O[E7I](i,arr.length);i++){var rep=arr[i],Factory=STXChart[W1O][rep[F2g]];if(!Factory){if(STX[N1l][rep[F2g]]){Factory=STX[N1l][rep[F2g]];STXChart[P2t](rep[F2g],Factory);}
}
if(Factory){var drawing=new Factory;drawing[J3g](this,rep);this[l3v][H0l](drawing);}
}
}
;STXChart.prototype.clearDrawings=function(){var v5n="tam",S9o="doS";this[(w6l+S9o+v5n+c2o)]();this[L6O]();this[E9o](d2v);this[w0n]();this[V5o]();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX[N1l][type];drawing[J3g](this,parameters);this[l3v][H0l](drawing);this[V5o]();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){var h3o="sp",R2v="e8",R6I="Q8";for(var i=0;B5O[R6I](i,this[l3v].length);i++){if(B5O[R2v](this[l3v][i],drawing)){this[l3v][(h3o+e7o+X8l+H3g)](i,1);this[E9o]("vector");this[(m9o+B5O.E4o+z9o+G1l)]();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){var s5g="tTim",r9l="b9",f7I="J",h7v="ail",A8v="y9",i7n="p9",E3l="v9",S1v="aSet",V4O="arke",S5t="yM",a7n="L9",Y0g="vWee",b6v="pre",e4g="D9",E2n="h9",e6g="T8",R8n="P8",u5o="u8";if(!chart)chart=this[E6v];var interval=this[I4l][q3v],periodicity=this[I4l][X5l],l=chart[e2O].length,dt;if(B5O[u5o](tick,l)&&B5O[K2t](tick,0))return native?new Date(chart[e2O][tick][x0v][f2v]()):chart[e2O][tick][E7n];if(B5O[R8n](tick,0)){dt=chart[e2O][0][x0v];for(var i=0;B5O[e6g](i,3000);i++){if(-i==tick)return native?new Date(dt[f2v]()):STX[t9O](dt);if(!this[z2o](interval))dt=STX[U7l][(c2o+B5O.E4o+T2n+q7I+W3o+B5O.E4o+X8l+B5O.Z7o+m9o)](dt,interval,periodicity,this,null,this[q5R]);else if(B5O[E2n](interval,"day"))dt=STX[U7l][X7l](dt,periodicity,this);else if(B5O[e4g](interval,"week"))dt=STX[U7l][(b6v+Y0g+H6o)](dt,periodicity,this);else if(B5O[a7n](interval,"month"))dt=STX[(t5v+J1n+B5O.r3o+S5t+V4O+B5O.G4o)][f4t](dt,periodicity,this);}
}
else{dt=chart[(i1v+B5O.G4o+S1v)][B5O[E3l](l,1)][x0v];for(var i=0;B5O[i7n](i,3000);i++){if(B5O[A8v](l-1+i,tick)){return native?new Date(dt[f2v]()):STX[t9O](dt);}
if(!this[(M3R+t8o+h7v+S1t+y7o+C1t+z9o+e7o)](interval))dt=STX[U7l][Q1O](dt,interval,periodicity,this,null,this[q5R]);else if(B5O[(f7I+d0n)](interval,"day"))dt=STX[U7l][V7t](dt,periodicity,this);else if(B5O[F8v](interval,"week"))dt=STX[U7l][a1n](dt,periodicity,this);else if(B5O[r9l](interval,"month"))dt=STX[U7l][t8l](dt,periodicity,this);}
}
return native?new Date(dt[(Z4n+s5g+W3o)]()):STX[t9O](dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var f7l="w3",c3t="z3",S6l="X3",N8l="n3",S3o="l3",K5g="wee",o2o="b3",Q6t="i3",Q0o="gac",Z7v="J3",x6t="N3",M5g="s3",W8v="V3",e2g="K3",D4I="tD",a7l="O3",O8g="j9",o9n="x9",I3O="w9",h2g="d9",o8t="z9",o7l="X9",p0o="l9",u3l="getT",mym=STX[w0v](mydt)[(u3l+i0R+W3o)](),interval=this[I4l][q3v],periodicity=this[I4l][X5l],dt=chart[e2O][B5O[p0o](chart[e2O].length,1)][(t8o+p2I)],m=dt[f2v](),ticks=0,computedPeriodicity=periodicity;if(!this[z2o](interval)){if(B5O[c9O](interval,"minute"))computedPeriodicity=B5O[o7l](periodicity,interval);if(B5O[o8t](interval,"tick"))computedPeriodicity=this[E6v][J7o][K3O];}
for(var i=0;B5O[h2g](i,1500);i++){if(!this[z2o](interval)){if(B5O[I3O](dt[(z0v+c4o+B5O.E4o+F2o)](),chart[u6o])&&B5O[o9n](dt[x2o](),chart[c5n])&&B5O[O8g](interval,"tick")){if(B5O[a7l]((mym-m)/60000,chart[X8O])){dt=STX[U7l][(l6o+D4I+R8o)](dt,1,this);if(B5O[e2g](chart[u6o],0)&&B5O[W8v](dt[s0o](),0)){dt[B0O](15);dt[x8R](0);}
if(B5O[(R3n+l2O)](chart[u6o],0)&&B5O[M5g](dt[(V9l+W3o+D4I+R8o)](),1)){ticks+=Math[Q6v](B5O[x6t](9,60,computedPeriodicity));}
else{ticks+=Math[Q6v](B5O[Z7v](chart[X8O],computedPeriodicity));}
}
else{dt=STX[(t5v+Q0o+O1l+U2I+t2o+Z9t)][Q1O](dt,interval,periodicity,this,null,this[q5R]);ticks+=1;}
}
else{dt=STX[U7l][Q1O](dt,interval,periodicity,this,null,this[q5R]);ticks+=1;}
}
else{ticks+=1;if(B5O[(Q6t)](interval,"day"))dt=STX[U7l][V7t](dt,periodicity,this);else if(B5O[o2o](interval,(K5g+H6o)))dt=STX[U7l][a1n](dt,periodicity,this);else if(B5O[S3o](interval,"month"))dt=STX[U7l][t8l](dt,periodicity,this);}
m=dt[(Z4n+F2v+X2l)]();if(B5O[N8l](m,mym)){return (B5O[S6l](chart[e2O].length,1))+ticks;}
if(B5O[c3t](mym,m)){return (B5O[(m9o+l2O)](chart[e2O].length,1))+ticks-1;}
}
return (B5O[f7l](chart[e2O].length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var v6l="O0",h7t="yMa",F7O="x5",Q7g="d5",B5l="Zone",b6l="vP",k3t="z5",X4O=210,P7l="X5",p0R="isHalfDay",W2v="ket",E3O="n5",C5o="l5",w7n="U5",C8t="q5",U7t="M5",t6t="N5",T8o="inut",V4l="A5",Y2t="V5",f6g="K5",Q8O="O5",A5g="j3",A8n="x3",p4l="nterval",m2v="isD",mym=STX[w0v](mydt)[f2v](),interval=this[I4l][q3v],periodicity=this[I4l][X5l],dt=chart[e2O][B5O.b4I][x0v],m=dt[f2v](),ticks=B5O.b4I,computedPeriodicity=periodicity;if(!this[(m2v+z9o+X8l+e7o+S1t+p4l)](interval)){if(B5O[A8n](interval,L6g))computedPeriodicity=B5O[A5g](periodicity,interval);if(B5O[Q8O](interval,I2v))computedPeriodicity=this[E6v][J7o][K3O];}
for(var i=B5O.b4I;B5O[f6g](i,k6O);i++){if(!this[z2o](interval)){if(B5O[Y2t](dt[j1O](),chart[u6o])&&B5O[V4l](dt[(Z4n+W9o+T8o+j9t)](),chart[c5n])&&B5O[e3g](interval,I2v)){var dt2=STX[U7l][X7l](dt,B5O.i4I,this);if(B5O[t6t]((dt2[f2v]()-mym)/e2t,chart[X8O])){dt=dt2;if(B5O[U7t](chart[u6o],B5O.b4I)){if(B5O[C8t](dt[s0o](),B5O.b4I)){ticks+=Math[Q6v](B5O[w7n](Q4I,n5l,computedPeriodicity));}
else{ticks+=Math[(Q6v)](B5O[C5o](chart[X8O],computedPeriodicity));}
}
else if(B5O[E3O](chart[u6o],Q4I)&&STX[(n6I+s9o+e1v+U2I+z9o+B5O.E4o+W2v)][p0R](dt,chart[L2O])){ticks+=Math[Q6v](B5O[P7l](X4O,computedPeriodicity));}
else{ticks+=Math[Q6v](B5O[k3t](chart[X8O],computedPeriodicity));}
}
else{dt=STX[U7l][A8O](dt,interval,periodicity,this,X7g,this[(J7n+T1g+W3o)]);ticks+=B5O.i4I;}
}
else{dt=STX[U7l][(c2o+B5O.E4o+W3o+b6l+W3o+B5O.E4o+X8l+B5O.V2n)](dt,interval,periodicity,this,X7g,this[(m9o+B2I+z9o+B5l)]);ticks+=B5O.i4I;}
}
else{ticks+=B5O.i4I;}
if(B5O[Q7g](interval,y7n))dt=STX[U7l][X7l](dt,periodicity,this);else if(B5O[(G1l+n5n)](interval,d3t))dt=STX[U7l][T1t](dt,periodicity,this);else if(B5O[F7O](interval,V1v))dt=STX[(t5v+V9l+z9o+B5O.r3o+h7t+B5O.E4o+W2v)][f4t](dt,periodicity,this);m=dt[f2v]();if(B5O[(g6o+n5n)](m,mym)){return -ticks;}
if(B5O[v6l](mym,m)){return -(ticks+B5O.i4I);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){var d7g="K0";yAxis[n6v]=yAxis[T7l]+yAxis[k9O];yAxis[u3O]=B5O[d7g]((yAxis[T7l]-yAxis[k9O]),B5O.M4I);}
;STXChart.prototype.home=function(params){var j1l="a0",Q6n="g0",C6l="F0",s8n="p0",Y2l="tesp",e8l="v0",g5o="maintainWhitespace",r9v="V0",G7n="lic",P7I="leC",O6v="ouch",P9l="lT",F2t="anc";if(this[y2o]("home",arguments))return ;if(typeof params!="object"){params={maintainWhitespace:params}
;}
this[(B5O.r3o+F2t+W3o+P9l+O6v+C2I+Z0R+V9l+P7I+G7n+H6o)]=true;if(!this[E6v][e2O]||B5O[r9v](this[E6v][e2O].length,0))return ;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];chart[u3O]=Math[(h7I)](chart[z1v],chart[e2O].length);if(this[E6v][X6O])chart[u3O]=chart[z1v];if(params[g5o]){var wsInTicks=Math[(h0R+w6l+m9o)](B5O[e8l](this[x3l][(G1l+D4t+Y2l+z9o+B5O.r3o+W3o)],this[I4l][f7g]));this[E6v][(F2o+B7v+B5O.Z7o+E7o)]-=wsInTicks;}
else if(B5O[s8n](this[V1g],"roundRectArrow")){var margin=3,height=this[m5g]("stx_yaxis")+B5O[C6l](margin,2),leftMargin=B5O[Q6n](height,2),wsInTicks=Math[(B5O.E4o+B5O.Z7o+c4o+y7o+m9o)](B5O[(j1l)](leftMargin,this[I4l][f7g]));if(B5O[S7v](wsInTicks,1))chart[u3O]-=wsInTicks;}
this[x7O](chart[(n7t+L7o)][b4O]);}
this[V5o]();this[K6g]("home",arguments);}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){var y8o="m0",L0g="E0",s7I="pastTick",Z8o="u0",R7l="futureTick",h8g="e0",x4I="Q0",O2o="ours",O4I="c0";if(!chart[e2O].length)return 0;if(!chart)chart=this[E6v];var DT=STX[w0v](dt);if(!adj)adj=0;if(!STXChart[z2o](this[I4l][q3v]))DT[x8R](DT[x2o]()+adj);if(B5O[O4I](chart[u6o],0)&&!STXChart[z2o](this[I4l][q3v])){if(B5O[y4I](DT[(V9l+Z9t+O9o+O2o)](),0)){DT[B0O](chart[u6o]);DT[x8R](chart[c5n]);}
}
var mym=DT[f2v](),m=chart[e2O][B5O[x4I](chart[e2O].length,1)][x0v][f2v]();if(B5O[h8g](m,mym))return this[R7l](dt,chart);var first=chart[e2O][0][x0v][f2v]();if(B5O[Z8o](mym,first))return this[s7I](dt,chart);for(var i=B5O[O6t](chart[e2O].length,1);B5O[L0g](i,0);i--){m=chart[e2O][i][x0v][f2v]();if(B5O[y8o](m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var H4n="C1",ms=dt[f2v]();ms+=B5O[H4n](this[L5n],e2t);return new Date(ms);}
;STXChart[R0t]=function(hz,grid,text){this[(p8l+Q0l)]=hz;this[z6t]=grid;this[p1g]=text;}
;STXChart.prototype.createXAxis=function(chart){var T2g="crea",f2o="nAp",E7O="x7",g7O="abel",g1g="sL",J8n="hAs",n5O="w7",x2g="d7",q9t="z7",y7l="X7",B5o="l7",N6o="b7",Y0O="icks",V9v="i7",n0v="J7",a6t="y7",S7O="p7",a3l="v7",z2n="L7",M3O="ly",i2g="D7",X9t="h7",v7g="T2",a9v="futu",u7O="P2",b7o="Y2",u4I="Q2",W7I="Z2",K2I="c2",H2v="S2",l4l="a2",y8t="g2",H6l="F2",l8n="p2",v9l="v2",L6n="L2",B1g="D2",T6n="h2",G6O="P4",N8v="f4",y9o="u4",h9o="Q4",S5v="ayDate",Q2I="Z4",r6g="xaxisFactor",J2I="c4",s6v="S4",i7l="Min",V4v="beg",n6l="a4",l8O="F4",h0v="r4",R7O="W4",q4l="prettyXaxis",I8t="h4",Z9v="f1",t6g="lYear",u7I="Fu",I1t="yD",E4g="spla",A8o="u1",N9g="Secon",K6O="aSegm",s8O="X1",B8l="n1",P9o="l1",l7o="b1",i5v="i1",B2v="J1",j6I="createNumericXAxis",E8v="N1",T3t="createTickXAxisWithDates",h5o="hasNTBAxis",H0t="axisType",E5g="s1",Q6l="A1",e5R="k1";if(B5O[e5R](chart[J4I].length,0))return null;var arguments$=[chart],axisRepresentation=this[y2o]("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this[I4l][q3v];if(B5O[Q6l](interval,"tick")||B5O[E5g](chart[J7o][H0t],(y7o+B5O.G4o+i9o))||this[h5o][this[I4l][E5o]]){return this[T3t](chart);}
if(B5O[E8v](chart[J7o][H0t],"numeric")){return this[j6I](chart);}
var displayLetters=false,periodicity=this[I4l][X5l],candleWidth=this[I4l][f7g],p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(B5O[B2v](interval,"week")){isWeekly=true;p=B5O[i5v](5,p);}
if(B5O[l7o](interval,"month")){isMonthly=true;p=B5O[P9o](20,p);}
if(B5O[B8l](candleWidth*(20/p),50))displayLetters=true;var i=0;chart[O3o]=[];for(;B5O[s8O](i,chart[z1v]);i++){if(B5O[A5t](chart[J4I][i],null))break;chart[O3o][(H0l)](null);}
var dt;if(chart[J4I][i]){dt=chart[(i1v+B5O.G4o+K6O+H6n+B5O.G4o)][i][x0v];}
else{dt=new Date();if(this[q5R]){var tzNow=STX[C2g](now,null,this[q5R]);dt=new Date(tzNow[B8O](),tzNow[B6g](),tzNow[H5n](),tzNow[j1O](),tzNow[x2o](),tzNow[(V9l+W3o+B5O.G4o+N9g+m9o+F2o)](),tzNow[e8g]());}
}
var currentDate=dt[H5n](),is24=(B5O[A8o](chart[X8O],1440));if(is24){if(chart[J4I][i]&&chart[J4I][i][(H5v+E4g+I1t+M5o)]){currentDate=chart[J4I][i][H9n][H5n]();}
else{currentDate=this[U8n](dt)[H5n]();}
}
var prevMonth=dt[B6g](),prevYear=dt[(V9l+Z9t+u7I+e7o+t6g)](),ticksPerDay=1;if(!this[z2o](interval)){isIntraday=true;if(B5O[Z9v](interval,"minute"))interval=1;ticksPerDay=Math[W3l](B5O[Q5g](chart[X8O],periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math[Q6v](B5O[I8t](ticksPerDay,Math[W3l](ticksPerDay/Math[J8l](100/candleWidth))));if(B5O[r1g](ticksPerClick,1))ticksPerClick=1;var minuteBoundary=B5O[(n6I+j5n)](ticksPerClick,periodicity,interval);if(chart[q4l]){var mod=chart[q4l][B5O[R7O](periodicity,interval)];if(!mod)mod=1;if(B5O[h0v](minuteBoundary,mod)){minuteBoundary=B5O[l8O](Math[J8l]((minuteBoundary+mod)/mod),mod);}
}
var offset=Math[Q6v](B5O[C9t](Math[Q6v](candleWidth*this[m3n])/2,1));axisRepresentation=[];var standardBeginDay=B5O[n6l](chart[u6o],60)+chart[(V4v+X8l+y7o+i7l+N5O+W3o)];for(i;B5O[s6v](i,chart[z1v]);i++){if(!isMonthly&&B5O[(J2I)](chart[z1v]/ticksPerDay,(this[E6v].width/this[E6v][r6g]))){var prices;if(B5O[Q2I](i,chart[J4I].length)){prices=chart[J4I][i];if(!prices)continue;dt=prices[x0v];if(chart[J7o][l3l]){dtShifted=dt;}
else if(prices[H9n]){dtShifted=prices[(H5v+F2o+c2o+e7o+S5v)];}
else if(isIntraday){dtShifted=this[U8n](dt);}
else{dtShifted=dt;}
}
else{if(!chart[J7o][x3R])break;if(isIntraday)dt=STX[U7l][(l6o+B5O.G4o+q7I+h9t+X8l+B5O.Z7o+m9o)](dt,interval,periodicity,this,null,this[q5R]);else if(isWeekly)dt=STX[U7l][a1n](dt,periodicity,this);else if(isMonthly)dt=STX[U7l][t8l](dt,periodicity,this);else if(isDaily)dt=STX[U7l][V7t](dt,periodicity,this);if(chart[J7o][l3l])dtShifted=dt;else if(isIntraday)dtShifted=this[U8n](dt);else dtShifted=dt;}
var isNextDate=B5O[h9o](dt[H5n](),currentDate);if(is24)isNextDate=B5O[(W3o+j5n)](dtShifted[H5n](),currentDate);var nonBoundary=B5O[y9o](dt[j1O](),chart[u6o])||B5O[N8v](dt[x2o](),chart[c5n]);if(is24)nonBoundary=B5O[G6O](dtShifted[j1O](),0)||B5O[B7g](dtShifted[x2o](),0);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType=(Q9t+W3o);currentDate=dt[H5n]();if(is24)currentDate=dtShifted[H5n]();var hz=(B5O[T6n](i,candleWidth))+offset;if(B5O[B1g](gridType,"boundary"))hz=B5O[L6n](((i)*candleWidth),3);var text="";if(!STXChart[I7t]()){var y=dt[B8O]();if(B5O[v9l](y,prevYear)){prevYear=y;text=y;gridType="boundary";}
else{if(chart[J7o][D8v]){text=chart[J7o][D8v](dtShifted,gridType);}
else if(this[L8v]){text=this[L8v][v9n][w5g](dtShifted);}
else{text=(dtShifted[B6g]()+1)+"/"+dtShifted[H5n]();}
}
}
if(B5O[l8n](hz,chart.width)){axisRepresentation[H0l](new STXChart[R0t](hz,gridType,text));}
}
else if(nonBoundary){var minutes=B5O[H6l](dt[j1O](),60)+dt[x2o]();if(B5O[y8t](this[E6v][u6o],0)||B5O[l4l](dt[s0o](),0))minutes=B5O[H2v](minutes,standardBeginDay);else minutes=B5O[K2I](minutes,(15*60));if(is24)minutes=B5O[W7I](dtShifted[j1O](),60)+dtShifted[x2o]();if(B5O[u4I](minutes%minuteBoundary,0)){var hz=(B5O[S8g](i,candleWidth))+offset,text="";if(!STXChart[(D4t+F3v+J6v+H4o+F2o)]()){if(chart[J7o][D8v]){text=chart[J7o][D8v](dtShifted,(X2o+y7o+W3o));}
else{text=STX[c7O](dtShifted,this);}
}
if(B5O[b7o](hz,chart.width)){axisRepresentation[(H0l)](new STXChart[R0t](hz,(e7o+X8l+y7o+W3o),text));}
}
}
}
else{var prices;if(B5O[u7O](i,chart[J4I].length)){prices=chart[J4I][i];dt=prices[x0v];}
else{if(!chart[J7o][(a9v+j7g+T7o+E9l)])break;if(isIntraday)dt=STX[U7l][Q1O](dt,interval,periodicity,this,null,this[q5R]);else if(isWeekly)dt=STX[U7l][a1n](dt,periodicity,this);else if(isMonthly)dt=STX[U7l][t8l](dt,periodicity,this);else if(isDaily)dt=STX[U7l][(y7o+R7n+B5O.G4o+J6v+O1l)](dt,periodicity,this);}
dtShifted=dt;var m=dt[B6g](),y=dt[B8O]();if(B5O[v7g](y,prevYear)){prevYear=y;prevMonth=m;var hz=B5O[(X9t)]((i*candleWidth),2),text="";if(!STXChart[I7t]())text=y;axisRepresentation[H0l](new STXChart[R0t](hz,(i9o+x9t+J5n+z9o+B5O.E4o+O1l),text));}
else if(B5O[i2g](m,prevMonth)){var doIt=(L6o+B5O.Z7o+b6O+p8l+M3O);if(isWeekly&&B5O[z2n](chart[z1v]*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&B5O[a3l](chart[z1v]*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&B5O[S7O](chart[z1v]*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&B5O[a6t](chart[z1v]*periodicity,(52*2)))doIt="none";else if(isMonthly&&B5O[n0v](chart[z1v]*periodicity,(12*2)))doIt="none";else if(isDaily&&B5O[V9v](chart[(L6o+z9o+y1l+p2I+Y0O)]*periodicity,(365*2)))doIt="none";if(B5O[N6o](doIt,"monthly")||(B5O[B5o](doIt,"quarterly")&&(B5O[(y7o+k5n)](m,0)||B5O[y7l](m,3)||B5O[q9t](m,6)||B5O[x2g](m,9)))){prevMonth=m;var hz=B5O[n5O]((i*candleWidth),2),text="";if(!STXChart[I7t]())text=STX[(b0g+B5O.G4o+J8n+t8o+M3R+j3v+z9o+O1l)](m,displayLetters,this);axisRepresentation[H0l](new STXChart[(Y1o+B0R+g1g+g7O)](hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX[t9O](dtShifted)}
;if(B5O[(E7O)](i,chart[J4I].length))obj.data=chart[J4I][i];else obj.data=null;chart[O3o][H0l](obj);}
this[(U5R+f2o+c2o+s6o)]((T2g+B5O.G4o+N7t+R3n+y1l+X8l+F2o),arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var m0v="E6",y7t="B6",D8l="Y6",r6l="o6",S7I="H6",a3O="ALU",y0n="AX_V",W8l="I6",I8l="R6",d6O="G6",O6n="U6",u6n="q6",l0o="eft",D7t="M6",e9O="N6",i3g="s6",Y4l="A6",C7t="V6",p5O="unpaddedRight",U6g="K6",k8O="O6",Y5g="loo",R8g="hz",z2v="minimumLabelWidth",B9g="j7",arguments$=[chart,axisRepresentation];if(this[y2o]("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this[E6v][(h9g+b6O+W3o+y1l+B5O.G4o)];this[p8v]("stx_xaxis");context.textAlign="center";context.textBaseline="middle";for(var i=0;B5O[B9g](i,axisRepresentation.length);i++){var obj=axisRepresentation[i],w=context.measureText(obj[p1g]).width,w2=Math[A0o](w,chart[J7o][z2v]);obj[R8g]=Math[(E8l+Y5g+B5O.E4o)](obj[R8g]+this[Y3g])+.5;obj[h3l]=B5O[k8O](obj[(R8g)],(w2/2));obj[V8l]=obj[R8g]+(B5O[(U6g)](w2,2));obj[p5O]=obj[R8g]+(B5O[C7t](w,2));}
var plotter=new STX[I3t]();plotter[q6o]("line","stroke",this[e9v]("stx_grid"));plotter[q6o]("boundary","stroke",this[e9v]("stx_grid_dark"));plotter[q6o]("border","stroke",this[e9v]("stx_grid_border"));var bottom=chart[L0t][(Y6g+t3l+k0t)],yAxis=chart[L0t][b4O],context=this[E6v][x3t],prevRight=-1,nextBoundaryLeft=Math[E0v],drawBorders=chart[J7o][l3o]||this[h4t],b=drawBorders?B5O[Y4l](yAxis[k5l],.5):yAxis[k5l],middle=B5O[i3g](bottom,this[l7l]/2);if(drawBorders)middle+=3;for(var nb=0;B5O[e9O](nb,axisRepresentation.length);nb++){if(B5O[D7t](axisRepresentation[nb][z6t],"boundary")){nextBoundaryLeft=axisRepresentation[nb][(e7o+l0o)];break;}
}
var prevHz=0,count=0;for(var i=0;B5O[u6n](i,axisRepresentation.length);i++){var obj=axisRepresentation[i];if(B5O[O6n](i,nb)){for(nb++;B5O[(d6O)](nb,axisRepresentation.length);nb++){if(B5O[I8l](axisRepresentation[nb][z6t],"boundary")){nextBoundaryLeft=axisRepresentation[nb][h3l];break;}
}
if(B5O[W8l](nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math[(U2I+y0n+a3O+T6I)];}
if(prevRight>-1){if(B5O[S7I](obj[h3l],prevRight))continue;}
}
else{if(prevRight>-1){if(B5O[r6l](obj[h3l],prevRight))continue;}
if(B5O[D8l](obj[(B5O.E4o+z4O+B5O.G4o)],nextBoundaryLeft))continue;}
prevRight=obj[V8l];if((B5O[y7t](Math[J8l](obj[p5O]),this[E6v].width))){count++;if(chart[J7o][U7n]){plotter.moveTo(obj[z6t],obj[(p8l+Q0l)],yAxis.top);plotter.lineTo(obj[z6t],obj[R8g],b);}
if(drawBorders){plotter.moveTo((Y6g+B5O.E4o+m9o+h9t),obj[R8g],b+.5);plotter.lineTo("border",obj[(R8g)],b+6);}
prevHz=obj[R8g];this[J8o](B5O[m0v](obj[z6t],"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj[p1g],obj[R8g],middle);}
}
if(drawBorders){var b=Math[Q6v](yAxis[(i9o+B5O.Z7o+B5O.G4o+B5O.G4o+k0t)])+.5,w=Math[Q6v](chart.width)+.5;plotter.moveTo("border",0,b);plotter.lineTo("border",w,b);}
plotter[(m9o+O6I)](context);context.textAlign="left";this[K6g]("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){var u6l="axis",B6o="eWid",u0l="J96",D6g="y96",e6O="p96",Q9n="v96",o2l="L96",U2l="D96",s3O="h96",z5O="T86",X8g="P86",m9n="f86",m9v="F86",O8t="r86",u2n="W86",d8t="t86",T1n="k86",T5v="gm",E2l="C86",Z9l="m6";axisRepresentation=[];chart[(y1l+J6I+X8l+F2o)]=[];for(var i=0;B5O[Z9l](i,chart[z1v]);i++){if(B5O[E2l](chart[(i1v+v7O+W3o+T5v+W3o+b6O)][i],null))break;chart[O3o][H0l](null);}
for(var j=i;B5O[T1n](j,chart[z1v]);j++){if(B5O[d8t](chart[J4I][i],null))break;}
var filledScreenRatio=B5O[u2n]((j-i),chart[z1v]),idealTickSizePixels=chart[J7o][y7O]?chart[J7o][y7O]:chart[J7o][S9n],idealTicks=Math[Q6v](B5O[O8t]((this[E6v].width*filledScreenRatio),idealTickSizePixels)),minMax=this[m5l](chart[J4I],["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=B5O[m9v](maxPoint,minPoint);function niceNum(range,round){var L4g="u86",Q5l="e86",U7O="Q86",j1g="Z86",s4O="c86",S2I="S86",E0O="a86",X7v="g86",q0l="log10",exponent,fraction,niceFraction;exponent=Math[J8l](Math[q0l](range));fraction=B5O[X7v](range,Math[c2l](10,exponent));if(round){if(B5O[E0O](fraction,1.5))niceFraction=1;else if(B5O[S2I](fraction,3))niceFraction=2;else if(B5O[s4O](fraction,7))niceFraction=5;else niceFraction=10;}
else{if(B5O[j1g](fraction,1))niceFraction=1;else if(B5O[U7O](fraction,2))niceFraction=2;else if(B5O[Q5l](fraction,5))niceFraction=5;else niceFraction=10;}
return B5O[L4g](niceFraction,Math[c2l](10,exponent));}
var niceRange=niceNum(B5O[m9n](maxPoint,minPoint),false),tickSpacing=niceNum(B5O[X8g](range,(idealTicks-1)),true),niceMin=B5O[z5O](Math[J8l](minPoint/tickSpacing),tickSpacing),niceMax=B5O[s3O](Math[W3l](maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(B5O[U2l](niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;B5O[o2l](i,chart[z1v]);i++){var prices=chart[J4I][i];if(prices){var obj={index:prices[v9O],data:prices}
;chart[O3o][H0l](obj);if(B5O[Q9n](prices[v9O],nextLabel))continue;if(B5O[e6O](prices[v9O],nextLabel)){hz=(B5O[D6g](i,this[I4l][f7g]))+this[F9v]+this[Y3g];}
else if(B5O[u0l](prices[v9O],nextLabel)){hz=B5O[(X8l+d0n+M5n)]((i*this[(e7o+z9o+O1l+Z8O)][(B5O.r3o+z9o+O7l+B6o+S7o)]),3,this[Y3g]);}
axisRepresentation[H0l](new STXChart[R0t](hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart[(y1l+u6l)][H0l](null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var D9v="b16",n4g="i16",p1v="J16",L8R="y16",b8n="p16",p6n="v16",m7O="maxTimeUnit",P8O="L16",H7l="D16",L5O="h16",W1l="T06",d9R="P06",f9O="f06",K2n="u06",I3l="e06",C8n="Q06",Z1g="Z06",K4O="c06",G2o="S06",u0g="a06",b2v="g06",H1n="F06",P3l="lY",v0v="etF",Z2g="W06",q4O="monthAsDisplay",I6t="t06",l6v="k06",A2l="C06",u2t="UT",x3v="MI",g5n="m56",T8R="E56",X6t="B56",z7t="Y56",N2I="o56",j5t="llYea",h9n="H56",F3n="ullY",M9O="I56",x4o="R5",m6n="G56",P6t="U56",l8R="tSec",R0g="q56",n6o="etSeco",i4o="M56",u3t="N56",R3g="s56",h1O="A56",H8O="Sec",y4n="eriodi",H3o="K56",N1O="adjustTimeZone",d9n="O56",g8v="j36",H8v="minTimeUnit",q2v="x36",q3O="w36",D9g="timeUnitMultiplier",y0v="d36",z3o="z36",E6t="X36",F4v="n36",p9t="timeUnit",r1n="l36",Y2O="b36",H1l="i36",q7n="J36",K5l="y36",X7o="p36",j7v="v36",T7I="D36",E0o="[",n7g="rd",i6I="sce",T5R="sertion",d1n="As",Q8l="h36",b9l="T96",n0O="mb",E8t="ndMi",m2g=" & ",P5t="ndHo",j7n="ert",q6O="Ass",K8v="P96",y2I="tH",r9o="f96",I3o="u9",k5O="Q96",k1v="Z96",a1t="egment",k4l="c96",d2o="S96",a5t="TE",w9o="MINU",d6o="YEAR",k3v="DAY",C4o="HOUR",h4o="SECOND",H5l="MILLISECOND",W7n="timePossibilities",Q8t="timeIntervalMap";if(!chart)chart=this[E6v];if(!this[Q8t]){this[W7n]=[STX[H5l],STX[h4o],STX[I5R],STX[C4o],STX[k3v],STX[l3n],STX[d6o]];this[Q8t]={}
;this[Q8t][STX[H5l]]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this[Q8t][STX[h4o]]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this[Q8t][STX[(w9o+a5t)]]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this[Q8t][STX[C4o]]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this[Q8t][STX[k3v]]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this[(B5O.G4o+X8l+L6o+W3o+c7I+y7o+H4o+B5O.E4o+o1l+O4o+U2I+h2I)][STX[l3n]]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this[Q8t][STX[d6o]]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this[Q8t][STX[u4n]]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart[J7o][y7O]?chart[J7o][y7O]:chart[J7o][S9n],idealTicks=B5O[(d2o)](this[E6v].width,idealTickSizePixels);for(var x=0;B5O[k4l](x,chart[(m9o+z9o+B5O.G4o+z9o+C2I+a1t)].length);x++)if(chart[J4I][x])break;if(B5O[k1v](x,chart[(m9o+B2I+d5l+V9l+L6o+W3o+y7o+B5O.G4o)].length))return [];var timeRange=B5O[k5O](chart[J4I][chart[J4I].length-1][x0v][f2v](),chart[J4I][x][x0v][f2v]());if(B5O[(W3o+d0n+M5n)](timeRange,14*STX[k3v])&&!STXChart[z2o](this[I4l][q3v])){var timeRange=0,nextClose=null,nextCloseEpoch=0,prevEpoch=0;for(var i=0;B5O[(I3o+M5n)](i,chart[J4I].length);i++){var q=chart[J4I][i];if(!q)continue;var epoch=q[x0v][f2v]();if(B5O[r9o](epoch,nextCloseEpoch)){nextClose=new Date(q[x0v]);nextClose[(F2o+W3o+y2I+x9t+B5O.E4o+F2o)](chart[x6n]);nextClose[x8R](chart[Z8R]);nextCloseEpoch=nextClose[f2v]();if(B5O[K8v](nextCloseEpoch,epoch)){console[Y8g]((q6O+j7n+X8l+B5O.Z7o+y7o+X3O+W3o+B3R+B5O.Z7o+B5O.E4o+A9v+R3n+X3O+i9o+M2I+X3O+p8l+z9o+F2o+X3O+z9o+X3O+B5O.G4o+X8l+L6o+W3o+X3O+V9l+B5O.E4o+W3o+z9o+B5O.G4o+W3o+B5O.E4o+X3O+B5O.G4o+p8l+z9o+y7o+X3O+B5O.G4o+p8l+W3o+X3O+F2o+c2o+A4t+X8l+E8l+q7o+X3O+W3o+P5t+z7l+m2g+W3o+E8t+y7o+N5O+W3o+X3O+E8l+J8t+X3O)+this[E6v][(F2o+O1l+n0O+F0t)]);nextCloseEpoch=epoch;}
}
else{timeRange+=B5O[b9l](epoch,prevEpoch);if(B5O[Q8l](epoch-prevEpoch,0)){console[Y8g]((d1n+T5R+X3O+W3o+B5O.E4o+B5O.E4o+B5O.Z7o+B5O.E4o+A9v+t8o+z9o+H4o+F2o+X3O+y7o+B5O.Z7o+B5O.G4o+X3O+X8l+y7o+X3O+z9o+i6I+y7o+m9o+Z0R+V9l+X3O+B5O.Z7o+n7g+W3o+B5O.E4o+K3l+B5O.r3o+p8l+M2I+B5O.G4o+h4O+m9o+z9o+g1o+s5t+t8t+b6O+E0o)+i+"].DT=="+q[x0v]);}
}
prevEpoch=epoch;}
}
timeRange=B5O[T7I]((timeRange/chart[J4I].length),chart[z1v]);var msPerTick=B5O[(n6I+l2O+M5n)](timeRange,idealTicks);for(var i=0;B5O[j7v](i,this[W7n].length);i++){if(B5O[X7o](this[W7n][i],msPerTick))break;}
if(B5O[K5l](i,this[W7n].length)){i--;}
else{var prevUnit=this[W7n][B5O[q7n](i,1)],prevMap=this[Q8t][prevUnit],prevMultiplier=prevMap[S6o][B5O[H1l](prevMap[S6o].length,1)];if(B5O[Y2O](msPerTick-(prevUnit*prevMultiplier),this[W7n][i]-msPerTick))i--;}
var timeUnit=this[W7n][i];if(B5O[r1n](chart[J7o][p9t],null))timeUnit=chart[J7o][p9t];var timeInterval=STX[z9v](this[Q8t][timeUnit]);for(var i=0;B5O[F4v](i,timeInterval[S6o].length);i++){if(B5O[E6t](timeInterval[S6o][i]*timeUnit,msPerTick))break;}
if(B5O[z3o](i,timeInterval[S6o].length)){i--;}
else{if(B5O[y0v](msPerTick-timeInterval[S6o][i-1]*timeUnit,timeInterval[S6o][i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval[(z9o+B5O.E4o+B5O.E4o)][i];if(chart[J7o][D9g])timeUnitMultiplier=chart[J7o][D9g];axisRepresentation=[];var i=0;chart[O3o]=[];for(;B5O[q3O](i,chart[z1v]);i++){if(B5O[q2v](chart[J4I][i],null))break;chart[O3o][H0l](null);}
var dtShifted=0,nextTimeUnit=timeInterval[H8v],previousTimeUnitLarge=-1,firstTick=true;for(i;B5O[g8v](i,chart[z1v]);i++){if(B5O[d9n](i,chart[J4I].length)){prices=chart[J4I][i];if(prices[H9n]&&chart[J7o][N1O]&&B5O[H3o](timeUnit,STX[k3v])){dtShifted=prices[H9n];}
else{dtShifted=prices[x0v];}
}
else{var periodicity=this[I4l][(c2o+y4n+n3R)],interval=this[I4l][q3v];if(!chart[J7o][x3R])break;if(dtShifted){var dt=dtShifted;}
else{dt=new Date();if(this[q5R]){var tzNow=STX[C2g](now,null,this[q5R]);dt=new Date(tzNow[B8O](),tzNow[B6g](),tzNow[H5n](),tzNow[j1O](),tzNow[x2o](),tzNow[(Z4n+B5O.G4o+H8O+d5t+m9o+F2o)](),tzNow[e8g]());}
}
if(B5O[(L1o+n5n+M5n)](interval,"day")){dt=STX[U7l][V7t](dt,periodicity,this);}
else if(B5O[h1O](interval,"week")){dt=STX[U7l][a1n](dt,periodicity,this);}
else if(B5O[R3g](interval,"month")){dt=STX[U7l][t8l](dt,periodicity,this);}
else{dt=STX[U7l][Q1O](dt,interval,periodicity,this,null,this[q5R]);}
if(chart[J7o][l3l])dtShifted=dt;else if(!this[z2o](interval))dtShifted=this[U8n](dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX[t9O](dtShifted)}
;if(B5O[u3t](i,chart[J4I].length))obj.data=chart[(b2n+z9o+C2I+g5t+L6o+H6n+B5O.G4o)][i];else obj.data=null;chart[O3o][(c2o+J7l+p8l)](obj);var currentTimeUnit,currentTimeUnitLarge;if(B5O[(i4o)](timeUnit,STX[H5l])){currentTimeUnit=dtShifted[f2v]();currentTimeUnitLarge=dtShifted[(V9l+n6o+J5n+F2o)]();}
else if(B5O[R0g](timeUnit,STX[h4o])){currentTimeUnit=dtShifted[(Z4n+l8R+d5t+a2t)]();currentTimeUnitLarge=dtShifted[(V9l+Z9t+U2I+X8l+y7o+N5O+j9t)]();}
else if(B5O[P6t](timeUnit,STX[I5R])){currentTimeUnit=dtShifted[x2o]();currentTimeUnitLarge=dtShifted[j1O]();}
else if(B5O[m6n](timeUnit,STX[C4o])){currentTimeUnit=dtShifted[j1O]();currentTimeUnitLarge=dtShifted[H5n]();}
else if(B5O[(x4o+M5n)](timeUnit,STX[k3v])){currentTimeUnit=dtShifted[H5n]();currentTimeUnitLarge=dtShifted[B6g]()+1;}
else if(B5O[M9O](timeUnit,STX[l3n])){currentTimeUnit=dtShifted[B6g]()+1;currentTimeUnitLarge=dtShifted[(Z4n+B5O.G4o+M8o+F3n+W3o+z9o+B5O.E4o)]();}
else if(B5O[h9n](timeUnit,STX[d6o])){currentTimeUnit=dtShifted[B8O]();currentTimeUnitLarge=dtShifted[(V9l+W3o+B5O.G4o+M8o+c4o+j5t+B5O.E4o)]()+1000;}
else{currentTimeUnit=dtShifted[B8O]();currentTimeUnitLarge=0;}
var text=null;if(B5O[N2I](previousTimeUnitLarge,currentTimeUnitLarge)){if(B5O[z7t](currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval[H8v];}
hz=B5O[X6t]((i*this[I4l][f7g]),3);text=null;if(B5O[T8R](timeUnit,STX[C4o])||(B5O[g5n](timeUnit,STX[(x3v+f2I+u2t+T6I)])&&B5O[A2l](previousTimeUnitLarge,currentTimeUnitLarge))){if(chart[J7o][D8v]){text=chart[J7o][D8v](dtShifted,"boundary",STX[k3v],1);}
else{if(this[L8v]){text=this[L8v][v9n][w5g](dtShifted);}
else{text=(dtShifted[B6g]()+1)+"/"+dtShifted[H5n]();}
}
}
else if(B5O[l6v](timeUnit,STX[k3v])){if(B5O[I6t](previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted[B8O]();}
else{text=STX[q4O](dtShifted[B6g](),false,this);}
}
else if(B5O[Z2g](timeUnit,STX[l3n])){text=dtShifted[(V9l+v0v+c4o+e7o+P3l+z4t+B5O.E4o)]();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation[H0l](new STXChart[R0t](hz,"boundary",text));}
}
if(B5O[(B5O.E4o+w2O+M5n)](currentTimeUnit,nextTimeUnit)){if(B5O[H1n](nextTimeUnit,timeInterval[H8v])){if(B5O[b2v](currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted),hz=(B5O[u0g](i,this[I4l][f7g]))+this[F9v],boundaryTimeUnit=B5O[G2o](Math[J8l](currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(B5O[K4O](boundaryTimeUnit,currentTimeUnit)){hz=B5O[(Z1g)]((i*this[I4l][f7g]),3);}
if(B5O[C8n](timeUnit,STX[H5l])){labelDate[y6n](boundaryTimeUnit);}
else if(B5O[I3l](timeUnit,STX[h4o])){labelDate[y6n](0);labelDate[b7n](boundaryTimeUnit);}
else if(B5O[K2n](timeUnit,STX[I5R])){labelDate[y6n](0);labelDate[b7n](0);labelDate[x8R](boundaryTimeUnit);}
else if(B5O[f9O](timeUnit,STX[C4o])){labelDate[y6n](0);labelDate[b7n](0);labelDate[x8R](0);labelDate[B0O](boundaryTimeUnit);}
else if(B5O[d9R](timeUnit,STX[k3v])){labelDate[R5o](boundaryTimeUnit);}
else if(B5O[W1l](timeUnit,STX[l3n])){labelDate[R5o](1);labelDate[d5R](B5O[L5O](boundaryTimeUnit,1));}
else if(B5O[H7l](timeUnit,STX[d6o])){labelDate[R5o](1);labelDate[d5R](0);}
else{labelDate[R5o](1);labelDate[d5R](0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(B5O[P8O](timeUnit,STX[k3v]))timeInterval[m7O]=daysInMonth[labelDate[B6g]()]+1;if(B5O[p6n](nextTimeUnit,timeInterval[m7O]))nextTimeUnit=timeInterval[H8v];previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&B5O[b8n](boundaryTimeUnit,currentTimeUnit))continue;if(!text){if(chart[J7o][D8v]){text=chart[J7o][D8v](labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(B5O[L8R](timeUnit,STX[k3v])){text=labelDate[H5n]();}
else if(B5O[p1v](timeUnit,STX[l3n])){text=STX[q4O](dtShifted[(Z4n+W9o+d5t+B5O.G4o+p8l)](),false,this);}
else if(B5O[n4g](timeUnit,STX[d6o])||B5O[D9v](timeUnit,STX[u4n])){text=labelDate[B8O]();}
else{text=STX[c7O](labelDate,this,timeUnit);}
}
axisRepresentation[H0l](new STXChart[R0t](hz,"line",text));}
}
firstTick=false;}
return axisRepresentation;}
;var cached=B5O.b4I,notcached=B5O.b4I;STXChart.prototype.createYAxis=function(panel,parameters){var w8R="r76",Y2v="dow",j2t="W76",s2g="k76",t6O="C76",W9g="m26",x0g="E2",K8g="B26",U8o="Y26",Y0t="o26",w8v="H26",h3t="Si",f6v="Font",w8o="I26",D8R="R26",w0l="G26",v8R="minimumPriceTick",A3o="U26",E6l="q26",y1O="M26",a7I="noEvenDivisorTicks",Q1l="N26",o8o="s26",j5R="A26",O2v="V26",N0l="K26",B5t="O26",J9g="j46",k7g="x46",o6I="sh",K9n="w46",g0t="d46",c9l="z46",W3g="X46",B1v="_ya",W0v="n46",s4n="l46",u4l="b46",q4o="i46",b7t="J46",t8O="y46",w2v="p46",U9l="v4",c5v="wi",S9R="activ",J4t="L46",b2g="46",Z3O="O46",r0o="x16",g3o="w16",H7n="16",P0t="goldenRatioYAxis",O1O="z16",T8n="X16",J1o="n16",B0o="enableCaching",I0v="l16",m6t="reateY";if(this[y2o]((B5O.r3o+m6t+R3n+y1l+X8l+F2o),arguments))return ;var chart=panel[E6v],isAChart=(B5O[I0v](panel[F2g],chart[F2g])),yAxis=panel[(O1l+B0R+F2o)];if(!parameters)parameters={}
;parameters[V3n]=false;if(STXChart[B0o]&&B5O[J1o](yAxis[R1v],panel[R4l])&&B5O[(T8n)](yAxis[t4v],panel[(B5O.r3o+i5o+u0t+n6I+v9t)])){var leftTick=B5O[O1O](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v];panel[R1g]=Math[h7I](panel[R1g],leftTick);panel[U0R]=Math[A0o](panel[U0R],rightTick);panel[R1g]=leftTick;panel[U0R]=rightTick;parameters[V3n]=true;cached++;}
else{panel[R1g]=1000000;panel[U0R]=-1;panel[R4l]=yAxis[(R1v)];panel[S3n]=yAxis[t4v];notcached++;}
var idealX=chart[J7o][y7O]?chart[J7o][y7O]:chart[J7o][S9n];if(this[P0t]){if(B5O[(m9o+H7n)](yAxis[y7O],idealX/1.618))parameters[V3n]=false;}
if(!parameters[V3n]){var height=yAxis.height=B5O[g3o](yAxis[k5l],yAxis.top),pricePerPix=B5O[(r0o)]((yAxis[(p8l+W4v+p8l)]-yAxis[t4v]),(height-yAxis[n6v]));yAxis[R1v]=yAxis[R1v]+B5O[(g6o+H7n)]((yAxis[n6v]/2),pricePerPix)+B5O[Z3O](yAxis[u3O],pricePerPix);yAxis[t4v]=B5O[(r6I+b2g)](yAxis[t4v],(yAxis[n6v]/2)*pricePerPix,yAxis[u3O]*pricePerPix);yAxis[s2I]=B5O[J4t](yAxis[R1v],yAxis[t4v]);if(yAxis[l9R]&&(!this[(S9R+W3o+s6g+c5v+s7O)]||B5O[(U9l+M5n)](this[r3t][F2g],(O0v+B5O.Z7o+g6o+R7g+X8l+B5O.Z7o+y7o)))){yAxis[f7v]=B5O[w2v](Math[Y8g](yAxis[R1v]),Math[o6g]);yAxis[B2l]=B5O[t8O](Math[Y8g](yAxis[(f8l+G1l)]),Math[o6g]);if(B5O[b7t](yAxis[t4v],0))yAxis[B2l]=0;yAxis[I2l]=B5O[q4o](yAxis[f7v],yAxis[B2l]);}
if(this[P0t]&&isAChart){yAxis[y7O]=B5O[u4l](idealX,1.618);if(B5O[s4n](yAxis[y7O],0)){var fontHeight=this[m5g]("stx_yaxis");yAxis[y7O]=B5O[W0v](fontHeight,5);}
}
else{if(!yAxis[y7O]){var fontHeight=this[m5g]((T9o+y1l+B1v+b8g));if(isAChart){yAxis[y7O]=B5O[W3g](fontHeight,5);}
else{yAxis[y7O]=B5O[c9l](fontHeight,2);}
}
}
var idealTicks=Math[Q6v](B5O[g0t](height,yAxis[y7O])),shadow=parameters[i7g]?B5O[K9n](parameters[i7g][1],parameters[i7g][0]):yAxis[(o6I+z9o+n9v+G1l)];yAxis[w9O]=Math[(E8l+e7o+R5t+B5O.E4o)](B5O[k7g](shadow,idealTicks));var n=1;for(var zz=0;B5O[J9g](zz,10);zz++){if(B5O[B5t](yAxis[w9O],0))break;n*=10;yAxis[w9O]=B5O[N0l](Math[J8l](shadow/idealTicks*n),n);}
if(B5O[O2v](zz,10))yAxis[w9O]=.00000001;yAxis[w9O]=B5O[j5R](Math[Q6v](shadow/idealTicks*n),n);var verticalTicks=Math[Q6v](B5O[o8o](shadow,yAxis[w9O]));if(parameters[i7g]&&B5O[Q1l](verticalTicks,shadow)&&!yAxis[a7I]){while(B5O[y1O](verticalTicks,1)){if(B5O[E6l](shadow%verticalTicks,0))break;verticalTicks--;}
yAxis[w9O]=B5O[A3o](shadow,verticalTicks);}
if(yAxis[v8R]){yAxis[w9O]=yAxis[v8R];for(var i=0;B5O[w0l](i,10);i++){var numberOfTicks=B5O[D8R](shadow,yAxis[w9O]);if(B5O[w8o](height/numberOfTicks,this[(Z4n+D4n+f6v+h3t+Q0l+W3o)]("stx_yaxis")*2))yAxis[w9O]*=2;else break;}
}
yAxis[v9o]=B5O[w8v](yAxis.height,yAxis[s2I]);}
if(!this[r3t]||B5O[Y0t](this[r3t][F2g],"projection")){yAxis[R1v]=this[f1t](panel.top,panel);if(yAxis[l9R]){yAxis[f7v]=B5O[U8o](Math[Y8g](yAxis[R1v]),Math[o6g]);yAxis[B2l]=B5O[K8g](Math[Y8g](yAxis[(t4v)]),Math[o6g]);if(B5O[(x0g+M5n)](yAxis[(f8l+G1l)],0))yAxis[B2l]=0;yAxis[I2l]=B5O[W9g](yAxis[f7v],yAxis[B2l]);}
yAxis[s2I]=B5O[t6O](yAxis[R1v],yAxis[t4v]);}
yAxis[v9o]=B5O[s2g](yAxis.height,yAxis[s2I]);if(B5O[(B5O.G4o+k5n+M5n)](yAxis[N3l],null)){if(isAChart){var labelDecimalPlaces=0;if(B5O[j2t](panel[b4O][(F2o+B5O.w2t+Y2v)],1000))labelDecimalPlaces=2;if(B5O[w8R](panel[b4O][s2I],1))labelDecimalPlaces=4;yAxis[G2g]=labelDecimalPlaces;}
else yAxis[(O0v+X8l+b6O+t8o+k1O+z9o+e7o+q7I+e7o+z9o+H3g+F2o)]=null;}
else{yAxis[G2g]=yAxis[N3l];}
this[K6g]("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var m4t="plo",Z1l="W66",K3g="addText",W0O="t66",E3v="bord",g2o="Pl",e3R="k66",Q8o="C66",u9R="lFr",T3n="T76",N9R="P76",q7l="f76",R4v="u76",v2v="e76",M0o="Z76",v2n="10",P9t="LN",K3R="ix",e8o="Fr",J4g="S76",K4I="rou",J6t="a76",T4t="g76",O1g="F76",h3n="noDraw";if(this[y2o]("drawYAxis",arguments))return ;if(!parameters)parameters={}
;if(!parameters[(p8n+t8o+B5O.E4o+Y6I)]&&!panel[b4O][h3n]){if(!panel[N7v]||!parameters[V3n]){var chart=panel[E6v],isAChart=(B5O[O1g](panel[F2g],chart[F2g])),yAxis=panel[b4O];if(!yAxis[w9O])return ;var shadow=yAxis[s2I];if(parameters[i7g]){shadow=B5O[T4t](parameters[i7g][1],parameters[(A8R+y7o+Z4n)][0]);}
var verticalTicks=B5O[J6t](shadow,yAxis[w9O]);verticalTicks=Math[(K4I+y7o+m9o)](verticalTicks);if(yAxis[l9R]){var logStart=B5O[J4g](Math[Y8g](this[(o1l+z9o+e7o+c4o+W3o+e8o+B5O.Z7o+L6o+q7I+K3R+W3o+e7o)](yAxis[k5l],panel)),Math[(P9t+v2n)]),logPriceTick=B5O[(B5O.r3o+k5n+M5n)]((yAxis[f7v]-yAxis[B2l]),verticalTicks);}
panel[N7v]=new STX[I3t]();panel[N7v][q6o]("grid","stroke",this[e9v]("stx_grid"));panel[N7v][q6o]("text","fill",this[e9v]("stx_yaxis"));panel[N7v][q6o]("border","stroke",this[e9v]("stx_grid_border"));var priceOffset=0,high=parameters[i7g]?parameters[i7g][1]:yAxis[R1v],low=parameters[i7g]?parameters[i7g][0]:yAxis[t4v],drawBorders=chart[L0t][b4O][l3o]||this[h4t],borderEdge=Math[Q6v](chart.width)+.5,w=drawBorders?B5O[M0o](borderEdge,.5):this[(b6o+B5O.G4o)].width,tickWidth=drawBorders?3:0;if(isAChart)priceOffset=B5O[(x6I+M5n)](yAxis[w9O],Math[Q6v]((low%yAxis[w9O])*panel[E6v][C1n])/panel[E6v][C1n]);else priceOffset=B5O[v2v](high,yAxis[w9O]);var fontHeight=this[m5g]("stx_yaxis");for(var i=0;B5O[R4v](i,verticalTicks);i++){var price;if(yAxis[l9R]){var logPrice=logStart+(B5O[q7l](i,logPriceTick));price=Math[c2l](10,logPrice);}
else{if(isAChart)price=low+B5O[N9R](i,yAxis[w9O])+priceOffset;else price=B5O[T3n](high,(i*yAxis[w9O]),priceOffset);}
var y=this[(H4t+y1l+W3o+u9R+k0t+q7I+g2g+B5O.r3o+W3o)](price,panel),y2=Math[Q6v](y)+.5;if(B5O[Q8o]((y2+fontHeight/2),panel[(i9o+d6n+B5O.G4o+B5O.Z7o+L6o)]))continue;if(B5O[e3R]((y2-fontHeight/2),panel.top))continue;if(yAxis[U7n]){panel[(O1l+R3n+y1l+X8l+F2o+g2o+B5O.Z7o+t3l+W3o+B5O.E4o)].moveTo((V9l+B5O.E4o+X8l+m9o),0,y2);panel[N7v].lineTo("grid",w,y2);}
if(drawBorders){panel[N7v].moveTo((E3v+h9t),B5O[W0O](borderEdge,.5),y2);panel[N7v].lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis[v0t]){price=yAxis[v0t](this,panel,price);}
else{price=this[H3O](price,panel);}
panel[N7v][K3g]("text",price,B5O[Z1l](this[E6v][e2o],this[q7O],tickWidth,3),y2);}
if(drawBorders){var b=Math[Q6v](yAxis[k5l])+.5;panel[N7v].moveTo("border",borderEdge,yAxis.top);panel[N7v].lineTo("border",borderEdge,b);panel[N7v][V5o](this[E6v][x3t],"border");}
}
this[w8n](panel);this[(m4t+B5O.G4o+U0o+R3n+y1l+X8l+F2o+p2I+W3o+y1l+B5O.G4o)](panel);}
this[K6g]("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){if(this[y2o](w8n,arguments))return ;var context=this[E6v][(h9g+y7o+B5O.G4o+R7n+B5O.G4o)];panel[N7v][V5o](context,z6t);this[K6g](w8n,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var Q1n="asFont",L0v="Te",s1t="xi",j3l="YA",Z2I="plot";if(this[(B5O.E4o+w6l+q7I+j7g+G1t+y7o+m9o)]((Z2I+j3l+s1t+F2o+L0v+y1l+B5O.G4o),arguments))return ;this[(v7v+o1l+Q1n)](X2I);this[J8o](X2I);var context=this[E6v][x3t];context.textBaseline="middle";panel[N7v][V5o](context,p1g);context.textBaseline="alphabetic";this[K6g](M1n,arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces){var k0l="w66",f0O="d66",v9R="z66",i3n="n66",L7v="l66",u6I="b66",A4O="i66",K1O="J66",A4o="66";if(B5O[(O1l+A4o)](price,null)||typeof price==(w6l+w4l+l3t))return "";var yAxis=panel[b4O],decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&B5O[(K1O)](decimalPlaces,0))decimalPlaces=yAxis[(O0v+X8l+y7o+B5O.G4o+t8o+k1O+S4I+C1l+B5O.r3o+j9t)];if(!decimalPlaces&&B5O[A4O](decimalPlaces,0)){if(B5O[u6I](yAxis[w9O],.01))decimalPlaces=4;else if(B5O[L7v](yAxis[w9O],.1))decimalPlaces=2;else if(B5O[i3n](yAxis[w9O],1))decimalPlaces=1;else decimalPlaces=0;}
if(B5O[(Y1o+M5n+M5n)](panel[F2g],panel[E6v][F2g])){if(B5O[v9R](price,1000)||price<-1000){return STX[j3g](price);}
}
if(this[L8v]){if(B5O[f0O](decimalPlaces,this[L8v][i9O].length))decimalPlaces=B5O[k0l](this[L8v][i9O].length,1);price=this[L8v][i9O][decimalPlaces][w5g](price);}
else{price=price[W4t](decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){var W4n="K8u",q0t="O8u",c9g="j6",v2t="x66";if(!price||typeof price=="undefined")return "";if(!panel)panel=this[o3o];if(!panel)panel=this[(B5O.r3o+l3R+B5O.G4o)][L0t];if(!panel)return price;var decimalPlaces=panel[N3l];if(!decimalPlaces&&B5O[v2t](decimalPlaces,0)){decimalPlaces=panel[E6v][(m9o+A4t+X8l+L6o+S4I+C1l+W3O)];}
if(!decimalPlaces&&B5O[(c9g+M5n)](decimalPlaces,0)){return price;}
if(this[L8v]){if(B5O[q0t](decimalPlaces,this[L8v][i9O].length))decimalPlaces=B5O[W4n](this[L8v][i9O].length,1);price=this[L8v][i9O][decimalPlaces][w5g](price);}
else{price=price[W4t](decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var Z6v="Cros",Y6t="onmousedown",R2n="createCrosshairs";if(this[(U5R+c1v+W3o+G1t+y7o+m9o)](R2n,arguments))return ;if(this[Y8o][N0t][Y6t])return ;this[Y8o][U5t][Y6t]=function(e){if(!e)e=event;if(e[U2n])e[U2n]();return C0l;}
;this[Y8o][N0t][Y6t]=function(e){if(!e)e=event;if(e[U2n])e[U2n]();return C0l;}
;this[K6g]((B5O.r3o+B5O.E4o+W3o+z9o+B5O.G4o+W3o+Z6v+F2o+g9R+o3R),arguments);}
;STXChart.prototype.createVolumeChart=function(chart){var K8R="volumeChart",V7l="vch",o9g="R8u",J6n="8u",X8o=(11.13E2>=(0x155,131)?(94.2E1,"G"):(7.63E2,4.54E2)<(102.,0xF8)?"t":(118.,50.)),L3l="U8u",T6O="q8u",U1t="M8u",I0l="N8u",R6l="s8u",T6t="A8u",r5O="V8u",C5t="Volu",arguments$=[chart];if(this[y2o]((U6O+W3o+C5t+L6o+W3o+B5O.T9n+L2g),arguments$))return ;var quotes=chart[J4I],context=this[E6v][x3t];chart[Q0v]=0;for(var i=0;B5O[r5O](i,chart[z1v]);i++){var prices=quotes[i];if(B5O[T6t](prices,null))continue;if(B5O[R6l](prices[W8t],chart[Q0v]))chart[Q0v]=prices[(L1o+F0t+c4o+X2l)];}
var vchart=this[p3n]["vchart"];if(B5O[I0l](vchart,null)||B5O[U1t](vchart[G6I],true))return ;if(B5O[T6O](chart[Q0v],0)){this[f7o]("vchart","center","bottom",this[b2l]("Volume Not Available"));}
var stx_volume_up=this[e9v]("stx_volume_up")[w5o],stx_volume_down=this[e9v]("stx_volume_down")[w5o],colorMap={}
;colorMap[stx_volume_up]=[];colorMap[stx_volume_down]=[];for(var i=0;B5O[L3l](i,quotes.length);i++){var quote=quotes[i];if(B5O[(X8o+J6n)](quote,null)){colorMap[stx_volume_up][H0l](null);colorMap[stx_volume_down][H0l](null);continue;}
if(B5O[o9g](quote[X5g],quote[H7O])){colorMap[stx_volume_up][H0l](null);colorMap[stx_volume_down][H0l](quote[W8t]);}
else{colorMap[stx_volume_up][H0l](quote[W8t]);colorMap[stx_volume_down][H0l](null);}
}
var borderMap={}
;borderMap[stx_volume_up]="#000000";borderMap[stx_volume_down]="#000000";vchart[h7I]=0;vchart[(A0o)]=chart[Q0v];var sd={name:(V7l+z9o+q3R),panel:"vchart",libraryEntry:STX[Q2v][d2O]["vchart"],outputMap:{"Volume":""}
}
;STX[Q2v][d8n](this,sd,this[(B5O.r3o+B5O.w2t+q3R)][J4I],vchart);STX[Q2v][K8R](this,sd,colorMap,borderMap);vchart[i6o]=true;if(this[K6g]("createVolumeChart",arguments$))return ;}
;STXChart.prototype.determineMinMax=function(quotes,fields){var a9o="B8u",x0t="o8u",E9t="H8u",N4g="I8u",y5v="UE",R4t="VA",highValue=Number[(U2I+R3n+Y1o+Q5o+R4t+n6I+y5v)]*-1,lowValue=Number[E0v];for(var i=0;B5O[N4g](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.transform)quote=quote.transform;for(var j=0;B5O[E9t](j,fields.length);j++){var val=quote[fields[j]];if(val||B5O[x0t](val,0)){if(B5O[(U0o+h1n+c4o)](val,highValue))highValue=val;if(B5O[a9o](val,lowValue))lowValue=val;}
}
}
return [lowValue,highValue];}
;STXChart.prototype.initializeDisplay=function(chart){var J1l="ach",U5g="xelC",C8R="p3u",i8o="v3u",u0v="L3u",q4v="D3u",B4g="h3u",R0R="T9u",S8n="P9u",J2v="f9u",n2l="u9u",p0O="e9u",Z1t="lowValue",e5t="Q9u",k7n="Z9u",B2O="c9u",r2O="S9u",P4I="a9u",b1l="g9u",L8O="F9u",k4O="r9u",y8g="W9u",b0R="t9u",z5n="k9u",H2g="C9u",C4t="m8u",x1l="E8u",o6t="eight",A3t="ff",d3O="tto";if(this[y2o]("initializeDisplay",arguments))return ;var fields=[];for(var field in chart[p6g]){if(chart[p6g][field][o2O][(F2o+p8l+M2I+W3o+U0o+B0R+F2o)])fields[H0l](field);}
var panel=chart[(c2o+m1I+V0t)]=this[p3n][chart[F2g]],yAxis=panel[b4O],cheight=panel.height,high=low=null;if(!yAxis[x6o])yAxis[(i9o+B5O.Z7o+d3O+L6o+V7I+A3t+K0O)]=this[(y1l+J6I+X8l+F2o+O9o+o6t)];yAxis[k5l]=B5O[x1l](panel[k5l],yAxis[x6o]);yAxis.top=panel.top;yAxis.height=B5O[C4t](yAxis[k5l],yAxis.top);var minMax;if(B5O[H2g](this[I4l][c5g],"line")||B5O[z5n](this[(e7o+z9o+O1l+B5O.Z7o+c4o+B5O.G4o)][(V5g+M2I+X9o+I6I)],"colored_line")||B5O[b0R](this[(I4l)][c5g],"mountain")||B5O[y8g](this[I4l][c5g],"baseline_delta")){fields[H0l]("Close");minMax=this[m5l](chart[J4I],fields);if(B5O[k4O](this[I4l][c5g],"baseline_delta")){var base=chart[L0R];if(chart[Y1I])base=chart[Y1I](this,chart,base);var diff=Math[A0o](B5O[L8O](base,minMax[0]),B5O[b1l](minMax[1],base));minMax[0]=B5O[P4I](base,diff);minMax[1]=base+diff;}
}
else{fields[H0l]("Close","High","Low");minMax=this[m5l](chart[J4I],fields);}
var verticalPad=Math[Q6v](Math[y8l](B5O[r2O](cheight,5)));if(B5O[B2O](cheight-Math[y8l](yAxis[u3O]),verticalPad)){yAxis[u3O]=(B5O[k7n](cheight,verticalPad))*(B5O[e5t](yAxis[(F2o+B5O.r3o+B5O.E4o+F0t+e7o)],0)?-1:1);}
chart[Z1t]=minMax[0];chart[t9g]=minMax[1];var pricePerPix=B5O[(p0O)]((chart[t9g]-chart[Z1t]),yAxis.height);if(B5O[n2l](chart[t9g]-chart[Z1t],0)){high=B5O[J2v](chart[t9g],2);low=0;}
else{if((this[I4l][l9R]||B5O[S8n](this[I4l][u4g],"log"))&&high){var logLow=B5O[R0R](Math[Y8g](chart[Z1t]),Math[o6g]),logHigh=B5O[B4g](Math[Y8g](chart[(p8l+X8l+V9l+p8l+L1o+z9o+e7o+c4o+W3o)]),Math[o6g]);high=Math[(c2o+v9t)](10,logHigh);low=Math[(c2o+B5O.Z7o+G1l)](10,logLow);}
else{high=chart[t9g];low=chart[Z1t];}
}
if(yAxis[A0o]||B5O[q4v](yAxis[A0o],0))yAxis[R1v]=yAxis[A0o];else yAxis[R1v]=high;if(yAxis[h7I]||B5O[u0v](yAxis[h7I],0))yAxis[t4v]=yAxis[h7I];else yAxis[t4v]=low;yAxis[s2I]=B5O[i8o](yAxis[R1v],yAxis[t4v]);var isLogScale=(this[(C1l+O1l+Z8O)][l9R]||B5O[C8R](this[I4l][u4g],"log"));if(B5O[(O1l+l2O+c4o)](yAxis[l9R],isLogScale)){this[(w9g+z4t+x5g+X8l+U5g+J1l+W3o)]();yAxis[l9R]=isLogScale;}
var parameters={}
;this[d8n](panel,parameters);this[P3g](panel,parameters);this[K6g]("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){var B1l="J3u";if(typeof offset==u1n)offset=B5O.b4I;var position=B5O[B1l](x,this[I4l][f7g])+offset+this[Y3g];return position;}
;STXChart.prototype.computeColor=function(open,close){var b2o="b3u",r2I="i3u";if(B5O[r2I](open,close))return A4l;if(B5O[b2o](open,close))return L4n;return G7g;}
;STXChart.prototype.computeLength=function(high,low){var M7t="l3u",h=this[x8n](high),l=this[x8n](low);return B5O[M7t](l,h);}
;STXChart.prototype.volUnderlay=function(chart){var k6I="R5u",b0t="own",k0v="lay_",Y9o="der",Q4l="volume_",V3o="e_u",p7l="_v",d2n="x3u",f5R="underlayPercentage",P9O="w3u",N0n="d3u",r6v="z3u",Q9R="X3u",A0t="n3u",quotes=chart[J4I];chart[Q0v]=0;for(var i=0;B5O[A0t](i,chart[z1v]);i++){var prices=quotes[i];if(B5O[Q9R](prices,null))continue;if(B5O[r6v](prices[(L1o+F0t+c4o+L6o+W3o)],chart[Q0v]))chart[(o1l+F0t+c4o+L6o+W3o+U2I+J6I)]=prices[W8t];}
if(B5O[N0n](chart[Q0v],0)){this[f7o]("chart","center","bottom",this[b2l]("Volume Not Available"));return ;}
var context=this[E6v][x3t],c=chart[L0t],b=Math[J8l](c[b4O][k5l])+.5,t=Math[J8l](c.yAxis.top)+.5,h=B5O[P9O]((b-t),this[f5R]),negativeOffset=B5O[d2n]((this[o5t]-this[I4l][(T5g+O7l+C2t+E1v+B5O.G4o+p8l)]),2),quotes=chart[J4I],bordersOn=(!STX[U4v](this[(T5g+y7o+o1l+z9o+F2o+C2I+G5l+Z4o)]("stx_volume_underlay_up")["borderLeftColor"])&&!STX[U4v](this[e9v]((T9o+y1l+p7l+B5O.Z7o+e7o+M8O+V3o+J5n+W3o+B5O.E4o+C1l+O1l+Q5o+m9o+v9t+y7o))["borderLeftColor"])),self=this;function drawBars(directionClass,borders){var M3g="G5u",A6n="U5u",Z3o="q5u",M5l="leW",J1g="M5u",t5g="N5u",W6g="A5u",U4n="V5u",c6t="eM",u2I="volu",Y3O="K5u",m7l="dleW",s8l="O5u",E9R="j3u",borderColor=self[e9v](directionClass)["borderLeftColor"];self[J8o](directionClass);if(STX[F7n])context.globalAlpha=.5;context.beginPath();var prevTop=b+.5,farLeft=(bordersOn?.5:0),prevRight=farLeft;for(var i=0;B5O[E9R](i,quotes.length);i++){var quote=quotes[i];if(B5O[s8l](quote,null)){prevTop=b;prevRight+=self[I4l][(B5O.r3o+z9o+y7o+m7l+X8l+h5n)];continue;}
var y=B5O[Y3O](quote[W8t],(h/chart[(u2I+L6o+c6t+z9o+y1l)])),top=Math[h7I](Math[J8l]((B5O[U4n](b,h))+(B5O[W6g](h,y)))+.5,b);if(B5O[(e3g+c4o)](directionClass,"stx_volume_underlay_up")){if(B5O[t5g](quote[X5g],quote[H7O])){prevTop=top;prevRight+=self[I4l][f7g];continue;}
}
else{if(B5O[J1g](quote[X5g],quote[H7O])){prevTop=top;prevRight+=self[I4l][(B5O.r3o+V2t+M5l+X8l+m9o+S7o)];continue;}
}
if(bordersOn){var x0=Math[J8l](prevRight+Math[J8l](negativeOffset)+self[Y3g])+.5,x1=Math[J8l](prevRight+self[I4l][f7g]+Math[J8l](negativeOffset)+self[Y3g])+.5;x0=Math[A0o](x0,farLeft);}
else{var x0=Math[J8l](B5O[Z3o](i,self[I4l][f7g])+self[Y3g]),x1=x0+self[o5t];}
context.moveTo(x0+.5,b);context.lineTo(x1,b);context.lineTo(x1,top);context.lineTo(x0,top);if(borders){if(B5O[(A6n)](prevTop,top)||B5O[M3g](i,0))context.lineTo(x0,prevTop);}
else{context.lineTo(x0,b);}
prevTop=top;prevRight+=self[I4l][f7g];}
if(!borders)context.fill();context.strokeStyle=borderColor;if(borders)context.stroke();context.closePath();}
drawBars("stx_volume_underlay_up",false);drawBars((T9o+j4t+Q4l+c4o+y7o+Y9o+k0v+m9o+b0t),false);if(B5O[k6I](this[I4l][(B5O.r3o+m1I+l6t+W3o+V4o+X8l+m9o+S7o)],3)&&bordersOn){drawBars("stx_volume_underlay_up",true);drawBars("stx_volume_underlay_down",true);}
context.globalAlpha=1;}
;STXChart.prototype.startClip=function(panel){var c5l="H5u";if(!panel)panel=E6v;var c=this[p3n][panel];this[E6v][x3t].save();this[E6v][x3t].beginPath();if(c[(O1l+v5O)]){this[E6v][x3t].rect(0,c.top,this[E6v].width,B5O[(c7I+n5n+c4o)](c[b4O][k5l],c.yAxis.top));}
else{this[(B5O.r3o+p8l+B7o)][x3t].rect(0,c.top,this[E6v].width,B5O[c5l](c[k5l],c.top));}
this[E6v][x3t].clip();}
;STXChart.prototype.endClip=function(){this[E6v][x3t].restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(chart,fillColor,borderColor,condition){var m2n="J1u",e5l="y1u",g7o="p1u",R7v="v1u",l1n="L1u",j8o="D1u",F8l="h1u",X0R="T0u",G9v="P0u",b3o="f0u",G7l="u0u",P9n="e0u",W0t="Q0u",D3v="c0u",S3t="a0u",f5l="g0u",z8O="F0u",p7O="r0u",g0v="W0u",E5n="k0u",f7n="C0u",L4v="m5u",L2o="E5u",y9n="B5u",H6g="Y5u",D2l="o5u",quotes=chart[J4I],context=this[E6v][x3t],panel=chart[L0t],t=panel.yAxis.top,b=panel[b4O][k5l],top,bottom,length,borderOffset=0;if(!STX[U4v](borderColor))borderOffset=.5;var leftTick=B5O[D2l](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v];context.beginPath();context.fillStyle=fillColor;var yAxis=panel[b4O];for(var x=0;B5O[(H6g)](x,quotes.length);x++){var quote=quotes[x];if(B5O[y9n](quote,null))continue;if(quote[U4l])continue;if(B5O[L2o](quote[T2l],quote[X5g]))continue;if(B5O[L4v](condition,STXChart[A6t])&&B5O[f7n](quote[T2l],quote[X5g]))continue;if(B5O[E5n](condition,STXChart[c3O])&&B5O[(B5O.G4o+w2O+c4o)](quote[(V7I+U4O)],quote[X5g]))continue;if(B5O[g0v](condition,STXChart[x7v])&&B5O[p7O](quote[X5g],quote[(X8l+T2o+N2o+T2n+i5g+B5O.Z7o+F2o+W3o)]))continue;if(B5O[z8O](condition,STXChart[T7t])&&B5O[f5l](quote[X5g],quote[H7O]))continue;if(B5O[S3t](condition,STXChart[i9n])&&B5O[(S7v+c4o)](quote[(m8l+F2o+W3o)],quote[H7O]))continue;if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[D3v](tick,panel[R1g])||B5O[(y4I+c4o)](tick,panel[U0R])||!cache[j2g]){var o=(yAxis[l9R]?this[x8n](quote[T2l],panel):(B5O[W0t]((yAxis[R1v]-quote[T2l]),yAxis[v9o]))+yAxis.top),c=(yAxis[l9R]?this[x8n](quote[X5g],panel):(B5O[P9n]((yAxis[R1v]-quote[(h6I+W3o)]),yAxis[v9o]))+yAxis.top);top=Math[J8l](Math[h7I](o,c))+borderOffset;bottom=Math[(A0o)](o,c);length=Math[(E8l+e7o+B5O.Z7o+J8t)](B5O[G7l](bottom,top));if(B5O[b3o](top,t)){if(B5O[G9v](top+length,t)){cache[j2g]=top;cache[p6o]=top;continue;}
length-=B5O[X0R](t,top);top=t;}
if(B5O[F8l](top+length,b)){length-=(top+length-b);}
length=Math[A0o](length,2);cache[j2g]=top;cache[p6o]=cache[j2g]+length;}
if(B5O[j8o](cache[j2g],b))continue;if(B5O[l1n](cache[p6o],t))continue;var x0=Math[J8l](B5O[R7v](x,this[I4l][f7g])+this[Y3g])+borderOffset,x1=x0+this[o5t]-(B5O[g7o](borderOffset,2));if(B5O[e5l](quote[T2l],quote[X5g])){top=B5O[m2n](Math[Q6v](cache[j2g]),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache[j2g]);context.lineTo(x1,cache[j2g]);context.lineTo(x1,cache[(g1l+x2I)]);context.lineTo(x0,cache[p6o]);context.lineTo(x0,cache[j2g]);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
context.closePath();}
;STXChart.prototype.drawCandles=function(chart,colorFunction,isOutline){var S4O="R4u",a5v="G4u",i8t="U4u",k0R="q4u",I7v="M4u",H3v="N4u",n5R="s4u",p1n="A4u",l0t="V4u",L3n="K4u",P6I="O4u",o8v="j1u",P5v="d1u",v7t="X1u",H4v="n1u",S1n="l1u",L7O="b1u",d0l="i1u",quotes=chart[J4I],context=this[E6v][x3t],panel=chart[(H8R+V0t)],t=panel.yAxis.top,b=panel[b4O][k5l],top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0,leftTick=B5O[d0l](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v],yAxis=panel[b4O];for(var x=0;B5O[L7O](x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(B5O[S1n](quote,null))continue;if(quote[U4l])continue;if(!quote[(o4I+W3o+y7o)]&&B5O[H4v](quote[(o4I+H6n)],0))continue;if(B5O[v7t](quote[T2l],quote[(X5g)]))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.fillStyle=fillColor;if(!STX[U4v](borderColor))borderOffset=.5;if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[(A5t+c4o)](tick,panel[R1g])||B5O[P5v](tick,panel[U0R])||!cache[j2g]){var o=(yAxis[l9R]?this[x8n](quote[T2l],panel):(B5O[(G1l+K7O+c4o)]((yAxis[R1v]-quote[T2l]),yAxis[v9o]))+yAxis.top),c=(yAxis[l9R]?this[x8n](quote[(X5g)],panel):(B5O[(y1l+K7O+c4o)]((yAxis[R1v]-quote[X5g]),yAxis[v9o]))+yAxis.top);top=Math[J8l](Math[h7I](o,c))+borderOffset;bottom=Math[A0o](o,c);length=Math[(E8l+e7o+R5t+B5O.E4o)](B5O[o8v](bottom,top));if(B5O[P6I](top,t)){if(B5O[L3n](top+length,t)){cache[j2g]=top;cache[p6o]=top;continue;}
length-=B5O[l0t](t,top);top=t;}
if(B5O[p1n](top+length,b)){length-=(top+length-b);}
length=Math[A0o](length,2);cache[j2g]=top;cache[(g1l+x2I)]=cache[(B5O.Z7o+c2o+H6n)]+length;}
if(B5O[n5R](cache[j2g],b))continue;if(B5O[H3v](cache[p6o],t))continue;var x0=Math[J8l](B5O[I7v](x,this[I4l][f7g]))+borderOffset+this[Y3g],x1=x0+this[o5t]-(B5O[k0R](borderOffset,2));if(B5O[i8t](quote[T2l],quote[X5g])){top=B5O[a5v](Math[Q6v](cache[j2g]),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache[j2g]);context.lineTo(x1,cache[j2g]);context.lineTo(x1,cache[p6o]);context.lineTo(x0,cache[p6o]);context.lineTo(x0,cache[j2g]);}
if(B5O[S4O](fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(chart,style,condition){var X1l="J7u",W7t="7u",m6O="p7u",Y7n="emiL",U9n="v7u",M1l="L7u",E4I="ixe",k2l="D7u",x9O="h7u",J0v="T2u",C4l="P2u",b4g="f2u",E1I="u2u",z8v="e2u",f0g="Q2u",E4l="lti",D7O="Z2u",n1g="c2u",z4n="S2u",K0g="a2u",p5n="g2u",A9o="F2u",U7o="r2u",y1g="2u",a4o="t2u",Q3l="k2u",q9g="C2u",b0O="m4u",o8g="E4u",G1O="B4u",i6n="Y4u",g4o="o4u",F5o="H4u",Y8n="I4u",quotes=chart[J4I],context=this[E6v][x3t],panel=chart[L0t];context.lineWidth=1;var t=panel.yAxis.top,b=panel[b4O][k5l],top,bottom,left,leftTick=B5O[Y8n](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[(L6o+z9o+y1l+w3v+s3g+F2o)];context.beginPath();var yAxis=panel[b4O],centerOffset=B5O[F5o](this[o5t],2);for(var x=0;B5O[g4o](x,quotes.length);x++){var quote=quotes[x];if(B5O[i6n](quote,null))continue;if(quote[U4l])continue;if(condition){if(B5O[G1O](condition,STXChart[A6t])&&B5O[o8g](quote[T2l],quote[X5g]))continue;else if(B5O[b0O](condition,STXChart[c3O])&&B5O[q9g](quote[T2l],quote[X5g]))continue;else if(B5O[Q3l](condition,STXChart[x7v])&&B5O[a4o](quote[X5g],quote[H7O]))continue;else if(B5O[(V4o+y1g)](condition,STXChart[T7t])&&B5O[U7o](quote[X5g],quote[H7O]))continue;else if(B5O[A9o](condition,STXChart[i9n])&&B5O[p5n](quote[X5g],quote[H7O]))continue;}
if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[K0g](tick,panel[R1g])||B5O[z4n](tick,panel[U0R])||!cache.top){top=(yAxis[l9R]?this[x8n](quote[c2I],panel):(B5O[n1g]((yAxis[R1v]-quote[c2I]),yAxis[v9o]))+yAxis.top);bottom=(yAxis[l9R]?this[x8n](quote[(P8v+G1l)],panel):(B5O[D7O]((yAxis[R1v]-quote[l1O]),yAxis[(L6o+c4o+E4l+c2o+e7o+L5l)]))+yAxis.top);var length=B5O[f0g](bottom,top);if(B5O[z8v](top,t)){if(B5O[E1I](top+length,t)){cache.top=top;cache[k5l]=top;continue;}
length-=B5O[b4g](t,top);top=t;}
if(B5O[C4l](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[k5l]=cache.top+length;}
if(B5O[J0v](cache.top,b))continue;if(B5O[x9O](cache[k5l],t))continue;var xx=Math[J8l](Math[J8l](B5O[k2l](x,this[I4l][f7g])+this[(L6o+X8l+B5O.r3o+B5O.E4o+B5O.Z7o+c2o+E4I+P3O)])+centerOffset)+.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache[k5l]);if(B5O[M1l](quote[T2l],quote[X5g])){var x0=B5O[U9n](xx,this[F9v]),x1=xx+this[F9v],o=(yAxis[(F2o+Y7n+B5O.Z7o+V9l)]?this[x8n](quote[T2l],panel):(B5O[(m6O)]((yAxis[R1v]-quote[T2l]),yAxis[v9o]))+yAxis.top);if(B5O[(O1l+W7t)](o,b)&&B5O[X1l](o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this[J8o](style);context.stroke();context.closePath();}
;STXChart.prototype.drawShadows=function(chart,colorFunction){var n2t="I6u",r6o="R6u",H5R="G6u",L7g="U6u",h5l="q6u",l4n="M6u",k5R="N6u",k8v="s6u",W7l="6u",Y7O="V6u",h6l="K6u",y3g="O6u",f3O="j7u",H3n="x7u",x8g="w7u",O9R="d7u",Z1O="z7u",K3n="X7u",E1o="n7u",h1o="l7u",G5g="b7u",j1n="i7u",quotes=chart[J4I],context=this[E6v][x3t],panel=chart[(n7t+y7o+W3o+e7o)];context.lineWidth=1;var t=panel.yAxis.top,b=panel[b4O][k5l],top,bottom,left,leftTick=B5O[j1n](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v],yAxis=panel[b4O];for(var x=0;B5O[G5g](x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(B5O[h1o](quote,null))continue;if(quote[U4l])continue;var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[E1o](tick,panel[R1g])||B5O[K3n](tick,panel[U0R])||!cache.top){top=(yAxis[l9R]?this[x8n](quote[c2I],panel):(B5O[Z1O]((yAxis[R1v]-quote[c2I]),yAxis[v9o]))+yAxis.top);bottom=(yAxis[l9R]?this[(H4t+y1l+v3t+q4g+N2o+X8l+H3g)](quote[l1O],panel):(B5O[O9R]((yAxis[R1v]-quote[l1O]),yAxis[v9o]))+yAxis.top);var length=B5O[x8g](bottom,top);if(B5O[H3n](top,t)){if(B5O[f3O](top+length,t)){cache.top=top;cache[k5l]=top;continue;}
length-=B5O[y3g](t,top);top=t;}
if(B5O[h6l](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[k5l]=cache.top+length;}
if(B5O[Y7O](cache.top,b))continue;if(B5O[(R3n+W7l)](cache[k5l],t))continue;var xx=Math[J8l](Math[J8l](B5O[k8v](x,this[I4l][f7g]))+(B5O[k5R](this[o5t],2))+this[Y3g])+.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache[k5l]);if(B5O[l4n](quote[T2l],quote[X5g])||(!quote[T2l]&&B5O[h5l](quote[T2l],0))){var x0=B5O[L7g](xx,this[F9v]),x1=xx+this[(F9v)],o=Math[J8l]((yAxis[l9R]?this[x8n](quote[X5g],panel):(B5O[H5R]((yAxis[R1v]-quote[X5g]),yAxis[v9o]))+yAxis.top))+.5;if(B5O[r6o](o,b)&&B5O[n2t](o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(chart){var Q9O="k8k",i4l="mi",e8v="C8k",w4g="m6u",L4I="E6u",b5o="B6u",O7O="Scatter",W6v="Y6u",E9g="pro",t4O="o6u",N3g="H6u",quotes=chart[J4I],context=this[E6v][x3t];context.beginPath();context.lineWidth=4;var t=chart.panel.yAxis.top,b=chart[L0t][(b4O)][k5l];for(var x=0;B5O[N3g](x,quotes.length);x++){var quote=quotes[x];if(B5O[t4O](quote,null))continue;if(!quote[(E9g+g6o+R7g+X8l+d5t)]){if(quote.transform)quote=quote.transform;var scatter=[quote[X5g]];if(B5O[W6v]("Scatter",quote))scatter=quote[O7O];for(var i=0;B5O[b5o](i,scatter.length);i++){var top=this[x8n](scatter[i],chart[L0t]);if(B5O[(L4I)](top,t))continue;if(B5O[w4g](top,b))continue;var xx=B5O[e8v](x,this[I4l][f7g])+this[(i4l+B5O.r3o+B5O.E4o+Z5t+X8l+y1l+V0t+F2o)],xxo=xx+this[F9v];context.moveTo(B5O[Q9O](xxo,2),top);context.lineTo(xxo+2,top);}
}
}
this[(B5O.r3o+m1I+r1O+F2o+v4t)]("stx_scatter_chart");context.stroke();context.closePath();}
;STXChart.prototype.drawKagiSquareWave=function(chart,upStyleName,downStyleName){var Y5v="v9k",x8o="L9k",C3l="D9k",T4I="h9k",e7I="T8k",F5t="P8k",v8v="u8k",y7I="e8k",f7t="Q8k",K9g="Z8k",u0O="c8k",H1O="S8k",z6O="a8k",G3o="g8k",V7O="F8k",O6l="r8k",G3R="W8k",h4v="t8k";this[W8O](chart[L0t][F2g]);var quotes=chart[J4I],panel=chart[L0t],context=chart[x3t],upStyle=this[e9v](upStyleName),downStyle=this[e9v](downStyleName);this[J8o](upStyleName);var upColor=context.strokeStyle;this[J8o](downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&B5O[h4v](parseInt(upStyle.width,10),25)){upWidth=Math[(L6o+z9o+y1l)](1,STX[y3o](upStyle.width));}
var downWidth=1;if(downStyle.width&&B5O[G3R](parseInt(downStyle.width,10),25)){downWidth=Math[A0o](1,STX[y3o](downStyle.width));}
context.beginPath();var leftTick=B5O[O6l](chart[e2O].length,chart[u3O]),yAxis=panel[b4O],first=true,previousOpen=null,lastClose=null,trend=null;for(var x=0;B5O[V7O](x,quotes.length);x++){var quote=quotes[x];if(B5O[G3o](quote,null))continue;if(quote[U4l])break;if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[z6O](tick,panel[R1g])||B5O[H1O](tick,panel[U0R])||!cache[j2g]){cache[j2g]=(yAxis[l9R]?this[x8n](quote[T2l],panel):(B5O[u0O]((yAxis[R1v]-quote[T2l]),yAxis[v9o]))+yAxis.top);cache[p6o]=(yAxis[l9R]?this[x8n](quote[X5g],panel):(B5O[K9g]((yAxis[R1v]-quote[X5g]),yAxis[v9o]))+yAxis.top);}
var xx=B5O[f7t](x,this[(C1l+O1l+B5O.Z7o+N5O)][f7g])+this[Y3g],xxo=xx+this[F9v],xx2=Math[Q6v](xxo)+.5;lastClose=cache[p6o];if(first){context.moveTo(xx2,cache[(j2g)]);previousOpen=cache[j2g];if(B5O[y7I](cache[p6o],cache[j2g]))trend=1;else trend=-1;first=false;}
if(trend!=-1&&B5O[v8v](cache[p6o],previousOpen)&&B5O[(K2t+H6o)](previousOpen,cache[j2g])){context.lineTo(xx2,previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(xx2,previousOpen);}
else if(B5O[F5t](trend,1)&&B5O[e7I](cache[p6o],previousOpen)&&B5O[T4I](previousOpen,cache[(j2g)])){context.lineTo(xx2,previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(xx2,previousOpen);}
context.lineTo(xx2,cache[p6o]);if(B5O[C3l](x+1,quotes.length)){context.lineTo(xx2+this[I4l][(T5g+J5n+e7o+C2t+E1v+B5O.G4o+p8l)],cache[p6o]);previousOpen=cache[(B5O.Z7o+c2o+H6n)];}
}
if(trend==-1||(B5O[x8o](trend,null)&&B5O[Y5v](lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this[g9n](chart[L0t][F2g]);}
;STXChart.prototype.drawPointFigureChart=function(chart,style,condition){var E4O="C5k",u8n="m3k",w7g="E3k",y3v="B3k",d1t="Y3k",A6I="o3k",p7g="Q3k",o5O="Z3k",b3t="G3k",X7I="i3k",m8v="J3k",X6n="N3k",w2o="3k",f4o="A3k",y0R="V3k",y9l="K3k",H4O="O3k",k7O="tip",d8O="ul",Z4l="x9k",b4t="w9k",q1v="d9k",M8n="z9k",q1n="X9k",K2o="n9k",K5O="l9k",z6g="b9k",c3g="i9k",D3R="J9k",I8R="y9k",D5v="box",k4o="p9k",J5R="paddingRight",O5g="paddingLeft",t6o="gBottom",p4t="paddingTop";this[W8O](chart[L0t][F2g]);var quotes=chart[J4I],panel=chart[L0t],context=chart[x3t];this[J8o](style);var pfstyle=this[e9v](style),paddingTop=parseInt(pfstyle[p4t],10),paddingBottom=parseInt(pfstyle[(n7t+m9o+H5v+y7o+t6o)],10),paddingLeft=parseInt(pfstyle[O5g],10),paddingRight=parseInt(pfstyle[J5R],10);if(pfstyle.width&&B5O[k4o](parseInt(pfstyle.width,10),25)){context.lineWidth=Math[A0o](1,STX[y3o](pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();var box=this[E6v][w7t][D5v],leftTick=B5O[I8R](chart[e2O].length,chart[u3O]),yAxis=panel[b4O],boxes,height,start;for(var x=0;B5O[D3R](x,quotes.length);x++){var quote=quotes[x];if(B5O[c3g](quote,null))continue;if(quote[U4l])break;if(quote.transform)quote=quote.transform;if(B5O[z6g](condition,"X")&&B5O[K5O](quote[T2l],quote[X5g]))continue;else if(B5O[K2o](condition,"O")&&B5O[q1n](quote[T2l],quote[X5g]))continue;var cache=quote[S2o],tick=leftTick+x;if(B5O[M8n](tick,panel[R1g])||B5O[q1v](tick,panel[U0R])||!cache[j2g]){cache[j2g]=(yAxis[l9R]?this[x8n](quote[T2l],panel):(B5O[b4t]((yAxis[R1v]-quote[(V7I+c2o+H6n)]),yAxis[v9o]))+yAxis.top);cache[p6o]=(yAxis[l9R]?this[x8n](quote[X5g],panel):(B5O[Z4l]((yAxis[R1v]-quote[X5g]),yAxis[(L6o+d8O+k7O+e7o+H1v+B5O.E4o)]))+yAxis.top);}
var xx=B5O[(g6o+d0n+H6o)]((x-0.5),this[(Q7t+c4o+B5O.G4o)][f7g])+this[Y3g]+this[F9v],xxl=Math[Q6v](xx)+.5,xxr=xxl+Math[Q6v](this[I4l][f7g])-.5;boxes=Math[y8l](Math[Q6v](B5O[H4O]((quote[X5g]-quote[T2l]),box)));height=Math[(P3o+F2o)](B5O[y9l]((cache[j2g]-cache[p6o]),boxes));var offset=B5O[y0R](height,2);start=cache[j2g];for(;B5O[f4o](boxes,0);boxes--){if(B5O[(F2o+w2o)](condition,"X")){context.moveTo(xxl+paddingLeft,B5O[X6n](start,paddingBottom,offset));context.lineTo(B5O[m8v](xxr,paddingRight),B5O[X7I](start,height,paddingTop,offset));context.moveTo(xxl+paddingLeft,B5O[b3t](start,height,paddingTop,offset));context.lineTo(B5O[o5O](xxr,paddingRight),B5O[p7g](start,paddingBottom,offset));start-=height;}
else if(B5O[A6I](condition,"O")){context.moveTo(B5O[d1t]((xxl+xxr),2),start+paddingTop-offset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-offset,xxr+paddingRight,start+height-paddingBottom-offset,B5O[y3v]((xxl+xxr),2),start+height-paddingBottom-offset);context.bezierCurveTo(B5O[w7g](xxl,paddingLeft),start+height-paddingBottom-offset,B5O[u8n](xxl,paddingLeft),start+paddingTop-offset,B5O[E4O]((xxl+xxr),2),start+paddingTop-offset);start+=height;}
}
}
context.stroke();this[g9n](chart[L0t][F2g]);}
;STXChart.prototype.drawBarChartHighPerformance=function(chart,style,condition){var y4v="d0k",A6O="z0k",w9t="X0k",Q5R="n0k",I2t="l0k",a6o="ott",G5R="i0k",g9g="J0k",p8o="y0k",d5v="0k",N1t="v0k",H9R="L0",C5l="D0k",I4t="romP",f6l="h0k",s9n="T5k",W5R="P5k",x7n="lie",w6O="5k",M6v="u5k",F1v="e5k",N5o="Q5k",g9o="Z5k",P0l="c5k",B8R="S5k",B2n="a5k",b6t="UP",x5R="SE",q6t="g5k",M4v="F5k",L6t="r5",W2o="W5k",s3n="t5k",K7g="ripP",j6g="k5k",d1l="taSe",quotes=chart[(m9o+z9o+d1l+V9l+X2l+b6O)],panel=chart[L0t],context=chart[x3t],c=this[e9v](style);if(c.width&&B5O[j6g](parseInt(c.width,10),25)){context.lineWidth=Math[A0o](1,STX[(T9o+K7g+Y1o)](c.width));}
else{context.lineWidth=1;}
var widthOffset=B5O[s3n](context.lineWidth,2);context.beginPath();var t=panel.yAxis.top,b=panel[b4O][k5l],top,bottom,length,leftTick=B5O[(W2o)](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v],yAxis=panel[b4O];for(var x=0;B5O[(L6t+H6o)](x,quotes.length);x++){var quote=quotes[x];if(B5O[M4v](quote,null))continue;if(quote[U4l])break;if(condition){if(B5O[q6t](condition,STXChart[(B5O.T9n+n6I+V7I+x5R+b6t)])&&B5O[B2n](quote[(m8l+F2o+W3o)],quote[H7O]))continue;else if(B5O[B8R](condition,STXChart[T7t])&&B5O[P0l](quote[X5g],quote[H7O]))continue;else if(B5O[g9o](condition,STXChart[i9n])&&B5O[N5o](quote[X5g],quote[H7O]))continue;}
if(quote.transform)quote=quote.transform;var cache=quote[(B5O.r3o+i5o+p8l+W3o)],tick=leftTick+x;if(B5O[F1v](tick,panel[R1g])||B5O[M6v](tick,panel[U0R])||!cache.top){top=(yAxis[l9R]?this[x8n](quote[c2I],panel):(B5O[(E8l+w6O)]((yAxis[R1v]-quote[(c2I)]),yAxis[(d4n+B5O.G4o+X8l+c2o+x7n+B5O.E4o)]))+yAxis.top);bottom=(yAxis[l9R]?this[x8n](quote[l1O],panel):(B5O[W5R]((yAxis[R1v]-quote[(P8v+G1l)]),yAxis[v9o]))+yAxis.top);var length=B5O[s9n](bottom,top);cache[(Z5t+H6n)]=(yAxis[l9R]?this[x8n](quote[(o4I+H6n)],panel):(B5O[f6l]((yAxis[R1v]-quote[T2l]),yAxis[v9o]))+yAxis.top);cache[p6o]=(yAxis[l9R]?this[(P5R+v3t+I4t+B5O.E4o+s4g)](quote[X5g],panel):(B5O[C5l]((yAxis[R1v]-quote[X5g]),yAxis[v9o]))+yAxis.top);if(B5O[(H9R+H6o)](top,t)){if(B5O[N1t](top+length,t)){cache.top=top;cache[k5l]=top;continue;}
length-=B5O[(c2o+d5v)](t,top);top=t;}
if(B5O[p8o](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[k5l]=top+length;}
var xx=B5O[g9g](x,this[I4l][f7g])+this[(L6o+V7v+c1g+X8l+y1l+W3o+e7o+F2o)],xxo=xx+this[F9v],xx2=Math[Q6v](xxo)+.5;if(B5O[G5R](cache.top,b)&&B5O[(S4o+H6o)](cache[(i9o+a6o+B5O.Z7o+L6o)],t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache[k5l]);}
if(B5O[I2t](cache[j2g],t)&&B5O[Q5R](cache[j2g],b)){context.moveTo(xx,cache[j2g]);context.lineTo(xx2+widthOffset,cache[j2g]);}
if(B5O[w9t](cache[p6o],t)&&B5O[A6O](cache[p6o],b)){context.moveTo(B5O[y4v](xx2,widthOffset),cache[p6o]);context.lineTo(xxo+this[F9v],cache[p6o]);}
}
this[J8o](style);context.stroke();context.closePath();}
;STXChart.prototype.drawBarChart=function(chart,style,colorFunction){var D1v="k4k",b7I="C4k",l9l="m1k",Z2t="E1k",z3R="B1k",P3n="Y1k",u3g="o1k",F1t="H1k",Z9o="I1k",O4n="R1k",N9O="G1k",O7I="U1k",i0t="q1k",f5g="iL",A0R="ip",M6O="M1k",o4l="N1k",E1t="mPrice",D5R="elFr",L0o="s1k",M1o="A1k",q1g="V1k",n2n="ctio",P8l="K1k",b1t="O1k",J4O="j0k",p9l="x0k",e0n="w0k",quotes=chart[J4I],panel=chart[L0t],context=chart[x3t],c=this[e9v](style);if(c.width&&B5O[(e0n)](parseInt(c.width,10),25)){context.lineWidth=Math[A0o](1,STX[y3o](c.width));}
else{context.lineWidth=1;}
var widthOffset=B5O[p9l](context.lineWidth,2),t=panel.yAxis.top,b=panel[b4O][(H7g+B5O.Z7o+L6o)],top,bottom,length,leftTick=B5O[J4O](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v],yAxis=panel[b4O],colors={}
;for(var x=0;B5O[b1t](x,quotes.length);x++){var quote=quotes[x];if(B5O[P8l](quote,null))continue;if(quote[(c2o+h0R+g6o+W3o+n2n+y7o)])break;var color=colorFunction(this,quote);if(B5O[q1g](color,null))continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+x;if(B5O[M1o](tick,panel[R1g])||B5O[L0o](tick,panel[U0R])||!cache.top){top=this[(P5R+D5R+B5O.Z7o+E1t)](quote[c2I],panel);bottom=this[x8n](quote[l1O],panel);var length=B5O[o4l](bottom,top);cache[j2g]=(yAxis[l9R]?this[x8n](quote[T2l],panel):(B5O[M6O]((yAxis[R1v]-quote[T2l]),yAxis[(n3n+e7o+B5O.G4o+A0R+e7o+L5l)]))+yAxis.top);cache[p6o]=(yAxis[(x2I+L6o+f5g+w4n)]?this[x8n](quote[X5g],panel):(B5O[i0t]((yAxis[(A3R+p8l)]-quote[X5g]),yAxis[(L6o+c4o+e7o+B5O.G4o+A0R+X2o+W3o+B5O.E4o)]))+yAxis.top);if(B5O[O7I](top,t)){if(B5O[N9O](top+length,t)){cache.top=top;cache[k5l]=top;continue;}
length-=B5O[O4n](t,top);top=t;}
if(B5O[Z9o](top+length,b)){length-=(top+length-b);}
cache.top=top;cache[k5l]=top+length;}
var xx=B5O[F1t](x,this[I4l][f7g])+this[Y3g],xxo=xx+this[F9v],xx2=Math[(h0R+c4o+J5n)](xxo)+.5;if(B5O[u3g](cache.top,b)&&B5O[P3n](cache[k5l],t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache[k5l]);}
if(B5O[z3R](cache[j2g],t)&&B5O[Z2t](cache[j2g],b)){context.moveTo(xx,cache[j2g]);context.lineTo(xx2+widthOffset,cache[j2g]);}
if(B5O[l9l](cache[p6o],t)&&B5O[(b7I)](cache[p6o],b)){context.moveTo(B5O[D1v](xx2,widthOffset),cache[p6o]);context.lineTo(xxo+this[(B5O.Z7o+E8l+E8l+K0O)],cache[p6o]);}
context.stroke();}
return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var k8R="labelDecimalPlaces",i9t="J2k",A9g="p2k",E3g="v2k",X7t="L2k",v0R="D2k",U1l="iLo",G2I="h2k",C6I="4k",x0o="P4k",V5v="f4k",d9l="u4k",K4g="e4k",N5l="Q4k",J9l="Z4k",A2o="c4k",I6v="S4k",s1n="Right",R6g="a4k",a9t="g4k",v2g="F4k",J7v="r4k",r7I="W4k",C5O="t4k",U1O="con",c1n="noSlopes",q8n="skipTransform",skipProjections=false,skipTransform=false,noSlopes=false;if(parameters){skipProjections=parameters[Y7I];skipTransform=parameters[q8n];noSlopes=parameters[c1n];}
var chart=panel[E6v],context=this[E6v][(U1O+H4o+y1l+B5O.G4o)],first=true,yAxis=panel[b4O],t=yAxis.top,b=yAxis[k5l],leftTick=B5O[C5O](chart[e2O].length,chart[u3O]),rightTick=leftTick+chart[z1v],lastVal=null,colors={}
,lastXY=[0,0],clipping=false;context.beginPath();for(var i=0;B5O[r7I](i,quotes.length);i++){var quote=quotes[i];if(B5O[J7v](quote,null))continue;if(skipProjections&&quote[U4l])break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+i;if(!quote[field]&&B5O[v2g](quote[field],0))continue;lastVal=quote[field];if(B5O[a9t](tick,panel[R1g])||B5O[R6g](tick,panel[(T5g+V5g+W3o+s1n)])||!cache[field]){cache[field]=(yAxis[l9R]?this[x8n](lastVal,panel):(B5O[I6v]((yAxis[R1v]-lastVal),yAxis[v9o]))+yAxis.top);}
var x=B5O[A2o](i,this[I4l][f7g])+this[F9v]+this[Y3g];if(this[p4O]&&B5O[J9l](i,quotes.length-1)){x+=this[F9v];}
var y=cache[field];if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(B5O[N5l](context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(!clipping&&(B5O[K4g](y,t)||B5O[d9l](y,b))){clipping=true;if(!first){context.stroke();}
context.save();context.beginPath();context.rect(this[(E6v)][h3l],t,this[E6v].width,B5O[V5v](b,t));context.clip();context.beginPath();if(!first)context.moveTo(lastXY[0],lastXY[1]);}
if(first){first=false;if(noSlopes||B5O[x0o](leftTick,0)){context.moveTo(x,y);}
else if(B5O[(p2I+C6I)](leftTick,0)){var baseline=chart[e2O][B5O[G2I](leftTick,1)];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis[(F2o+W3o+L6o+U1l+V9l)]?this[x8n](y0,panel):(B5O[v0R]((yAxis[R1v]-y0),yAxis[(d4n+B5O.G4o+X8l+j3v+H1v+B5O.E4o)]))+yAxis.top);y0=Math[h7I](Math[A0o](y0,t),b);context.moveTo(B5O[X7t]((i-1),this[I4l][f7g])+this[F9v]+this[Y3g],y0);context.lineTo(x,y);}
}
else{if(noSlopes){var quote1=quotes[B5O[E3g](i,1)];if(B5O[A9g](quote1,null))continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i&&B5O[(S8v+H6o)](y,quote1[S2o][field])){context.lineTo(x,lastXY[1]);context.moveTo(x,y);}
else{context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
}
lastXY=[x,y];}
context.stroke();if(clipping)context.restore();if(parameters[(e7o+P3o+V0t)]&&B5O[i9t](lastVal,null)){var txt;if(yAxis[v0t]){txt=yAxis[v0t](this,panel,lastVal,parameters[k8R]);}
else{txt=this[H3O](lastVal,panel,parameters[k8R]);}
this[d7n](panel,txt,y,context.strokeStyle,"#FFFFFF");}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var E3t="M7k",P6g="N7k",B3n="s7k",W0g="A7k",h0n="V7k",p7t="K7k",l0R="O7k",c2t="j2k",k2g="x2k",E3n="w2k",L2n="d2k",Z6o="z2k",Q0g="X2k",i8v="n2k",B8t="l2k",x7l="b2k",K6o="i2k",B9v="nsf",K8t="pT",skipProjections=false,skipTransform=false;if(parameters){skipProjections=parameters[Y7I];skipTransform=parameters[(F2o+H6o+X8l+K8t+A8R+B9v+X4g)];}
var chart=panel[E6v],context=this[E6v][x3t],first=true,t=panel.yAxis.top,b=panel[(b4O)][k5l];context.save();context.beginPath();context.rect(0,t,this[E6v].width,B5O[K6o](b,t));context.clip();context.beginPath();var leftTick=B5O[x7l](chart[e2O].length,chart[u3O]),firstX=null,firstY=null,yAxis=panel[b4O],x=0;for(var i=0;B5O[B8t](i,quotes.length);i++){var quote=quotes[i];if(B5O[i8v](quote,null))continue;if(skipProjections&&quote[U4l])break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote[S2o],tick=leftTick+i;if(B5O[Q0g](tick,panel[R1g])||B5O[Z6o](tick,panel[U0R])||!cache[field]){if(!quote[field]&&B5O[(L2n)](quote[field],0))continue;cache[field]=(yAxis[l9R]?this[x8n](quote[field],panel):(B5O[E3n]((yAxis[R1v]-quote[field]),yAxis[v9o]))+yAxis.top);}
x=B5O[k2g](i,this[I4l][f7g])+this[F9v]+this[Y3g];if(this[p4O]&&B5O[c2t](i,quotes.length-1)){x+=this[F9v];}
if(B5O[l0R](firstX,null))firstX=x;var y=cache[field];if(B5O[p7t](firstY,null))firstY=y;if(first){first=false;if(B5O[h0n](leftTick,0)){context.moveTo(x,y);}
else{var baseline=chart[e2O][B5O[W0g](leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis[l9R]?this[x8n](y0,panel):(B5O[B3n]((yAxis[R1v]-y0),yAxis[v9o]))+yAxis.top);y0=Math[h7I](Math[A0o](y0,t),b);firstX=B5O[P6g](this[F9v],this[I4l][f7g]);context.moveTo(firstX,y0);context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
}
context.lineTo(x,b);context.lineTo(firstX,b);if(B5O[E3t](firstY,b))firstY=b;context.lineTo(firstX,firstY);context.fill();context.closePath();context.restore();}
;STXChart.prototype.drawLineChart=function(chart,style,colorFunction){var Y1t="7k",context=this[E6v][x3t],c=this[e9v](style);if(c.width&&B5O[(T2o+Y1t)](parseInt(c.width,10),25)){context.lineWidth=Math[(L6o+z9o+y1l)](1,STX[y3o](c.width));}
else{context.lineWidth=1;}
this[J8o](style);return this[I6n](chart[L0t],chart[J4I],"Close",{skipProjections:true}
,colorFunction);}
;STXChart.prototype.drawMountainChart=function(chart){var Z6g="R7k",s9v="plotMountainChart",u1l="G7k",l4v="U7k",A7o="ntain_",X4t="tx_mo",z1O="ext",context=this[E6v][(B5O.r3o+d5t+B5O.G4o+z1O)],c=this[e9v]((F2o+X4t+c4o+A7o+B5O.r3o+B5O.w2t+B5O.E4o+B5O.G4o));if(c.width&&B5O[l4v](parseInt(c.width,10),25)){context.lineWidth=Math[A0o](1,STX[y3o](c.width));}
else{context.lineWidth=1;}
var panel=this[E6v][L0t],top=this[x8n](this[E6v][t9g],panel);if(isNaN(top))top=0;var backgroundColor=c["backgroundColor"],color=c["color"];if(color&&B5O[u1l](color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel[b4O][k5l]);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
this[s9v](panel,chart[(m9o+z9o+v7O+g5t+X2l+y7o+B5O.G4o)],"Close",{skipProjections:true}
);var strokeStyle=c["borderTopColor"];if(strokeStyle&&B5O[Z6g](strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this[I6n](panel,chart[J4I],"Close",{skipProjections:true}
);}
}
;STXChart.prototype.drawWaveChart=function(chart){var V1O="L89",P3R="sS",C2O="D89",m9t="h8",n9O="T6k",y5g="P6k",i0n="f6k",S7g="u6k",K0l="e6k",I7l="6k",v1o="c6k",t4o="S6k",g8O="a6",b9g="g6k",q7t="F6k",Z7n="r6k",y5t="ayou",h6t="W6k",B4n="t6k",t7n="k6k",F0n="C6k",E3R="m7k",D6O="E7k",S6I="B7k",Z5g="Y7k",j9n="o7k",F7g="H7k",n5g="I7k",quotes=chart[J4I],panel=chart[L0t],context=this[E6v][x3t];context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel[b4O][k5l];for(var i=0;B5O[n5g](i,quotes.length);i++){var quote=quotes[i];if(B5O[F7g](quote,null))continue;if(quote[U4l])break;if(quote.transform)quote=quote.transform;var x=B5O[j9n](i,this[I4l][f7g])+this[(F9v)]+this[Y3g],y=this[x8n](quote[T2l],panel);if(B5O[Z5g](y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(B5O[S6I](y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=B5O[D6O](chart[e2O].length,chart[u3O]);if(B5O[E3R](leftTick,0)){context.moveTo(x,y);}
else if(B5O[F0n](leftTick,0)){var baseline=chart[e2O][B5O[t7n](leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline[(X5g)];y0=(panel[b4O][l9R]?this[x8n](y0,panel):(B5O[B4n]((panel[b4O][R1v]-y0),panel[b4O][v9o]))+t);y0=Math[h7I](Math[A0o](y0,t),b);context.moveTo(B5O[h6t]((i-1),this[(e7o+y5t+B5O.G4o)][f7g])+this[F9v]+this[Y3g],y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=B5O[Z7n](this[I4l][f7g],4);if(B5O[q7t](quote[(o4I+H6n)],quote[X5g])){y=this[x8n](quote[l1O],panel);if(B5O[b9g](y,t))y=t;if(B5O[(g8O+H6o)](y,b))y=b;context.lineTo(x,y);x+=B5O[t4o](this[I4l][f7g],4);y=this[x8n](quote[c2I],panel);if(B5O[v1o](y,t))y=t;if(B5O[(v0o+I7l)](y,b))y=b;context.lineTo(x,y);}
else{y=this[x8n](quote[(s0l+V9l+p8l)],panel);if(B5O[(h4I+M5n+H6o)](y,t))y=t;if(B5O[K0l](y,b))y=b;context.lineTo(x,y);x+=B5O[S7g](this[I4l][f7g],4);y=this[x8n](quote[l1O],panel);if(B5O[i0n](y,t))y=t;if(B5O[y5g](y,b))y=b;context.lineTo(x,y);}
x+=B5O[n9O](this[I4l][f7g],4);y=this[x8n](quote[X5g],panel);if(B5O[(m9t+d0n)](y,t))y=t;if(B5O[C2O](y,b))y=b;context.lineTo(x,y);}
var c=this[(T5g+y7o+o1l+z9o+P3R+G5l+Z4o)]("stx_line_chart");if(c.width&&B5O[V1O](parseInt(c.width,10),25)){context.lineWidth=Math[A0o](1,STX[y3o](c.width));}
else{context.lineWidth=1;}
this[J8o]("stx_line_chart");context.stroke();context.closePath();}
;STXChart.prototype.updateFloatHRLabel=function(panel,y,txt){var V2I="getElementsByTagName",Y9R="renderedWidth",N0o="J89",N6l="p89",Q8n="v89",canvas=this[Y8o][R5n][O8l][0],context=canvas[x3t]=canvas[t1l]('2d'),margin=3,height=this[m5g]("stx_yaxis")+B5O[Q8n](margin,2);this[p8v]("stx_yaxis",context);if(!canvas[T7n])STX[f9o](canvas,this);var drawBorders=panel[b4O][l3o]||this[h4t],tickWidth=drawBorders?3:0;try{var width=context.measureText(txt).width+tickWidth+B5O[N6l](margin,2);}
catch(e){var Y0v="y89";width=B5O[Y0v](this[E6v][e2o],this[q7O]);}
if(!canvas[(B5O.E4o+W3o+y7o+F3v+B5O.E4o+l3t)]||B5O[N0o](canvas[Y9R],width)){STX[f9o](canvas,this);canvas[Y9R]=width;this[J8o]("stx-float-price-arrow",context);STX[this[V1g]](context,8,0,width,height,3,true,false,"left");canvas[T7n]=true;context.textBaseline="middle";}
if(STX[F7n]){var span=this[Y8o][R5n][V2I]("SPAN")[0];if(span){span.style.top="3px";span[d4v][h3l]="10px";span[d4v][H8l]=1;span[L9v]=txt;}
}
else{this[Y8o][R5n][O8l][1][d4v].width=width+"px";this[Y8o][R5n][O8l][1][L9v]=txt;}
}
;STXChart.prototype.headsUpHR=function(){var j7O="s99",g7t="A99",y6l="V99",B1t="K99",O3R="O99",t2l="89",T3o="x89",j9R="w89",t2O="updateFloatHRLabel",X2t="yA",X1o="d89",f8v="z89",X0O="X89",t1o="abe",i9g="RL",m9l="n89",g4I="l89",W3v="b89",m2t="i89";if(this[y2o]("headsUpHR",arguments))return ;var panel=this[o3o];if(!panel)return ;var chart=panel[E6v],cy=this[e1v];if(B5O[m2t](panel[F2g],(o1l+B5O.r3o+p8l+z9o+B5O.E4o+B5O.G4o))){var y=B5O[W3v](panel[k5l],cy),px=B5O[g4I](panel[s2I],panel.height),amount=panel[h7I]+B5O[m9l](y,px);this[(c4o+c2o+b2n+J3v+e7o+B5O.Z7o+B2I+O9o+i9g+t1o+e7o)](panel,y,STX[j3g](amount));}
else{var price=this[f1t](cy,panel),labelDecimalPlaces=null;if(B5O[X0O](panel[E6v][F2g],panel[F2g])){labelDecimalPlaces=0;if(B5O[f8v](panel[b4O][s2I],1000))labelDecimalPlaces=2;if(B5O[X1o](panel[(X2t+y1l+M3R)][s2I],5))labelDecimalPlaces=4;}
price=this[H3O](price,panel,labelDecimalPlaces);this[t2O](panel,cy,price);}
if(this[Y8o][e7l]){var bar=this[c3v](this[i7v]),prices=chart[O3o][bar];if(prices&&prices[x0v]){if(chart[J7o][D8v]){this[Y8o][e7l][L9v]=chart[J7o][D8v](prices[x0v]);}
else if(this[L8v]){var str=this[L8v][v9n][w5g](prices[x0v]);if(B5O[j9R](prices[x0v][j1O](),0)||B5O[T3o](prices[x0v][x2o](),0)||!STXChart[z2o](this[I4l][q3v]))str+=" "+this[L8v][L9n][w5g](prices[x0v]);this[Y8o][e7l][L9v]=str;}
else{var m=prices[x0v][B6g]()+1;if(B5O[(g6o+t2l)](m,10))m="0"+m;var d=prices[x0v][H5n]();if(B5O[O3R](d,10))d="0"+d;var h=prices[x0v][j1O]();if(B5O[(B1t)](h,10))h="0"+h;var mn=prices[x0v][x2o]();if(B5O[y6l](mn,10))mn="0"+mn;if((B5O[g7t](h,"00")&&B5O[j7O](mn,"00"))||STXChart[z2o](this[I4l][q3v]))this[Y8o][e7l][L9v]=m+"-"+d+"-"+prices[x0v][B8O]();else this[Y8o][e7l][L9v]=m+"-"+d+" "+h+":"+mn;}
}
else if(prices&&prices[v9O]){this[Y8o][e7l][L9v]=prices[(Z0R+F3v+y1l)];}
else{this[Y8o][e7l][L9v]="";}
}
this[K6g]("headsUpHR",arguments);}
;STXChart.prototype.setCrosshairColors=function(){var h7l="Vec",s7v="U99",Z1v="tor",Z0n="tVec",o9O="q99",W9v="ntV",g4t="M99",m3o="N99";return ;if(this[y2o](w3n,arguments))return ;var newClassName=h6v,oldClassName=e6n;if((STXChart[m1n]||B5O[m3o](this[w4O][E5v],W0l)||B5O[g4t](this[(d9o+j7g+W9v+W3o+h1l+x5g+M2I+l3O+c4g+F2o)][E5v],u9t)||B5O[o9O](this[(B5O.r3o+c4o+B5O.E4o+B5O.E4o+H6n+Z0n+Z1v+q7I+M2I+l4I+W3o+c4g+F2o)][E5v],U4l)||B5O[s7v](this[(B5O.r3o+c4o+B5O.E4o+F9o+h7l+B5O.G4o+B5O.Z7o+B5O.E4o+q7I+M2I+l4I+W3o+H4o+o3R)][E5v],I2n))){newClassName=e6n;oldClassName=h6v;}
if(this[Y8o][N0t][o4v][J7t](newClassName)==-B5O.i4I){STX[p0v](this[Y8o][N0t],newClassName,oldClassName);STX[p0v](this[Y8o][U5t],newClassName,oldClassName);}
this[K6g](w3n,arguments);}
;STXChart.prototype.magnetize=function(){var Q2o="ppen",C7n="runA",g0o="PI",b0o="g39",B6O="F39",R2l="r39",K9O="W39",t7I="t39",a1o="k39",U7g="C39",r4n="m99",Q2O="E99",B3l="B99",Q4o="Y99",n6n="o99",T9R="H99",K6v="I99",m2o="G99";this[V0n]=null;if(this[y2o]("magnetize",arguments))return ;if(B5O[m2o](this[w4O][E5v],"annotation")&&STXChart[m1n])return ;if(B5O[(a4I+d0n+d0n)](this[w4O][E5v],"projection"))return ;if(B5O[K6v](this[w4O][E5v],"freeform"))return ;var panel=this[o3o];if(B5O[T9R](panel[F2g],panel[E6v][(y7o+l4I+W3o)])){var chart=panel[E6v],tick=this[R4o](B5O[n6n](STXChart[H2n],this[E6v][h3l]),chart);if(B5O[Q4o](tick,chart[e2O].length))return ;var prices=chart[(J7n+C2I+Z9t)][tick];if(B5O[B3l](prices,null))return ;var price=this[f1t](this[e1v],panel);this[V0n]=prices[X5g];if(B5O[Q2O](this[I4l][c5g],"bar")||B5O[r4n](this[I4l][(V5g+B7o+p2I+O1l+c2o+W3o)],"candle")||B5O[U7g](this[I4l][c5g],"colored_bar")||B5O[a1o](this[I4l][c5g],"hollow_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;B5O[t7I](i,fields.length);i++){var fp=prices[fields[i]];if(B5O[K9O](Math[y8l](price-fp),closest)){closest=Math[y8l](B5O[R2l](price,fp));this[V0n]=fp;}
}
}
var x=this[X0l](tick,chart),y=this[x8n](this[V0n],this[o3o]),ctx=this[E6v][S5g][x3t];ctx.beginPath();ctx.lineWidth=1;var radius=B5O[B6O](Math[(H5O+y1l)](this[I4l][f7g],8),2);ctx.arc(x,y,radius,0,B5O[b0o](2,Math[g0o]),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this[(C7n+Q2o+m9o)]("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){var f3v="a39";if(!this[o3o])return ;var chart=this[o3o][E6v],tick=this[R4o](this[y0o](STXChart[H2n]),chart);this[e1v]=this[K0o](STXChart[h7n]);this[i7v]=this[y0o](STXChart[(B5O.r3o+O2I+A5o+I9g)]);this[Y8o][N0t][d4v][h3l]=(B5O[f3v](this[X0l](tick,chart),g8l))+a8v;this.controls.crossY.style.top=this[K0o](STXChart[h7n])+a8v;this[W2n]();}
;STXChart.prototype.doDisplayCrosshairs=function(){var c4n="Z39",j3t="c39",J3t="S39";if(this[y2o](x4n,arguments))return ;if(this[P7g]){if(!this[I4l][(B5O.r3o+O2I+A5o+B5O.E4o)]&&(B5O[J3t](this[w4O][E5v],r4o)||!this[w4O][E5v])){this[k2n]();}
else if(STX[N1l][this[w4O][E5v]]&&(new STX[N1l][this[w4O][E5v]])[s2v]){this[k2n]();}
else{if(B5O[j3t](this[Y8o][N0t][d4v][O2l],r4o)){this[Y8o][N0t][d4v][O2l]=r4o;this[(B5O.r3o+B5O.Z7o+y7o+W9O)][U5t][d4v][O2l]=r4o;this[Y8o][R5n][d4v][O2l]=r4o;if(this[x3l][b5v]&&B5O[c4n](this[w4O][E5v],r4o)){document[D7g][d4v][o8R]=I3v;}
else{document[(Y6g+m9o+O1l)][d4v][o8R]=o3O;}
}
if(this[Y8o][e7l]){this[Y8o][e7l][d4v][O2l]=p7v;}
}
}
this[K6g]((n9v+t8o+M3R+j3v+z9o+O1l+B5O.T9n+h0R+n8l+a5R+F2o),arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var t5O="e39",F5v="Q39";if(this[y2o](k2n,arguments))return ;if(B5O[F5v](this[Y8o][N0t],X7g)){if(B5O[t5O](this[Y8o][N0t][d4v][(m9o+O4g+M7l)],I3v)){this[Y8o][N0t][d4v][O2l]=I3v;this[(B5O.r3o+B5O.Z7o+y7o+W9O)][U5t][d4v][O2l]=I3v;this[Y8o][R5n][d4v][O2l]=I3v;}
}
if(this[P7g]&&this[Y8o][e7l]){this[Y8o][e7l][d4v][O2l]=I3v;}
document[D7g][(F2o+B5O.G4o+s7n)][o8R]=g3t;this[K6g](k2n,arguments);}
;STXChart.prototype.modalBegin=function(){var f5O="modal";this[y6t]=f5O;this[k2n]();}
;STXChart.prototype.modalEnd=function(){this[D6t]=u7g;this[y6t]=r4o;this[x4n]();}
;STXChart.prototype.updateChartAccessories=function(){var c9v="j39",G6g="B39",I3g=((0x241,142.)>=(0x132,0x1DC)?(0x39,"N"):0x1CE<(0x1EE,0xF3)?3:(0x1C8,0x1E9)<=12.05E2?(103.,8346361):(0x7A,0x9C)),o0t=(0x20E>=(0x174,1.6E1)?(18.0E1,1893352):(125,14.75E2)),U9v=285417167,V9R=944442326,T3l="atD",V6O="u39",U1o="U",V5t="yTi",y4O="sor";this[(i5o+W3O+y4O+V5t+L6o+W3o+B5O.E4o)]=X7g;this[(V9O+R3n+B5O.r3o+B5O.r3o+W3o+O1v+s3R+U1o+c2o+D2n)]=new Date()[f2v]();var xy=STX[R5g](this[(h9g+y7o+B5O.G4o+h0R+P3O)][R5n][g5O]);this.controls.floatHR.style.top=(B5O[V6O](STXChart[h7n],xy[O1l],this[Y8o][R5n][I2O]/B5O.M4I))+a8v;var floatDate=this[Y8o][(E8l+f8l+T3l+M5o)];var G1I=V9R,l1I=U9v,S1I=B5O.M4I;for(var b1I=B5O.i4I;B5O.Y0I.w0I(b1I.toString(),b1I.toString().length,o0t)!==G1I;b1I++){this.chart.baseLegendColors.push(this.getCanvasColor(J4o));this.reset();this.drawLineChart(chart,Z7I);context.lineTo(x1,cache.close);S1I+=B5O.M4I;}
if(B5O.Y0I.w0I(S1I.toString(),S1I.toString().length,I3g)!==l1I){return ;}
if(floatDate){var panel=this[o3o];if(!panel)panel=this[E6v][L0t];if(panel){var chart=panel[E6v],tick=this[R4o](this[y0o](STXChart[(B5O.r3o+B5O.E4o+a5o+p8l+C1o+B5O.E4o+Y1o)]),chart);floatDate[d4v][(e7o+a3t+B5O.G4o)]=(B5O[G6g](this[X0l](tick,chart),(floatDate[o6n]/B5O.M4I),g8l))+a8v;floatDate[d4v][k5l]=(B5O[(c9v)](this[E6v][a9g],chart[(c2o+w4t+e7o)][k5l]))+a8v;}
}
this[k9o]();}
;STXChart.prototype.mousemove=function(e$){var Q3n="O59",r9t="ft",e=e$?e$:event;if(!e[F4o]){e[(c2o+I0o+W3o+Y1o)]=e[v0g]+document[D7g][I8n]+document[q4t][(F2o+B5O.r3o+B5O.E4o+B5O.Z7o+e7o+e7o+t5v+r9t)];e[r2o]=e[b1v]+document[D7g][R9g]+document[q4t][R9g];}
STXChart[H2n]=e[F4o];STXChart[h7n]=e[r2o];if(this[y2o](c5O,arguments))return ;if(!this[P7g])return ;if(B5O[Q3n](this[y6t],r4o))return ;this[F0O](e[(V7g+W3o+Y1o)],e[r2o]);this[K6g](c5O,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){var Y4o="Tim",l9g="size",F6t="eout",u6g="ze",d0v="resizeTimeout",n1O="eDe";this[(B5O.E4o+W3o+F2o+X8l+Q0l+n1O+B5O.G4o+A4t+B5O.G4o+U2I+C2I)]=ms;function closure(self){return function(){var x2v="V59",Y5o="K59";if(!self[(V5g+B7o)].canvas)return ;if(!STX[O9n]){if(B5O[Y5o](self[E6v].canvas.height,Math[J8l](self[w4v]*self[E6v][T3g][D6n]))||B5O[x2v](self[E6v].canvas.width,Math[J8l](self[w4v]*self[E6v][T3g][A5O]))){self[e0o]();return ;}
}
}
;}
;if(ms){if(this[d0v])window[r5l](this[d0v]);this[d0v]=window[m1t](closure(this),ms);}
else{if(this[d0v])window[r5l](this[(B5O.E4o+j9t+X8l+u6g+p2I+X8l+L6o+F6t)]);this[(j7g+l9g+Y4o+W3o+x9t+B5O.G4o)]=null;}
}
;STXChart.prototype.mousemoveinner=function(epX,epY){var A9O="einn",o1O="unAppe",T5n="G49",i3v="ghli",b3R="find",m5O="U49",a9n="move",o9v="q49",A8l="ary",W0R="tIfNec",K5n="reposition",F7I="M49",v3v="yTim",k4t="ChartAc",r1t="pd",X7n="lastAccessoryUpdate",o5n="N49",N3t="vic",W8g="hDe",n7v="tou",Y0l="yTimer",W2t="ess",H0g="cc",y8n="accessoryTimer",L5g="s4",g1t="vect",g5l="A49",K3t="kOut",J7g="V49",P1t="kOu",W0o="useAnimation",G0l="K49",A3O="O49",c6o="enc",l2n="fe",a3n="j19",Q1o="x19",A5l="lX",w1t="rabSta",K9o="w19",Q2g="microscroll",S8R="d19",l9t="allowScroll",u1O="z19",f9n="X19",o1o="n19",i0g="l19",I9o="grabbingPanel",I8v="b19",O7g="i19",z4v="J19",x1g="y19",i7O="p19",p3O="L19",v2l="D19",U9O="h19",x5l="T09",U3t="oor",S6n="P09",n8g="ipadMaxTicks",U6o="f09",F4n="u09",I5l="e09",r8n="Q09",I4g="Z09",D8n="c09",j6o="S09",C1v="a09",l7v="g09",A0v="F09",D2O="YAx",F6n="Ax",e8t="r09",U6n="grabMode",A1g="W09",N0R="t0",S8l="rid",j0v="Over",I0R="k0",t6l="C09",M0n="m59",C6g="yTolerance",P9R="E59",Z8v="B59",r6t="Y59",H9g="ollX",K0n="rtS",Y8O="grabSta",W5g="Canva",j1o="o59",B7n="rla",e9n="H59",L5R="verXAxis",i0O="erX",k8n="I59",H5o="overYAxis",j4l="deC",V0g="irY",k7l="R59",a8t="G59",p8t="overXAxis",U8v="U59",w8g="q59",k1o="canvasRight",p4g="sshair",I7o="M59",X4n="N59",a9O="xel",I2o="FromP",p9g="rY",D0g="s59",h3O="A59";if(!this[E6v].canvas)return ;if(!STX[O9n]){if(B5O[h3O](this[(A2n+B5O.E4o+B5O.G4o)].canvas.height,Math[J8l](this[w4v]*this[E6v][T3g][D6n]))||B5O[D0g](this[E6v].canvas.width,Math[J8l](this[w4v]*this[E6v][(B5O.r3o+d5t+B5O.G4o+z9o+X8l+y7o+h9t)][A5O]))){this[e0o]();return ;}
}
if(this[y2o]("mousemoveinner",arguments))return ;STXChart[(B7v+D8t+A5o+B5O.E4o+Y1o)]=epX;STXChart[h7n]=epY;var cy=this[e1v]=this[K0o](STXChart[(B7v+a5o+p8l+C1o+p9g)]),cx=this[i7v]=this[y0o](STXChart[H2n]);this[o3o]=this[p1t](cy);if(!this[o3o])this[o3o]=this[E6v][L0t];if(!this[o3o])return ;var chart=this[o3o][E6v];if(chart[e2O]){this[g8t]=this[(B5O.G4o+X8l+s3g+I2o+X8l+a9O)](cx,chart);this[j8t]=this[D7I](this[o3o],this[g8t],this[f1t](cy,this[o3o]));}
if(B5O[X4n](STXChart[H2n],this[E6v][h3l])&&B5O[I7o](STXChart[(B7v+B5O.Z7o+p4g+Y1o)],this[(B5O.r3o+L2g)][k1o])&&B5O[w8g](STXChart[h7n],this.chart.top)&&B5O[U8v](STXChart[h7n],this[E6v][(k5l)])){STXChart[S8t]=true;}
else{STXChart[S8t]=false;}
this[p8t]=B5O[a8t](STXChart[h7n],this.chart.top+this[E6v][L0t][b4O][k5l])&&B5O[k7l](STXChart[(B7v+B5O.Z7o+Q9o+B5O.w2t+V0g)],this.chart.top+this[E6v][L0t][k5l])&&STXChart[(X8l+y7o+F2o+X8l+j4l+p8l+M2I+B5O.G4o)];this[H5o]=B5O[k8n](STXChart[H2n],this[E6v][(B5O.E4o+W4v+n9g)])&&STXChart[S8t];if(this[(G9t+i0O+R3n+b8g)]||this[H5o]||(!STXChart[S8t]&&!this[D7n])){this[k2n]();if(!this[(B5O.Z7o+L5R)]&&!this[H5o])return ;}
if(!this[p6I]&&B5O[e9n](STXChart[V0l],null)){this[k2n]();return ;}
if(this[D7n]&&!STXChart[V0l]){if(this[J1O]){STX[f9o](this[E6v][S5g],this);this[J1O]=false;for(var n in this[W1t]){this[(B5O.Z7o+L0O+B7n+O1l+F2o)][n][I5g]=false;}
for(var n in chart[p6g]){chart[p6g][n][I5g]=false;}
this[t7o]();}
if(this[x3l][b5v]&&B5O[j1o](this[w4O][E5v],"")){STX[f9o](this[E6v][(H4o+L6o+c2o+W5g+F2o)],this);}
if(this[D0o]==-1){this[D0o]=STXChart[H2n];this[(Y8O+K0n+B5O.r3o+B5O.E4o+H9g)]=chart[u3O];}
if(this[(V9l+A8R+g2I+B5O.G4o+z9o+B5O.E4o+B5O.G4o+U0o)]==-1){this[J0o]=STXChart[h7n];this[d9O]=chart[L0t][b4O][(u3O)];}
var dx=B5O[r6t](STXChart[(B5O.r3o+B5O.E4o+B5O.Z7o+n8l+X8l+B5O.E4o+Y1o)],this[D0o]),dy=B5O[Z8v](STXChart[h7n],this[J0o]);if(B5O[P9R](Math[y8l](dy),this[C6g])){if(!this[G7v])dy=0;}
else{this[G7v]=true;}
if(B5O[M0n](dx,0)&&B5O[t6l](dy,0))return ;if(B5O[(I0R+d0n)](Math[y8l](dx)+Math[y8l](dy),5))this[(V9l+A8R+i9o+j0v+S8l+W3o+B5O.T9n+e7o+X8l+B5O.r3o+H6o)]=true;if(this[d3l]&&B5O[(N0R+d0n)](this[(V9l+B5O.E4o+P3o+U2I+B5O.Z7o+F3v)],"pan")&&(B5O[A1g](this[U6n][J7t]("zoom"),0)||this[A7l]||this[p8t]||this[H5o])){if(B5O[e8t](this[U6n],"")){if(this[(G9t+W3o+I9g+F6n+M3R)])this[U6n]="zoom-x";else if(this[(y2v+D2O+M3R)])this[U6n]="zoom-y";}
if(B5O[A0v](this[U6n],"zoom-x"))dy=0;else if(B5O[(l7v)](this[U6n],"zoom-y"))dx=0;var push=B5O[C1v](dx,25),centerMe=true;if(B5O[j6o](chart[u3O],chart[z1v]))centerMe=false;var newCandleWidth=this[N8t]+push;if(B5O[D8n](newCandleWidth,this[u5R]))newCandleWidth=this[u5R];var pct=B5O[I4g]((this[I4l][f7g]-newCandleWidth),this[(e7o+Z5o+c4o+B5O.G4o)][f7g]);if(B5O[r8n](pct,.1)){newCandleWidth=B5O[I5l](this[I4l][f7g],.9);}
else if(pct<-.1){newCandleWidth=B5O[F4n](this[I4l][f7g],1.1);}
if(STX[w0O]){if(B5O[(U6o)](Math[Q6v]((this[E6v].width/this[I4l][f7g])-.499)-1,STXChart[n8g])&&B5O[S6n](Math[Q6v]((this[E6v].width/newCandleWidth)-.499)-1,STXChart[n8g]))return ;}
if(this[X0v]){var x=this[y0o](this[X0v]),tick=this[R4o](x,chart);this[O0t](newCandleWidth,chart);var newTick=this[R4o](x,chart);chart[u3O]+=Math[(E8l+e7o+U3t)]((B5O[x5l](newTick,tick)));}
else if(centerMe){var newMaxTicks=Math[Q6v](B5O[U9O]((this[E6v].width/newCandleWidth),.499));if(B5O[v2l](newMaxTicks,chart[z1v])){this[O0t](newCandleWidth,chart);var center=B5O[p3O](chart[(F2o+N8R+E7o)],chart[z1v]/2),newCenter=(B5O[(o1l+K7O+d0n)](chart[u3O],chart[z1v]/2));chart[u3O]+=Math[Q6v](B5O[i7O](center,newCenter));}
}
else{var newMaxTicks=Math[Q6v](B5O[x1g]((this[E6v].width/newCandleWidth),.499));if(B5O[z4v](newMaxTicks,chart[z1v])){this[O0t](newCandleWidth,chart);var wsInTicks=Math[Q6v](B5O[O7g](this[(c2o+B5O.E4o+a3t+W3o+j7g+y7o+B5O.r3o+W3o+F2o)][J3O],this[I4l][f7g]));chart[u3O]=B5O[I8v](chart[z1v],wsInTicks);}
}
this[I4l][Z3t]=null;var yAxis=this[I9o][b4O];yAxis[n6v]=Math[Q6v](this[a7v]+dy);if(B5O[i0g](this[a7v],yAxis.height)){if(B5O[o1o](yAxis[n6v],yAxis.height))yAxis[n6v]=B5O[f9n](yAxis.height,1);}
else{if(B5O[u1O](yAxis[(n6v)],yAxis.height))yAxis[n6v]=yAxis.height+1;}
}
else{if(this[l9t]){this[U6n]="pan";var push=Math[Q6v](B5O[S8R](dx,this[I4l][f7g]));this[Q2g]=B5O[K9o](push,(dx/this[I4l][f7g]));this[Y3g]=this[I4l][f7g]*this[Q2g]*-1;if(this[x7t])push*=5;chart[u3O]=this[(V9l+w1t+K0n+B7v+F0t+A5l)]+push;if(B5O[Q1o](chart[u3O],1))chart[(k4I+h0R+e7o+e7o)]=1;if(B5O[a3n](chart[u3O],chart[z1v])){this[(O0v+W3o+l2n+B5O.E4o+c6o+W3o+F2o)][J3O]=30;}
else{this[x3l][J3O]=B5O[A3O]((chart[z1v]-chart[u3O]),this[I4l][f7g]);}
if(B5O[G0l](this[o3o][F2g],chart[F2g])){this[E6v][L0t][b4O][(F2o+B5O.r3o+B5O.E4o+F0t+e7o)]=this[d9O]+dy;}
}
}
var clsrFunc=function(stx){return function(){stx[V5o]();}
;}
;if((STXChart[W0o]||STX[O9n])&&window[i7I]){window[i7I](clsrFunc(this));}
else{this[(y8v+Y6I)]();}
if(this[r3t]){STX[f9o](this[E6v][S5g],this);this[r3t][m7g](this[E6v][S5g][x3t]);this[r3t][k6n]();}
this[k2n]();return ;}
else{this[U6n]="";}
this[I9o]=this[o3o];if(this[p8t]||this[H5o])return ;var tick=this[R4o](this[(i9o+i5o+P1t+X3o)](STXChart[H2n]),chart);this[Y8o][N0t][d4v][h3l]=(B5O[J7g](this[X0l](tick,chart),.5))+"px";this.controls.crossY.style.top=this[(i9o+i5o+K3t+U0o)](STXChart[h7n])+"px";this[w3n]();if(STXChart[(Z0R+F2o+E1v+W3o+p3g+z9o+B5O.E4o+B5O.G4o)]&&B5O[g5l](STXChart[V0l],null)){if(!STX[N1l][this[w4O][(g1t+B5O.Z7o+o3g+I6I)]]||!(new STX[N1l][this[w4O][E5v]])[s2v]){this[x4n]();}
if(B5O[(L5g+d0n)](this[y8n],null))clearTimeout(this[(z9o+H0g+W2t+B5O.Z7o+B5O.E4o+Y0l)]);if(STXChart[m1n]||!STX[(n7v+B5O.r3o+W8g+N3t+W3o)]){this[W2n]();}
else{if(B5O[o5n](new Date()[f2v]()-this[X7n],100))this[(c4o+r1t+z9o+H4o+k4t+B5O.r3o+W3o+O1v+g2g+j9t)]();this[(z9o+H0g+j9t+v8o+B5O.E4o+v3v+W3o+B5O.E4o)]=setTimeout((function(stx){return function(){stx[W2n]();}
;}
)(this),10);}
}
else{this[k2n]();}
if(this[o8l]){var panel=this[p3n][this[o8l][H6t]],value=this[D7I](panel,this[g8t],this[a3g](this[K0o](STXChart[h7n]),panel));if(this[x3l][b5v]&&this[V0n]&&B5O[F7I](panel[F2g],panel[E6v][F2g])){value=this[D7I](panel,this[g8t],this[V0n]);}
STX[f9o](this[(V5g+z9o+B5O.E4o+B5O.G4o)][S5g],this);this[o8l][K5n](this[E6v][S5g][(h9g+y7o+p1g)],this[o8l][P8n],this[g8t],value);if(this[o8l][k6n])this[o8l][k6n]();}
else if(STXChart[m1n]){if(this[r3t]){var panel=this[p3n][this[r3t][H6t]],value=this[(w5O+c4o+F2o+W0R+j9t+F2o+A8l)](panel,this[g8t],this[a3g](this[K0o](STXChart[h7n]),panel));if(this[x3l][b5v]&&this[V0n]&&B5O[(o9v)](panel[F2g],panel[E6v][F2g])){value=this[D7I](panel,this[g8t],this[V0n]);}
STX[f9o](this[E6v][S5g],this);this[r3t][a9n](this[E6v][S5g][x3t],this[g8t],value);if(this[r3t][k6n])this[r3t][k6n]();}
}
else if(B5O[m5O](STXChart[V0l],null)){this[f8o]();this[F1g]();}
else if(STXChart[S8t]){this[(b3R+s0l+i3v+V9l+n9g+F2o)]();}
if(this[x3l][b5v]&&B5O[T5n](this[w4O][E5v],"")){if(!STXChart[m1n]&&!this[J1O])STX[f9o](this[E6v][S5g]);this[R6n]();}
this[(B5O.E4o+o1O+y7o+m9o)]((L6o+x9t+x2I+L6o+B5O.Z7o+o1l+A9O+h9t),arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var l1o="meters",J3n="e29",B7I="ghl",Z0t="yH",X5t="Q29",Q1t="Z29",j5v="c29",L5t="a29",w2I="g29",U5O="isStep",T6l="F29",y0O="r29",n0t="W29",X3R="t29",R0n="k29",T2O="putMap",x4l="isHighlighted",U3n="libraryEntry",p7n="C29",w9R="erlays",v3o="ata",j5o="m49",T7O="prev",V8t="E49",K9t="B49",T0o="intersected",a8O="Y49",S4g="o49",J6O="H49",S6g="torP",I7g="entV",z1l="urr",U2t="R49",radius=10;if(isTap)radius=30;var cy=this[e1v],cx=this[i7v];if(!this[o3o])return ;var chart=this[o3o][E6v];this[J1O]=false;if(this[x3l][b5v]&&B5O[U2t](this[(B5O.r3o+z1l+I7g+W3o+B5O.r3o+S6g+M2I+l4I+W3o+H4o+B5O.E4o+F2o)][E5v],"")){STX[f9o](this[E6v][S5g],this);}
var somethingChanged=false,drawingToMeasure=null,box={x0:this[R4o](B5O[(c7I+j5n+d0n)](cx,radius),chart),x1:this[R4o](cx+radius,chart),y0:this[a3g](B5O[J6O](cy,radius),this[o3o]),y1:this[a3g](cy+radius,this[o3o])}
;for(var i=0;B5O[S4g](i,this[l3v].length);i++){var drawing=this[l3v][i];if(drawing[J1v])continue;var prevHighlight=drawing[r5t],highlightMe=(B5O[a8O](drawing[H6t],this[o3o][F2g]));drawing[P8n]=drawing[T0o](this[g8t],this[j8t],box);highlightMe=highlightMe&&drawing[P8n];if(!clearOnly&&highlightMe){if(B5O[K9t](prevHighlight,drawing[I5g](true))){drawingToMeasure=drawing;somethingChanged=true;}
this[J1O]=true;}
else{if(B5O[V8t](prevHighlight,drawing[I5g](false))){somethingChanged=true;}
}
}
if(somethingChanged){this[V5o]();this[t7o]("","",true);if(drawingToMeasure)drawingToMeasure[k6n]();}
var first=false;for(var n in this[W1t]){var o=this[W1t][n];o[T7O]=o[I5g];o[(A3R+p8l+X2o+q4I)]=false;}
for(var n in chart[p6g]){var series=chart[p6g][n];series[T7O]=series[I5g];series[I5g]=false;}
if(!clearOnly){var bar=this[c3v](cx);if(B5O[j5o](bar,chart[(m9o+v3o+s5t+V9l+X2l+y7o+B5O.G4o)].length)){for(var n in this[(G9t+w9R)]){var o=this[W1t][n];if(B5O[p7n](o[L0t],this[o3o][F2g]))continue;if(o[U3n][x4l]&&o[U3n][x4l](this,cx,cy)){o[(D4t+V9l+p8l+e7o+X8l+V9l+p8l+B5O.G4o)]=true;this[J1O]=true;continue;}
var quote=chart[J4I][bar];if(!quote)continue;for(var out in this[W1t][n][(x9t+B5O.G4o+T2O)]){var val=quote[out],y=0;if(B5O[R0n](this[o3o][F2g],chart[F2g])){y=this[U7v](val,this[o3o]);}
else{y=this[x8n](val,this[o3o]);}
if(B5O[X3R](cy-radius,y)&&B5O[n0t](cy+radius,y)){o[I5g]=true;this[J1O]=true;break;}
}
}
for(var n in chart[p6g]){var series=chart[p6g][n],y=series[K1g][bar];if(B5O[y0O](cy-radius,y)&&B5O[T6l](cy+radius,y)){series[I5g]=true;this[J1O]=true;}
else if(series[U5O]&&B5O[w2I](bar,0)){var py=series[K1g][B5O[L5t](bar,1)];if((B5O[(C2I+W2O+d0n)](cy,y)&&B5O[j5v](cy,py))||(B5O[Q1t](cy,y)&&B5O[X5t](cy,py))){series[I5g]=true;this[(m1I+Z0t+X8l+B7I+W4v+p8l+H4o+m9o)]=true;}
}
}
}
}
for(var n in this[W1t]){var o=this[W1t][n];if(B5O[J3n](o[T7O],o[I5g])){this[(y8v+Y6I)]();if(o[I5g]){this[J1O]=true;this[t7o](o[F2g]);}
break;}
}
for(var n in chart[p6g]){var series=chart[p6g][n];if(B5O[(c4o+W2O+d0n)](series[T7O],series[I5g])){this[V5o]();if(series[(p8l+z4O+X2o+V9l+p8l+B5O.G4o)]){this[J1O]=true;this[t7o](series[O2l],series[(c2o+z9o+A8R+l1o)][w5o]);}
break;}
}
if(!this[J1O]){this[u5t]();}
}
;STXChart.prototype.positionSticky=function(m){var D2v="m29",E2O="E29",K5o="f29",top=Math[A0o](B5O[K5o](this[K0o](STXChart[(N8R+F2o+F2o+p8l+z9o+a5R+U0o)]),m[I2O],n5l),B5O.b4I),right=Math[h7I](B5O[E2O](this[E6v][e2o],(this[y0o](STXChart[(B7v+B5O.Z7o+n8l+e5g)])-u5l)),B5O[D2v](this[E6v][e2o],m[o6n]));m.style.top=top+a8v;m[d4v][V8l]=right+a8v;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow){var W6t="positionSticky",e7t="W79",U5n="t79",Q5t="k79",M7O="C79",m=this[Y8o][P3t];if(!m)return ;var mi=m[(B5O.r3o+p8l+A1v+M4O)][B5O.b4I];if(!mi)return ;var overlayTrashCan=m[X5n][B5O.i4I],mouseDeleteInstructions=m[X5n][B5O.M4I];if(!forceShow&&(B5O[M7O](message,X7g)||B5O[Q5t](message,r4o))){mi[L9v]=r4o;m[d4v][O2l]=I3v;if(STX[(B5O.G4o+v0l+p8l+t8o+W3o+o1l+X8l+H3g)]&&overlayTrashCan){overlayTrashCan[(F2o+w3R+W3o)][O2l]=I3v;}
else if(!STX[K4t]&&mouseDeleteInstructions){mouseDeleteInstructions[d4v][O2l]=I3v;}
}
else{if(B5O[U5n](message,X7g))message=r4o;if(forceShow&&B5O[e7t](message,r4o)){mi[d4v][c0l]=r4o;mi[d4v][(B5O.r3o+F0t+J8t)]=r4o;mi[d4v][O2l]=I3v;}
else if(backgroundColor){mi[d4v][c0l]=backgroundColor;mi[(T9o+O1l+Z4o)][w5o]=STX[O5O](backgroundColor);mi[d4v][O2l]=k3O;}
else{mi[d4v][c0l]=r4o;mi[d4v][w5o]=r4o;mi[d4v][(m9o+X8l+O5n+R8o)]=k3O;}
mi[L9v]=message;m[d4v][(m9o+O4g+M7l)]=k3O;this[W6t](m);if(STX[K4t]&&overlayTrashCan){overlayTrashCan[d4v][O2l]=k3O;mouseDeleteInstructions[d4v][O2l]=I3v;}
else if(!STX[K4t]&&mouseDeleteInstructions){mouseDeleteInstructions[d4v][O2l]=p7v;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var d7l="nS",r4l="De",H2l="nli",v4O="nl",n2O=3294067,X3v=5018018,O8R=995917379,T7v=1654245623,C7l="classN",d4g="measureLit",M6l="f79",C8o="Bars",Q3R="u79",k3g="e79",e2I="Z79",L6I="c79",l2g="S79",b9v="a79",t7t="g79",p5g="F79",h0o="measureUnlit",t9R="r79",n3o="asur",j7o="mM";if(this[y2o](u5t,arguments))return ;var m=$$((j7o+W3o+n3o+W3o));if(!price1){if(m&&B5O[t9R](m[o4v],h0o))m[o4v]=h0o;}
else{var distance=B5O[p5g](Math[(h0R+c4o+J5n)](Math[y8l](price1-price2)*this[E6v][C1n]),this[E6v][C1n]),message=r4o;if(this[L8v]){message+=this[L8v][x1O][w5g](distance);}
else{message+=distance;}
var pct=B5O[t7t]((price2-price1),price1);if(B5O[b9v](Math[y8l](pct),i8l)){pct=Math[Q6v](B5O[l2g](pct,u3v));}
else if(B5O[L6I](Math[y8l](pct),Z4v)){pct=B5O[e2I](Math[Q6v](pct*O5R),n3l);}
else{pct=B5O[(x6I+d0n)](Math[Q6v](pct*A0l),u3v);}
if(this[L8v]){pct=this[L8v][P5n][w5g](B5O[k3g](pct,u3v));}
else{pct=pct+a6O;}
message+=t6n+pct+c8n;var ticks=Math[y8l](B5O[Q3R](tick2,tick1));ticks=Math[Q6v](ticks)+B5O.i4I;var barsStr=C8o;if(this[J5O])barsStr=this[J5O](barsStr);message+=X3O+ticks+X3O+barsStr;if(m){if(B5O[M6l](m[o4v],d4g))m[(C7l+z9o+X2l)]=d4g;m[L9v]=message;}
}
if(this[r3t])return ;var n1I=T7v,Z1I=-O8R,R1I=B5O.M4I;for(var c1I=B5O.i4I;B5O.Y0I.w0I(c1I.toString(),c1I.toString().length,X3v)!==n1I;c1I++){this.updateChartLoop();loadMoreCount++;R1I+=B5O.M4I;}
if(B5O.Y0I.w0I(R1I.toString(),R1I.toString().length,n2O)!==Z1I){this.undoStamps.push(STX.shallowClone(this.drawingObjects));labelDate.setHours(boundaryTimeUnit);return G69*l69;}
m=this[Y8o][P3t];if(hover){m[d4v][O2l]=(X8l+v4O+Z0R+W3o+j4O+i9o+e7o+B5O.Z7o+s3g);m[(B5O.r3o+D4t+e7o+M4O)][B5O.b4I][d4v][O2l]=(X8l+H2l+V5n+j4O+i9o+f8l+B5O.r3o+H6o);if(price1){m[X5n][B5O.b4I][L9v]=message;if(STX[(B5O.G4o+B5O.Z7o+c4o+B5O.r3o+p8l+r4l+o1l+V7v+W3o)]){m[X5n][B5O.i4I][d4v][O2l]=k3O;if(m[X5n][B5O.M4I])m[X5n][B5O.M4I][(F2o+w3R+W3o)][O2l]=I3v;}
else{m[X5n][B5O.i4I][d4v][O2l]=I3v;if(m[X5n][B5O.M4I])m[(B5O.r3o+V0R+m9o+j7g+y7o)][B5O.M4I][d4v][O2l]=p7v;}
}
this[(c2o+B5O.Z7o+M6I+B5O.G4o+X8l+B5O.Z7o+d7l+I2v+O1l)](m);}
else{m[d4v][O2l]=I3v;m[X5n][B5O.b4I][L9v]=r4o;}
this[K6g](u5t,arguments);}
;STXChart.prototype.drawTemporaryPanel=function(){var x4v="h69",l0n="T79",s8R="P79",borderEdge=Math[Q6v](B5O[s8R](this[E6v].width,3))+.5;STX[f9o](this[E6v][S5g],this);var y=B5O[l0n](STXChart[h7n],this.chart.top);this[F8R](0,borderEdge,y,y,this[e9v]("stx_panel_drag"),"segment",this[E6v][S5g][x3t],false,{}
);STXChart.resizingPanel.handle.style.top=(B5O[x4v](y,STXChart[V0l][q8O][I2O]/2))+"px";}
;STXChart.prototype.setTrashCan=function(){var D1t="D69";if(STX[K4t]){var m=this[Y8o][P3t];if(m){m[(T9o+c3R+W3o)][O2l]=k3O;m[X5n][B5O.b4I][d4v][O2l]=I3v;m[(B5O.r3o+D4t+e7o+M4O)][B5O.i4I][d4v][O2l]=k3O;if(m[X5n][B5O.M4I])m[(V5g+X8l+e7o+m9o+h8v)][B5O.M4I][d4v][O2l]=I3v;m.style.top=(B5O[(D1t)](this[K0o](STXChart[h7n]),n5l))+a8v;m[d4v][V8l]=B5O[(n6I+M5n+d0n)](this[E6v][e2o],(this[y0o](STXChart[H2n])-u5l),(a8v));}
}
}
;STXChart.prototype.pixelFromBar=function(bar){var o0g="r69",S9l="W69",x=Math[Q6v]((B5O[S9l](bar,this[I4l][f7g]))+B5O[o0g](this[I4l][f7g],B5O.F4I))+this[Y3g];return x;}
;STXChart.prototype.barFromPixel=function(x){var s5R="F69";return Math[J8l](B5O[s5R](x,this[I4l][f7g]));}
;STXChart.prototype.tickFromPixel=function(x,chart){var H9t="a69",R1n="g69";if(!chart)chart=this[E6v];var left=B5O[R1n](chart[e2O].length,chart[u3O]),tick=Math[Q6v](B5O[H9t]((((x-this[Y3g]+(left*this[(e7o+z9o+m4g)][f7g]))/this[I4l][f7g])),.499));return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){var X1v="S69";if(!chart)chart=this[E6v];return B5O[X1v]((tick-chart[e2O].length+chart[u3O]),this[I4l][f7g])+this[F9v]+this[Y3g];}
;STXChart.prototype.pixelFromDate=function(date,chart){var H8n="tickFromDate";return this[X0l](this[H8n](date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel){var T6o="Q69",S7n="gLo",P2o="Z69",Y8l="c69";if(!panel)panel=this[E6v][L0t];var chart=panel[E6v],yAxis=panel[b4O];y=B5O[Y8l](yAxis[k5l],y);var price=yAxis[t4v]+(B5O[P2o](y,yAxis[(n3n+e7o+s7o+c2o+e7o+H1v+B5O.E4o)]));if(yAxis[l9R]){var logPrice=yAxis[(e7o+B5O.Z7o+S7n+G1l)]+(B5O[(T6o)](y,yAxis[I2l],yAxis.height));price=Math[c2l](10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel){if(!panel)panel=this[p1t](y);var p=this[c6O](y,panel);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel){var P7n="Y69",j8l="first",I1l="o69";if(!panel)panel=this[p1t](y);if(!panel){if(B5O[I1l](y,B5O.b4I)){panel=this[p3n][STX[j8l](this[p3n])];}
else{panel=this[p3n][STX[V9O](this[p3n])];}
}
var p=this[c6O](y,panel);if(panel[E6v][I4o]&&B5O[P7n](panel[F2g],panel[E6v][F2g])){p=panel[E6v][I4o](this,panel[E6v],p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel){var D0l="ansformFu";if(panel[E6v][Y1I])price=panel[E6v][(B5O.G4o+B5O.E4o+D0l+Z5n)](this,panel[E6v],price);return this[x8n](price,panel);}
;STXChart.prototype.pixelFromPrice=function(price,panel){var x5O="m69",k8g="E69",A1O="B69";if(!panel)panel=this[E6v][L0t];var yAxis=panel[b4O],y=B5O[A1O]((yAxis[R1v]-price),yAxis[v9o]);if(yAxis[l9R]){var logPrice=B5O[k8g](Math[Y8g](price),Math[o6g]);if(B5O[x5O](price,0))logPrice=0;var height=yAxis.height;y=B5O[(B5O.T9n+h1n+Y1o)](height,height*(logPrice-yAxis[B2l])/yAxis[I2l]);}
y+=yAxis.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value){var h8R="W8X",K6t="t8X",q1t="k8X";if(this[I4l][w5O]||!this[Q9g][panel[F2g]])return this[U7v](value,panel);var a=Math[Q6v](tick);if(B5O[q1t](a,0)&&B5O[(K6t)](a,panel[E6v][e2O].length)&&(ratio=panel[E6v][e2O][a][X1O])){return this[U7v](B5O[h8R](value,ratio),panel);}
return this[U7v](value,panel);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){var q6g="g8X",w3t="F8X",R6t="r8X";if(this[I4l][w5O])return value;if(!panel||!this[Q9g][panel[(F2g)]])return value;var a=Math[Q6v](tick);if(B5O[R6t](a,0)&&B5O[w3t](a,panel[E6v][e2O].length)&&(ratio=panel[E6v][e2O][a][X1O])){return B5O[q6g](value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart[Y1I]=transformFunction;chart[I4o]=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){var P4t="8X";delete  chart[Y1I];delete  chart[I4o];for(var i=0;B5O[(z9o+P4t)](i,chart[e2O].length);i++){chart[e2O][i].transform=null;}
}
;STXChart.prototype.undo=function(){var w1O="rawi",Y8v="active";if(this[y2o](g4O,arguments))return ;if(this[r3t]){this[(Y8v+t8o+w1O+s7O)].abort();this[r3t]=X7g;STX[(w9g+W3o+z9o+B5O.E4o+B5O.T9n+g3v+z9o+F2o)](this[E6v][S5g],this);this[V5o]();STX[p0v](this[Y8o][N0t],h6v,e6n);STX[p0v](this[Y8o][U5t],h6v,e6n);STXChart[m1n]=C0l;}
this[K6g](g4O,arguments);}
;STXChart.prototype.undoStamp=function(){this[z5l][H0l](STX[M8v](this[l3v]));}
;STXChart.prototype.undoLast=function(){if(this[r3t]){this[g4O]();}
else{if(this[z5l].length){this[l3v]=this[z5l][b4l]();this[V5o]();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this[X2O]();this[l3v][(H0l)](drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var Q9l="stxLine",d0g="r5X",G9l="W5X",A0O="t5X",Y5R="k5X",Q7I="C5X",Z5R="pat",T5o="m3X",L8t="E3X",D9t="B3X",f8g="cit",U8O="Y3X",G4g="o3X",U3v="y0",g6O="H3X",K8O="I3X",b2t="R3X",m5n="G3X",u6O="x0",O0O="U3X",d9v="q3X",M7I="M3X",d5n="N3X",v1v="s3X",q5l="A3X",g7g="V3X",l0l="K3X",v3O="O3X",X3n="j9X",j3O="x9X",B8v="w9X",w6v="d9X",W0n="z9X",z8t="X9X",e1l="n9X",q1l="l9X",j3R="b9X",R4g="i9X",L1v="J9X",d6g="y9X",c6I="p9X",Z6n="v9X",D1o="L9X",d4o="D9X",f8n="h9X",p1l="T8X",q9v="P8X",t3o="f8X",x1n="u8X",D5o="e8X",V6l="Q8X",B4O="canv",f4v="Z8X",f4l="c8X",r7o="S8X";if(!parameters)parameters={}
;if(B5O[r7o](parameters[m1v],"none"))return ;if(B5O[f4l](confineToPanel,true))confineToPanel=this[E6v][L0t];if(B5O[f4v](context,null)||typeof (context)=="undefined")context=this[E6v][x3t];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this[E6v][(B4O+z9o+F2o+s1l+X8l+V9l+n9g)],edgeLeft=0,edgeRight=this[E6v].width;if(confineToPanel){edgeBottom=confineToPanel[b4O][k5l];edgeTop=confineToPanel.yAxis.top;}
if(B5O[V6l](type,"ray")){var bigX=10000000;if(B5O[D5o](x1,x0))bigX=-10000000;var v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
,bigY=STX[b9t](v,bigX);x1=bigX;y1=bigY;}
if(B5O[x1n](type,"line")||B5O[t3o](type,"horizontal")||B5O[q9v](type,"vertical")){var bigX=10000000,littleX=-10000000,v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
,bigY=STX[b9t](v,bigX),littleY=STX[b9t](v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=B5O[p1l](x1,x0),ydelta=B5O[f8n](y1,y0),p,q,r;for(var edge=0;B5O[d4o](edge,4);edge++){if(B5O[D1o](edge,0)){p=-xdelta;q=-(B5O[Z6n](edgeLeft,x0));}
if(B5O[c6I](edge,1)){p=xdelta;q=(B5O[d6g](edgeRight,x0));}
if(B5O[L1v](edge,2)){p=-ydelta;q=-(B5O[R4g](edgeTop,y0));}
if(B5O[j3R](edge,3)){p=ydelta;q=(B5O[q1l](edgeBottom,y0));}
r=B5O[e1l](q,p);if(B5O[z8t](y1,null)&&B5O[W0n](p,0)&&B5O[w6v](q,0)){return false;}
if(B5O[B8v](p,0)){if(B5O[j3O](r,t1))return false;else if(B5O[X3n](r,t0))t0=r;}
else if(B5O[v3O](p,0)){if(B5O[l0l](r,t0))return false;else if(B5O[g7g](r,t1))t1=r;}
}
var x0clip=x0+B5O[q5l](t0,xdelta),y0clip=y0+B5O[v1v](t0,ydelta),x1clip=x0+B5O[d5n](t1,xdelta),y1clip=y0+B5O[M7I](t1,ydelta);if(B5O[d9v](y1,null)&&B5O[O0O](y0,null)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v[u6O];x1clip=v[u6O];if(B5O[m5n](v[u6O],edgeRight))return false;if(B5O[b2t](v[u6O],edgeLeft))return false;}
else if(B5O[K8O](y1,null)){if(B5O[g6O](v[U3v],v[Y3v]))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v[u6O];x1clip=v[u6O];if(B5O[G4g](v[u6O],edgeRight))return false;if(B5O[U8O](v[u6O],edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[w5o];if(color[(B5O.Z7o+n7t+f8g+O1l)])context.globalAlpha=color[(B5O.Z7o+n7t+n3R)];else context.globalAlpha=1;context.lineWidth=parseInt(STX[y3o](color.width));}
else{if(B5O[D9t](color,null)||B5O[L8t](color,"auto")||STX[U4v](color)){context.strokeStyle=this[k2O];}
else{context.strokeStyle=color;}
}
if(parameters[o0O])context.globalAlpha=parameters[o0O];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(B5O[T5o](type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters[(Z5R+H4o+B5O.E4o+y7o)]){pattern=parameters[m1v];if(B5O[Q7I](pattern,"solid")){pattern=null;}
else if(B5O[Y5R](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(B5O[A0O](pattern,"dashed")){pattern=[B5O[G9l](context.lineWidth,5),B5O[d0g](context.lineWidth,5)];}
}
context[Q9l](x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var N8g="dashedLineTo",g7l="q1X",I1O="M1X",i0l="N1X",a6I="s1X",Y0R="A1X",P7v="V1X",k1l="K1X",c8t="O1X",b3n="j0X",H1o="x0X",D9o="w0X",G8R="d0X",Y1O="z0X",B9n="X0X",d1o="n0X",a0g="l0X",X8v="b0X",h7g="i0X",e4v="J0X",P1g="y0X",a7O="p0X",a6n="v0X",r3O="L0X",W2l="D0X",b9O="h0X",o4O="T5X",P2I="P5X",v1t="f5X",B3g="u5X",F3R="e5X",m6o="Q5X",E2o="Z5X",w8l="c5X",Q1v="S5X",z9t="a5X",n1n="g5X",p5R="F5X";if(!parameters)parameters={}
;if(B5O[p5R](parameters[m1v],"none"))return ;if(B5O[n1n](confineToPanel,true))confineToPanel=this[E6v][L0t];if(B5O[z9t](context,null)||typeof (context)=="undefined")context=this[E6v][x3t];if(B5O[Q1v](points.length,4))return ;var edgeTop=0,edgeBottom=this[(B5O.r3o+p8l+z9o+B5O.E4o+B5O.G4o)][a9g],edgeLeft=0,edgeRight=this[(B5O.r3o+L2g)].width;if(confineToPanel){edgeBottom=confineToPanel[b4O][k5l];edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[w5o];if(color[o0O])context.globalAlpha=color[o0O];else context.globalAlpha=1;context.lineWidth=parseInt(STX[y3o](color.width));}
else{if(B5O[w8l](color,null)||B5O[E2o](color,"auto")||STX[U4v](color)){context.strokeStyle=this[k2O];}
else{context.strokeStyle=color;}
}
if(parameters[o0O])context.globalAlpha=parameters[o0O];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters[m1v]){pattern=parameters[m1v];if(B5O[m6o](pattern,"solid")){pattern=null;}
else if(B5O[F3R](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(B5O[B3g](pattern,"dashed")){pattern=[B5O[v1t](context.lineWidth,5),B5O[P2I](context.lineWidth,5)];}
}
context.beginPath();for(var i=0;B5O[o4O](i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=B5O[b9O](x1,x0),ydelta=B5O[W2l](y1,y0),p,q,r;for(var edge=0;B5O[r3O](edge,4);edge++){if(B5O[a6n](edge,0)){p=-xdelta;q=-(B5O[a7O](edgeLeft,x0));}
if(B5O[P1g](edge,1)){p=xdelta;q=(B5O[e4v](edgeRight,x0));}
if(B5O[h7g](edge,2)){p=-ydelta;q=-(B5O[X8v](edgeTop,y0));}
if(B5O[a0g](edge,3)){p=ydelta;q=(B5O[d1o](edgeBottom,y0));}
r=B5O[B9n](q,p);if(B5O[Y1O](y1,null)&&B5O[G8R](p,0)&&B5O[D9o](q,0)){return false;}
if(B5O[H1o](p,0)){if(B5O[b3n](r,t1))return false;else if(B5O[c8t](r,t0))t0=r;}
else if(B5O[k1l](p,0)){if(B5O[P7v](r,t0))return false;else if(B5O[Y0R](r,t1))t1=r;}
}
var x0clip=x0+B5O[a6I](t0,xdelta),y0clip=y0+B5O[i0l](t0,ydelta),x1clip=x0+B5O[I1O](t1,xdelta),y1clip=y0+B5O[g7l](t1,ydelta);try{if(pattern){context[N8g](x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var X0n="lineDashOffset",C5g="setLineDash",k2v="m1X",k6v="B1X",d8o="Y1X",f2t="o1X",m7t="H1X",q8o="I1X",N9t="R1X",K2l="G1X",x9o="U1X";if(!parameters)parameters={}
;if(B5O[x9o](parameters[m1v],"none"))return ;if(B5O[K2l](confineToPanel,true))confineToPanel=this[E6v][L0t];if(B5O[N9t](context,null)||typeof (context)=="undefined")context=this[E6v][x3t];context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color[w5o];if(color[(B5O.Z7o+c2o+i5o+X8l+G5l)])context.globalAlpha=color[o0O];else context.globalAlpha=1;context.lineWidth=parseInt(STX[y3o](color.width));}
else{if(B5O[q8o](color,null)||B5O[m7t](color,"auto")||STX[U4v](color)){context.strokeStyle=this[k2O];}
else{context.strokeStyle=color;}
}
if(parameters[o0O])context.globalAlpha=parameters[o0O];if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters[m1v]){pattern=parameters[m1v];if(B5O[f2t](pattern,"solid")){pattern=null;}
else if(B5O[d8o](pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(B5O[k6v](pattern,"dashed")){pattern=[B5O[(Q5g+Y1o)](context.lineWidth,5),B5O[k2v](context.lineWidth,5)];}
}
if(pattern&&context[C5g]){context[C5g](pattern);context[X0n]=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var H6v="drawing",u9g="rred",r0O="Occu",e3o="addDrawing",j9v="learC",z7v="click",o4g="chartsOnly",g8o="construct",E5R="yp",N4I="ngT",G3t="drawi";if(!this[r3t]){if(!panel)return ;var Factory=STXChart[(G3t+N4I+R5t+P3O)][this[w4O][(L0O+h1l+o3g+E5R+W3o)]];if(!Factory){if(STX[N1l][this[w4O][E5v]]){Factory=STX[N1l][this[w4O][E5v]];STXChart[P2t](this[w4O][E5v],Factory);}
}
if(Factory){this[r3t]=new Factory;this[r3t][g8o](this,panel);if(!this[Q9g][panel[F2g]]){if(this[r3t][o4g]){this[r3t]=X7g;return ;}
}
}
}
if(this[r3t]){if(this[O9l]&&!this[r3t][s2v]){if(!STXChart[m1n])this[r3t]=X7g;return ;}
var tick=this[R4o](x,panel[E6v]),panel=this[p3n][this[r3t][H6t]],value=this[D7I](panel,tick,this[a3g](y,panel));if(this[x3l][b5v]&&this[V0n]){value=this[D7I](panel,tick,this[V0n]);}
if(this[r3t][z7v](this[E6v][S5g][x3t],tick,value)){if(this[r3t]){STXChart[m1n]=C0l;STX[(B5O.r3o+j9v+P8R+F2o)](this[E6v][S5g],this);this[e3o](this[r3t]);this[r3t]=X7g;this[w0t]();this[V5o]();this[(V5g+m1I+V9l+W3o+r0O+u9g)](d2v);STX[p0v](this[Y8o][N0t],h6v,e6n);STX[p0v](this[Y8o][U5t],h6v,e6n);}
}
else{this[E9o](H6v);STXChart[m1n]=u7g;STX[p0v](this[Y8o][N0t],e6n,h6v);STX[p0v](this[Y8o][(N8R+Q9o+U0o)],e6n,h6v);}
return u7g;}
return C0l;}
;STXChart.prototype.whichPanel=function(y){var o5g="k4X",x7o="C4X";for(var p in this[p3n]){var panel=this[p3n][p];if(panel[G6I])continue;if(B5O[x7o](y,panel.top)&&B5O[o5g](y,panel[k5l]))return panel;}
return X7g;}
;STXChart.prototype.mouseup=function(e){var T9t="e4X",w5R="Q4X",i2l="Z4X",L0l="4X",x2t="dy",c4t="S4X",o0R="a4X",T4o="sizingPa",R0l="rag",T0g="eCha",n5v="nsi",S7t="bod",z8l="F4X",E7t="gs",n7O="awin",x5o="ju",H2I="r4X",c9o="W4X",z2l="t4X";if(this[o8l]){if(B5O[z2l](this[w4O][E5v],r4o)||B5O[c9o](this[w4O][E5v],X7g)||(B5O[H2I](Date[m7o]()-this[o9t],O1n))){this[E9o](d2v);STX[f9o](this[(V5g+z9o+q3R)][S5g],this);this[o8l]=X7g;this[(z9o+m9o+x5o+F2o+B5O.G4o+t8o+B5O.E4o+n7O+E7t)]();this[V5o]();return ;}
else{this[o8l]=C0l;}
}
var wasMouseDown=this[O9l];this[O9l]=C0l;if(!this[P7g])return ;this[D7n]=C0l;if(B5O[z8l](this[y6t],r4o))return ;if(this[h9R]){STX[N4v](document[(S7t+O1l)],r5o);this[h9R]=C0l;return ;}
if(STXChart[(X8l+n5v+m9o+T0g+q3R)])STX[N4v](document[D7g],(F2o+B5O.G4o+y1l+j4O+m9o+R0l+j4O+B5O.r3o+p8l+z9o+q3R));if(B5O[(C9t+Y1o)](STXChart[(j7g+T4o+y7o+V0t)],X7g)){STX[f9o](this[E6v][S5g],this);this[f8o]();STXChart[V0l]=X7g;return ;}
if(!e)e=event;if((e[M0O]&&B5O[o0R](e[M0O],B5O.M4I))||(e[e9o]&&B5O[c4t](e[e9o],B5O.M4I))){if(this[J1O]){this[A7g]();if(e[U2n])e[U2n]();return C0l;}
else{return u7g;}
}
if(!e[F4o]){e[(F4o)]=e[v0g]+document[D7g][I8n]+document[q4t][I8n];e[(V7g+W3o+U0o)]=e[b1v]+document[(i9o+B5O.Z7o+x2t)][R9g]+document[q4t][R9g];}
if(B5O[(B5O.r3o+L0l)](e[F4o],this[E6v][h3l])||B5O[i2l](e[F4o],this[E6v][V8l]))return ;if(B5O[w5R](e[r2o],this.chart.top)||B5O[T9t](e[r2o],this[E6v][k5l]))return ;if(this[y2o](X9v,arguments))return ;if(wasMouseDown){var cy=this[K0o](e[r2o]),cx=this[y0o](e[F4o]);this[g9t](this[o3o],cx,cy);}
this[K6g](X9v,arguments);}
;STXChart.prototype.grabbingHand=function(){var G4n="Scr";if(!this[(O4o+f8l+G1l+G4n+B5O.Z7o+E7o)])return ;if(!this[D7n])return ;if(STX[K4t])return ;STX[V3g](document[D7g],r5o);}
;STXChart.prototype.mousedown=function(e){var A6o="StartY",Z7t="eY",U6v="llLef",L6v="v2X",N4n="L2X",W8o="D2X",B9o="h2X",x5t="T4X",v7o="P4X",E1n="f4X",h2o="u4X";if(this[y2o]("mousedown",arguments))return ;this[h9R]=false;if(B5O[h2o](this[y6t],""))return ;if(!this[P7g])return ;if(!this[p6I])return ;if(!STXChart[S8t])return ;if(this[t9l]&&e&&e[U2n])e[U2n]();this[o9t]=Date[m7o]();this[O9l]=true;if(!e)e=event;if((e[(r5v+V7v+p8l)]&&B5O[E1n](e[M0O],2))||(e[e9o]&&B5O[v7o](e[e9o],2))){return ;}
for(var p in this[p3n]){var panel=this[p3n][p];if(panel[r5t]){STXChart[V0l]=panel;return ;}
}
if(!e[F4o]){e[F4o]=e[v0g]+document[D7g][I8n]+document[q4t][I8n];e[r2o]=e[b1v]+document[D7g][R9g]+document[q4t][R9g];}
if(B5O[x5t](e[F4o],this[E6v][h3l])&&B5O[B9o](e[F4o],this[E6v][V8l])&&B5O[W8o](e[r2o],this.chart.top)&&B5O[N4n](e[r2o],this[E6v][k5l])){if(this[o8l])return ;for(var i=0;B5O[L6v](i,this[l3v].length);i++){var drawing=this[l3v][i];if(drawing[(D4t+O2n+e7o+X8l+V9l+n9g+W3o+m9o)]){if(this[A7l]){var Factory=STXChart[W1O][drawing[F2g]],clonedDrawing=new Factory;clonedDrawing[J3g](this,drawing[v2I]());this[l3v][H0l](clonedDrawing);this[o8l]=clonedDrawing;clonedDrawing[P8n]=drawing[P8n];return ;}
this[o8l]=drawing;return ;}
}
this[g9t](this[o3o],this[i7v],this[e1v]);if(this[r3t]&&this[r3t][s2v])return ;}
this[D7n]=true;this[G7v]=false;if(!e)e=event;if(!e[F4o]){e[F4o]=e[v0g]+document[D7g][(F2o+B7v+B5O.Z7o+U6v+B5O.G4o)]+document[q4t][I8n];e[(V7g+Z7t)]=e[b1v]+document[D7g][R9g]+document[q4t][R9g];}
var chart=this[o3o][E6v];this[D0o]=e[F4o];this[(O8v+P3o+A6o)]=e[r2o];this[t3O]=chart[u3O];this[d9O]=chart[L0t][b4O][u3O];this[N8t]=this[I4l][f7g];this[a7v]=this[o3o][b4O][n6v];setTimeout((function(self){return function(){self[T8O]();}
;}
)(this),100);this[K6g]("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this[w4O][E5v]=value;if(STXChart[m1n])this[g4O]();this[w3n]();if(STXChart[S8t])this[x4n]();}
;STXChart.prototype.rightClickOverlay=function(name){var x0R="ys";if(this[y2o](T0t,arguments))return ;var sd=this[(B5O.Z7o+o1l+f9t+z9o+x0R)][name];if(sd[H9O]){sd[H9O]();}
else{this[q1o](name);}
this[K6g](T0t,arguments);}
;STXChart.prototype.removeOverlay=function(name){var N9n="deleteRHS",G7t="Field";if(this[y2o](q1o,arguments))return ;for(var o in this[W1t]){var sd=this[W1t][o];if(sd[z9O][G7t]&&sd[z9O][G7t][J7t](name)!=-B5O.i4I){this[q1o](sd[F2g]);}
}
var study=this[I4l][v8n][name];delete  this[I4l][(F2o+U3l+T8v+F2o)][name];delete  this[W1t][name];STX[N9n](STX[Q2v][B0g],study);this[t7o]();this[w0n]();this[E9o](I4l);this[(B5O.E4o+c4o+y7o+R3n+c2o+U4O+m9o)](q1o,arguments);}
;STXChart.prototype.addSeries=function(field,parameters){var T9l="y2X",O6o="p2X";if(this[y2o]("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters[i2O])parameters[i2O]=this[E6v][F2g];var obj={parameters:STX[z9v](parameters),yValueCache:new Array(),display:field,isStep:(parameters[c8g]&&B5O[O6o](parameters[c8g],"step"))}
;if(B5O[(T9l)]((m9o+M3R+c2o+e7o+z9o+O1l),obj[(c2o+M2I+z9o+L6o+W3o+H4o+B5O.E4o+F2o)]))obj[O2l]=obj[o2O][O2l];var chart=this[Q9g][parameters[i2O]];function addSeriesData(stx){var q2n="l2X",j1t="Value",N7o="b2",r0l="i2X",g2n="J2X",mIterator=0,cIterator=0;while(parameters.data&&B5O[g2n](mIterator,stx[h1g].length)&&B5O[r0l](cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx[h1g][mIterator];if(!c[x0v]||typeof c[x0v]=="undefined")c[x0v]=STX[w0v](c[E7n]);if(B5O[(N7o+Y1o)](c[(t8o+p2I)][f2v](),m[(x0v)][f2v]())){m[field]=c[j1t];cIterator++;mIterator++;continue;}
if(B5O[q2n](c[x0v],m[x0v]))cIterator++;else mIterator++;}
}
if(parameters.data&&this[h1g]){addSeriesData(this);}
else{obj[g2v]=addSeriesData;}
if(chart)chart[p6g][field]=obj;this[K6g]("addSeries",arguments);return obj;}
;STXChart.prototype.removeSeries=function(field,chart){var A3v="d2X",P5o="z2X",H7t="X2X",A4v="n2X",Z4t="setComparison";if(this[y2o]("removeSeries",arguments))return ;if(!chart)chart=this[E6v];delete  chart[p6g][field];var compare=false;for(var s in chart[p6g]){if(chart[(F2o+n7n+F2o)][s][o2O][y8O]){compare=true;break;}
}
this[Z4t](this,chart,compare);for(var panel in this[p3n]){if(B5O[A4v](this[p3n][panel][(y7o+z9o+L6o+W3o)][J7t](STX[f4O][U1n]),0)){var compareArray=this[I4l][v8n][this[p3n][panel][F2g]][z9O]["Compare To"];for(var i=0;B5O[H7t](i,compareArray.length);i++){if(B5O[P5o](compareArray[i],field))compareArray[K1l](i,1);}
delete  this[I4l][v8n][this[p3n][panel][(C0n+X2l)]][E6o]["Result "+field];delete  this[I4l][v8n][this[p3n][panel][F2g]][P0n]["Result "+field+" "+this[p3n][panel][F2g]];if(B5O[A3v](compareArray.length,0))this[h9l](this[p3n][panel]);}
}
this[K6g]("removeSeries",arguments);}
;STXChart.prototype.drawLegendItem=function(xy,label,color){var M7o="def",x=xy[B5O.b4I],y=xy[B5O.i4I],w=n3l,h=n3l,context=this[E6v][x3t];context.fillStyle=color;context.fillRect(x,y,w,h);x+=w+B5O.M4I;context.fillStyle=this[(M7o+z9o+c4o+n3O+H5g+w3g)];context.fillText(label,x,y);x+=context.measureText(label).width+6;return [x,y];}
;STXChart.prototype.drawLegend=function(chart,legendColorMap){var j7t="drawLegendItem",X2g="sC",m8t="canva",A6v="A7X",Y1g="Typ",S6O="V7X",o3v="K7X",L8g="O7X",R9v="j2X",C3g="x2X",W5O="w2X";if(this[y2o]("drawLegend",arguments))return ;var context=this[E6v][x3t];context.textBaseline="top";var xy=[chart[G5v][y1l],chart[G5v][O1l]],lineColor=this[k2O];if(B5O[W5O](this[E6v][d7o],Array)){var colors=this[E6v][d7o];if(B5O[C3g](colors.length,1)){var grd=context.createLinearGradient(xy[0],xy[1],xy[0]+10,xy[1]);for(var c=0;B5O[R9v](c,colors.length);c++){grd.addColorStop(B5O[(L8g)](c,(colors.length-1)),colors[c]);}
lineColor=grd;}
else if(B5O[o3v](colors.length,0))lineColor=colors[0];}
else if(B5O[S6O](this[I4l][(B5O.r3o+p8l+M2I+B5O.G4o+Y1g+W3o)],"mountain")){var c=this[e9v]("stx_mountain_chart"),strokeStyle=c["borderTopColor"];if(strokeStyle&&B5O[A6v](strokeStyle,"transparent"))lineColor=strokeStyle;}
else{lineColor=this[(m8t+X2g+B5O.Z7o+f8l+B5O.E4o)]((F2o+B5O.G4o+y1l+Q5o+Q9t+W3o+Q5o+V5g+M2I+B5O.G4o));}
xy=this[j7t](xy,chart[L2O],lineColor);for(var field in legendColorMap){var display=field;if(legendColorMap[field]["display"])display=legendColorMap[field]["display"];xy=this[j7t](xy,display,legendColorMap[field][(B5O.r3o+B5O.Z7o+w3g)]);}
this[K6g]("drawLegend",arguments);}
;STXChart.prototype.drawSeries=function(chart){var C5R="YAxis",l6l="h8N",c0n="T6X",p8R="P6X",J6l="f6X",D1g="ete",H3R="u6X",L3g="e6X",w6I="Q6X",o2I="Z6X",t6I="c6X",R2g="S6X",S9v="a6X",A7t="g6X",r5g="F6X",A9R="r6X",o7t="W6X",b5n="t6X",H5t="k6X",J7O="C6X",c2g="m7X",J0R="shareYAxis",s4I="E7X",k2o="ueC",d3o="B7X",s0O="sSt",Q7v="Y7X",H2O="o7X",z3g="H7X",A2t="I7X",h8l="R7X",V5R="G7X",H1g="marginBottom",e7v="marginTop",Y7g="U7X",Z5l="q7X",h2n="M7X",n4t="minMax",U3R="N7X",l5v="s7X",N4t="maximum",F4g="minimum";if(this[y2o]("drawSeries",arguments))return ;var quotes=chart[J4I],legendColorMap={}
;for(var field in chart[p6g]){var series=chart[p6g][field],parameters=series[o2O],panel=chart[L0t];if(parameters[L0t])panel=this[(c2o+w4t+e7o+F2o)][parameters[L0t]];if(!panel)continue;var yAxis=panel[(O1l+v5O)],bottom=panel[k5l],minMax=[parameters[F4g],parameters[N4t]];if((!parameters[F4g]&&B5O[l5v](parameters[F4g],0))||(!parameters[(A0o+i0R+M8O)]&&B5O[U3R](parameters[N4t],0))){var minMaxCalc=STX[n4t](quotes,field);if(!parameters[F4g]&&B5O[h2n](parameters[F4g],0))minMax[0]=minMaxCalc[0];if(!parameters[N4t]&&B5O[Z5l](parameters[N4t],0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yAxis.top,bottom=yAxis[k5l],height=B5O[(Y7g)](bottom,top),t=parameters[e7v],b=parameters[H1g];if(t)top=B5O[V5R](t,1)?(top+t):(top+(B5O[h8l](height,t)));if(b)bottom=B5O[A2t](b,1)?(B5O[z3g](bottom,b)):(B5O[H2O](bottom,(height*b)));var multiplier=B5O[Q7v]((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=x=y=px=py=null,cw=this[I4l][f7g],offset=this[F9v],context=this[E6v][(B5O.r3o+B5O.Z7o+y7o+a1g+B5O.G4o)],isStep=series[(X8l+s0O+W3o+c2o)];context.beginPath();if(B5O[d3o](series[K1g].length,quotes.length))series[K1g]=new Array(quotes.length);var yValueCache=series[(O1l+W1n+e7o+k2o+i5o+u0t)],reset=false,lastVal=null,firstX=null,firstY=null;for(var i=0;B5O[s4I](i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.transform&&series[o2O][J0R])quote=quote.transform;val=quote[field];if(!val&&B5O[(c2g)](val,0)){if(isStep){yValueCache[i]=y;}
continue;}
lastVal=val;if(!isStep&&lastPoint&&B5O[J7O](lastPoint,i-1)){px=x,py=y;}
else{px=null;}
x=Math[J8l](B5O[H5t](i,cw)+this[Y3g])+offset;if(this[p4O]&&B5O[(b5n)](i,quotes.length-1)){x+=this[F9v];}
if(B5O[o7t](firstX,null))firstX=x;if(isStep&&started){context.lineTo(x,y);}
if(series[o2O][J0R]){y=this[(H4t+y1l+V0t+M8o+B5O.E4o+B5O.Z7o+L6o+q7I+B5O.E4o+s4g)](val,panel);}
else{y=B5O[A9R](bottom,((val-min)*multiplier));}
if(B5O[r5g](firstY,null))firstY=y;if(B5O[A7t](px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;B5O[S9v](lastPoint,i);lastPoint++){var xInt=Math[(E8l+f8l+J8t)](B5O[R2g](lastPoint,cw))+offset,yInt=STX[b9t](vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(B5O[t6I](y,top)){y=top;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(B5O[o2I](y,bottom)){y=bottom;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!started){started=true;var leftTick=B5O[w6I](chart[e2O].length,chart[u3O]);if(B5O[L3g](leftTick,0)){context.moveTo(x,y);}
else{var baseline=chart[(b2n+d5l+B5O.G4o)][B5O[H3R](leftTick,1)];if(baseline.transform&&series[o2O][J0R])baseline=baseline.transform;var y0=baseline[field];if(series[(n7t+B5O.E4o+z9o+L6o+D1g+B5O.E4o+F2o)][J0R]){y0=this[x8n](y0,panel);}
else{y0=B5O[J6l](bottom,((y0-min)*multiplier));}
y0=Math[h7I](Math[A0o](y0,top),bottom);context.moveTo(0,y0);context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
lastPoint=i;}
context.lineWidth=1;if(parameters.width)context.lineWidth=parameters.width;if(series[I5g])context.lineWidth=B5O[p8R](context.lineWidth,2);context.strokeStyle=this[k2O];if(parameters[w5o])context.strokeStyle=parameters[w5o];context.stroke();if(B5O[c0n](series[o2O][c5g],"mountain")){context.lineTo(x,bottom);context.lineTo(firstX,bottom);if(B5O[l6l](firstY,bottom))firstY=bottom;context.lineTo(firstX,firstY);if(series[o2O].fillStyle)context.fillStyle=series[o2O].fillStyle;context.fill();}
context.closePath();if(series[o2O][(F2o+B5O.w2t+j7g+C5R)]){if(yAxis[v0t]){txt=yAxis[v0t](this,panel,lastVal);}
else{txt=this[H3O](lastVal,panel);}
var y=this[x8n](lastVal,panel);this[d7n](panel,txt,y,context.strokeStyle,"#FFFFFF");}
legendColorMap[field]={color:context.strokeStyle,display:series[O2l]}
;}
if(chart[G5v]&&series){this[G5o](chart,legendColorMap);}
this[K6g]("drawSeries",arguments);}
;STXChart[z2o]=function(interval){var l5n="v8N",L4l="L8N",X6l="D8N";if(B5O[X6l](interval,y7n))return u7g;if(B5O[L4l](interval,d3t))return u7g;if(B5O[l5n](interval,V1v))return u7g;return C0l;}
;STXChart.prototype.isDailyInterval=function(interval){var F5l="J8N",U4t="8N",G2O="p8N";if(B5O[G2O](interval,y7n))return u7g;if(B5O[(O1l+U4t)](interval,d3t))return u7g;if(B5O[F5l](interval,V1v))return u7g;return C0l;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,cb){var z6v="R9N",b1o="G9N",M0l="U9N",J2O="q9N",x9v="M9N",t2n="9N",h5O="s9N",C5v="A9N",B1I="dataS",a1O="V9N",z7n="K9N",F3t="O9N",i1O="j8N",h4n="men",I7I="x8N",w2g="w8N",r5R="d8N",y5O="z8N",p8O="X8N",i7o="n8N",P0o="l8N",o1t="b8N",B3t="i8N";if(this[y2o]("setPeriodicityV2",arguments))return ;var switchInterval=false;if(interval){if(B5O[B3t](interval,"year")){interval="month";if(!period)period=1;period=B5O[o1t](period,12);}
var getDifferentData=false;if(this[(V5g+M2I+B5O.G4o)][L2O]){if(B5O[P0o](this[z2o](interval),this[z2o](this[I4l][q3v]))||this[P7O])getDifferentData=true;if(!this[z2o](this[I4l][q3v])){if(B5O[i7o](this[I4l][q3v],interval))getDifferentData=true;}
}
if(getDifferentData){this[(e7o+R8o+B5O.Z7o+N5O)][q3v]=interval;this[I4l][X5l]=period;this[E9o]("layout");if(this[u6t]){for(var chartName in this[(Q9g)]){var chart=this[Q9g][chartName];if(chart[L2O])this[u6t][m3l]({symbol:chart[(F2o+O1l+L6o+o4t)],chart:chart}
,cb);}
return ;}
else if(this[N6I]){this[N6I]();if(cb)cb(null);return ;}
}
this[I4l][q3v]=interval;}
for(var chartName in this[Q9g]){var chart=this[Q9g][chartName],dt,pos=Math[Q6v](B5O[p8O](chart[z1v],2)),rightAligned=null;chart[z1v]=Math[Q6v](B5O[y5O]((this[E6v].width/this[I4l][f7g]),.499));var centerMe=true,rightAligned=false;if(B5O[r5R](chart[u3O],chart[z1v]))centerMe=false;else if(chart[J4I]&&!chart[J4I][pos]){centerMe=false;rightAligned=B5O[w2g](chart[u3O],chart[e2O].length);}
if(centerMe&&chart[J4I]&&B5O[I7I](chart[(m9o+z9o+B5O.G4o+i2o+g5t+h4n+B5O.G4o)].length,0)){if(B5O[i1O](chart[z1v],((Math[(B5O.E4o+B5O.Z7o+f1I)]((this[E6v].width/this[I4l][f7g])-.499)-1)/2))){pos=B5O[F3t](chart[J4I].length,1);}
if(B5O[z7n](pos,chart[J4I].length)){dt=chart[J4I][B5O[a1O](chart[(B1I+g5t+L6o+W3o+b6O)].length,1)][x0v];pos=B5O[C5v](chart[J4I].length,1);}
else{dt=chart[J4I][pos][(x0v)];}
}
this[I4l][X5l]=period;this[w0n]();if(centerMe){if(chart[J4I]&&B5O[h5O](chart[J4I].length,0)){for(var i=B5O[(f2I+t2n)](chart[e2O].length,1);B5O[x9v](i,0);i--){var nd=chart[e2O][i][x0v];if(B5O[J2O](nd[(V9l+W3o+X9o+i0R+W3o)](),dt[f2v]())){chart[u3O]=(B5O[M0l](chart[e2O].length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math[Q6v](B5O[b1o](this[x3l][J3O],this[I4l][f7g]));chart[u3O]=B5O[z6v](chart[z1v],wsInTicks);}
else{chart[u3O]=chart[e2O].length+rightAligned;}
}
if(this[P7g])this[V5o]();this[E9o]((C1l+m4g));if(this[u6t]){for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];if(chart[L2O]&&chart[H8g]){this[(I9n+B5O.G4o+Q3v+g2g+L0O+B5O.E4o)][p6t](chart);}
}
}
if(cb)cb(null);this[K6g]("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){var l6n="H9N",Y3R="I9N";if(this[B5v])return ;if(this[y2o]("drawVectors",arguments))return ;this[B5v]=true;if(!this[E6v][O2g]){var tmpPanels={}
;for(var i=0;B5O[Y3R](i,this[l3v].length);i++){var drawing=this[l3v][i],panelName=drawing[H6t];if(!this[p3n][drawing[H6t]])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName][H0l](drawing);}
for(var panelName in tmpPanels){this[W8O](panelName);var arr=tmpPanels[panelName];for(var i=0;B5O[l6n](i,arr.length);i++){var drawing=arr[i];drawing[m7g](this[E6v][x3t]);}
this[g9n]();}
}
this[K6g]("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,dontRoll,alignToHour){var z4l="consolidate",Z2O="plugi",X6g="j5N",l2l="w5N",I5O="d5N",l5R="z5N",B3o="X5N",A1n="n5N",x8v="l5N",s8o="b5N",W8n="i5N",q0O="J5N",l7n="y5N",F8t="p5N",K3o="v5N",Y9g="L5N",X1g="epend",W5t="o9N";if(B5O[W5t](position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this[(B5O.E4o+c4o+c1v+X1g)]("consolidatedQuote",arguments$))return null;if(!dontRoll&&this[P7O])dontRoll=true;var quote=quotes[position];function consolidate(self,p){var L9g="a3N",t9n="g3N",C7I="F3N",k9l="r3N",S3R="3N",O1o="t3N",n7I="k3N",i8g="C3N",M0t="m9N",c7l="E9N",M5v="dj",D6o="B9N",o3l="Y9N";if(self[I4l][w5O]&&B5O[o3l](quotes[p][M9v],null)){ratio=B5O[D6o](quotes[p][M9v],quotes[p][X5g]);}
else if(self[I4l][(z9o+M5v)]&&B5O[c7l](quotes[p][S0n],null)){ratio=B5O[M0t](quotes[p][S0n],quotes[p][X5g]);}
if(B5O[i8g]("High",quotes[p]))if(B5O[n7I](quotes[p][c2I]*ratio,quote[c2I]))quote[c2I]=B5O[O1o](quotes[p][c2I],ratio);if(B5O[(V4o+S3R)]("Low",quotes[p]))if(B5O[k9l](quotes[p][l1O]*ratio,quote[l1O]))quote[l1O]=B5O[C7I](quotes[p][l1O],ratio);quote[W8t]+=quotes[p][W8t];if(B5O[t9n]("Close",quotes[p])&&B5O[L9g](quotes[p][X5g],null))quote[X5g]=B5O[(C2I+l2O+f2I)](quotes[p][X5g],ratio);quote[X1O]=ratio;}
function newInterval(p,interval){var K7t="e3N",z9g="Q3N",E0n="Z3N",P2g="c3N",d1=quotes[B5O[P2g](p,1)][x0v],d2=quotes[p][x0v];if(B5O[E0n](interval,"week")){if(B5O[z9g](d2[(V9l+Z9t+t8o+R8o)](),d1[s0o]()))return true;}
else if(B5O[K7t](interval,"month")){if(B5O[(c4o+l2O+f2I)](d2[B6g](),d1[B6g]()))return true;}
else{if(B5O[(E8l+l2O+f2I)](d2[s0o](),d1[s0o]()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval){var H9v="D5N",g6v="h5N",S0v="T3N",T5O="P3N",nextBar=B5O[T5O](interval,periodicity),d1=new Date(quotes[position][x0v]);d1[x8R](d1[x2o]()+nextBar);var d2=quotes[p][x0v];if(alignToHour){if(B5O[S0v](quotes[position][x0v][x2o](),nextBar)){if(!(B5O[g6v](d2[x2o](),nextBar))){return true;}
}
}
if(B5O[H9v](d2[f2v](),d1[(V9l+Z9t+w3v+X2l)]()))return true;return false;}
var p=position;if((B5O[Y9g](interval,"week")||B5O[K3o](interval,"month"))&&!dontRoll){for(var i=1;B5O[F8t](i,periodicity);i++){while(B5O[l7n](p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(B5O[(q0O)](i,periodicity)){p++;if(B5O[W8n](p,quotes.length))consolidate(this,p);}
}
}
else if(!this[z2o](interval)&&B5O[s8o](interval,"tick")&&B5O[x8v](periodicity,1)){for(var i=1;B5O[A1n](i,periodicity);i++){p=position+i;if(B5O[B3o](p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval)){p--;break;}
if(B5O[l5R](p,0)&&B5O[I5O](p,quotes.length)){consolidate(this,p);}
}
}
else{for(var i=1;B5O[l2l](i,periodicity);i++){p=position+i;if(B5O[(y1l+n5n+f2I)](p,0)&&B5O[X6g](p,quotes.length)){consolidate(this,p);}
}
}
for(var i in this[(Z2O+y7o+F2o)]){var plugin=this[y9g][i];if(plugin[z4l])plugin[z4l](quotes,position,p,quote);}
this[K6g]("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;W(B5O.b4I);F(B5O.i4I);J(B5O.M4I);S(B5O.Z4I);R(B5O.H4I);X(B5O.v3l);H(x9l);STXChart.prototype.displayChart=function(chart){var l9O="scatter",u9v="J4N",T1o="sCo",V8O="tCanv",Y1v="preparePeakValleyFill",t3n="hexToRgba",j2O="y4N",O8n="p4",R5R="v4N",M2t="Col",a2v="L4N",Y2o="wLin",a7g="h4N",R9O="EU",o7n="ANDL",Z7l="_u",a1l="stx_ca",m7I="T1N",N1v="sOn",j7I="noW",T7g="tmpW",t0v="P1N",U4g="x_candle_do",X8n="r1N",j0g="w_do",C4O="ado",k1t="e_",Y9v="W1N",i7t="seLe",m0g="LOSEEV",a0v="t1N",c9n="k1N",b8t="C1N",J9t="nerColor",n8n="OW",A3g="LED",l4t="AN",i9R="m0N",s6l="E0N",u7o="B0N",J0g="drawCandlesHighPerformance",d0O="Perfor",H4g="sH",i9l="wShado",r4I="drawShadowsHighPerformance",B1n="drawCandles",B3O="awC",c8v="drawShadows",A1o="noWicksOnCandles",p5l="Y0N",A9n="nva",Y7l="EN",a4l="EE",k6g="Per",R1o="rChar",s2n="SEU",J3R="CL",D2t="drawBarChart",T4n="o0N",L2v="R0N",i6g="r_",Z1o="stx_ba",N7I="drawBarChartHighPerformance",F0o="G0N",o0o="drawWaveChart",z0l="U0N",R1O="drawMountainChart",Y4O="q0N",F0R="drawLineChart",e3v="M0N",D3o="FigureCh",E1g="oin",y2g="drawPointFigureChart",U4I="N0N",F6o="getCanvasColor",r8R="eLege",W5n="bas",r9g="drawKagiSquareWave",M5O="s0N",a5l="volUnderlay",J9O="eUnd",d8v="colorFunction",v5g="A0N",R1t="V0N",K5R="customChart",o5R="O0N",R6o="tm";this[(R6o+c2o+V4o+E1v+B5O.G4o+p8l)]=Math[Q6v](B5O[o5R](this[(e7o+R8o+B5O.Z7o+N5O)][f7g],this[m3n]));if(!(B5O[(r6I+w2O+f2I)](this[o5t],2))){this[(B5O.G4o+L6o+c2o+W4o+m9o+S7o)]+=1;}
if(this[y2o]("displayChart",arguments))return ;this[(B5O.r3o+p8l+z9o+B5O.E4o+B5O.G4o)][d7o]=[];var chartType=this[I4l][c5g],colorFunction=null;if(chart[K5R]){if(B5O[(R1t)](chart[K5R][c5g],null))chartType=chart[K5R][c5g];if(B5O[v5g](chart[K5R][d8v],null))colorFunction=chart[K5R][d8v];}
if(this[I4l][(o1l+B5O.Z7o+e7o+M8O+J9O+W3o+B5O.E4o+e7o+z9o+O1l)]){this[a5l](chart);}
if(B5O[M5O](this[I4l][E5o],"kagi")){this[r9g](chart,"stx_kagi_up","stx_kagi_down");this[E6v][(W5n+r8R+J5n+H5g+e7o+B5O.Z7o+B5O.E4o+F2o)][H0l](this[F6o]("stx_kagi_up"));this[E6v][d7o][H0l](this[F6o]("stx_kagi_down"));}
else if(B5O[U4I](this[I4l][E5o],"pandf")){this[y2g](chart,"stx_pandf_up","X");this[E6v][d7o][H0l](this[F6o]("stx_pandf_up"));this[(k9v+G1l+q7I+E1g+B5O.G4o+D3o+z9o+q3R)](chart,"stx_pandf_down","O");this[E6v][d7o][H0l](this[F6o]("stx_pandf_down"));}
else if(B5O[e3v](chartType,"line")){this[F0R](chart,"stx_line_chart");}
else if(B5O[Y4O](chartType,"mountain")){this[E6v][d7o]=null;this[R1O](chart);}
else if(B5O[z0l](chartType,"wave")){this[o0o](chart);}
else if(B5O[F0o](chartType,"bar")){this[N7I](chart,(Z1o+i6g+A2n+q3R));}
else if(B5O[L2v](chartType,"colored_line")){var stxLineUpColor=this[F6o]("stx_line_up"),stxLineDownColor=this[F6o]("stx_line_down"),stxLineColor=this[F6o]("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){var g6g="H0N",d3g="I0N";if(B5O[d3g](quote[X5g],quote[H7O]))return stxLineUpColor;else if(B5O[g6g](quote[X5g],quote[H7O]))return stxLineDownColor;else return stxLineColor;return null;}
;var colors=this[F0R](chart,"stx_line_chart",colorFunction);for(var c in colors)this[E6v][d7o][H0l](c);}
else if(B5O[T4n](chartType,"colored_bar")){if(colorFunction){var colors=this[D2t](chart,"stx_bar_chart",colorFunction);for(var c in colors)this[E6v][d7o][H0l](c);}
else{this[N7I](chart,"stx_bar_up",STXChart[(J3R+V7I+s2n+q7I)]);this[(m9o+B5O.E4o+z9o+G1l+W3n+z9o+R1o+B5O.G4o+O9o+W4v+p8l+k6g+E8l+X4g+z9o+y7o+H3g)](chart,"stx_bar_down",STXChart[T7t]);this[N7I](chart,"stx_bar_even",STXChart[(B5O.T9n+n6I+V7I+C2I+a4l+L1o+Y7l)]);this[(B5O.r3o+B5O.w2t+B5O.E4o+B5O.G4o)][d7o][H0l](this[(c7n+B5O.T9n+z9o+A9n+F2o+v4t)]("stx_bar_up"));this[E6v][d7o][H0l](this[F6o]("stx_bar_down"));}
}
else if(B5O[(p5l)](chartType,"hollow_candle")){if(colorFunction){if(!this[A1o][this[I4l][E5o]])this[c8v](chart,colorFunction);this[(m9o+B5O.E4o+B3O+z9o+y7o+m9o+Z4o+F2o)](chart,colorFunction,false);this[B1n](chart,colorFunction,true);}
else{if(!this[A1o][this[I4l][E5o]]){this[r4I](chart,"stx_hollow_candle_up",STXChart[x7v]);this[r4I](chart,"stx_hollow_candle_down",STXChart[T7t]);this[(k9v+i9l+G1l+H4g+W4v+p8l+d0O+H5O+Z5n+W3o)](chart,"stx_hollow_candle_even",STXChart[i9n]);}
var colorUp=this[F6o]("stx_hollow_candle_up"),colorDown=this[F6o]("stx_hollow_candle_down"),colorEven=this[F6o]("stx_hollow_candle_even");this[J0g](chart,colorUp,"transparent",B5O[u7o](STXChart[x7v],STXChart[c3O]));this[J0g](chart,colorDown,"transparent",B5O[s6l](STXChart[T7t],STXChart[c3O]));this[J0g](chart,colorEven,"transparent",B5O[i9R](STXChart[i9n],STXChart[(B5O.T9n+l4t+t8o+A3g+n8n+f2I)]));this[J0g](chart,this[(B5O.r3o+B5O.Z7o+y7o+B5O.G4o+z9o+X8l+J9t)],colorUp,B5O[b8t](STXChart[x7v],STXChart[A6t]));this[J0g](chart,this[B2o],colorDown,B5O[c9n](STXChart[T7t],STXChart[A6t]));this[J0g](chart,this[B2o],colorEven,B5O[a0v](STXChart[(B5O.T9n+m0g+T6I+f2I)],STXChart[A6t]));this[E6v][(O0R+i7t+Z4n+y7o+m9o+B5O.T9n+B5O.Z7o+f8l+o3R)][H0l](colorUp);this[(B5O.r3o+p8l+z9o+B5O.E4o+B5O.G4o)][d7o][H0l](colorDown);}
}
else if(B5O[Y9v](chartType,(B8n+e7o+W3o))){var coloredShadowUp=this[F6o]("stx_candle_shadow_up"),coloredShadowDown=this[F6o]((F2o+B5O.G4o+j4t+T5g+y7o+m9o+e7o+k1t+F2o+p8l+C4O+j0g+b3v)),coloredShadow=(B5O[X8n](coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this[F6o]("stx_candle_shadow"),stxCandleUpColor=this[F6o]("stx_candle_up"),stxCandleDownColor=this[F6o]((T9o+U4g+G1l+y7o)),stxCandleUp=this[e9v]("stx_candle_up"),stxCandleDown=this[e9v]("stx_candle_down");colorFunction=function(stx,quote,mode){var W1o="f1N",t4l="u1N",U0n="e1N",G3g="los",d9t="Q1N",E2I="Z1",Q0t="c1N",Y6n="a1N",u9l="g1N",P2l="F1N";if(B5O[P2l](mode,"shadow")){if(coloredShadow){if(B5O[u9l](quote[X5g],quote[T2l]))return coloredShadowUp;else if(B5O[Y6n](quote[X5g],quote[T2l]))return coloredShadowDown;}
return stxCandleShadow;}
else if(B5O[(C2I+K7O+f2I)](mode,"solid")){if(B5O[Q0t](quote[X5g],quote[T2l]))return stxCandleUpColor;else if(B5O[(E2I+f2I)](quote[X5g],quote[T2l]))return stxCandleDownColor;else if(B5O[d9t](quote[(B5O.T9n+G3g+W3o)],quote[T2l]))return stxCandleShadow;}
else if(B5O[U0n](mode,"outline")){var styleArray;if(B5O[t4l](quote[X5g],quote[T2l]))styleArray=stxCandleUp;else if(B5O[W1o](quote[X5g],quote[(o4I+W3o+y7o)]))styleArray=stxCandleDown;else return null;var borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];return borderColor;}
return null;}
;}
if(colorFunction){if(!this[A1o][this[I4l][E5o]])this[c8v](chart,colorFunction);this[B1n](chart,colorFunction,false);if(B5O[t0v](this[(T7g+X8l+m9o+B5O.G4o+p8l)],3))this[B1n](chart,colorFunction,true);}
else{if(!this[(j7I+V7v+H6o+N1v+B5O.T9n+z9o+y7o+m9o+g4g)][this[I4l][E5o]])this[r4I](chart,"stx_candle_shadow");var styleArray=this[e9v]("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];if(B5O[m7I](this[o5t],3))borderColor=null;this[J0g](chart,this[F6o]((a1l+y7o+m9o+e7o+W3o+Z7l+c2o)),borderColor,STXChart[(B5O.T9n+o7n+R9O+q7I)]);this[E6v][d7o][H0l](styleArray[(B5O.r3o+B5O.Z7o+e7o+J8t)]);var styleArray=this[(B5O.r3o+g3v+A7I+h6n+O1l+e7o+W3o)]("stx_candle_down"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray["borderLeftColor"];if(B5O[a7g](this[o5t],3))borderColor=null;this[J0g](chart,this[F6o]("stx_candle_down"),borderColor,STXChart[c3O]);this[E6v][d7o][(c2o+c4o+F2o+p8l)](styleArray[w5o]);}
}
else if(B5O[(r1g+f2I)](chartType,"baseline_delta")){this[(x2I+B5O.G4o+h6n+c3R+W3o)]("stx_baseline_trace","opacity",0);this[(y8v+z9o+Y2o+h5v+p8l+z9o+B5O.E4o+B5O.G4o)](chart,"stx_baseline_trace");var baseline=chart[L0R];if(baseline){baseline=this[U7v](chart[L0R],chart[L0t]);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:(h6I+W3o),threshold:chart[L0R],color:this[F6o](styles[s]),direction:(B5O[a2v](s,"over")?1:-1),edgeHighlight:this[(Z4n+D4n+M2t+J8t)](styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this[e9v](styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters[w5o];if(color&&B5O[R5R](color,"transparent")){var gradient=chart[x3t].createLinearGradient(0,(B5O[(O8n+f2I)](s,(y2v))?0:B5O[j2O](2,baseline)),0,baseline);gradient.addColorStop(0,STX[t3n](color,60));gradient.addColorStop(1,STX[t3n](color,10));parameters[w5o]=gradient;parameters[o0O]=1;}
STX[Q2v][Y1v](this,chart[J4I],parameters);this[(B5O.r3o+l3R+B5O.G4o)][d7o][H0l](color);}
this[F8R](0,1,baseline,baseline,this[B2o],"line",chart[x3t],true,{pattern:(T0O+E1v),lineWidth:"1.1",opacity:1}
);this[F8R](0,1,baseline,baseline,this[(V9l+W3o+V8O+z9o+T1o+e7o+J8t)]("stx_baseline"),"line",chart[x3t],true,{pattern:"dotted",lineWidth:(W2O+h4O+K7O),opacity:.5}
);}
}
else if(B5O[u9v](chartType,"scatterplot")){this[l9O](chart);}
this[m2l](chart);this[K6g]("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){var J0O="w4N",x4O="atr",Q7n="trueRange",x5n="d4N",j9g="z4N",m5R="X4N",a7o="4N",w5l="Hig",s9t="l4N",a8l="b4N",y6I="i4N";if(!period)period=20;var total=0;for(var i=1;B5O[y6I](i,chart[e2O].length);i++){var prices=chart[e2O][i],pd=chart[e2O][B5O[a8l](i,1)],trueRange=Math[(L6o+z9o+y1l)](Math[A0o](B5O[s9t](prices[(w5l+p8l)],prices[l1O]),B5O[(y7o+a7o)](prices[c2I],pd[X5g])),B5O[m5R](pd[X5g],prices[(n6I+B5O.Z7o+G1l)]));total+=trueRange;if(B5O[j9g](i,period))total-=chart[e2O][B5O[x5n](i,period)][Q7n];prices[Q7n]=trueRange;prices[x4O]=B5O[J0O](total,period);}
}
;STXChart.prototype.currentQuote=function(){var x1t="O2N",D6v="j4N",g1n="x4N",quote=null;for(var i=B5O[g1n](this[E6v][e2O].length,1);B5O[D6v](i,0);i--)if(B5O[x1t](this[E6v][e2O][i],null))return this[E6v][e2O][i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){var F7o="Edge",C3O="G2N",i2I="U2N",f5t="q2N",o7O="M2N",N4l="N2N",W5o="s2N",w0o="A2N",D4g="V2N",q3o="K2N";if(this[y2o]("correctIfOffEdge",arguments))return ;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName],leftPad=Math[Q6v](B5O[q3o](chart[z1v],3));if(B5O[D4g](leftPad,chart[e2O].length))leftPad=chart[e2O].length;if(chart[X6O]){var rightPad=B5O[w0o](chart[z1v],leftPad);if(B5O[W5o](chart[z1v]-rightPad,chart[e2O].length)){rightPad=B5O[N4l](chart[z1v],chart[e2O].length);}
if(B5O[o7O](chart[u3O]-rightPad,chart[e2O].length)){chart[u3O]=chart[e2O].length+rightPad;}
if(B5O[f5t](chart[u3O],leftPad)){chart[u3O]=leftPad;}
}
else{if(B5O[i2I](chart[u3O],leftPad)){chart[u3O]=leftPad;}
if(B5O[C3O](chart[u3O],chart[e2O].length)){chart[u3O]=chart[e2O].length;}
}
}
this[K6g]((B5O.r3o+B5O.Z7o+w7l+o6v+c7I+E8l+V7I+E8l+E8l+F7o),arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var l0v="x2N",x0O="w2N",e0t="d2N",E6I="z2N",t3g="scro",b9o="I2N",u8g="includeBaselineInDataSegment",i1n="R2N";if(this[y2o]("createDataSegment",arguments))return ;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];if(theChart)chart=theChart;chart[(i1v+B5O.G4o+d5l+t8t+y7o+B5O.G4o)]=[];chart[L0R]=null;for(var i=-1;B5O[i1n](i,chart[z1v]);i++){if(i==-1&&!chart[u8g])continue;position=B5O[b9o](chart[e2O].length,chart[(t3g+E7o)],i);if(B5O[E6I](position,chart[e2O].length)&&B5O[e0t](position,0)){chart[J4I][H0l](chart[e2O][position]);if(!chart[L0R]&&B5O[x0O](i,0))chart[L0R]=chart[(m9o+B2I+i2o+W3o+B5O.G4o)][position][H7O];}
else if(B5O[l0v](position,0)){chart[(m9o+z9o+B5O.G4o+z9o+C2I+W3o+V9l+L6o+H6n+B5O.G4o)][H0l](null);}
}
if(theChart)break;}
this[K6g]("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){var Z3g="2N";return B5O[(g6o+Z3g)](this[E6v][e2O].length,this[E6v][u3O]);}
;STXChart.prototype.getStartDateOffset=function(){var O8O="K7N",E0g="O7N";for(var ds=0;B5O[E0g](ds,this[E6v][J4I].length);ds++){if(B5O[O8O](this[E6v][J4I][ds],null)){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){var r2t="s7N",U9R="A7N",y0t="V7N";for(var i=0;B5O[y0t](i,this[E6v][e2O].length);i++){var bar=this[E6v][e2O][i];if(B5O[U9R](bar[x0v][f2v](),dt[f2v]())){this[E6v][u3O]=B5O[r2t](this[E6v][e2O].length,i);this[V5o]();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){var N5t="listener";for(var i in this[y9g]){var plugin=this[y9g][i];if(plugin[O2l]&&plugin[N5t])plugin[(X2o+T9o+W3o+V5n+B5O.E4o)](this,event);}
}
;STXChart.prototype.clearPixelCache=function(){var D9R="N7N";for(var x in this[p3n]){var panel=this[(c2o+z9o+y7o+W3o+e7o+F2o)][x];panel[R4l]=null;panel[S3n]=null;panel[R1g]=1000000;panel[U0R]=-1;}
for(var chartName in this[(V5g+B7o+F2o)]){var chart=this[Q9g][chartName];if(!chart[e2O])continue;for(var i=0;B5O[D9R](i,chart[(i1v+B5O.G4o+i2o+W3o+B5O.G4o)].length);i++){chart[e2O][i][S2o]={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx){var S1l="j7N",b8l="x7N",R2I="w7N",I5o="d7N",T3v="z7N",X6o="X7N",w1l="n7N",d1g="G7N",R8l="q7N",R3R="M7N",context=ctx?ctx:this[E6v][(B5O.r3o+B5O.Z7o+b6O+W3o+t9t)],margin=3,height=this[m5g]("stx_yaxis")+B5O[R3R](margin,2);this[p8v]("stx_yaxis",context);var drawBorders=panel[b4O][l3o]||this[h4t],tickWidth=drawBorders?3:0;try{var width=context.measureText(txt).width+tickWidth+B5O[R8l](margin,2);}
catch(e){var S1g="U7N";width=B5O[S1g](this[E6v][e2o],this[q7O]);}
var x=B5O[d1g]((this[E6v][e2o]-this[q7O]),margin,3);if(B5O[w1l](y+(height/2),panel[k5l]))y=B5O[X6o](panel[k5l],(height/2));if(B5O[T3v](y-(height/2),panel.top))y=panel.top+(B5O[I5o](height,2));context.fillStyle=backgroundColor;if(typeof (STX[this[V1g]])=='undefined'){this[V1g]="roundRectArrow";}
STX[this[V1g]](context,x,B5O[R2I](y,(height/2)),width,height,3,true,false,"left");context.textBaseline="middle";context.fillStyle=color?color:STX[O5O](backgroundColor);if(B5O[(b8l)](context.fillStyle,backgroundColor)){if(B5O[S1l](backgroundColor[a4n](),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,x+margin+tickWidth,y+1);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var r0t="z6N",V5l="X6N",m1O="n6N",M8g="l6N",p3o="b6N",a8o="q6N",g5g="M6N",G1v="roundRect",G8g="N6N",D3t="s6N",A2O="A6N",K0v="V6N",Y6O="K6N",R2o="O6N",context=this[E6v][x3t],margin=2,fontstyle="stx-float-date",height=this[m5g](fontstyle)+B5O[R2o](margin,2);this[p8v](fontstyle,context);try{var width=context.measureText(txt).width+B5O[Y6O](margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(B5O[K0v](x+(width/2),panel[(B5O.E4o+X8l+V9l+p8l+B5O.G4o)]))x=B5O[A2O](panel[V8l],(width/2));if(B5O[D3t](x-(width/2),panel[h3l]))x=panel[h3l]+(B5O[G8g](width,2));context.fillStyle=backgroundColor;STX[G1v](context,B5O[g5g](x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=B5O[a8o](panel[k5l],panel[b4O][k5l],height);context.beginPath();context.moveTo(B5O[p3o](x,arrowHeight),y);context.lineTo(x,B5O[M8g](y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX[O5O](backgroundColor);if(B5O[m1O](context.fillStyle,backgroundColor)){if(B5O[V5l](backgroundColor[a4n](),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,B5O[r0t](x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var L3R="maxDecimalPlaces",p6l="D8S",u1I="t_hr",C1g="rren",x8l="x_cu",K6n="vas",y9O="h8S",u3n="T6N",I9R="P6N",G3O="f6N",c5o="drawCurrentPriceLabel",u7v="u6N";if(this[y2o]("drawCurrentHR",arguments))return ;var backgroundColor,color,currentClose;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName],panel=chart[L0t],yAxis=panel[b4O];if(B5O[u7v](yAxis[c5o],false))continue;var whichSet=yAxis[h8t];if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(l){var quote=chart[whichSet][B5O[G3O](l,1)],prevClose=currentClose=quote[X5g];if(B5O[I9R](chart[e2O].length,2)){var quote2=chart[whichSet][B5O[u3n](l,2)];prevClose=quote2[X5g];}
if(B5O[y9O](currentClose,prevClose)){backgroundColor=this[e9v]("stx_current_hr_down")["backgroundColor"];color=this[(B5O.r3o+m1I+K6n+C2I+B5O.G4o+O1l+e7o+W3o)]("stx_current_hr_down")["color"];}
else{backgroundColor=this[e9v]((F2o+B5O.G4o+x8l+C1g+u1I+Q5o+A6l))["backgroundColor"];color=this[e9v]("stx_current_hr_up")["color"];}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math[A0o](panel[b4O][G2g],panel[E6v][N3l]);if(B5O[p6l](yAxis[L3R],null))labelDecimalPlaces=Math[h7I](labelDecimalPlaces,yAxis[L3R]);if(yAxis[v0t]){txt=yAxis[v0t](this,panel,quote[X5g],labelDecimalPlaces);}
else{txt=this[H3O](quote[(i5g+D8t+W3o)],panel,labelDecimalPlaces);}
var y=this[x8n](quote[X5g],panel);this[d7n](panel,txt,y,backgroundColor,color);}
}
this[K6g]("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var d2l="FFFF",R4I="tC",X6v="faul",n2v=.65,T4l="L8S",J5o="hsv",s3v="aren",j6t="nsp",w8t="isTra",M2n="tagName";this[k2O]=c5t;var bgColor=X7g,div=this[(B5O.r3o+L2g)][T3g];while(!bgColor||STX[U4v](bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle[c0l];if(STX[U4v](bgColor))bgColor=q1O;div=div[g5O];if(!div||!div[M2n])break;}
if(bgColor){this[B2o]=bgColor;if(!STX[(w8t+j6t+s3v+B5O.G4o)](bgColor)){var hsv=STX[J5o](bgColor),v=hsv[B5O.M4I];if(B5O[T4l](v,n2v))this[(m9o+W3o+X6v+R4I+B5O.Z7o+e7o+J8t)]=c5t;else this[k2O]=(B7O+M8o+d2l+M8o);}
else{this[k2O]=c5t;}
}
}
;STXChart.prototype.startAsyncAction=function(){var v3n="v8S";if(B5O[v3n](this[Q4O],X7g))this[Q4O]=[];this[Q4O][H0l](u7g);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){var F8n="p8S";if(B5O[F8n](this[f3t],X7g))this[f3t]=[];this[f3t][H0l](fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){var P4n="fc",b3l="J8S",l7g="y8S";for(var i=0;B5O[l7g](i,this[f3t].length);i++){if(B5O[b3l](this[f3t][i],obj[P4n])){this[f3t][K1l](i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){var m0t="b8S",O7t="8S";if(!this[f3t])return ;if(!this[Q4O]||B5O[(X8l+O7t)](this[Q4O].length,0)){for(var i=0;B5O[m0t](i,this[f3t].length);i++){(this[f3t][i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this[Q4O][b4l]();this[r2g]();}
;STXChart.prototype.draw=function(){var y0l="adM",d1v="ckL",t4n="che",G5O="Q8S",L5o="displayStudies",P2v="drawOver",I7O="wS",s0t="drawUnder",p6O="wU",Q7o="ctIfOffEd",n8R="getDefaultColor",z7O="orde",U0t="play",C0o="n8S",x1o="l8S";if(!this[E6v].canvas)return ;if(!this[(E6v)][e2O])return ;if(B5O[x1o](this[E6v][a9g],0))return ;this[F9v]=B5O[C0o](this[I4l][f7g],this[m3n],2);STX[f9o](this[E6v].canvas,this);if(this[y2o]("draw",arguments))return ;if(!this[l7l]){this[(y1l+J6I+X8l+F2o+s1l+W4v+p8l+B5O.G4o)]=this[m5g]("stx_xaxis")+4;if(this[E6v][J7o][(p4n+U0t+W3n+z7O+B5O.E4o)]||this[h4t])this[l7l]+=3;}
this[n8R]();this[B5v]=false;this[v6I]();for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];this[(h9g+B3R+W3o+Q7o+V9l+W3o)]();this[W9R]();var axisRepresentation=this[l6O](chart);this[S1o](chart);this[O6g](chart,axisRepresentation);for(var i in this[y9g]){var plugin=this[y9g][i];if(plugin[O2l]){if(plugin[(m9o+B5O.E4o+z9o+p6O+y7o+m9o+W3o+B5O.E4o)])plugin[s0t](this,chart);}
}
this[K9l](chart);this[(y8v+z9o+I7O+n7n+F2o)](chart);for(var i in this[y9g]){var plugin=this[y9g][i];if(plugin[(H5v+u8o)]){if(plugin[P2v])plugin[P2v](this,chart);}
}
}
STX[Q2v][L5o](this);this[(B5O.r3o+B5O.E4o+W3o+B2I+W3o+B5O.T9n+h0R+Q9o+g9R+o3R)]();this[g4v]();this[F3O]();this[P7g]=true;if(this[Y8o][(p8l+k0t+W3o)]){if(B5O[G5O](this[E6v][u3O]-1,this[E6v][z1v])){this[Y8o][m3O][d4v][O2l]=(i9o+e7o+B5O.Z7o+B5O.r3o+H6o);}
else{this[(B5O.r3o+B5O.Z7o+y7o+B5O.G4o+Q4g+F2o)][m3O][d4v][O2l]="none";}
}
for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];if(this[u6t])this[u6t][(t4n+d1v+B5O.Z7o+y0l+J8t+W3o)](chart);}
this[K6g]("draw",arguments);this[r2g]();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){var r3l="T8S",i6t="P8S",Q3g="is_chrome",y5o="f8S",P2n="u8S",R9n="backingStorePixelRatio",D0n="oBackingStorePixelRatio",a2n="msBackingStorePixelRatio",Z9g="mozBackingStorePixelRatio",p2t="webkitBackingStorePixelRatio",u9o="e8S";this[w4v]=window[w4v]||1;if(B5O[u9o](this[w4v],1.0))this[w4v]=1.0;backingStoreRatio=context[p2t]||context[Z9g]||context[a2n]||context[D0n]||context[R9n]||1;ratio=B5O[P2n](this[w4v],backingStoreRatio);if(B5O[y5o](this[w4v],backingStoreRatio)&&(!STX[O9n]||STX[Q3g])){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=B5O[i6t](oldWidth,ratio);canvas.height=B5O[r3l](oldHeight,ratio);canvas[d4v].width=oldWidth+'px';canvas[d4v].height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){var F0l="n9S",j1v="b9S",y6v="J9S",W7g="y9S",L7I="p9S",M7n="v9S",n2o="L9S",P4O="getSpanCandleWidth",L9l="D9S",a8g="nvasR",z1n="9S",canvas=this[E6v].canvas,context=this[E6v][x3t];if(canvas&&context){this[E6v][S5g].height=canvas.height=this[E6v][T3g][D6n];this[E6v][S5g].width=canvas.width=this[E6v][T3g][A5O];this[v3R](canvas,context);this[v3R](this[E6v][(H4o+O9O+E7g+o1l+z9o+F2o)],this[E6v][S5g][x3t]);}
var p=STX[R5g](this[E6v][T3g]);this[E6v][h3l]=p[y1l];this.chart.top=p[O1l];this[E6v][e2o]=this[(V5g+z9o+B5O.E4o+B5O.G4o)][T3g][A5O];this[E6v].width=B5O[(p8l+z1n)](this[E6v][e2o],this[X4l]);this[E6v][V8l]=p[y1l]+this[E6v].width;this[E6v][(T5g+a8g+C3R)]=p[y1l]+this[E6v][e2o];this[(A2n+q3R)][a9g]=this[E6v][T3g][D6n];this[E6v][k5l]=p[O1l]+this[E6v][a9g];if(this[Y8o][U5t])this[Y8o][U5t][(F2o+G5l+Z4o)].width=this[E6v].width+"px";var candleWidth=this[I4l][f7g];if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];if(this[I4l][Z3t]&&B5O[L9l](this[I4l][Z3t],"")){this[O0t](this[P4O](this[I4l][Z3t]),chart);}
else{this[O0t](candleWidth,chart);if(B5O[n2o](chart[u3O],chart[z1v])){var wsInTicks=Math[Q6v](B5O[M7n](this[x3l][J3O],this[I4l][f7g]));chart[u3O]=B5O[L7I](chart[(A0o+T7o+H6o+F2o)],wsInTicks);}
}
var idealNumberOfTicks=10,appxLabelWidth=B5O[W7g](context.measureText("10:00").width,2);while(B5O[y6v](idealNumberOfTicks,1)){if(B5O[(F8v+C2I)](this[E6v].width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart[J7o][S9n]=Math[Q6v](B5O[j1v](this[E6v].width,idealNumberOfTicks));if(B5O[(e7o+d0n+C2I)](chart[J7o][S9n],1))chart[J7o][S9n]=1;}
var margin=0,x=B5O[F0l]((this[E6v][e2o]-this[q7O]),margin);this[Y8o][R5n][d4v][h3l]=x+"px";}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){var k9n="z9S",i8n="X9S";if(!chart)chart=this[E6v];if(B5O[i8n](newCandleWidth,B5O.b4I))newCandleWidth=B5O.H4I;this[I4l][f7g]=newCandleWidth;chart[(L6o+z9o+y1l+w3v+s3g+F2o)]=Math[Q6v](B5O[k9n]((this[E6v].width/newCandleWidth),.499));}
;STXChart.prototype.resizeChart=function(){var e2v="w9S",b5g="d9S",previousHeight=this[E6v][(B5O.r3o+m1I+r1O+F2o+O9o+W3o+X8l+q4I)];this[L7t]();this[Z6I]();if(this[P7g]){this[V5o]();}
else if(B5O[b5g](this[E6v][a9g],B5O.b4I)&&B5O[e2v](previousHeight,B5O.b4I)){this[V5o]();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var y5l=59,w5n="j9S",N6O="x9S",minutes=B5O[N6O]((chart[x6n]-chart[u6o]),n5l);minutes+=chart[Z8R];minutes-=chart[c5n];if(B5O[w5n](chart[Z8R],y5l))minutes++;chart[X8O]=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb){var J8v="nfigu",F1l="teFe",b4v="if",z9R="ste",I9v="rning",B1O="Wa",F5R='object';if(!symbol)return ;if(!chart)chart=this[E6v];var prevSymbol=chart[L2O],prevSymbolObject=chart[j3o];if(typeof symbol==F5R){chart[L2O]=symbol[L2O];chart[j3o]=symbol;}
else{chart[L2O]=symbol;chart[j3o][L2O]=symbol;}
if(!masterData&&this[u6t]){this[u6t][m3l]({symbol:chart[L2O],chart:chart}
,function(err){if(err){chart[L2O]=prevSymbol;chart[j3o]=prevSymbolObject;}
if(cb)cb(err);}
);}
else{if(!masterData){console[Y8g]((B1O+I9v+A9v+f2I+B5O.Z7o+X3O+L6o+z9o+z9R+B5O.E4o+t8o+z9o+g1o+X3O+F2o+c2o+A4t+b4v+q7o+X3O+z9o+y7o+m9o+X3O+y7o+B5O.Z7o+X3O+h4I+c4o+B5O.Z7o+F1l+W3o+m9o+X3O+B5O.r3o+B5O.Z7o+J8v+j7g+m9o));}
if(!chart[L2O])chart[L2O]=r4o;this[G7o](masterData,chart);this[w0n]();this[m4o]();this[(V5o)]();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var k5v="pla",T2t="J3S",j8O="y3S",H7v="p3S",t4g="v3S",f4g="V3S",i5l="K3S",s5O="O3S",t0O="erDat",F2I="mas",j0O="calculateMinutesInSession";if(!chart)chart=this[E6v];this[j0O](chart);chart[(F2I+B5O.G4o+t0O+z9o)]=masterData;if(B5O[s5O](chart[F2g],"chart"))this[h1g]=masterData;chart[N3l]=2;for(var i=0;masterData&&B5O[i5l](i,masterData.length);i++){var quotes=masterData[i];if(quotes[x0v])quotes[E7n]=STX[t9O](quotes[x0v]);else if(quotes[E7n])quotes[(t8o+p2I)]=STX[w0v](quotes[E7n]);quotes[W8t]=parseInt(quotes[W8t],10);if(quotes[X5g]){var s=quotes[X5g][s4v](),point=s[J7t]('.');if(point!=-1){var dp=B5O[f4g](s.length,point,1);if(B5O[t4g](dp,chart[N3l])){chart[N3l]=dp;}
}
}
if(B5O[H7v](quotes[c2I],null))delete  quotes[c2I];if(B5O[j8O](quotes[l1O],null))delete  quotes[l1O];if(B5O[T2t](quotes[T2l],null))delete  quotes[(o4I+W3o+y7o)];}
if(!STXChart[z2o](this[I4l][q3v]))this[Q6g](masterData);this[E6v][C1n]=Math[c2l](10,chart[N3l]);for(var i in this[(c2o+e7o+N5R+F2o)]){var plugin=this[y9g][i];if(plugin[(p4n+k5v+O1l)]){if(plugin[G7o])plugin[G7o](this,chart);}
}
for(var s in this[E6v][p6g]){var series=this[E6v][p6g][s];if(series[g2v]){series[g2v](this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var l8o="ute",V9g="getMin",O7n="Hou",w4o="i3S",dt=quote[x0v],milli=B5O[w4o](dt[l2v](),O5R)+dt[e8g]();if(this[q5R]){var newDT=new timezoneJS[E7n](dt[B8O](),dt[B6g](),dt[H5n](),dt[j1O](),dt[x2o](),this[q5R]);dt=new Date(newDT[f2v]()+milli);}
if(this[U0O]){var newDT=new timezoneJS[E7n](dt[(Z4n+F2v+L6o+W3o)](),this[U0O]);dt=new Date(newDT[B8O](),newDT[B6g](),newDT[H5n](),newDT[(V9l+W3o+B5O.G4o+O7n+o3R)](),newDT[(V9g+l8o+F2o)]());dt=new Date(dt[f2v]()+milli);}
quote[H9n]=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){var J4l="b3S";for(var i=0;B5O[J4l](i,masterData.length);i++){var quote=masterData[i];if(quote[x0v])this[f3n](quote);}
}
;STXChart.prototype.streamTrade=function(price,volume,now){var Q2l="nterv",d6I="tI",B0n="Ne",m6g="x3S",Y1n="d3S",i3l="z3S",t8g="X3S",V4n="erDa",x9g="dM",D0v="pp",X5v="n3S",v6n="l3S",Y5l="urs",s2o="aZo",md=this[h1g];if(!now){now=new Date();if(this[q5R]){var tzNow=STX[C2g](now,null,this[(m9o+z9o+B5O.G4o+s2o+V5n)]);now=new Date(tzNow[B8O](),tzNow[B6g](),tzNow[H5n](),tzNow[(z0v+Y5l)](),tzNow[x2o](),tzNow[l2v](),tzNow[e8g]());}
}
else{now=new Date(now);}
if(B5O[v6n](md,null)||B5O[X5v](md.length,0)){var quote={Date:STX[t9O](now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume}
;this[(z9o+D0v+H6n+x9g+z7I+V4n+B5O.G4o+z9o)]([quote]);}
else{var quote=STX[z9v](md[B5O[t8g](md.length,1)]),next=this[t9o](quote[x0v],null,this[q5R]);if(B5O[i3l](now,next)){quote[X5g]=price;quote[W8t]+=volume;if(B5O[Y1n](price,quote[c2I]))quote[c2I]=price;if(B5O[(G1l+l2O+C2I)](price,quote[l1O]))quote[l1O]=price;this[t2g]([quote]);}
else{var next2=this[t9o](next,null,this[q5R]),gaps=[];while(B5O[m6g](next2,now)){var gap={Date:STX[t9O](next),DT:next,Close:quote[X5g],Open:quote[X5g],High:quote[X5g],Low:quote[X5g],Volume:0}
;gaps[H0l](gap);next=next2;next2=this[(Z4n+B5O.G4o+B0n+y1l+d6I+Q2l+O4o)](next,null,this[q5R]);}
quote={Date:STX[t9O](next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume}
;gaps[H0l](quote);this[t2g](gaps);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart){var C0R="maxWait",R0O="timeout",e0g="streamParameters",V7n="Y5S",Y7o="Mas",z3v="gi",q5O="lu",k7o="o5S",D0O="ned",v0n="nde",t1t="stud",v2o="studyQuotes",f0o="H5S",I3n="I5S",F2n="ndefi",n6O="R5S",F0v="G5S",s7t="U5S",a3R="q5S",n1v="M5S",r0v="N5S",t3R="s5S",Q5n="A5S",t4t="V5S",q3n="K5S",m8o="O5S",K2g="3S";if(this[y2o]("appendMasterData",arguments))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0][x0v];if(!dt)dt=STX[w0v](appendQuotes[0][E7n]);if(!chart)chart=this[E6v];var masterData=chart[h1g];if(!masterData||B5O[(g6o+K2g)](masterData.length,0)){masterData=chart[h1g]=STX[(w9g+B5O.Z7o+V5n)](appendQuotes);for(var i=0;B5O[m8o](i,masterData.length);i++){if(masterData[i][x0v])masterData[i][E7n]=STX[t9O](masterData[i][x0v]);else masterData[i][x0v]=STX[w0v](masterData[i][E7n]);masterData[i][W8t]=parseInt(masterData[i][W8t],10);if(!STXChart[z2o](this[I4l][q3v]))this[f3n](masterData[i]);}
}
else{var i=B5O[q3n](masterData.length,1);while(B5O[t4t](i,0)){var dt2=masterData[i][x0v];if(!dt2)dt2=STX[w0v](masterData[i][E7n]);if(B5O[Q5n](dt2[f2v](),dt[f2v]())){var plusOne=0;if(B5O[t3R](dt2[f2v](),dt[f2v]()))plusOne=1;for(var j=0;B5O[r0v](j,appendQuotes.length);j++){if(!plusOne){if(B5O[n1v](appendQuotes.length,1)){var lastBar=masterData[i+j];if(B5O[a3R](appendQuotes[0][X5g],lastBar[X5g])&&B5O[s7t](appendQuotes[0][c2I],lastBar[c2I])&&B5O[F0v](appendQuotes[0][l1O],lastBar[l1O])&&B5O[n6O](appendQuotes[0][T2l],lastBar[T2l])){appendQuotes.length=0;return ;}
}
if(typeof masterData[i+j]!=(c4o+F2n+y7o+W3o+m9o)){if(!appendQuotes[j][W8t]&&masterData[i+j][W8t]){appendQuotes[j][W8t]=masterData[i+j][W8t];}
if(masterData[i+j][T2l]){appendQuotes[j][(o4I+H6n)]=masterData[i+j][T2l];}
if(B5O[(I3n)](masterData[i+j][(O9o+X8l+O2n)],appendQuotes[j][c2I])){appendQuotes[j][c2I]=masterData[i+j][c2I];}
if(masterData[i+j][l1O]&&B5O[f0o](masterData[i+j][l1O],appendQuotes[j][l1O])){appendQuotes[j][l1O]=masterData[i+j][l1O];}
}
for(var field in this[E6v][p6g]){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this[p3n]){if(this[p3n][p][v2o]){for(var sq in this[p3n][p][v2o]){if(!this[p3n][p][(t1t+O1l+h4I+c4o+d6n+j9t)][sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!=(c4o+v0n+m3t+D0O))appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne][x0v])masterData[i+j+plusOne][E7n]=STX[t9O](masterData[i+j+plusOne][x0v]);else masterData[i+j+plusOne][(x0v)]=STX[w0v](masterData[i+j+plusOne][E7n]);masterData[i+j+plusOne][W8t]=parseInt(masterData[i+j+plusOne][W8t],10);if(!STXChart[z2o](this[I4l][q3v]))this[f3n](this[h1g][i+j+plusOne]);if(B5O[k7o](chart[u3O],chart[z1v]+1)&&plusOne)chart[u3O]++;}
break;}
i--;}
for(var i in this[(c2o+q5O+z3v+v6O)]){var plugin=this[y9g][i];if(plugin[O2l]){if(plugin[(z9o+c2o+c2o+W3o+y7o+m9o+Y7o+B5O.G4o+W3o+B5O.E4o+J6v+B5O.G4o+z9o)])plugin[t2g](this,appendQuotes,chart);}
}
}
if(!this[h1g]||B5O[V7n](this[(H5O+F2o+B5O.G4o+W3o+B5O.E4o+J6v+g1o)].length,0))this[h1g]=masterData;this[w0n]();var sp=this[e0g];if(++sp[w6g]>sp[z1v]){clearTimeout(sp[R0O]);this[(m9o+A8R+G1l)]();sp[(h9g+c4o+b6O)]=0;sp[R0O]=-1;}
else{var self=this;if(sp[R0O]==-1){sp[R0O]=setTimeout(function(){var V1o="amParameters",b1g="str";self[(m9o+A8R+G1l)]();self[(b1g+W3o+V1o)][(h9g+c4o+b6O)]=0;self[e0g][R0O]=-1;}
,sp[C0R]);}
}
this[W2n]();this[K6g]((h2I+R9R+U2I+z7I+W3o+B5O.E4o+t8o+z9o+g1o),arguments);}
;STXChart.prototype.displayAll=function(params,cb){var chart=this[E6v];if(params&&params[E6v])chart=params[E6v];var self=this;function displayTheResults(){var S9O="B5S";self[e4o]({dtLeft:new Date(1),dtRight:chart[(H5O+F2o+H4o+B5O.E4o+t8o+z9o+g1o)][B5O[S9O](chart[(H5O+T9o+h9t+t8o+z9o+B5O.G4o+z9o)].length,1)][x0v]}
);if(cb)cb();}
;function loadAllTheData(){var B4I="loadAll";self[u6t][B4I](chart,displayTheResults);}
;if(!this[u6t]){displayTheResults();return ;}
if(!STXChart[z2o](this[I4l][(Z0R+B5O.G4o+h9t+o1l+O4o)])){this[R7t](B5O.i4I,y7n,loadAllTheData);}
else{if(chart[H8g]){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var q5n="e1S",Q3t="Q1S",O4t="1S",n1t="c1S",u2O="S1S",J0t="a1S",k8l="Map",X9R="Perio",P8g="DE",A1l="g1S",H3t="WEEK",D6I="rangePeriodicityMap",G9O="eDr",S0o="dtRight",b5O="m5S",t2v="adjustWhiteSpace",o7v="E5S";if(STX[C6o](params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false,adjustWhiteSpace:true}
;}
if(!params[E6v])params[E6v]=this[(B5O.r3o+B5O.w2t+q3R)];if(!params[m5o])params[m5o]=0;if(B5O[o7v](params[t2v],false)&&B5O[b5O](params[t2v],true))params[t2v]=true;var chart=params[E6v],ltMS=params[B6l][f2v](),rtMS=Date[(p8n+G1l)]();if(params[S0o])rtMS=params[S0o][f2v]();var self=this;function showTheRange(){var i3o="T0S",P8o="ndleW",e9t="P0S",h2t="u0S",i1o="e0S",S6v="Z0S",u2l="c0S",Q0R="a0S",F9g="g0S",e4t="F0S",Y2n="r0S",I5t="W0S",b3g="t0S",G0O="k0S",l7t="C0S",b=B5O[l7t](chart[e2O].length,1);if(params[(z2t+a4I+C3R)]){rtMS=params[S0o][f2v]();for(;B5O[G0O](b,0);b--){var prices=chart[e2O][b];if(B5O[b3g](prices[x0v][f2v](),rtMS)){break;}
}
if(B5O[I5t](b,chart[e2O].length-1)&&params[A7v]){var dt=chart[e2O][B5O[Y2n](chart[e2O].length,1)][x0v];for(var i=0;B5O[e4t](i,20000);i++){if(B5O[F9g](dt[(f2v)](),rtMS))break;b++;dt=STX[U7l][Q1O](dt,self[I4l][q3v],1,self,null,self[q5R]);}
}
}
if(B5O[Q0R](b,0))return ;for(var a=b;B5O[(C2I+w2O+C2I)](a,0);a--){if(B5O[u2l](a,chart[e2O].length))continue;var prices=chart[e2O][a];if(B5O[S6v](prices[x0v][f2v](),ltMS)){break;}
}
var ticks=B5O[(h4I+w2O+C2I)](b,a);if(B5O[i1o](ticks,1)){if(cb)cb();return ;}
self[O0t](B5O[h2t]((self[E6v].width-params[m5o]),ticks),chart);chart[u3O]=(B5O[(O6t+C2I)](chart[e2O].length,b))+Math[Q6v](B5O[e9t]((self[E6v].width-params[m5o])/self[I4l][(T5g+P8o+X8l+h5n)],.499))-1;if(params[t2v])self[x3l][J3O]=B5O[i3o]((chart[z1v]-chart[u3O]),self[I4l][f7g]);self[V5o]();self[E9o]("layout");}
;var loadMoreCount=0;function loadTheRange(){var L2l="riv",I3R="it",T4O="odi",E8R="pin",g6n="erv",k9t=") ",g4n="oa",X2n="ny",H3l="(): ",R2O="etRange",o2t="Chart",F6l="h1S";loadMoreCount++;if(B5O[F6l](loadMoreCount,10)){console[b5R]((d4O+o2t+h4O+F2o+R2O+H3l+p2I+B5O.Z7o+B5O.Z7o+X3O+L6o+z9o+X2n+X3O+e7o+g4n+a2t+t6n+K7O+w2O+k9t+E8l+B5O.E4o+B5O.Z7o+L6o+X3O+F2o+g6n+W3o+B5O.E4o+K3l+C2I+B0v+E8R+V9l+K3l+B5O.T9n+p8l+A4t+H6o+X3O+c2o+Y8t+T4O+B5O.r3o+I3R+O1l+X3O+e7o+B5O.Z7o+V9l+V7v+h4O));showTheRange();return ;}
if(chart[H8g]&&B5O[(t8o+K7O+C2I)](chart[h1g][0][x0v],ltMS)){self[(r3g+B5O.Z7o+B5O.G4o+Q3v+L2l+h9t)][p6t](chart,true,function(){loadTheRange();}
);}
else{showTheRange();}
}
;function barsToFetch(dt,interval){var B7l="F1S",s5v="r1",I6g="DA",H2t="v1S",f7O="L1S",ticks=0,ms=B5O[f7O](Date[m7o](),dt[f2v]());if(STXChart[z2o](interval)){ticks=B5O[H2t](ms,STX[(I6g+U0o)],2);}
else{ticks=B5O[(s5v+C2I)](ms,(interval*STX[I5R]));}
return Math[Q6v](Math[A0o](B5O[B7l](ticks,2),1000));}
;if(this[(I9n+B5O.G4o+G9O+X8l+o1l+W3o+B5O.E4o)]){if(!this[D6I]){this[D6I]=[];this[D6I][H0l]({range:STX[H3t],periodicity:1,interval:5}
);this[D6I][H0l]({range:STX[l3n],periodicity:1,interval:30}
);this[D6I][H0l]({range:B5O[A1l](STX[l3n],7),periodicity:2,interval:30}
);this[D6I][(c2o+J7l+p8l)]({range:STX[(P8g+B5O.T9n+R3n+t8o+T6I)],periodicity:1,interval:(m9o+R8o)}
);this[(A8R+s7O+W3o+X9R+m9o+X8l+n3R+k8l)][H0l]({range:B5O[J0t](STX[u4n],10),periodicity:1,interval:"month"}
);this[D6I][(c2o+c4o+F2o+p8l)]({range:Number[E0v],periodicity:12,interval:"month"}
);}
var periodicityMap=params[D6I]?params[D6I]:this[D6I],rangeInMS=B5O[u2O](rtMS,ltMS),entryToUse=null;for(var i=0;B5O[n1t](i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(B5O[(v0o+O4t)](rangeInMS,mapEntry[i7g])){entryToUse=mapEntry;break;}
}
if(B5O[Q3t](this[I4l][q3v],entryToUse[q3v])||B5O[q5n](this[I4l][X5l],entryToUse[X5l])){this[I4l][q3v]=entryToUse[q3v];this[I4l][X5l]=entryToUse[X5l];var qparams={symbol:chart[L2O],chart:chart,ticks:barsToFetch(params[B6l],this[I4l][q3v])}
;this[u6t][m3l](qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var H6I="D2S",s9O="displayAll",D9l="h2S",K1t="T4S",l4o="P4S",y2n="f4S",u0o="u4S",f8t="e4S",e8R="Q4S",P1O="Z4S",w8O="setTime",Q4v="c4S",X6I="getDailyCycleStartTime",y1t="S4S",K7I="i4S",w6t="J4S",i6O="y4S",V6g="p4S",W6I="v4S",c7v="L4S",q3g="D4S",N2g="h4S",v1n="Year",y1o="setF",t5R="T1S",s6n="toLowerCase",S3v="P1S",G9o="f1S",g2l="u1S",I4O="useMarketTZ",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){period=params[p0l];interval=params[q3v];padding=params[m5o];chart=params[E6v];useMarketTZ=params[I4O];}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!chart)chart=this[E6v];if(B5O[g2l](period,1)||!chart[e2O].length){if(cb)cb();return ;}
var leftDT=new Date(chart[e2O][B5O[G9o](chart[e2O].length,1)][x0v][f2v]());if(B5O[S3v](interval[s6n](),"ytd")){leftDT=new Date();leftDT[d5R](0);leftDT[R5o](1);leftDT[B0O](0);leftDT[x8R](0);leftDT[b7n](0);leftDT[y6n](0);}
else if(B5O[t5R](interval[s6n](),"year")){leftDT[(y1o+c4o+E7o+v1n)](B5O[N2g](leftDT[B8O](),period));}
else if(B5O[q3g](interval[s6n](),"month")){leftDT[d5R](B5O[c7v](leftDT[B6g](),period));}
else if(B5O[W6I](interval[s6n](),"day")||B5O[V6g](interval[s6n](),"today")){if(B5O[i6O](interval[s6n](),"day")&&STXChart[z2o](this[(e7o+z9o+O1l+B5O.Z7o+c4o+B5O.G4o)][q3v])){if(useMarketTZ)leftDT=STX[U7l][X7l](leftDT,B5O[w6t](period,1),this);else leftDT[R5o](B5O[K7I](leftDT[H5n](),period,1));}
else{if(useMarketTZ&&chart[e2O][B5O[y1t](chart[e2O].length,1)][H9n]){var startDT=STX[U7l][X6I](leftDT,chart);if(B5O[Q4v](startDT[f2v](),leftDT[f2v]()))startDT=STX[U7l][X7l](startDT,1,this);leftDT[w8O](startDT[f2v]());}
else{leftDT[B0O](0,0,0,0);}
for(var i=0;B5O[P1O](i,period-1);i++){leftDT=STX[U7l][X7l](leftDT,1,this);}
}
}
else if(B5O[e8R](interval[s6n](),"week")){leftDT[R5o](B5O[f8t](leftDT[H5n](),(7*period)));}
else if(B5O[u0o](interval[s6n](),"hour")){leftDT[B0O](B5O[y2n](leftDT[j1O](),period));}
else if(B5O[l4o](interval[s6n](),"minute")){leftDT[x8R](B5O[K1t](leftDT[(V9l+N9v+Z0R+c4o+H4o+F2o)](),period));}
else if(B5O[D9l](interval[s6n](),"all")){this[s9O](params,cb);return ;}
var params2=STX[z9v](params);params2[B6l]=leftDT;if(B5O[H6I](interval[s6n](),"today")){params2[A7v]=true;}
this[e4o](params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var B4v="f2S",Z5v="d2S",m8g="Time",V6t="X2S",f3g="n2S",f1n="l2S",X4v="etDa",c4O="b2S",y0g="i2S",m7n="J2S",Y6o="y2S",O7o="p2S",q9R="setFullYear",I1v="v2S",i4n="L2S",arr=span[W7O](",");if(B5O[i4n](arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(B5O[I1v](arr[1],"year")){prev[q9R](B5O[O7o](prev[B8O](),num));}
else if(B5O[Y6o](arr[1],(b0g+S7o))){prev[d5R](B5O[m7n](prev[B6g](),num));}
else if(B5O[y0g](arr[1],"day")){prev[R5o](B5O[c4O](prev[(V9l+X4v+B5O.G4o+W3o)](),num));}
else if(B5O[f1n](arr[1],"week")){prev[R5o](B5O[f3g](prev[H5n](),(7*num)));}
var diff=B5O[V6t]((now[f2v]()-prev[(Z4n+B5O.G4o+m8g)]()),1000,60,60,24);diff=B5O[Z5v](diff,5,7);var candleWidth=B5O[B4v](this[E6v].width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks){var D5g="T2S",n4O="P2S";this[I4l][f7g]=B5O[(n4O)]((this[E6v].width),ticks);if(B5O[D5g](this[I4l][f7g],B5O.b4I))this[I4l][f7g]=B5O.H4I;this[E6v][z1v]=Math[Q6v](B5O[(p8l+k5n+C2I)]((this[E6v].width/this[I4l][f7g]),.499));}
;STXChart.prototype.initializeChart=function(container){var o4o="resizeDetectMS",p1o="attachEvent",w1g="resizeListenerInitialized",R5l="registerTouchAndMouseEvents",e4l="nto",J6o="tain",y9v="vice",g3l="leWid",p9O="X7S",B0l="n7S",U2v="ckP",s9R="l7S",f5v="b7S",f3l="ctx",a0t="sty",j8v="Con",g8g="emp",x1v="initElement",P1o="G_vmlCanvasManager",G0v="querySelectorAll",c1o="J7S",s8t="pCanvas",p6v="y7S",b8O="p7S",Z9O="v7S",k8t="em",A8g="terHTMLE",x3o="erId",b9n="gestureP",J7I="registeredContainers",T9O="STXRegistered",s2O="L7S",I2g="setTimeZone",k6l="defaultDisplayTimeZone",G6v="setLocale",m2O="D7S";if(this[y2o]("initializeChart",arguments))return ;if(!this[E6v][j3o][L2O])this[E6v][j3o][L2O]=this[E6v][L2O];if(B5O[m2O](this[M7g],null))this[G6v](this[M7g]);if(!this[(m9o+X8l+F2o+c2o+e7o+z9o+O1l+T1g+W3o)]&&STXChart[k6l]){this[I2g](null,STXChart[k6l]);}
if(!this[q7O]&&B5O[s2O](this[q7O],0))this[q7O]=this[X4l];this[(Y3g)]=0;if(container)this[E6v][T3g]=container;this[E6v][T3g][n2g]=this;if(!this[E6v][T3g][T9O]){this[E6v][T3g][T9O]=true;STXChart[J7I][H0l](this[E6v][T3g]);}
if(STX[f9v]){if(!this[o5v]){this[(V9l+W3o+F2o+B5O.G4o+c4o+j7g)]=new MSGesture;if(this[t9l]){this[o5v][U1v]=this[E6v][(B5O.r3o+j6l+z9o+X8l+q8l)];}
else{this[o5v][U1v]=document[D7g];}
this[(b9n+B5O.Z7o+X8l+y7o+B5O.G4o+x3o)]=null;}
}
this[(B5O.E4o+g5t+X8l+F2o+A8g+e7o+k8t+W3o+y7o+B5O.G4o+F2o)]();if(B5O[Z9O](this[E6v].canvas,null)&&document[E4v]("canvas")[t1l]){if(B5O[b8O](this[E6v].canvas[E1v],"")){this[E6v][T3g][g6I](this[(B5O.r3o+B5O.w2t+B5O.E4o+B5O.G4o)].canvas);this[E6v].canvas=null;}
if(this[E6v][S5g]&&B5O[p6v](this[E6v][(B5O.G4o+W3o+L6o+s8t)][E1v],"")){this[E6v][T3g][(j7g+I8O+o1l+h5v+p8l+X8l+e7o+m9o)](this[E6v][(B5O.G4o+k8t+c2o+B5O.T9n+z9o+y7o+r1O+F2o)]);this[(B5O.r3o+B5O.w2t+B5O.E4o+B5O.G4o)][S5g]=null;}
}
else{if(B5O[c1o](this[I4l][f7g],this[u5R])||B5O[(X8l+k5n+C2I)](this[I4l][f7g],50))this[I4l][(B8n+e7o+W3o+V4o+X8l+h5n)]=8;}
if(!this[(V5g+B7o)].canvas)this[E6v].canvas=document[E4v]("canvas");if(!this[E6v].canvas[t1l]){this[E6v].canvas=this[E6v][T3g][G0v]("#ie8canvas")[0];if(!this[E6v].canvas[t1l]){if(window[P1o])G_vmlCanvasManager[x1v](this[E6v].canvas);}
this[E6v].canvas[d4v][O2l]="block";}
else{this[E6v][T3g][E5t](this[E6v].canvas);}
this[(V5g+z9o+B5O.E4o+B5O.G4o)].canvas[d4v][i2n]="absolute";this[E6v].canvas[d4v][h3l]="0px";this[E6v][x3t]=this[E6v].canvas[t1l]((W2O+m9o));this[E6v].canvas[x3t]=this[E6v][x3t];this[E6v][x3t].lineWidth=1;if(!this[E6v][S5g])this[E6v][S5g]=document[E4v]("canvas");if(!this[E6v][S5g][t1l]){this[E6v][(B5O.G4o+g8g+E7g+r1O+F2o)]=this[E6v][T3g][G0v]("#ie8canvasTemp")[0];if(!this[E6v][S5g][(c7n+j8v+a1g+B5O.G4o)]){if(window[P1o])G_vmlCanvasManager[x1v](this[E6v][S5g]);}
this[E6v][S5g][(T9o+c3R+W3o)][O2l]="block";}
else{this[E6v][T3g][E5t](this[E6v][S5g]);}
this[E6v][S5g][d4v][i2n]="absolute";this[E6v][S5g][d4v][h3l]="0px";this[E6v][S5g][x3t]=this[(B5O.r3o+l3R+B5O.G4o)][S5g][t1l]("2d");this[E6v][S5g][x3t].lineWidth=1;this[L7t]();var arrowCanvas=this[Y8o][R5n][O8l][0];if(window[P1o]){G_vmlCanvasManager[x1v](arrowCanvas);arrowCanvas[d4v][i2n]="absolute";arrowCanvas.style.top="-7px";arrowCanvas[(a0t+e7o+W3o)][h3l]="-8px";arrowCanvas.height=20;}
arrowCanvas[f3l]=arrowCanvas[(Z4n+B5O.G4o+B5O.T9n+B5O.Z7o+y7o+B5O.G4o+W3o+t9t)]('2d');var margin=3,extraWidthForArrowTip=B5O[f5v]((this[m5g]("stx_yaxis")+margin*2),2);arrowCanvas.width=(this[q7O])+extraWidthForArrowTip;arrowCanvas.height=20;this[v3R](arrowCanvas,arrowCanvas[f3l]);arrowCanvas[T7n]=false;if(STX[O9n]){this[E6v][S5g][f8R]=function(e){if(e[U2n])e[U2n]();}
;}
if(B5O[s9R](this[p3n]["chart"],null)){this[(T9o+z9o+U2v+w4t+e7o)](this[E6v][L2O],"chart",1);}
else{this[p3n]["chart"][O2l]=this[E6v][L2O];if(this[E6v][S5l])this[p3n]["chart"][O2l]=this[E6v][S5l];}
this[Z6I]();this[E6v][L0t]=this[p3n][this[E6v][(C0n+L6o+W3o)]];this[x7O](this[E6v][L0t][b4O]);if(this[E6v][e2O]&&B5O[B0l](this[E6v][e2O].length,0)){this[E6v][u3O]=this[E6v][(L6o+J6I+w3v+a6g)];var wsInTicks=Math[Q6v](B5O[p9O](this[x3l][J3O],this[I4l][(B5O.r3o+z9o+J5n+g3l+S7o)]));this[E6v][u3O]-=wsInTicks;}
if(STX[(B5O.G4o+x9t+B5O.r3o+p8l+t8o+W3o+y9v)]){var overlayTrashCan=this[E6v][(B5O.r3o+B5O.Z7o+y7o+J6o+W3o+B5O.E4o)][G0v]("#overlayTrashCan")[0],vectorTrashCan=this[E6v][T3g][G0v]("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan[e1t]=overlayTrashCan[C0t]=(function(self){return function(e){var B3v="hted",x1I="Highl",D8O="delete";self[(D8O+x1I+W4v+B3v)]();}
;}
)(this);if(vectorTrashCan)vectorTrashCan[e1t]=vectorTrashCan[(B5O.Z7o+e4l+n1l+p8l+H6n+m9o)]=(function(self){return function(e){self[F1O]();}
;}
)(this);}
if(this[t9l]){this[R5l]();}
this[E6v][T3g][X1n]=(function(self){return function(e){self[W8R](e);}
;}
)(this);if(this[Y8o][(V5g+z9o+B5O.E4o+B5O.G4o+B5O.T9n+B5O.Z7o+b6O+h0R+P3O)]){this[Y8o][e0l][d4v][O2l]="block";}
this[L6O]();for(var panelName in this[p3n]){var panel=this[p3n][panelName];if(panel[c6l]){this[E6v][T3g][g6I](panel[c6l]);panel[c6l]=null;}
}
for(var i in this[y9g]){var plugin=this[(c2o+e7o+N5R+F2o)][i];if(plugin[O2l]){if(plugin[m4o])plugin[m4o](this);}
}
if(!this[w1g]){this[w1g]=true;var closure=function(self){return function(e){self[e0o]();}
;}
;if(window[p1o]){window[p1o]("onresize",closure(this));}
else{var c=closure(this);window[O9g]("resize",c,true);this[f1o][H0l]({"element":window,"event":"resize","function":c}
);}
}
this[U8R](this[o4o]);this[K6g]("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){var D2I="removeEventListener",S4l="ement",B7t="z7S",J8O="yles";this[U8R](0);if(this[u6t])this[u6t][T8v]();this[(F2o+B5O.G4o+J8O)]={}
;for(var i=0;B5O[B7t](i,this[f1o].length);i++){var listener=this[f1o][i];listener[(V0t+S4l)][D2I](listener["event"],listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var u5n="page",q6l="Do",G8O="Dr",a0l="cti",P6l="withinElement";e=e||window[Y0n];if(!STX[P6l](this[E6v][T3g],e[F4o],e[r2o])){if(this[y2o](W8R,arguments))return ;this[k2n]();this[D7n]=C0l;this[x2n]=[];this[o4n]=C0l;if(this[(z9o+a0l+o1l+W3o+G8O+z9o+f6I)]&&this[(y6o+x5g+B5O.Z7o+t0l+B5O.E4o+q6l+G1l+y7o)]){this[O9l]=C0l;this[m1n]=C0l;var cy=this[(i9o+n0l+V7I+N5O+U0o)](e[(u5n+U0o)]),cx=this[y0o](e[F4o]);this[g9t](this[o3o],cx,cy);}
STXChart[S8t]=C0l;this[t7o]();this[K6g](W8R,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var c4l="DOMMouseScroll",T8l="mousewheel",C9n="sewh",w1I="w7S",L2t="wheel",k3o="d7S",B6I="Ou",v6g="onMouseOut",G0t="onMouseOver",N7O="removeAttribute",N5v="ntL",q9l="dEv",v5t="onpointerup",V6o="pointerup",G8l="pointermove",z2O="rdown",Q6O="nms",u4t="endProxy",n8v="rUp",V2g="SPo",n8O="moveProxy",c7g="MSPointerMove",V6v="MSGestureEnd",Z8n="MSGestureChange",v1l="MSGestureStart",V5O="add",M8R="MSPointerDown",n9l="msPointerEnabled",Z3n="navigator",w7o="ene",n0g="dE",f5o="ad",P2O="ncl",A4I="oomIn",c8o="#home",f2l="touchAndMouseEventsRegistered";if(this[f2l])return ;this[f2l]=u7g;var el=this[E6v][T3g],homeEl=$$$(c8o,this[Y8o][e0l]),zoomInEl=$$$((B7O+Q0l+A4I),this[Y8o][e0l]),zoomOutEl=$$$(t0t,this[(B5O.r3o+j6l+Q4g+F2o)][e0l]);if(!STX[K4t]){el[O9g](c5O,(function(self){return function(e){self[c5O](e);}
;}
)(this),C0l);el[O9g](z3O,(function(self){return function(e){self[z3O](e);}
;}
)(this),C0l);el[O9g](X9v,(function(self){return function(e){var o2v="ouse";self[(L6o+o2v+A6l)](e);}
;}
)(this),C0l);if(homeEl)homeEl[(B5O.Z7o+P2O+T4g)]=(function(self){return function(e){self[m3O]();}
;}
)(this);if(zoomInEl)zoomInEl[l5l]=(function(self){return function(e){self[D5l](e);}
;}
)(this);if(zoomOutEl)zoomOutEl[l5l]=(function(self){return function(e){self[w4I](e);}
;}
)(this);}
else{if(STX[f9v]){el[O9g](c5O,(function(self){var g5v=9750459,P4l=8442307,O1t=1614078981,P1n=486233196;var Q1I=P1n,H1I=-O1t,X1I=B5O.M4I;for(var I1I=B5O.i4I;B5O.Y0I.w0I(I1I.toString(),I1I.toString().length,P4l)!==Q1I;I1I++){STX.Comparison.createComparisonSegmentInner(this,chart);X1I+=B5O.M4I;}
if(B5O.Y0I.w0I(X1I.toString(),X1I.toString().length,g5v)!==H1I){this.quoteDriver.attachTagAlongQuoteFeed(feed);return m3N%O5N;}
return function(e){var N2l="msMouseMoveProxy";self[N2l](e);}
;}
)(this),C0l);el[O9g](z3O,(function(self){return function(e){var S7l="msMouseDownProxy";self[S7l](e);}
;}
)(this),C0l);el[(f5o+n0g+o1l+W3o+y7o+B5O.G4o+n6I+M3R+B5O.G4o+w7o+B5O.E4o)](X9v,(function(self){return function(e){var M9t="msMouseUpProxy";self[M9t](e);}
;}
)(this),C0l);if(window[Z3n][n9l]){el[O9g](M8R,(function(self){return function(e){var j6O="startProxy";return self[j6O](e);}
;}
)(this),C0l);el[(V5O+T6I+o1l+H6n+B5O.G4o+D5t+H4o+y7o+W3o+B5O.E4o)](v1l,(function(self){return function(e){self[V9t]=u7g;}
;}
)(this),C0l);el[O9g](Z8n,(function(self){return function(e){var w6n="hmov";return self[(B5O.G4o+B5O.Z7o+n1l+w6n+W3o)](e);}
;}
)(this),C0l);el[O9g](V6v,(function(self){return function(e){self[V9t]=C0l;return self[U3g](e);}
;}
)(this),C0l);el[O9g](c7g,(function(self){return function(e){self[n8O](e);}
;}
)(this),C0l);el[O9g]((U2I+V2g+A5n+W3o+n8v),(function(self){return function(e){return self[u4t](e);}
;}
)(this),C0l);if(homeEl)homeEl[e1t]=(function(self){return function(e){self[m3O]();}
;}
)(this);if(zoomInEl)zoomInEl[e1t]=(function(self){return function(e){self[D5l](e);}
;}
)(this);if(zoomOutEl)zoomOutEl[(B5O.Z7o+Q6O+c2o+B5O.Z7o+X8l+a4t+B5O.E4o+c4o+c2o)]=(function(self){return function(e){self[w4I](e);}
;}
)(this);}
else{el[O9g]((c2o+B5O.Z7o+X8l+b6O+W3o+z2O),(function(self){return function(e){var A6g="tartProx";return self[(F2o+A6g+O1l)](e);}
;}
)(this),C0l);el[O9g](v1l,(function(self){return function(e){self[V9t]=u7g;}
;}
)(this),C0l);el[O9g](Z8n,(function(self){return function(e){return self[b6I](e);}
;}
)(this),C0l);el[O9g](V6v,(function(self){return function(e){self[V9t]=C0l;return self[U3g](e);}
;}
)(this),C0l);el[O9g](G8l,(function(self){return function(e){self[n8O](e);}
;}
)(this),C0l);el[O9g](V6o,(function(self){return function(e){return self[u4t](e);}
;}
)(this),C0l);if(homeEl)homeEl[v5t]=(function(self){return function(e){self[(g3g+L6o+W3o)]();}
;}
)(this);if(zoomInEl)zoomInEl[v5t]=(function(self){return function(e){self[D5l](e);}
;}
)(this);if(zoomOutEl)zoomOutEl[v5t]=(function(self){return function(e){self[w4I](e);}
;}
)(this);}
}
else{if(!STX[w0O]&&!STX[D7o]){el[O9g](c5O,(function(self){return function(e){var K2v="iosMouseMoveProxy";self[K2v](e);}
;}
)(this),C0l);el[O9g](z3O,(function(self){return function(e){var O9t="ox",R3O="eDo",o1g="sM";self[(X8l+B5O.Z7o+o1g+B5O.Z7o+c4o+F2o+R3O+G1l+c1v+O9t+O1l)](e);}
;}
)(this),C0l);el[O9g](X9v,(function(self){return function(e){var t7l="iosMouseUpProxy";self[t7l](e);}
;}
)(this),C0l);}
el[(f5o+q9l+W3o+N5v+X8l+F2o+H4o+q8l)](l1g,(function(self){return function(e){self[l1g](e);}
;}
)(this),C0l);el[O9g](b6I,(function(self){return function(e){self[b6I](e);}
;}
)(this),C0l);el[O9g](U3g,(function(self){return function(e){var t0o=4257457,J8g=((0x85,51.)<=9.6E2?(0x235,6623750):(0x12E,133.)>(5.0E2,57.30E1)?"pan":(0x112,61.2E1)),L3v=723846449,c6v=656459143;var o1I=-c6v,d1I=-L3v,e1I=B5O.M4I;for(var z1I=B5O.i4I;B5O.Y0I.w0I(z1I.toString(),z1I.toString().length,J8g)!==o1I;z1I++){self.modalEnd();this.displayAll(params,cb);e1I+=B5O.M4I;}
if(B5O.Y0I.w0I(e1I.toString(),e1I.toString().length,t0o)!==d1I){leftDT.setSeconds(B5O.b4I);this.runAppend(M1n,arguments);this.undisplayCrosshairs();return b3X==S3X;}
self[(B5O.G4o+B5O.Z7o+n1l+p8l+W3o+J5n)](e);}
;}
)(this),C0l);if(homeEl)homeEl[C0t]=(function(self){return function(e){self[m3O]();}
;}
)(this);if(zoomInEl){zoomInEl[C0t]=(function(self){return function(e){self[D5l](e);}
;}
)(this);zoomInEl[Y8R]=(function(self){return function(e){self[D5l](e);}
;}
)(this);zoomInEl[N7O](G0t);zoomInEl[N7O](v6g);}
if(zoomOutEl){zoomOutEl[C0t]=(function(self){return function(e){self[w4I](e);}
;}
)(this);zoomOutEl[Y8R]=(function(self){return function(e){self[w4I](e);}
;}
)(this);zoomOutEl[N7O](G0t);zoomOutEl[N7O]((d5t+U2I+B5O.Z7o+y6o+B6I+B5O.G4o));}
}
}
var wheelEvent=B5O[k3o](L2t,document[E4v](C2n))?L2t:B5O[w1I](document[(d5t+I8O+c4o+C9n+W3o+V0t)],undefined)?T8l:c4l;el[O9g](wheelEvent,(function(self,wheelEvent){return function(e){self[g8n](e,wheelEvent);}
;}
)(this,wheelEvent),C0l);}
;STXChart.prototype.rightClickHighlighted=function(){var r7n="ckHi",Z0g="ghtCl";if(this[y2o](A7g,arguments))return ;this[F1O](u7g);this[K6g]((g2g+Z0g+X8l+r7n+V9l+p8l+e7o+X8l+q4I+W3o+m9o),arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){var q3l="j7S",J9o="x7S";if(this[y2o]("deleteHighlighted",arguments))return ;this[D6t]=true;STX[f9o](this[E6v][S5g],this);for(var i=B5O[J9o](this[l3v].length,1);B5O[q3l](i,0);i--){var drawing=this[l3v][i];if(drawing[r5t]&&!drawing[J1v]){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this[X2O]();this[l3v][K1l](i,1);}
this[E9o]("vector");}
}
for(var name in this[W1t]){var o=this[W1t][name];if(o[I5g]&&!o[J1v]){if(callRightClick)this[T0t](name);else this[q1o](name);}
}
for(var field in this[o3o][E6v][p6g]){var series=this[o3o][E6v][(F2o+W3o+g2g+W3o+F2o)][field];if(series[I5g]&&!series[J1v]){this[J4v](field,this[o3o][E6v]);}
}
this[V5o]();if(this[Y8o][P3t]){this[Y8o][P3t][d4v][O2l]="none";this[Y8o][P3t][X5n][0][L9v]="";}
this[K6g]("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){var P6o="O6S";for(var p in this[p3n]){var panel=this[(c2o+z9o+y7o+V0t+F2o)][p];if(B5O[P6o](panel[F2g],name))return u7g;}
return C0l;}
;STXChart.prototype.hideCrosshairs=function(){this[p6I]=C0l;}
;STXChart.prototype.showCrosshairs=function(){this[p6I]=u7g;}
;STXChart.prototype.grabHandle=function(e,panel){if(e[U2n])e[U2n]();if(!panel)return C0l;STXChart[h7n]=panel.top+this.chart.top;STXChart[V0l]=panel;this[F1g]();return C0l;}
;STXChart.prototype.releaseHandle=function(e){var e7g="zePanels",O3t="resi";if(e[U2n])e[U2n]();STX[f9o](this[E6v][S5g],this);this[(O3t+e7g)]();STXChart[V0l]=X7g;}
;STXChart.prototype.storePanels=function(){var d7O="K6S";if(B5O[d7O](this[I4l],X7g))this[(e7o+z9o+g5R+B5O.G4o)]={}
;var view=this[I4l];view[p3n]={}
;for(var p in this[p3n]){var panel=this[p3n][p];view[p3n][panel[F2g]]={"percent":panel[P5n],"display":panel[O2l]}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){var R3v="V6S";this[l8v]();if(B5O[R3v](saveLayout,C0l))this[E9o]((Q7t+N5O));}
;STXChart.prototype.resolveY=function(y){return this.chart.top+y;}
;STXChart.prototype.resolveX=function(x){return this[E6v][h3l]+x;}
;STXChart.prototype.backOutY=function(y){var E2g="A6S";return B5O[E2g](y,this.chart.top);}
;STXChart.prototype.backOutX=function(x){var R8t="s6S";return B5O[R8t](x,this[E6v][h3l]);}
;STXChart.prototype.privateDeletePanel=function(panel){var i2t="Chi",B8g="emo",W4g="M6S",h3g="N6S",L1t="yPanelMap",E9O="dies";if(this[I4l][(T9o+c4o+E9O)])delete  this[I4l][v8n][panel[F2g]];delete  this[p3n][panel[F2g]];for(var spm in STX[Q2v][(F2o+U3l+m9o+L1t)]){if(B5O[h3g](STX[Q2v][B0g][spm][L0t],panel[F2g]))delete  STX[Q2v][B0g][spm];}
for(var series in this[W1t]){if(B5O[W4g](this[W1t][series][L0t],panel[F2g])){delete  this[I4l][v8n][series];delete  this[(G9t+f9t+z9o+O1l+F2o)][series];}
}
if(panel[L1l]){this[E6v][T3g][(B5O.E4o+B8g+o1l+W3o+i2t+s4o)](panel[b3O]);this[E6v][T3g][g6I](panel[q8O]);if(panel[f5n])this[E6v][T3g][g6I](panel[f5n]);}
}
;STXChart.prototype.panelClose=function(panel){var S9t="Pan",m4I="sa",R7I="q6S";if(!panel)return ;if(this[y2o](h9l,arguments))return ;this[D6t]=u7g;STXChart[m1n]=C0l;if(panel[n9R])this[I9t](panel);if(this[Q9g][panel[F2g]]){for(var panelName in this[p3n]){var subPanel=this[p3n][panelName];if(B5O[R7I](subPanel[(V5g+M2I+B5O.G4o)][F2g],panel[F2g])){this[j4o](subPanel);}
}
delete  this[(A2n+q3R+F2o)][panel[F2g]];}
else{this[j4o](panel);}
this[J8R]();this[w0n]();this[Z6I]();this[V5o]();this[(m4I+o1l+W3o+S9t+V0t+F2o)]();this[K6g](h9l,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this[p3n]){var panel=this[p3n][p];this[j4o](panel);}
this[I4l][p3n]={}
;this[p3n]={}
;}
;STXChart.prototype.panelUp=function(panel){var e2n="I6S",D8o="R6S",z0g="G6S",M6n="U6S";this[D6t]=u7g;STXChart[m1n]=C0l;this[J8R]();var newPanels={}
,pos=B5O.b4I;for(var p in this[(n7t+y7o+V0t+F2o)]){if(B5O[M6n](p,panel[F2g]))break;pos++;}
if(B5O[z0g](pos,B5O.b4I))return ;var i=B5O.b4I;for(var p in this[p3n]){if(B5O[D8o](i,pos-B5O.i4I))newPanels[panel[F2g]]=panel;if(B5O[e2n](p,panel[F2g]))continue;newPanels[p]=this[p3n][p];i++;}
this[p3n]=newPanels;this[Z6I]();this[V5o]();this[o6o]();}
;STXChart.prototype.panelDown=function(panel){var m8n="B6S",J6g="Y6S",F4l="o6S",U0l="H6S";this[D6t]=true;STXChart[m1n]=false;this[J8R]();var newPanels={}
,pos=0;for(var p in this[p3n]){if(B5O[U0l](p,panel[F2g]))break;pos++;}
var length=0;for(var p in this[p3n])length++;if(B5O[F4l](pos,length-1))return ;var i=0;for(var p in this[p3n]){if(B5O[J6g](p,panel[F2g])){i++;continue;}
newPanels[p]=this[p3n][p];if(B5O[m8n](i,pos+1))newPanels[panel[(y7o+l4I+W3o)]]=panel;i++;}
this[p3n]=newPanels;this[Z6I]();this[V5o]();this[o6o]();}
;STXChart.prototype.panelSolo=function(panel){var E1l="C80",c0v="m6S",g7I="oldPercent",i4t="stx_solo_lit",X4o="E6S";this[D6t]=u7g;STXChart[m1n]=C0l;this[J8R]();var hideOrNot=u7g;if(B5O[X4o](panel[n9R],u7g)){hideOrNot=C0l;panel[n9R]=C0l;STX[N4v](panel[(F2o+B5O.Z7o+e7o+B5O.Z7o)],i4t);panel[P5n]=panel[g7I];this[p3n][E6v][P5n]=this[p3n][E6v][g7I];}
else{panel[n9R]=u7g;STX[V3g](panel[P4o],i4t);if(B5O[c0v](panel[F2g],E6v)){panel[g7I]=panel[P5n];}
else{panel[g7I]=panel[P5n];this[p3n][E6v][g7I]=this[p3n][E6v][P5n];panel[P5n]=B5O[E1l](B5O.i4I,this[p3n][E6v][P5n]);}
}
for(var p in this[p3n]){this[p3n][p][G6I]=hideOrNot;}
this[p3n][(V5g+B7o)][G6I]=C0l;panel[G6I]=C0l;this[Z6I]();this[V5o]();this[o6o]();}
;STXChart.prototype.calculatePanelPercent=function(panel){var R3t="t80",c2n="k80",h=B5O[c2n](panel[k5l],panel.top);panel[P5n]=B5O[R3t](h,this[E6v][a9g]);}
;STXChart.prototype.resizePanels=function(){var N0v="bot",x2O="c80",k2I="S80",C2v="els",B4t="a80",y7g="rc",O8o="tePan",U8g="cula",r3v="calculatePanelPercent",T6v="g80",M1t="F80",b6n="r80",s8g="sizi",O9v="W80";if(B5O[O9v](STXChart[(B5O.E4o+W3o+s8g+y7o+V9l+q7I+m1I+W3o+e7o)],X7g))return ;var up=u7g;if(B5O[b6n](STXChart[h7n],this[G1n](STXChart.resizingPanel.top)))up=C0l;if(up){var priorPanel=X7g;for(var p in this[p3n]){if(B5O[M1t](this[p3n][p],STXChart[V0l]))break;if(this[p3n][p][G6I])continue;priorPanel=this[p3n][p];}
var newY=this[K0o](STXChart[h7n]);if(B5O[T6v](newY,priorPanel.top+B9l)){newY=priorPanel.top+B9l;STXChart[h7n]=this[G1n](newY);}
priorPanel[k5l]=newY;STXChart.resizingPanel.top=newY;this[r3v](priorPanel);this[(B5O.r3o+O4o+U8g+O8o+W3o+e7o+q7I+W3o+y7g+W3o+y7o+B5O.G4o)](STXChart[V0l]);}
else{var priorPanel=X7g;for(var p in this[(H8R+V0t+F2o)]){if(B5O[B4t](this[p3n][p],STXChart[V0l]))break;if(this[p3n][p][(p8l+N0g+H6n)])continue;priorPanel=this[(n7t+y7o+C2v)][p];}
var newY=this[K0o](STXChart[h7n]);if(B5O[k2I](newY,STXChart[V0l][k5l]-B9l)){newY=B5O[x2O](STXChart[V0l][k5l],B9l);STXChart[h7n]=this[G1n](newY);}
priorPanel[(N0v+B5O.G4o+B5O.Z7o+L6o)]=newY;STXChart.resizingPanel.top=newY;this[r3v](priorPanel);this[r3v](STXChart[V0l]);}
this[Z6I]();this[V5o]();this[o6o]();}
;STXChart.prototype.adjustPanelPositions=function(){var N8O="stDra",o6O="dju",w5t="ei",N5n="c90",q6n="hom",V4t="b90",I4n="i90",o9l="J90",U9g="y90",Z4O="p90",F5n="v90",d4l="L90",r0g="topOffset",f8O="D90",x6l="h90",O3O="T80",m3g="P80",l6g="u80",r1l="e80",Z9n="Q80",M6g="Z80";if(B5O[M6g](this[E6v][L2O],""))return ;if(this[y2o]("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this[E6v][a9g],pixels=0,first=false,acc=0,n=0,activeSolo=false;for(var x in this[p3n]){var panel=this[p3n][x];if(isNaN(panel[P5n])||B5O[Z9n](panel[P5n],0))panel[P5n]=.05;if(panel[G6I])continue;acc+=panel[P5n];n++;if(panel[n9R])activeSolo=true;}
for(var x in this[p3n]){var zoomRatio=0,panel=this[p3n][x];if(panel[G6I]){if(panel[f5n])panel[f5n][d4v][O2l]="none";if(panel[c6l]){panel[c6l][d4v][O2l]="none";}
continue;}
if(!first){first=true;panel[A6l][d4v][O2l]="none";}
else{panel[(A6l)][d4v][O2l]="";}
if(activeSolo){if(panel[n9R]){panel[P4o][d4v][O2l]="";}
else{panel[P4o][d4v][O2l]="none";}
}
else if(B5O[r1l](n,1)||B5O[l6g](n,2)){panel[P4o][d4v][O2l]="none";}
else{panel[P4o][d4v][O2l]="";}
if(B5O[(K2t+w2O)](n,1)){panel[w1o][d4v][(m9o+X8l+F2o+c2o+e7o+R8o)]=(p8n+y7o+W3o);}
else{panel[w1o][d4v][O2l]="";}
if(panel[H9O])panel[m1l][d4v][O2l]="";else panel[m1l][d4v][O2l]="none";panel[P5n]=B5O[m3g](panel[P5n],acc);panel.top=lastBottom;panel[k5l]=panel.top+(B5O[O3O](h,panel[P5n]));panel.height=B5O[x6l](panel[k5l],panel.top);var yAxis=panel[b4O];if(yAxis[n6v]&&yAxis.height){zoomRatio=B5O[(f8O)](yAxis[n6v],yAxis.height);}
yAxis.top=panel.top+yAxis[r0g];yAxis[k5l]=B5O[(d4l)](panel[k5l],yAxis[x6o]);yAxis.height=B5O[F5n](yAxis[k5l],yAxis.top);if(zoomRatio){yAxis[n6v]=B5O[Z4O](zoomRatio,yAxis.height);}
lastBottom=panel[k5l];if(!yAxis[R1v]&&B5O[U9g](yAxis[R1v],0)){yAxis[R1v]=100;yAxis[t4v]=0;yAxis[s2I]=100;}
yAxis[v9o]=B5O[o9l](yAxis.height,yAxis[s2I]);if(panel[c6l]){panel[c6l][d4v][O2l]="block";panel[c6l][d4v].width=this[E6v].width+"px";panel.markerHolder.style.top=panel.top+"px";panel[c6l][d4v].height=panel.height+"px";}
}
if(x)this[p3n][x][w1o][d4v][(H5v+O5n+R8o)]=(y7o+d5t+W3o);if(B5O[I4n](n,2)&&!activeSolo){this[p3n]["chart"][(v8o+e7o+B5O.Z7o)][d4v][O2l]="";}
if(this[Y8o][e0l]&&this[p3n]["chart"])this[(h9g+y7o+B5O.G4o+B5O.E4o+B5O.Z7o+e7o+F2o)][e0l][d4v][k5l]=(B5O[V4t](this[E6v][a9g],this[p3n]["chart"][k5l],22))+"px";if(this[Y8o][(q6n+W3o)]&&this[p3n]["chart"])this[Y8o][m3O][d4v][k5l]=(B5O[N5n](this[E6v][(B5O.r3o+P8R+F2o+O9o+w5t+q4I)],this[p3n]["chart"][k5l],22))+"px";this[l7O]();this[(z9o+o6O+N8O+G1l+X8l+y7o+V9l+F2o)]();this[K6g]("adjustPanelPositions",arguments);}
;STXChart.prototype.addChart=function(name,chart){chart[F2g]=name;this[Q9g][name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){var s2l="cent",b4n="o90",F6g="H90",T1v="I90";if(this[y2o]("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this[E6v][a9g];if(!height){height=B5O[T1v](h,.20);}
var percent=B5O[F6g](height,h),reduce=B5O[b4n](1,percent);for(var p in this[p3n]){var panel=this[p3n][p];panel[(c2o+h9t+s2l)]*=reduce;}
this[K2O](display,name,percent,chartName);this[Z6I]();this[o6o](false);this[K6g]("createPanel",arguments);}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var h8n="E90",e1g="edow",z1o="releaseHandle",m0l="ace",P1v="isS",H8t="hideCrosshairs",w3l="stx-chart-panel",K8l="tl",R8R="displayIconsSolo",O4v="Down",G8n="Up",H7I="ntNod",A2I="pare",S4n="dit",r5n=".stx-ico-down",y5R=".stx-ico-focus",z2I=".stx-ico-up",N2v=".stx-panel-title",H4l=".stx-ico-close",L8n="closeXTemplate",K7v="handleTemplate",j4g="cloneNode",x0l="iconsTemplate",m1o="Pane",P7o="Y90",Y9l="ts";if(this[y2o](K2O,arguments))return ;if(!chartName)chartName=(A2n+q3R);var chart=this[(B5O.r3o+B5O.w2t+B5O.E4o+Y9l)][chartName],isChart=(B5O[P7o](name,chartName)),yAxis=X7g;if(isChart){display=chart[L2O];if(chart[S5l])display=chart[S5l];yAxis=chart[b4O];}
var panel=this[p3n][name]=new STXChart[(m1o+e7o)](name,yAxis);panel[P5n]=percent;panel[E6v]=chart;panel[O2l]=display;panel[b3O]=this[Y8o][x0l][j4g](u7g);panel[q8O]=this[Y8o][K7v][(B5O.r3o+A0g+W3o+f2I+B5O.V2n+W3o)](u7g);if($$(L8n)){panel[f5n]=$$(L8n)[j4g](u7g);panel[f5n][d4v][O2l]=k3O;panel[f5n][E1v]=X7g;panel[p6o]=panel[f5n][X5n][B5O.b4I];}
else{panel[f5n]=X7g;panel[p6o]=panel[b3O][X5n][B5O.Z4I];panel[p6o]=$$$(H4l,panel[b3O])[g5O];}
panel[q8O][E1v]=X7g;STX[V3g](panel[b3O],Q8R);panel[s3o]=$$$(N2v,panel[b3O]);panel[A6l]=$$$(z2I,panel[b3O])[g5O];panel[P4o]=$$$(y5R,panel[b3O])[g5O];panel[w1o]=$$$(r5n,panel[b3O])[g5O];panel[m1l]=$$$((h4O+F2o+W5l+j4O+X8l+B5O.r3o+B5O.Z7o+j4O+W3o+S4n),panel[b3O])[(A2I+H7I+W3o)];if(!this[(m9o+X8l+O5n+R8o+c7I+B5O.r3o+B5O.Z7o+v6O+G8n+O4v)])panel[(c4o+c2o)][d4v][O2l]=(y7o+e0O);if(!this[V8R])panel[w1o][(T9o+s7n)][(H5v+u8o)]=I3v;if(!this[R8R])panel[P4o][d4v][O2l]=I3v;if(!this[d2g]){if(panel[f5n])panel[f5n][d4v][O2l]=I3v;else panel[p6o][d4v][O2l]=(p8n+y7o+W3o);}
if(!this[m8O])panel[q8O][d4v][O2l]=I3v;panel[s3o][L9v]=display;if(isChart){STX[V3g](panel[s3o],(V5g+M2I+B5O.G4o+j4O+B5O.G4o+X8l+K8l+W3o));STX[V3g](panel[b3O],w3l);}
if(!STX[K4t]||STX[f9v])panel[b3O][D0t]=(function(self){return function(e){self[H8t]();}
;}
)(this);if(!STX[K4t]||STX[f9v])panel[b3O][(d5t+L6o+B5O.Z7o+c4o+F2o+W3o+x9t+B5O.G4o)]=(function(self){return function(e){var i3R="irs",R6v="Cro";self[(F2o+p8l+v9t+R6v+Q9o+B5O.w2t+i3R)]();}
;}
)(this);if(panel[f5n]){if(!STX[K4t]||STX[(P1v+c4o+B5O.E4o+E8l+m0l)])panel[f5n][D0t]=(function(self){return function(){self[H8t]();}
;}
)(this);if(!STX[K4t]||STX[f9v])panel[f5n][X1n]=(function(self){return function(){var r2l="showC";self[(r2l+O2I+F2o+B5O.w2t+X8l+B5O.E4o+F2o)]();}
;}
)(this);}
panel[q8O][L0t]=panel;if(!STX[K4t]||STX[f9v])panel[q8O][D0t]=(function(self){return function(){self[H8t]();}
;}
)(this);if(!STX[K4t]||STX[f9v])panel[q8O][(d5t+L6o+B5O.Z7o+c4o+x2I+x9t+B5O.G4o)]=(function(self){return function(){self[J8R]();}
;}
)(this);if(STX[K4t]){panel[q8O][f8R]=(function(stx,panel){return function(e){var n0o="bH",z8o="B90";if(B5O[z8o](stx[V0l],X7g))return ;stx[(O8v+z9o+n0o+V2t+Z4o)](e,panel);}
;}
)(this,panel);panel[q8O][(B5O.Z7o+y7o+U8l+c4o+B5O.r3o+p8l+s6o)]=(function(stx){return function(e){stx[z1o](e);}
;}
)(this);}
panel[q8O][(B0t+c4o+F2o+e1g+y7o)]=(function(stx,panel){return function(e){var k1n="grabHandle";if(!e)e=event;stx[k1n](e,panel);}
;}
)(this,panel);panel[(B5O.w2t+y7o+m9o+Z4o)][Y8R]=(function(stx){return function(e){if(!e)e=event;stx[z1o](e);}
;}
)(this);panel[p6o][l5l]=(function(stx,panel){return function(){stx[h9l](panel);}
;}
)(this,panel);panel[A6l][l5l]=(function(stx,panel){return function(){var E4t="panelUp";stx[E4t](panel);}
;}
)(this,panel);panel[w1o][l5l]=(function(stx,panel){return function(){var F8g="panelDown";stx[F8g](panel);}
;}
)(this,panel);panel[(T0O+B5O.Z7o)][l5l]=(function(stx,panel){return function(){stx[I9t](panel);}
;}
)(this,panel);if(B5O[h8n](panel[F2g],E6v))panel[p6o][d4v][O2l]=I3v;this[K6g](K2O,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){var O6O="ncti";panel[(m1l+M8o+c4o+O6O+B5O.Z7o+y7o)]=editFunction;panel[m1l][l5l]=editFunction;this[Z6I]();}
;STXChart.prototype.drawPanels=function(){var n5t="q30",M2v="nsSolo",n2I="yIc",t5n="ispla",f2O="M30",N6g="hidde",P1l="N30",n5o="s30",R0o="A30",a9R="C30",K0R="m90",B5R="han";if(this[y2o]("drawPanels",arguments))return ;var first=false,borderEdge=Math[Q6v](this[E6v].width)+.5;for(var p in this[p3n]){var panel=this[p3n][p];panel[i6o]=false;if(!panel[L1l]){this[E6v][T3g][E5t](panel[(b3O)]);this[E6v][T3g][E5t](panel[(B5R+l6t+W3o)]);if(panel[f5n])this[E6v][T3g][E5t](panel[f5n]);panel[L1l]=true;}
if(B5O[K0R](panel[s3o][L9v],panel[(H5v+F2o+j3v+R8o)]))panel[s3o][L9v]=panel[O2l];STX[V3g](panel[b3O],"stx-show");panel.icons.style.top=(B5O[a9R](this[G1n](panel.top),this.chart.top))+(a8v);if(panel[f5n]){panel[f5n][d4v][(p4n+c2o+e7o+z9o+O1l)]="inline-block";panel.closeX.style.top=(B5O[(H6o+r4v)](panel[k5l],panel[f5n][D6n],3))+"px";}
if(B5O[R0o](panel[G6I],true)){if(B5O[n5o](panel[G6I],true))STX[N4v](panel[b3O],"stx-show");if(B5O[P1l](panel[(N6g+y7o)],true))panel[q8O][d4v][O2l]="none";if(B5O[f2O](panel[G6I],true)&&panel[f5n])panel[f5n][d4v][(m9o+O4g+M7l)]="none";continue;}
else{if(!this[V8R])panel[A6l][(F2o+B5O.G4o+c3R+W3o)][(H5v+F2o+j3v+R8o)]="none";if(!this[V8R])panel[w1o][d4v][O2l]="none";if(!this[(m9o+t5n+n2I+B5O.Z7o+M2v)])panel[P4o][d4v][O2l]=(p8n+V5n);if(!this[d2g]&&panel[f5n])panel[(g1l+F2o+N7t)][d4v][O2l]="none";}
if(!first){panel[q8O][d4v][O2l]="none";first=true;continue;}
var y=panel.top;y=Math[Q6v](y)+.5;this[F8R](0,borderEdge,y,y,this[e9v]("stx_panel_border"),"segment",this[E6v][x3t],false,{}
);if(!this[m8O]){panel[q8O][d4v][O2l]="none";}
else{panel[q8O][d4v][(m9o+X8l+O5n+z9o+O1l)]="";}
panel.handle.style.top=(B5O[n5t](y,panel[q8O][I2O]/2))+"px";}
this[K6g]("drawPanels",arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var s1O="hairT",m4O="ross",F9t="Type",U0g="o30",E2t="H30",d5o="I30",e1n="R30",e7O="G3",t0n="U30",z3t="Anno",u5g="edi";if(!this[D6t]){if(this[y2o](K7l,args))return ;if(this[(u5g+s7o+y7o+V9l+z3t+B5O.G4o+z9o+B5O.G4o+X8l+B5O.Z7o+y7o)])return ;this[u8v]={s1MS:-B5O.i4I,e1MS:-B5O.i4I,s2MS:-B5O.i4I,e2MS:-B5O.i4I}
;if(!this[p6I])return ;if(!this[P7g])return ;if(B5O[t0n](this[y6t],r4o))return ;if(B5O[(e7O+w2O)](x,this[E6v][h3l])||B5O[e1n](x,this[E6v][V8l])||B5O[d5o](y,this.chart.top)||B5O[E2t](y,this[E6v][k5l]))return ;var cy=this[K0o](STXChart[h7n]),cx=this[y0o](STXChart[H2n]);this[o3o]=this[(r5v+V7v+p8l+q7I+m1I+V0t)](cy);if(B5O[U0g](this[w4O][(d2v+F9t)],r4o)||!this[w4O][E5v]||!STX[N1l][this[w4O][E5v]]||!(new STX[N1l][this[w4O][E5v]])[s2v]){if(!this[g9t](this[o3o],cx,cy)){if(!this[I4l][o3O]){STXChart[h7n]=B5O.b4I;STXChart[(B5O.r3o+B5O.E4o+B5O.Z7o+F2o+F2o+B5O.w2t+X8l+B5O.E4o+Y1o)]=B5O.b4I;this[T2v]();STXChart[(B5O.r3o+m4O+g9R+B5O.E4o+U0o)]=y;STXChart[(N8R+F2o+F2o+B5O.w2t+e5g)]=x;this[i7v]=this[y0o](STXChart[H2n]);this[e1v]=this[K0o](STXChart[h7n]);if(this[o3o]&&this[o3o][E6v][e2O]){this[g8t]=this[R4o](this[i7v],this[o3o][E6v]);this[j8t]=this[D7I](this[o3o],this[(B7v+B5O.Z7o+Q9o+s1O+X8l+s3g)],this[f1t](this[e1v],this[o3o]));}
this[k9o]();this[T2v](u7g);}
}
}
}
self[D6t]=C0l;this[K6g](K7l,args);}
)[G1g](self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var m2I="rgin",b1O="Ma",F6v="ula",D2o="lc",k6o="k50",q5g="croll",y4o="C50",q5o="editingAnnotation",Z3l="m30",o9R="B30",F9n="Y30";if(B5O[F9n](x,this[E6v][h3l])||B5O[o9R](x,this[E6v][(B5O.E4o+W4v+p8l+B5O.G4o)])||B5O[(T6I+r4v)](y,this.panels[E6v].top)||B5O[Z3l](y,this[p3n][E6v][(Y6g+B5O.G4o+B5O.G4o+k0t)]))return ;if(this[q5o])return ;if(this[y2o](q5t,arguments))return ;if(STXChart[m1n]){this[g4O]();}
else{if(this[J1O]){this[F1O]();}
else{var yAxis=this[o3o][b4O];if(B5O[y4o](yAxis[(F2o+q5g)],(yAxis[T7l]-yAxis[k9O])/B5O.M4I)&&B5O[k6o](yAxis[n6v],yAxis[T7l]+yAxis[k9O])){this[m3O]();}
else{this[(T5g+D2o+F6v+H4o+U0o+R3n+b8g+b1O+m2I+F2o)](this[o3o][b4O]);}
this[V5o]();}
}
this[u8v]={s1MS:-B5O.i4I,e1MS:-B5O.i4I,s2MS:-B5O.i4I,e2MS:-B5O.i4I}
;this[K6g](q5t,arguments);}
;STXChart.prototype.touchmove=function(e){var A4n="S40",m9g="a40",c3n="g40",Y2I="F40",f9l="allowThreeFingerTouch",z7o="r40",y5n="W40",V0o="t40",x7I="k40",E8g="C40",L9R="m10",m6v="Start",D3l="Pa",p2v="cu",j7l="E10",C9l="B10",e6o="Y10",N9l="lue",K1n="rtV",l0O="axT",N2n="o10",h6g="H10",x4g="I10",Z2v="R10",j9o="ues",R6O="bSta",z0o="G10",s9l="ntPa",w7O="urre",T0l="U10",h2O="q10",u8t="moveCoun",Q5v="M10",W4I="N10",a9l="tr",Z5O="s10",G8t="asin",a5g="A10",A1t="V10",C9O="K10",n0R="O10",I0O="j00",e4O="x00",t5l="w00",u3o="d00",R8O="X00",C7v="face",Z0l="n00",u5O="aramet",J5g="orP",A2g="l00",Y7v="b00",m4n="i00",O4O="J00",i2v="y00",v8t="owZo",O0o="v00",f1O="vein",F9R="iz",Z8l="L00",U6t="To",G7O="D00",x8t="h00",L4t="T50",j0l="P50",t5t="f50",e1o="u50",t6v="e5",f9R="Q50",Q0O="Z50",g7v="c50",r7t="S50",W3R="a50",q0R="MSGESTURE_FLAG_INERTIA",D3O="g50",R7o="rideGe",K4o="abb",h7o="F50",m6I="r50",q0o="W50",j5l="t50";if(!this[P7g])return ;if(B5O[j5l](this[y6t],""))return ;if(B5O[q0o](STXChart[n1o],true))return ;var localTouches=[];if(e&&e[U2n])e[U2n]();var now=new Date()[f2v]();if(this[u8v][(k0o)]==-1){this[u8v][y4g]=now;if(B5O[m6I](this[u8v][y4g]-this[u8v][s1o],25)){return ;}
}
else{this[u8v][m4v]=now;if(B5O[h7o](this[(B5O.r3o+e7o+V7v+E9l)][m4v]-this[u8v][k0o],25)){return ;}
}
if(STX[f9v]){if(this[C8l])return ;if(!e[t0g])e[t0g]=this[a2O];if((!this[(V9l+B5O.E4o+K4o+o8O+C2I+B5O.r3o+B5O.E4o+W3o+H6n)]||STXChart[V0l])&&!this[(G9t+W3o+B5O.E4o+R7o+T9o+z7l+W3o)]){if(B5O[D3O](e[g0O],e[q0R])){this[o5v][y8R]();return ;}
}
for(var i=0;B5O[W3R](i,this[x2n].length);i++){if(B5O[r7t](this[x2n][i][t0g],e[t0g])){var xd=Math[y8l](B5O[g7v](this[x2n][i][F4o],e[v0g])),yd=Math[y8l](B5O[Q0O](this[(U8l+c4o+B5O.r3o+u0t+F2o)][i][(n7t+Z4n+U0o)],e[b1v])),c=Math[z6n](B5O[f9R](xd,xd)+B5O[(t6v+w2O)](yd,yd));if(!c)return ;this[u8v][y4g]=new Date()[f2v]();if(B5O[e1o](this[u8v][y4g]-this[u8v][s1o],50)){return ;}
if(B5O[t5t](this[x2n][i][(V7g+W3o+Y1o)],e[v0g])&&B5O[j0l](this[x2n][i][(n7t+V9l+W3o+U0o)],e[(B5O.r3o+e7o+H1v+b6O+U0o)]))return ;this[x2n][i][F4o]=e[v0g];this[x2n][i][r2o]=e[b1v];break;}
}
if(B5O[L4t](i,0)){this[u1v]=true;}
else{this[O5t]=true;}
if(!this[V9t]&&B5O[x8t](i,this[x2n].length)){return ;}
this[C4I]=[{pointerId:e[t0g],pageX:e[v0g],pageY:e[b1v]}
];localTouches=this[x2n];if(this[V9t]&&B5O[G7O](localTouches.length,0)){localTouches=this[C4I];}
}
else{localTouches=e[x2n];this[C4I]=e[C4I];}
var crosshairXOffset=this[r7g],crosshairYOffset=this[n8o];if((this[r3t]&&this[r3t][(k9v+V9l+U6t+t8o+B5O.E4o+z9o+G1l)])||this[o8l]){crosshairXOffset=0;crosshairYOffset=0;}
if(this[y2o]("touchmove",arguments))return ;if(B5O[Z8l](STXChart[(j7g+F2o+F9R+X8l+s7O+q7I+z9o+y7o+V0t)],null)){var touch=localTouches[0],x=touch[F4o],y=touch[r2o];this[(L6o+x9t+F2o+W3o+L6o+B5O.Z7o+f1O+V5n+B5O.E4o)](x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this[m3v]!=-1){this[s5n]=new Date();}
this[E9v]=this[(m3v)];this[m3v]=localTouches[0][F4o];if(B5O[O0o](localTouches.length,1)){if(!this[q2t]){var touch=localTouches[0],x=touch[F4o],y=touch[r2o];this[F0O](x+crosshairXOffset,y+crosshairYOffset);}
}
else if(B5O[(c2o+w2O+w2O)](localTouches.length,2)&&this[(I5n+v8t+B5O.Z7o+L6o)]){if(!this[p6I])return ;var touch1=localTouches[0],x1=touch1[F4o],y1=touch1[r2o],touch2=localTouches[1],x2=touch2[F4o],y2=touch2[r2o],distance=Math[z6n](B5O[i2v]((x2-x1),(x2-x1))+B5O[O4O]((y2-y1),(y2-y1)));this[X0v]=Math[h7I](x1,x2)+B5O[m4n]((Math[A0o](x1,x2)-Math[h7I](x1,x2)),2);var delta=Math[Q6v](B5O[Y7v](this[E5O],distance)),noCrosshairs=(!this[I4l][o3O]&&(B5O[A2g](this[w4O][E5v],"")||!this[(d9o+F9o+L1o+W3o+B5O.r3o+B5O.G4o+J5g+u5O+h9t+F2o)][E5v]));if(noCrosshairs)this[q2t]=5;this[l7O]();if(B5O[Z0l](this[q2t],2)){if(STX[(X8l+F2o+C2I+c4o+B5O.E4o+C7v)]&&(!this[u1v]||!this[O5t])){return ;}
if((B5O[R8O](x1,this[(u7t)][I6O])&&B5O[(Q0l+w2O+w2O)](x2,this[u7t][a8n]))||(B5O[u3o](x1,this[u7t][I6O])&&B5O[t5l](x2,this[(u7t)][a8n]))||(B5O[e4O](y1,this[u7t][Y3v])&&B5O[I0O](y2,this[u7t][S8v]))||(B5O[n0R](y1,this[u7t][Y3v])&&B5O[C9O](y2,this[u7t][S8v]))){this[q2t]=0;}
else{this[q2t]++;if(B5O[A1t](this[q2t],2))return ;}
}
this[u7t]={x1:x1,x2:x2,y1:y1,y2:y2}
;if(B5O[a5g](this[q2t],0)){this[F0O](x1+crosshairXOffset,y1+crosshairYOffset);this[E5O]=distance;}
else{var angle=Math[G8t](B5O[Z5O]((Math[A0o](y2,y1)-Math[h7I](y2,y1)),distance));this[(B5O.r3o+a9l+e7o)]=true;if(B5O[W4I](Math[y8l](delta),12)&&!noCrosshairs){this[K6I]++;if(B5O[Q5v](this[K6I],4)){this[q2t]=0;this[K6I]=0;this[A7l]=false;return ;}
}
else{this[(u8t+B5O.G4o)]=0;}
if(B5O[h2O](angle,1)||(!this[v8O]&&B5O[T0l](angle,1.37))){if(!this[(B5O.r3o+w7O+s9l+V5n+e7o)])return ;var chart=this[o3o][E6v];this[v8O]=false;var tickDistance=B5O[z0o](this[(O8v+z9o+R6O+B5O.E4o+B5O.G4o+W1n+e7o+j9o)][a8n],this[m0O][I6O]),pixelDistance=B5O[Z2v](this[u7t][a8n],this[u7t][I6O]),newCandleWidth=B5O[x4g](pixelDistance,tickDistance);if(B5O[h6g](newCandleWidth,this[u5R]))newCandleWidth=this[u5R];this[O0t](newCandleWidth,chart);if(B5O[N2n](chart[z1v],5))this[(F2o+N9v+l0O+X8l+a6g)](5);var centerTick=this[(O8v+z9o+g2I+g1o+K1n+z9o+N9l+F2o)][I6O]+Math[Q6v](B5O[e6o](tickDistance,2)),centerX=this[u7t][I6O]+Math[Q6v](B5O[C9l](pixelDistance,2)),currentTick=this[R4o](centerX,chart);chart[u3O]+=Math[J8l](B5O[j7l](currentTick,centerTick));this[V5o]();}
else{var yAxis=this[(p2v+B3R+H6n+B5O.G4o+D3l+L7o)][E6v][L0t][b4O];this[v8O]=true;yAxis[n6v]=this[(O8v+P3o+m6v+v0o+B5O.Z7o+B5O.Z7o+L6o)]+(B5O[L9R](this[E5O],distance));if(B5O[E8g](this[a7v],yAxis.height)){if(B5O[x7I](yAxis[n6v],yAxis.height))yAxis[n6v]=B5O[V0o](yAxis.height,1);}
else{if(B5O[y5n](yAxis[n6v],yAxis.height))yAxis[n6v]=yAxis.height+1;}
this[V5o]();}
this[A7l]=false;}
}
else if(B5O[z7o](localTouches.length,3)&&STXChart[f9l]){if(!this[p6I])return ;var touch1=localTouches[0],x1=touch1[F4o],distance=B5O[Y2I](this[D0o],x1);this[o5o]=this[I5v]+Math[Q6v](B5O[c3n](distance,10));if(B5O[m9g](this[o5o],1))this[o5o]=1;if(typeof headsUp!=(w6l+w4l+l3t)){headsUp[p0l][L9v]=this[o5o]+" "+this[I4l][q3v];if(B5O[A4n](this[o5o],1))headsUp[p0l][L9v]+="s";}
}
this[K6g]("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){var u7n="b20",g0l="Pi",E7v="grabStartPt",u2v="abSt",C4g="andl",y6g="bStar",t0R="i20",z2g="J20",l6I="y20",L8o="tP",Y3l="OutX",n3t="cros",D4l="interDo",n4o="Po",f6n="ingS",S5R="bb",B1o="scr",X4I="p20",b7g="sha",c0g="ide",D5O="Out",d4t="v20",q2O="L20",o7o="D20",E8O="h20",o0v="T40",M1g="kO",e5O="P40",f6o="oveB",u1g="f40",o0n="u40",F7t="e40",S9g="Q40",W9n="erMo",X0o="eFi",h2v="dou",L1n="Z40",z9n="ngedTo",d3v="reTo",g0R="gno",q2g="c40";if(B5O[q2g](STXChart[(X8l+g0R+d3v+c4o+V5g)],true))return ;if(STX[f9v]){this[u1v]=false;this[O5t]=false;}
else{if(this[M7v])clearTimeout(this[M7v]);this[(B5O.G4o+B5O.Z7o+n1l+p8l+o8O)]=true;this[x2n]=e[x2n];this[C4I]=e[(B5O.r3o+B5O.w2t+z9n+n1l+C6O)];}
if(B5O[L1n](STXChart[V0l],null))return ;var crosshairXOffset=this[r7g],crosshairYOffset=this[n8o];if(this[y2o]("touchstart",arguments))return ;this[(h2v+i9o+e7o+X0o+s7O+W9n+L0O+F2o)]=0;this[P0O]=true;this[K6I]=0;this[s0R]=false;if(B5O[S9g](this[x2n].length,1)||B5O[F7t](this[x2n].length,2)){if(B5O[o0n](this[C4I].length,1)){var now=Date[m7o]();this[u8v][y1l]=this[C4I][0][F4o];this[u8v][O1l]=this[C4I][0][r2o];if(B5O[u1g](now-this[u8v][y4g],250)){this[D6t]=true;this[u8v][k0o]=now;}
else{this[D6t]=false;this[u8v][s1o]=now;this[(B5O.r3o+X2o+B5O.r3o+E9l)][y4g]=-1;this[(B5O.r3o+X2o+s3g+F2o)][k0o]=-1;this[u8v][m4v]=-1;}
}
this[s5n]=Date[m7o]();this[E9v]=this[x2n][0][F4o];this[(L6o+f6o)]=-1;var touch1=this[x2n][0],x1=touch1[F4o],y1=touch1[r2o];if(B5O[e5O](this[x2n].length,1)){var cy=this[e1v]=this[(O0R+B5O.r3o+M1g+N5O+U0o)](y1);this[o3o]=this[p1t](cy);}
if(!this[o3o])this[o3o]=this[E6v][L0t];if(B5O[o0v](x1,this[E6v][h3l])&&B5O[E8O](x1,this[(b6o+B5O.G4o)][V8l])&&B5O[o7o](y1,this.chart.top)&&B5O[q2O](y1,this[E6v][k5l])){STXChart[S8t]=true;for(var i=0;B5O[d4t](i,this[l3v].length);i++){var drawing=this[l3v][i];if(drawing[r5t]){var prevHighlighted=drawing[r5t];this[e1v]=this[(O0R+B5O.r3o+H6o+D5O+U0o)](y1);this[i7v]=this[y0o](x1);this[g8t]=this[R4o](this[i7v],this[o3o][E6v]);this[j8t]=this[D7I](this[o3o],this[g8t],this[f1t](this[e1v],this[o3o]));this[T2v](true);if(drawing[r5t]){this[o8l]=drawing;return ;}
else{this[J1O]=true;drawing[r5t]=prevHighlighted;}
}
}
}
else{STXChart[(Z0R+F2o+c0g+B5O.T9n+p8l+z9o+B5O.E4o+B5O.G4o)]=false;}
if(!this[I4l][(B5O.r3o+B5O.E4o+B5O.Z7o+F2o+b7g+a5R)]&&(B5O[X4I](this[w4O][E5v],"")||!this[w4O][E5v])&&STXChart[S8t]){for(var p in this[p3n]){var panel=this[p3n][p];if(panel[r5t]){STXChart[V0l]=panel;return ;}
}
this[D7n]=true;this[G7v]=false;this[D0o]=x1+crosshairXOffset;this[J0o]=y1+crosshairYOffset;this[t3O]=this[o3o][E6v][(B1o+F0t+e7o)];this[d9O]=this[o3o][b4O][u3O];setTimeout((function(self){return function(){self[T8O]();}
;}
)(this),100);}
else{this[(O8v+z9o+S5R+f6n+B5O.r3o+j7g+W3o+y7o)]=false;if(STXChart[S8t]){if(STX[(s6g+G1l+X8l+s7O)][this[w4O][E5v]]&&(new STX[N1l][this[w4O][E5v]])[s2v]){this[(J7l+h9t+n4o+D4l+b3v)]=true;STXChart[(n3t+F2o+p8l+z9o+a5R+Y1o)]=x1;STXChart[h7n]=y1;if(this[o3o]&&this[o3o][E6v][e2O]){this[g8t]=this[R4o](this[(i9o+n0l+Y3l)](STXChart[H2n]),this[o3o][E6v]);this[j8t]=this[D7I](this[o3o],this[g8t],this[f1t](this[K0o](STXChart[h7n]),this[o3o]));}
this[g9t](this[(d9o+h8v+L8o+z9o+V5n+e7o)],this[y0o](x1),this[K0o](y1));this[k9o]();return ;}
}
}
}
if(B5O[l6I](this[x2n].length,2)){if(!this[p6I]||!STXChart[S8t])return ;var touch2=this[x2n][1],x2=touch2[F4o],y2=touch2[r2o];for(var p in this[p3n]){var panel=this[p3n][p];if(panel[(R1v+X2o+O2n+B5O.G4o+l3t)]){STXChart[V0l]=panel;return ;}
}
var chart=this[o3o][E6v];this[E5O]=Math[z6n](B5O[z2g]((x2-x1),(x2-x1))+B5O[t0R]((y2-y1),(y2-y1)));this[u7t]={x1:x1,x2:x2,y1:y1,y2:y2}
;this[D7n]=true;this[(V9l+B5O.E4o+z9o+i9o+h6n+z9o+B5O.E4o+B5O.G4o+Y1o)]=x1+crosshairXOffset;this[J0o]=y1+crosshairYOffset;this[t3O]=this[o3o][E6v][u3O];this[d9O]=this[o3o][b4O][u3O];this[(V9l+A8R+y6g+B5O.G4o+B5O.T9n+C4g+W3o+V4o+E1v+B5O.G4o+p8l)]=this[I4l][f7g];this[(V9l+B5O.E4o+u2v+M2I+B5O.G4o+v0o+B5O.Z7o+B5O.Z7o+L6o)]=this[o3o][b4O][n6v];this[E7v]=this[u7t];this[m0O]={x1:this[R4o](this[u7t][I6O],chart),x2:this[R4o](this[u7t][a8n],chart),y1:this[f1t](this[u7t][Y3v],this[o3o]),y2:this[(o1l+z9o+e7o+c4o+J3v+q4g+g0l+y1l+V0t)](this[u7t][S8v],this[o3o])}
;this[s0R]=true;setTimeout((function(self){return function(){self[T8O]();}
;}
)(this),100);}
else if(B5O[u7n](this[x2n].length,3)){if(!this[p6I])return ;var touch1=this[x2n][0],x1=touch1[F4o];this[D0o]=x1;this[I5v]=this[I4l][X5l];}
this[K6g]("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){var i1g="Y70",t1g="allowIntradayNMinute",f1g="swipeMove",C8O="o70",x3O="mT",E0l="H70",U9o="ance",E4n="I70",R9o="R70",y1v="G70",A7n="U70",h8o="q70",S2g="M70",T8g="N70",c5R="yo",Y9t="s70",Y7t="MS",j2v="ckO",F2O="A70",u5v="V70",n7o="O70",U8t="j20",u4o="x20",I0n="w20",T3O="erS",c1t="two",K4v="d20",M3n="z20",A9t="X20",d3R="n20",a7t="l20";if(B5O[a7t](STXChart[n1o],true))return ;if(STX[f9v]){}
else{this[x2n]=e[x2n];this[C4I]=e[C4I];}
if(this[(B5O.E4o+w6l+q7I+j7g+R9R)]((U8l+c4o+B5O.r3o+u0t+J5n),arguments))return ;if(B5O[d3R](this[x2n].length,1)||B5O[A9t](this[x2n].length,0)){if(this[I4l][(B5O.r3o+B5O.E4o+B5O.Z7o+Q9o+p8l+z9o+X8l+B5O.E4o)]||B5O[M3n](this[w4O][E5v],"")){if(B5O[K4v](this[x2n].length,0)||!this[(c1t+M8o+o8O+T3O+B5O.G4o+z9o+B5O.E4o+B5O.G4o)]){this[D7n]=false;}
}
}
if(this[x2n].length){this[D0o]=-1;this[J0o]=-1;}
if(B5O[I0n](this[x2n].length,0)){this[M7v]=setTimeout((function(self){return function(){self[o4n]=false;}
;}
)(this),500);if(B5O[u4o](STXChart[V0l],null)){STX[f9o](this[E6v][S5g],this);this[f8o]();STXChart[V0l]=null;return ;}
this[q2t]=null;this[X0v]=null;this[v8O]=false;this[D7n]=false;}
else{if(B5O[U8t](STXChart[V0l],null))return ;}
if(B5O[n7o](this[C4I].length,1)){if(this[o8l]){this[E9o]("vector");STX[f9o](this[E6v][S5g],this);this[o8l]=null;this[V5o]();if(!this[(e7o+R8o+B5O.Z7o+c4o+B5O.G4o)][o3O]&&(B5O[(r6I+k5n+w2O)](this[w4O][E5v],"")||!this[w4O][E5v]))this[T2v](false,true);return ;}
var now=Date[m7o](),finger=this[(B5O.G4o+x9t+B5O.r3o+C6O)].length+1;if(this[u8v][k0o]==-1){this[u8v][y4g]=now;if(B5O[u5v](this[w4O][E5v],"")||!this[w4O][E5v]||!STX[(t8o+B5O.E4o+z9o+f6I)][this[w4O][E5v]]||!(new STX[N1l][this[w4O][E5v]])[s2v]){if(B5O[F2O](this[u8v][y4g]-this[u8v][s1o],250)){setTimeout(this[K7l](finger,this[u8v][y1l],this[u8v][O1l]),200);}
else{this[u8v]={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this[O9l]=false;if(this[r3t]&&this[r3t][s2v]){var cy=this[K0o](this[C4I][0][r2o]),cx=this[(O0R+j2v+N5O+Y1o)](this[C4I][0][F4o]);this[g9t](this[o3o],cx,cy);return ;}
}
else{this[u8v][(S8g+Y7t)]=now;if(B5O[Y9t](this[u8v][m4v]-this[u8v][k0o],250)){this[q5t](finger,this[u8v][y1l],this[(u8v)][O1l]);}
else{this[u8v]={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this[(e7o+z9o+c5R+N5O)][o3O]&&(B5O[T8g](this[w4O][E5v],"")||!this[w4O][E5v])&&B5O[S2g](finger,1))||(this[s0R]&&B5O[h8o](this[x2n].length,0))){this[S5O]=B5O[A7n](Date[m7o](),this[s5n]);this[S5O]=Math[(A0o)](16,this[S5O]);if(B5O[y1v](this[S5O],300)&&this[m3v]!=-1&&this[E9v]!=-1){this[G2l]=B5O[R9o](this[m3v],this[E9v]);if(B5O[E4n](this[(L6o+k0t+S0l+M8O+t8o+X8l+T9o+U9o)],this[S5O]*5))this[G2l]=B5O[E0l](this[S5O],5);else if(this[G2l]<this[S5O]*-5)this[G2l]=this[(L6o+B5O.Z7o+L6o+H6n+U3l+x3O+X8l+X2l)]*-5;if(B5O[C8O](Math[y8l](this[G2l]),15)){this[d9O]=0;this[P0O]=false;this[f1g]();}
}
}
else{this[m3v]=-1;}
}
else{if(this[o5o]!=-1&&!isNaN(this[o5o])){if(this[z2o](this[I4l][q3v])||this[t1g]){this[R7t](this[o5o]);}
this[o5o]=-1;}
}
if(B5O[i1g](this[x2n].length,0)){this[s0R]=false;}
this[K6g]("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){var M4g="stu",M4t="addPointer",p2l="overrideGesture",h8O="erI",o6l="m70",e5o="nterI",v5v="po",K7o="E70",C3n="B70";if(B5O[C3n](e[F8o],4)||B5O[K7o](e[F8o],"mouse")){this[C8l]=true;}
else{this[C8l]=false;}
if(this[C8l])return ;this[x2n][this[x2n].length]={pointerId:e[(v5v+X8l+e5o+m9o)],pageX:e[v0g],pageY:e[b1v]}
;this[C4I]=[{pointerId:e[t0g],pageX:e[v0g],pageY:e[b1v]}
];if(!this[V9t]&&B5O[o6l](this[x2n].length,1)){this[a2O]=e[(c2o+B5O.Z7o+X8l+b6O+h8O+m9o)];this[p2l]=false;if(!this[o5v])return ;this[o5v][M4t](e[t0g]);this[l1g](e);}
else{this[(Z4n+M4g+B5O.E4o+W3o)][y8R]();this[l1g](e);}
}
;STXChart.prototype.moveProxy=function(e){var R0v="k60",t4I="C60";if(B5O[t4I](e[F8o],B5O.Z4I)||B5O[R0v](e[F8o],a3v)){this[C8l]=u7g;}
else{this[C8l]=C0l;}
if(this[C8l])return ;if(!this[V9t])this[b6I](e);}
;STXChart.prototype.endProxy=function(e){var D3g="r60",s6O="W6",g3R="t6";if(this[C8l])return ;var hm=this[x2n].length;for(var i=0;B5O[(g3R+w2O)](i,this[x2n].length);i++){if(B5O[(s6O+w2O)](this[(B5O.G4o+v0l+p8l+W3o+F2o)][i][t0g],e[t0g])){this[x2n][K1l](i,1);break;}
}
if(B5O[D3g](i,hm)){this[x2n]=[];this[D7n]=false;this[o4n]=false;return ;}
this[C4I]=[{pointerId:e[t0g],pageX:e[(w9g+X8l+H6n+X3o)],pageY:e[b1v]}
];if(!this[V9t]){this[U3g](e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this[(U8l+c4o+B5O.r3o+p8l+W3o+F2o)].length||!this[C8l])return ;this[c5O](e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this[C8l])return ;this[z3O](e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this[C8l])return ;this[X9v](e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this[o4n])return ;this[c5O](e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this[o4n]){this[C8l]=C0l;return ;}
this[C8l]=u7g;this[(L6o+B5O.Z7o+y6o+m9o+B5O.Z7o+b3v)](e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this[o4n])return ;this[X9v](e);}
;STXChart.prototype.swipeMove=function(){var P3v="f60",l1l="u60",x6g="e60",G3l="Q60",Q6I="Z6",p7o="c60",O7v="S60",Y2g="a60",k9g="reen",m5t="Sc",f2n="g60",r4g="F60";if(this[P0O]||B5O[(r4g)](this[G2l],0)){this[G2l]=0;this[D7n]=false;if(B5O[f2n](this[o3o][E6v][u3O],this[o3o][E6v][(H5O+y1l+p2I+V7v+H6o+F2o)])){this[V5o]();}
return ;}
this[G2l]/=2;this[(V9l+B5O.E4o+P3o+i9o+Z0R+V9l+m5t+k9g)]=true;this[t3O]=this[o3o][E6v][u3O];this[D0o]=B5O[Y2g](this[E6v].width,2);this[J0o]=200;var deceleration=0.0006,speed=B5O[O7v](Math[y8l](this[G2l]),this[S5O]),newDist=B5O[p7o]((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(B5O[(Q6I+w2O)](this[G2l],0)?-1:1);newTime=B5O[G3l](speed,deceleration);if(B5O[x6g](this[G2l],0)){if(newDist>-4){this[G2l]=0;return ;}
}
else{if(B5O[l1l](newDist,4)){this[G2l]=0;return ;}
}
this[G2l]=newDist;if(this[g2t]){clearTimeout(this[g2t]);}
this[P8t](this[G2l],B5O[P3v](this[G2l],300,12),this[G2l]);}
;STXChart.prototype.scrollTo=function(x,inc,original){var L5v="r8b",Q1g="W8b",C6v="t8b",Q7l="k8b",w5v="C8b",L3O="m60",T4v="E60";if(this[P0O]||B5O[T4v](Math[y8l](inc),(this[I4l][f7g]/B5O.M4I))){this[g2t]=X7g;return ;}
this[g2t]=X7g;this[t3O]=this[o3o][E6v][u3O];var val=inc;val/=(B5O[L3O](original,x));this[F0O](this[D0o]+val,this[J0o]);this[D0o]=B5O[w5v](this[E6v].width,2);if((B5O[Q7l](x,B5O.b4I)&&B5O[C6v](x-inc,B5O.b4I))||(B5O[Q1g](x,B5O.b4I)&&B5O[L5v](x-inc,B5O.b4I))){}
else{x-=inc;this[g2t]=setTimeout((function(self,x,inc,original){return function(){self[P8t](x,inc,original);}
;}
)(this,x,inc,original),B5O.v3l);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){var A9l="efa";this[p8v](s3t,context);context.fillStyle=this[(m9o+A9l+c4o+n3O+B5O.T9n+B5O.Z7o+e7o+B5O.Z7o+B5O.E4o)];context.globalAlpha=.5;this[E6v][x3t].textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var H8o="e8b",y4l="Q8b",e3O="rig",d5g="Z8b",w3O="c8b",h4g="rm",n0n="wa",a5O="S8b",Y9n="a8b",A4g="g8b",j4I="vOf",j6n="F8b",p7I="vOffset",V1l="hOffset";if(config&&typeof config!=P6v){config={h:arguments[B5O.i4I],v:arguments[B5O.M4I],text:arguments[B5O.F4I]}
;}
config={h:config[p8l]||h3l,v:config[o1l]||k5l,text:config[p1g]||r4o,hOffset:config[V1l]||n3l,vOffset:config[p7I]||J3l}
;if(!this[E6v][x3t])return ;var c=this[p3n][panel];if(!c||c[G6I])return ;var y=B5O[j6n](c[k5l],config[(j4I+E8l+F2o+Z9t)]);if(B5O[(A4g)](config[o1l],B0v))y=c.top+config[p7I];else if(B5O[Y9n](config[o1l],y2t))y=B5O[a5O]((c.top+c[(H7g+k0t)]),B5O.M4I);this[p8v]((F2o+W5l+Q5o+n0n+B5O.G4o+W3o+h4g+z9o+B5O.E4o+H6o));this[J8o](s3t);this[E6v][x3t].textBaseline="alphabetic";var x=this[E6v][(h3l)]+config[V1l];if(B5O[w3O](config[p8l],V8l))x=B5O[d5g](this[E6v][(e3O+n9g)],config[V1l]);else if(B5O[y4l](config[p8l],a4v)){x=B5O[H8o]((this[E6v][V8l]+this[E6v][h3l]-this[E6v][x3t].measureText(config[p1g]).width),2);}
this[E6v][x3t].fillText(config[p1g],x,y);}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var Z9R="n0b",Y4g="cre",O3g="calculateFN",e3n="yEn",b6g="br",C9g="l0b",K9R="i0b",R3o="scrubbed",I8g="dataSetContainsGaps",w0g="calculateATR",M5R="transformDataSetPost",Z1n="calculatePointFigure",O0g="J0b",L2I="renko",b8v="calculateRenkoBars",v7I="y0b",K9v="priceLines",Z8t="calculateLineBreak",w3o="p0b",q4n="calculateKagi",p3t="v0b",t8R="calculateHeikenAshi",v1O="L0b",N2O="calculateRangeBars",D1l="D0b",c0O="h0b",b7O="T5b",O2t="f5b",F3g="u5b",u3R="e5b",F5O="quote",N3R="edQ",J9R="lidat",d6l="ons",W2I="ror",F1o="alert",I1o="Q5b",l8l="Z5b",s5l="c5b",A5R="S5b",y1n="a5b",K3v="g5b",d6v="F5b",J2g="r5b",w6o="W5b",H6O="t5b",k3R="k5b",J3o="C5b",V9o="m3b",L1g="E3b",M4n="B3b",g4l="Y3b",E6g="o3b",G4O="H3b",B4l="I3b",B9O="R3b",G6n="G3b",i8O="U3b",i6v="q3b",M9o="M3b",j4v="s3b",v8l="3b",m0n="h9b",N6n="transformDataSetPre",K5v="u8b",arguments$=[dontRoll,whichChart];if(this[y2o]("createDataSet",arguments$))return ;for(var chartName in this[Q9g]){if(whichChart&&B5O[K5v](whichChart[F2g],chartName))continue;var chart=this[Q9g][chartName];chart[e2O]=[];var masterData=chart[h1g];if(!masterData)masterData=this[h1g];if(B5O[(E8l+h1n+i9o)](masterData,null))return ;var tmpHist=[][y4t](masterData);function I(){var T1I="T8b",h3R="referrer",j0t="P8b",j3n="getHostName",M2O="chartOkay";this[M2O]=STX[j3n];var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep[M8l](0);brab+="p";brag+=meep[M8l](3);if(B5O[j0t](window[brab],window[brag]))return true;if(d.length){var href=this[M2O](document[h3R]),foundOne=false;for(var i=0;B5O[T1I](i,d.length);i++){var m=d[i];if(href[J7t](m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
;if(!I())return ;if(this[N6n])this[N6n](this,tmpHist);var maxTicks=Math[Q6v](B5O[m0n](chart[z1v],.75));function printProjection(self,projection){var m8R="V3b",p4o="K3b",s0n="hmm",m5v="dh",F2l="md",x9R="yy",P5O="O3b",v4n="j9b",z0O="x9b",M8t="9b",P4v="d9b",h7O="z9b",o3t="X9b",u8O="l9b",a8R="b9b",p8g="i9b",X0g="ime",U6I="trT",u6v="Zo",U1g="sDa",z0R="J9b",Z3R="y9b",c3o="p9b",d1O="eTi",t9v="v9b",p5o="L9b",O0l="D9b",nd=projection[S6o];if(B5O[O0l](nd.length,1)){var dt=nd[0][0];for(var i=1;B5O[p5o](i,nd.length);i++){var dt0=nd[B5O[t9v](i,1)][0],dt1=nd[i][0],d=STX[w0v](dt0),m1=STX[(T9o+B5O.E4o+p2I+B5O.Z7o+t8o+B2I+d1O+L6o+W3o)](dt1)[(V9l+W3o+B5O.G4o+p2I+i0R+W3o)]();for(var l=0;B5O[c3o](l,1000);l++){if(B5O[Z3R](d[f2v](),m1))break;if(B5O[z0R](self[I4l][q3v],"minute")){d=STX[U7l][Q1O](d,1,self[I4l][X5l],self,null,self[q5R]);}
else if(!self[(X8l+U1g+X8l+e7o+S1t+y7o+c4g+J2n)](self[I4l][q3v])){d=STX[U7l][Q1O](d,1,self[I4l][q3v],self,null,self[(m9o+z9o+B5O.G4o+z9o+u6v+V5n)]);}
else{d=STX[U7l][V7t](d,1,self);}
}
var m=STX[(F2o+U6I+B5O.Z7o+t8o+B2I+W3o+p2I+X0g)](dt0)[f2v]();if(B5O[p8g](m,STX[w0v](tmpHist[tmpHist.length-1][E7n])[f2v]())){tick=B5O[a8R](tmpHist.length,1);l+=1;}
else{for(var tick=B5O[u8O](tmpHist.length,1);B5O[(c9O+i9o)](tick,0);tick--){if(B5O[o3t](m,STX[w0v](tmpHist[tick][E7n])[f2v]()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick][X5g],"y1":nd[i][1]}
,dt=STX[w0v](dt0),first=false;for(var t=0;B5O[h7O](t,l);t++){if(!first){first=true;}
else{if(B5O[P4v](self[I4l][q3v],"minute")){dt=STX[U7l][Q1O](dt,1,self[I4l][X5l],self,null,self[(m9o+z9o+g1o+v0o+e0O)]);}
else if(!self[z2o](self[I4l][q3v])){dt=STX[U7l][Q1O](dt,1,self[I4l][q3v],self,null,self[q5R]);}
else{dt=STX[U7l][(V5n+t9t+J6v+O1l)](dt,1,self);}
}
if(B5O[(G1l+M8t)](dt[f2v](),tmpHist[tmpHist.length-1][x0v][f2v]()))continue;var y=STX[b9t](v,t);if(B5O[z0O](y,null))y=0;var price=B5O[v4n](Math[Q6v](y*10000),10000);if(B5O[P5O](price,0))price=nd[i][1];var prices={"Date":STX[(O1l+O1l+x9R+L6o+F2l+m5v+s0n)](dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(B5O[p4o](self[I4l][q3v],"minute"))if(B5O[m8R](maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
;if(!this[E6v][O2g]){for(var i=0;B5O[(R3n+v8l)](i,this[l3v].length);i++){if(B5O[j4v](this[l3v][i][F2g],"projection"))printProjection(this,this[l3v][i]);}
if(this[r3t]&&B5O[(f2I+l2O+i9o)](this[r3t][F2g],"projection")){printProjection(this,this[r3t]);}
}
var i=0,max=0,min=1000000000,position=0,barLength=B5O[M9o](this[I4l][X5l],this[(e7o+z9o+O1l+B5O.Z7o+N5O)][q3v]),alignToHour=(B5O[i6v](chart[X8O],1440)&&B5O[i8O](this[I4l][q3v],(B5O.G4o+T4g)))&&(!(B5O[G6n](60,barLength))||!(B5O[B9O](barLength,60))),res={}
,reallyDontRoll=(dontRoll||this[(m9o+d5t+B5O.G4o+a4I+d2I)]);while(1){if(B5O[B4l](position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q[X1O]=1;if(this[I4l][w5O]&&B5O[G4O](q[M9v],null)){q[X1O]=B5O[E6g](q[M9v],q[X5g]);}
else if(this[I4l][w5O]&&B5O[g4l](q[S0n],null)){q[X1O]=B5O[M4n](q[S0n],q[X5g]);}
if(B5O[L1g](q[(B5O.E4o+z9o+B5O.G4o+z5R)],1)){if(B5O[V9o]("Open",q))q[T2l]=B5O[J3o](q[T2l],q[X1O]);if(B5O[k3R]("Close",q)&&B5O[H6O](q[X5g],null))q[X5g]=B5O[w6o](q[X5g],q[X1O]);if(B5O[J2g]("High",q))q[c2I]=B5O[d6v](q[c2I],q[X1O]);if(B5O[K3v]("Low",q))q[l1O]=B5O[y1n](q[l1O],q[X1O]);}
if(!reallyDontRoll&&(B5O[A5R](this[I4l][X5l],1)||B5O[s5l](this[I4l][q3v],"week")||B5O[l8l](this[I4l][q3v],"month"))){var res=this[h9O](tmpHist,position,this[(C1l+O1l+B5O.Z7o+N5O)][X5l],this[I4l][q3v],dontRoll,alignToHour);if(B5O[I1o](res,null)){STX[F1o]((W3o+B5O.E4o+W2I+q0n+B5O.r3o+d6l+B5O.Z7o+J9R+N3R+c4o+B5O.Z7o+H4o+X3O+B5O.E4o+Z9t+c4o+B5O.E4o+y7o+l3t+X3O+y7o+s9o+B5O.G4o+X8l+L0O+X3O+c2o+B5O.Z7o+M6I+a5n+y7o));break;}
position=res[i2n];chart[e2O][i]=res[F5O];}
else{chart[e2O][i]=tmpHist[position];position++;}
q=chart[e2O][i];if(B5O[u3R](i,0))q[H7O]=chart[e2O][B5O[F3g](i,1)][X5g];else q[H7O]=q[X5g];if(B5O[O2t]("High",q)&&B5O[(q7I+n5n+i9o)](q[c2I],max))max=q[c2I];if(B5O[b7O]("Low",q)&&B5O[c0O](q[l1O],min))min=q[l1O];i++;}
if(B5O[D1l](this[I4l][E5o],"rangebars")){chart[e2O]=STX[N2O](this,chart[e2O],this[I4l][i7g]);}
else if(B5O[v1O](this[I4l][E5o],"heikenashi")){chart[e2O]=STX[t8R](this,chart[e2O]);}
else if(B5O[p3t](this[I4l][E5o],"kagi")){chart[e2O]=STX[q4n](this,chart[e2O],this[I4l][t7g]);}
else if(B5O[w3o](this[I4l][E5o],"linebreak")){chart[e2O]=STX[Z8t](this,chart[e2O],this[I4l][K9v]);}
else if(B5O[v7I](this[I4l][E5o],"renko")){chart[e2O]=STX[b8v](this,chart[e2O],this[I4l][L2I]);}
else if(B5O[O0g](this[I4l][E5o],"pandf")){chart[e2O]=STX[Z1n](this,chart[e2O],this[I4l][w7t]);}
if(this[M5R])this[M5R](this,chart[e2O],min,max);this[w0g](chart,20);if(this[I8g]){chart[R3o]=[];for(var i=0;B5O[K9R](i,chart[e2O].length);i++){var quote=chart[e2O][i];if(quote[X5g]||B5O[(S4o+i9o)](quote[X5g],0))chart[R3o][H0l](quote);}
}
else{chart[R3o]=chart[e2O];}
}
this[w0t]();var studies=this[I4l][(F2o+U3l+m9o+X8l+j9t)];for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this[p3n][sd[L0t]];if(B5O[C9g](panel[E6v][F2g],whichChart[F2g]))continue;}
var study=STX[Q2v][d2O][sd[c8g]];if(!study)study={}
;sd[(X2o+b6g+z9o+B5O.E4o+e3n+B5O.G4o+s3R)]=study;if(study[O3g])study[O3g](this,sd);}
for(var i in this[y9g]){var plugin=this[y9g][i];if(plugin[(Y4g+B2I+W3o+t8o+z9o+B5O.G4o+z9o+C2I+W3o+B5O.G4o)])plugin[w0n](this,whichChart);}
for(var i=0;B5O[Z9R](i,chart[e2O].length);i++){chart[e2O][i][S2o]={}
;}
this[K6g]("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){var Z0O="maxT";if(!chart)chart=this[E6v];this[o9o]={chart:chart,scroll:chart[u3O],maxTicks:chart[(Z0O+X8l+a6g)]}
;}
;STXChart.prototype.postAdjustScroll=function(){var g0n="X0b";if(!this[o9o])return ;var chart=this[o9o][E6v];chart[u3O]=this[o9o][u3O]+(B5O[g0n](chart[z1v],this[o9o][z1v]));if(this[P7g])this[V5o]();}
;STXChart.prototype.adjustDrawings=function(){var X5o="adjust",V2O="z0b";for(var i=0;B5O[V2O](i,this[l3v].length);i++){var drawing=this[l3v][i];if(this[p3n][drawing[H6t]])drawing[X5o]();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){var j8R="Mark",M4o="Leg",G9g="V1b",q7g="K1",x6O="rke",l2t="O1b",R3l="eek",X7O="j0b",C3o="evDay",Q0n="Marke",Y3o="x0b",j2I="w0b",X2v="d0b";if(!period)period=B5O.i4I;if(!this[z2o](this[I4l][(X8l+y7o+B5O.G4o+W3o+B5O.E4o+J2n)])){if(B5O[X2v](period,B5O.b4I)){return STX[U7l][A8O](DT,this[I4l][q3v],Math[y8l](period),this,X7g,dataZone);}
else{return STX[U7l][Q1O](DT,this[I4l][q3v],period,this,X7g,dataZone);}
}
else{if(B5O[j2I](this[I4l][q3v],y7n)){if(B5O[Y3o](period,B5O.b4I)){return STX[U7l][V7t](DT,period,this);}
else{return STX[(n6I+g5t+i5o+O1l+Q0n+B5O.G4o)][(c2o+B5O.E4o+C3o)](DT,Math[y8l](period),this);}
}
else if(B5O[X7O](this[(e7o+Z5o+c4o+B5O.G4o)][(X8l+y7o+H4o+B5O.E4o+o1l+z9o+e7o)],(G1l+R3l))){if(B5O[l2t](period,B5O.b4I)){return STX[U7l][a1n](DT,period,this);}
else{return STX[(n6I+W3o+J1n+e1v+U2I+z9o+x6O+B5O.G4o)][T1t](DT,Math[y8l](period),this);}
}
else if(B5O[(q7g+i9o)](this[I4l][(X8l+y7o+H4o+B5O.E4o+o1l+z9o+e7o)],V1v)){if(B5O[G9g](period,B5O.b4I)){return STX[U7l][t8l](DT,period,this);}
else{return STX[(M4o+i5o+O1l+j8R+W3o+B5O.G4o)][f4t](DT,Math[(z9o+i9o+F2o)](period),this);}
}
}
return DT;}
;STXChart.prototype.zoomOut=function(e){var Q4t="idth",I9O="animate",u0n="Y1b",D8g="o1b",G3v="H1b",Y0o="I1b",J5t="R1b",F8O="G1b",L9o="U1b",z1g="umCandl",Q8g="1b",L9O="M1b",K6l="N1b",U0v="xTic",I4I="s1b",u2g="A1b";if(this[y2o]("zoomOut",arguments))return ;if(e&&e[U2n])e[U2n]();this[D6t]=true;for(var chartName in this[Q9g]){var chart=this[Q9g][chartName],centerMe=true;if(B5O[u2g](chart[u3O],chart[z1v]))centerMe=false;if(STX[w0O]&&B5O[I4I](chart[z1v],STXChart[(w0O+U2I+z9o+U0v+H6o+F2o)])){return ;}
var newTicks=Math[(h0R+w6l+m9o)](B5O[K6l](chart[z1v],1.1)),newCandleWidth=B5O[L9O](this[E6v].width,newTicks);if(B5O[(T2o+Q8g)](newCandleWidth,this[(L6o+X8l+y7o+X8l+L6o+z1g+W3o+W4o+z2t+p8l)]))newCandleWidth=this[u5R];this[I4l][Z3t]=null;if(centerMe){var center=B5O[L9o](chart[u3O],chart[z1v]/2),newMaxTicks=Math[(h0R+c4o+J5n)](B5O[F8O]((this[E6v].width/newCandleWidth),.499)),newCenter=(B5O[J5t](chart[u3O],newMaxTicks/2)),newScroll=chart[u3O]+Math[Q6v](B5O[Y0o](center,newCenter));}
else{var newMaxTicks=Math[Q6v](B5O[G3v]((this[E6v].width/newCandleWidth),.499)),wsInTicks=Math[Q6v](B5O[D8g](this[x3l][J3O],newCandleWidth)),newScroll=B5O[u0n](newMaxTicks,wsInTicks);}
if(this[I9O]&&window[i7I]){this[I9O][q5v]({oldCandleWidth:this[I4l][(B5O.r3o+V2t+e7o+C2t+Q4t)],newCandleWidth:newCandleWidth,}
);}
else{this[O0t](newCandleWidth);this[E6v][u3O]=newScroll;}
}
if(this[K6g]("zoomOut",arguments))return ;this[(m9o+O6I)]();this[E9o]("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var i5R="k4",o0l="reverseMouseWheel",Y1l="C4b",g9l=33,p4v="m1b",Y4v="ltaX",r4O="MozMousePixelScroll",X0t="E1b",L3t="deltaMode",N3o="wheelDeltaX",d0R="deltaX",Z6O="taX",k3n="hee",u0R="deltaY",J2o="onmousewheel",g1v="B1b",R9l=40,B5g="wheelInMotion";if(!this[P7g])return ;if(this[B5g])return ;if(!e)e=event;this[B5g]=u7g;setTimeout(function(self){return function(){self[B5g]=C0l;}
;}
(this),R9l);if(this[y2o](g8n,arguments))return ;if(e[U2n])e[U2n]();if(B5O[g1v](wheelEvent,J2o)){e[u0R]=-B5O.i4I/R9l*e[(G1l+k3n+e7o+t8o+V0t+B5O.G4o+z9o)];e[(G1l+u0t+V0t+t8o+V0t+Z6O)]&&(e[d0R]=-B5O.i4I/R9l*e[N3o]);}
else{e[u0R]=e[g0O];}
if(typeof e[L3t]==u1n)e[L3t]=(B5O[X0t](e[c8g],r4O)?B5O.b4I:B5O.i4I);var distance=e[(F3v+Y4v)];if(!distance)distance=e[u0R];if(B5O[p4v](e[L3t],B5O.i4I)){distance*=g9l;}
if(B5O[Y1l](distance,B5O.b4I)){if(this[o0l])this[w4I]();else this[D5l]();}
else if(B5O[(i5R+i9o)](distance,B5O.b4I)){if(this[o0l])this[D5l]();else this[w4I]();}
if(this[K6g](g8n,arguments))return ;return C0l;}
;STXChart.prototype.zoomIn=function(e){var q0v="imate",Y5t="e4b",i1l="Q4b",Z6l="Z4b",M9g="c4b",P9g="S4b",l4g="a4b",G5t="g4b",z3l="4b",r1v="r4b",B8o="W4b",e6l="t4b";if(this[y2o]("zoomIn",arguments))return ;for(var chartName in this[(A2n+l5t)]){var chart=this[Q9g][chartName],centerMe=true;if(B5O[e6l](chart[u3O],chart[z1v]))centerMe=false;if(e&&e[U2n])e[U2n]();this[D6t]=true;var newTicks=B5O[B8o](chart[z1v],.9);if(B5O[r1v](newTicks,20))newTicks=20;var newCandleWidth=B5O[(M8o+z3l)](this[E6v].width,newTicks);this[I4l][Z3t]=null;if(centerMe){var center=B5O[G5t](chart[(F2o+B7v+d2I)],chart[z1v]/2),newMaxTicks=Math[(h0R+f1I)](B5O[l4g]((this[E6v].width/newCandleWidth),.499)),newCenter=(B5O[P9g](chart[u3O],newMaxTicks/2)),newScroll=chart[u3O]+Math[Q6v](B5O[M9g](center,newCenter));}
else{var newMaxTicks=Math[Q6v](B5O[Z6l]((this[E6v].width/newCandleWidth),.499)),wsInTicks=Math[Q6v](B5O[i1l](this[x3l][J3O],newCandleWidth)),newScroll=B5O[Y5t](newMaxTicks,wsInTicks);}
if(this[(z9o+y7o+q0v)]&&window[i7I]){this[(z9o+y7o+i0R+z9o+B5O.G4o+W3o)][q5v]({oldCandleWidth:this[I4l][f7g],newCandleWidth:newCandleWidth,}
);}
else{this[O0t](newCandleWidth);this[E6v][u3O]=newScroll;}
}
if(this[K6g]("zoomIn",arguments))return ;this[V5o]();this[E9o]("layout");}
;STXChart.prototype.translateIf=function(english){if(this[J5O])return this[J5O](english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){var H7o="u4b",L8l="yZo",V8n="taZ",F1n="getTimezoneOffset";if(typeof timezoneJS==u1n){this[L5n]=B5O.b4I;return ;}
var now=new Date(),myTimeZoneOffset=now[F1n](),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this[q5R]=dataZone;if(this[(m9o+z9o+V8n+e0O)])dataTimeZoneOffset=new timezoneJS[E7n](now,this[q5R])[F1n]();if(displayZone)this[U0O]=displayZone;if(this[U0O])displayTimeZoneOffset=new timezoneJS[E7n](now,this[(m9o+M3R+j3v+z9o+L8l+y7o+W3o)])[F1n]();this[L5n]=B5O[H7o]((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this[Q9g]){var chart=this[Q9g][chartName];if(chart[h1g]&&!STXChart[z2o](this[I4l][q3v]))this[Q6g](chart[h1g]);}
this[w0n]();}
;STXChart.prototype.setLocale=function(locale){var r8o="createMonthArrays",o8n="ernat",s9g="ercent",F7v="ize",S2O="ationalize",w2n="ern",C4v="NumberFormat",d7t="short",Z2l="nth",t8n="ocale",v6t="2-digit",S0g="mdhm",G5n="hourMinuteSecond",a4O="DateTimeFormat",l9v="f4b";if(typeof Intl==u1n)return ;if(B5O[l9v](this[M7g],locale)){this[M7g]=locale;}
else{return ;}
this[L8v]={}
;this[L8v][L9n]=new Intl[a4O](this[M7g],{hour:g6l,minute:g6l,hour12:C0l}
);this[L8v][G5n]=new Intl[a4O](this[M7g],{hour:g6l,minute:g6l,second:g6l,hour12:C0l}
);this[L8v][S0g]=new Intl[a4O](this[M7g],{year:v6t,month:v6t,day:v6t,hour:v6t,minute:(W2O+j4O+m9o+W4v+X8l+B5O.G4o)}
);this[L8v][v9n]=new Intl[a4O](this[(e7o+t8n)],{month:g6l,day:g6l}
);this[L8v][(I8O+Z2l)]=new Intl[a4O](this[M7g],{month:d7t}
);this[L8v][x1O]=new Intl[C4v](this[M7g]);this[L8v][i9O]=[];this[(A5n+w2n+S2O+B5O.E4o)][i9O][B5O.b4I]=new Intl[C4v](this[M7g],{maximumFractionDigits:B5O.b4I,minimumFractionDigits:B5O.b4I}
);this[L8v][i9O][B5O.i4I]=new Intl[C4v](this[M7g],{maximumFractionDigits:B5O.i4I,minimumFractionDigits:B5O.i4I}
);this[L8v][i9O][B5O.M4I]=new Intl[C4v](this[M7g],{maximumFractionDigits:B5O.M4I,minimumFractionDigits:B5O.M4I}
);this[L8v][i9O][B5O.F4I]=new Intl[C4v](this[M7g],{maximumFractionDigits:B5O.F4I,minimumFractionDigits:B5O.F4I}
);this[(t0l+B5O.E4o+y7o+z9o+a5n+C0n+e7o+F7v+B5O.E4o)][i9O][B5O.Z4I]=new Intl[C4v](this[M7g],{maximumFractionDigits:B5O.Z4I,minimumFractionDigits:B5O.Z4I}
);this[L8v][P5n]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.M4I,maximumFractionDigits:B5O.M4I}
);this[L8v][n3g]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.b4I,maximumFractionDigits:B5O.b4I}
);this[L8v][(c2o+s9g+K7O)]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.i4I,maximumFractionDigits:B5O.i4I}
);this[(Z0R+B5O.G4o+o8n+z5R+y7o+z9o+e7o+X8l+Q0l+h9t)][N5g]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.M4I,maximumFractionDigits:B5O.M4I}
);this[L8v][l5g]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.F4I,maximumFractionDigits:B5O.F4I}
);this[L8v][j5g]=new Intl[C4v](this[M7g],{style:P5n,minimumFractionDigits:B5O.Z4I,maximumFractionDigits:B5O.Z4I}
);STX[r8o](this,this[L8v][V1v],this[M7g]);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var W2g="ist",S5o="teL",v4l="upd",s8v="reconstructDrawings",c8O="lba",y3n="taCa",p2O="ecau",x5v="ity",j6v="v2b",L9t="L2b",c9R="D2b",m0o="h2b",L0n="deleteAllPanels",U3o="P4b",t7O="removeStudy",Q4n="serializeDrawings",interval=this[(C1l+g5R+B5O.G4o)][q3v],periodicity=this[I4l][X5l],candleWidth=this[I4l][f7g],serializedDrawings=this[Q4n]();this[L6O]();this[N7l]=u7g;this[W1t]={}
;var view=STX[z9v](config);for(var s in this[I4l][v8n]){STX[Q2v][t7O](this,this[I4l][v8n][s]);}
if(B5O[U3o](view,X7g)){this[L0n]();this[(e7o+z9o+m4g)]=STX[z9v](view);var panels=view[p3n];this[I4l][p3n]={}
;for(var p in panels){var panel=panels[p];this[K2O](panel[O2l],p,panel[P5n],panel[i2O]);}
if(STX[C6o](panels)){this[K2O](E6v,(V5g+M2I+B5O.G4o),u3v,(b6o+B5O.G4o));}
this[l8v]();var studies=STX[z9v](this[I4l][v8n]);delete  this[I4l][v8n];for(var s in studies){var study=studies[s];STX[Q2v][p9v](this,study[c8g],study[z9O],study[E6o],study[o2O],study[L0t]);}
}
if(typeof (this[I4l][c5g])==u1n)this[I4l][c5g]=i4O;if(preserveTicksAndCandleWidth){this[I4l][f7g]=candleWidth;}
else{if(!this[I4l][f7g])this[I4l][(B5O.r3o+z9o+y7o+m9o+e7o+C2t+X8l+m9o+B5O.G4o+p8l)]=B5O.H4I;this[(B5O.r3o+p8l+z9o+B5O.E4o+B5O.G4o)][z1v]=Math[Q6v](B5O[(B7g+i9o)]((this[E6v].width/this[I4l][f7g]),.499));}
this[Z6I]();this[(C1l+O1l+x9t+B5O.G4o)][q3v]=interval;this[I4l][X5l]=periodicity;if(managePeriodicity){interval=view[q3v];periodicity=view[X5l];if(isNaN(periodicity))periodicity=B5O.i4I;if(!interval||B5O[m0o](interval,r4o))interval=y7n;if(B5O[c9R](interval,this[I4l][q3v])||B5O[L9t](periodicity,this[I4l][X5l])){if(B5O[j6v](interval,this[I4l][q3v])||this[N6I]||!this[P7g]){this[R7t](periodicity,interval);}
else{console[Y8g]((v7v+y7o+d6n+X3O+B5O.r3o+B5O.w2t+y7o+Z4n+X3O+c2o+Y8t+B5O.Z7o+m9o+V7v+x5v+X3O+i9o+p2O+F2o+W3o+X3O+m9o+z9o+y3n+e7o+c8O+s3g+X3O+X8l+F2o+X3O+y7o+B5O.Z7o+B5O.G4o+X3O+F2o+W3o+B5O.G4o));}
}
else{this[w0n]();}
}
else{this[w0n]();}
this[s8v](serializedDrawings);this[(y8v+Y6I)]();this[N7l]=C0l;this[(v4l+z9o+S5o+W2g+H6n+W3o+B5O.E4o+F2o)](I4l);}
;STXChart.prototype.exportLayout=function(){var M9l="i2b",i5t="J2b",T5l="y2b",h0g="p2b",obj={}
;for(var field in this[I4l]){if(B5O[h0g](field,v8n)&&B5O[(T5l)](field,p3n)){obj[field]=STX[(B5O.r3o+A0g+W3o)](this[I4l][field]);}
else if(B5O[i5t](field,v8n)){obj[v8n]={}
;}
else if(B5O[M9l](field,p3n)){obj[p3n]={}
;}
}
for(var panelName in this[p3n]){var panel=obj[p3n][panelName]={}
,p=this[p3n][panelName];panel[P5n]=p[P5n];panel[(m9o+X8l+O5n+z9o+O1l)]=p[O2l];panel[i2O]=p[E6v][(y7o+z9o+X2l)];}
for(var studyName in this[I4l][v8n]){var study=obj[v8n][studyName]={}
,s=this[I4l][v8n][studyName];study[c8g]=s[c8g];study[z9O]=STX[z9v](s[z9O]);study[E6o]=STX[z9v](s[E6o]);study[(c2o+z9o+y7o+V0t)]=s[L0t];study[o2O]=STX[z9v](s[o2O]);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){var k6t="K7b",k7v="O7b",z0t="j2b",C0g="x2b",r8O="w2b",S6t="d2b",C2o="z2b",S4t="X2b",b7v="n2b",b5t="l2b",H0o="sy",G7I="isFuturesSymbol",J9n="b2b",l1v="cleanupGaps";if(!this[l1v])return quotes;if(quotes&&B5O[(J9n)](quotes.length,0))return quotes;var isForeignExchange=this[E6v][L2O][J7t](".")!=-1,isFuture=STX[U7l][G7I](this[E6v][(H0o+L6o+o4t)]),interval=this[I4l][q3v];if(!isForeignExchange&&!isFuture&&!STXChart[z2o](interval)){var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;B5O[b5t](i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote[x0v])bcdt=new Date(thisQuote[x0v][f2v]());else bcdt=new Date(STX[w0v](thisQuote[E7n])[f2v]());if(B5O[b7v](dt,null)){dt=bcdt;}
else{for(var zz=0;B5O[S4t](zz,1440);zz++){if(!stick)dt=STX[U7l][Q1O](dt,interval,1,this,null,this[q5R]);if(B5O[C2o](bcdt[f2v](),dt[f2v]()))break;else if(B5O[S6t](bcdt[f2v](),dt[(Z4n+B5O.G4o+p2I+i0R+W3o)]())){stick=true;break;}
else{newQuotes[H0l]({Date:STX[t9O](dt),Open:newQuotes[B5O[r8O](j,1)][X5g],High:newQuotes[B5O[C0g](j,1)][X5g],Low:newQuotes[B5O[z0t](j,1)][X5g],Close:newQuotes[B5O[k7v](j,1)][X5g],Volume:0,Adj_Close:newQuotes[B5O[k6t](j,1)][S0n]}
);stick=false;j++;}
}
}
newQuotes[H0l](thisQuote);}
return newQuotes;}
return quotes;}
;STXChart[C9R]=function(stx,quoteFeed,behavior){var G4t="updateChartLoop";this[U3O]={}
;this[n2g]=stx;this[v9g]=quoteFeed;this[F7l]=behavior;this[v7n]=C0l;this[F6O]=X7g;this[L7l]=C0l;if(this[F7l][x7g])this[G4t]();}
;STXChart.Driver.prototype.die=function(){if(this[F6O])window[r5l](this[F6O]);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this[U3O][feed[L4o]]){this[U3O][feed[(e7o+z9o+i9o+W3o+e7o)]]={label:feed[L4o],quoteFeed:feed[v9g],behavior:feed[F7l]?feed[F7l]:{}
,count:B5O.b4I}
;}
this[U3O][feed[L4o]][w6g]++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this[U3O][feed[L4o]];tagalong[w6g]--;if(!tagalong[w6g])this[U3O][feed[L4o]]=X7g;}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var j9O="eFeed",p9n="tag",E8n="taglongs",count={count:STX[D5n](this[E8n])}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){var b2O="V7b",i0v="addMemberToMasterdata",F9l="fields";count[w6g]--;if(!dataCallback.error){var fields=qparams[F9l];if(!fields)fields=null;STX[i0v](self[n2g],tagalong[L4o],dataCallback[V3t],fields);}
if(B5O[(b2O)](count,0))self[m7g]();}
;}
;for(var label in this[(p9n+z9o+e7o+B5O.Z7o+s7O+F2o)]){var tagalong=this[U3O][label],qparams=STX[M8v](tagalong[F7l]);STX[G2t](qparams,params,true);tagalong[(I9n+B5O.G4o+j9O)][X9g](qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this[n2g][w0n]();this[n2g][V5o]();}
;STXChart.Driver.prototype.updateChart=function(){var b0n="Fe",j1I="quot",V2v="update",i8R="G7b",X8t="terD";if(this[L7l])return ;if(this[v7n])return ;this[L7l]=true;var howManyToGet=STX[D5n](this[n2g][Q9g]),howManyReturned=0;function closure(self,params,symbol){return function(dataCallback){var N6v="vior",K5t="eh",q0g="U7b",p3v="eE",h2l="oun",g3n="uns",h0l="q7b",x3n="otes",A8t="M7b",G2v="rD",a2g="N7b",t1n="s7b",I4v="A7b";howManyReturned++;if(B5O[I4v](symbol,params[E6v][L2O])){if(!dataCallback.error){var lastBarAdded=false;if(!params[C0v]&&!STXChart[z2o](params[q3v])){if(params[E6v][h1g].length&&dataCallback[V3t]&&B5O[t1n](dataCallback[(T2o+U6l+B5O.G4o+j9t)].length,0)){var lastRecord=params[E6v][h1g][B5O[a2g](params[E6v][(H5O+F2o+H4o+G2v+z9o+B5O.G4o+z9o)].length,1)];if((dataCallback[V3t][0][x0v]&&B5O[A8t](lastRecord[x0v],dataCallback[V3t][0][(x0v)]))||(dataCallback[(r3g+x3n)][0][E7n]&&B5O[h0l](lastRecord[E7n],dataCallback[V3t][0][E7n]))){dataCallback[V3t][(g3n+D4t+E8l+B5O.G4o)](lastRecord);lastBarAdded=true;}
}
dataCallback[V3t]=self[n2g][y6O](dataCallback[V3t]);if(lastBarAdded)dataCallback[V3t][x7t]();}
self[n2g][t2g](dataCallback[V3t],params[(B5O.r3o+B5O.w2t+B5O.E4o+B5O.G4o)]);}
else{self[v9g][(z9o+y7o+y7o+h2l+B5O.r3o+p3v+B5O.E4o+B5O.E4o+J8t)](params,dataCallback);}
}
if(B5O[q0g](howManyReturned,howManyToGet)){self[L7l]=false;}
self[e4n](params);if(self[F7l][G0R]){self[(i9o+K5t+z9o+N6v)][G0R](params);}
}
;}
;for(var chartName in this[n2g][Q9g]){var chart=this[n2g][Q9g][chartName];if(!chart[L2O])continue;if(!chart[h1g]||!chart[(L6o+A7I+X8t+z9o+B5O.G4o+z9o)].length)continue;var params=this[E8o](chart[L2O],chart);params[j5O]=chart[h1g][B5O[i8R](chart[h1g].length,1)][x0v];params[V2v]=true;params[L3o]=STX[M8v](params);this[(j1I+W3o+b0n+l3t)][X9g](params,closure(this,params,chart[L2O]));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self[w2l]();}
;}
this[F6O]=window[m1t](closure(this),B5O[(a4I+k5n+i9o)](this[F7l][x7g],O5R));}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=B5O.b4I;function closure(){return function(response){var W3t="ee",g3O="uot",N3n="orrec",j2o="abl",N7g=", ",y3t="rror",C8g="I7b";if(response)cb(response);else if(!chart[H8g]){cb(X7g);}
else if(B5O[C8g](count++,J3l)){cb((W3o+y3t+N7g+L6o+J8t+B5O.h1v+o1l+z9o+A1v+j2o+W3o+X3O+y7o+d6n+X3O+X8l+L6o+c2o+e7o+W3o+L6o+S0l+l3t+X3O+B5O.r3o+N3n+B5O.G4o+e7o+O1l+X3O+X8l+y7o+X3O+h4I+g3O+W3o+M8o+W3t+m9o));}
else{self[p6t](chart,u7g,closure());}
}
;}
;this[p6t](chart,u7g,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,cb){var S8o="endDate",N1o="sym",m9R="initialScroll",j8g="Y7b",G0n="o7b",M0v="noLoadMore",X5R="loadingMore";if(!chart[H8g]){if(cb)cb();return ;}
function closure(self,params){return function(dataCallback){var G2n="ated",X3t="Bar",h6O="loadMore",s1g="H7b";if(B5O[s1g](params[L2O],params[E6v][L2O])){if(!params[h6O])params[E6v][X5R]=false;if(!dataCallback.error){if(!params[(L6o+M3R+M6I+s7O+X3t+F2o+B5O.T9n+j7g+G2n)]&&!STXChart[z2o](params[q3v])){dataCallback[V3t][H0l](params[E6v][h1g][0]);dataCallback[V3t]=self[n2g][y6O](dataCallback[V3t]);dataCallback[V3t][b4l]();}
var fullMasterData=dataCallback[V3t][y4t](params[E6v][h1g]);self[n2g][G7o](fullMasterData,params[E6v]);self[n2g][w0n]();self[n2g][V5o]();params[E6v][H8g]=dataCallback[H8g];params[j5O]=params[E6v][h1g][0][x0v];self[e4n](params);if(self[F7l][G0R]){self[F7l][G0R](params);}
}
else{self[v9g][e3t](params,dataCallback);}
if(cb)cb(null);}
}
;}
var fetching=false;if(!this[F7l][M0v]){if((B5O[G0n](chart[e2O].length,0)&&B5O[j8g](chart[u3O],chart[e2O].length))||forceLoadMore){this[n2g][P0O]=true;if(!chart[X5R]){chart[m9R]=chart[u3O];chart[X5R]=true;var params=this[E8o](chart[(N1o+i9o+B5O.Z7o+e7o)],chart);params[S8o]=chart[h1g][0][x0v];params[L3o]=STX[M8v](params);this[v9g][X9g](params,closure(this,params));fetching=true;}
}
}
if(chart[X5R]){chart[m9R]=chart[u3O];}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){var o3n="C6b",g8R="m7b",t5o="E7b",Y4I="B7b",Y6l="isSeri";if(params[(Y6l+W3o+F2o)])return params[n2g][(H5O+T9o+W3o+B5O.E4o+J6v+g1o)].length;var interval=this[n2g][I4l][q3v],p=params[n2g][I4l][X5l];if((B5O[Y4I](interval,"month")||B5O[t5o](interval,"week"))&&!this[n2g][P7O]){p*=(B5O[(g8R)](interval,"week"))?7:30;}
var bars=B5O[o3n](params[n2g][E6v][z1v],p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var z3n="delayed",S8O="extended",a0o="tRo",W6n="t6b",n8t="k6b",k0g="barsToFetch",interval=this[n2g][I4l][(X8l+b6O+h9t+o1l+z9o+e7o)],ticks=this[k0g]({stx:this[n2g]}
);if((B5O[n8t](interval,V1v)||B5O[W6n](interval,d3t))&&!this[(F2o+B5O.G4o+y1l)][(n9v+y7o+a0o+E7o)]){interval=y7n;}
var params=STX[M8v](this[F7l]);STX[G2t](params,{stx:this[n2g],symbol:symbol,chart:chart,interval:interval,extended:this[n2g][(e7o+R8o+B5O.Z7o+N5O)][S8O],period:B5O.i4I,feed:z3n,ticks:ticks}
,u7g);if(!isNaN(params[q3v])){params[p0l]=params[q3v];params[(X8l+b6O+W3o+B5O.E4o+J2n)]=L6g;}
return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var c8R="Ba",D3n="axi",b4o="tc",t2t="ticks",Z2o="fetchMaximumBars",b8R="xtend",symbol=params[L2O],chart=params[E6v],stx=this[n2g];chart[H8g]=false;var qparams=this[E8o](symbol,chart);STX[(W3o+b8R)](qparams,params,true);if(stx[Z2o][stx[I4l][E5o]]){qparams[t2t]=Math[A0o](20000,qparams[t2t]);qparams[(E8l+W3o+b4o+p8l+U2I+D3n+L6o+M8O+c8R+B5O.E4o+F2o)]=true;}
function closure(self,qparams){return function(dataCallback){var k2t="noUpdate",J4n="r6b",C3v="W6b";if(B5O[C3v](symbol,qparams[E6v][L2O])){if(!dataCallback.error&&B5O[J4n](dataCallback.error,0)){if(!qparams[C0v]&&!STXChart[z2o](qparams[(X8l+y7o+C1t+O4o)]))dataCallback[V3t]=stx[y6O](dataCallback[V3t]);stx[G7o](dataCallback[V3t],qparams[E6v]);qparams[E6v][H8g]=dataCallback[H8g];self[v7n]=false;stx[w0n]();stx[m4o]();stx[V5o]();if(!qparams[k2t])self[w2l]();}
else{self[v9g][e3t](qparams,dataCallback);}
}
self[v7n]=false;if(cb){cb(dataCallback.error);}
if(qparams[E6v][h1g]&&qparams[E6v][h1g].length)qparams[j5O]=qparams[E6v][h1g][0][x0v];self[e4n](qparams);if(self[F7l][G0R]){self[F7l][G0R](qparams);}
}
;}
;this[v7n]=true;qparams[L3o]=STX[M8v](qparams);this[v9g][X9g](qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){var Z4g="Dri";if(!behavior)behavior={}
;if(this[u6t]){this[u6t][T8v]();}
this[(T2o+U6l+B5O.G4o+W3o+Z4g+L0O+B5O.E4o)]=new STXChart[C9R](this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var d0t="attachTagAlongQuoteFeed",c1l="iver",P0v="bel",i5n="ign",T0v="ngQuo",P7t="hT",R5v="empt",K4n="At";if(!feed[L4o]){console[b5R]((K4n+B5O.G4o+R5v+X3O+B5O.G4o+B5O.Z7o+X3O+z9o+B5O.G4o+B5O.G4o+i5o+P7t+I0o+R3n+e7o+B5O.Z7o+T0v+B5O.G4o+J3v+W3o+W3o+m9o+X3O+G1l+X8l+B5O.G4o+g3g+c4o+B5O.G4o+X3O+z9o+F2o+F2o+i5n+X8l+y7o+V9l+X3O+z9o+X3O+e7o+z9o+P0v));return ;}
this[(I9n+H4o+t8o+B5O.E4o+c1l)][d0t](feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){var K8o="detachTagAlongQuoteFeed";this[u6t][K8o](feed);}
;STX[f4O]=function(){}
;u(C0l);STX[f4O][(c2o+B5O.E4o+X8l+B5O.r3o+W3o+v4v+W3o+k8o+B5O.G4o)]=function(stx,chart,price){var C7O="base",Y6v="F6b";return B5O[Y6v](Math[Q6v](((price-STX[f4O][L0R])/STX[f4O][(C7O+i4O)]*u3v)*A0l),A0l);}
;STX[(B5O.T9n+B5O.Z7o+O9O+h1t)][H0R]=function(stx,chart,percent){var d8g="ari",z5g="g6b";return B5O[z5g](STX[(B5O.T9n+B5O.Z7o+O9O+d8g+F2o+B5O.Z7o+y7o)][L0R],(B5O.i4I+(percent/u3v)));}
;STX[f4O][c9t]=function(lhs,rhs){var e5v="a6b";return B5O[e5v](lhs,rhs);}
;STX[f4O][(U6O+W3o+B5O.T9n+B5O.Z7o+O9O+M2I+X8l+F2o+n7l+B5O.G4o+o7g+V5n+B5O.E4o)]=function(stx,chart){var C0O="s9I",y2l="V9I",i4g="O9I",h4l="j8I",b2I="x8I",k4g="w8I",p9o="d8I",s4t="z8I",N4o="n8I",q9o="l8I",R2t="b8I",v9v="transformOutputs",v4I="puts",b0l="formO",t2I="tran",y2O="ugins",p0t="i8I",G6o="J8I",I0g="referenceOutput",z8g="y8I",N0O="p8I",D1n="v8I",m6l="L8I",r9n="D8I",s7l="h8I",b7l="T6b",I1g="P6b",a2l="f6b",b9R="u6b",s0g="e6b",z4I="Q6b",Z3v="bjects",E6n="awing",E3o="c6b",z5o="S6b",W7v="iqPrevC";if(!chart[y8O])return false;var fields=[];for(var field in chart[p6g]){if(chart[p6g][field][o2O][y8O]){fields[H0l](field);}
}
var priceFields=["Close","Open","High","Low",(W7v+e7o+B5O.Z7o+x2I)];chart[J4I]=[];var firstQuote=null,firstTick=B5O[z5o](chart[e2O].length,chart[u3O]),lastTick=firstTick+chart[z1v],stopPointer=0,stops=[];for(var i=0;B5O[E3o](i,stx[(y8v+E6n+V7I+Z3v)].length);i++){var drawing=stx[l3v][i];if(B5O[(v0o+M5n+i9o)](drawing[F2g],"comparison_stop"))if(B5O[z4I](drawing[I2v],firstTick)&&B5O[s0g](drawing[I2v],lastTick))stops[H0l](drawing[I2v]);}
stops[(F2o+B5O.Z7o+q3R)](STX[f4O][c9t]);for(var i=0;B5O[b9R](i,chart[z1v]);i++){if(B5O[a2l](i,chart[z1v]))i=-1;position=firstTick+i;if(B5O[I1g](position,chart[e2O].length)&&B5O[b7l](position,0)){var quote=chart[e2O][position];if(!firstQuote){firstQuote=STX[z9v](quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote[x0v],"Date":quote[(J6v+H4o)]}
;STX[f4O][L0R]=firstQuote[X5g];for(var j=0;B5O[s7l](j,priceFields.length);j++){var field=priceFields[j];if(quote[field]||B5O[r9n](quote[field],0))quote.transform[field]=B5O[m6l](Math[Q6v](((quote[field]-STX[f4O][L0R])/STX[f4O][L0R]*100)*10000),10000);}
var s=stx[I4l][v8n];if(s){for(var n in s){var sd=s[n];if(B5O[D1n](stx[p3n][sd[L0t]][F2g],sd[E6v][F2g]))continue;for(var field in sd[P0n]){if(quote[field]||B5O[N0O](quote[field],0))quote.transform[field]=B5O[z8g](Math[Q6v](((quote[field]-STX[f4O][L0R])/STX[f4O][L0R]*100)*10000),10000);}
if(sd[I0g]&&B5O[G6o](quote[sd[I0g]+" "+sd[F2g]],null))quote.transform[sd[I0g]+" "+sd[F2g]]=B5O[p0t](Math[Q6v](((quote[sd[I0g]+" "+sd[F2g]]-STX[f4O][L0R])/STX[f4O][L0R]*100)*10000),10000);}
}
for(var j in stx[y9g]){var plugin=stx[(j3v+y2O)][j];if(!plugin[(t2I+F2o+b0l+N5O+v4I)])continue;for(var field in plugin[v9v]){if(quote[field]||B5O[R2t](quote[field],0))quote.transform[field]=B5O[q9o](Math[Q6v](((quote[field]-STX[f4O][L0R])/STX[f4O][L0R]*100)*10000),10000);}
}
var createAStop=false;if(stops&&B5O[N4o](stopPointer,stops.length)){if(B5O[(Y1o+h1n+c7I)](position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx[r3t]&&B5O[s4t](stx[r3t][(C0n+L6o+W3o)],"comparison_stop")){mouseStop=stx[r3t][I2v];}
if(createAStop||B5O[p9o](position,mouseStop)){for(var j=0;B5O[k4g](j,fields.length);j++){var field=fields[j],current=quote[field];firstQuote[field]=B5O[b2I](current,(1+(quote.transform[X5g]/100)));}
}
for(var j=0;B5O[h4l](j,fields.length);j++){var field=fields[j],current=quote[field];if(current||B5O[i4g](current,0)){var baseline=firstQuote[field];if(!baseline&&B5O[(r6I+d0n+c7I)](baseline,0)){firstQuote[field]=baseline=B5O[y2l](current,(1+(quote.transform[X5g]/100)));}
quote.transform[field]=B5O[(R3n+O3v)](Math[Q6v](((current-baseline)/baseline*100)*10000),10000);}
}
chart[J4I][H0l](quote);}
else if(B5O[C0O](position,0)){chart[J4I][H0l](null);}
if(B5O[(f2I+O3v)](i,0))break;}
stx[l7O]();return true;}
;STX[f4O][v5R]=function(){var z0n="createComparisonSegmentInner";for(var chartName in this[Q9g]){var chart=this[(V5g+z9o+l5t)][chartName];if(chart[y8O])STX[f4O][z0n](this,chart);}
}
;STX[f4O][(O0v+V7v+c4v+L6o+z9o+B5O.G4o)]=function(stx,panel,price){var e8n="substring",s5o="t3I",V8o="k3I",x3g="C3I",l8t="m9I",w9n="E9I",q2o="B9I",I9l="Y9I",M5t=.001,C4n="H9I",B5n="zer",r8v="onal",S0R="I9I",a1v="R9I",h5g="percent1",v5o="G9I",W7o="U9I",l4O="q9I",w9v="M9I";if(B5O[w9v](price,X7g)||typeof price==u1n)return r4o;var priceTick=panel[b4O][w9O];if(stx[L8v]){if(B5O[l4O](priceTick,B5O.i4I))price=stx[L8v][n3g][w5g](B5O[W7o](price,u3v));else if(B5O[v5o](priceTick,i8l))price=stx[L8v][h5g][w5g](B5O[(a1v)](price,u3v));else if(B5O[S0R](priceTick,Z4v))price=stx[(X8l+a4t+B5O.E4o+y7o+z9o+s7o+r8v+X8l+B5n)][N5g][w5g](B5O[C4n](price,u3v));else if(B5O[(B5O.Z7o+O3v)](priceTick,M5t))price=stx[L8v][l5g][w5g](B5O[I9l](price,u3v));else price=stx[L8v][j5g][w5g](price);}
else{if(B5O[q2o](priceTick,B5O.i4I))price=price[W4t](B5O.b4I)+a6O;else if(B5O[w9n](priceTick,i8l))price=price[W4t](B5O.i4I)+a6O;else if(B5O[l8t](priceTick,Z4v))price=price[W4t](B5O.M4I)+a6O;else if(B5O[x3g](priceTick,M5t))price=price[W4t](B5O.F4I)+a6O;else price=price[W4t](B5O.Z4I)+a6O;}
if(B5O[V8o](parseFloat(price),B5O.b4I)&&B5O[s5o](price[M8l](B5O.b4I),j4O)){price=price[e8n](B5O.i4I);}
return price;}
;STX[f4O][A5v]=function(stx,symbol){var f1v="colorSelection",S2t="a3I",E6O="g3I",c0o="F3I",k5g="rS",J5l="ies",D7l="ud",X3l="r3I",e1O="value",R9t="nput",f1l="late",T0n="xC",W4l="W3I";if(!STX[f4O][M1O]||B5O[W4l](correlationPeriod,0))return ;var correlationPeriod=parseInt($$$((h4O+F2o+B5O.G4o+T0n+B5O.Z7o+w7l+f1l+r8t+F2o+B5O.G4o+y1l+j4O+X8l+R9t+j4O+E8l+X8l+W3o+s4o))[e1O],10),corrPanel=stx[p3n][STX[f4O][U1n]+" ("+correlationPeriod+")"],inputs={"id":STX[f4O][U1n]+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;B5O[X3l](i,stx[I4l][(T9o+D7l+X8l+W3o+F2o)][corrPanel[F2g]][z9O]["Compare To"].length);i++){inputs["Compare To"][H0l](stx[I4l][v8n][corrPanel[F2g]][(z9O)]["Compare To"][i]);}
for(var o in stx[I4l][(F2o+B5O.G4o+D7l+J5l)][corrPanel[F2g]][E6o]){outputs[o]=stx[I4l][v8n][corrPanel[F2g]][E6o][o];}
panelName=corrPanel[F2g];}
inputs["Compare To"][H0l](symbol);outputs["Result "+symbol]=STX[f4O][(h9g+f8l+k5g+W3o+e7o+A4t+s7o+d5t)];STX[Q2v][p9v](stx,"correl",inputs,outputs,null,panelName);for(var panel in stx[p3n]){if(B5O[c0o](stx[p3n][panel][F2g][J7t](STX[f4O][U1n]),0)){var compareArray=stx[I4l][v8n][stx[(n7t+L7o+F2o)][panel][F2g]][(X8l+y7o+c2o+c4o+B5O.G4o+F2o)]["Compare To"];for(var i=0;B5O[E6O](i,compareArray.length);i++){if(B5O[S2t](compareArray[i],symbol)){stx[(C1l+O1l+B5O.Z7o+N5O)][v8n][stx[p3n][panel][F2g]][E6o]["Result "+symbol]=STX[f4O][f1v];}
}
}
}
}
;STX[f4O][l2o]=function(stx){var O5l="ssNam",N1n="ndC",S0O="endClas",z4g="app",y9R="kbox",g0g="rrel";STX[f4O][M1O]=!STX[f4O][M1O];var display=$$$((h4O+F2o+W5l+H5g+g0g+z9o+B5O.G4o+W3o+r8t+F2o+W5l+j4O+B5O.r3o+u0t+B5O.r3o+y9R));if(display){STX[(c4o+y7o+z4g+S0O+F2o+f2I+l3O)](display,(!STX[f4O][M1O])[s4v]());STX[(z9o+c2o+c2o+W3o+N1n+C1l+O5l+W3o)](display,STX[f4O][M1O][s4v]());}
}
;STXChart.prototype.setComparison=function(stx,chart,onOff){var j0n="unsetTransform",W9t="chS",D9n="priceFormat",j2l="priceToPercent";if(!chart[y8O]&&onOff){stx.setTransform(chart,STX[f4O][j2l],STX[f4O][H0R]);chart[L0t][b4O][v0t]=STX[f4O][D9n];chart[L0t][(b4O)][(G1l+p8l+X8l+W9t+W3o+B5O.G4o)]=J4I;}
else if(chart[y8O]&&!onOff){stx[j0n](chart);chart[L0t][b4O][v0t]=X7g;chart[L0t][b4O][h8t]=e2O;}
chart[y8O]=onOff;}
;STX[f4O][P0g]=function(){STXChart.prototype.prepend(W9R,STX[f4O][v5R]);}
;STX[q7v]=function(){var M3o="Construct",K1o="old",k4v="rH",l2I="ke";this[(L6o+z9o+B5O.E4o+l2I+k4v+K1o+W3o+B5O.E4o)]=X7g;this[G3n]=X7g;this[M3o]();}
;f(B5O.i4I);STX.Markers.prototype.reset=function(){var Y9O="overflow",Q2n="stx-holder";this[(H5O+B5O.E4o+H6o+W3o+o3R)]=[];if(!this[(c2o+w4t+e7o)][c6l]){this[L0t][c6l]=document[E4v](g9v);this[L0t][o4v]=Q2n;this[L0t][c6l][d4v][i2n]=D6l;this[L0t][c6l][d4v][h3l]=c6g;this[L0t][c6l][d4v][Y9O]=G6I;this[n2g][E6v][T3g][E5t](this[L0t][c6l]);this[n2g][Z6I]();}
}
;STX.Markers.prototype.clear=function(){if(this[L0t][c6l]){this[n2g][E6v][T3g][g6I](this[L0t][c6l]);this[L0t][c6l]=X7g;}
this[g9O]();}
;STX.Markers.prototype.placeMarker=function(node,date){var V1t="sortMarkers",n6g="c3I",Z2n="S3I",z7g="tem",A7O="append",p5v="hover",T1O="ddE",g2O="android",a2o="focus",V7o="stemClass",w7I="drawStems",Y3t="disp",stx=this[n2g];function incrementZIndex(e){if(marker[c7t])marker[c7t][d4v][H8l]=STX[q7v][Z8g];marker[a0R][d4v][H8l]=STX[q7v][Z8g]++;}
function takeFocus(e){incrementZIndex(e);stx[(B5O.Z7o+c2o+H6n+t8o+X8l+z9o+e7o+w4n)]="marker";stx[k2n]();}
function releaseFocus(e){var n4v="enD";stx[(Z5t+n4v+X8l+z9o+e7o+w4n)]="";stx[x4n]();}
var marker={node:node,date:date}
;node[d4v][(Y3t+e7o+R8o)]="none";if(this[w7I]){var stem=document[E4v]("DIV");stem[o4v]=this[V7o];stem[d4v][i2n]="absolute";stem[d4v][O2l]="none";marker[c7t]=stem;}
if(this[a2o]){if(!STX[g2O]&&!STX[w0O]&&!STX[D7o]){marker[(y7o+B5O.Z7o+m9o+W3o)][O9g]("mouseover",(function(node,stx){return takeFocus;}
)(marker[a0R],stx));marker[(y7o+B5O.V2n+W3o)][O9g]("mouseout",(function(node,stx){return releaseFocus;}
)(marker[a0R],stx));}
else{marker[a0R][(z9o+T1O+L0O+y7o+B5O.G4o+D5t+H4o+V5n+B5O.E4o)]("touchstart",(function(node){return incrementZIndex;}
)(marker));}
}
else if(this[p5v]){if(STX[w0O]||STX[D7o]){marker[a0R][O9g]("touchstart",(function(node){return incrementZIndex;}
)(marker));}
else{marker[a0R][O9g]("mouseover",(function(node){return incrementZIndex;}
)(marker));}
}
this[C1O][H0l](marker);node[d4v][i2n]="absolute";this[L0t][c6l][E5t](node);if(marker[(T9o+W3o+L6o)])this[L0t][c6l][(A7O+p3g+X8l+s4o)](marker[(F2o+z7g)]);this[h6o](this[L0t][E6v],marker);if(B5O[Z2n](this[C1O].length,1)){if(B5O[n6g](marker[I2v],this[C1O][this[C1O].length-2][(s7o+s3g)])){this[V1t]();}
}
return marker;}
;STX.Markers.prototype.sortMarkers=function(){var B4o="sort";function mySort(l,r){var D7v="Q3I",r3n="Z3I";if(B5O[r3n](l[I2v],r[I2v]))return -B5O.i4I;if(B5O[D7v](l[I2v],r[I2v]))return B5O.i4I;return B5O.b4I;}
;this[C1O][B4o](mySort);}
;STX.Markers.prototype.setMarkerTick=function(chart,marker){var r6O="i5I",l5O="J5I",x0n="y5I",h0t="p5I",v4o="v5I",r8g="L5I",n6t="D5I",x6v="h5I",e6v="T3I",g1O="P3I",m3R="f3I",C9o="dataSe",O3n="u3I",Y4t="e3I";for(var i=0;B5O[Y4t](i,chart[e2O].length);i++){var quotes=chart[e2O][i],qms=quotes[x0v][f2v](),pms=qms;if(B5O[O3n](i,0))pms=chart[(C9o+B5O.G4o)][B5O[m3R](i,1)][x0v][f2v]();var dms=marker[D2n][f2v]();if(B5O[g1O](qms,dms)){marker[I2v]=i;return ;}
else if(B5O[e6v](qms,dms)&&B5O[x6v](pms,dms)){marker[I2v]=Math[(L6o+J6I)](B5O[n6t](i,1),0);return ;}
}
var dt=new Date(chart[e2O][B5O[r8g](i,1)][(x0v)]);for(var j=chart[e2O].length;B5O[v4o](j,chart[(m9o+z9o+v7O+W3o+B5O.G4o)].length*2);j++){var pms=dt[f2v]();dt=this[n2g][t9o](dt,this[n2g][I4l][X5l],this[n2g][q5R]);var qms=dt[f2v](),dms=marker[D2n][f2v]();if(B5O[(h0t)](qms,dms)){marker[I2v]=j;return ;}
else if(B5O[x0n](qms,dms)&&B5O[l5O](pms,dms)){marker[I2v]=Math[A0o](B5O[r6O](j,1),0);return ;}
}
}
;STX.Markers.prototype.createDataSet=function(stx){var e3l="b5I";for(var j=0;B5O[e3l](j,this[C1O].length);j++){var marker=this[(L6o+t2o+W3o+o3R)][j];this[h6o](this[L0t][E6v],marker);}
}
;STX.Markers.prototype.initializeChart=function(stx){var f0R="initialize";this[n2g]=stx;this[L0t]=stx[p3n][this[H6t]];this[g9O]();this[f0R](stx);}
;STX.Markers.prototype.drawUnder=function(stx,chart){}
;STX.Markers.prototype.drawOver=function(stx,chart){var t1O="transitionMS";function draw(self,stx){return function(){var r9O="d5I",c0R="z5I",a4g="X5I",V6n="n5I",g6t="l5I",O0n="placementFunction";self[G3n]=null;var panel=stx[p3n][self[H6t]];if(!panel)return ;if(!panel[(p8l+N0g+W3o+y7o)]&&self[O0n]){var chart=panel[E6v],markerSet=[],firstTick=B5O[g6t](chart[e2O].length,stx[E6v][u3O]),lastTick=firstTick+chart[J4I].length;for(var i=0;B5O[V6n](i,self[C1O].length);i++){var marker=self[C1O][i];if(!marker[I2v])continue;var node=marker[a0R],stem=marker[c7t];if(B5O[a4g](marker[I2v],firstTick)){if(B5O[c0R](node[d4v][O2l],"block")){node[d4v][O2l]="block";if(stem)stem[d4v][O2l]="block";}
markerSet[H0l](marker);}
else{if(B5O[r9O](node[d4v][O2l],"none")){node[d4v][O2l]=(p8n+V5n);if(stem)stem[d4v][O2l]="none";}
}
}
self[O0n](self,stx,panel,markerSet);}
}
;}
if(!this[G3n])this[G3n]=setTimeout(draw(this,stx),this[t1O]);}
;STX[Q2v][N1g]=function(stx,sd){var G8v="nam",z5t="o0I",s7g="H0I",F0g="I0I",i4v="R0I",f3o="G0I",J9v="U0I",U2O="q0I",Q9v="M0I",k7I="N0I",L1O="s0I",v8g="A0I",u1t="V0I",R5O="K0I",v1g="O0I",D2g="j5I",K0t="x5I",n4l="w5I",quotes=sd[E6v][(k4I+B5O.E4o+c4o+i9o+i9o+l3t)],cblLong=null,cblShort=null;for(var i=2;quotes&&B5O[n4l](i,quotes.length);i++){if(!quotes[i])continue;if(B5O[K0t](quotes[i-1][c2I],quotes[i-2][c2I])){for(var j=B5O[D2g](i,2);B5O[v1g](j,1);j--){if(B5O[R5O](quotes[j][l1O],quotes[i-1][l1O])){for(var k=B5O[u1t](j,1);B5O[v8g](k,0);k--){if(B5O[L1O](quotes[k][l1O],quotes[j][(n6I+B5O.Z7o+G1l)])){cblShort=quotes[k][l1O];break;}
}
break;}
}
}
if(B5O[k7I](quotes[i-1][l1O],quotes[i-2][l1O])){for(var j=B5O[Q9v](i,2);B5O[U2O](j,1);j--){if(B5O[J9v](quotes[j][c2I],quotes[i-1][c2I])){for(var k=B5O[f3o](j,1);B5O[i4v](k,0);k--){if(B5O[F0g](quotes[k][c2I],quotes[j][(O9o+z4O)])){cblLong=quotes[k][c2I];break;}
}
break;}
}
}
if(cblLong&&B5O[s7g](quotes[i][X5g],cblLong)){quotes[i]["CBL Long "+sd[F2g]]=1;cblLong=null;}
if(cblShort&&B5O[z5t](quotes[i][X5g],cblShort)){quotes[i]["CBL Short "+sd[(G8v+W3o)]]=1;cblShort=null;}
}
}
;return _exports;}
{if(typeof define===r2v&&define[V3O]){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var P=function(E){_stxThirdParty=E[i5O];}
;var _stxThirdParty={}
;if(typeof (window[i5O])!=u1n)P(window);var _stx={"STX":window[d4O],"STXChart":window[w0R],"$$":window[F6I],"$$$":window[f6t]}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();