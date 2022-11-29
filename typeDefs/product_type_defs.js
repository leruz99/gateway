const {gql} = require('apollo-server');
const product_type_defs = gql`

  type Product {


    name:String!
    desc:String!
    type:[String!]!
    quantity:Int!
    price:Int!
    provider_id:String!
    product_pic:String!
    active: Boolean!
    provider_id_prod: Int!

  }
  input ProductInput {
    name: String!
    desc: String!
    type: [String]!
    quantity: Int!
    price: Int!
    provider_id: String!
    product_pic: String!
    active: Boolean!
    provider_id_prod: Int!

  }
  

  type Query {
    getProductById(id:Int!):Product!

  }
  type Mutation {
    updateProduct(product:ProductInput!,id:Int!): Product!
   
  }
  
  
`;

module.exports = product_type_defs;


//getProducts(): [Product]!
//getProductsActive(): [Product]!
//getProductsPopular():[Product]!

