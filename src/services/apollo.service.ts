import { GRAPH_BASE_URL } from "@/config";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from 'cross-fetch';

class ApolloService {
    private static instance: ApolloService;
    private client: ApolloClient<any>;

    constructor (baseURL: string) {
        this.client = new ApolloClient({
            link: new HttpLink({
                uri: baseURL,
                fetch
            }),
            cache: new InMemoryCache()
        });
    }

    public getClient = () => {
        return this.client;
    }


    static getInstance = () => {
        if (!this.instance) this.instance = new ApolloService(GRAPH_BASE_URL)

        return this.instance
    }
}

export default ApolloService