import React from "react";

function Info() {
  return (
    <div className="info">
      <img className="info--img" src="/src/images/pic.jpg" alt="pic" />
      <h3 className="info--name">Yogeshwar S</h3>
      <p className="info--role">Frontend developer</p>
      <p className="info--website">
        <a href="http://yogeshwar.dev">yogeshwar.dev</a>
      </p>
      <div className="btns">
        <button className="info--btn_email">
          <a href="mailto:yogi.s75@gmail.com">
            <img src="/src/icons/mail.png" />
            <p>Email</p>
          </a>
        </button>
        <button className="info--btn_linkedin">
          <a href="http://www.linkedin.com">
            <img src="/src/icons/in.png" />
            <p>Linkedin</p>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Info;
