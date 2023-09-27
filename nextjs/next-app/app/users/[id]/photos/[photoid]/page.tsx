import React from "react";

interface props {
  params: { id: number; photoid: number };
}

const UserPhotosPage = ({ params: { id, photoid } }: props) => {
  return (
    <div>
      photo {photoid} id {id}
    </div>
  );
};
export default UserPhotosPage;
