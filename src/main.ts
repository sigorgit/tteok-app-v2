import { SkyRouter } from "skyrouter";
import Layout from "./view/Layout";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Introduce from "./view/Introduce";
import Junior from "./view/Junior";
import Classic from "./view/Classic";
import SparrowNFT from "./view/sparrowNFT/SparrowNFT";
import AddSparrowNFT from "./view/sparrowNFT/AddSparrowNFT";

(async () => {

    SkyRouter.route("**", Layout, ["classic"]);
    SkyRouter.route("", Home);

    SkyRouter.route("introduce", Introduce);
    SkyRouter.route("junior", Junior);
    SkyRouter.route("classic", Classic);

    SkyRouter.route("sparrow-nft", SparrowNFT);
    SkyRouter.route("sparrow-nft/add", AddSparrowNFT);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();