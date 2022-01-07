import { BigNumber } from "@ethersproject/bignumber";
import InitialSaleArtifact from "./abi/injeolmi-v2/artifacts/contracts/InitialSale.sol/InitialSale.json";
import Contract from "./Contract";

class InitialSaleContract extends Contract {

    constructor() {
        super("0x4e911c7284981Bf6Fc0A6f4cb3d7790d7A43D413", InitialSaleArtifact.abi);
    }

    public async total(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("total"));
    }

    public async bought(address: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("bought", address));
    }

    public async buy(value: BigNumber) {
        const amount = value.mul("1000000000000000000").div("144374553246136709");
        await this.runWalletMethodWithValue(amount.mul("144374553246136709").div("1000000000000000000"), "buy", amount);
    }
}

export default new InitialSaleContract();
