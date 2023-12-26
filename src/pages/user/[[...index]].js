import { UserProfile } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/Button'

const UserProfilePage = () => 
(
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' // This makes it center vertically
    }}>
      <UserProfile path="/user" routing="path" />
      <Button href="/" color="blue" style={{ marginTop: '30px', padding: '20px 40px' }}>
        <span style={{ fontSize: '20px' }}>
            Return <span className="hidden lg:inline"></span>
        </span>
      </Button>
    </div>
  )
  
export default UserProfilePage
