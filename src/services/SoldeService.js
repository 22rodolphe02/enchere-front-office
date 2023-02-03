import {api} from "../utils/api";

export async function listRequestNonValid(){
    return (await api.get("/api/projetEnchere/soldes/depot-non-valid")).data
}

export async function updateNonValid(data){
    return (await api.post("/api/projetEnchere/soldes/update", data)).data
}
