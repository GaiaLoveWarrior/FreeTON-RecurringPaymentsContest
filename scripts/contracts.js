const { loadContract } = require("./utils");

const WALLET_CONTRACT_NAME = "MultitokenWallet";
const WALLET_CONTRACT = loadContract(WALLET_CONTRACT_NAME);

const TERMS_CONTRACT_NAME = "SubscriptionTermsV2";
const TERMS_CONTRACT = loadContract(TERMS_CONTRACT_NAME);

const TIMER_CONTRACT_NAME = "OffchainTimer";
const TIMER_CONTRACT = loadContract(TIMER_CONTRACT_NAME);

const ROOT_TIMER_CONTRACT_NAME = "RootOffchainTimer";
const ROOT_TIMER_CONTRACT = loadContract(ROOT_TIMER_CONTRACT_NAME);

const ACCESS_CONTROLL_CONTRACT_NAME = "AccessControll";
const ACCESS_CONTROLL_CONTRACT = loadContract(ACCESS_CONTROLL_CONTRACT_NAME);

module.exports = { 
    WALLET_CONTRACT_NAME, WALLET_CONTRACT, 
    TERMS_CONTRACT_NAME, TERMS_CONTRACT, 
    TIMER_CONTRACT_NAME, TIMER_CONTRACT,
    ROOT_TIMER_CONTRACT_NAME, ROOT_TIMER_CONTRACT,
    ACCESS_CONTROLL_CONTRACT_NAME, ACCESS_CONTROLL_CONTRACT
};