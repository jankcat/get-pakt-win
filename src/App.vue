<template>
  <div id="app">
    <div>
      <img id="logo" alt="get pakt" src="./assets/logo.png" />
	  <div class="bg">
	    <Scroller msg="PAK YO BAGS!" />
	  </div>
	</div>
	<hr />
	<div>
	  <div class="left">
		<img alt="people who got pakt:" src="./assets/peepz who got pakt.png" />
		<Wins />
	  </div>
    </div>
    <hr />
	<div class="bg">
	  <h3>
	    <img alt="under construction" src="./assets/construction2.gif" />
	    ThiS PagE Is UndeR CoNsTrUcTiOn
	    <img alt="under construction" src="./assets/construction.gif" />
	  </h3>
	</div>
    <hr />
    <div>
      <img alt="the crew" src="./assets/the crew.png" /><br />
      <img class="img-pak" alt="suck it" src="./assets/broken.jpg" />&nbsp;
      <img class="img-pak" alt="get pakt" src="./assets/pakt01.png" /><br />
      <img class="img-pak" alt="get pakt" src="./assets/pakt02.png" />&nbsp;
      <img class="img-pak" alt="get pakt" src="./assets/pakt03.png" />&nbsp;
      <img class="img-pak" alt="get pakt" src="./assets/pakt04.png" />&nbsp;
      <img class="img-pak" alt="get pakt" src="./assets/pakt05.png" />&nbsp;
      <img class="img-pak" alt="get pakt" src="./assets/pakt06.png" />&nbsp;
    </div>
    <hr />
    <div class="bg">
      <img class="img-small" alt="canada" src="./assets/netscape.gif" />&nbsp;
      <img class="img-small" alt="canada" src="./assets/canada.gif" />&nbsp;
      <img class="img-small" alt="counter" src="./assets/counter.png" />&nbsp;
      <img class="img-small" alt="counter" src="./assets/trophy.gif" />&nbsp;
      <img class="img-small" alt="counter" src="./assets/frontpage.jpg" />
    </div>
  </div>
</template>

<script>
import Wins from './components/Wins.vue';
import Scroller from './components/Scroller.vue';

export default {
  name: 'app',
  components: {
    Wins,
	Scroller,
  },
};
</script>

<style>
#app {
  text-align: center;
}
img {
  max-width: 90%;
}
#logo {
  max-width: 90%;
  max-height: 250px;
}
.bg {
  background-image: url("./assets/bg.jpg");
}
.left {
  text-align: left;
}
.img-small {
  max-height: 72px;
}
.img-pak {
  border-width: 8px;
  border-style: outset;
  border-color: hotpink;
}
</style>
