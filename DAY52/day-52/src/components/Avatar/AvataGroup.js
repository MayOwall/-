import React from "react";

const AvatarGroup = ({ children, shape = "circle", size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      if (React.isValidElement(element)) {
        return true;
      }
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        // style: {

        //  }
      });
    });

  return <div>{avatars}</div>;
};

export default AvatarGroup;
