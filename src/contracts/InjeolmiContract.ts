import InjeolmiArtifact from "./abi/injeolmi/artifacts/contracts/Injeolmi.sol/Injeolmi.json";
import KIP7Contract from "./standard/KIP7Contract";

class InjeolmiContract extends KIP7Contract {

    constructor() {
        super("0x0268dbed3832b87582B1FA508aCF5958cbb1cd74", InjeolmiArtifact.abi);
    }
}

export default new InjeolmiContract();
