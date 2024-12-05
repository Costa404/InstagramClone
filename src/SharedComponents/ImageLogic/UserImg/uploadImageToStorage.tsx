import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

// Função para fazer o upload da imagem
export const uploadImageToStorage = async (
  file: File,
  imageKey: string
): Promise<string | null> => {
  if (!file) {
    console.error("No file provided for upload.");
    return null;
  }

  try {
    const storageRef = ref(storage, imageKey);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await new Promise<void>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`, snapshot.state);
        },
        (error) => {
          console.error("Error during upload:", error);
          reject(error);
        },
        () => {
          console.log("Upload completed successfully.");
          resolve();
        }
      );
    });

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error during image upload:", error);
    return null;
  }
};
