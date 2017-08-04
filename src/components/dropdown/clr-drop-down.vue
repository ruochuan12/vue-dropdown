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
    name: 'clr-drop-down',
    data() {
        return {};
    }
};
</script>