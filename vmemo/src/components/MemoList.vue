<template>
    <div class="notes-list">
        <div class="list-header">
            <h2>备忘录 | MEMO</h2>
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button class="btn btn-default"
                        @click="toggleShoe('all')"
                        :class="{active: show === 'all'}">All Memos</button>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default"
                        @click="toggleShow('favorite')"
                        :class="{active: show === 'favorite'}">Favorites</button>
                </div>
            </div>
            <div class="btn-group btn-group-justified" role="group">
                <div class="input-group search">
                    <input type="text" class="form-control" v-model="search" placeholder="Search for...">
                    <span class="input-group-addon">
                        <i class="glyphicon glyphicon-search"></i>
                     </span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list-group">
                <div class="list-group-item" :class="{active: activeMemo === memo}"
                    v-for="(memo, index) in Memos" :key="index"
                    @click="updateActiveMemo(memo)">
                    <h4 class="list-group-item-heading">
                        {{memo.title.trim().substring(0, 30)}}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    export default {
        name: "MemoList",
        data() {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters([
                'filter'
            ]),
            ...mapState([
                'show',
                'activeMemo'
            ]),
            searchMemo() {
                if(this.search.length > 0) {
                    return this.filter((memo) => memo.title.toLowerCase().indexOf(this.search))
                } else {
                    return this.filter;
                }
            }
        },
        methods: {
            ...mapActions([
                'toggleList',
                'setActive'
            ]),
            toggleShow(type) {
                this.toggleShow({show: type})
            },
            updateActiveMemo(memo) {
                this.setActive({memo})
            }
        }
    }
</script>

<style>
  .notes-list {
    flex: 1;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  .list-header {
    padding: 5px 25px 25px 25px;
  }

  .list-header .search{
    margin-top: 20px;
  }

  .list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  .container {
    height: calc(100% - 204px);
    max-height: calc(100% - 204px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  .container .list-group-item{
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading{
    font-weight: 300;
    font-size: 15px;
  }
</style>
