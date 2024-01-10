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
import RoleEdit from "@/components/form/RoleEdit";

const AdminFond = () => {

    return (
        <>
            <Head>
                <title>AdminFond</title>
            </Head>

            <FondEdit></FondEdit>
            <PoolCreate></PoolCreate>
            <PoolEdit></PoolEdit>
            <TransactionAdd></TransactionAdd>
            <RoleEdit></RoleEdit>
        </>
    );
};

export default AdminFond;