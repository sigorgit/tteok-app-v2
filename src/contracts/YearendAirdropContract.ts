import YearendAirdropArtifact from "./abi/injeolmi-v2/artifacts/contracts/YearendAirdrop.sol/YearendAirdrop.json";
import Contract from "./Contract";

class YearendAirdropContract extends Contract {

    constructor() {
        super("0x8103Bf97Fa59210e30084442d7141e1a3e2D76c0", YearendAirdropArtifact.abi);
    }

    public async toReceive(address: string): Promise<boolean> {
        return await this.runMethod("toReceive", address);
    }

    public async receiveNew(): Promise<void> {
        await this.runWalletMethod("receiveNew");
    }
}

export default new YearendAirdropContract();
