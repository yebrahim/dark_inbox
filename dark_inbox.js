var sg_head = document.getElementsByTagName('head')[0];

var bg="#36393e"; // Main background
var tb="#36393e"; // Header Background
var sb="#2e3136"; // Sidebar background
var tx="#696c6f"; // Sidebar text
var sp="#686a6e"; // Separators
var sl="#ffffff"; // Selected item text
var hb="inherit"; // Title-box background
var ht="#686a6e"; // Title-box text
var eb="#222222"; // Email Background
var eheader="#2d2d2d"; // Email Header
var et="#999999"; // Email text
var ec="#757575"; // Email contents text
var el="#0096cf"; // Email link
var es="#3e4146"; // Email 
var eh="inherit"; // Email Highlight
var ib="#424549"; // Input background
var io="#686a6e"; // Input outline
var it="#c6c7c9"; // Input text
var nb="#245231"; // New badge

var csscript = document.createElement('style'); 
csscript.type = "text/css"; 
csscript.innerHTML = ".c4,body{\
	background-color:"+bg+"!important;\
}\
.b4 .bn, .bn, .bc, .u2.nJ{\
  background-color:"+tb+"!important;\
  color:"+et+"!important;\
}\
.m9, .fX, .dy[disabled], .r6, .f0.jhBYqb{\
  color:"+et+"!important;\
}\
.gN, .pE, .g-W-K, .l1, .gg, .KW, .dU, .du, .rA, .lJ, .qY, .jA, .cC{\
  filter:invert(100%);\
}\
.h8, .bB, .at, .X, .br>.bc, .aR, .k, .dm, .f5, .i8, .hs, .rI, .rJ, input, .de, .m7, .gb_ga, .gb_Bb, .gb_xb, .gb_ja{\
  background-color:"+eb+"!important;\
  color:"+et+"!important;\
}\
.ac-P .bJ, .an, .nJ, .az{\
  background-color:"+eheader+"!important;\
  color:"+et+"!important;\
}\
a.dj, a:visited.dj{\
	color:"+el+"!important;\
}";

sg_head.appendChild(csscript);