import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
	{ path: "/members/:id" },
	{ path: "/users/:id" },
	{ path: "/add-user" },
	{ path: "/beneficiaries/:beneficiaryId" },
	{ path: "/help-and-support" },
	{ path: "/unauthorized" },
];

const useCurrentPath = () => {
	const location = useLocation();
	const matchRoute = matchRoutes(routes, location)?.find(
		(m) => m.pathname === location.pathname,
	);

	//if we identify the route in our routes array, return the path, otherwise the current location
	return matchRoute?.route?.path || location.pathname;
};

export default useCurrentPath;
