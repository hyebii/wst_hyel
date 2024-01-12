import React from "react";
import Main from "../components/section/Main";

import { developText } from "../data/developer";
import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <Main title="추천 개발자" description="추천 개발자입니다">
      <section id="developer" className="developerPage">
        <h2>추천 개발자를 소개합니다.</h2>
        <div className="developer-wrap">
          {developText.map((profile, key) => (
            <div className="developer-inner" key={key}>
              <div className="thumb play-icon">
                <Link to={profile.address}>
                  <img src={profile.img} alt={profile.name} />
                </Link>
              </div>
              <div className="tit">{profile.name}</div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Developer;
