import { AppContext } from "./context/contextApi"
import{ Feed,Header,LeftNav,LeftNavMenuItem,SerachResults,SearchResultCard,SuggestionCard,VideoCard,VideoDetails} from './components'
import { BrowserRouter,Routes,Route } from "react-router-dom"


const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full ">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/SearchResult/:SearchQuery" element={<SerachResults />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App