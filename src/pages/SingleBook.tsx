/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link, useNavigate, useParams } from "react-router-dom";
import {
    useAddReviewMutation,
    useDeleteBookMutation,
    useGetSingleBookQuery,
} from "../redux/features/book/bookApi";
import { IBook, IReview } from "../types/globalTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../components/shared/Loader";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { LuStars } from "react-icons/lu";
import { toast } from "react-toastify";

type ISingleBookParams = {
    id: string;
};
type Inputs = {
    user: string;
    review: string;
};

const SingleBook = () => {
    const { id } = useParams<ISingleBookParams>();
    const { register, handleSubmit } = useForm<Inputs>();
    const [addReview] = useAddReviewMutation();
    const [deleteBook] = useDeleteBookMutation();
    const navigate = useNavigate();

    if (!id) {
        return null;
    }

    const onSubmit: SubmitHandler<Inputs> = async (data: IReview) => {
        console.log(data);
        await addReview({ review: data, id: id });
        toast.success("Review Added!");

        window.location.reload();
    };

    const onDelete = async () => {
        await deleteBook({ id: id });
        navigate("/");
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, react-hooks/rules-of-hooks
    const { data, isLoading } = useGetSingleBookQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <Loader />;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const book: IBook = data?.data ?? {};
    console.log(book);
    return (
        <div className="flex gap-20 items-center w-[80%] py-8">
            <div className="w-[50%]">
                <img src={book.image} alt="" className="ml-auto h-[40rem]" />
            </div>
            <div className="flex flex-col">
                <p className="text-sm italic  text-gray-600">
                    Published At: {book.publishedAt}
                </p>
                <div className="flex items-center gap-3">
                    <h2 className="text-4xl font-bold">{book.title}</h2>
                    <div className="badge badge-primary font-bold text-white">
                        {book.genre}
                    </div>
                </div>
                <h2 className="text-xl text-gray-700">
                    Written By: {book.author}
                </h2>
                <p className="text-lg mt-4">{book.description}</p>
                <div className="flex gap-4 mt-6">
                    <Link to={`/editBook/${id}`} className="mr-[10px]">
                        <button className="btn btn-sm btn-accent text-white font-bold">
                            Edit <BiSolidEdit />
                        </button>
                    </Link>
                    <button
                        onClick={onDelete}
                        className="btn btn-sm btn-error text-white font-bold"
                    >
                        Delete <RiDeleteBin5Line />
                    </button>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-[10px] flex items-center gap-x-2">
                        Give a Review <LuStars />
                    </h2>
                    <div className="">
                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises  */}
                        <form
                            className="flex items-center gap-x-3"
                            action=""
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("user", { required: true })}
                            />
                            <input
                                type="text"
                                placeholder="Review"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("review", { required: true })}
                            />

                            <button className="btn btn-sm btn-primary text-white">
                                Post
                            </button>
                        </form>
                    </div>
                    <h2 className="text-xl font-semibold my-6 flex items-center gap-x-2">
                        Reviews <LuStars />
                    </h2>
                    {book?.reviews?.map((review) => (
                        <div className="mb-[10px] my-2  p-2 border-b-[1px]">
                            <div className="flex items-center gap-x-3">
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-9.jpg" />
                                    </div>
                                </div>
                                <h3 className="text-md font-semibold ">
                                    {review.user}
                                </h3>
                            </div>
                            <p className="pt-2 text-gray-500 font-semibold">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
