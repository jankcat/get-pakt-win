var trailimage=["noimg.gif",100,99],offsetfrommouse=[10,-20],displayduration=0;function gettrailobj(){return document.getElementById?document.getElementById("trailimageid").style:document.all?document.all.trailimagid.style:void 0}function truebody(){return!window.opera&&document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body}function hidetrail(){gettrailobj().visibility="hidden",document.onmousemove=""}function followmouse(e){var t=offsetfrommouse[0],o=offsetfrommouse[1];void 0!==e?(t+=e.pageX,o+=e.pageY):void 0!==window.event&&(t+=truebody().scrollLeft+event.clientX,o+=truebody().scrollTop+event.clientY);var i=document.all?truebody().scrollLeft+truebody().clientWidth:pageXOffset+window.innerWidth-15,d=document.all?Math.max(truebody().scrollHeight,truebody().clientHeight):Math.max(document.body.offsetHeight,window.innerHeight);t+trailimage[1]+3>i||o+trailimage[2]>d?gettrailobj().display="none":gettrailobj().display="",gettrailobj().left=t+"px",gettrailobj().top=o+"px"}(document.getElementById||document.all)&&document.write('<div id="trailimageid" style="position:absolute;visibility:visible;left:0px;top:0px;width:1px;height:1px"><img src="'+trailimage[0]+'" border="0" width="'+trailimage[1]+'px" height="'+trailimage[2]+'px"></div>'),document.onmousemove=followmouse,displayduration>0&&setTimeout("hidetrail()",1e3*displayduration);