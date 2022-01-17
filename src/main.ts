import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import { SkyRouter } from "skyrouter";
import Layout from "./view/Layout";
import Wallet from "./klaytn/Wallet";
import Home from "./view/Home";
import Introduce from "./view/Introduce";
import Junior from "./view/Junior";
import Classic from "./view/Classic";
import MemeNFT from "./view/memeNFT/MemeNFT";
import AddMemeNFT from "./view/memeNFT/AddMemeNFT";
import SparrowHonor from "./view/SparrowHonor";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout, ["classic"]);
    SkyRouter.route("", Home);

    SkyRouter.route("introduce", Introduce);
    SkyRouter.route("junior", Junior);
    SkyRouter.route("classic", Classic);

    SkyRouter.route("meme-nft", MemeNFT);
    SkyRouter.route("meme-nft/add", AddMemeNFT);

    SkyRouter.route("sparrow-honor", SparrowHonor);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();