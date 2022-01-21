import superagent from "superagent";

class KlubsLoader {

    public async loadMetadata(addr: string, id: number) {
        let result = await superagent.get(`https://api.klu.bs/v2/pfp/${addr}/${id}/metadata`);
        return result.body;
    }

    public async refreshMetadata(addr: string, id: number) {
        await superagent.post(`https://api.klu.bs/v2/pfp/${addr}/${id}/metadata/cache`);
    }
}

export default new KlubsLoader();
