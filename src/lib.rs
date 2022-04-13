use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,

};

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult{

    let (key, rem)= instruction_data.split_first().unwrap(); 
   
    let value: u64 = rem
    .get(0..8)
    .and_then(|slice| slice.try_into().ok())
    .map(u64::from_le_bytes)
    .unwrap_or(0);

   
    msg!("{:?}", value);
    msg!("Hello World Rust program entrypoint");


    msg!("program id: {}, accounts: {}, instructions: {:?}",
        program_id, 
        accounts.len(),
        instruction_data
    );

    Ok(())
}