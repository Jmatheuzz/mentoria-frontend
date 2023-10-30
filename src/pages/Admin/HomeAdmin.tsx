import { useState } from 'react';
import { MenuAdmin } from '../../components/admin/Menu';
import { ListUsers } from './User/List';


export default function HomeAdmin() {
  const [screenOn, setScreenOn] = useState<'user' | 'course' | 'discipline' | 'simulate' | 'category-question'>('user')
  

  return (
    <>
      <MenuAdmin screenOn={screenOn} setScreenOn={setScreenOn} />
      {screenOn === 'user' && 
      <ListUsers />
      }
    </>
  );
}