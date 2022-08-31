import useJsonFetch from "./components/hooks/useJsonFetch";
import "./App.css";
// import NewPost from "./components/NewPost/NewPost";
import Card from "./components/Card/Card";
import CreatePost from "./components/CreatePost/CreatePost";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CardEdit from "./components/Card/CardEdit";


function App() {
  const [data, loading, error] = useJsonFetch("http://localhost:7777/posts");
  console.log(data);

  return (
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id" element={<CardEdit data={data} />} />
        </Routes>
      </div>
  );
}

export default App;
