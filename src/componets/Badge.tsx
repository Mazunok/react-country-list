import { IBadge } from "../types";

export const Badge = ({ color, label, value }: IBadge) => {
  return (
    <p className={`badge bg-${color} col-2 p-2 fs-6`}>{`${label}: ${value}`}</p>
  );
};
