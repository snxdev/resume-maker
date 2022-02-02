import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Editor from "../pages/Editor";
import Preview from "../pages/Preview";

const PublicRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/start" component={Editor} />
      <Route path="/editor" component={Editor} />
      <Route path="/preview" component={Preview} />
    </>
  );
};

export default PublicRoutes;
