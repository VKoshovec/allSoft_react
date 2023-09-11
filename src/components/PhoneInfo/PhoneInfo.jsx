import {ReactComponent as PhoneBookInfo} from '../../images/phonebook-svgrepo-com.svg';
import css from './phoneInfo.module.scss';
import { useState } from 'react';
import { Button } from 'antd';

const PhoneBook = ( {func} ) => { return <div className={ css.phoneInfo }> 
  <Button type='ghost' htmlType='button' className={ css.phoneInfo_formclosebutton } onClick={ () => { func() } }>X</Button>
   <a className={ css.phoneInfo_Link } href="tel:+380660164636">+38(066)016-46-36</a>
   <a className={ css.phoneInfo_Link } href="tel:+380970077507">+38(097)007-75-07</a>
   <a className={ css.phoneInfo_Link } href="mailto:koshovec.vladimir@gmail.com">koshovec.vladimir@gmail.com</a>
</div>};

const PhoneInfo = () => {

    const [phoneShown, setPhoneshown] = useState(false);

    const hendlPhone = () => {
        phoneShown?setPhoneshown(false):setPhoneshown(true);
    }

    return (
        <>
          {phoneShown? <PhoneBook func={ hendlPhone }/>:<PhoneBookInfo className={ css.phoneInfo_Button } onClick={()=>{ hendlPhone() }}/>}
        </>
    );
}

export default PhoneInfo;