import { app, auth } from '../Firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { HomeScreen } from '../../HomeComponents/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { render } from '@testing-library/react'
import { async } from '@firebase/util'

const signInWithForm = (setAuthenticated) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            alert('You have successfully logged in!')
            setAuthenticated(true)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
}

export function SignIn() {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem(localStorage.getItem('authenticated') || false)
    )

    const handleSubmit = () => {
        signInWithForm(setAuthenticated)
    }

    // localStorage.clear()

    return (
<div>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"></img>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="password" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit} >Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Register</a></p>
          </div>
          {authenticated && <Navigate to="/home" />}
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    )
}