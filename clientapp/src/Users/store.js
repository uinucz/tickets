import UserStore from "./userStore"
import CommonStore from "./commonStore"
import { useContext, createContext } from "react"

export const store = {
	userStore: new UserStore(),
	commonStore: new CommonStore(),
}
export const StoreContext = createContext(store)

export function useStore() {
	return useContext(StoreContext)
}
