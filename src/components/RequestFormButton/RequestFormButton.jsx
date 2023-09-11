import {ReactComponent as ReactLogo} from '../../images/chat-svgrepo-com.svg';

import css from './requestFormButton.module.scss'; 

const RequestFormButton = ({ onSvgClick }) => {
    return (
        <>
           <ReactLogo className={ css.requestFormButton } onClick={ ()=> { onSvgClick() } }/>
        </>
    )
};

export default RequestFormButton;