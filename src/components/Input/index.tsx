import './styles.scss';

interface InputParams {
  userInfo: string;
  register: any;
}
const input:React.FC<InputParams> = ({userInfo, register}) => {
  return (
    <div className='edit'>
      <input 
      className='input' 
      placeholder={userInfo}
      {...register}
      />
      <button className='btnEdit'>Edit</button>
    </div>
  );
}

export default input;
