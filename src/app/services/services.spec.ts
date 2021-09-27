import { Product } from "../models/product.model";
import { CartService } from "./cart.service";
import { FilterService } from "./products-filter.service";


describe('Services: ', () => {

    describe('cart service (local storage) ', () => {
        let service: CartService;
        let product: Product;
    
        beforeEach((() => {
            service = new CartService();
            product = {
                title: "Test title",
                price: 1199,
                description: "Test description",
                imageUrl: "https://via.placeholder.com/1280x720",
                category: "N/A",
                size: "N/A",
                id: 1
            };        
            service.clearCart();
        }));

        it('should add new item to cart correctly', () => {
            service.addToCart(product);
            const items = service.getItems();
            expect(items.length).toBe(1);
        });
    
        it('should clear cart correctly', () => {
            service.addToCart(product);
            service.clearCart();
            const items = service.getItems();
            expect(items.length).toBe(0);
        });
    
        it('should remove item from cart correctly', () => {
            let items = service.getItems();
            service.addToCart(product);
            service.removeFromCart(0);
            items = service.getItems();
            expect(items.length).toBe(0);
        });
    });

    describe('products filter service ', () => {
        let service: FilterService;
        let product: Product;
    
        beforeEach((() => {
            service = new FilterService();
            product = {
                title: "Test title",
                price: 1010,
                description: "Test description",
                imageUrl: "https://via.placeholder.com/1280x720",
                category: "N/A",
                size: "N/A",
                id: 1
            };        
        }));

        it('should filter items correctly. Cheap filter.', () => {
            const product1 = product;
            const product2 = Object.assign({}, product);
            product2.price = 100;
            product2.id = 4;
            const result = service.transform([product1, product2], 150, 1100);
            console.log(result);
            expect(result.length == 1 && result[0].id === 4).toBeTruthy();
        });

        it('should filter items correctly. Expensive filter.', () => {
            const product1 = product;
            const product2 = Object.assign({}, product);
            product2.price = 2000;
            const result = service.transform([product1, product2], 150, 1000);
            expect(result.length == 2).toBeTruthy();
        });

        it('should filter items correctly. Item is between expensive and cheap.', () => {
            const result = service.transform([product], 10, 1500);
            expect(result.length).toBe(0);
        });

    });

});
