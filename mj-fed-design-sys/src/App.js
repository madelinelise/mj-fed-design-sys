import { useEffect, useState } from "react";
import Users from "./components/users/users";
import { Heading } from "./components/heading/heading";
import Pagination from "./components/pagination/pagination";
import axios from "axios";
import { USER_PER_PAGE } from "./global/constants";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=50&nat=us"
      );
      setLoading(false);
      setUsers(res.data.results);

      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  // console.log(users);

  return (
    <div className="layout">
      <Heading title="Our awesome team" headingLevel="h1" />
      <Heading
        title="This is an awesome subtitle."
        headingLevel="h2"
      />
      <p>Page {page}</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Users users={users} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default App;
