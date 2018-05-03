import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const HomePage = ({ event }) => {

    return (
        <div>
            <header>
                <h1>Book Club is My Happy Place</h1>
            </header>
            <main className="mainHomePage">

            </main>
            <footer className="footer">
                <Link to="/upcoming-events" className="upcomingEventLink">Login</Link>
            </footer>
        </div>
    )
};

// const mapToStateToProps = (state) => {
//     return {
//         events: state.events
//     }
// }

export default connect(null, {})(HomePage);


