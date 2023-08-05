import { Button } from '@/components/Button'
import Image from 'next/image'
import {PiShootingStar,PiShoppingBag} from 'react-icons/pi'

export default function Home() {
  return (
   <div className='p-40 bg-base-title'>
     <Button onClick={()=>  console.log('teste')} text='Hello world' icon={PiShootingStar} /> 
     <Button color='secondary' text='Hello Javacript' /> 
     <Button color='secondary'  icon={PiShootingStar} /> 
   </div>
  
  )
}
