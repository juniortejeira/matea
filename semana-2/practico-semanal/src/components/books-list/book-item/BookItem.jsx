import React from "react"
import "./BookItem.css"
const BookItem = ({ title, author, pages, genre }) => {
	return (
		<tr className="book-item__ctn">
			<td>{title}</td>
			<td>{author}</td>
			<td>{genre}</td>
			<td>{pages}</td>
		</tr>
	)
}

export default BookItem
