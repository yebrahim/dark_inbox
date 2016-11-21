var sg_head = document.getElementsByTagName('head')[0];

var bg="#36393e"; // Main background
var tb="#36393e"; // Header Background
var sb="#2e3136"; // Sidebar background
var tx="#aaaaaa"; // Sidebar text
var hb="inherit"; // Title-box background
var eb="#222222"; // Email Background
var eheader="#2d2d2d"; // Email Header
var et="#999999"; // Email text
var el="#0096cf"; // Email link
var nbb="#245231"; // New badge background
var nbf="black"; // New badge foreground

var csscript = document.createElement('style'); 
csscript.type = "text/css"; 
csscript.innerHTML = ".c4,body{\
	background-color:"+bg+"!important;\
}\
.bn, .bc, .u2.nJ{\
  background-color:"+tb+"!important;\
  color:"+et+"!important;\
}\
.lQ, .ss, .qG{\
  background-color:"+sb+"!important;\
  color:"+tx+"!important;\
  font-weight: normal !important;\
}\
.m9, .fX, .dy[disabled], .r6, .f0.jhBYqb{\
  color:"+et+"!important;\
}\
.gN, .pE, .g-W-K, .l1, .gg, .KW, .dU, .du, .rA, .lJ, .qY, .jA, .cC, .hX{\
  filter:invert(100%);\
}\
.bB, .X, .br>.bc, .aR, .k, .dm, .f5, .i8, .hs, .rI, .rJ, .de, .m7, .gb_ga, .gb_Bb, .gb_xb, .gb_ja, .hA{\
  background-color:"+eb+"!important;\
  color:"+et+"!important;\
}\
.b4, .b4 .at, .X *, .h8, .ac-P .bJ, .an, .nJ, .az, .nE, input, .cN:hover, .cQ:hover, .gb_Cb:hover{\
  background-color:"+eheader+"!important;\
  color:"+et+"!important;\
}\
.b4 .at::before, bB .at::before, .at::before {\
    box-shadow: none !important;\
}\
.HB {\
  background-color:"+nbb+"!important;\
  color:"+nbf+"!important;\
}\
a.dj, a:visited.dj{\
	color:"+el+"!important;\
}";

sg_head.appendChild(csscript);
