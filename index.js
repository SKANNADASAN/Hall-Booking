const express = require("express")
const PORT = 9000;
const app = express();
app.use(express.json())

const hallData = [
    {
        id: "1",
        numberOfSeats: 100,
        amenities: ["AC","chairs","discolights"],
        price: 5000,
        ifBooked: "true",
        customerName: "Kannadasan",
        date: "20-aug-2023",
        startTime: "20-aug-2023 at 12pm",
        endTime: "21-aug-2023 at 11am",
        RoomId: 201,
        RoomName: "duplex",
    },
    {
        id: "2",
        numberOfSeats: 100,
        amenities: ["AC","chairs","discolights"],
        price: 5000,
        ifBooked: "false",
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
        RoomId: 202,
        RoomName: "duplex",
    },
    {
        id: "3",
        numberOfSeats: 50,
        amenities: ["AC","chairs"],
        price: 3000,
        ifBooked: "false",
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
        RoomId: 203,
        RoomName: "classic",
    },
    {
        id: "4",
        numberOfSeats: 50,
        amenities: ["AC","chairs"],
        price: 3000,
        ifBooked: "false",
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
        RoomId: 203,
        RoomName: "classic",
    }, 
    {
        id: "3",
        numberOfSeats: 50,
        amenities: ["AC","chairs"],
        price: 3000,
        ifBooked: "flase",
        customerName: "",
        date: "",
        startTime: "",
        endTime: "",
        RoomId: 203,
        RoomName: "classic",
    },        
    {
        id: "4",
        numberOfSeats: 100,
        amenities: ["AC","chairs","discolights"],
        price: 5000,
        ifBooked: "true",
        customerName: "vinoth",
        date: "20-aug-2023",
        startTime: "21-aug-2023 at 12pm",
        endTime: "22-aug-2023 at 11am",
        RoomId: 204,
        RoomName: "duplex",
    },        
    {
        id: "5",
        numberOfSeats: 200,
        amenities: ["AC","chairs","discolights","buffet"],
        price: 9000,
        ifBooked: "true",
        customerName: "rajiv",
        date: "22-aug-2023",
        startTime: "23-aug-2023 at 12pm",
        endTime: "24-aug-2023 at 11am",
        RoomId: 205,
        RoomName: "suite",
    }, 


]
//get request logic and method
app.get("/",(req,res)=>{
    res.send("welcome to hall ticket booking")
})

app.get("/hall-details",(req,res)=>{
     //to check the details of the booked rooms logic using request.query 
    const{roomtype,ifBooked} = req.query;
    console.log(roomtype);
    console.log(ifBooked);
    let filterHalls
    if(roomtype) {
        filterHalls = hallData.filter((hall)=>hall.RoomName === roomtype)
    }
    return res.send(hallData)
})
app.post("/add/hall-details",(req,res)=>{
    const newHall = {
        id: hallData.length + 1,
        numberOfSeats:req.body.numberOfSeats,
        amenities: req.body.RoomId,
        amenities: req.body.amenities,
        price:req.body.price,
        ifBooked: req.body.ifBooked,
        customerName:req.body.customerName,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        RoomId:req.body.RoomId,
        RoomName: req.body.RoomName,
    };
    console.log(req.body)
    hallData.push(newHall)
    return res.send(hallData)
})

app.put("/edit/hall-details/:id",(req,res)=>{
    const {id} = req.params;
    const halls = hallData.find((hall)=>hall.id === id);

    if(halls.ifBooked === "true"){
        res.status(400).send("This room is already booked");
        return;
    }else halls.customerName = req.body.customerName;
    halls.date = req.body.date;
    halls.startTime = req.body.startTime;
    halls.endTime = req.body.endTime;
    res.send(halls);

})
app.listen(PORT, () => console.log(`Server Running in localhost:${PORT}/hall-details`, PORT));
