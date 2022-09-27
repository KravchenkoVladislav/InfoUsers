import { NavLink } from 'react-router-dom';

import { routeMain as userDetailPage } from '../../../../pages/UserDetail';
import { IUsers } from "types/IUsers/IUsers";

import './styles.scss';

interface IUserItemParams {
    user: IUsers;
}

const UserItem: React.FC<IUserItemParams> = ({user}) => (
    <div className='userItem'>
        <img src={user.picture.large} className='img'/>
        <div className='infoUser'>
            <div className='name'>{user.name.first}</div>
            <div className='date'>{user.dob.date.slice(0,10)}</div>
            <div className='location'>{user.location.city}, {user.location.street.name} {user.location.street.number}</div>
            <div className='email'>{user.email}</div>
        </div>
        <NavLink className='nav' to={userDetailPage(user.id.value)}>
           <button className='btn'>Edit</button>
        </NavLink>
    </div>
    
)

export default UserItem;