
const express = require('express');
const app= express();



const users = [
  {
    name: "john",
    kidney: [
      {
        healthy: false,
      },
     
    ],
  },
];


app.use(express.json());

app.get("/",function(req,res){
    const johnKidney =users[0].kidney;
    const numberofKidneys = johnKidney.length;
 let  numberofhealthykidenys = 0;
for(let i=0; i<johnKidney.length;i++){
    if(johnKidney[i].healthy){
        numberofhealthykidenys=numberofhealthykidenys + 1;
    }
}
const numberofunhealthykidenys =numberofKidneys - numberofhealthykidenys;
res.json(
    {
        numberofKidneys,
        numberofhealthykidenys,
        numberofunhealthykidenys

    }
)
});

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidney.push({
        healthy:ishealthy
    })
    res.json(
    {
        msg : "done !"
    }

    )

});

app.put("/",function(req,res){
  for(let i = 0; i<users[0].kidney.length;i++){
    users[0].kidney[i].healthy=true;

  }
  res.json({})
});

app.delete("/",function(req,res){
    const newKidney = [];
    for(let i=0 ; i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    users[0].kidney=newKidney;
    res.json({
        msg:"done"
    })
})

app.listen(3000);
