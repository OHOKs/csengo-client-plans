<template>
  <div class="login-box">
    <img src="../../assets/bg2.png" alt="Pollák" />
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
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      // Bejelentkezési logika itt
      console.log("Felhasználónév:", this.username);
      console.log("Jelszó:", this.password);
    }
  }
};
</script>

<style scoped>
/* CSS ide másolva az eredetiből */
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url('../../assets/asd2.jpg');
}

img {
  margin-top: -50%;
  margin-left: -20%;
  width: 25%;
  border: none;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
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
  padding: 10px 20px;
  color: #fc2658;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box .submit:hover {
  background: #fc2658;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #fc2658, 0 0 25px #fc2658, 0 0 50px #fc2658,
    0 0 100px #fc2658;
}

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

/* További stílus animációkkal együtt */
</style>
