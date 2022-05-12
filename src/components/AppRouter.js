import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import MyProfile from '../pages/MyProfile';
import UserProfile from '../pages/UserProfile';
import PostFeed from '../pages/PostFeed';

export default function AppRouter() {
    const Wrapper = ({ children }) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }

    return (
        <Wrapper>
            <Routes>
                <Route exact path="/user/:id" element={<UserProfile />} />
                <Route exact path="/my-profile" element={<MyProfile />} />
                <Route exact path="/postfeed" element={<PostFeed />} />
            </Routes>
        </Wrapper>
    )
}