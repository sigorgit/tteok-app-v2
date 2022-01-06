import { BigNumber } from "@ethersproject/bignumber";
import InjeolmiPriceArtifact from "./abi/injeolmi-price/artifacts/contracts/InjeolmiPrice.sol/InjeolmiPrice.json";
import Contract from "./Contract";

class InjeolmiPriceContract extends Contract {

    constructor() {
        super("0x6E22cd771d0BBC18501F3113e01fD95947299Ca1", InjeolmiPriceArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }
}

export default new InjeolmiPriceContract();
