"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_js_1 = __importDefault(require("msg.js"));
const skyrouter_1 = require("skyrouter");
const superagent_1 = __importDefault(require("superagent"));
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Classic_1 = __importDefault(require("./view/Classic"));
const Home_1 = __importDefault(require("./view/Home"));
const Housedeeds_1 = __importDefault(require("./view/Housedeeds"));
const Introduce_1 = __importDefault(require("./view/Introduce"));
const Junior_1 = __importDefault(require("./view/Junior"));
const Layout_1 = __importDefault(require("./view/Layout"));
const AddMemeNFT_1 = __importDefault(require("./view/memeNFT/AddMemeNFT"));
const MemeNFT_1 = __importDefault(require("./view/memeNFT/MemeNFT"));
const SparrowCustom_1 = __importDefault(require("./view/SparrowCustom"));
const SparrowHonor_1 = __importDefault(require("./view/SparrowHonor"));
const Sparrows_1 = __importDefault(require("./view/Sparrows"));
(async () => {
    msg_js_1.default.language = BrowserInfo_1.default.language;
    msg_js_1.default.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skyrouter_1.SkyRouter.route("**", Layout_1.default, ["classic"]);
    skyrouter_1.SkyRouter.route("", Home_1.default);
    skyrouter_1.SkyRouter.route("introduce", Introduce_1.default);
    skyrouter_1.SkyRouter.route("junior", Junior_1.default);
    skyrouter_1.SkyRouter.route("classic", Classic_1.default);
    skyrouter_1.SkyRouter.route("sparrows", Sparrows_1.default);
    skyrouter_1.SkyRouter.route("sparrows/{id}", SparrowCustom_1.default);
    skyrouter_1.SkyRouter.route("housedeeds", Housedeeds_1.default);
    skyrouter_1.SkyRouter.route("meme-nft", MemeNFT_1.default);
    skyrouter_1.SkyRouter.route("meme-nft/add", AddMemeNFT_1.default);
    skyrouter_1.SkyRouter.route("sparrow-honor", SparrowHonor_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map