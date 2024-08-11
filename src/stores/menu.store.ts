import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the interface for a menu item
export interface MenuItem {
	id: string;
	icon: string;
	title: string;
	route: string;
	type: "parent" | "link" | "child" | "action";
	open: boolean;
	active: boolean;
	children?: MenuItem[];
}

// Define the interface for the store's state
interface MenuStore {
	menuItems: MenuItem[];
	addMenuItem: (item: MenuItem) => void;
	setMenuItems: (items: MenuItem[]) => void;
	toggleOpen: (id: string) => void;
	setActive: (id: string) => void;
}

// Create the store
export const useMenuStore = create<MenuStore>()(
	persist(
		(set, get) => ({
			menuItems: [],
			addMenuItem: (item) =>
				set((state) => ({ menuItems: [...state.menuItems, item] })),
			setMenuItems: (items) => set({ menuItems: items }),
			toggleOpen: (id) =>
				set((state) => ({
					menuItems: state.menuItems.map((item) =>
						item.id === id ? { ...item, open: !item.open } : item,
					),
				})),
			setActive: (id) =>
				set((state) => ({
					menuItems: state.menuItems.map((item) =>
						item.id === id
							? { ...item, active: true }
							: { ...item, active: false },
					),
				})),
		}),
		{
			name: "MenuStore",
		},
	),
);
