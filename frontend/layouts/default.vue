<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="operation in this.getCrudOperations()"
                  :key="operation.title"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <nuxt-link
                        :to="`${$nuxt.$route.fullPath}/${operation.path}`"
                        >{{ operation.title }}</nuxt-link
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    links: ["MongoCrud", "Mongo Insert Join", "Excercise"],
    sidebarItems: [],
  }),
  methods: {
    ...mapGetters("mongoCrud", ["getCrudOperations"]),
    defineLinksForSidebar() {
      switch (this.$route.name) {
        case "mongo-crud":
          return this.getCrudOperations();
      }
    },
  },
  mounted() {
    console.log(this.$route.name);
    this.defineLinksForSidebar();
  },
};
</script>
