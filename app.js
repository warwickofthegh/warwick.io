// get items from database
async function getItems(){
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

// call get items function and handle return promise
getItems()
    .then(data => createItems(data.items))
    .catch(err => console.log(err));

// create Items and inject into DOM
function createItems(items){

    itemHTML = '';
    items.forEach((item) => {

        //build links html
        let itemLinksHTML = ''
        const links = item.links;
        // add link lis
        if(links){
            links.forEach((link)=>{
                itemLinksHTML += `
                    <li><a href="${link.url}">${link.title}</a></li>
                `;
            });
        } 
        // add ul
        if(links){
            itemLinksHTML = `<ul>${itemLinksHTML}</ul>`;
        }

        // add item
        if(item.type === 'project'){
            itemHTML += `
                <div class="item">
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <p class="body">${item.body}</p>
                    ${itemLinksHTML}
                </div>
            `;
        } else if(item.type === 'image'){
            itemHTML += `
                <div class="item">
                    <img src="${item.imageUrl}" alt="${item.title}">
                </div>
            `;
        }
    })
    //inject items into dom
    document.getElementById('items').innerHTML = itemHTML;
}