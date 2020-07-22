<template>
  <form class="form">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
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
    <v-text-field
      v-model="passwordConfirm"
      :error-messages="passwordConfirmErrors"
      label="Password Confirm"
      required
      @input="$v.passwordConfirm.$touch()"
      @blur="$v.passwordConfirm.$touch()"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, maxLength, minLength, email, sameAs } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      passwordConfirm: { sameAs: sameAs('password') }
      // passwordConfirm: { required }
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }),

    computed: {
      nameErrors () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long');
        !this.$v.name.required && errors.push('Name is required.');
        return errors;
      },
      emailErrors () {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push('Must be valid e-mail');
        !this.$v.email.required && errors.push('E-mail is required');
        return errors;
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.minLength && errors.push('Password must be at least 6 characters long');
        !this.$v.password.required && errors.push('Password is required');
        return errors;
      },
      passwordConfirmErrors () {
        const errors = []
        if (!this.$v.passwordConfirm.$dirty) return errors;
        !this.$v.passwordConfirm.sameAs && errors.push('Password Conform do not match Password');
        return errors;
      },
    },

    methods: {
      ...mapActions(['signup']),
      submit () {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          const { name, email, password, passwordConfirm } = this;
          this.signup({ name, email, password, passwordConfirm });
        }
      },
      clear () {
        this.$v.$reset();
        this.name = '';
        this.email = '';
        this.select = null;
        this.checkbox = false;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .form {
    padding: 2rem;
  }
</style>