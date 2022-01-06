import { SpinnerDotted } from 'spinners-react';

const Loader = () => {
    return<>
        <div className="spinner">
            <SpinnerDotted size={80} thickness={100} speed={100} color="#00dbafda" />
        </div>
    </>
}

export default Loader;