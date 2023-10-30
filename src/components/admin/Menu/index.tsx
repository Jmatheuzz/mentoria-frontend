import { useState } from 'react';
import { BookOutlined, CloseOutlined, FormOutlined, MenuOutlined, PlayCircleOutlined, QuestionOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import './style.css'
import logo from '../../../assets/img/logo-mentoria.png'
function TitleMenu(){
  return (
    <span style={{color: '#fff'}}>Menu Admin</span>
  )
}
function CloseIconMenu(){
  return (
    <span style={{color: '#fff'}}><CloseOutlined/></span>
  )
}

type MenuAdminProps = {screenOn: 'user' | 'course' | 'discipline' | 'simulate' | 'category-question', setScreenOn: Function}

export function MenuAdmin({screenOn, setScreenOn}: MenuAdminProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5vw'}}>
        <MenuOutlined style={{fontSize: '2rem', margin: '1vh'}} onClick={showDrawer}/>
        <h1 style={{marginRight: '2vw'}}>Administrador</h1>
        <img src={logo} style={{width: '5vw'}}/>
      </div>
      <Drawer style={{backgroundColor: '#00000f', margin: 0, padding: 0, color: '#fff'}} title={<TitleMenu/>} placement="left" onClose={onClose} open={open} closeIcon={<CloseIconMenu />}>
        <div className={screenOn === 'user' ? 'option_select' : 'option'} onClick={() => setScreenOn('user')}>
          <UserOutlined />
          <p>Usuários</p>
        </div>
        <div className={screenOn === 'discipline' ? 'option_select' : 'option'} onClick={() => setScreenOn('discipline')}>
          <BookOutlined />
          <p>Disciplinas</p>
        </div>
        <div className={screenOn === 'course' ? 'option_select' : 'option'} onClick={() => setScreenOn('course')}>
          <PlayCircleOutlined />
          <p>Cursos</p>
        </div>
        <div className={screenOn === 'simulate' ? 'option_select' : 'option'} onClick={() => setScreenOn('simulate')}>
          <FormOutlined />
          <p>Simulados</p>
        </div>
        <div className={screenOn === 'category-question' ? 'option_select' : 'option'} onClick={() => setScreenOn('category-question')}>
          <QuestionOutlined />
          <p>Categorias de Questões</p>
        </div>
        
      </Drawer>
    </>
  );
};
