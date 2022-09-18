import React from "react"
import BookItem from "./book-item/BookItem"
import "./BookList.css"

const BooksList = ({ books }) => {
	return (
		<table className="book-list__table">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Autor</th>
					<th>Género</th>
					<th>N° páginas</th>
				</tr>
			</thead>
			<tbody>
				{books.map((book) => (
					<BookItem key={book.title} {...book} />
				))}
			</tbody>
		</table>
	)
}

export default BooksList
