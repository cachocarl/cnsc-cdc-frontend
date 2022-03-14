import { useState } from "react";

const useDrawerVisibility = () => {
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [viewVisible, setViewVisible] = useState(false);

  return {
    add: { visible: addVisible, setVisible: setAddVisible },
    edit: { visible: editVisible, setVisible: setEditVisible },
    view: { visible: viewVisible, setVisible: setViewVisible },
  };
};

export default useDrawerVisibility;
