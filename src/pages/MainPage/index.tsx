import React, {useState, useEffect}  from 'react';
import routeMain from './routes';
import UsersList from '../../components/UsersList';
import { TypedDispatch } from 'types/TypedDispatch';

import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../store/users/actions';
import { selectList } from '../../store/users/selector';

import { stylePaginationBtn } from 'utils/stylePaginationBtn';
import './styles.scss';

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentUsers, setCurrentUsers] = useState(10);

    const [userName, setUserName] = useState('');
    const [checkedMale, setCheckedMale] = useState(false);
    const [checkedFemale, setcheckedFemale] = useState(false);
    const [age, setAge] = useState(100);

    const dispatch = useDispatch<TypedDispatch>();
    const usersList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadUsers(currentPage, currentUsers));
    }, [dispatch, currentPage, currentUsers]) 
    
    const [filteredUsersList, SetFilteredUsersList] = useState(usersList);

    const getUserNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    useEffect(() =>{
        SetFilteredUsersList(usersList.filter(user => user.name.first.toLowerCase().includes(userName.toLowerCase())));
    },[userName])

    useEffect(()=>{
        SetFilteredUsersList(usersList.filter(user => user.gender === 'male'));
    },[checkedMale])

    useEffect(()=>{
        SetFilteredUsersList(usersList.filter(user => user.gender === 'female'));
    },[checkedFemale])

    useEffect(()=>{
        SetFilteredUsersList(usersList.filter(user => user.dob.age <= age).sort((a, b) => a.dob.age - b.dob.age));   
    },[age])

    const number:number[] = []
    for(let i = 1; i <=500 / currentUsers; i++){
        number.push(i);
    }
    return (
        <section className='mainPage'>
            <div className='filter'>
                <h1 className='header'>Filter</h1>
                <div className='filterBlock'>
                    <div className='namefilter'>Name</div>
                    <input className='input' type='text' onChange={getUserNameInput} placeholder="Search by name"></input>

                    <div className='namefilter'>Age</div>
                    <label className='progressBar' style={{width:`${age/6.4}%`}}></label>
                    <input className='range' type="range" min="1" value={age} onChange={(e)=>setAge(Number(e.target.value))}></input>
                    <label className='age'>1 - {age}</label>

                    <div className='namefilter'>Gender</div>
                    <div className='gender'>
                        
                        <input type="checkbox"  className="btnCheck" id='btnCheckMale' checked={checkedMale} onChange={()=>setCheckedMale(!checkedMale)}></input>
                        <label className='label' htmlFor='btnCheckMale' style={{background:`${checkedMale?'#ECD3FA':'#ffffff'}`}}>Male</label>

                        <input type="checkbox"  className="btnCheck" id='btnCheckFemale' checked={checkedFemale} onChange={()=>setcheckedFemale(!checkedFemale)}></input>
                        <label className='label' htmlFor='btnCheckFemale'style={{background:`${checkedFemale?'#ECD3FA':'#ffffff'}`}}>Female</label>
                    </div>         

                    <div className='namefilter'>Sort By</div>
                    <select style={{width: '307px'}} className='input'>
                        <option>Name</option>
                        <option>Date of birth</option>
                        <option>City</option>
                        <option>Custom sort</option>
                    </select>
                </div>
            </div>
            <div className='listOfUsers'>
                <h1 className='header'>List of users</h1>
                <UsersList list = {filteredUsersList[0]? filteredUsersList: usersList}/>
                <div className='pagination'>
                    {number.length !== 50 ? number.map((item,index) => (
                        <div className='btns' key={index}>
                            <button className='paginationBtn' onClick={()=> setCurrentPage(item)} style={stylePaginationBtn(item, currentPage)} key={index}>
                                {item}
                            </button>                           
                        </div>
                    )):<>
                        {number.slice(0,10).map((item,index) => (
                        <div className='btns' key={index}>
                            <button className='paginationBtn' onClick={()=> setCurrentPage(item)} style={stylePaginationBtn(item, currentPage)} key={index}>
                                {item}
                            </button>                           
                        </div>
                    ))}
                    </>}
                    <button className='nextPage' onClick={()=>setCurrentPage(prev => prev + 1)}>{"Next page >"}</button>
                    <div className='selectWrapper'>
                        <select className='select' onChange={(e)=>setCurrentUsers(Number(e.target.value))} value={currentUsers}>
                        <option>10</option>
                        <option>50</option>
                        <option>100</option>
                        <option>500</option>
                    </select>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export {routeMain};
export default MainPage;

    

  