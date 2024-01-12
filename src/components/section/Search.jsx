import React from 'react'

const Search = () => {
	return (
		<div id="search">
        <div className="search-inner">
          <label htmlFor="searchInput">
            <span className="search-icon"></span>
          </label>
          <input
            type="search"
            id="searchInput"
            placeholder="검색어를 입력해 주세요"
            autoComplete="off" //자동완성 비활성화
            className="search-input"
          />
        </div>
      </div>
	)
}

export default Search