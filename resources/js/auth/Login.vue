

<script setup>
import { reactive, ref, computed } from "vue";

let show1 = ref(false);
let data = reactive({});

const login = () => {
  axios({ method: "post", url: "login", data: data }).then((res) => {
    if (res.status == 200) {
      location.reload();
    }
  });
};

const test = computed(() => {});
</script>



<template>
  <v-layout>
    <div>
      <v-card
        outlined
        elevation="3"
        width="600"
        style="
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <v-container>
          <v-toolbar color="white">
            <v-toolbar-title> LOGIN </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip location="top">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" color="green">
                  <v-icon color="red"> mdi-heart </v-icon>
                </v-btn>
              </template>
              <h6>Email: test@gmail.com</h6>
              <h6>Password: admin</h6>
            </v-tooltip>
          </v-toolbar>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-model="data.email"
                label="Enter Email"
                prepend-icon="mdi-account"
                hint="test@gmail.com"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <!-- hint="At least 8 characters"
                :rules="[rules.required, rules.min]" -->

              <v-text-field
                hint="admin"
                v-model="data.password"
                prepend-icon="mdi-lock-outline"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Enter Password"
                counter
                @click:append="show1 = !show1"
                @keypress.enter="login()"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn block color="pink" @click="login()">
                IPASOK MO
                <v-icon> mdi-login-variant </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-layout>
</template>


