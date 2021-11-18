const createQueryString = ({ query }) => {
	if (!query) return ''
	let queryString = '?'
	const arr = Object.keys(query).filter((item) => query[item])

	arr.map((item, index) => {
		if (query[item]) queryString += `${item}=${query[item]}`

		if (arr.length - 1 !== index) {
			queryString += '&'
		}
	})

	return queryString
}

export { createQueryString }
