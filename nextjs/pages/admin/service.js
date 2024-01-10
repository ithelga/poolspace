import Head from 'next/head';
import Header from '@/components/pool/header';
import styles from '@/styles/pif/blocks.module.css';
import React, {useState} from "react";
import UserDistrib from "@/components/diagrams/UserDistrib";
import PoolBoard from "@/components/pool/PoolBoard";
import FondEdit from "@/components/form/FondEdit";
import PoolCreate from "@/components/form/PoolCreatre";
import PoolEdit from "@/components/form/PoolEdit";
import TransactionAdd from "@/components/form/TransactionAdd";
import UserEdit from "@/components/form/UserEdit";
import FondCreate from "@/components/form/FondCreate";

const AdminService = () => {

    return (
        <>
            <Head>
                <title>AdminFond</title>
            </Head>


            <UserEdit></UserEdit>
            <FondCreate></FondCreate>


        </>
    );
};

export default AdminService;