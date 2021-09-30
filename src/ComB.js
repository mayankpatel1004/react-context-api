import React,{useContext} from 'react';
import { FirstName, LastName } from './App';

export default function ComB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <>
          <h1>My Name :  {fname} {lname}</h1>
        </>
    )
}