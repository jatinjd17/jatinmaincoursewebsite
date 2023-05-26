export const AddtoCart = (email, coursedata) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  return fetch(`http://192.168.29.231:9000/addcoursestouser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify({ email: email, coursedata: coursedata }),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const DeleteCartProduct = (email, title) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  return fetch(`http://192.168.29.231:9000/deletecartproduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify({ email: email, title: title }),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const DeleteAllCartProduct = (email) => {
  // console.log(JSON.stringify(token));
  //   console.log(formdata);

  // return fetch(`http://192.168.29.231:8000/dd`, {
  return fetch(`http://192.168.29.231:9000/deleteallcartproduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formdata),
    // body: formdata,
    // body: JSON.stringify(token),
    body: JSON.stringify({ email: email }),
    // body: token,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
    });
};
