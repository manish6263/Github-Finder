// import { useState, useContext } from "react";
// import AlertContext from "../../context/alert/AlertContext";
// import GithubContext from '../../context/github/GithubContext';


// const UserSearch = () => {
//     const [text, setText] = useState('');
//     const { users, searchUsers, clearUsers } = useContext(GithubContext);
//     const { setAlert } = useContext(AlertContext);

//     const handleChange = (e) => setText(e.target.value);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (text === '') {
//             setAlert('Please enter something', 'error');
//         }
//         else {
//             searchUsers(text);
//             setText('');
//         }
//     }
//     return (
//         <>
//             <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
//                 <div>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-control">
//                             <div className="relative">
//                                 <input type="text" className="input input-md text-black bg-gray-200 pr-40 w-full text-lg" placeholder="Search" value={text} onChange={handleChange} />
//                                 <button type="submit" className="btn btn-md absolute top-0 right-0 rounded-l-none w-36">Go</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 {
//                     users.length > 0 && (
//                         <div>
//                             <button className="btn btn-ghost btn-md" onClick={clearUsers}>
//                                 Clear
//                             </button>
//                         </div>
//                     )
//                 }
//             </div>
//         </>
//     )
// }

// export default UserSearch;
import { useContext, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
    const [text, setText] = useState('');
    const { users, searchUsers, clearUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'error');
        }
        else {
            searchUsers(text);
            setText('');
        }
    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className='input input-md text-black bg-gray-200 pr-40 w-full text-lg' placeholder="Search" value={text} onChange={handleChange} />
                            <button type="submit" className='btn btn-md absolute top-0 right-0 rounded-l-none w-36'>
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {
                users.length > 0 && (
                    <div className="btn btn-ghost btn-md" onClick={clearUsers}>Clear</div>
                )
            }
        </div>
    )
}

export default UserSearch;