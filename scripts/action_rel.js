//-------------change warning text---------------
function f_warning() {
  var codes = document.getElementById("myform").getElementsByTagName("output")[1].value.split("");
  var warn_txt = document.getElementById("warn");
  warn_txt.innerHTML = "";
  if(codes[3] == "A" && codes[5] == "A") {
    warn_txt.innerHTML += "<br>Warning: It's impossible to score weed from Frand (choice04 => A) and help Joyce (choice06 => A) with the same money!";
  }
  if(codes[25] == "A" && (codes[37] == "A" || codes[37] == "B" || codes[37] == "C")) {
    warn_txt.innerHTML += "<br>Warning: It's impossible to enter Drew's ward (choice38 => A, B, C) when Mikey was hurt by Damon (choice26 => A) instead of Drew!";
  }
  if((codes[25] == "B" || codes[25] == "C") && (codes[37] == "D" || codes[37] == "E")) {
    warn_txt.innerHTML += "<br>Warning: It's impossible to enter Mikey's ward (choice38 => D, E) when Drew was hurt by Damon (choice26 => B, C) instead of Mikey!";
  }
  if((codes[29] == "A" || codes[29] == "B" || codes[29] == "C") && (codes[44] == "A")) {
    warn_txt.innerHTML += "<br>Warning: It's impossible to give Sera Rachel's bracelet (choice45 => A) when you didn't get it(choice30 => A, B, C)!";
  }
  if(codes[19] == "A" && codes[3] == "B" && codes[34] == "A") {
    warn_txt.innerHTML += "<br>Warning: It's impossible for David to search your room (choice35 => A) when you convinced him (choice20 => A) you didn't score weed(choice4 => B)!";
  }
  if(codes[19] == "A" && codes[3] == "A" && codes[34] == "B") {
    warn_txt.innerHTML += "<br>Warning: It's impossible for David not to search your room (choice35 => B) when he found the weed (choice20 => A) you took out from your pocket(choice4 => A)!";
  }
  if(codes[19] == "B" && codes[34] == "B") {
    warn_txt.innerHTML += "<br>Warning: It's impossible for David not to search your room (choice35 => B) when he got suspicious of you (choice20 => B)!";
  }
  if(warn_txt.innerHTML != "") {
    warn_txt.innerHTML += "<br>Are you sure to submit?";
  }
}

//-------------Images preload---------------
function preloadimages(arr) {
  var newimages=[];
  var arr=(typeof arr!="object")? [arr] : arr;  //确保参数总是数组
  for (var i=0; i<arr.length; i++){
    newimages[i]=new Image();
    newimages[i].src=arr[i];
  }
}
preloadimages(['pic/01A.jpg', 'pic/01B.jpg', 'pic/02A.jpg', 'pic/02B.jpg', 'pic/03A.jpg', 'pic/03B.jpg', 'pic/04A.jpg', 'pic/04B.jpg', 'pic/05A.jpg', 'pic/05B.jpg', 'pic/06A.jpg', 'pic/06B.jpg', 'pic/07A.jpg', 'pic/07A2.jpg', 'pic/07B.jpg', 'pic/07B2.jpg', 'pic/07C.jpg', 'pic/08A.jpg', 'pic/08B.jpg', 'pic/09A.jpg', 'pic/09B.jpg', 'pic/10A.jpg', 'pic/10B.jpg', 'pic/11A.jpg', 'pic/11B.jpg', 'pic/11B2.jpg', 'pic/11C.jpg', 'pic/11C2.jpg', 'pic/12A.jpg', 'pic/12B.jpg', 'pic/12C.jpg', 'pic/13A.jpg', 'pic/13A2.jpg', 'pic/13B.jpg', 'pic/13B2.jpg', 'pic/13C.jpg', 'pic/14A.jpg', 'pic/14B.jpg', 'pic/15A.jpg', 'pic/15B.jpg', 'pic/15C.jpg', 'pic/15D.jpg', 'pic/15E.jpg', 'pic/15F.jpg', 'pic/15G.jpg', 'pic/16A.jpg', 'pic/16B.jpg', 'pic/16C.jpg', 'pic/16D.jpg', 'pic/16E.jpg', 'pic/17A.jpg', 'pic/17B.jpg', 'pic/18A.jpg', 'pic/18B.jpg', 'pic/19A.jpg', 'pic/19B.jpg', 'pic/20A.jpg', 'pic/20B.jpg', 'pic/21A.jpg', 'pic/21B.jpg', 'pic/22.jpg', 'pic/23A.jpg', 'pic/23A2.jpg', 'pic/23B.jpg', 'pic/23B2.jpg', 'pic/23C.jpg', 'pic/24A.jpg', 'pic/24B.jpg', 'pic/25A.jpg', 'pic/25B.jpg', 'pic/26A.jpg', 'pic/26B.jpg', 'pic/26B2.jpg', 'pic/26C.jpg', 'pic/26C2.jpg', 'pic/27A.jpg', 'pic/27B.jpg', 'pic/28.jpg', 'pic/29A.jpg', 'pic/29B.jpg', 'pic/29C.jpg', 'pic/30A.jpg', 'pic/30A2.jpg', 'pic/30B.jpg', 'pic/30B2.jpg', 'pic/30C.jpg', 'pic/30D.jpg', 'pic/31A.jpg', 'pic/31B.jpg', 'pic/32A.jpg', 'pic/32A2.jpg', 'pic/32B.jpg', 'pic/32B2.jpg', 'pic/32C.jpg', 'pic/33A.jpg', 'pic/33B.jpg', 'pic/34A.jpg', 'pic/34A2.jpg', 'pic/34B.jpg', 'pic/34B2.jpg', 'pic/35A.jpg', 'pic/35B.jpg', 'pic/36A.jpg', 'pic/36B.jpg', 'pic/37A.jpg', 'pic/37B.jpg', 'pic/38A.jpg', 'pic/38B.jpg', 'pic/38B2.jpg', 'pic/38C.jpg', 'pic/38C2.jpg', 'pic/38D.jpg', 'pic/38E.jpg', 'pic/38F.jpg', 'pic/39A.jpg', 'pic/39B.jpg', 'pic/40A.jpg', 'pic/40B.jpg', 'pic/41A.jpg', 'pic/41B.jpg', 'pic/41C.jpg', 'pic/42A.jpg', 'pic/42B.jpg', 'pic/43A.jpg', 'pic/43B.jpg', 'pic/44A.jpg', 'pic/44B.jpg', 'pic/45A.jpg', 'pic/45B.jpg', 'pic/tally0_0.png', 'pic/tally0_1.png', 'pic/tally0_2.png', 'pic/tally1_0.png', 'pic/tally1_1.png', 'pic/tally1_2.png', 'pic/tally2_0.png', 'pic/tally2_1.png', 'pic/tally2_2.png', 'pic/tally3_0.png', 'pic/tally3_1.png']);

