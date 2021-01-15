import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Spinner from '~/components/Spinner'

const HomeScene = lazy(() => import('~/scenes/Home'))
const NotFoundPage = lazy(() => import('~/scenes/404'))

const App = () => {
  return (
    <div id="theskillwithin-site">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={HomeScene} />

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  )
}
export default App
