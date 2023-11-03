
import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute =({children}) => {
const {loading,user}=useAuth()

  if(loading){
    return <div className='text-center flex flex-col mt-40 gap-3 ml-[400px]'>
        <progress className="progress progress-success w-56" value={0} max="100"></progress>
<progress className="progress progress-success w-56" value="10" max="100"></progress>
<progress className="progress progress-success w-56" value="40" max="100"></progress>
<progress className="progress progress-success w-56" value="70" max="100"></progress>
<progress className="progress progress-success w-56" value="100" max="100"></progress>

    </div>

  }


    if(user){

        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;