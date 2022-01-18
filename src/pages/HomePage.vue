<template>
<div class="container-fluid">
  <form @submit.prevent="grabPictureByDate()">
      <div class="mb-3 d-flex p-5">
    <input type="date" class="form-control" id="exampleInputPassword1" v-model="editable">
    <button class="btn btn-primary">Picture</button>
      </div>
  </form>
  <div class="row">
    <div class="col-12">
      <div >
        <img :src="picture.img" alt="space" class="img-fluid">
      </div>
      <span>
        <p>{{picture.explanation}}</p>
      </span>
    </div>
  </div>
</div>

</template>

<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { naseService } from "../services/NasaService"
import { AppState } from "../AppState"
export default {
  setup() {
    const editable = ref("")
    return {
      editable,
      async grabPictureByDate() {
        try {
          await naseService.grabPictureByDate(editable.value)
        } catch (error) {
          Pop.toast(error.message, "error")
          logger.log(error.message)
        }
      },
      picture: computed(()=>
      AppState.picture
      )





    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
