<template>
  <div class="container" v-if="isWindowSizeEnoguh">
    <div class="login-box">
      <img src="../../assets/bg2.png" alt="Pollák" />
      <h1 class="title">
        POLLÁK <span class="highlight">CSENGŐ</span>
      </h1>
      <h2>Bejelentkezés</h2>
      <form @submit.prevent="handleLogin">
        <div class="user-box">
          <input v-model="username" type="text" required />
          <label>Felhasználónév</label>
        </div>
        <div class="user-box">
          <input v-model="password" type="password" required />
          <label>Jelszó</label>
        </div>
        <button type="submit" class="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Belépés
        </button>
        <p>Nincs még fiókod? <router-link to="/register" style="text-decoration: underline; color: white; font-weight: 700;">Regisztrálj itt!</router-link></p>
      </form>
    </div>
  </div>
  <div v-else class="centered-message">
    <h3>Ez az oldal nem megtekinthető ekkora kijelzőn</h3>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isWindowSizeEnoguh: true,
      username: "",
      password: "",
    };
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    handleLogin() {
      console.log("Felhasználónév:", this.username);
      console.log("Jelszó:", this.password);
    },
    checkWindowSize() {
      this.isWindowSizeEnoguh = window.innerWidth >= 300 && window.innerHeight >= 300;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anta&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

.centered-message {
  font-family: 'Anta';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.container {
  height: 97vh;
}

.login-box {
  font-family: 'Anta';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
}

img {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
}

p {
  font-size: 1rem;
  margin-bottom: -20px;
}

.title {
  font-size: 1rem;
  margin-top: -10px;
  margin-bottom: 10px;
  color: #fff;
}

.title .highlight {
  color: #fc2658;
  font-weight: bold;
}

.login-box h2 {
  margin: 20px 0 30px;
  padding: 0;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
  text-align: left;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
  top: -20px;
  left: 0;
  color: #fc2658;
  font-size: 12px;
}

.login-box form .submit {
  position: relative;
  display: inline-block;
  width: 50%;
  padding: 12px 14px;
  color: #fc2658;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.login-box .submit:hover {
  background: #fc2658;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0px #fc2658, 0 0 25px #fc2658, 0 0 50px #fc2658,
    0 0 100px #fc2658;
}

/* BUTTON ANIMATIONS */

.login-box .submit span {
  position: absolute;
  display: block;
}

.login-box .submit span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #fc2658);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box .submit span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fc2658);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box .submit span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #fc2658);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box .submit span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fc2658);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

/* MEDIA */

@media (min-width: 768px) {
  .login-box {
    width: 60%;
    max-width: 500px;
  }

  .title {
    font-size: 1.2rem;
  }

  .login-box h2 {
    font-size: 2rem;
  }

  .login-box form .submit {
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  img {
    width: 70px;
    height: 70px;
    top: -30px;
    left: -30px;
  }

  p {
    margin-bottom: -10px;
  }

  .login-box {
    margin-top: 10px;
    margin-bottom: 50px;
    width: 80%;
    padding: 20px;
  }

  .title {
    margin-top: 5px;
    font-size: 0.8rem;
  }

  .login-box h2 {
    font-size: 1.5rem;
  }

  .login-box form .submit {
    letter-spacing: 1px;
  }
}

@media (max-width: 340px) {
  img {
    width: 50px;
    height: 50px;
    top: -20px;
    left: -20px;
  }

  .login-box {
    margin-top: 50px;
  }
}

@media (max-height: 700px) {
  .container {
    margin-bottom: 100px;
  }
}

@media (max-height: 480px) {
  .container {
    margin-bottom: 200px;
  }

  .login-box {
    margin-top: 110px;
  }
}
</style>
