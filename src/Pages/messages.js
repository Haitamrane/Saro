import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import Discussions from '../Components/Discussions/Discussions';
import plus from '../Assets/plus.svg';

import picture from '../Assets/picture.png';


function Messages() {
    return (
        <div>
            <Header H1="Messages" return="/homejeu" src={plus} link="/demande"/>

            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" new="Nouveau message"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>
            <Discussions src={picture} name="Louise75" heures="22:10" msg="J’avoue c’est pas mal" namevu="namevu"/>

            <Menu messages="white" home="#898989" profils="#898989"/>
        </div>
    );
  }
  
  export default Messages;