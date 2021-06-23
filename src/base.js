import Rebase from 're-base';
import firebase  from 'firebase';


const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyClyZFv4CUw__Sd9eIF66lSioFUKWkSeEA",
    authDomain: "catch-of-the-day-2cee1.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-2cee1-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;