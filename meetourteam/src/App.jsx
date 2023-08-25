import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const Page1 = lazy(() => import('./pages/Page1'));
const Page2 = lazy(() => import('./pages/Page2'));
const Page3 = lazy(() => import('./pages/Page3'));

const LoadingFallback = () => <div>Loading...</div>;

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
          </Switch>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
