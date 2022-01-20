import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Wallet from "./klaytn/Wallet";
import Classic from "./view/Classic";
import Home from "./view/Home";
import Introduce from "./view/Introduce";
import Junior from "./view/Junior";
import Layout from "./view/Layout";
import AddMemeNFT from "./view/memeNFT/AddMemeNFT";
import MemeNFT from "./view/memeNFT/MemeNFT";
import SparrowCustom from "./view/SparrowCustom";
import SparrowHonor from "./view/SparrowHonor";
import Sparrows from "./view/Sparrows";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout, ["classic"]);
    SkyRouter.route("", Home);

    SkyRouter.route("introduce", Introduce);
    SkyRouter.route("junior", Junior);
    SkyRouter.route("classic", Classic);
    SkyRouter.route("sparrows", Sparrows);
    SkyRouter.route("sparrows/{id}", SparrowCustom);

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