// import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
// import {
//   GoogleSignin,
//   statusCodes,
//   GoogleSigninButton,
// } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// import {GetUserInfo, SignInAction, SignupAction} from '../actions/auth';
// import {GetAllWinners} from '../actions/winners';
// import messaging from '@react-native-firebase/messaging';
// import {ADDFCMToken} from '../actions/addfcmtoken';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setuserInfo] = useState(null);
  const [example, setexample] = useState("");
  //   const [allwinners, setAllwinners] = useState(null);

  //   const getFcmToken = async () => {
  //     let fcmToken = await AsyncStorage.getItem('fcmToken');
  //     console.log(fcmToken, 'The old Token');
  //     if (!fcmToken) {
  //       try {
  //         const fcmToken = await messaging().getToken();
  //         if (fcmToken) {
  //           console.log(fcmToken, 'the new generated token');
  //           await AsyncStorage.setItem('fcmToken', fcmToken);
  //         }
  //       } catch (error) {
  //         console.log(error, 'error raised in fcmToken');
  //       }
  //     }
  //   };

  const login = async () => {
    setisLoading(true);
    // setUserToken('sdfsdfsd');
    // GoogleSignUp();
    // AsyncStorage.setItem('userToken', 'sdfsdfsd');
    setisLoading(false);
  };

  const logout = () => {
    setisLoading(true);
    setUserToken(null);
    setuserInfo(null);
    signOut();
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userinfo");
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setisLoading(true);
      //   let userToken = await AsyncStorage.getItem('userToken');
      //   let userinfo = await AsyncStorage.getItem('userinfo');
      //   if (userinfo) {
      //     const usrinfo = JSON.parse(userinfo);
      //     const userid = usrinfo._id;
      //     GetUserInfo({id: userid}).then(data => {
      //       // console.log(data);
      //       if (data) {
      //         AsyncStorage.setItem(
      //           'userinfo',
      //           JSON.stringify(data.userdata),
      //         ).then(() => {
      //           setuserInfo(data.userdata);
      //           console.log('Stored Userdata to Async Storage');
      //         });
      //       }
      //     });
      //   }
      // const usrinfo = JSON.parse(userinfo);
      // const userid = usrinfo._id;
      // console.log(JSON.parse(userinfo.name));
      // GetUserInfo({id: userid}).then(data => {
      //   // console.log(data);
      //   if (data) {
      //     AsyncStorage.setItem('userinfo', JSON.stringify(data.userdata)).then(
      //       () => {
      //         setuserInfo(data.userdata);
      //         console.log('Stored Userdata to Async Storage');
      //       },
      //     );
      //   }
      // });
      //   setUserToken(userToken);
      //   setuserInfo(JSON.parse(userinfo));
      setisLoading(false);
    } catch (e) {
      console.log(e);
      console.log("isLogged in Error");
    }
  };

  useEffect(() => {
    // getFcmToken();
    // GoogleSignin.configure({
    //   offlineAccess: true,
    //   webClientId:
    //     '135160965116-st6l7co49g3a639matt47900a0gtrv7j.apps.googleusercontent.com',
    // });
    isLoggedIn();
    // allwinnersss();
  }, []);

  //   const allwinnersss = async () => {
  //     GetAllWinners().then(data => {
  //       if (!data) {
  //         return;
  //       } else {
  //         setAllwinners(data);
  //       }
  //     });
  //   };

  const signOut = async () => {
    try {
      //   await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  //   const examplenamechange = () => {
  //     setexample('jajajjajjajaj');
  //     setisLoading(true);
  //   };

  //   const examplenamechange2 = () => {
  //     setexample('jajajjajjajaj');
  //     setisLoading(false);
  //   };

  //   const GoogleSignUp = async () => {
  //     try {
  //       // setisLoading(true);
  //       examplenamechange();
  //       await GoogleSignin.hasPlayServices();
  //       const {idToken} = await GoogleSignin.signIn();

  //       //            console.log(idToken);
  //       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //       const user_sign_in = auth().signInWithCredential(googleCredential);

  //       user_sign_in
  //         .then(user => {
  //           //                        console.log(user);
  //           const {additionalUserInfo} = user;

  //           const name = additionalUserInfo.profile.name;
  //           const email = additionalUserInfo.profile.email;
  //           const token = additionalUserInfo.profile.exp;
  //           const profilephoto = additionalUserInfo.profile.picture;
  //           const username = additionalUserInfo.profile.given_name;

  //           console.log(additionalUserInfo);
  //           console.log(additionalUserInfo.isNewUser);

  //           if (additionalUserInfo.isNewUser) {
  //             console.log('create new User');
  //             console.log('Go to the next page');
  //             // var dateoff = new Date();
  //             // var offsetInHours = dateoff.getTimezoneOffset();
  //             /////////////////////////////////////
  //             var dateoff = new Date();
  //             var offsetInHours = dateoff.getTimezoneOffset() * 60;
  //             var today = Math.round(new Date().getTime() / 1000);
  //             var todayafteroffset = today + offsetInHours;
  //             console.log('111111111111111111111111111');
  //             console.log(todayafteroffset);
  //             console.log('2222222222222222222222222');

  //             SignupAction({
  //               name,
  //               email,
  //               profilephoto,
  //               username,
  //               todayafteroffset,
  //             })
  //               .then(data => {
  //                 console.log('ggggggggggggggggggggggggg');
  //                 if (data.success) {
  //                   setUserToken(data.token);
  //                   // console.log(data.userdata);
  //                   setuserInfo(data.userdata);
  //                   AsyncStorage.setItem(
  //                     'userinfo',
  //                     JSON.stringify(data.userdata),
  //                   ).then(() => {
  //                     console.log('Stored Userdata to Async Storage');
  //                   });
  //                   AsyncStorage.setItem('userToken', data.token).then(() => {
  //                     console.log('signupsuccess going to next page');
  //                   });

  //                   messaging()
  //                     .getToken()
  //                     .then(token => {
  //                       if (token) {
  //                         ADDFCMToken(token)
  //                           .then(data => {
  //                             console.log('Token Added to the database');
  //                           })
  //                           .catch(e => {
  //                             console.log('Token Not Added to the database');
  //                           });
  //                       }
  //                     });

  //                   // AsyncStorage.setItem('token', token).then(() => {
  //                   //   console.log('signupsuccess going to next page');
  //                   // });
  //                   // console.log('signupsuccess going to next page');
  //                 }
  //                 console.log(data);
  //               })
  //               .catch(e => {
  //                 console.log(e);
  //                 // setisLoading(false);
  //                 let user = auth().currentUser;
  //                 user
  //                   .delete()
  //                   .then(() =>
  //                     console.log(
  //                       'Created User By firebase deleted after error in backend signup',
  //                     ),
  //                   )
  //                   .catch(error => console.log(error));
  //               });
  //           } else {
  //             console.log('Login User');
  //             console.log('Go to the next page');
  //             // console.log(email);
  //             SignInAction({email})
  //               .then(data => {
  //                 console.log('hhhhhhhhhhhhhhhhhhhhhh');

  //                 if (data.success) {
  //                   setUserToken(data.token);
  //                   // console.log(data.userdata);
  //                   setuserInfo(data.userdata);
  //                   AsyncStorage.setItem(
  //                     'userinfo',
  //                     JSON.stringify(data.userdata),
  //                   ).then(() => {
  //                     console.log('Stored Userdata to Async Storage');
  //                   });
  //                   AsyncStorage.setItem('userToken', data.token).then(() => {
  //                     console.log('signupsuccess going to next page');
  //                   });

  //                   messaging()
  //                     .getToken()
  //                     .then(token => {
  //                       if (token) {
  //                         ADDFCMToken(token)
  //                           .then(data => {
  //                             console.log('Token Added to the database');
  //                           })
  //                           .catch(e => {
  //                             console.log('Token Not Added to the database');
  //                           });
  //                       }
  //                     });
  //                   // AsyncStorage.setItem('token', email).then(() => {
  //                   //   console.log('signinsuccess going to next page');
  //                   // });
  //                   // console.log('signinsuccess going to next page');
  //                 }
  //                 console.log(data);
  //               })
  //               .catch(e => {
  //                 console.log(e);
  //               });
  //           }
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //       // setisLoading(false);
  //     } catch (error) {
  //       // setisLoading(false);

  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //         // user cancelled the login flow
  //         alert('User cancelled the login flow !');
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //         alert('Signin in progress');
  //         // operation (f.e. sign in) is in progress already
  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //         alert('Google play services not available or outdated !');
  //         // play services not available or outdated
  //       } else {
  //         console.log(error);
  //       }
  //     }
  //   };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        example,
        // examplenamechange,
        // examplenamechange2,
        // allwinners,
        setuserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
