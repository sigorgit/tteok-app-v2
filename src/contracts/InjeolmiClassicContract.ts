import InjeolmiArtifact from "./abi/injeolmi-classic/artifacts/contracts/Injeolmi.sol/Injeolmi.json";
import KIP7Contract from "./standard/KIP7Contract";

class InjeolmiClassicContract extends KIP7Contract {

    constructor() {
        super("0x9CFc059F64D664F92f3d0329844B8ccca4E5215B", InjeolmiArtifact.abi);
    }
}

export default new InjeolmiClassicContract();
