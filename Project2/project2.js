function saveTocrud(event) {
    event.preventDefault();
    const selling = event.target.selling.value;
    const product = event.target.product.value;
    const category = event.target.category.value;
  
    const obj = {
      selling,
      product,
      category
    };
  
    axios
      .post(
        "https://crudcrud.com/api/cb556d3fe6594353b295a29d7515f9e5/customersData",
        obj
      )
      .then((response) => {
        displayOrders(response.data);
        console.log(response);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h4> Something went Wrong!</h4>";
        console.log(err);
      });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(
        "https://crudcrud.com/api/cb556d3fe6594353b295a29d7515f9e5/customersData"
      )
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          displayOrders(response.data[i]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  function displayOrders(obj) {
  
    const childEle = document.createElement("li");
    childEle.textContent = obj.selling + "-" + obj.product + "-" + obj.category;
    const parentElecttronic = document.getElementById("listofelectronic");
    const parentFood = document.getElementById("listoffood");
    const parentSkinCare = document.getElementById("listofskincare");
    if (obj.category === "electronics") {
      parentElecttronic.appendChild(childEle);
    } else if (obj.category === "food") {
      parentFood.appendChild(childEle);
    } else if (obj.category === "skincare") {
      parentSkinCare.appendChild(childEle);
    }
  
    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete Product";
  
    deleteButton.onclick = () => {
      axios
        .delete(
          `https://crudcrud.com/api/cb556d3fe6594353b295a29d7515f9e5/customersData/${obj._id}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      if (obj.category === "electronics") {
        parentElecttronic.removeChild(childEle);
      } else if (obj.category === "food") {
        parentFood.removeChild(childEle);
      } else if (obj.category === "skincare") {
        parentSkinCare.removeChild(childEle);
      }
    };
  
    childEle.appendChild(deleteButton);
  }