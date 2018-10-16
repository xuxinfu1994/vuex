<template>
    <ul>
      <li v-for="(book, index) in books_data">{{book.name}}----{{book.price}}元 <a href="javascript:;" @click="deleteItem(index)">删除</a></li>
    </ul>
</template>
<script>
export default {
  props: ['books_data'],
  mounted() {
    console.log("asdfasdfadsfads")
    console.log(this.books_data)
  },
  methods: {
    deleteItem(index) {
      // alert(index)
      // this.books_data.splice(index, 1);

      this.$emit('deleteBooks', index)

    }
  }
}
</script>
<style>

</style>
