import React, { useEffect, useRef, useState } from "react";
import { SubmitImageThumbnail, SubmitImageButton } from "../Main.styled";

function SubmitImage({updateUrl}) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  let [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "ddrpwfpcj",
        uploadPreset: "z1uxy0bv",
      },
      function (error, result, widget) {
        console.log("hi");
        if (result?.info?.secure_url) {
          console.log(result?.info?.secure_url);
          setImageUrl(result?.info?.secure_url);
          updateUrl(result?.info?.secure_url);
        }
      }
    );
  }, []);
  return (
    <>
      
      
      {imageUrl==='' ? <SubmitImageButton onClick={() => widgetRef.current.open()}>Upload</SubmitImageButton> : <SubmitImageThumbnail>
        <div><img src={imageUrl} alt="" /></div>
      </SubmitImageThumbnail>}
    </>
  );
}

export default SubmitImage;
