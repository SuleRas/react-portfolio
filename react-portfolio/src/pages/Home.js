import React from "react";
import meImage from "../images/IMG_1456.JPG";
const mainStyle = {
  border: "1px solid black",
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  height: "90vh",
};
const imageStyle = {
  width: "250px",
  // height: "auto",
  borderRadius: "5px",
};
function Home() {
  return (
    <main style={mainStyle}>
      <img src={meImage} style={imageStyle} alt="My picture"></img>
      <section
        style={{
          textAlign: "center",
          border: "1px solid green",
          width: "100%",
          position: "relative",
        }}
      >
        <h3>About Me</h3>
        <div class="flex-item">
          <p>Hello there, I'm</p>
          <h1>Suleiman Mohamud</h1>
          <p>
            Currently studying to be a full-stack developer, check out my
            projects to see my skills.
          </p>
        </div>

        <section
          style={{
            position: "absolute",
            backgroundColor: "white",
            bottom: "0",
            height: "50px",
            width: "100%",
          }}
        ></section>
      </section>
    </main>
  );
}

export default Home;
