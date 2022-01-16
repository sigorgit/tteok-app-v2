"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Layout_1 = __importDefault(require("./view/Layout"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Home_1 = __importDefault(require("./view/Home"));
const Introduce_1 = __importDefault(require("./view/Introduce"));
const Junior_1 = __importDefault(require("./view/Junior"));
const Classic_1 = __importDefault(require("./view/Classic"));
const MemeNFT_1 = __importDefault(require("./view/memeNFT/MemeNFT"));
const AddMemeNFT_1 = __importDefault(require("./view/memeNFT/AddMemeNFT"));
(async () => {
    skyrouter_1.SkyRouter.route("**", Layout_1.default, ["classic"]);
    skyrouter_1.SkyRouter.route("", Home_1.default);
    skyrouter_1.SkyRouter.route("introduce", Introduce_1.default);
    skyrouter_1.SkyRouter.route("junior", Junior_1.default);
    skyrouter_1.SkyRouter.route("classic", Classic_1.default);
    skyrouter_1.SkyRouter.route("meme-nft", MemeNFT_1.default);
    skyrouter_1.SkyRouter.route("meme-nft/add", AddMemeNFT_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map