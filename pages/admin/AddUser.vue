<template>
  <div>
    <Breadcrumb :items="items" />
    <form @submit="addUser" method="post">
      <b-row class="justify-content-md-center">
        <b-col cols="8">
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter Username"
          >
            <b-form-input
              v-model="$v.form.username.$model"
              aria-describedby="username-feedback"
              :state="validateState('username')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.username.required"
              >This is a required field.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-if="!$v.form.username.minLength"
              >Name must have at least
              {{ $v.form.username.$params.minLength.min }}
              letters.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-if="!$v.form.username.maxLength"
              >Name must have at most
              {{ $v.form.username.$params.maxLength.max }}
              letters.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter password"
          >
            <b-form-input
              v-model="$v.form.password.$model"
              type="password"
              aria-describedby="password-feedback"
              :state="validateState('password')"
            ></b-form-input>
            <b-form-invalid-feedback
              v-if="!$v.form.password.required"
              id="password-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback
              v-if="
                !$v.form.password.validatePassword && $v.form.password.required
              "
              >Password Incorrect</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter Confirm password"
          >
            <b-form-input
              v-model="$v.form.confirmPassword.$model"
              type="password"
              aria-describedby="confirmPassword-feedback"
              :state="validateState('confirmPassword')"
            ></b-form-input>
            <b-form-invalid-feedback
              id="confirmPassword-feedback"
              v-if="!$v.form.confirmPassword.required"
              >This is a required field.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback
              v-if="
                !$v.form.confirmPassword.sameAsPassword &&
                $v.form.confirmPassword.required
              "
              >Passwords must be identical.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter firstName"
          >
            <b-form-input
              v-model="$v.form.firstName.$model"
              aria-describedby="firstName-feedback"
              :state="validateState('firstName')"
            ></b-form-input>
            <b-form-invalid-feedback id="firstName-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter lastName"
          >
            <b-form-input
              v-model="$v.form.lastName.$model"
              aria-describedby="lastName-feedback"
              :state="validateState('lastName')"
            ></b-form-input>
            <b-form-invalid-feedback id="lastName-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter email"
          >
            <b-form-input
              type="email"
              v-model="$v.form.email.$model"
              aria-describedby="email-feedback"
              :state="validateState('email')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.email"
              >Email Incorrect.</b-form-invalid-feedback
            >
            <b-form-invalid-feedback
              id="email-feedback"
              v-if="!$v.form.email.required"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-button variant="success" size="sm" type="submit">Submit</b-button>
        <button
          type="button"
          class="btn btn-primary btn-sm ml-2"
          @click="$router.push('/Admin/ManageUser')"
        >
          Back
        </button>
      </b-row>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  sameAs,
  email,
  maxLength,
} from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'
import Breadcrumb from '@/components/Breadcrumb'
import axios from 'axios'

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
  components: { Breadcrumb },
  layout: 'coreLayout',
  data() {
    return {
      form: {
        username: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        email: null,
      },
      items: [
        {
          text: 'AdminSystem',
          href: '/Admin/ManageUser',
        },
        {
          text: 'ManageUser',
          href: '/Admin/ManageUser',
        },
        {
          text: 'AddUser',
          href: '/Admin/AddUser',
        },
      ],
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(15),
      },
      password: {
        required,
        validatePassword,
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    validateState(name) {
      //console.log(this.$v.form[name])
      const { $dirty, $error } = this.$v.form[name]
      return $dirty ? !$error : null
    },
    async addUser(e) {
      e.preventDefault()
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wanted to Add this user',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Edit it!',
      }).then((result) => {
        if (result.isConfirmed) {
          let datas = {
            username: this.$v.form.username.$model,
            password: this.$v.form.password.$model,
            userLevel: 'User',
            firstName: this.$v.form.firstName.$model,
            lastName: this.$v.form.lastName.$model,
            email: this.$v.form.email.$model,
            createDate: Date.now,
            createBy: 'admin',
            isActive: true,
          }
          axios
            .post('https://localhost:5001/api/UserMasters', datas)
            .then((res) =>
              Swal.fire(
                'AddUSer!',
                'User has been Add.',
                'success'
              ).then((res) => this.$router.push('/Admin/ManageUser'))
            )
            .catch((err) => console.error(err))
        }
      })
    },
  },
}
</script>

<style></style>
