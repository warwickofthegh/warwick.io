async function getItems(){
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

getItems()
    .then(data => createItems(data.items))
    .catch(err => console.log(err));

function createItems(items){
    itemHTML = '';
    items.forEach((item) => {
        console.log(item);
        
        if(item.type === 'project'){
            itemHTML += `
                <div class="item--card">
                    <div class="item--body">
                    ${item.type}
                    </div>
                </div>
            `;
        } else if(item.type === 'image'){
            itemHTML += `
                <div class="item--card">
                    <div class="item--body">
                    ${item.type}
                    </div>
                </div>
            `;
        }


        
    })
    document.getElementById('items').innerHTML = itemHTML;
}