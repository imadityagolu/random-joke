const express = require("express");
const app = express();

const axios = require("axios");

require("dotenv").config();
const PORT = 8080;

app.use("/api/v1/jokes", async (req, res) => {

    try {
        const response = await axios.get("http://api.api-ninjas.com/v1/dadjokes", {
            headers: {
                "X-Api-Key": "+fTwkKEBWuTo3kaeI0qF+Q==uUJ3GIm2qotopcPF",
            },
        });

    if(response.data && response.data.length > 0){
        console.log("Api is working !!")
        res.status(200).json({
            success: true,
            j0ke: response.data[0].joke,
        });
    }
    else{
        console.log("No joke available")
        res.status(404).json({
            success: false,
            joke: "No joke available",
        });
    }

    } catch(error){
    console.log("Server/Api is not working")
    res.status(500).json({
        status: false,
        joke: "Server/Api is not working",
    });
    }

})

app.listen(PORT, () => { console.log(`server is running at port - http://localhost:${PORT}/api/v1/jokes`) });
