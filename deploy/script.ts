

import * as ethers from "ethers";

async function run(){
    const Mnemonic = ""
    const wallet_zk_pk = await ethers.Wallet.fromMnemonic(Mnemonic);
    console.log("key:",await wallet_zk_pk.privateKey);
}

run();