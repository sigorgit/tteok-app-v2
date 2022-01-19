import superagent from "superagent";

class KlubsLoader {

    public async loadMetadata(addr: string, id: number) {
        let result = await superagent.get(`https://api.klu.bs/v2/pfp/${addr}/${id}/metadata`);
        return result.body;
    }
}

export default new KlubsLoader();
