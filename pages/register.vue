<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">登録</h3>
          <p class="subtitle has-text-grey">登録してください</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.username"
                    class="input is-large"
                    type="text"
                    placeholder="ユーザーネーム"
                    @blur="$v.form.username.$touch()"/>
                  <div v-if="$v.form.username.$error" class="form-error">
                    <span v-if="!$v.form.username.required" class="help is-danger">ユーザーネームは必須です。</span>
                    <span v-if="!$v.form.username.minLength" class="help is-danger">ユーザーネームは6文字以上にしてください。</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.name"
                    class="input is-large"
                    type="text"
                    placeholder="名前"
                    @blur="$v.form.name.$touch()"/>
                  <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger">名前は入力必須です。</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.email"
                    class="input is-large"
                    type="email"
                    placeholder="メールアドレス"
                    @blur="$v.form.email.$touch()"/>
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">メールアドレスは必須です。</span>
                    <span v-if="!$v.form.email.emailValidator" class="help is-danger">このメールアドレスは正しくありません。</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.avatar"
                    class="input is-large"
                    type="text"
                    placeholder="アバター"
                    autocomplete=""
                    @blur="$v.form.avatar.$touch()"/>
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger">URLが正しくありません。</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.password"
                    class="input is-large"
                    type="password"
                    placeholder="パスワード"
                    autocomplete="new-password"
                    @blur="$v.form.password.$touch()"/>
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">パスワードは入力必須です。</span>
                    <span v-if="!$v.form.password.minLength" class="help is-danger">パスワードは6文字以上にしてください。</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.passwordConfirmation"
                    class="input is-large"
                    type="password"
                    placeholder="パスワード（確認用）"
                    autocomplete="off"
                    @blur="$v.form.passwordConfirmation.$touch()"/>
                  <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                    <span v-if="!$v.form.passwordConfirmation.required" class="help is-danger">パスワード（確認）は必須です。</span>
                    <span v-if="!$v.form.passwordConfirmation.sameAs" class="help is-danger">パスワードが一致しません。</span>
                  </div>
                </div>
              </div>
              <button
                :disabled="$v.form.$invalid"
                type="button"
                class="button is-block is-info is-large is-fullwidth"
                @click.prevent="register">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(6)
      },
      name: {
        required
      },
      avatar: {
        url
      },
      email: {
        required,
        emailValidator: email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAs: sameAs('password')
      }
    }
  },
  methods: {
    register () {
      this.$v.form.$touch()
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>
