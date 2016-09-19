import Firebase from './firebase'
import Auth from './auth'

export default {
  get (id) {
    return Firebase.onValue(`user/${id}`)
  },
  me () {
    return Auth.currentUser
      .first()
      .flatMap((user) => this.get(user.uid))
  },
  uploadMePhoto (file) {
    return Auth.currentUser
      .first()
      .flatMap((user) =>
        Firebase.upload(`user/${user.uid}-${Date.now()}`, file)
          // .flatMap((photo) =>
          //   Firebase.put(`user/${user.uid}/photo`, photo.downloadURL)
          //     .map(() => photo.downloadURL)
          // )
      )
  },
  updateMe (data) {
    return Auth.currentUser
      .first()
      .flatMap((user) => Firebase.set(`user/${user.uid}`, data))
  }
}