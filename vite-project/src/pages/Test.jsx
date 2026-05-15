 export function TestPage() {

  const menu = [
      {
        label: "Home",
      },
      {
        label: "Products",
        children: [
          { label: "Laptops" },
          {
            label: "Phones",
            children: [
              { label: "Android" },
              { label: "iPhone",
                  children: [
                    { label: "iPhone 12" },
                    { label: "iPhone 13" },
                    { label: "iPhone 14" }
                  ]
               }
            ]
          }
        ]
      },
      {
        label: "Contact"
      }
    ];
    
function getLabels(menu) {
let result = [];

  menu.forEach(item => {
    result.push(item.label);

    if (item.children) {
      result = result.concat(getLabels(item.children));
    }
  });

  return result;
}

console.log(getLabels(menu)); // ["Home", "Products", "Laptops", "Phones", "Android", "iPhone", "Contact"]
  

  return (
    <div className="container">
      <h1>Testing Page <br /><br /></h1> 

      <h2>Print Label value as Recusrion way JS <br /><br /></h2> 
      <h3>{getLabels(menu).join(', ')}</h3>
    </div>
  );
}