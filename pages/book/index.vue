<template>
  <div>
    <v-row>
      <v-col cols="1">
        <v-btn color="primary" to="/book/search">検索する</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn color="error" @click="deleteLocalStorage">削除する</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col
        v-for="(book, index) in books" :key="index"
        cols="12"
        md="6"
        class="mb-4"
      >
        <v-card class="mx-auto mb-4">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{book.title}}</v-card-title>
              読んだ日: {{book.readDate}}
              感想: {{book.memo}}
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn class="mx-2" fab dark
                  :to="{name: 'book-edit-id', params: {id:book.id}}"
                  color="indigo"
                  small
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      default: () => {}
    }
  },
  methods:{
    deleteLocalStorage(){
      this.$emit('delete-local-storage')
    }
  }
}
</script>

<style>

</style>
