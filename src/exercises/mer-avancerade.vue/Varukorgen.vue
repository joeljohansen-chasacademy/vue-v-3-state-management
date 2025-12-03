<!--
Övning 5: E-handel med varukorg och checkout

Återskapa typ det exemplet som vi gick igenom under lektionen (där har ni också ett bra facit om ni fastnar).
Denna övning kan man ju också se som en del av den examinerande uppgiften så om man löser denna så har man löst en del av uppgiften. :)

Uppgifter:
1. Skapa tre stores:

   stores/products.ts:
   - State: products (array), loading, error
   - Product: { id, name, price, description, category }
   - Actions: fetchProducts() (mocka)
   - Getters: getProductById(id)

   stores/cart.ts:
   - State: items (array med { productId, quantity })
   - Getters: 
     * cartItems - items med full produktinfo från useProductStore
     * totalPrice - summa
     * itemCount - totalt antal produkter
   - Actions: addToCart(productId), removeFromCart(productId), 
              updateQuantity(productId, quantity), clearCart()

   stores/checkout.ts:
   - State: step (1-3), shippingInfo (object), orderComplete (boolean)
   - Actions: nextStep(), prevStep(), submitOrder()

2. Skapa routes:
   - / → ProductListView (grid med produkter)
   - /product/:id → ProductDetailView (en produkt + "Lägg till i varukorg")
   - /cart → CartView (varukorg med quantity-inputs)
   - /checkout → CheckoutView (3 steg: shipping, payment, review)
   - /confirmation → ConfirmationView

3. I cartItems getter (cart.ts):
   - Använd useProductStore
   - Map items till: { ...product, quantity }

4. Checkout-steg:
   - Steg 1: Formulär för namn, adress (spara i shippingInfo)
   - Steg 2: Betalning (bara mockat formulär)
   - Steg 3: Granska order (visa cart + shipping info)
   - submitOrder(): sätt orderComplete = true, clearCart(), navigera till /confirmation

5. Bonus:
   - Spara cart till localStorage
   - Visa cart-badge i header (App.vue)
   - Navigation guards: blockera /checkout om cart är tom

Tips:
- I cartItems getter: return items.value.map(item => ({ 
    ...productStore.getProductById(item.productId), 
    quantity: item.quantity 
  }))
- Använd v-model för quantity: <input v-model.number="item.quantity">
-->

<script setup lang="ts">
// Startkod - skapa views och stores enligt instruktionerna!
</script>

<template>
  <div>
    <h1>Övning 5: E-handel</h1>
    <p>Skapa stores, views och router enligt instruktionerna ovan.</p>
    <p>Detta är den mest avancerade övningen (men det är bara att kika på facit om ni fastnar :))</p>
  </div>
</template>