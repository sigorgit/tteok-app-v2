import { BigNumber } from "@ethersproject/bignumber";
import InjeolmiPriceEstimator from "./abi/injeolmi/artifacts/contracts/InjeolmiPriceEstimator.sol/InjeolmiPriceEstimator.json";
import Contract from "./Contract";

class InjeolmiPriceEstimatorContract extends Contract {

    constructor() {
        super("0xf8d9616D4AF2C895D43D69847a64b27f3B827Cb7", InjeolmiPriceEstimator.abi);
    }

    public async estimatePos(amountIn: BigNumber): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("estimatePos", amountIn));
    }
}

export default new InjeolmiPriceEstimatorContract();
