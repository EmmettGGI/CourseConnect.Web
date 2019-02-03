import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

exports.aANS = functions.firestore.document('classes/{classId}/questions/{questionId}/aVoters/{voteId}').onCreate((change,context) => {
   return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).get().then(function (snap) {
       let votes = snap.data()!.aANS;
       votes = votes + 1;
       return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).update({"aANS":votes}).then(function () {
            console.log("success")
       }).catch(function (e) {
           console.error(e)
       })
   }).catch(function (e2) {
       console.error(e2)
   })
});

exports.bANS = functions.firestore.document('classes/{classId}/questions/{questionId}/bVoters/{voteId}').onCreate((change,context) => {
    return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).get().then(function (snap) {
        let votes = snap.data()!.bANS;
        votes = votes + 1;
        return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).update({"bANS":votes}).then(function () {
            console.log("success")
        }).catch(function (e) {
            console.error(e)
        })
    }).catch(function (e2) {
        console.error(e2)
    })
});

exports.cANS = functions.firestore.document('classes/{classId}/questions/{questionId}/cVoters/{voteId}').onCreate((change,context) => {
    return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).get().then(function (snap) {
        let votes = snap.data()!.cANS;
        votes = votes + 1;
        return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).update({"cANS":votes}).then(function () {
            console.log("success")
        }).catch(function (e) {
            console.error(e)
        })
    }).catch(function (e2) {
        console.error(e2)
    })
});

exports.dANS = functions.firestore.document('classes/{classId}/questions/{questionId}/dVoters/{voteId}').onCreate((change,context) => {
    return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).get().then(function (snap) {
        let votes = snap.data()!.dANS;
        votes = votes + 1;
        return admin.firestore().collection('classes').doc(context.params.classId).collection('questions').doc(context.params.questionId).update({"dANS":votes}).then(function () {
            console.log("success")
        }).catch(function (e) {
            console.error(e)
        })
    }).catch(function (e2) {
        console.error(e2)
    })
});

exports.sendAlert = functions.firestore.document('alerts/{alertId}').onCreate((change, context) => {

    return admin.firestore().collection('users').get().then(function (querySnap) {
        let tokens:string[] = [];

        querySnap.docs.forEach(function (doc) {
            for(let i = 0; i < querySnap.docs.length; i++){
                let tkn = querySnap.docs[i].data().push;
                console.log(tkn);
                if (tkn) {

                    tokens.push(tkn)

                }
            }
        });
        return admin.firestore().collection('alerts').doc(context.params.alertId).get().then(function (alertSnap) {

            let msg = "";
            if(alertSnap.data()) {
                msg = alertSnap.data()!.message;
            }
            let message = {
                notification: {
                    title: "Alert",
                    body: msg,
                    sound: "default"
                }
            };

            return admin.messaging().sendToDevice(tokens, message).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.error(error)
            })
        }).catch(function (e2) {
            console.error(e2)
        })

    }).catch(function (e) {
        console.error(e)
    })




});
