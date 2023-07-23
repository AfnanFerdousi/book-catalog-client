import api from "../../api/apiSlice";
import {IReview, Inputs} from "../../../types/globalTypes"

interface IGetAllBookParams {
    searchTerm?: string;
    publishedAt?: string;
    genre?: string;
    author?: string;
    title?: string;
}

const bookApi = api.injectEndpoints({
    endpoints: (build) => ({
        getRecentBooks: build.query({
            query: () => ({
                url: "/book",
            }),
        }),
        getSingleBook: build.query({
            query: (id: string) => ({
                url: `/book/${id}`,
            }),
        }),
        getAllBooks: build.query({
            query: (params: IGetAllBookParams) => {
                let queryString = "/book";
                let added = false;
                if (params.searchTerm) {
                    queryString += `?searchTerm=${params.searchTerm}`;
                    added = true;
                }
                if (params.publishedAt && added === true) {
                    queryString += `&publishedAt=${params.publishedAt}`;
                } else if (params.publishedAt && added == false) {
                    queryString += `?publishedAt=${params.publishedAt}`;
                    added = true;
                }
                if (params.genre && added === true) {
                    queryString += `&genre=${params.genre}`;
                } else if (params.genre && added == false) {
                    queryString += `?genre=${params.genre}`;
                    added = true;
                }
                if (params.author && added === true) {
                    queryString += `&author=${params.author}`;
                } else if (params.author && added == false) {
                    queryString += `?author=${params.author}`;
                }
                if (params.title && added === true) {
                    queryString += `&title=${params.title}`;
                } else if (params.title && added == false) {
                    queryString += `?title=${params.title}`;
                }
                return queryString;
            },
        }),
        createBook: build.mutation({
            query: (book: Inputs) => ({
                url: "/book/add-book",
                method: "POST",
                body: book,
            }),
        }),
        editBook: build.mutation({
            query: ({ id, body }: { body: Inputs; id: string }) => ({
                url: `/book/${id}`,
                method: "PATCH",
                body: body,
            }),
        }),
        deleteBook: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/book/${id}`,
                method: "DELETE",
            }),
        }),
        addReview: build.mutation({
            query: ({ review, id }: { review: IReview; id: string }) => ({
                url: `/addReview/${id}`,
                method: "POST",
                body: review,
            }),
        }),
    }),
});

export const {
    useGetRecentBooksQuery,
    useGetAllBooksQuery,
    useCreateBookMutation,
    useEditBookMutation,
    useAddReviewMutation,
    useGetSingleBookQuery,
    useDeleteBookMutation,

} = bookApi;
