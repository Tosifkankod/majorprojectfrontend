import React from 'react'
import './Note.css';
import SearchIcon from '@mui/icons-material/Search';

const Notes = () => {
    return (
        <div class="main_container">
            <center>
                <h2 class="section-heading">Notes/Question Papers</h2>
                <form action="#" >
                    <input type="text" placeholder=" Search for Notes/Question Papers" class="search-bar" />
                    <button className='search_button' type="submit"><SearchIcon/></button>
                </form>
            </center>

            <div class="cards_container">
                <div class="cards">
                    <h2>BCA</h2>
                    <p>(Bachelor's of Computer Application)</p>
                </div>
                <div class="cards">
                    <h2>MCA</h2>
                    <p>(Masters's of Computer Application)</p>
                </div>
                <div class="cards">
                    <h2>BBA</h2>
                    <p>(Bachelor's of Business Administration)</p>
                </div>
                <div class="cards">
                    <h2>MBA</h2>
                    <p>(Master's of Business Administration)</p>
                </div>
                <div class="cards">
                    <h2>Question Papers</h2>
                    <p>(Question papers for all courses)</p>
                </div>
                <div class="cards">
                    <h2>Websites</h2>
                    <p>(Best Websites Resource for learning)</p>
                </div>
            </div>
        </div>
    )
}

export default Notes