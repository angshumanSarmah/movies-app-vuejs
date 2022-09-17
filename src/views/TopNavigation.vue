<template>
  <div class="top-navigation">
    <nav>
      <router-link to="/">
        <span>Movie</span><span style="color: #fff">App</span>
      </router-link>
    </nav>
    <div class="right-side-items">
      <div class="search-holder">
        <input type="text" name="search" placeholder="Search..." />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
      <div>
        <button class="subscribe-btn">Subscribe</button>
      </div>
      <div>
        <button class="login-btn">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.top-navigation {
  background-image: linear-gradient(to bottom, #0c111b, #141b29);
  background-attachment: fixed;
  display: flex;
  align-items: center;
  height: 4em;

  nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      font-size: x-large;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }

  .right-side-items {
    display: flex;
    margin-left: auto;
    .search-holder {
      height: 1.5em;
      margin-right: 1em;
      position: relative;
      color: #fff;
      border-bottom: 0.1px solid #fff;

      input {
        width: 12em;
        font-size: 1em;
        color: #fff;
        background: transparent;
        outline: none;
        border: 0;
        &:focus {
          width: 20em;
          transition-delay: .2s;
        }
      }
    }

    .login-btn {
      background: transparent;
      margin-right: 10px;
      border: none;
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }

    .subscribe-btn {
      background: rgba(0, 153, 255, 0.466);
      margin-right: 10px;
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
