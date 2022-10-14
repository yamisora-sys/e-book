import firebase from 'firebase/compat/app';
import { app, auth, db } from '../Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import { Navigate, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const user = auth.currentUser;

const update = (setAuthenticated) => {
    const displayName = document.getElementById('displayName').value
    const photoURL = document.getElementById('photoURL').value

    updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL
    }).then(() => {
        alert('Profile updated!')
        setAuthenticated(true)
    }).catch((error) => {
        console.log(error)
    })
}

export function UpdateProfile() {
    return (
        <div>
<section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://media.istockphoto.com/vectors/male-and-female-characters-are-editing-profile-online-vector-id1300004790?k=20&m=1300004790&s=612x612&w=0&h=ECJkSK1bNjOaC1oWbrCsqtsGCLNKA0MuKa6TPzGGmmA=" class="img-fluid" alt="Sample image"></img>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div class="form-outline mb-4">
              <input type="url" id="photoURL" class="form-control form-control-lg"
                placeholder="Enter a valid image URL" />
              <label class="form-label">Image URL</label>
            </div>

            <div class="form-outline mb-3">
                <input type="text" id="displayName" class="form-control form-control-lg"
                  placeholder="What your's name ?" />
                <label class="form-label">Name..</label>
            </div>
  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" class="btn btn-primary btn-lg" onClick={update} >Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}