import React from "react"
import "./BookItem.css"
const BookItem = ({ title, author, pages, genre }) => {
	return (
		<tr className="book-item__ctn">
			<td>{title}</td>
			<td>{author}</td>
			<td>{pages}</td>
			<td>{genre}</td>
		</tr>
	)
}

export default BookItem
