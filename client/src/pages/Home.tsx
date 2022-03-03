import React from 'react';
import { Shortcut } from '../components/Shortcut';
import { Featured } from '../components/Featured';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className="Home">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Featured />
            <div className="body">
                <div className="shortcuts">
                    <Shortcut name="Women" image="https://via.placeholder.com/150x200" />
                    <Shortcut name="Men" image="https://via.placeholder.com/150x200" />
                    <Shortcut name="Accessories" image="https://via.placeholder.com/150x200" />
                </div>
                <div className="preview">
                </div>
            </div>
        </div>
    )
}

export default Home