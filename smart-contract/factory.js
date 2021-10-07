import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x83C3B38d08F60aa74cF1eA054248447c38aCb634"
);

export default instance;
