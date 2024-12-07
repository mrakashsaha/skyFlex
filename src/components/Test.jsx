import React from 'react';

const Test = () => {
    return (
        <div>
            <div className="navbar bg-base-100">

                <div className="">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex avatar tooltip tooltip-bottom" data-tip="hello">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;