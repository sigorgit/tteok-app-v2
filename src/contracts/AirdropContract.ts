import AirdropArtifact from "./abi/injeolmi/artifacts/contracts/Airdrop.sol/Airdrop.json";
import Contract from "./Contract";

class AirdropContract extends Contract {

    constructor() {
        super("0x1dA9E7adfB6817D42b1c9a5321992B1EF97701Ab", AirdropArtifact.abi);
    }
}

export default new AirdropContract();
