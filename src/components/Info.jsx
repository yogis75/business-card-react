import React from "react";

function Info() {
  return (
    <div className="info">
      <img className="info--img" src="/src/images/pic.jpg" alt="pic" />
      <h3 className="info--name">Yogeshwar Suryavamshi</h3>
      <p className="info--role">Frontend developer</p>
      <p className="info--website">yogeshwar.dev</p>
      <div className="btns">
        <button className="info--btn_email">
          <img src="/src/icons/mail.png" />
          Email
        </button>
        <button className="info--btn_linkedin">
          <img src="/src/icons/in.png" />
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default Info;
