import { useState, useEffect } from "react";
import { auth, database } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const UsernameDisplay = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const usersCollection = collection(database, 'users');
          const userQuery = query(usersCollection, where('email', '==', user.email));
          const userQuerySnapshot = await getDocs(userQuery);

          userQuerySnapshot.forEach((doc) => {
            const userData = doc.data();
            setUsername(userData.username);
          });
        } else {
          setUsername(''); 
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    });

    return unsubscribe;
  }, []);

  return username;
};

export default UsernameDisplay;
