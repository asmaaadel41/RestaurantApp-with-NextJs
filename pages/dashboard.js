import{useState,useEffect} from 'react'
import {getSession,signIn} from 'next-auth/react'
function Dashboard(){
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      const securePage = async()=>{
          const session = await getSession()
          if(!session){
              signIn()
          }else{
              setLoading(false)
          }
      }
      securePage()
    },[])
    return(
        <h1>Dashboard Page</h1>
    )
}
export default Dashboard