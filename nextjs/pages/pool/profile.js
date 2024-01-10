import Head from 'next/head';
import Header from '@/components/pool/header';
import styles from '@/styles/pif/blocks.module.css';
import React, {useEffect, useState} from "react";
import {useAppContext} from "@/components/AppProvider";
import {useRouter} from "next/router";
import UserBoard from "@/components/pool/UserBoard";
import TransactionBoard from "@/components/pool/TransactionBoard";
import BalanceBoard from "@/components/pool/BalanceBoard";

const Profile = () => {
    const [user, setUser] = useState(null);

    const router = useRouter();

    const {getUser} = useAppContext();

    useEffect(() => {
        if (getUser() == null) router.push('/pool/login');
        else {
            async function fetchData() {
                try {
                    const response = await fetch('http://localhost:8080/api/users/user', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({user_id: getUser().id, auth_token: getUser().token})
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data);
                        console.log('user: ', data);
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            fetchData();
        }
    }, []);

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>

            <Header/>

            <div className={styles.container}>
                {getUser() != null && (<div>ID: {getUser().id}</div>)}
                {user != null && (
                    <>
                        <div>name: {user.name}</div>
                        <div>surname: {user.surname}</div>
                    </>
                )}
            </div>
            <UserBoard></UserBoard>
            <BalanceBoard></BalanceBoard>
            <TransactionBoard></TransactionBoard>

        </>
    );
};

export default Profile;