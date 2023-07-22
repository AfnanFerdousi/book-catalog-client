// BookCard.tsx
import React from "react";
import { IBook } from "../../types/globalTypes";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
    book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
        const navigate = useNavigate();
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={book.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="badge badge-outline badge-accent font-semibold">
                    {book.genre}
                </div>
                <h2 className="text-2xl font-bold  pt-2">{book.title}</h2>
                <h3 className="text-md text-gray-600 font-medium italic">
                    {book.author}
                </h3>
                <p className="py-3">{book.description}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => navigate(`/book/${book._id}`)}
                         className="btn btn-primary"
                    >
                        Details
                    </button>
                    <button className="btn btn-outline-primary">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
