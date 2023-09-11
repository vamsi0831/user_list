import UserProfile from './Components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Vamsi',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Deepu',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Satti',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ambica',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile UserProfile={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
