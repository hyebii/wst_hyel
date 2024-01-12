import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'

import { developText } from '../data/developer'


const Home = () => {
	return (
		<Main 
			title="홈" 
			description='사이트에 오신 것을 환영합니다'
		>
			<Today/>
			<Developer videos={developText} title="추천 개발자를 소개합니다" id="developer" />
			<Webd /* videos={} */ title="웹디자인기능사" id="webd" />
		</Main>
	)
}

export default Home