import {ApolloClient,InMemoryCache} from "@apollo/client"
import { HttpLink } from "@apollo/client";
const apollo=new ApolloClient({
link: new HttpLink({uri:"http://localhost:3005/graphql"}),
cache:new InMemoryCache(),
defaultOptions:{
    watchQuery:{
        fetchPolicy:"cache-and-network"
    }
}
})
export default apollo;