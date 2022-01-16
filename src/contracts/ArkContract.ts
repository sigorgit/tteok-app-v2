import { BigNumber, constants } from "ethers";
import ArkArtifact from "./abi/injeolmi-v2/artifacts/contracts/Ark.sol/Ark.json";
import Contract from "./Contract";
import InjeolmiClassicContract from "./InjeolmiClassicContract";

class ArkContract extends Contract {

    constructor() {
        super("0xb532a6A7a5Fbf64DA0FDc1333FBB0EfA83D913D1", ArkArtifact.abi);
    }

    public async records(address: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("records", address));
    }

    public async received(address: string): Promise<boolean> {
        return await this.runMethod("received", address);
    }

    public async sendOld(): Promise<void> {
        await InjeolmiClassicContract.approve(this.address, constants.MaxUint256);
        setTimeout(async () => {
            await this.runWalletMethod("sendOld");
            setTimeout(() => {
                alert("이전 완료 ㅊㅋㅊㅋㅊ 7일부터 언제라도 뉴 인절미를 받아갈 수 있어~~ 천천히왕 ㅎㅎ");
            }, 2000);
        }, 2000);
    }

    public async receiveNew(): Promise<void> {
        await this.runWalletMethod("receiveNew");
    }
}

export default new ArkContract();
