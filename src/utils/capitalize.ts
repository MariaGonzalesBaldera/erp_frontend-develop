import dayjs from "dayjs";

export function capitalizer(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatDayMonthYear = (fecha: string): string => {
    return dayjs(fecha).format("DD-MM-YYYY");
  };