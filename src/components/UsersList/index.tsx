import React from "react";
import UserItem from "./components/UserItem";
import { IUsers } from "types/IUsers/IUsers";

import './styles.scss';

interface IUsersListParams {
    list: IUsers[]
}

const UsersList: React.FC<IUsersListParams> = ({list}) =>(
    <div className="usersList">
        {list && list.map((user) => (
            <UserItem user={user} key={user.id.value}/>
        ))}
    </div>
)

export default UsersList;