import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useSelectorTS = useSelector.withTypes<RootState>()
export const useDispatchTS = useDispatch.withTypes<AppDispatch>()