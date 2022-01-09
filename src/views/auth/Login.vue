<template>
  <div class="login-box">
    <p class="title">Welcome Back</p>
    <Form
      v-slot="{ errors }"
      class="form"
      :validation-schema="schema"
      autocomplete="off"
      @submit="submitForm"
    >
      <div class="row">
        <label for=""> Email </label>
        <Field
          name="email"
          type="email"
          v-model="form.email"
          placeholder="Enter your email address"
          required
        />
        <span class="errorMessage">{{ errors.email }}</span>
      </div>
      <div class="row">
        <label for=""> Password </label>
        <Field
          name="password"
          type="password"
          v-model="form.password"
          placeholder="Enter your password"
          autocomplete="new-password"
        />
        <span class="errorMessage">{{ errors.password }}</span>
      </div>
      <button type="submit" class="btn">LOG IN</button>
      <a href="#" @click.prevent="showModal = true"> Forgot your password? </a>
    </Form>
  </div>
  <Modal v-model="showModal">
    <template #header> Forgot Password </template>
    <div class="center">
      <Form
        v-slot="{ errors }"
        class="form"
        :validation-schema="schemaForgotPassword"
        @submit="submitFormForgotPassword"
      >
        <div class="row">
          <label for=""> Email </label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <span class="errorMessage">{{ errors.email }}</span>
        </div>
        <button type="submit" class="btn">SEND EMAIL</button>
      </Form>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import users from "@/storage/User.js";

export default {
  name: "ViewsLogin",
  components: {
    Modal,
    Field,
    Form,
  },
  data() {
    return {
      showModal: false,
      form: {
        email: null,
        password: null,
      },
      schema: yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(3),
      }),
      schemaForgotPassword: yup.object({
        email: yup.string().required().email(),
      }),
    };
  },
  methods: {
    submitForm() {
      const user = users.find(
        (i) => i.email === this.form.email && i.password === this.form.password
      );
      if (!user) {
        return this.$notify({
          type: "error",
          text: "Incorrect username or password.",
        });
      }
      this.$store.dispatch("auth/setUserData", user);
      this.$router.push({
        name: "Dashboard",
      });
    },
    submitFormForgotPassword() {
      this.$notify(
        "Your password reset instructions have been sent to your email account!"
      );
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
.login-box {
  .title {
    text-align: center;
  }
  a {
    text-align: right;
    color: rgb(3, 3, 3);
    text-decoration: none;
    display: block;
    margin-top: 10px;
  }
}
.form {
  .row {
    margin-bottom: 15px;
    label {
      display: block;
      margin-bottom: 10px;
    }
    input {
      display: block;
      outline: none;
      width: 240px;
      height: 39px;
      color: rgb(3, 3, 3);
      background-color: rgb(238, 238, 238);
      font-family: "Playfair Display";
      letter-spacing: 0px;
      text-transform: none;
      line-height: 39px;
      padding: 10px;
      border-radius: 0px;
      pointer-events: auto;
    }
  }
  .btn {
    display: block;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    width: 240px;
    height: 46px;
    min-height: 33px;
    min-width: 40px;
    color: rgb(255, 255, 255);
    background-color: rgb(3, 3, 3);
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    line-height: 13px;
    padding: 0px;
    border-radius: 0px;
    border: 0px;
  }
  .errorMessage {
    display: block;
    margin-top: 7px;
    color: crimson;
  }
}
.center {
  display: flex;
  justify-content: center;
}
</style>
