import dayjs from "dayjs";

export function capitalizer(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatDayMonthYear = (fecha: string): string => {
  return dayjs(fecha).format("DD-MM-YYYY");
};

export const formatDateForAPI = (date) => {
  return date ? dayjs(date).format("YYYY-MM-DD") : "";
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getMonthName = (monthNumber) => {
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return monthNames[monthNumber - 1] || "Mes inválido";
};