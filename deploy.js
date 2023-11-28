const hre = require("hardhat"); 
const USDT = "0x55d398326f99059fF775485246999027B3197955" // example
const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" 
async function main() { 
  const MyContract = await ethers.getContractFactory("PancakeRouter"); 
  const contract = MyContract.attach( 
  "0x..."
); 
 
  let previousPrice = 0; 
    async function price() { 
    let currentPrice = await contract.getAmountsOut(143439734,[USDT, WBNB]) 
  if ( previousPrice > currentPrice ) { 
    console.log(`${currentPrice[1]} Цена упала `) 
  } 
  else if ( previousPrice < currentPrice ) { 
    console.log(`${currentPrice[1]} Цена поднялась`) 
  } 
  else if ( previousPrice = currentPrice ) { 
    console.log(`${currentPrice[1]} Изменений не произошло`) 
  
      previousPrice = currentPrice 
    } 
  } 
    setInterval(factory, 5000); 
} 

main().catch((error) => { 
  console.error(error); 
  process.exitCode = 1; 
})
