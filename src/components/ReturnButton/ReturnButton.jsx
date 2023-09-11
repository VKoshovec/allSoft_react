import { ReactComponent as HomeButton } from '../../images/home-svgrepo-com.svg';

import css from './returnButton.module.scss'


const ReturnButtom = () => {
    return (
        <div>
           <a href="#start" class="scroll">
            <HomeButton className = { css.homeButton }/>
           </a>
        </div>
    )
};

export default ReturnButtom;