import * as web3 from "@solana/web3.js";
const BN = require("bn.js");

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

async function main(){
    const key: Uint8Array = Uint8Array.from(["YOUR PRIVATE KEY"]);
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