import ReturnButtom from "../ReturnButton/ReturnButton";
import RequestForm from "../RequestForm/RequestForm";
import RequestFormButton from "../RequestFormButton/RequestFormButton";
import PhoneInfo from "../PhoneInfo/PhoneInfo";

import css from './leftpannl.module.scss'; 

import { useState } from "react";

const LeftPannel = () => {

    const [ formOpen, setFormOpen ] = useState (true);

    const hendleOpen = () => {
        setFormOpen(false);
    };

    const hendlClose = () => {
        setFormOpen(true);
    };

    return (
        <div className={css.leftpannel}>
           {formOpen ?  <RequestForm onFormClick={ hendleOpen }/>: <RequestFormButton onSvgClick ={ hendlClose }/>}   
           <PhoneInfo/>      
           <ReturnButtom/>
        </div>
    )
};

export default LeftPannel;