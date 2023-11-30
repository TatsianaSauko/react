import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { formAction } from "../redux/slices/formSlice";

const actions = {
  ...formAction,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
