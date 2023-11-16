import { collection, query, where, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';

const checkIfEmailExists = async (email) => {
  try {
    const usersCollection = collection(database, 'users');
    const userQuery = query(usersCollection, where('email', '==', email.toLowerCase()));
    const userQuerySnapshot = await getDocs(userQuery);
    if (userQuerySnapshot.size > 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};

export default checkIfEmailExists;
