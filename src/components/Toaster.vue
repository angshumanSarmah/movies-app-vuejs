<template>
  <div class="container" :class="displayPropertyClass">
    {{content}}
  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    CustomMovieRow
  },
})
export default class Toaster extends Vue {
    @Prop() content!: string;


    displayToast = false;
    get displayPropertyClass() {        
        return this.displayToast ? 'show' : 'hide';
    }

    mounted() {
        this.displayToast = this.content && true || false;
        setTimeout(() => {
            this.displayToast = false;
            this.$emit('remove-toast')
        }, 1000);

    }



  
}
</script>
<style lang="scss" scoped>
.container {
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 999;
    background: #996a03;
    height: 2rem;
    border-radius: 0.5em;
    box-shadow: 2px 2px #7c9585;
    padding: 0.5em;
    font-size: small;
    width: 16rem;
    color: #fff;
}
    .show {
        display: block;
        transition: .6s;

    }
    .hide {
        display: none;
        transition: .6s;
    }
</style>