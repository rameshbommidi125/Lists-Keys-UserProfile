import UserProfile from './components/UserProfile/index'
import './components/UserProfile/index.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'ramesh',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'sohel',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'manoj',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'ajay',
    role: 'Software Developer',
  },
]
const App = () => (
  <div>
    <h1>Users List</h1>
    <div>
      {userDetailsList.map(eachProfile => (
        <UserProfile userDetails={eachProfile} key={eachProfile.uniqueId} />
      ))}
    </div>
  </div>
)

export default App
