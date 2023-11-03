
import { PropTypes } from 'prop-types';
const Container = ({children}) => {
    return (
        <div className="flex w-full max-w-[1200px] mx-auto px-[25px] ">
            {children}
        </div>
    );
};


Container.propTypes={
    children:PropTypes.node,
}

export default Container;