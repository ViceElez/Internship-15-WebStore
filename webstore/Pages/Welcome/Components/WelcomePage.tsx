import '../Styles/welcomePage.css';
import {ContainedButton} from '../Components/ContainedButton.tsx';

export const WelcomePage=()=>{
    return(
        <div className='welcome-page'>
            <div className="title-div">
                <h1>MarketPlace</h1>
                <h2>Get All Shopping Done In One Place</h2>
            </div>
               <ContainedButton/>
        </div>
    );
}