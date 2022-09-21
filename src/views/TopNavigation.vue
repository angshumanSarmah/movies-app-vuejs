<template>
  <div class="top-navigation">
    <Toaster v-if="showToaster" :content="toasterContent" @remove-toast="showToaster = false"/>
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
      <div class="default-checkbox">
        <label for="default-data-checkbox" class="checkbox-label"
          >Show Default Data</label
        >
        <input
          type="checkbox"
          name="default-data-checkbox"
          id="default-data-checkbox"
          @input="updateLoadDefaultCardsState"
        />
      </div>
      <div>
        <button @click="subscribe()" class="subscribe-btn">Subscribe</button>
      </div>
      <div>
        <button @click="login()" class="login-btn">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toaster from "../components/Toaster.vue";

@Component({
  components: {
    Toaster
  }
})
export default class TopNavigation extends Vue {
  
  showToaster = false;
  toasterContent = '';

  updateLoadDefaultCardsState(event: any) { 
    console.log(event.target.checked);
    this.$store.commit("setLoadDefaultCards", event.target.checked);
  }

  subscribe() {    
    this.showToaster = true;
    this.toasterContent = 'Feature is not implemented';
  }

  login() {
    this.showToaster = true;
    this.toasterContent = 'Feature is not implemented';
  }
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
      color: #42b983;
      font-size: x-large;

      // &.router-link-exact-active {
      //   color: #2c3e50;
      // }
    }
    &:hover {
      transform: scale(1.1);
    }
  }

  .right-side-items {
    display: flex;
    margin-left: auto;
    .default-checkbox {
      margin-right: 1em;
      .checkbox-label {
        color: #fff;
      }
    }
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
          transition-delay: 0.2s;
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
