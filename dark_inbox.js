var sg_head = document.getElementsByTagName('head')[0];

var bg="#36393e"; // Main background
var tb="#202733"; // Header dark blue Background
var sb="#2e3136"; // Sidebar background
var tx="#eeeeee"; // Sidebar text
var hb="inherit"; // Title-box background
var eb="#222222"; // Email Background
var et="#999999"; // Email text
var el="#0096cf"; // Email link
var sp="#686a6e"; // Separators
var eheader="#2d2d2d"; // Email Header
var nbb="#245231"; // New badge background
var nbf="#cccccc"; // New badge foreground

var csscript = document.createElement('style'); 
csscript.type = "text/css"; 
csscript.innerHTML = "\
.c4, body{\
  background-color:"+bg+"!important;\
  color:"+et+"!important;\
}\
.bn, .bc, .u2.nJ, .br .aV, .X, .bJ, .ob{\
  background-color:"+tb+"!important;\
  color:"+et+"!important;\
}\
.lQ, .ss{\
  background-color:"+sb+"!important;\
  color:"+tx+"!important;\
  font-weight: bold !important;\
}\
.oa, .aO, .gb_X .gb_ea .gb_b, .gb_X .gb_vc.gb_wc{\
  filter:inherit !important;\
}\
.qG, .qy, .gb_Xb{\
  color:"+tx+"!important;\
}\
.m9, .dy[disabled], .r6, .f0.jhBYqb, #gb#gb a.gb_O{\
  color:"+et+"!important;\
}\
.gL .dl, .g-W-aG-K, .IB, .ld, .gN, .nY, .t1, .g-W-K, .l1, .gg, .aO.Ipp0xc, .KW, .dU, .du, .rA, .lJ, .qY, .jA, .cC, .hX>img, .gX, .FK, .bD.SVcSYb, .gb_Xb, .e6 img, .tD img, .actionIcon, .sR, .g-Ku-mw .g-aq-jq, .hX>img{\
  filter:invert(100%) !important;\
  box-shadow: none !important;\
}\
.Y {\
  border-bottom-color:"+sp+"!important;\
}\
.bB, .pj, .iQ, .fX, .ap, .ap :not(img), .gb_Eb *, .kH, .f9, .aR, .k, .bb .O-c3, .dm, .f5, .i8, .hs, .rI, .rJ, .de, .m7, .gb_ga, .gb_Bb, .gb_xb, .gb_ja, .hA, .d2, .fk, .do, .d2>.g-aq.g-Ku, .gmail_msg *{\
  background-color:"+eb+"!important;\
  color:"+et+"!important;\
}\
.b4, .b4 .at, .h8, .dK, .gb_Z:hover .gb_4, .an, .nJ, .az, .nE, .Nm, .Mx, input, .cN:hover, .cQ:hover, .gb_Cb:hover, #aVMuZe:not(.m):not(.M) .ad>.I:not(.pU4C1e), #aVMuZe:not(.m):not(.M) .ay>.I, .ad.a1>*>*>.r:not(.B8), .ay.a1>*>*>.r, #aVMuZe:not(.m):not(.M) .ix.r, .d2>.g-aq.g-Ku:hover{\
  background:"+eheader+"!important;\
  color:"+et+"!important;\
}\
bB .at::before, .at::before, .aa::before, .an::before{\
  box-shadow: none !important;\
}\
.an::before{\
  border-width: 1px;\
  border-top-style: solid;\
  border-top-color:#444;\
}\
.HB {\
  background-color:"+nbb+"!important;\
  color:"+nbf+"!important;\
}\
a.dj, a:visited.dj{\
	color:"+el+"!important;\
}";

sg_head.appendChild(csscript);
