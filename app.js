const { create } = require("ipfs-http-client");
const fs = require("fs")
async function ipfsClient() {
    const ipfs = await create(
        {
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https"
        }
    );
    return ipfs;
}



async function saveFile() {

    let ipfs = await ipfsClient();

    let data = fs.readFileSync("./a.jpg")
    let options = {
        warpWithDirectory: false,
        progress: (prog) => console.log(`Saved :${prog}`)
    }
    let result = await ipfs.add(data, options);
    console.log(result)
}
saveFile()
