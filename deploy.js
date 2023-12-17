const hre = require("hardhat");
const abi = require("../abi.json");

const USDT = "0x55d398326f99059fF775485246999027B3197955"; // example
const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

async function main() {
    const MyContract = await ethers.getContractFactory("PancakeRouter");
    const contract = MyContract.attach("0x10ED43C718714eb63d5aA57B78B54704E256024E");

    let previousPrice = await contract.getAmountsOut(10000000, ["0x55d398326f99059ff775485246999027b3197955", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"]);
  console.log(`\x1b[1m${previousPrice[1]}\x1b[0m`)

  async function cv() {
    let currentPrice = await contract.getAmountsOut(10000000, ["0x55d398326f99059ff775485246999027b3197955", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"]);

    if (previousPrice > currentPrice) {
        console.log(`\x1b[36m БЫЛО: \x1b[1m\x1b[32m${previousPrice[1]}\x1b[\x1b\[0m → \x1b[35m СТАЛО: \x1b[1m\x1b[33m${currentPrice[1]}\x1b[0m - \x1b[1m\x1b[31mУПАЛ\x1b[0m`);
    } else if (previousPrice < currentPrice) {
        console.log(`\x1b[36m БЫЛО: \x1b[1m\x1b[33m${previousPrice[1]}\x1b[\x1b\[0m → \x1b[35m СТАЛО: \x1b[1m\x1b[32m${currentPrice[1]}\x1b[0m - \x1b[32mВЫРОС\x1b[0m`);
    }

    previousPrice = currentPrice;
  }
    setInterval(cv, 5000);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
