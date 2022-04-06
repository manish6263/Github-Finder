import { Fragment } from "react";
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
            <div className="w-100 mt-20">
                <img src={spinner} alt="Loading...." style={{ width: '200px', display: 'block', margin: 'auto' }} />
            </div>
        </Fragment>
    )
}

export default Spinner;