import React, {useEffect, useState} from "react"
import {ethers} from 'ethers'
import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = React.createContext()
const {ethereum} = window;


const createEthereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum)
    const signer = provider.getsigner()
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,
        signer,
        transactionsContract
    })
} 

export const TransactionProvider = ({children}) => {
    return (
        <TransactionContext.Provider value = {{value:'text'}}>
            {children}
        </TransactionContext.Provider>
    )
}

