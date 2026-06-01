let data, customers;

async function init_customers(){
let link = "https://obscure-space-waddle-4jw47r569j4wfj4vp-8000.app.github.dev/";
let route = "pokemon";
info = await fetch(link + route);
customers = await info.json();
generateCards_customers(customers);
console.log(customers);
}

function generateCards_customers(customers){
  let output = document.getElementById("centerpanel");
  let build = "";
  for(let i=0; i<customers.length; i++){
    let customer = customers[i];
    build += '<div class="card">';
    build += `<h1> Name: ${customer.Name}</h1>`;
    build += `<h3> Main type: ${customer.Type}</h3>`;
    build += `<h4> Weight: ${customer.Weight}lbs</h4>`;
    build += `<h4> Height: ${customer.Height} meters</h4>`;
    build += `<img src="images/${customer.Name}.png">`;
    console.log(`images/${customer.Name}.png`);
    build += `<hr>`;
    build += '</div>'
  }
   output.innerHTML = build;

}

function filter_customers(){
  let Name = document.getElementById("filter").value;
  console.log(Name);

  let new_names = [];
  for(let i = 0; i<customers.length; i++){
    if(customers[i].Name == Name){
      new_names.push(customers[i]);
    }
  }
  generateCards_customers(new_names)
}