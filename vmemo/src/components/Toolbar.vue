<template>
  <div class="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
    <i @click="newMemo" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"  class="glyphicon glyphicon-star"  ></i>
    <i  @click="deleteMemo" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: "Toolbar",
        methods: mapActions([
            'newMemo',
            'toggleFavorite',
            'deleteMemo'
        ]),
        computed: mapState([
            'activeMemo'
        ])
    }
</script>

<style>
  .toolbar{
    width: 80px;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }

  .starred {
    color: #F7AE4F;
  }

  .toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  .toolbar i:hover{
    opacity: 1;
  }
</style>
