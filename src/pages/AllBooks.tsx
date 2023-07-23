/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "searchTerm") {
            setSearchValue(value);
        } else if (name === "publishedAt") {
            setPublishedAtValue(value);
        } else if (name === "genre") {
            setGenreValue(value);
        } else if (name === "title") {
            setTitle(value);
        } else if (name === "author") {
            setAuthor(value);
        }
    };

    return (
        <div className="px-12">
            <div className="pt-6 flex gap-x-3">
                <input
                    type="search"
                    name="searchTerm"
                    placeholder="Search"
                    value={search}
                    className="input input-bordered input-primary w-full max-w-[15rem]"
                    onChange={handleOnChange}
                />
                <input
                    type="search"
                    name="title"
                    placeholder="Title"
                    value={title}
                    className="input input-bordered input-primary w-full max-w-[15rem]"
                    onChange={handleOnChange}
                />
                <input
                    type="search"
                    name="author"
                    placeholder="Author"
                    value={author}
                    className="input input-bordered input-primary w-full max-w-[15rem]"
                    onChange={handleOnChange}
                />
                <input
                    type="search"
                    name="Genre"
                    placeholder="Genre"
                    value={genre}
                    className="input input-bordered input-primary w-full max-w-[15rem]"
                    onChange={handleOnChange}
                />
                <input
                    type="search"
                    name="publishedAt"
                    placeholder="Published At"
                    value={publishedAt}
                    className="input input-bordered input-primary w-full max-w-[15rem]"
                    onChange={handleOnChange}
                />
            </div>
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
