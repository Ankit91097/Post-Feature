var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_URL,
  privateKey: process.env.IMAGEKIT_PRIVATE_URL,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});

async function uploadFile(file, fileName) {
  const result = await imagekit.upload({
    file, //required
    fileName, //required
  });
  return result;
}

module.exports = uploadFile;