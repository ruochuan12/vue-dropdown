<template>
  <div>
    <div class="dropdown">
      <button class="dropdown-toggle btn"></button>
      <slot name="toggle"></slot>
      <clr-icon-vue shape="caret" dir="down"></clr-icon-vue>
    </div>
    <div class="dropdown-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->