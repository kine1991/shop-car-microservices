<template>
  <form class="form">
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { mapActions } from 'vuex';
  import { validationMixin } from 'vuelidate';
  import { required, minLength, email } from 'vuelidate/lib/validators';

  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },

    data: () => ({
      email: 'kine4599@gmail.com',
      password: '123456',
    }),

    computed: {
      emailErrors () {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push('Must be valid e-mail');
        !this.$v.email.required && errors.push('E-mail is required');
        return errors
      },
      passwordErrors () {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.minLength && errors.push('Password must be at least 6 characters long');
        !this.$v.password.required && errors.push('Password is required');
        return errors;
      },
    },

    methods: {
      ...mapActions(['signin']),
      submit () {
        this.$v.$touch();
        console.log(this.$v.$invalid);
        if (!this.$v.$invalid) {
          const { email, password } = this;
          this.signin({ email, password });
        }
      },
      clear () {
        this.$v.$reset();
        this.name = '';
        this.email = '';
      },
    },
  }
</script>

<style lang="scss" scoped>
  .form {
    padding: 2rem;
  }
</style>