/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import Loader from "../components/shared/Loader";
import BookCard from "../components/ui/BookCard";
import { IBook } from "../types/globalTypes";

const AllBooks = () => {
    const [search, setSearchValue] = useState("");
    const [genre, setGenreValue] = useState("");
    const [publishedAt, setPublishedAtValue] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const { data, isLoading } = useGetAllBooksQuery(
        {
            searchTerm: search,
            publishedAt: publishedAt,
            genre: genre,
            title: title,
            author: author,
        },
        {
            refetchOnMountOrArgChange: true,
        }
    );
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="px-12">
            <h2 className="text-4xl font-bold py-8 text-center">All Books</h2>
            <div className="grid grid-cols-3 gap-4 mt-8">
                {data?.data?.map((book: IBook) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
