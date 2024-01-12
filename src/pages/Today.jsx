import React from "react";
import Main from "../components/section/Main";
import { todayText } from "../data/today";
import { Link } from "react-router-dom";

const Today = () => {
  return (
    <Main title="오늘의 영상" description="오늘의 영상입니다.">
      <section id="today">
				<h2>오늘의 추천 영상입니다.</h2>

				{todayText.map((today, key) =>(
        	<div className="today-inner" key={key}>
						<div className="thumb play-icon">
							<Link to={today.page}>
								<img src={today.img} alt={today.tit} />
							</Link>
						</div>
						<div className="cont">
							<span className="chip">today!</span>
							<div className="tit">
								<Link to={today.page}>{today.tit}</Link>
							</div>
							<div className="desc">{today.desc}</div>
							<div className="info">
								<div className="author">
									<Link to={`/channel/${today.channelId}`}>
										{today.author}
									</Link>
								</div>
								<div className="date">{today.date}</div>
							</div>
						</div>
        	</div>
				))}
      </section>
    </Main>
  );
};

export default Today;
