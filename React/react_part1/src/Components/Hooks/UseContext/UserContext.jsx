import UserProfile from './UserProfile'
import { UserProvider } from './UserProvider'
export const UserContext = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile></UserProfile>
      </UserProvider>
    </div>
  )
}
