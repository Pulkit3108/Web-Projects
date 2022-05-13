import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 9;
  const country = "in";
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Switch>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category={"general"}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"business"}
              pageSize={pageSize}
              country={country}
              category={"business"}
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"technology"}
              pageSize={pageSize}
              country={country}
              category={"technology"}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"entertainment"}
              pageSize={pageSize}
              country={country}
              category={"entertainment"}
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"sports"}
              pageSize={pageSize}
              country={country}
              category={"sports"}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"health"}
              pageSize={pageSize}
              country={country}
              category={"health"}
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key={"science"}
              pageSize={pageSize}
              country={country}
              category={"science"}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
