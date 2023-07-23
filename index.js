PARKINGLIST = [{
        link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.78626617386897!2d85.3127465385819!3d27.699365135283028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854a0c1c183%3A0x864be1bcc05db676!2sCivil%20Mall!5e0!3m2!1sen!2snp!4v1690113018853!5m2!1sen!2snp`,
        image: `https://ktmguide.com/wp-content/uploads/2019/09/civil-mall-2.jpg`,
        price: 50,
        name: "Civil Mall"
    },
    {
        link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.1288857746313!2d85.312441406349!3d27.70136439117144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854cfda3e59%3A0x4191b31405936f34!2sKathmandu%20Mall%2C%20Sundhara%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1690113335085!5m2!1sen!2snp`,
        image: "https://thumbs.dreamstime.com/b/shopping-complex-nepal-popularly-known-as-kathmandu-mall-heart-city-sundhara-shopping-complex-kathmandu-mall-108879906.jpg",
        price: 100,
        name: "Kathmandu Mall"
    },
]

function showMap(index){
    document.getElementById("map").src = PARKINGLIST[index].link;
}

const lists = document.getElementById("lists");
for (let i = 0; i<PARKINGLIST.length; i++){
    lists.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${PARKINGLIST[i].image}" class="card-img-top" height=300 alt="image">
    <div class="card-body">
      <h5 class="card-title">Name: ${PARKINGLIST[i].name}</h5>
      <h5 class="card-title">Price: Rs.${PARKINGLIST[i].price}</h5>
      <button onclick="showMap(${i})" class="btn btn-primary">View on Map</button>
    </div>
  </div>`
}

