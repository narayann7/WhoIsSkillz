import React from 'react'

function Loading() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#060608",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div
          style={{
            color: "#ffffff",
            letterSpacing: "3px",
            fontSize: "15px",
            position: "absolute",
            margin: "auto",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            height: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
          }}
        >
          <h3>Loading..</h3>
        </div>
      </div>
    );
  }
  

export default Loading