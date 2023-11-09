import Dexie from 'dexie'
import { DATABASE, DB_TABLE } from '../constants';
import { useState } from 'react';
import {Navigate, useLocation} from "react-router-dom"

function ProtectedRoute({ children }: any) {

    const [walletExist, SetWalletExist] = useState(false)

    let location = useLocation();

         new Dexie(DATABASE).open().then((db) => {
            db.table(DB_TABLE.SEED_PHRASE).get(1).then((res) => {
                if (res?.phrase) {
                    SetWalletExist(true)
                }

            }).catch((e) => { SetWalletExist(false) })


        }).catch((e) => {
            SetWalletExist(false)
        })


        if (walletExist) {
            return <Navigate to="/app" state={{ from: location}} replace />
        }

        return (children)
    }






export default ProtectedRoute;