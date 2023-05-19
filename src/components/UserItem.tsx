import Image from "next/image"
import Link from 'next/link';
import {UserDetailsForOneItem} from '../pages/services/user';

const UserItem = ({users}:UserDetailsForOneItem) => {
    return(<ul className="containerForItems">
  {users.map((el)=> (<li key={el.id} className="userItem">
		<Link href={`/users/${el.id}`} className="userItemLink">
					<p>{el.id}</p>
					<p >{`${el.firstName} ${el.lastName}`}</p>
					</Link>
		<Image alt='image' src={el.image} width={100} height={100}/>
	 </li>)
	 )}
    </ul>)
}

export default UserItem;