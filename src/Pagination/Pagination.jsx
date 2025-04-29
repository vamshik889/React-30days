import React, { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [paginatedData, setPaginatedData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleItemsChange = (e) => {
    const { value } = e.target;

    setItemsPerPage(Number(value));
    setPage(1); //we are setting the page to 1 whenever the items per page gets changed to avoid the empty data
  };
  const pageArray = Array.from(
    { length: Math.ceil(data.length / itemsPerPage) },
    (_, i) => i + 1
  );
  // console.log(pageArray,"hi");

  const handlePage = (e) => {
    setPage(Number(e.target.value));
  };

  //Using async await
  // const fetchdata = async()=>{
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  //     const data = await res.json();
  //     setdata(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  //   finally{

  //   }

  // }

  //fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));

    //fetchdata()
  }, []);

  //function to get the data based on page number
  function getData(page) {
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    console.log(startIndex, endIndex);

    let paginated = data.slice(startIndex, endIndex);

    return paginated;
  }

  useEffect(() => {
    const res = getData(page);
    setPaginatedData(res);
    console.log(paginatedData);
  }, [page, data, itemsPerPage]);

  return (
    <>
      <div>
        {paginatedData.length > 0 &&
          paginatedData.map((ele, ind) => (
            <li key={ele.id} style={{ listStyleType: "none" }}>
              {ele.id} {ele.body} hi
            </li>
          ))}
        {page > 1 && (
          <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        )}
        {pageArray.map((el, index) => (
          <input
            type="button"
            value={el}
            key={el}
            onClick={handlePage}
            className={page === el ? styles.active : ""}
          />
        ))}
        {page <= pageArray.length - 1 && (
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        )}
      </div>
      <div>
        <label htmlFor="itemsNo">Items per Page:</label>
        <select name="" id="itemsNo" onChange={handleItemsChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};

export default Pagination;
