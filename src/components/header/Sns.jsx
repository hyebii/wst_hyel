import React from 'react'
import { snsLink } from '../../data/header'

const Sns = () => {
	return (
		<ul className="util">
			{snsLink.map((sns, key) => (
				<li key={key}>
					<a
						href={sns.url}
						rel="noopener noreferrer"
						aria-label={sns.title}
					>{sns.title}
					</a>
				</li>
			))}
		</ul>
	)
}
// 리액트 안에서 페이지 이동 할 때에는 Link를 사용
// 외부 페이지는 a 태그

export default Sns