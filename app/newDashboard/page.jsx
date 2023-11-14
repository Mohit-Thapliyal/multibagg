'use client';

import { useState } from 'react';
import Link from 'next/link';
import MyProfile from '@/app/ui/newDashboard/myProfile';
import AllUsers from '@/app/ui/newDashboard/allUser';
import classes from '@/app/newDashboard/newDashboard.module.css';

const newDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('myProfile');

    return (
        <div className={classes.newDashboard}>
            <div className={classes.header}>
                <h2>MultiBagg</h2>
                <Link href='/login'>
                    Login
                </Link>
            </div>
            <div className={classes.content}>
                {/* Sidebar */}
                <div className={classes.sidebar}>
                    <ul>
                        <li>
                            <Link href="/dashboard" onClick={() => setSelectedOption('myProfile')}>
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" onClick={() => setSelectedOption('allUsers')}>
                                All Users
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Content */}
                <div style={{ marginLeft: '20px' }}>
                    {selectedOption === 'myProfile' && <MyProfile />}
                    {selectedOption === 'allUsers' && <AllUsers />}
                </div>
            </div>
        </div>
    );
};

export default newDashboard;
