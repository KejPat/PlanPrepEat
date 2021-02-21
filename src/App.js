import './App.css';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Homepage from './Component/Homepage/Hompage';
import NewPost from './Component/NewPost/NewPost';
import RecipePage from './Component/RecipePage/RecipePage';
import SectionPage from './Component/SectionPage/SectionPage';

function App() {
  return (
   <div>
      <Layout>
        <Switch>
          <Route path="/newpost" component={NewPost} />
          <Route path={["/lunch", "/dinner"]} component={SectionPage} />
          <Route path="/recipe/:id" component={RecipePage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Layout>
   </div>
  );
}

export default App;
