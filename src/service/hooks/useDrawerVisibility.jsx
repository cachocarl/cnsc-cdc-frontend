import React from "react";

const useDrawerVisibility = () => {
  const [isAddDrawer, setIsAddDrawer] = React.useState(false);
  const [isEditDrawer, setIsEditDrawer] = React.useState(false);
  const [isViewDrawer, setIsViewDrawer] = React.useState(false);

  return {
    add: { visible: isAddDrawer, setVisible: setIsAddDrawer },
    edit: { visible: isEditDrawer, setVisible: setIsEditDrawer },
    view: { visible: isViewDrawer, setVisible: setIsViewDrawer },
  };
};

export default useDrawerVisibility;
