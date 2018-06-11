import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBAS_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };








// // child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// //     // expenses.map((expense) => console.log(expense));
// // }, (e) => {
// //     console.log('Error with data fetching', e);   
// // });


// // database.ref('expenses').push({
// //     description: 'Expense1',
// //     note: '',
// //     amount: 100,
// //     createdAt: 0
// // });

// // database.ref('expenses').push({
// //     description: 'Expense2',
// //     note: '',
// //     amount: 2000,
// //     createdAt: 1
// // });

// // database.ref('expenses').push({
// //     description: 'Expense3',
// //     note: '',
// //     amount: 300,
// //     createdAt: 30000
// // });



// // database.ref('notes/-LEf88TB9UsOaoCifP45').remove();

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Python'
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note'
// // }, {
// //     id: '761ase',
// //     title: 'Another note',
// //     body: 'This is my note'
// // }];

// // const firebaseNotes = {
// //     notes: {
// //         azezae: {
// //             title: 'First note',
// //             body: 'This is my note'
// //         },
// //         qsdfdqsf: {
// //             title: 'Another note',
// //             body: 'This is my note'
// //         }
// //     }
// // }

// // database.ref('notes').set(notes);
// // database.ref('notes/12');





// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     // console.log(val.name, 'is a', val.job.title, 'at', val.job.company + '.');
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // }, (e) => {
// //     console.log('Error with data fetching', e);   
// // });

// // setTimeout(() => {
// //     database.ref('job/title').set('Manager');
// // }, 3500);


// // const onValueChanged = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }), (e) => {
// //     console.log('Error with data fetching', e);
// // };

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e);
// //     });

// // setTimeout(() => {
// //     database.ref('age').set(28);
// // }, 3500);
// // setTimeout(() => {
// //     database.ref().off(onValueChanged);
// // }, 7000);
// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 10500);


// // database.ref().set({
// //     name: 'Yann Darlet',
// //     age: 31,
// //     job:{
// //         title: 'Software developer',
// //         company: 'Google'
// //     } ,
// //     stressLevel: 6,
// //     location: {
// //         city: 'Paris',
// //         country: 'France'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log('This failed. ', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('location').set(null).then(() => {
// //     console.log('Data is set to null!');
// // }).catch((e) => {
// //     console.log('This failed. ', e);
// // });

// // database.ref('location')
// //     .remove()
// //     .then(function() {
// //         console.log("Remove succeeded.")
// //     })
// //     .catch(function(error) {
// //         console.log("Remove failed: " + error.message)
// // });