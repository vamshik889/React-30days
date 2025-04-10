import React from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";
import { useQuery } from "@tanstack/react-query";

const API_key = import.meta.env.VITE_UNSPLASH_API_KEY;
const url = `https://api.unsplash.com/search/photos/?client_id=${API_key}`;
console.log(API_key)

const Gallery = () => {
  // ✅ Corrected useGlobalContext call
  const { searchTerm } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm || "default"], // ✅ Prevents undefined values
    queryFn: async () => {
      if (!searchTerm) return { results: [] }; // ✅ Avoids unnecessary API calls
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
    enabled: !!searchTerm, // ✅ Only fetch if searchTerm exists
  });

  if (isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section>
        <h4>There is some error in fetching the data</h4>
      </section>
    );
  }

  const results = data?.results || [];
  console.log("data",data,"results",results);

  if (results.length < 1) {
    return (
      <section>
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const imgUrl = item?.urls?.regular;
        return (
          <img
            src={imgUrl}
            alt={item.description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
