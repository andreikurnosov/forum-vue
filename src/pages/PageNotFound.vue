<template>
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">Ooops, we couldn't find what are you looking for. Why dont't you
      <router-link :to="{name: 'Home'}">
        go home instead?
      </router-link>


      </p>
  </div>
</template>

<style module>
 .headingLarge {
   font-size: 100px;
 }

 .textLarge {
   font-size: 50px;
   font-weight: 100;
 }
 .centered {
   text-align: center;
 }
</style>

