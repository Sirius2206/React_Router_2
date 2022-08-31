import NewPost from "../NewPost/NewPost";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

function Home({data}) {
  return (
    <>
      <NewPost />
        {data?.map((item) => (
          <NavLink key={item.id} to={`/posts/${item.id}`}>
            <Card props={item} />
          </NavLink>
        ))}
    </>
  );
}

export default Home;
