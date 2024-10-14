import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const MyTabBarIcon = ({ name , color  }) => (
    <FontAwesomeIcon icon={name} color={color || "#000"}   size={23}/>

);

export default MyTabBarIcon