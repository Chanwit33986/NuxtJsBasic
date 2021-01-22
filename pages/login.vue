<template>
  <form @submit="login">
    <b-row class="justify-content-center mt-5">
      <b-col cols="3">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model.trim="$v.email.$model"
            type="text"
            placeholder="Enter Username"
            :state="$v.email.$dirty ? !$v.email.$error : null"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.email.required">
            Field is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            type="password"
            id="input-2"
            v-model.trim="$v.password.$model"
            placeholder="Enter Password"
            :state="$v.password.$dirty ? !$v.password.$error : null"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="!$v.password.required"
            id="password-feedback"
            >This is a required field.</b-form-invalid-feedback
          >
          <b-form-invalid-feedback
            v-if="!$v.password.validatePassword && $v.password.required"
            >Password Incorrect</b-form-invalid-feedback
          >
        </b-form-group>
        <b-button type="submit" variant="primary" block pill>Login</b-button>
      </b-col>
    </b-row>
  </form>
</template>
<script>
import Swal from 'sweetalert2'
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

const validatePassword = (value) => {
  const containsUppercase = /[A-Z]/.test(value)
  const containsLowercase = /[a-z]/.test(value)
  const containsNumber = /[0-9]/.test(value)
  const containsSpecial = /[#?!@$%^&*-]/.test(value)
  return (
    containsUppercase && containsLowercase && containsNumber && containsSpecial
  )
}

export default {
  mixins: [validationMixin],
  layout: 'coreLayout',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
    },
    password: {
      required,
      validatePassword,
    },
  },
  methods: {
    async login(e) {
      e.preventDefault()
      this.$v.$touch()
      if (this.$v.$anyError) {
        return
      }
      const payload = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/')
      } catch (e) {
        Swal.fire({
          icon: 'error',
          title: 'Login Fails',
          text: 'Username or Password incorrect',
        }).then((res) => this.$router.push('/login'))
      }
    },
  },
}
</script>
