

// function DataInstance(client){
//   let instance = null;
//   function createInstance() {
//       var object = new DataClass(client)
//       return object;
//   }

//   return {
//       getInstance: function () {
//           if (!instance) {
//               instance = createInstance();
//           }
//           return instance;
//       }
//   };
// };

class DataClass{
    constructor(client){
      this.client_shopify = client;
      this.products;
    }
    
    loadData = async () => {
      let data = [];
      await this.client_shopify.product.fetchAll().then((response) => {
        this.products = response
      }).catch(err=>console.log(err));
      let arrayN = [];
      data.forEach(item => {
        let product = {
          'id':item.id,
          'handle':item.handle,
          'description':item.description,
          'onlineStoreUrl':item.onlineStoreUrl,
          'title':item.title,
        }
        product['images']=[]
        item.images.forEach(image => {
          product['images'].push(image.src)
        })
        arrayN.push(product);
      })    
      return data;
  }
};

export const shopify = new DataClass(client);