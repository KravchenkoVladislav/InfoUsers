import React, { useEffect, useState }  from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import routeMain from './routes';
import { routeMain as routeMainPage } from '../MainPage';

import { useSelector } from 'react-redux';
import { selectList } from '../../store/users/selector';

import { IdUser } from 'types/IdUser';
import { IUsers } from 'types/IUsers/IUsers';
import { IData } from 'types/IData';

import Input from 'components/Input';
import './styles.scss';



const UserDetail = () => {
    const usersList = useSelector(selectList);
    
    const {id} = useParams<IdUser>();
    const [user, setUser] = useState<IUsers | undefined>(usersList[0]);
    const [data, setData] = useState<IData | undefined>(undefined);
    const [remote, setRemote] = useState()

    

    useEffect(() => {
        const currentUser = usersList?.find((item: IUsers) => item.id.value === id)
        setUser(currentUser)
    }, [usersList]) 

    const {register, handleSubmit} = useForm({
        mode: 'onSubmit',
    })
  
    const onSubmit = (data:any) => {// any
        setData(data)
    }

    if(data && user){
        user.name.first = data.name;
        user.email = data.email;
        user.phone = data.phone;
        user.location.city = data.city;
        user.location.street.name = data.street;
        user.location.street.number = 0; 
        user.dob.date = data.date;
    }
    const deleteUser = () =>{
        //@ts-ignore
        setRemote(usersList.filter((el)=>el.id.value !==  user.id.value))
    }

    return (
        <section className='userDetail'>
            <NavLink  to={routeMainPage()}>
                <button className='btn'>{'< Back'}</button>
            </NavLink>
            {user ? (
                <div className='detail'>
                     <div className='user'>
                        <img className='img' src ={user.picture.large}/>
                        <div className='name'>{user.name.first}</div>
                        <div className='date'>{user.dob.date.slice(0,10)}</div>
                        <NavLink  to={routeMainPage()}>
                            <button className='delete' onClick={()=>usersList.filter(deleteUser)}>Delete</button>
                        </NavLink>  
                    </div>
                    <form className='edits' noValidate onSubmit={handleSubmit(onSubmit)}>
                         <div className='edit'>
                            <input 
                            className='input' 
                            placeholder={user.name.first}
                            {...register('name')}
                            />
                            <button type='submit' className='btnEdit'>Update</button>
                        </div>
                        <Input
                            userInfo = {user.email}
                            register = {register('email')}
                        />
                        <Input
                            userInfo = {`+${user.phone}`}
                            register = {register('phone')}
                        />
                        <Input
                            userInfo = {user.location.city}
                            register = {register('city')}
                        />
                        <Input
                            userInfo = {`${user.location.street.name} ${user.location.street.number}`}
                            register = {register('street')}
                        />
                        <Input
                            userInfo = {user.dob.date.slice(0,10)}
                            register = {register('date')}
                        />
                    </form>
                </div>
            ):<></>}
        </section>
    )
}
 
export {routeMain};
export default UserDetail;
