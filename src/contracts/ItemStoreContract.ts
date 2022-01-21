import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { constants } from "ethers";
import Wallet from "../klaytn/Wallet";
import ItemStoreArtifact from "./abi/item-store/artifacts/contracts/ItemStore.sol/ItemStore.json";
import Contract from "./Contract";
import InjeolmiContract from "./InjeolmiContract";

class ItemStoreContract extends Contract {

    constructor() {
        super("0x1F7DD89aEd117F8F6390aA5d52f3dA098c1Cc4F8", ItemStoreArtifact.abi);
    }

    public async itemPrices(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("itemPrices", id));
    }

    public async nonces(address: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("nonces", address));
    }

    public async buyItems(id: BigNumberish) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const price = await this.itemPrices(id);
            if ((await InjeolmiContract.allowance(owner, this.address)).lt(price)) {
                await InjeolmiContract.approve(this.address, constants.MaxUint256);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("buyItems", [id]);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("buyItems", [id]);
            }
        }
    }
}

export default new ItemStoreContract();
