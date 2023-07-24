import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://book-catalog-backend-coral.vercel.app/api/v1/",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");

            return headers;
        },
    }),
    endpoints: () => ({}),

    tagTypes: ["book"],
});

export default api;
