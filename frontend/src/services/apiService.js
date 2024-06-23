//import { RpcfProvider } from 'starknet';

//const provider = new RpcProvider({ sequencer: { network: constants.NetworkName.SN_GOERLI } }); // for testnet

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async () => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'user', password: 'password' })
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};

export const mintToken = async (userId) => {
    // Simulate a successful minting process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Mint successful");
      }, 1000);
    });
  };