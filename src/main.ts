import { SkyRouter } from "skyrouter";
import Home from "./view/Home";

(async () => {

    SkyRouter.route("", Home);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();