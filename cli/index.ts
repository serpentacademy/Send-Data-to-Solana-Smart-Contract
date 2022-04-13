import * as web3 from "@solana/web3.js";
const BN = require("bn.js");

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

async function main(){
    const key: Uint8Array = Uint8Array.from([37,30,196,21,64,154,129,116,201,133,235,192,157,250,87,89,184,180,36,36,250,252,155,194,209,56,50,98,156,17,90,101,159,89,124,15,34,160,118,213,160,18,86,47,143,31,196,59,128,208,202,239,158,219,219,208,45,103,65,207,77,24,16,233]);
    const signer = web3.Keypair.fromSecretKey(key);
    let programId: web3.PublicKey = new web3.PublicKey("3pnqvLvgiSvSZxDiqtnraGG1tWNBPxyiwdrbKd8Kxhs5");
    
    const data_to_send: Buffer = Buffer.from(
            
        Uint8Array.of(0,
       ...new BN(257).toArray("le", 8))

        );

    let transaction: web3.Transaction = new web3.Transaction();

    transaction.add(
        new web3.TransactionInstruction({
            keys: [],
            programId,
            data: data_to_send
        })
    );
    await web3
    .sendAndConfirmTransaction(connection, transaction, [signer])
    .then((sig)=> {
        console.log("sig: {}", sig);
    });
}

main();