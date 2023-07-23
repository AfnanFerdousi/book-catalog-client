/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
// BookCard.tsx
import { useEffect, useState } from "react";
import { IBook, IUser } from "../../types/globalTypes";
import { useNavigate } from "react-router-dom";
import {
    useAddToWishListMutation,
    useGetSingleUserQuery,
} from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";

interface BookCardProps {
    book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const user = localStorage.getItem("user");
    const user1 = user?.substring(1, user.length - 1);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);
    const { data, isLoading, error } = useGetSingleUserQuery(user1 || "");

    useEffect(() => {
        if (data) {
            setCurrentUser(data.data);
        }
    }, [data]);
 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [addToWishlist] = useAddToWishListMutation();
    console.log(currentUser)
    const handleSubmit = async () => {
        if (!user) {
            toast.error("User not logged in. Please log in to add to wishlist");
            return;
        }

        if (!currentUser) {
            toast.error("Error fetching user data");
            return;
        }

        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            await addToWishlist({ _id: currentUser._id, book: book });
            toast.success("Book added to wishlist!");
        } catch (error) {
            toast.error("Error adding book to wishlist:");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching user data</div>;
    }

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
                    <button
                        onClick={handleSubmit}
                        className="btn btn-outline btn-secondary"
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
