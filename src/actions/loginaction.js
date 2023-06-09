export const GoogleLogintoApi = (token) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  // return fetch(`http://192.168.29.231:9000/googlelogin`, {
  // return fetch(`https://flask-sandy.vercel.app/googlelogin`, {
  return fetch(`https://jatinmaincoursewebsite.vercel.app/api/googlelogin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify(token),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const NormalLogin = (data) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  // return fetch(`http://192.168.29.231:9000/normallogin`, {
  // return fetch(`https://flask-sandy.vercel.app/normallogin`, {
  return fetch(`https://jatinmaincoursewebsite.vercel.app/api/normallogin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify(data),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const CreateAccount = (data) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  // return fetch(`http://192.168.29.231:9000/createaccount`, {
  // return fetch(`https://flask-sandy.vercel.app/createaccount`, {
  return fetch(`https://jatinmaincoursewebsite.vercel.app/api/createaccount`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify(data),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};
