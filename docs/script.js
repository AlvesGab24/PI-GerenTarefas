document.getElementById('go-to-stock').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.stock-container').style.display = 'block';
});

document.getElementById('add-item').addEventListener('click', function() {
    document.getElementById('stock-form').style.display = 'block';
});

document.getElementById('stock-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemBrand = document.getElementById('item-brand').value;
    const itemColor = document.getElementById('item-color').value;
    const itemFabric = document.getElementById('item-fabric').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemCost = document.getElementById('item-cost').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemSold = document.getElementById('item-sold').value;

    const stockList = document.getElementById('stock-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <strong>Nome:</strong> ${itemName} <br>
            <strong>Marca:</strong> ${itemBrand} <br>
            <strong>Cor:</strong> ${itemColor} <br>
            <strong>Tecido:</strong> ${itemFabric} <br>
            <strong>Quantidade:</strong> ${itemQuantity} <br>
            <strong>Valor de Custo:</strong> ${itemCost} <br>
            <strong>Valor de Venda:</strong> ${itemPrice} <br>
            <strong>Vendidas:</strong> ${itemSold}
        </div>
        <button class="delete-btn">Excluir</button>
    `;
    li.querySelector('.delete-btn').addEventListener('click', function() {
        stockList.removeChild(li);
    });
    stockList.appendChild(li);

    document.getElementById('stock-form').reset();
    document.getElementById('stock-form').style.display = 'none';
});
