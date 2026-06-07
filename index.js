// Question 1: Write a function that accepts a GitHub username as an argument and returns the details of that user if the user exists
async function fetchUser(user) {

    try{

    const response = await fetch(`https://api.github.com/users/${user}`) 
    
    // if (!response.ok? "user not found" : "Here is your search result" ){
    //     console.log('result')
    // }

    if (!response.ok || response.status === 404){
        throw new Error(`User not found, status:${response.status}`)
    }

    const data = await response.json()
    return data;

    console.log(data)


    } catch(error){
        console.error(`Error finding user:`, error.message)
        return null;
    }

}

// testing the function

async function searchUser(){

     await fetchUser('emeka56');
}

searchUser()

// test unrelated kindly ignore

// async function google(search){
//     try{

//     const response = fetch(`https://www.google.com`);

//     if (response.status === 404){
//         console.log(`Search not found`)
//     }

//     let data = (await response).json();
//     return data;

//     console.log(data);

//     } catch(error){
//         console.error(`You got an error:`, error.message)
//     }
// }

// async function search(){
//     await google("how to bake a cake");

// }

// search()







// Question 2: Write a class named KCStore that has "products" as it's property. It should also have methods to add, update, view and delete products.

class KCStore {
    
    constructor(products) {
        this.products = [];
    }

    // to add products

    addProducts(product){
        this.products.push(product)
        // return `Product:"${product}" added`

        return console.log(`${product}: added`)
    }

    // view the products added

    viewProducts(products){
        if(this.products.length === 0){
            return "No products found"
        }

        return this.products;
    }

    // updating the products added

    updateProducts(id, products){
        const newProduct = this.products.find(item => item.id === id);
        
        if(!products){
            return console.log("Product not available")
        }else{
            newProduct = this.products.push(products);
        }

        console.log(id, newProduct)
    }

    // Delete product

    deleteProduct(id){
        const index = this.products.find(p => p.id === id);
        if(index < this.products){
            return "Product not found";

        }else{
            this.products.splice(index, 1);
            return `Product ${id}:  deleted successfully`
        }
    }
}

// testing constructor

const test = new KCStore();

test.addProducts('laptop')
test.addProducts('Console')
test.addProducts('phone')
test.addProducts('sax')

test.updateProducts('sthone')

console.log(test.viewProducts())
console.log(test.deleteProduct(1))
console.log(test.viewProducts())