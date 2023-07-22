/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {useGetRecentBooksQuery} from "../redux/features/book/bookApi"
import { IBook } from "../types/globalTypes";
import BookCard from "./ui/BookCard"

const RecentBooks = () => {
    const { data } = useGetRecentBooksQuery(undefined);
      const recentBooksData = data?.data?.slice(0, 3);

    return (
        <div className="px-12 my-12">
            <h2 className="text-4xl font-bold py-8 text-center">Recent Books</h2>

            <div className="grid grid-cols-3 gap-4 mt-8">
                {recentBooksData?.map((book: IBook) => (
                  <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default RecentBooks;
