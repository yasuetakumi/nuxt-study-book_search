import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const state = () => ({
  isLoggedIn : false,
  userUid : '',
  email : ''
})

export const mutations = {
  setLoginState( state, loggedIn ) {
    state.isLoggedIn = loggedIn
  },
  setUserUid( state, userUid ) {
    state.userUid = userUid
  },
  setEmail( state, email ) {
    state.email = email
  }
}

export const actions = {
  async login({ commit }, payload) {
    const auth = getAuth(this.$firebase)
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then( userCredential => {
      commit('setLoginState', true)
      commit('setUserUid', userCredential.user.uid)
      commit('setEmail', userCredential.user.email)
      console.log('ログイン')
      this.$router.push('/book')
    })
    .catch( e => {
      alert(e.message)
      console.error('error:', e)
    })
  },
  async logout({commit}) {
    const auth = getAuth(this.$firebase)
    await signOut(auth)
    .then(()=>{
      commit('setLoginState', false)
      commit('setUserUid', '')
      commit('setEmail', '')
      this.$router.push('/auth/login')
    })
    .catch( e => {

    })
  },
  addUserInfo({commit}, payload){
    commit('setLoginState', true)
    commit('setUserUid', payload.uid)
    commit('setEmail', payload.email)
  }
}

export const getters = {
  // getLoggedIn(state) {
  //   return !!state.isLoggedIn
  // }

  // 上記を下記のように1行で書くことができる
  getLoggedIn: state => !!state.isLoggedIn,
  getUserUid: state => state.userUid,
  getEmail: state => state.email
}
