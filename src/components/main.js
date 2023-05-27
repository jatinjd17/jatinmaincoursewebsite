import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <CartWrapper>
      <div className="main">
        {/* <div className="overlay"></div> */}
        <video
          //   style={{ width: "500px", height: "500px" }}
          //   src={require("src/assets/videoBg.mp4")}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          autoPlay
          loop
          muted
        />
        {/* <video src="src/assets/videoBg.mp4" autoPlay loop muted /> */}
        {/* <video autoPlay style={{ width: "500px", height: "500px" }}>
          <source src={require("src/assets/videoBg.mp4")} />
        </video> */}
        {/* <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div> */}
      </div>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  .main {
    width: 100%;
    height: 100vh;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    ${"" /* position: absolute; */}
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .overlay {
    ${"" /* position: absolute; */}
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    /* background-color: #000000cc; */
  }
`;

export default Main;
