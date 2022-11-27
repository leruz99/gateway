const auth_api = "https://auth-servicetub.onrender.com";
const cart_api_url = "https://cart-serviceutb.onrender.com";
const wishlist_api_url = "https://wishlist-serviceutb.onrender.com";
const stock_api_url = "https://stock-serviceutb.onrender.com";

module.exports = {auth_api, cart_api_url,wishlist_api_url, stock_api_url};



/*
* ROUTES
* -- Auth API --
* POST  /login                             [applications/json] {
*                                                               "email":"",
*                                                               "password":""
*                                                               }
*
* POST  /refresh                           [applications/json] {
*                                                               "refresh:":""
*                                                               }
*
* POST  /verifyToken                       [applications/json] {
*                                                               "token":""
*                                                               }
*
* GET   /user/:id
*
* POST  /user/create/                      [applications/json] {
*                                                               "username"    : "",
*                                                               "password"    : "",
*                                                               "email"       : "",
*                                                               "first_name"  : "",
*                                                               "last_name"   : "",
*                                                               "profile_pic" : null,
*                                                               "birth_date"  : null
*                                                               }
*
* PATCH /user/modify/:id                   [applications/json] {
*                                                               "username"    : "",
*                                                               "password"    : "",
*                                                               "email"       : "",
*                                                               "first_name"  : "",
*                                                               "last_name"   : "",
*                                                               "profile_pic" : null,
*                                                               "birth_date"  : null
*                                                               }
*
* -- Cart API --
*
* POST  /cart?id_client=int                 [params]         
*
* PUT   /cart/add_product/:id_client        [application/json]  {
*                                                               "id_prod":int,
*                                                               "name":"",
*                                                               "description":"",
*                                                               "type":"" (H, L, I),
*                                                               "quantity": int,
*                                                               "price": int,
*                                                               "product_pic":"",
*                                                               "cart_quantity": default=1 
*                                                               }
*
*
* PUT   /cart/remove_product/:id_client/:id_prod       [params]
*
* PUT   /cart/increase_product/:id_client/:id_prod     [params]
*
* PUT   /cart/decrease_product/:id_client/:id_prod     [params]
*
*
* GET   /cart
*
* GET   /cart/:id_client
*
*
* -- Wishlist API --
*
* POST  /wish_list?id_client=int                 [params]         
*
* PUT   /wish_list/add_product/:id_client        [application/json]  {
*                                                               "id_prod":int,
*                                                               "name":"",
*                                                               "description":"",
*                                                               "type":"" (H, L, I),
*                                                               "quantity": int,
*                                                               "price": int,
*                                                               "product_pic":""
*                                                               }
*
*
* PUT   /wish_list/remove_product/:id_client/:id_prod       [params]
*
*
*
* GET   /wish_list
*
* GET   /wish_list_client/:id_client
*
*
*
*
* -- Stock API --
*
* POST  /products                             [form-data]         {
*                                                                  "Name": "",
*                                                                  "Desc": "",
*                                                                  "Type": "" (H, L, I),
*                                                                  "Quantity": int,
*                                                                  "Price": int
*                                                                  "Product_pic": null,
*                                                                  "Active": false by default,                                 
*                                                                  "Provider_id": "No provider" by default or null,
*                                                                  "Provider_id_prod": 0 by default or null
*                                                                 }
*
* POST  /products/addFromProvider?name=<Provider name>&id_prod=<id_prod in provider>&quantity=<how many i want>   [params]
*                                                               
*
* GET   /products
*
* GET   /products/:id
*
* GET   /products/active/:id
*
* GET   /products/popular
*
* GET   /products/active
*
* GET   /products/type?type=<type of product> (Hogar, Industrial, Limpieza)
*
* GET   /products/search?name=<name of the product you're looking for>
*
*
* DELETE /products/:id                         [params] 
*                                                           
*
* PUT  /products                              [application/json] {
*                                                               "id": int,
*                                                               "Name": "",
*                                                               "Desc": "",
*                                                               "Type": "", (H, L, I)
*                                                               "Quantity": int,
*                                                               "Price": int,
*                                                               "Provider_id": "",
*                                                               "Product_pic": null or a new one,
*                                                               "Active": bool (true, false),
*                                                               "Provider_id_prod": int
*                                                               }
*
*
*/
