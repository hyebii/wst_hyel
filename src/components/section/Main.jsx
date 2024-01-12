import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Search from './Search'

const Main = (props) => {
	return (
		<HelmetProvider>
			<Helmet 
				titleTemplate='%s | 사이트이름' //%s는 실제 페이지 타이틀로 대체됨
				defaultTitle='기본타이틀' //페이지 타이틀 없을 때 쓸 기본 타이틀
				defer={false} 
			> 
				{/* 아래에 props랑 meta가 없으면 defaultTitle이 타이틀이 됨 */}
				{props.title && <title>{props.title}</title>}
				<meta name='description' content={props.description} />
			</Helmet>

			<Header />
			<main id='main' role='main'>
				<Search />
				{props.children}
			</main>
			<Footer />
		</HelmetProvider>
	)
}

export default Main