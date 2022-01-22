import SparrowChangeMentTicketsArtifact from "./abi/ticket/artifacts/contracts/SparrowChangeMentTickets.sol/SparrowChangeMentTickets.json";
import KIP37Contract from "./standard/KIP37Contract";

class TicketContract extends KIP37Contract {

    constructor() {
        super("0x27d533d6fcc846ed00e11be4289ae79db750f299", SparrowChangeMentTicketsArtifact.abi);
    }
}

export default new TicketContract();
