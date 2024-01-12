import React from 'react'
import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = () => {
	return (
		<section id="today">
			<div className='today-inner'>
				<div className='thumb play-icon'>
					<Link to={todayText[0].page}> {/* 검사창에서는 a로 보임 */}
						<img src={todayText[0].img} alt={todayText[0].tit} />
					</Link>
				</div>
				<div className='cont'>
					<span className='chip'>today!</span>
					<div className='tit'>
						<Link to={todayText[0].page}>
							{todayText[0].tit}
						</Link>
					</div>
					<div className='desc'>{todayText[0].desc}</div>
					<div className='info'>
						<div className='author'>
							<Link to={`/channel/${todayText[0].channelId}`}>{todayText[0].author}</Link>
						</div>
						<div className='date'>{todayText[0].date}</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Today