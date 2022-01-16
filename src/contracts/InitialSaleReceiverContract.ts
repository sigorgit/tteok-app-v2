import InitialSaleReceiverArtifact from "./abi/injeolmi-v2/artifacts/contracts/InitialSaleReceiver.sol/InitialSaleReceiver.json";
import Contract from "./Contract";

class InitialSaleReceiverContract extends Contract {

    constructor() {
        super("0x3483B88A4874c257e87324CBC8Edeb99e75E6902", InitialSaleReceiverArtifact.abi);
    }

    public async received(address: string): Promise<boolean> {
        return await this.runMethod("received", address);
    }

    public async receiveNew(): Promise<void> {
        await this.runWalletMethod("receiveNew");
    }
}

export default new InitialSaleReceiverContract();
