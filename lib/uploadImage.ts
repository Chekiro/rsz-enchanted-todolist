const { storage } = require("@/appwrite");
const { ID } = require("appwrite");

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "6532a242f2752e1f0745",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
