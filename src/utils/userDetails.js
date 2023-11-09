import React, { useState, useEffect } from "react";
import { auth, database } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import {Profile } from "../atoms/index.js";
const UserDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const usersCollection = collection(database, "users");
          const userQuery = query(usersCollection, where("email", "==", user.email));
          const userQuerySnapshot = await getDocs(userQuery);

          userQuerySnapshot.forEach((doc) => {
            const userData = doc.data();
            setName(userData.name); 
            setEmail(userData.email); 
          });
        } else {
          setName("");
          setEmail("");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Profile name={name} email={email} />
    </div>
  );
};

export default UserDetails;
